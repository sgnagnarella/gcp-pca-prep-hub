const { chromium } = require('playwright');
const path = require('path');

(async () => {
    console.log("Launching browser...");
    const browser = await chromium.launch({ headless: true });
    const context = await browser.newContext();
    const page = await context.newPage();

    // Catch and print page console errors/logs
    page.on('console', msg => {
        if (msg.type() === 'error') {
            console.error(`Page error: ${msg.text()}`);
        } else {
            console.log(`Page log: ${msg.text()}`);
        }
    });

    page.on('pageerror', err => {
        console.error(`Unhandled Page Exception: ${err.message}`);
    });

    // Handle dialog alerts
    page.on('dialog', async dialog => {
        console.log(`Dialog opened: [${dialog.type()}] "${dialog.message()}"`);
        await dialog.accept();
        console.log("Dialog accepted.");
    });

    try {
        console.log("Navigating to http://localhost:8000/ ...");
        await page.goto('http://localhost:8000/', { waitUntil: 'networkidle' });

        console.log("Page loaded. Checking title...");
        const title = await page.title();
        console.log(`Title: ${title}`);
        if (!title.includes("GCP Professional Cloud Architect")) {
            throw new Error(`Unexpected page title: ${title}`);
        }

        console.log("Clicking 'Mock Exam' tab...");
        await page.click('#tab-exam');

        console.log("Verifying setup screen visibility and initial question count...");
        const totalLabel = await page.textContent('#import-total-label');
        console.log(`Total label: "${totalLabel}"`);
        if (!totalLabel.includes("Total Questions: 200 (0 Custom Imported)")) {
            throw new Error(`Unexpected initial questions count label: ${totalLabel}`);
        }

        console.log("Selecting 'Study Flashcards' mode...");
        await page.click('#mode-btn-study');

        console.log("Checking if mode-btn-study is active...");
        const isActive = await page.evaluate(() => {
            return document.getElementById('mode-btn-study').classList.contains('active');
        });
        console.log(`Study Mode active: ${isActive}`);
        if (!isActive) {
            throw new Error("Study mode button did not become active.");
        }

        console.log("Selecting '10 Questions' count limit...");
        await page.selectOption('#exam-count-selector', '10');

        console.log("Clicking 'Start Session'...");
        await page.click('#exam-setup button.btn-primary');

        console.log("Waiting for quiz to start...");
        await page.waitForSelector('#exam-active', { state: 'visible' });

        const timerText = await page.textContent('#exam-timer');
        console.log(`Timer text: "${timerText}"`);
        if (timerText !== "Study Mode") {
            throw new Error(`Expected timer to display 'Study Mode' but got '${timerText}'`);
        }

        const questionTitle = await page.textContent('#question-title');
        console.log(`Question Title: "${questionTitle}"`);
        if (!questionTitle.includes("Question 1 of 10")) {
            throw new Error(`Unexpected question progress text: ${questionTitle}`);
        }

        console.log("Selecting first answer option card...");
        await page.click('#opt-card-0');

        console.log("Clicking 'Reveal Answer'...");
        await page.click('#btn-submit');

        console.log("Verifying explanation card is visible...");
        await page.waitForSelector('#explanation-card', { state: 'visible' });
        const expHeader = await page.textContent('#explanation-header');
        console.log(`Explanation outcome header: "${expHeader}"`);

        console.log("Clicking 'Next Question'...");
        await page.click('#btn-next');

        console.log("Resetting to setup view...");
        await page.evaluate(() => Quiz.restartExamSetup());
        await page.waitForSelector('#exam-setup', { state: 'visible' });

        console.log("Uploading dummy JSON custom question bank...");
        const fileInput = await page.$('#import-file-input');
        const jsonPath = path.resolve(__dirname, 'dummy_questions.json');
        await fileInput.setInputFiles(jsonPath);

        // Wait brief moment for the alert dialog flow to complete
        await page.waitForTimeout(1000);

        console.log("Verifying updated total question count...");
        const updatedTotalLabel = await page.textContent('#import-total-label');
        console.log(`Updated total label: "${updatedTotalLabel}"`);
        if (!updatedTotalLabel.includes("Total Questions: 201 (1 Custom Imported)")) {
            throw new Error(`Import verification failed. Label: ${updatedTotalLabel}`);
        }

        console.log("Checking if option value 'all' shows updated total count...");
        const selectOptions = await page.evaluate(() => {
            const select = document.getElementById('exam-count-selector');
            const options = Array.from(select.options);
            return options.map(opt => ({ value: opt.value, text: opt.text }));
        });
        console.log("Select dropdown options:", selectOptions);
        const allOption = selectOptions.find(opt => opt.value === 'all');
        if (!allOption || !allOption.text.includes("201")) {
            throw new Error(`Selector 'all' option did not update. Option: ${JSON.stringify(allOption)}`);
        }

        console.log("Starting session with 201 questions to verify stability...");
        await page.selectOption('#exam-count-selector', 'all');
        await page.click('#exam-setup button.btn-primary');
        await page.waitForSelector('#exam-active', { state: 'visible' });

        const activeQuestionTitle = await page.textContent('#question-title');
        console.log(`Active session title: "${activeQuestionTitle}"`);
        if (!activeQuestionTitle.includes("Question 1 of 201")) {
            throw new Error(`Unexpected custom session title: ${activeQuestionTitle}`);
        }

        console.log("\nALL VERIFICATION TESTS PASSED SUCCESSFULLY! ✅");
    } catch (err) {
        console.error("\nTEST FAILED ❌");
        console.error(err);
        process.exit(1);
    } finally {
        await browser.close();
        console.log("Browser closed.");
    }
})();
