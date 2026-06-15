/**
 * GCP Professional Cloud Architect (PCA) Prep Hub
 * Assessment Tracker Module
 */

(function(window) {
    'use strict';

    const Assessment = {
        // Render detailed skill levels in Level Test Tab
        renderLevels: function() {
            const container = document.getElementById('level-container');
            if (!container) return;

            container.innerHTML = '';
            const stats = window.stats;

            Object.keys(stats.categoryAverages).forEach(cat => {
                const catData = stats.categoryAverages[cat];
                const score = catData.count > 0 ? catData.score : 0;

                let level = "Not Tested";
                let badgeClass = "badge-untested";
                let barClass = "untested";

                if (catData.count > 0) {
                    if (score >= 90) {
                        level = "Advanced";
                        badgeClass = "badge-master";
                        barClass = "master";
                    } else if (score >= 70) {
                        level = "Intermediate";
                        badgeClass = "badge-review";
                        barClass = "review";
                    } else {
                        level = "Beginner";
                        badgeClass = "badge-critical";
                        barClass = "critical";
                    }
                }

                // Create individual skill card
                const card = document.createElement('div');
                card.className = 'glass-card level-card';
                card.innerHTML = `
                    <div class="level-header">
                        <span style="font-size: 0.85rem; font-weight: 700; max-width: 70%;" class="text-secondary-label">${cat}</span>
                        <span class="level-badge ${badgeClass}">${level} ${catData.count > 0 ? '(' + score + '%)' : ''}</span>
                    </div>
                    <div class="level-bar-track">
                        <div class="level-bar ${barClass}" style="width: ${catData.count > 0 ? score : 0}%"></div>
                    </div>
                    <div class="level-meta">
                        <span>Tested: ${catData.count} times</span>
                        <span>Sybex Target: 80%</span>
                    </div>
                `;
                container.appendChild(card);
            });
        }
    };

    // Expose functions globally
    window.Assessment = Assessment;

})(window);
