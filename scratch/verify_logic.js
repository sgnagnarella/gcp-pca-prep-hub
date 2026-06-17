/**
 * GCP Prep Hub - In-Memory Integration & Logic Tests
 * Validates the core JS modules under a mocked DOM environment
 */

const fs = require('fs');
const path = require('path');

console.log("Setting up mock browser environment...");

// Mock LocalStorage
const storage = {};
const localStorageMock = {
    getItem: (key) => storage[key] || null,
    setItem: (key, val) => { storage[key] = String(val); },
    removeItem: (key) => { delete storage[key]; },
    clear: () => { for (let k in storage) delete storage[k]; }
};

// Create a robust Mock Element constructor
class MockElement {
    constructor(id = '', tagName = 'div') {
        this.id = id;
        this.tagName = tagName;
        this.style = {};
        this.classList = {
            classes: new Set(),
            add: (c) => this.classList.classes.add(c),
            remove: (c) => this.classList.classes.delete(c),
            contains: (c) => this.classList.classes.has(c)
        };
        this.children = [];
        this.innerText = '';
        this.innerHTML = '';
        this.value = '';
        this.checked = false;
        this.dataset = {};
    }

    appendChild(child) {
        this.children.push(child);
        return child;
    }

    addEventListener(event, callback) {
        this[event + 'Callback'] = callback;
    }
}

// Mock Document and Global window
const elementsById = {};
const querySelectors = {};

const documentMock = {
    getElementById: (id) => {
        if (!elementsById[id]) {
            elementsById[id] = new MockElement(id);
        }
        return elementsById[id];
    },
    querySelector: (selector) => {
        if (selector === '.mode-switch-btn.active') {
            const btnPractice = documentMock.getElementById('mode-btn-practice');
            const btnStudy = documentMock.getElementById('mode-btn-study');
            if (btnStudy.classList.contains('active')) {
                return btnStudy;
            }
            return btnPractice;
        }
        if (!querySelectors[selector]) {
            querySelectors[selector] = new MockElement();
        }
        return querySelectors[selector];
    },
    querySelectorAll: (selector) => {
        if (selector === '.category-select-item input[type="checkbox"]') {
            // Return checkboxes representing categories
            const cb1 = new MockElement('', 'input');
            cb1.value = 'Part I: Operations & Developer Tools';
            cb1.checked = false;

            const cb2 = new MockElement('', 'input');
            cb2.value = 'Part II: Networking & Load Balancing';
            cb2.checked = false;

            return [cb1, cb2];
        }
        if (selector === '.nav-item' || selector === '.notes-nav-btn' || selector === '.mode-switch-btn') {
            return [new MockElement(), new MockElement()];
        }
        return [];
    },
    createElement: (tag) => {
        return new MockElement('', tag);
    }
};

// Expose globals
global.window = global;
global.document = documentMock;
global.localStorage = localStorageMock;
global.alert = (msg) => console.log(`[ALERT]: ${msg}`);
global.confirm = (msg) => {
    console.log(`[CONFIRM]: ${msg}`);
    return true;
};

// Mock FileReader
global.FileReader = class {
    readAsText(file) {
        // Mock file loading trigger
        if (this.onload) {
            this.onload({
                target: {
                    result: file.content
                }
            });
        }
    }
};

// Load question list and notes database
console.log("Loading JS files into context...");

const loadScript = (filePath) => {
    let code = fs.readFileSync(path.resolve(__dirname, '..', filePath), 'utf8');
    
    // Replace top-level const declarations with global assignments so they attach to global/window
    code = code.replace(/const questionsList\s*=/, "global.questionsList =");
    code = code.replace(/const notesData\s*=/, "global.notesData =");
    
    // Run the code in current global scope
    const evalScript = new Function(code);
    evalScript.call(global);
};

// 1. Data layers
loadScript('js/data/questions.js');
loadScript('js/data/notes.js');

// Verify default variables are loaded
if (!global.questionsList || !global.notesData) {
    console.error("Failed to load questions or notes data arrays!");
    process.exit(1);
}
console.log(`Verified data files: ${global.questionsList.length} questions, ${Object.keys(global.notesData).length} notes sections.`);

// 2. Logic Modules
loadScript('js/modules/ui.js');
loadScript('js/modules/quiz.js');
loadScript('js/modules/assessment.js');
loadScript('js/modules/planner.js');
loadScript('js/main.js');

// Helper to assert conditions
const assert = (condition, message) => {
    if (!condition) {
        console.error(`❌ ASSERTION FAILED: ${message}`);
        process.exit(1);
    } else {
        console.log(`✅ ${message}`);
    }
};

console.log("\nStarting logical unit tests...\n");

