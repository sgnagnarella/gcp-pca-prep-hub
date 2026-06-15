/**
 * GCP Professional Cloud Architect (PCA) Prep Hub
 * UI Controller Module
 */

(function(window) {
    'use strict';

    const UI = {
        // Switch between dashboard, exam, assessment, planner, notes
        switchTab: function(tabId) {
            // Hide all tab content containers
            document.querySelectorAll('.tab-content').forEach(el => {
                el.classList.remove('active');
            });

            // Show selected container
            const targetContent = document.getElementById('content-' + tabId);
            if (targetContent) {
                targetContent.classList.add('active');
            }

            // Reset navigation menu items
            document.querySelectorAll('.nav-item').forEach(btn => {
                btn.classList.remove('active');
            });

            // Set current nav item to active
            const activeBtn = document.getElementById('tab-' + tabId);
            if (activeBtn) {
                activeBtn.classList.add('active');
            }

            // Custom renders on tab focus
            if (tabId === 'assessment' && window.Assessment) {
                window.Assessment.renderLevels();
            } else if (tabId === 'planner' && window.Planner) {
                window.Planner.renderPlanner();
            } else if (tabId === 'exam' && window.Quiz) {
                window.Quiz.updateExamOptions();
            }

            // Scroll main content to top
            window.scrollTo({ top: 0, behavior: 'smooth' });
        },

        // Switch notes modules index and load dynamically from notesData database
        selectNoteSection: function(partId) {
            const data = window.notesData ? window.notesData[partId] : null;
            const container = document.getElementById('notes-content-container');
            
            if (data && container) {
                container.innerHTML = `
                    <div class="notes-header">
                        <span class="hero-tag">
                            ${data.title} &amp; ${data.sybex}
                        </span>
                        <h3 style="margin-top: 0.5rem; font-size: 1.6rem; font-weight: 800;">${data.title}</h3>
                        <p style="color: var(--text-secondary); font-size: 0.95rem; margin-top: 0.5rem; line-height: 1.5;">${data.intro}</p>
                    </div>
                    <div class="rich-content">
                        ${data.content}
                    </div>
                    <div class="notes-references">
                        <h5 style="font-size: 0.85rem; font-weight: 800; text-transform: uppercase; color: var(--text-primary); margin-bottom: 0.75rem; border-bottom: 1px solid var(--border-color); padding-bottom: 0.25rem;">Recommended Readings &amp; Reference Sources</h5>
                        <div style="display: flex; flex-direction: column; gap: 0.75rem; font-size: 0.85rem; color: var(--text-secondary);">
                            <p><strong>Dan Sullivan Sybex Guide Reference:</strong> ${data.sybex}</p>
                            <div>
                                <strong>Official Documentation Links:</strong><br>
                                <div style="display: flex; flex-wrap: wrap; gap: 0.75rem; margin-top: 0.35rem;">
                                    ${data.docs.map(doc => `<a href="${doc.url}" target="_blank" style="color: var(--gcp-blue); text-decoration: none; font-weight: 600;">${doc.name} &rarr;</a>`).join('')}
                                </div>
                            </div>
                        </div>
                    </div>
                `;
            }

            // Update navigation button active state
            document.querySelectorAll('.notes-nav-btn').forEach(btn => {
                btn.classList.remove('active');
            });

            const activeBtn = document.getElementById('btn-note-' + partId);
            if (activeBtn) {
                activeBtn.classList.add('active');
            }
        },

        // Quick jump link from main page syllabus lists directly to cheat sheet tab
        showSectionNotes: function(partId) {
            this.switchTab('notes');
            this.selectNoteSection(partId);
        },

        // Toggle light / dark mode themes
        toggleTheme: function() {
            const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
            const newTheme = currentTheme === 'light' ? 'dark' : 'light';
            
            document.documentElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('pca_theme', newTheme);
            
            this.updateThemeButtonLabel(newTheme);
        },

        updateThemeButtonLabel: function(theme) {
            const btn = document.getElementById('theme-toggle-btn');
            if (btn) {
                if (theme === 'light') {
                    btn.innerHTML = `
                        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                        </svg>
                        <span>Dark Mode</span>
                    `;
                } else {
                    btn.innerHTML = `
                        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <circle cx="12" cy="12" r="5"></circle>
                            <line x1="12" y1="1" x2="12" y2="3"></line>
                            <line x1="12" y1="21" x2="12" y2="23"></line>
                            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                            <line x1="1" y1="12" x2="3" y2="12"></line>
                            <line x1="21" y1="12" x2="23" y2="12"></line>
                            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                        </svg>
                        <span>Light Mode</span>
                    `;
                }
            }
        },

        // Initialize Theme from Storage
        initTheme: function() {
            const savedTheme = localStorage.getItem('pca_theme') || 'dark';
            document.documentElement.setAttribute('data-theme', savedTheme);
            this.updateThemeButtonLabel(savedTheme);
        },

        // Initialize drag-and-drop handlers for JSON file uploader
        initDragAndDrop: function() {
            const dropzone = document.getElementById('import-dropzone');
            const fileInput = document.getElementById('import-file-input');

            if (!dropzone || !fileInput) return;

            dropzone.onclick = function() {
                fileInput.click();
            };

            fileInput.onchange = function(e) {
                if (e.target.files.length > 0) {
                    if (window.Quiz) {
                        window.Quiz.handleImport(e.target.files[0]);
                    }
                }
            };

            dropzone.ondragover = function(e) {
                e.preventDefault();
                dropzone.classList.add('dragover');
            };

            dropzone.ondragleave = function(e) {
                e.preventDefault();
                dropzone.classList.remove('dragover');
            };

            dropzone.ondrop = function(e) {
                e.preventDefault();
                dropzone.classList.remove('dragover');
                if (e.dataTransfer.files.length > 0) {
                    if (window.Quiz) {
                        window.Quiz.handleImport(e.dataTransfer.files[0]);
                    }
                }
            };
        }
    };

    // Expose functions globally for layout onclick bindings
    window.UI = UI;
    window.switchTab = UI.switchTab.bind(UI);
    window.selectNoteSection = UI.selectNoteSection.bind(UI);
    window.showSectionNotes = UI.showSectionNotes.bind(UI);
    window.toggleTheme = UI.toggleTheme.bind(UI);

})(window);
