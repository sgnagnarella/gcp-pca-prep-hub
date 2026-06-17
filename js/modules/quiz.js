/**
 * GCP Professional Cloud Architect (PCA) Prep Hub
 * Quiz Engine Module - Advanced Filters, Modes, and Imports
 */

(function(window) {
    'use strict';

    let currentQuestionIndex = 0;
    let selectedOption = null;
    let activeExam = [];
    let answersGiven = [];
    let examTimerInterval = null;
    let examTimeLeft = 120 * 60; // 120 minutes in seconds
    let isStudyMode = false; // Study Mode vs Practice Mode

    const Quiz = {
        // Starts the exam session based on DOM filters
        startExam: function() {
            const masterList = window.masterQuestionsList || window.questionsList || [];
            if (masterList.length === 0) {
                alert("Error: Questions list is not loaded yet.");
                return;
            }

            // 1. Check selected categories
            const selectedCategories = [];
            document.querySelectorAll('.category-select-item input[type="checkbox"]').forEach(cb => {
                if (cb.checked) {
                    selectedCategories.push(cb.value);
                }
            });

            // Filter questions by categories
            let filteredQuestions = masterList;
            if (selectedCategories.length > 0) {
                filteredQuestions = masterList.filter(q => selectedCategories.includes(q.category));
            }

            // Deduplicate questions to prevent identical templates (with different company names) appearing in the same exam
            filteredQuestions = this.getUniqueQuestions(filteredQuestions);

            if (filteredQuestions.length === 0) {
                alert("No questions match your selected categories. Please adjust your filters.");
                return;
            }

            // 2. Check selected count limit
            const countSelector = document.getElementById('exam-count-selector');
            const targetCount = countSelector ? countSelector.value : '20';
            
            let limit = 20;
            if (targetCount === 'all') {
                limit = filteredQuestions.length;
            } else {
                limit = parseInt(targetCount, 10);
            }

            // 3. Check selected Mode (Practice vs Study)
            const activeModeBtn = document.querySelector('.mode-switch-btn.active');
            isStudyMode = activeModeBtn ? (activeModeBtn.dataset.mode === 'study') : false;

            // Generate active exam list
            activeExam = this.getRandomSubset(filteredQuestions, limit);
            answersGiven = [];
            currentQuestionIndex = 0;
            selectedOption = null;
            examTimeLeft = 120 * 60; // reset to 120m

            // Reset UI containers
            document.getElementById('exam-setup').style.display = 'none';
            document.getElementById('exam-results').style.display = 'none';
            document.getElementById('exam-active').style.display = 'block';

            // Configure timer interface
            const timerEl = document.getElementById('exam-timer');
            if (examTimerInterval) clearInterval(examTimerInterval);

            if (isStudyMode) {
                if (timerEl) {
                    timerEl.innerText = "Study Mode";
                    timerEl.style.color = "var(--gcp-blue)";
                    timerEl.style.background = "var(--bg-tag-info)";
                    timerEl.style.borderColor = "rgba(59, 130, 246, 0.2)";
                }
                document.getElementById('btn-submit').innerText = "Reveal Answer";
            } else {
                if (timerEl) {
                    timerEl.style.color = "var(--gcp-yellow)";
                    timerEl.style.background = "rgba(245, 158, 11, 0.1)";
                    timerEl.style.borderColor = "rgba(245, 158, 11, 0.2)";
                }
                document.getElementById('btn-submit').innerText = "Submit Choice";
                
                this.updateTimerDisplay();
                examTimerInterval = setInterval(() => {
                    examTimeLeft--;
                    if (examTimeLeft <= 0) {
                        clearInterval(examTimerInterval);
                        this.finishExam();
                    } else {
                        this.updateTimerDisplay();
                    }
                }, 1000);
            }

            this.showQuestion();
        },

        // Shuffles and picks a subset of N items
        getRandomSubset: function(arr, n) {
            const shuffled = [...arr].sort(() => 0.5 - Math.random());
            return shuffled.slice(0, Math.min(n, arr.length));
        },

        // Returns only unique questions based on options and explanation to prevent duplicates
        getUniqueQuestions: function(arr) {
            const seen = new Set();
            return arr.filter(q => {
                const key = `${q.explanation}|${q.options ? q.options.join('|') : ''}`;
                if (seen.has(key)) {
                    return false;
                }
                seen.add(key);
                return true;
            });
        },

        updateTimerDisplay: function() {
            const min = Math.floor(examTimeLeft / 60);
            const sec = examTimeLeft % 60;
            const timerEl = document.getElementById('exam-timer');
            if (timerEl) {
                timerEl.innerText = `${min}:${sec < 10 ? '0' : ''}${sec}`;
            }
        },

        // Render current question
        showQuestion: function() {
            selectedOption = null;
            
            document.getElementById('btn-submit').style.display = 'inline-flex';
            document.getElementById('btn-next').style.display = 'none';
            document.getElementById('explanation-card').style.display = 'none';

            const q = activeExam[currentQuestionIndex];
            document.getElementById('question-category').innerText = q.category;
            document.getElementById('question-title').innerText = `Question ${currentQuestionIndex + 1} of ${activeExam.length}`;
            document.getElementById('question-text').innerText = q.question;

            // Calculate progress percent
            const pct = ((currentQuestionIndex + 1) / activeExam.length) * 100;
            document.getElementById('exam-progress-bar').style.width = `${pct}%`;

            // Draw answer options list
            const container = document.getElementById('options-container');
            container.innerHTML = '';

            q.options.forEach((opt, idx) => {
                const optCard = document.createElement('div');
                optCard.className = 'option-card';
                optCard.id = `opt-card-${idx}`;
                optCard.onclick = () => this.selectOption(idx);

                optCard.innerHTML = `
                    <input type="radio" name="option" id="opt-${idx}" value="${idx}">
                    <label for="opt-${idx}">${opt}</label>
                `;
                container.appendChild(optCard);
            });
        },

        // Handle option click selection
        selectOption: function(index) {
            const q = activeExam[currentQuestionIndex];
            
            // Clear current selection highlight
            q.options.forEach((_, idx) => {
                const card = document.getElementById(`opt-card-${idx}`);
                if (card) {
                    card.classList.remove('border-blue-600', 'bg-blue-50', 'ring-2', 'ring-blue-500', 'ring-opacity-20');
                    const radio = document.getElementById(`opt-${idx}`);
                    if (radio) radio.checked = false;
                }
            });

            // Highlight selected card
            selectedOption = index;
            const selectedCard = document.getElementById(`opt-card-${index}`);
            if (selectedCard) {
                selectedCard.classList.add('border-blue-600', 'bg-blue-50', 'ring-2', 'ring-blue-500', 'ring-opacity-20');
                const selectedRadio = document.getElementById(`opt-${index}`);
                if (selectedRadio) selectedRadio.checked = true;
            }
        },

        // Submit answer evaluation
        submitAnswer: function() {
            if (selectedOption === null) {
                alert("Please select an answer option first.");
                return;
            }

            const q = activeExam[currentQuestionIndex];
            const isCorrect = selectedOption === q.answer;
            
            answersGiven.push({
                questionId: q.id,
                category: q.category,
                selected: selectedOption,
                correct: q.answer,
                isCorrect: isCorrect
            });

            // Toggle submission button
            document.getElementById('btn-submit').style.display = 'none';
            document.getElementById('btn-next').style.display = 'inline-flex';

            // Red/Green color feedback on all choices
            q.options.forEach((_, idx) => {
                const card = document.getElementById(`opt-card-${idx}`);
                if (card) {
                    card.onclick = null; // Disable clicking after submission
                    if (idx === q.answer) {
                        card.classList.add('correct');
                    } else if (idx === selectedOption) {
                        card.classList.add('incorrect');
                    }
                }
            });

            // Render explanation card
            const expCard = document.getElementById('explanation-card');
            const expIcon = document.getElementById('explanation-icon');
            const expHeader = document.getElementById('explanation-header');
            const expText = document.getElementById('explanation-text');

            expCard.style.display = 'block';
            expCard.className = 'explanation-card ' + (isCorrect ? 'correct' : 'incorrect');

            if (isCorrect) {
                expIcon.className = 'stat-icon green';
                expIcon.innerHTML = `<svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"></path></svg>`;
                expHeader.innerText = "Correct Choice!";
            } else {
                expIcon.className = 'stat-icon red';
                expIcon.innerHTML = `<svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path></svg>`;
                expHeader.innerText = "Incorrect Choice";
            }
            expText.innerHTML = q.explanation;
        },

        // Proceed to next question or end
        nextQuestion: function() {
            currentQuestionIndex++;
            if (currentQuestionIndex < activeExam.length) {
                this.showQuestion();
            } else {
                this.finishExam();
            }
        },

        // Finalize results and write stats
        finishExam: function() {
            if (examTimerInterval) clearInterval(examTimerInterval);
            
            document.getElementById('exam-active').style.display = 'none';
            document.getElementById('exam-results').style.display = 'block';

            const total = activeExam.length;
            const correctCount = answersGiven.filter(a => a.isCorrect).length;
            const pct = Math.round((correctCount / total) * 100);

            // Record and save stats ONLY in standard Practice Mode
            if (!isStudyMode) {
                const stats = window.stats;
                stats.completedCount++;
                stats.totalScores += pct;
                if (stats.bestScore === null || pct > stats.bestScore) {
                    stats.bestScore = pct;
                }

                // Map and calculate averages for questions answered in each domain
                answersGiven.forEach(ans => {
                    const cat = ans.category;
                    if (stats.categoryAverages[cat]) {
                        stats.categoryAverages[cat].total += ans.isCorrect ? 100 : 0;
                        stats.categoryAverages[cat].count++;
                        stats.categoryAverages[cat].score = Math.round(stats.categoryAverages[cat].total / stats.categoryAverages[cat].count);
                    }
                });

                if (window.saveStorage) {
                    window.saveStorage();
                }

                if (window.updateDashboardStats) {
                    window.updateDashboardStats();
                }
            }

            // Render final page results
            document.getElementById('results-score').innerText = `${correctCount} / ${total}`;
            document.getElementById('results-pct').innerText = `${pct}%`;

            let medal = "🎉";
            let msg = "Phenomenal! You scored above the verified 80% baseline for PCA architect readiness. Keep reviewing weak zones to solid lock a passing scale!";
            if (pct < 70) {
                medal = "📚";
                msg = "A decent foundational showing! However, several key topics require complete structural review. Check out the Skill Level and Study Planner tabs to prioritize chapters.";
            } else if (pct < 90) {
                medal = "🥈";
                msg = "Excellent performance! You're securely in the intermediate-advanced threshold. Dive into details in the Study Planner to polish the remaining modules.";
            }
            
            if (isStudyMode) {
                medal = "📝";
                msg = `Study Mode session complete! You reviewed ${total} questions and got ${correctCount} correct (${pct}%). Note: Study sessions are not written to your cumulative dashboard stats.`;
            }

            document.getElementById('results-medal').innerText = medal;
            document.getElementById('results-msg').innerText = msg;
        },

        // Return to startup view
        restartExamSetup: function() {
            document.getElementById('exam-results').style.display = 'none';
            document.getElementById('exam-setup').style.display = 'block';
        },

        // Toggle Study Mode button active state in setup interface
        selectMode: function(mode) {
            document.querySelectorAll('.mode-switch-btn').forEach(btn => {
                btn.classList.remove('active');
            });
            const activeBtn = document.getElementById(`mode-btn-${mode}`);
            if (activeBtn) {
                activeBtn.classList.add('active');
            }
        },

        // Parse and validate imported file
        handleImport: function(file) {
            if (!file) return;

            const reader = new FileReader();
            reader.onload = function(e) {
                try {
                    const parsed = JSON.parse(e.target.result);
                    if (!Array.isArray(parsed)) {
                        alert("Error: Question bank must be a JSON array of question objects.");
                        return;
                    }

                    // Validate schema
                    let isValid = true;
                    parsed.forEach((q, idx) => {
                        if (!q.category || !q.question || !Array.isArray(q.options) || q.options.length < 2 || typeof q.answer !== 'number' || !q.explanation) {
                            isValid = false;
                            console.error(`Invalid question format at index ${idx}`, q);
                        }
                    });

                    if (!isValid) {
                        alert("Error: Some questions in the JSON file fail to match the required properties schema (category, question, options, answer, explanation). Check console logs for details.");
                        return;
                    }

                    // Add to master registry
                    if (window.addCustomQuestions) {
                        window.addCustomQuestions(parsed);
                        alert(`Successfully imported ${parsed.length} custom questions! They have been merged into your main database bank and will persist across refreshes.`);
                        Quiz.updateExamOptions();
                    }

                } catch (err) {
                    alert("Failed to parse JSON file. Ensure the file contains valid JSON markup.");
                    console.error(err);
                }
            };
            reader.readAsText(file);
        },

        // Clear imported databases
        clearCustom: function() {
            if (confirm("Are you sure you want to clear all imported custom question banks?")) {
                if (window.clearCustomQuestions) {
                    window.clearCustomQuestions();
                    alert("Imported databases cleared successfully.");
                    this.updateExamOptions();
                }
            }
        },

        // Dynamically update drop downs and labels based on current counts
        updateExamOptions: function() {
            const masterList = window.masterQuestionsList || window.questionsList || [];
            const countSelector = document.getElementById('exam-count-selector');
            const totalLabel = document.getElementById('import-total-label');

            if (totalLabel) {
                const customCount = window.customQuestionsList ? window.customQuestionsList.length : 0;
                totalLabel.innerText = `Total Questions: ${masterList.length} (${customCount} Custom Imported)`;
            }

            if (countSelector) {
                // Adjust option limits dynamically
                const lengths = [10, 20, 50, 100, 150, 200];
                const currentVal = countSelector.value;
                countSelector.innerHTML = '';

                lengths.forEach(len => {
                    if (len <= masterList.length) {
                        const opt = document.createElement('option');
                        opt.value = len;
                        opt.innerText = `${len} Questions`;
                        countSelector.appendChild(opt);
                    }
                });

                // Add "All" option
                const allOpt = document.createElement('option');
                allOpt.value = 'all';
                allOpt.innerText = `All Questions (${masterList.length})`;
                countSelector.appendChild(allOpt);

                // Try to restore previous selection
                countSelector.value = currentVal;
                if (!countSelector.value) {
                    countSelector.value = '20';
                }
            }
        }
    };

    // Expose functions globally
    window.Quiz = Quiz;
    window.startExam = Quiz.startExam.bind(Quiz);
    window.submitAnswer = Quiz.submitAnswer.bind(Quiz);
    window.nextQuestion = Quiz.nextQuestion.bind(Quiz);
    window.restartExamSetup = Quiz.restartExamSetup.bind(Quiz);

})(window);