// --- TEST 1: Default Master Database Size ---
console.log("--- TEST 1: Master Database Init ---");
global.loadStorage();
assert(global.masterQuestionsList.length === 300, `Expected 300 default questions, got ${global.masterQuestionsList.length}`);

// --- TEST 2: Quiz Count Selection & Start ---
console.log("\n--- TEST 2: Quiz Selection & Start ---");
// Mock exam setup inputs
document.getElementById('exam-count-selector').value = '10';
document.getElementById('mode-btn-practice').dataset.mode = 'practice';
document.getElementById('mode-btn-practice').classList.add('active');

global.Quiz.startExam();
const activeExamLength = elementsById['question-title'].innerText;
console.log(`Quiz started active exam length trace: ${activeExamLength}`);
assert(activeExamLength.includes('of 10'), `Expected 10 questions in active exam, got label: ${activeExamLength}`);

// --- TEST 3: Quiz Answers & Statistics Calculations ---
console.log("\n--- TEST 3: Practice Quiz Answers & Statistics ---");
// Simulate answering all 10 questions correctly
// We want to force correct selections
for (let i = 0; i < 10; i++) {
    // Current question index is managed in quiz.js closure
    // But we can check that Quiz.submitAnswer evaluates selectedOption
    // Let's choose the correct answer for each question
    const q = elementsById['question-text'].innerText;
    // Find the question object in master list matching the text
    const questionObj = global.masterQuestionsList.find(item => item.question === q);
    
    // Select the correct answer index
    global.Quiz.selectOption(questionObj.answer);
    global.Quiz.submitAnswer();
    global.Quiz.nextQuestion();
}

// Check if stats are recorded correctly
assert(global.stats.completedCount === 1, `Expected 1 completed exam, got ${global.stats.completedCount}`);
assert(global.stats.bestScore === 100, `Expected best score to be 100%, got ${global.stats.bestScore}%`);

// --- TEST 4: Study Flashcard Mode (No Stats Impact) ---
console.log("\n--- TEST 4: Study Mode (Untimed, No Stats Impact) ---");
const initialCompletedCount = global.stats.completedCount;

// Set study mode active
document.getElementById('mode-btn-study').dataset.mode = 'study';
document.getElementById('mode-btn-study').classList.add('active');
document.getElementById('mode-btn-practice').classList.remove('active');
document.getElementById('exam-count-selector').value = '5';

global.Quiz.startExam();
assert(elementsById['exam-timer'].innerText === 'Study Mode', "Timer label should display 'Study Mode' in study mode.");

// Answer 5 questions
for (let i = 0; i < 5; i++) {
    const q = elementsById['question-text'].innerText;
    const questionObj = global.masterQuestionsList.find(item => item.question === q);
    global.Quiz.selectOption(questionObj.answer);
    global.Quiz.submitAnswer();
    global.Quiz.nextQuestion();
}

// Completed exams count should not have increased because it was Study Mode
assert(global.stats.completedCount === initialCompletedCount, `Expected completed count to remain ${initialCompletedCount}, got ${global.stats.completedCount}`);

// --- TEST 5: JSON Custom Ingestion & Persistence ---
console.log("\n--- TEST 5: JSON Question Bank Custom Ingestion ---");
const mockJSONData = [
    {
        "id": 9001,
        "category": "Part I: Operations & Developer Tools",
        "question": "Custom ingested SRE scenario. What is the response to latency anomaly?",
        "options": ["Option A", "Option B", "Option C", "Option D"],
        "answer": 0,
        "explanation": "Custom explanation."
    }
];

// Perform import mock
global.Quiz.handleImport({
    content: JSON.stringify(mockJSONData)
});

assert(global.customQuestionsList.length === 1, `Expected 1 custom question, got ${global.customQuestionsList.length}`);
assert(global.masterQuestionsList.length === 301, `Expected master questions database to grow to 301, got ${global.masterQuestionsList.length}`);

// Verify it persisted in local storage mock
const storedCustom = localStorageMock.getItem('pca_custom_questions');
assert(storedCustom !== null, "Expected custom questions to be saved in localStorage");
assert(JSON.parse(storedCustom).length === 1, "Expected localStorage custom list length to be 1");

// --- TEST 6: Clear Ingested Banks ---
console.log("\n--- TEST 6: Clear Imported Banks ---");
global.Quiz.clearCustom();
assert(global.customQuestionsList.length === 0, `Expected 0 custom questions after clearing, got ${global.customQuestionsList.length}`);
assert(global.masterQuestionsList.length === 300, `Expected master database to reset to 300, got ${global.masterQuestionsList.length}`);

console.log("\n🎉 ALL IN-MEMORY INTEGRATION TESTS COMPLETED SUCCESSFULLY! ✅");
