/**
 * GCP PCA Prep Hub — Auth UI Module
 * Full-screen auth modal (Google + Email/Password) and sidebar user widget.
 */

(function(window) {
    'use strict';

    // ─── Error Code → Human Message ──────────────────────────────────────────
    const ERROR_MESSAGES = {
        'auth/user-not-found':          'No account found with this email.',
        'auth/wrong-password':          'Incorrect password. Please try again.',
        'auth/invalid-credential':      'Invalid email or password.',
        'auth/email-already-in-use':    'An account with this email already exists.',
        'auth/weak-password':           'Password must be at least 6 characters.',
        'auth/invalid-email':           'Please enter a valid email address.',
        'auth/too-many-requests':       'Too many attempts. Please wait and try again.',
        'auth/network-request-failed':  'Network error. Check your connection.',
        'auth/popup-blocked':           'Popup blocked by browser. Please allow popups for this site.',
        'firebase-not-ready':           'Still connecting to auth service. Please try again in a moment.',
    };

    function friendlyError(code) {
        return ERROR_MESSAGES[code] || 'Something went wrong. Please try again.';
    }

    /** Returns false and shows error if FirebaseService is not yet available */
    function firebaseReady(activeTab) {
        if (!window.FirebaseService) {
            showError(activeTab, friendlyError('firebase-not-ready'));
            return false;
        }
        return true;
    }

    // ─── Modal HTML ───────────────────────────────────────────────────────────
    function buildModalHTML() {
        return `
        <div class="auth-modal-backdrop" id="auth-modal-backdrop">
            <div class="auth-modal-card" role="dialog" aria-modal="true" aria-labelledby="auth-modal-title">

                <!-- Branding -->
                <div class="auth-modal-brand">
                    <div class="auth-modal-brand-icon">
                        <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M12 2L2 7v10l10 5 10-5V7L12 2z" />
                            <path d="M12 4v6M12 14v6" />
                            <path d="M4 8l8 4 8-4" />
                            <path d="M4 16l8-4 8 4" />
                            <circle cx="12" cy="12" r="2.5" fill="currentColor" />
                        </svg>
                    </div>
                    <div>
                        <h1 id="auth-modal-title" class="auth-modal-title">GCP Architect Prep Hub</h1>
                        <p class="auth-modal-subtitle">Sign in to sync your progress across devices</p>
                    </div>
                </div>

                <!-- Tab Switcher -->
                <div class="auth-tabs" role="tablist">
                    <button class="auth-tab active" id="auth-tab-signin" role="tab" aria-selected="true"
                        onclick="AuthUI.switchTab('signin')">Sign In</button>
                    <button class="auth-tab" id="auth-tab-signup" role="tab" aria-selected="false"
                        onclick="AuthUI.switchTab('signup')">Sign Up</button>
                </div>

                <!-- Google Sign-In -->
                <button class="auth-google-btn" id="auth-google-btn" onclick="AuthUI.handleGoogle()">
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" class="auth-google-icon">
                        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
                        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                    </svg>
                    <span class="auth-btn-text">Continue with Google</span>
                    <span class="auth-btn-spinner" aria-hidden="true"></span>
                </button>

                <!-- Divider -->
                <div class="auth-divider"><span>or</span></div>

                <!-- Sign In Form -->
                <form class="auth-form" id="auth-form-signin" onsubmit="AuthUI.handleEmailSignIn(event)" novalidate>
                    <div class="auth-field">
                        <label for="signin-email" class="auth-label">Email address</label>
                        <input type="email" id="signin-email" class="auth-input" placeholder="you@example.com" autocomplete="email" required>
                    </div>
                    <div class="auth-field">
                        <label for="signin-password" class="auth-label">Password</label>
                        <input type="password" id="signin-password" class="auth-input" placeholder="Your password" autocomplete="current-password" required>
                    </div>
                    <div class="auth-error" id="auth-error-signin" role="alert" aria-live="polite"></div>
                    <button type="submit" class="auth-submit-btn" id="auth-submit-signin">
                        <span class="auth-btn-text">Sign In</span>
                        <span class="auth-btn-spinner" aria-hidden="true"></span>
                    </button>
                </form>

                <!-- Sign Up Form -->
                <form class="auth-form" id="auth-form-signup" style="display:none;" onsubmit="AuthUI.handleEmailSignUp(event)" novalidate>
                    <div class="auth-field">
                        <label for="signup-name" class="auth-label">Display name</label>
                        <input type="text" id="signup-name" class="auth-input" placeholder="Your name" autocomplete="name" required>
                    </div>
                    <div class="auth-field">
                        <label for="signup-email" class="auth-label">Email address</label>
                        <input type="email" id="signup-email" class="auth-input" placeholder="you@example.com" autocomplete="email" required>
                    </div>
                    <div class="auth-field">
                        <label for="signup-password" class="auth-label">Password</label>
                        <input type="password" id="signup-password" class="auth-input" placeholder="Min. 6 characters" autocomplete="new-password" required>
                    </div>
                    <div class="auth-error" id="auth-error-signup" role="alert" aria-live="polite"></div>
                    <button type="submit" class="auth-submit-btn" id="auth-submit-signup">
                        <span class="auth-btn-text">Create Account</span>
                        <span class="auth-btn-spinner" aria-hidden="true"></span>
                    </button>
                </form>

                <!-- Guest Option -->
                <div class="auth-guest-section">
                    <button class="auth-guest-btn" onclick="AuthUI.continueAsGuest()">
                        Continue as Guest
                    </button>
                    <p class="auth-guest-hint">Progress saved locally on this device only</p>
                </div>
            </div>
        </div>
        `;
    }

    // ─── Loading State ────────────────────────────────────────────────────────
    function setLoading(formId, loading) {
        const btn = document.getElementById(`auth-submit-${formId}`);
        const googleBtn = document.getElementById('auth-google-btn');
        if (!btn) return;
        btn.disabled = loading;
        btn.classList.toggle('loading', loading);
        if (googleBtn) googleBtn.disabled = loading;
    }

    function setGoogleLoading(loading) {
        const btn = document.getElementById('auth-google-btn');
        if (!btn) return;
        btn.disabled = loading;
        btn.classList.toggle('loading', loading);
    }

    function showError(formId, message) {
        const el = document.getElementById(`auth-error-${formId}`);
        if (el) {
            el.textContent = message;
            el.style.display = message ? 'flex' : 'none';
        }
    }

    function clearError(formId) {
        showError(formId, '');
    }

    // ─── AuthUI Public API ────────────────────────────────────────────────────
    const AuthUI = {

        _activeTab: 'signin',

        /** Inject the modal into the DOM if not already present */
        init: function() {
            if (!document.getElementById('auth-modal-backdrop')) {
                const wrapper = document.createElement('div');
                wrapper.id = 'auth-overlay';
                wrapper.innerHTML = buildModalHTML();
                document.body.insertBefore(wrapper, document.body.firstChild);
            }
        },

        showModal: function() {
            const overlay = document.getElementById('auth-overlay');
            if (overlay) {
                overlay.style.display = 'flex';
                // Focus the active form's first input
                setTimeout(() => {
                    const input = document.querySelector(`#auth-form-${this._activeTab} .auth-input`);
                    if (input) input.focus();
                }, 100);
            }
        },

        hideModal: function() {
            const overlay = document.getElementById('auth-overlay');
            if (overlay) overlay.style.display = 'none';
        },

        switchTab: function(tab) {
            this._activeTab = tab;
            ['signin', 'signup'].forEach(t => {
                const tabBtn = document.getElementById(`auth-tab-${t}`);
                const form = document.getElementById(`auth-form-${t}`);
                const isActive = t === tab;
                if (tabBtn) {
                    tabBtn.classList.toggle('active', isActive);
                    tabBtn.setAttribute('aria-selected', isActive);
                }
                if (form) form.style.display = isActive ? 'flex' : 'none';
                clearError(t);
            });
        },

        handleGoogle: async function() {
            if (!firebaseReady(this._activeTab)) return;
            clearError(this._activeTab);
            setLoading(this._activeTab, true);
            setGoogleLoading(true);
            try {
                await window.FirebaseService.signInWithGoogle();
                // onAuthStateChanged fires → hideModal() called there
            } catch(e) {
                showError(this._activeTab, friendlyError(e.code));
            } finally {
                setLoading(this._activeTab, false);
                setGoogleLoading(false);
            }
        },

        handleEmailSignIn: async function(e) {
            e.preventDefault();
            if (!firebaseReady('signin')) return;
            clearError('signin');
            const email = document.getElementById('signin-email').value.trim();
            const password = document.getElementById('signin-password').value;
            if (!email || !password) {
                showError('signin', 'Please fill in all fields.');
                return;
            }
            setLoading('signin', true);
            try {
                await window.FirebaseService.signInWithEmail(email, password);
            } catch(err) {
                showError('signin', friendlyError(err.code));
            } finally {
                setLoading('signin', false);
            }
        },

        handleEmailSignUp: async function(e) {
            e.preventDefault();
            if (!firebaseReady('signup')) return;
            clearError('signup');
            const name = document.getElementById('signup-name').value.trim();
            const email = document.getElementById('signup-email').value.trim();
            const password = document.getElementById('signup-password').value;
            if (!name || !email || !password) {
                showError('signup', 'Please fill in all fields.');
                return;
            }
            setLoading('signup', true);
            try {
                const user = await window.FirebaseService.signUpWithEmail(email, password, name);
                if (window.AuthUI) window.AuthUI.renderWidget(user);
            } catch(err) {
                showError('signup', friendlyError(err.code));
            } finally {
                setLoading('signup', false);
            }
        },

        continueAsGuest: function() {
            window._isGuestMode = true;
            this.hideModal();
            this.renderWidget(null);
            // Guest mode: app runs with localStorage only (no Firestore sync)
        },

        /** Render the sidebar user badge */
        renderWidget: function(user) {
            const container = document.getElementById('auth-widget-container');
            if (!container) return;

            // Make the container visible now that auth is active
            container.style.display = '';

            if (user) {
                const avatarUrl = user.photoURL || '';
                const displayName = user.displayName || user.email || 'User';
                const firstName = displayName.split(' ')[0];

                container.innerHTML = `
                    <div class="auth-user-card">
                        <div class="auth-avatar-wrapper">
                            ${avatarUrl
                                ? `<img src="${avatarUrl}" alt="${displayName}" class="auth-avatar-img" referrerpolicy="no-referrer">`
                                : `<div class="auth-avatar-placeholder">${firstName.charAt(0).toUpperCase()}</div>`
                            }
                            <span class="auth-status-dot"></span>
                        </div>
                        <div class="auth-user-info">
                            <span class="auth-user-name">${firstName}</span>
                            <span class="auth-user-label">Progress synced</span>
                        </div>
                        <button class="auth-signout-btn" onclick="window.FirebaseService.signOutUser()" title="Sign out">
                            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
                                <polyline points="16 17 21 12 16 7"/>
                                <line x1="21" y1="12" x2="9" y2="12"/>
                            </svg>
                        </button>
                    </div>
                `;
            } else if (window._isGuestMode) {
                container.innerHTML = `
                    <div class="auth-guest-card">
                        <div class="auth-avatar-wrapper">
                            <div class="auth-avatar-placeholder" style="background: var(--text-muted); border-color: var(--border-color); color: var(--text-secondary);">G</div>
                        </div>
                        <div class="auth-user-info">
                            <span class="auth-user-name">Guest Mode</span>
                            <span class="auth-user-label" style="color: var(--text-muted);">Local saving only</span>
                        </div>
                        <button class="auth-signout-btn" onclick="AuthUI.showModal()" title="Sign In" style="color: var(--gcp-blue); background: rgba(59, 130, 246, 0.1);">
                            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/>
                                <polyline points="10 17 15 12 10 7"/>
                                <line x1="15" y1="12" x2="3" y2="12"/>
                            </svg>
                        </button>
                    </div>
                `;
            } else {
                container.innerHTML = '';
            }
        }
    };

    window.AuthUI = AuthUI;

    // Auto-init + show modal once DOM is ready.
    // Note: firebase.js is type="module" so it runs AFTER regular scripts.
    // The modal shows immediately; onAuthStateChanged will hide it if user is already signed in.
    function doInit() {
        AuthUI.init();
        // Only show modal if not already signed in (FirebaseService may not be ready yet;
        // onAuthStateChanged in firebase.js will call hideModal() if user is signed in)
        AuthUI.showModal();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', doInit);
    } else {
        doInit();
    }

})(window);
