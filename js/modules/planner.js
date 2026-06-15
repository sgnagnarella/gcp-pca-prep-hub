/**
 * GCP Professional Cloud Architect (PCA) Prep Hub
 * Study Planner Module
 */

(function(window) {
    'use strict';

    // Checklist state object
    let plannerProgress = {};

    // Mapping domain to material recommendations
    const materialMapping = {
        "Part I: Operations & Developer Tools": {
            studyGuide: "Chapter 8 (Designing for Reliability) & Chapter 11 (Development and Operations)",
            sebastianGuide: "Part I (Billing constructs, scale and automation, monitoring, testing, CI/CD, operations suite)",
            gcpDocs: [
                { name: "Cloud Monitoring Synthetics", url: "https://cloud.google.com/monitoring/uptime-checks" },
                { name: "BigQuery Billing Exports", url: "https://cloud.google.com/billing/docs/how-to/export-data-bigquery" }
            ],
            checklist: ["Configure a mock Billing Budget Alert", "Deploy a Cloud Build automated trigger", "Understand Latency, Errors, Traffic, Saturation SRE metrics"]
        },
        "Part II: Networking & Load Balancing": {
            studyGuide: "Chapter 6 (Designing Networks)",
            sebastianGuide: "Part II (VPCs, firewalls, Shared VPC, Peering, Hybrid connectivity, Load Balancing)",
            gcpDocs: [
                { name: "Shared VPC Overview", url: "https://cloud.google.com/vpc/docs/shared-vpc" },
                { name: "Dedicated Interconnect HA Guide", url: "https://cloud.google.com/network-connectivity/docs/interconnect/concepts/high-availability-dedicated" }
            ],
            checklist: ["Design a multi-tier Shared VPC architecture", "Review Cloud Load Balancing Decision Tool", "Configure Hybrid DNS with Cloud DNS inbound policies"]
        },
        "Part III: Security, Identity & Compliance": {
            studyGuide: "Chapter 7 (Designing for Security and Legal Compliance)",
            sebastianGuide: "Part III (Cloud Identity, IAM, CMEK/CSEK encryption, Cloud KMS, VPC Service Controls)",
            gcpDocs: [
                { name: "VPC Service Controls Perimeter Guide", url: "https://cloud.google.com/vpc-service-controls/docs/perimeters" },
                { name: "Identity-Aware Proxy (IAP) Overview", url: "https://cloud.google.com/iap/docs/concepts-overview" }
            ],
            checklist: ["Understand custom IAM role constraints", "Map resource policy inheritance hierarchies", "Define a VPC Service Controls data exfiltration perimeter"]
        },
        "Part IV: Storage & Encryption": {
            studyGuide: "Chapter 5 (Designing Storage Systems)",
            sebastianGuide: "Part IV (Cloud Storage tiers, Lifecycles, Versioning, Block storage, Filestore)",
            gcpDocs: [
                { name: "Cloud Storage Classes", url: "https://cloud.google.com/storage/docs/storage-classes" },
                { name: "GCS Lifecycle Policies", url: "https://cloud.google.com/storage/docs/lifecycle" }
            ],
            checklist: ["Verify difference between Coldline and Archive classes", "Implement a bucket lifecycle transition rule", "Understand Filestore NFS multi-attach operations"]
        },
        "Part V: Compute & Virtual Machines": {
            studyGuide: "Chapter 4 (Designing Compute Systems)",
            sebastianGuide: "Part V (Compute Engine, MIG templates, Autohealing, disk snapshot schedules, Spot VMs)",
            gcpDocs: [
                { name: "MIG Autohealing Setup", url: "https://cloud.google.com/compute/docs/instance-groups/creating-groups-of-managed-instances" },
                { name: "Incremental Snapshots Guide", url: "https://cloud.google.com/compute/docs/disks/create-snapshots" }
            ],
            checklist: ["Deploy a Managed Instance Group with HTTP autohealing", "Schedule crash-consistent disk snapshots", "Verify 24-hour Spot VM preemption rules"]
        },
        "Part VI: Managed Compute & Serverless": {
            studyGuide: "Chapter 4 (Designing Compute Systems)",
            sebastianGuide: "Part VI (App Engine Standard vs Flexible, Cloud Functions, Cloud Run container scaling)",
            gcpDocs: [
                { name: "Cloud Run Scaling Concepts", url: "https://cloud.google.com/run/docs/configuring/max-instances" },
                { name: "App Engine Standard vs Flex", url: "https://cloud.google.com/appengine/docs/the-appengine-environments" }
            ],
            checklist: ["Build and run a container on Cloud Run", "Verify scale-to-zero latency profiles", "Understand App Engine Flex OS customize configurations"]
        },
        "Part VII: Google Kubernetes Engine": {
            studyGuide: "Chapter 4 (Designing Compute Systems)",
            sebastianGuide: "Part VII (GKE Autopilot vs Standard, Pods, Deployments, Services, Rollbacks)",
            gcpDocs: [
                { name: "GKE Autopilot Architecture", url: "https://cloud.google.com/kubernetes-engine/docs/concepts/autopilot-overview" },
                { name: "Roll back a Deployment", url: "https://cloud.google.com/kubernetes-engine/docs/how-to/updating-apps" }
            ],
            checklist: ["Practice kubectl rollout undo commands", "Deploy a GKE Autopilot stateful workload", "Review Kubernetes DaemonSet log-forwarding configurations"]
        },
        "Part VIII: Hybrid, Multi-Cloud & Anthos": {
            studyGuide: "Chapter 6 & 12 (Migration & Connectivity)",
            sebastianGuide: "Part VIII (Anthos GKE Enterprise, Anthos Config Management ACM, Anthos Service Mesh ASM)",
            gcpDocs: [
                { name: "ACM GitOps Framework", url: "https://cloud.google.com/anthos-config-management/docs/overview" },
                { name: "Anthos Service Mesh mTLS", url: "https://cloud.google.com/service-mesh/docs/overview" }
            ],
            checklist: ["Structure a multi-cluster ACM Git repository", "Verify ASM mutual TLS (mTLS) configurations", "Map out GKE on-premise Anthos bare-metal setups"]
        },
        "Part IX: Databases & Data Tooling": {
            studyGuide: "Chapter 5 (Designing Storage Systems)",
            sebastianGuide: "Part IX (Cloud SQL HA, Spanner global ACID, AlloyDB, BigQuery partition, Dataflow pipelines)",
            gcpDocs: [
                { name: "Spanner Global Consistency", url: "https://cloud.google.com/spanner/docs/whitepapers/life-of-a-read-write-transaction" },
                { name: "BigQuery Partitioning Guide", url: "https://cloud.google.com/bigquery/docs/partitioned-tables" }
            ],
            checklist: ["Set up daily Partitioning + Clustering on web clickstream logs in BigQuery", "Configure multi-region HA databases", "Differentiate Dataflow stream processing from Datastream CDC"]
        },
        "Part X: Case Studies & SRE": {
            studyGuide: "Chapter 1, 2, 9, 10 (Exam Introduction, Business requirements, SRE concepts)",
            sebastianGuide: "Part X (Mountkirk Games, TerramEarth, Dress4Win, EHR Healthcare case mapping, SRE chapters, Error Budgets)",
            gcpDocs: [
                { name: "Official PCA Case Studies", url: "https://cloud.google.com/learn/certification/cloud-architect" },
                { name: "Google SRE Books", url: "https://sre.google/books/" }
            ],
            checklist: ["Map Mountkirk Games business priorities to Pub/Sub + Bigtable", "Calculate 99.9% rolling monthly SLO Error Budgets", "Synthesize TerramEarth sensor upload batches to GCS + Dataflow"]
        }
    };

    const Planner = {
        // Load checklists state from local storage
        loadProgress: function() {
            const savedPlanner = localStorage.getItem('pca_planner');
            if (savedPlanner) {
                plannerProgress = JSON.parse(savedPlanner);
            } else {
                plannerProgress = {};
            }
        },

        // Save progress to local storage
        saveProgress: function() {
            localStorage.setItem('pca_planner', JSON.stringify(plannerProgress));
        },

        // Render interactive list of recommended materials and tasks
        renderPlanner: function() {
            const container = document.getElementById('planner-recommendations-container');
            if (!container) return;

            container.innerHTML = '';
            const stats = window.stats;

            Object.keys(materialMapping).forEach((cat, index) => {
                const mapInfo = materialMapping[cat];
                const statsData = stats.categoryAverages[cat];
                const score = (statsData && statsData.count > 0) ? statsData.score : 0;

                let levelStatus = "Unverified";
                let statusClass = "status-unverified";
                let badgeClass = "badge-untested";

                if (statsData && statsData.count > 0) {
                    if (score >= 90) {
                        levelStatus = "Mastered";
                        statusClass = "status-master";
                        badgeClass = "badge-master";
                    } else if (score >= 70) {
                        levelStatus = "Review Recommended";
                        statusClass = "status-review";
                        badgeClass = "badge-review";
                    } else {
                        levelStatus = "Critical Study Target";
                        statusClass = "status-critical";
                        badgeClass = "badge-critical";
                    }
                }

                const block = document.createElement('div');
                block.className = `glass-card planner-card ${statusClass}`;

                // Build links list
                let docLinksHtml = '';
                mapInfo.gcpDocs.forEach(d => {
                    docLinksHtml += `<a href="${d.url}" target="_blank" class="mr-4 inline-block font-medium" style="color: var(--gcp-blue); text-decoration: none;">${d.name} &rarr;</a>`;
                });

                // Build checkboxes list
                let checklistHtml = '';
                mapInfo.checklist.forEach((item, chIdx) => {
                    const checkKey = `check-${index}-${chIdx}`;
                    const isChecked = plannerProgress[checkKey] ? 'checked' : '';
                    checklistHtml += `
                        <label class="planner-checklist-item">
                            <input type="checkbox" id="${checkKey}" ${isChecked} onchange="Planner.toggleCheck('${checkKey}')">
                            <span>${item}</span>
                        </label>
                    `;
                });

                block.innerHTML = `
                    <div class="planner-card-header">
                        <div>
                            <span class="part-tag" style="font-size: 0.75rem; font-weight: 800; color: var(--gcp-blue);">Domain Module</span>
                            <h4 style="font-size: 1.1rem; font-weight: 700; margin-top: 0.15rem;">${cat}</h4>
                        </div>
                        <span class="level-badge ${badgeClass}">${levelStatus} (${statsData && statsData.count > 0 ? score + '%' : 'Untested'})</span>
                    </div>
                    <div class="planner-card-body">
                        <div class="planner-references">
                            <h5 style="font-size: 0.8rem; font-weight: 800; text-transform: uppercase; color: var(--text-muted);">Required Reference Materials</h5>
                            <div style="font-size: 0.85rem; color: var(--text-secondary); line-height: 1.5; display: flex; flex-direction: column; gap: 0.5rem;">
                                <p><strong>Dan Sullivan Sybex Guide:</strong> ${mapInfo.studyGuide}</p>
                                <p><strong>Sebastian's Guide:</strong> ${mapInfo.sebastianGuide}</p>
                            </div>
                            <div style="margin-top: 1rem; border-top: 1px solid var(--border-color); padding-top: 1rem;">
                                <h6 style="font-size: 0.8rem; font-weight: 800; color: var(--text-primary); margin-bottom: 0.5rem;">High-Yield Documentation:</h6>
                                <div style="display: flex; flex-wrap: wrap; gap: 0.50rem;">${docLinksHtml}</div>
                            </div>
                        </div>
                        <div class="planner-checklist">
                            <h5 style="font-size: 0.8rem; font-weight: 800; text-transform: uppercase; color: var(--gcp-blue);">Operational Mastery Checkpoints</h5>
                            <div style="display: flex; flex-direction: column; gap: 0.75rem; margin-top: 0.5rem;">
                                ${checklistHtml}
                            </div>
                        </div>
                    </div>
                `;

                container.appendChild(block);
            });
        },

        // Trigger on checkbox click
        toggleCheck: function(key) {
            const checkbox = document.getElementById(key);
            if (checkbox) {
                plannerProgress[key] = checkbox.checked;
                this.saveProgress();
            }
        },

        // Reset check boxes back to default
        resetPlannerProgress: function() {
            if (confirm("Are you sure you want to reset all your operational checklists?")) {
                plannerProgress = {};
                this.saveProgress();
                this.renderPlanner();
            }
        }
    };

    // Expose Planner globally
    window.Planner = Planner;
    window.resetPlannerProgress = Planner.resetPlannerProgress.bind(Planner);

})(window);
