/**
 * GCP PCA Prep Hub — Firebase Module
 * Firebase App, Auth (Google + Email/Password), Firestore, and auth state.
 */

import { initializeApp } from 'https://www.gstatic.com/firebasejs/11.9.0/firebase-app.js';
import {
    getAuth,
    GoogleAuthProvider,
    signInWithPopup,
    signOut,
    onAuthStateChanged,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
    connectAuthEmulator
} from 'https://www.gstatic.com/firebasejs/11.9.0/firebase-auth.js';
import {
    getFirestore,
    doc,
    getDoc,
    setDoc,
    serverTimestamp,
    connectFirestoreEmulator
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

// Connect to Firebase Emulators in local development
if (location.hostname === "localhost" || location.hostname === "127.0.0.1") {
    connectAuthEmulator(auth, "http://localhost:9099");
    connectFirestoreEmulator(db, "localhost", 8080);
    console.log('[Firebase] Connected to local Emulators (Auth: 9099, Firestore: 8080)');
}

// ─── Firestore Helpers ────────────────────────────────────────────────────────

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

async function loadStatsFromFirestore(uid) {
    try {
        const snap = await getDoc(doc(db, 'users', uid, 'progress', 'stats'));
        if (snap.exists()) {
            const data = snap.data();
            delete data.lastUpdated;
            return data;
        }
        return null;
    } catch (e) {
        console.error('[Firebase] Error loading stats:', e);
        return null;
    }
}

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
        console.log('[Firebase] Signed in:', user.displayName || user.email);

        // Load remote stats
        const remoteStats = await loadStatsFromFirestore(user.uid);
        if (remoteStats) {
            window.stats = remoteStats;
        }

        // Load remote planner
        const remotePlanner = await loadPlannerFromFirestore(user.uid);
        if (remotePlanner !== null && window.Planner) {
            window.Planner.applyRemoteCheckedItems(remotePlanner);
        }

        // Refresh dashboard
        if (window.updateDashboardStats) window.updateDashboardStats();
        if (window.Assessment) window.Assessment.renderLevels();

        // Hide auth modal, show app
        if (window.AuthUI) window.AuthUI.hideModal();

    } else {
        // Show auth modal, hide app
        if (window.AuthUI) window.AuthUI.showModal();
    }

    // Update sidebar widget
    if (window.AuthUI) window.AuthUI.renderWidget(user);
});

// ─── Auth Methods ─────────────────────────────────────────────────────────────

async function signInWithGoogle() {
    try {
        await signInWithPopup(auth, googleProvider);
    } catch (e) {
        if (e.code !== 'auth/popup-closed-by-user' && e.code !== 'auth/cancelled-popup-request') {
            throw e; // re-throw for AuthUI to handle
        }
    }
}

async function signUpWithEmail(email, password, displayName) {
    const credential = await createUserWithEmailAndPassword(auth, email, password);
    if (displayName) {
        await updateProfile(credential.user, { displayName });
    }
    return credential.user;
}

async function signInWithEmail(email, password) {
    const credential = await signInWithEmailAndPassword(auth, email, password);
    return credential.user;
}

async function signOutUser() {
    await signOut(auth);
    window._currentUser = null;
    window._isGuestMode = false;
    if (window.AuthUI) {
        window.AuthUI.renderWidget(null);
        window.AuthUI.showModal();
    }
}

// ─── Expose FirebaseService ───────────────────────────────────────────────────
window.FirebaseService = {
    auth,
    db,
    signInWithGoogle,
    signUpWithEmail,
    signInWithEmail,
    signOutUser,
    saveStatsToFirestore,
    loadStatsFromFirestore,
    savePlannerToFirestore,
    loadPlannerFromFirestore,
    getCurrentUser: () => auth.currentUser
};
