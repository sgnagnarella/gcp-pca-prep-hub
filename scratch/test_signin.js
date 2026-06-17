const { chromium } = require('playwright');

(async () => {
    console.log("Launching browser for testing...");
    const browser = await chromium.launch({ headless: true });
    const context = await browser.newContext();
    const page = await context.newPage();

    page.on('console', msg => {
        console.log(`PAGE LOG: [${msg.type()}] ${msg.text()}`);
    });

    page.on('pageerror', err => {
        console.error(`PAGE EXCEPTION: ${err.message}`);
    });

    try {
        console.log("Navigating to http://localhost:5000/ ...");
        await page.goto('http://localhost:5000/', { waitUntil: 'networkidle' });

        // Fill in email, password
        console.log("Filling Sign In form...");
        await page.fill('#signin-email', 'test@example.com');
        await page.fill('#signin-password', 'password123');

        // Submit
        console.log("Clicking Sign In...");
        await page.click('#auth-submit-signin');

        // Wait a bit to see if we log in or get an error
        await page.waitForTimeout(3000);

        // Get error text if any
        const errorText = await page.textContent('#auth-error-signin');
        console.log(`Signin Error text (if any): "${errorText}"`);

        // Get the active page content or check if user signed in
        const userCard = await page.innerHTML('#auth-widget-container');
        console.log(`User widget HTML: "${userCard}"`);

    } catch (err) {
        console.error("Test error:", err);
    } finally {
        await browser.close();
        console.log("Browser closed.");
    }
})();
