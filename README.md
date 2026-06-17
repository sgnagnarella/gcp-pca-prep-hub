# GCP Professional Cloud Architect (PCA) Prep Hub

A premium, modular study dashboard and practice exam engine designed to help you prepare for and pass the Google Cloud Professional Certified Architect exam.

**Live Deployment URL:** [https://gcp-pca-prep-hub.web.app](https://gcp-pca-prep-hub.web.app)

---

## 🚀 Key Features

*   **Modular Architecture**: Clean separation of structure (`index.html`), premium dark-first styling (`css/styles.css`), content databases (`js/data/`), and functional logic engines (`js/modules/`).
*   **200 Scenario-Based Questions**: A library of 200 high-quality, parameter-interpolated scenario questions matching Google Cloud's official exam style. Covers GCP VPCs, GKE, databases, security, and SRE.
*   **Case Studies Blueprints**: Deep coverage of all major PCA Case Studies:
    *   *Mountkirk Games*
    *   *TerramEarth*
    *   *Dress4Win*
    *   *EHR Healthcare*
    *   *JencoMart*
*   **Session Modes**:
    *   **Practice Exam**: Timed mock exam that records performance metrics and writes cumulative domain statistics to your dashboard.
    *   **Study Flashcards**: Untimed study sessions where choosing an answer immediately highlights correct/incorrect selections and reveals rationale without impacting cumulative stats.
*   **Dynamic JSON Question Ingestion**: A drag-and-drop file uploader allows you to import external question files in `.json` format. Custom questions merge dynamically and persist across page loads using `localStorage`.
*   **Skill Level Assessment**: Automatically calculates and visualizes your domain-specific expertise level (*Beginner*, *Intermediate*, *Advanced*) based on mock exam outcomes.
*   **Actionable Study Planner**: Interactive checklist tasks mapped to your performance levels to help you target and master weak domains.
*   **Cheat Sheets**: Curated reference guides, comparison tables (e.g. Shared VPC vs Peering, App Engine environments), and SRE error budget metrics.

---

## 📂 Project Directory Structure

```text
├── index.html               # Main application visual shell
├── firebase.json            # Firebase Hosting configuration rules
├── .firebaserc              # Project bindings config mapping
├── css/
│   └── styles.css           # Premium HSL dark-first design variables & visual layout rules
├── js/
│   ├── main.js              # Application bootstrapper and localStorage manager
│   ├── data/
│   │   ├── questions.js     # Default 200 scenario questions list
│   │   └── notes.js         # Curated cheat sheets data file
│   └── modules/
│       ├── ui.js            # Sidebar navigation, theme toggles, and dropzone bindings
│       ├── quiz.js          # Practice/Study modes, timers, answers checking, and JSON parsing
│       ├── assessment.js    # Metric calculations and skill mapping
│       └── planner.js       # Interactive checkboxes and material planner
└── scratch/
    ├── generate_questions.py # Python script used to parameterize questions list
    ├── verify_logic.js      # In-memory mock DOM logic test suite
    └── verify_app.js        # Playwright automated browser test script
```

---

## 🛠️ Local Development & Testing

### 1. Launch Local Web Server
Serve the workspace files locally using Python's static server:
```bash
python3 -m http.server 8000
```
Then open `http://localhost:8000/` in your browser.

### 2. Run In-Memory Logic Tests
Run the automated test suite to verify module mechanics, statistics, and JSON ingestion without browser dependencies:
```bash
node scratch/verify_logic.js
```

---

## 🔥 Firebase hosting Deployment

### 1. Setup & Login
Make sure the Firebase CLI is installed and authenticated:
```bash
# Verify CLI installation
npx -y --registry=https://registry.npmjs.org/ firebase-tools@latest --version

# Authenticate with Google account
npx -y --registry=https://registry.npmjs.org/ firebase-tools@latest login
```

### 2. Test locally using Emulator
Serve the application locally using the Firebase Hosting emulator:
```bash
npx -y --registry=https://registry.npmjs.org/ firebase-tools@latest emulators:start --only hosting
```
Open `http://127.0.0.1:5000` to review the local simulation.

### 3. Deploy to Live Production
To upload files to production Hosting:
```bash
npx -y --registry=https://registry.npmjs.org/ firebase-tools@latest deploy --only hosting
```
Live URL will be outputted on success: `https://gcp-pca-prep-hub.web.app`

---

## 📚 Sources & References

The study materials, cheat sheets, and practice scenario questions in this Hub were synthesized from the following reference resources:

1. **Vaquar Khan's Google Certified Architect Resources**: Referenced for exam guidelines, practice scenarios, cheatsheets, and architecture mappings.
   - [Google-Certified-Architect-exam-resources (GitHub)](https://github.com/vaquarkhan/Google-Certified-Architect-exam-resources)
2. **Official Sybex Study Guide**: Study references mapping to Dan Sullivan's *Official Google Cloud Certified Professional Cloud Architect Study Guide*.
   - [Official Google Cloud Certified Professional Cloud Architect Study Guide (PDF on GitHub)](https://github.com/riyaz-programmer/books/blob/master/Official%20Google%20Cloud%20Certified%20Professional%20Cloud%20Architect%20Study%20Guide.pdf)
3. **Sebastian's Certified Study Notes**: Exam briefs and cheat sheet highlights from `sebhook.com`.
   - [Google Cloud Professional Cloud Architect (PCA) Full Exam Guide](https://sebhook.com/2024/08/28/google-cloud-professional-cloud-architect-pca-full-exam-guide/)
4. **Google Cloud Architecture Framework**: Official blueprinted patterns and framework pillars.
   - [Google Cloud Architecture Framework (Official)](https://docs.cloud.google.com/architecture/framework)
5. **Professional Cloud Architect Exam Guide**: Official outline including exam sections, SRE guidance, and case studies (Mountkirk Games, TerramEarth, Dress4Win, EHR Healthcare, and JencoMart).
   - [Professional Cloud Architect Exam Guide (Official PDF)](https://services.google.com/fh/files/misc/professional_cloud_architect_exam_guide_english.pdf)
