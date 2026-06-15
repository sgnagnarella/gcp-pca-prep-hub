/**
 * GCP PCA Prep Hub — Auth UI Module
 * Renders the sign-in / signed-in user widget in the sidebar.
 * Depends on window.FirebaseService being available.
 */

(function(window) {
    'use strict';

    const AuthUI = {
        /**
         * Render the auth widget based on current user state.
         * @param {import('firebase/auth').User|null} user
         */
        render: function(user) {
            const container = document.getElementById('auth-widget-container');
            if (!container) return;

            if (user) {
                // ── Signed-in State ───────────────────────────────────────────
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
            } else {
                // ── Signed-out State ──────────────────────────────────────────
                container.innerHTML = `
                    <button class="auth-signin-btn" id="auth-google-signin-btn" onclick="window.FirebaseService.signInWithGoogle()">
                        <svg viewBox="0 0 24 24" width="16" height="16" fill="none">
                            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
                            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                        </svg>
                        <span>Sign in with Google</span>
                    </button>
                    <p class="auth-signin-hint">Sync progress across devices</p>
                `;
            }
        }
    };

    window.AuthUI = AuthUI;

})(window);
