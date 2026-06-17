/**
 * GCP Professional Cloud Architect (PCA) Prep Hub
 * Main Application Module & Orchestrator
 */

(function(window) {
    'use strict';

    // Global Stats Object
    window.stats = {
        completedCount: 0,
        bestScore: null,
        totalScores: 0,
        categoryAverages: {
            "Part I: Operations & Developer Tools": { score: 0, total: 0, count: 0 },
            "Part II: Networking & Load Balancing": { score: 0, total: 0, count: 0 },
            "Part III: Security, Identity & Compliance": { score: 0, total: 0, count: 0 },
            "Part IV: Storage & Encryption": { score: 0, total: 0, count: 0 },
            "Part V: Compute & Virtual Machines": { score: 0, total: 0, count: 0 },
            "Part VI: Managed Compute & Serverless": { score: 0, total: 0, count: 0 },
            "Part VII: Google Kubernetes Engine": { score: 0, total: 0, count: 0 },
            "Part VIII: Hybrid, Multi-Cloud & Anthos": { score: 0, total: 0, count: 0 },
            "Part IX: Databases & Data Tooling": { score: 0, total: 0, count: 0 },
            "Part X: Case Studies & SRE": { score: 0, total: 0, count: 0 }
        }
    };

    // Question Banks Registry
    window.customQuestionsList = [];
    window.masterQuestionsList = [];

    // Load stats and custom questions from localStorage
    window.loadStorage = function() {
        // Load default statistics from localStorage (fallback when signed out)
        const savedStats = localStorage.getItem('pca_stats');
        if (savedStats) {
            try {
                window.stats = JSON.parse(savedStats);
            } catch (e) {
                console.error("Error parsing saved stats, resetting.", e);
            }
        }

        // Load custom imported questions list
        const savedCustom = localStorage.getItem('pca_custom_questions');
        if (savedCustom) {
            try {
                window.customQuestionsList = JSON.parse(savedCustom);
            } catch (e) {
                console.error("Error parsing custom questions", e);
                window.customQuestionsList = [];
            }
        }

        // Merge standard static questions with dynamically imported questions
        window.masterQuestionsList = [...(window.questionsList || []), ...window.customQuestionsList];
        
        // Ensure planner loads its checklists state
        if (window.Planner) {
            window.Planner.loadProgress();
        }
    };

    // Save stats and custom questions to localStorage AND Firestore (if signed in)
    window.saveStorage = function() {
        localStorage.setItem('pca_stats', JSON.stringify(window.stats));
        localStorage.setItem('pca_custom_questions', JSON.stringify(window.customQuestionsList));

        // Sync to Firestore when a user is signed in (not in guest mode)
        const user = window._currentUser;
        if (user && !window._isGuestMode && window.FirebaseService) {
            window.FirebaseService.saveStatsToFirestore(user.uid, window.stats)
                .catch(e => console.warn('[Main] Firestore stats sync failed:', e));
        }
    };

    // Add new questions into the custom array and update master
    window.addCustomQuestions = function(newQuestions) {
        window.customQuestionsList = [...window.customQuestionsList, ...newQuestions];
        window.masterQuestionsList = [...(window.questionsList || []), ...window.customQuestionsList];
        window.saveStorage();
    };

    // Reset imported custom questions bank
    window.clearCustomQuestions = function() {
        window.customQuestionsList = [];
        window.masterQuestionsList = [...(window.questionsList || [])];
        window.saveStorage();
    };

    // Sync stats directly with Dashboard HTML UI elements
    window.updateDashboardStats = function() {
        const stats = window.stats;
        
        const completedEl = document.getElementById('stats-completed');
        const bestEl = document.getElementById('stats-best');
        const avgEl = document.getElementById('stats-avg');

        if (completedEl) {
            completedEl.innerText = stats.completedCount;
        }
        if (bestEl) {
            bestEl.innerText = stats.bestScore !== null ? `${stats.bestScore}%` : '--';
        }
        if (avgEl) {
            avgEl.innerText = stats.completedCount > 0 
                ? `${Math.round(stats.totalScores / stats.completedCount)}%` 
                : '--';
        }
    };

    // Initialize application on window load
    window.onload = function() {
        // Init styling theme configurations
        if (window.UI) {
            window.UI.initTheme();
            window.UI.initDragAndDrop();
        }

        // Retrieve database cache
        window.loadStorage();

        // Sync values to view widgets
        window.updateDashboardStats();

        // Check if there's any active note elements to render (Part 1 as default active)
        if (window.UI) {
            window.UI.selectNoteSection('part1');
        }
    };

})(window);
