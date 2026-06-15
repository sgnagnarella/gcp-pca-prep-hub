/**
 * GCP PCA Prep Hub — Firebase Module
 * Initializes Firebase App, Auth (Google Sign-In), and Firestore.
 * Exposes window.FirebaseService for use by other modules.
 */

import { initializeApp } from 'https://www.gstatic.com/firebasejs/11.9.0/firebase-app.js';
import {
    getAuth,
    GoogleAuthProvider,
    signInWithPopup,
    signOut,
    onAuthStateChanged
} from 'https://www.gstatic.com/firebasejs/11.9.0/firebase-auth.js';
import {
    getFirestore,
    doc,
    getDoc,
    setDoc,
    serverTimestamp
} from 'https://www.gstatic.com/firebasejs/11.9.0/firebase-firestore.js';

// ─── Firebase Config ──────────────────────────────────────────────────────────
const firebaseConfig = {
    apiKey: "AIzaSyAXO5oRkumU17NxMDiOOqrQyjGlyS7apHc",
    authDomain: "gcp-pca-prep-hub.firebaseapp.com",
    projectId: "gcp-pca-prep-hub",
    storageBucket: "gcp-pca-prep-hub.firebasestorage.app",
    messagingSenderId: "882164524972",
    appId: "1:882164524972:web:6be05aea34a2b8f6dd7c09"
};

// ─── Initialize Services ──────────────────────────────────────────────────────
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const googleProvider = new GoogleAuthProvider();

// ─── Firestore Helpers ────────────────────────────────────────────────────────

/**
 * Save stats object to Firestore for the given user.
 * @param {string} uid
 * @param {object} stats
 */
async function saveStatsToFirestore(uid, stats) {
    try {
        await setDoc(doc(db, 'users', uid, 'progress', 'stats'), {
            ...stats,
            lastUpdated: serverTimestamp()
        });
    } catch (e) {
        console.error('[Firebase] Error saving stats:', e);
    }
}

/**
 * Load stats from Firestore for the given user.
 * Returns null if no document exists.
 * @param {string} uid
 * @returns {object|null}
 */
async function loadStatsFromFirestore(uid) {
    try {
        const snap = await getDoc(doc(db, 'users', uid, 'progress', 'stats'));
        if (snap.exists()) {
            const data = snap.data();
            // Remove Firestore-only field before returning
            delete data.lastUpdated;
            return data;
        }
        return null;
    } catch (e) {
        console.error('[Firebase] Error loading stats:', e);
        return null;
    }
}

/**
 * Save planner checked items to Firestore.
 * @param {string} uid
 * @param {string[]} checkedItems
 */
async function savePlannerToFirestore(uid, checkedItems) {
    try {
        await setDoc(doc(db, 'users', uid, 'progress', 'planner'), {
            checkedItems,
            lastUpdated: serverTimestamp()
        });
    } catch (e) {
        console.error('[Firebase] Error saving planner:', e);
    }
}

/**
 * Load planner checked items from Firestore.
 * Returns null if no document exists.
 * @param {string} uid
 * @returns {string[]|null}
 */
async function loadPlannerFromFirestore(uid) {
    try {
        const snap = await getDoc(doc(db, 'users', uid, 'progress', 'planner'));
        if (snap.exists()) {
            return snap.data().checkedItems || [];
        }
        return null;
    } catch (e) {
        console.error('[Firebase] Error loading planner:', e);
        return null;
    }
}

// ─── Auth State Listener ──────────────────────────────────────────────────────
onAuthStateChanged(auth, async (user) => {
    window._currentUser = user || null;

    if (user) {
        console.log('[Firebase] Signed in as:', user.displayName);

        // Load stats from Firestore and apply to app state
        const remoteStats = await loadStatsFromFirestore(user.uid);
        if (remoteStats) {
            window.stats = remoteStats;
        }

        // Load planner state from Firestore
        const remotePlanner = await loadPlannerFromFirestore(user.uid);
        if (remotePlanner !== null && window.Planner) {
            window.Planner.applyRemoteCheckedItems(remotePlanner);
        }

        // Refresh UI
        if (window.updateDashboardStats) window.updateDashboardStats();
        if (window.Assessment) window.Assessment.render();
    }

    // Update auth UI regardless of state
    if (window.AuthUI) window.AuthUI.render(user);
});

// ─── Sign-In / Sign-Out ───────────────────────────────────────────────────────

async function signInWithGoogle() {
    try {
        await signInWithPopup(auth, googleProvider);
        // onAuthStateChanged will fire automatically and handle data load
    } catch (e) {
        if (e.code !== 'auth/popup-closed-by-user' && e.code !== 'auth/cancelled-popup-request') {
            console.error('[Firebase] Sign-in error:', e);
            alert('Sign-in failed. Please try again.');
        }
    }
}

async function signOutUser() {
    try {
        await signOut(auth);
        window._currentUser = null;
        if (window.AuthUI) window.AuthUI.render(null);
    } catch (e) {
        console.error('[Firebase] Sign-out error:', e);
    }
}

// ─── Expose FirebaseService ───────────────────────────────────────────────────
window.FirebaseService = {
    auth,
    db,
    signInWithGoogle,
    signOutUser,
    saveStatsToFirestore,
    loadStatsFromFirestore,
    savePlannerToFirestore,
    loadPlannerFromFirestore,
    getCurrentUser: () => auth.currentUser
};
