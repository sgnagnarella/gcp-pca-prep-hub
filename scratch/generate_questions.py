#!/usr/bin/env python3
import json
import os

CATEGORIES = [
    "Part I: Operations & Developer Tools",
    "Part II: Networking & Load Balancing",
    "Part III: Security, Identity & Compliance",
    "Part IV: Storage & Encryption",
    "Part V: Compute & Virtual Machines",
    "Part VI: Managed Compute & Serverless",
    "Part VII: Google Kubernetes Engine",
    "Part VIII: Hybrid, Multi-Cloud & Anthos",
    "Part IX: Databases & Data Tooling",
    "Part X: Case Studies & SRE"
]

# Common sources definitions for explanations
SRC_FRAMEWORK = '<a href="https://docs.cloud.google.com/architecture/framework" target="_blank">Google Cloud Architecture Framework</a>'
SRC_GUIDE = '<a href="https://services.google.com/fh/files/misc/professional_cloud_architect_exam_guide_english.pdf" target="_blank">PCA Exam Guide</a>'
SRC_VAQUAR = '<a href="https://github.com/vaquarkhan/Google-Certified-Architect-exam-resources" target="_blank">Vaquar Khan\'s Exam Resources</a>'
SRC_STUDY_GUIDE = '<a href="https://github.com/riyaz-programmer/books/blob/master/Official%20Google%20Cloud%20Certified%20Professional%20Cloud%20Architect%20Study%20Guide.pdf" target="_blank">Official PCA Study Guide</a>'
SRC_SEB = '<a href="https://sebhook.com/2024/08/28/google-cloud-professional-cloud-architect-pca-full-exam-guide/" target="_blank">Sebastian\'s PCA Exam Guide</a>'

# Questions lists
cat1 = []
cat2 = []
cat3 = []
cat4 = []
cat5 = []
cat6 = []
cat7 = []
cat8 = []
cat9 = []
cat10 = []

# ==========================================
# PART I: Operations & Developer Tools
# ==========================================
cat1.append({
    "id": 1,
    "category": CATEGORIES[0],
    "question": "A production microservice experiences sporadic latency spikes. You want to distinguish successful read operations from read errors, and alert on anomalies. Which SRE Golden Signal should be tracked and how should you model this in Cloud Monitoring?",
    "options": [
        "Track Saturation via Disk I/O metrics on the hosting VM.",
        "Track Latency by configuring custom application metrics with the Ops Agent, separating status code 2xx and 5xx response latency, and setting up percentile-based alerts.",
        "Track Traffic via the HTTP load balancer request count metric.",
        "Track Errors by exporting all console logs to a Cloud Storage bucket and searching for HTTP 500 lines daily."
    ],
    "answer": 1,
    "explanation": f"Tracking latency percentiles split by success/failure status allows SREs to isolate slow successful requests from fast error responses. For details, see the {SRC_FRAMEWORK} Operational Excellence pillar and SRE practices in the {SRC_GUIDE}."
})

cat1.append({
    "id": 2,
    "category": CATEGORIES[0],
    "question": "You need to monitor custom application-level metrics from a Go application running on a Compute Engine instance. The metrics are exposed on a Prometheus endpoint. What is the Google-recommended approach to collect them?",
    "options": [
        "Deploy a standalone Prometheus server on the VM to forward metrics to BigQuery.",
        "Install the Ops Agent on the VM, configure the Prometheus receiver in the agent's configuration file, and send them to Cloud Monitoring.",
        "Write a cron job that curls the Prometheus endpoint and writes data using the Cloud Logging API.",
        "Set up an external uptime check to scrape the Prometheus endpoint and alert on failures."
    ],
    "answer": 1,
    "explanation": f"The Cloud Ops Agent natively supports scraping Prometheus metrics from local endpoints on the VM and forwarding them to Cloud Monitoring. For configurations, see the {SRC_VAQUAR} monitoring notes and the {SRC_STUDY_GUIDE} section on Ops Agent capabilities."
})

cat1.append({
    "id": 3,
    "category": CATEGORIES[0],
    "question": "Your team needs to establish a Service Level Objective (SLO) for a critical customer-facing check-out API. How should you define the Service Level Indicator (SLI)?",
    "options": [
        "The percentage of requests that return HTTP status 200 OK within 30 days.",
        "The ratio of the number of valid check-out requests that return within 200 milliseconds to the total number of valid check-out requests, measured over a rolling 30-day window.",
        "The overall CPU utilization of the web server instances hosting the check-out API.",
        "The average response time of the database database connection pool during peak shopping hours."
    ],
    "answer": 1,
    "explanation": f"An SLI should be defined as a ratio of good events to total events (specifically measuring user-centric metrics like request latency thresholds) over a defined measurement window. For detailed guidance, see the SRE and Reliability sections in the {SRC_GUIDE} and {SRC_SEB}."
})

cat1.append({
    "id": 4,
    "category": CATEGORIES[0],
    "question": "Your web application has a target SLO of 99.9% availability over a 30-day window (approx. 43,200 minutes). A recent bug caused a 15-minute outage, and a scheduled migration caused 10 minutes of downtime. What is the state of your monthly error budget?",
    "options": [
        "The error budget is entirely exhausted (100% consumed).",
        "The error budget is unaffected because scheduled maintenance does not count toward the budget.",
        "The total downtime of 25 minutes has consumed approximately 58% of the monthly error budget (which allows 43.2 minutes).",
        "The error budget is breached because any outage exceeding 10 minutes immediately triggers a budget violation."
    ],
    "answer": 2,
    "explanation": f"At 99.9% availability, the allowed budget for downtime is 0.1% of 43,200 minutes = 43.2 minutes. Total downtime (15 + 10) = 25 minutes. 25 / 43.2 = 57.8% of the budget. Refer to SRE calculations in the {SRC_STUDY_GUIDE} and the {SRC_SEB}."
})

cat1.append({
    "id": 5,
    "category": CATEGORIES[0],
    "question": "The security team needs to audit and generate alerts whenever a service account is modified in a production project. Which approach provides near-real-time alerting on administrative changes?",
    "options": [
        "Configure Cloud Storage access logs to record all project-level changes and alert on updates.",
        "Configure a log-based alert in Cloud Logging that triggers when a write activity log is recorded for the IAM service accounts service, and route it to an SMS channel.",
        "Run a scheduled Cloud Function every hour to list service accounts and compare changes with a database.",
        "Use Cloud Trace to detect modifications in service account configurations."
    ],
    "answer": 1,
    "explanation": f"Log-based alerts in Cloud Logging scan Admin Activity logs (which capture write operations on service accounts) and trigger instant notifications. For audit patterns, see {SRC_VAQUAR} security logs and the {SRC_FRAMEWORK} Security pillar."
})

cat1.append({
    "id": 6,
    "category": CATEGORIES[0],
    "question": "Your enterprise compliance guidelines require all audit logs and application logs to be retained for 7 years for analytical queries. Which pipeline configuration should you deploy?",
    "options": [
        "Configure Cloud Logging to store logs in a bucket, and write a script to download them locally.",
        "Set up a log sink to export all logs to a BigQuery dataset, configured with partition expiration matching 7 years, and query them using SQL.",
        "Store logs in standard Persistent Disks and take daily snapshots with a 7-year retention policy.",
        "Route all logs to Pub/Sub and ingest them into a long-running Dataproc cluster."
    ],
    "answer": 1,
    "explanation": f"Log sinks exporting to BigQuery provide cost-efficient storage for long-term retention alongside full SQL analytical capabilities. For log routing guidelines, see the {SRC_STUDY_GUIDE} and {SRC_FRAMEWORK} Operational Excellence pillar."
})

cat1.append({
    "id": 7,
    "category": CATEGORIES[0],
    "question": "Your Google Cloud project is experiencing extremely high Cloud Logging costs due to voluminous verbose debug logs from your Kubernetes containers. You want to filter out debug-level logs before they are stored and charged in Cloud Logging. What should you do?",
    "options": [
        "Delete the Cloud Logging API from your Google Cloud project.",
        "Create log exclusion filters in the default logging bucket settings to exclude logs matching 'severity=DEBUG'.",
        "Configure Cloud Build to prune all logging statements from the source code.",
        "Disable the Ops Agent on all nodes."
    ],
    "answer": 1,
    "explanation": f"Log exclusion filters allow you to discard matching logs (like DEBUG severity logs) at the ingestion point, preventing them from being stored and charged. For cost optimization patterns, check the {SRC_FRAMEWORK} Cost Optimization pillar and {SRC_SEB}."
})

cat1.append({
    "id": 8,
    "category": CATEGORIES[0],
    "question": "Your Cloud Build CI/CD pipeline needs to authenticate to an external API during compilation. The pipeline needs to access a secure token. How should you design the pipeline to handle this secret securely?",
    "options": [
        "Store the token as a plaintext variable in the cloudbuild.yaml file.",
        "Check the token into the Git repository along with the source code.",
        "Store the token in Secret Manager, grant the Cloud Build Service Account access to the secret, and reference it in the cloudbuild.yaml using the Secret Manager integration.",
        "Input the token manually via SSH during the Cloud Build execution."
    ],
    "answer": 2,
    "explanation": f"Secret Manager integrates with Cloud Build to securely resolve secrets at runtime, preventing plain-text tokens from leaking into code repositories or build logs. For security practices, see the {SRC_STUDY_GUIDE} and {SRC_VAQUAR} CI/CD notes."
})

cat1.append({
    "id": 9,
    "category": CATEGORIES[0],
    "question": "Your deployment pipeline needs to push container images to Artifact Registry. You need to assign the minimum IAM permissions required for this specific task to the deployment service account. Which role should you assign?",
    "options": [
        "roles/artifactregistry.admin",
        "roles/artifactregistry.writer",
        "roles/editor",
        "roles/artifactregistry.reader"
    ],
    "answer": 1,
    "explanation": f"The Artifact Registry Writer role (`roles/artifactregistry.writer`) grants the permissions to read and write repository artifacts, which is the exact minimum required to push images. For Artifact Registry permissions, see the {SRC_GUIDE} and {SRC_STUDY_GUIDE}."
})

cat1.append({
    "id": 10,
    "category": CATEGORIES[0],
    "question": "Your team is using Google Cloud Deploy to roll out application updates to GKE clusters. You need to implement a canary deployment strategy that initially routes 10% of traffic to the new version, then increases to 50%, and finally 100%. Where do you configure this?",
    "options": [
        "In the Cloud Build trigger configuration parameters.",
        "In the GKE Ingress controller configuration yaml files.",
        "In the Cloud Deploy delivery pipeline definition, specifying a canary deployment strategy with explicit phase percentages.",
        "In the Cloud DNS geolocation routing configuration."
    ],
    "answer": 2,
    "explanation": f"Google Cloud Deploy delivery pipelines allow you to define progressive release strategies (like canary rollouts with step percentages) directly in the pipeline definition. For modern delivery techniques, see the {SRC_SEB} and the {SRC_GUIDE}."
})

cat1.append({
    "id": 11,
    "category": CATEGORIES[0],
    "question": "You want to set up an automated budget alert that shuts down non-essential sandbox environments when a project exceeds 120% of its monthly budget. What is the correct orchestration?",
    "options": [
        "Configure a billing alert that sends an email, and expect the administrator to log in and delete the resources.",
        "Set up a billing budget linked to a Pub/Sub topic, which triggers a Cloud Function that authenticates and shuts down specified VM instances.",
        "Disable billing at the organization level whenever a budget threshold is crossed.",
        "Configure a VPC Service Control rule to restrict VM network interfaces upon budget exhaustion."
    ],
    "answer": 1,
    "explanation": f"Google Cloud budgets can publish notifications to Pub/Sub. A Cloud Function subscribing to the topic can dynamically parse the threshold and invoke APIs to stop VMs. For billing automation patterns, see the {SRC_FRAMEWORK} Cost Optimization pillar and the {SRC_STUDY_GUIDE}."
})

cat1.append({
    "id": 12,
    "category": CATEGORIES[0],
    "question": "Your team uses Terraform to deploy resources to both development and production Google Cloud projects. The team wants to ensure strict isolation of state files and configurations between the environments. What is the recommended Terraform structure?",
    "options": [
        "Use a single Terraform workspace and edit variable files before each apply.",
        "Manage development and production resources in separate directories, each with its own backend configuration file pointing to isolated GCS buckets.",
        "Store dev and prod resources in the same file and use resource names to differentiate them.",
        "Use local state storage on a shared network drive."
    ],
    "answer": 1,
    "explanation": f"Using separate directories with unique GCS backend configurations ensures full project isolation, preventing developers from accidentally overwriting production state files. For Terraform infrastructure patterns, see {SRC_VAQUAR} and the {SRC_STUDY_GUIDE}."
})

cat1.append({
    "id": 13,
    "category": CATEGORIES[0],
    "question": "To enable multi-developer collaboration, you configure a Cloud Storage bucket as the backend for your Terraform states. How does Terraform prevent concurrent runs from corrupting state files?",
    "options": [
        "GCS does not support state locking. Developers must coordinate runs manually.",
        "Terraform natively leverages Cloud Storage object versioning to recover corrupted states.",
        "Terraform natively utilizes GCS's object lease/lock mechanics to achieve automated state locking during operations.",
        "Terraform requires a separate Cloud SQL instance to perform locking for GCS backends."
    ],
    "answer": 2,
    "explanation": f"The Terraform GCS backend natively supports state locking using Google Cloud Storage's metadata features. For backend setup, see {SRC_SEB} and the {SRC_STUDY_GUIDE} state locking guidelines."
})

cat1.append({
    "id": 14,
    "category": CATEGORIES[0],
    "question": "You are designing a reusable Terraform module for deploying virtual machine groups across multiple teams. What is a key design principle to maintain decoupling and clean configurations?",
    "options": [
        "Hardcode project IDs and subnet names inside the module to minimize input parameters.",
        "Use input variables for resource configurations, define outputs for dependencies, and avoid hardcoding credentials or provider configurations inside the module.",
        "Place all terraform providers block definitions inside the module's main.tf file.",
        "Store the backend configuration blocks inside the module root."
    ],
    "answer": 1,
    "explanation": f"Decoupled Terraform modules should accept input variables and return outputs, leaving provider configurations to the root executing modules. For clean infrastructure principles, see {SRC_FRAMEWORK} Operational Excellence and {SRC_VAQUAR} templates."
})

cat1.append({
    "id": 15,
    "category": CATEGORIES[0],
    "question": "Following a major production outage on a database cluster, your SRE team conducts a review. What is the primary objective of a blameless post-mortem?",
    "options": [
        "To identify the individual developer who committed the bug and document disciplinary actions.",
        "To calculate the total financial loss of the outage and assign it to the correct department budget.",
        "To understand the systemic weaknesses in the technology, processes, and alerting that allowed the failure to occur and map preventive actions.",
        "To assign responsibility for the incident to an external vendor."
    ],
    "answer": 2,
    "explanation": f"A blameless post-mortem assumes that team members acted in good faith with the information they had. It focuses on engineering resilience into the system rather than blaming individuals. For SRE culture, see the {SRC_GUIDE} and {SRC_SEB}."
})

cat1.append({
    "id": 16,
    "category": CATEGORIES[0],
    "question": "A Java application running on Compute Engine experiences gradual slowdowns. You suspect a JVM memory leak. Which Google Cloud service or tool should you configure to perform continuous in-production profiling of CPU and heap memory allocations without impacting performance?",
    "options": [
        "Cloud Trace logs.",
        "Cloud Debugger.",
        "Cloud Profiler.",
        "Ops Agent Logging."
    ],
    "answer": 2,
    "explanation": f"Cloud Profiler is a low-overhead profiling tool that continuously gathers CPU and memory allocation profiles from applications in production. For diagnostic tooling, see the {SRC_STUDY_GUIDE} and the {SRC_GUIDE}."
})

cat1.append({
    "id": 17,
    "category": CATEGORIES[0],
    "question": "An API server returns occasional invalid payload responses. You want to inspect the call stack and variables of the running Go binary in production without halting its execution. Which tool should you use?",
    "options": [
        "Cloud Profiler.",
        "Write log lines manually and redeploy the service.",
        "Use Cloud Debugger snapshot points (or custom logging breakpoints if legacy) to capture local variables without stopping execution.",
        "Use Cloud Trace trace-points to capture execution stack frames."
    ],
    "answer": 2,
    "explanation": f"Debugging tools like legacy Cloud Debugger (or equivalent logging snapshot utilities) allow capturing the call stack and local variables at specific code lines dynamically without halting runtime traffic. For troubleshooting, see {SRC_SEB}."
})

cat1.append({
    "id": 18,
    "category": CATEGORIES[0],
    "question": "Your node application's CPU load spikes during peak hours. You want to analyze which specific javascript function consumes the most CPU resources. Which tool provides a flame graph visualization of CPU consumption?",
    "options": [
        "Cloud Trace.",
        "Cloud Profiler.",
        "Cloud Logging Query Builder.",
        "Compute Engine CPU Utilization Charts."
    ],
    "answer": 1,
    "explanation": f"Cloud Profiler generates flame graphs visualizing CPU usage per function call, helping developer teams find specific performance bottlenecks. For optimization practices, check the {SRC_FRAMEWORK} Performance Optimization pillar and {SRC_VAQUAR} tools."
})

cat1.append({
    "id": 19,
    "category": CATEGORIES[0],
    "question": "You are debugging latency in a microservices application where a frontend service calls multiple backend APIs. How can you trace the path of a request across services and identify which service introduces the longest delay?",
    "options": [
        "Correlate the time stamps of local log lines in Cloud Logging manually.",
        "Enable Cloud Trace, inject trace context headers into API requests, and analyze the call tree graph.",
        "Use Cloud Profiler on the frontend VM.",
        "Review the global external load balancer latency metrics."
    ],
    "answer": 1,
    "explanation": f"Cloud Trace enables distributed tracing, tracking request execution paths across microservice boundaries to locate bottlenecks. For tracing tools, see the {SRC_STUDY_GUIDE} and {SRC_GUIDE}."
})

cat1.append({
    "id": 20,
    "category": CATEGORIES[0],
    "question": "You want to verify that your global web endpoint is accessible and responsive with low latency from users globally. How should you configure this verification in Cloud Monitoring?",
    "options": [
        "Create an external synthetic uptime check configured to run checks from multiple global testing regions.",
        "Deploy VMs in five different regions and run ping cron scripts.",
        "Configure Cloud DNS to monitor network latency metrics.",
        "Review the HTTP load balancer backend capacity metrics."
    ],
    "answer": 0,
    "explanation": f"Cloud Monitoring synthetic monitors and uptime checks allow testing URL endpoints from distributed locations around the world. For uptime check configurations, check the {SRC_STUDY_GUIDE} and {SRC_FRAMEWORK} Reliability pillar."
})

cat1.append({
    "id": 21,
    "category": CATEGORIES[0],
    "question": "A database query in your Cloud SQL PostgreSQL instance runs slowly during batch processing. How can you analyze query execution times and locate expensive SQL statements without looking at database logs?",
    "options": [
        "Enable Query Insights in Cloud SQL to view the query load graph and query plans.",
        "Run trace commands on the hosting VM.",
        "Export database dumps to GCS and run query plan analyzers locally.",
        "Configure Cloud Trace on the web server."
    ],
    "answer": 0,
    "explanation": f"Cloud SQL Query Insights provides visual telemetry for analyzing query performance, showing execution times, query plans, and load patterns directly. For databases monitoring, check the {SRC_SEB} and {SRC_FRAMEWORK} Performance Optimization pillar."
})

cat1.append({
    "id": 22,
    "category": CATEGORIES[0],
    "question": "To secure your software supply chain, you must verify that container images deployed to GKE were built by a trusted pipeline (Cloud Build) and have not been modified. Which framework and tool combo meets this requirement?",
    "options": [
        "Implement IAM roles on GKE clusters.",
        "Use Software Supply Chain Levels for Software Artifacts (SLSA) provenance generated by Cloud Build, and enforce it in GKE via Binary Authorization.",
        "Configure KMS envelope encryption on Kubernetes secrets.",
        "Implement GKE Network Policies to block untrusted registries."
    ],
    "answer": 1,
    "explanation": f"Cloud Build generates SLSA-compliant build provenance automatically. Binary Authorization can evaluate this provenance and block GKE deployments of unsigned containers. For supply chain security, see the {SRC_FRAMEWORK} Security pillar and the {SRC_GUIDE}."
})

cat1.append({
    "id": 23,
    "category": CATEGORIES[0],
    "question": "Your Cloud Build workflows compile large Java projects and spend several minutes downloading Maven dependencies on every execution. How can you speed up the execution time?",
    "options": [
        "Increase the CPU size of the Cloud Build workers only.",
        "Set up Cloud Build caching by caching dependency directories in a Cloud Storage bucket between builds.",
        "Convert the build scripts to Bash variables.",
        "Use local SSD disk configurations in the Cloud Build config."
    ],
    "answer": 1,
    "explanation": f"Saving and restoring dependency directories (like Maven's local repository) from a GCS bucket between build runs cuts down on remote fetch times. For build tuning, see {SRC_VAQUAR} build tips and {SRC_STUDY_GUIDE}."
})

cat1.append({
    "id": 24,
    "category": CATEGORIES[0],
    "question": "Your SRE team wants to trigger high-priority alerts in PagerDuty when a database CPU exceeds 90% for more than 5 minutes. Where should the alert integration be configured?",
    "options": [
        "Directly in the database system tables.",
        "Configure a Cloud Monitoring alerting policy, link PagerDuty as a notification channel, and set the metric condition to trigger on threshold breach.",
        "Write a cron job that checks CPU and calls the PagerDuty API via curl.",
        "Set up a billing budget alert that routes to PagerDuty."
    ],
    "answer": 1,
    "explanation": f"Cloud Monitoring allows you to define metric thresholds and link third-party alert routers like PagerDuty as notification channels. For alert integrations, see {SRC_STUDY_GUIDE} and {SRC_SEB}."
})

cat1.append({
    "id": 25,
    "category": CATEGORIES[0],
    "question": "What is the primary technical distinction between Cloud Billing 'labels' and 'tags' on Google Cloud resources?",
    "options": [
        "Labels are used for billing; tags can only be applied to VMs.",
        "Labels are simple key-value metadata attached directly to resources, whereas Tags are resource attributes managed centrally via Resource Manager that support IAM permissions and organization policies.",
        "Tags are stored in BigQuery; labels are stored in GCS.",
        "There is no difference; they are synonymous."
    ],
    "answer": 1,
    "explanation": f"Tags are managed centrally via Resource Manager, support IAM controls, and can conditionally apply policies, unlike standard resource Labels. For resource organization, see {SRC_FRAMEWORK} Operational Excellence and {SRC_STUDY_GUIDE}."
})

cat1.append({
    "id": 26,
    "category": CATEGORIES[0],
    "question": "You need to audit all active firewalls, VMs, and service accounts in your organization to locate resources that do not match compliance requirements. Which tool allows you to query all assets in your organization historically?",
    "options": [
        "Cloud Asset Inventory.",
        "Cloud Logging Query Tool.",
        "BigQuery Billing Export.",
        "Compute Engine instance group list."
    ],
    "answer": 0,
    "explanation": f"Cloud Asset Inventory allows you to perform SQL-like searches across organization assets, search historical states, and export metadata. For compliance auditing, see the {SRC_GUIDE} and the {SRC_FRAMEWORK} Security pillar."
})

cat1.append({
    "id": 27,
    "category": CATEGORIES[0],
    "question": "Your security team wants to determine which users have permission to read a specific sensitive Cloud Storage bucket. Which tool should you use?",
    "options": [
        "VPC Service Controls analyser.",
        "IAM Policy Analyzer.",
        "Cloud Logging search queries.",
        "IAM conditions checker."
    ],
    "answer": 1,
    "explanation": f"IAM Policy Analyzer helps audit access permissions, showing who has access to specific Google Cloud resources and how they obtained it. For security auditing, see the {SRC_STUDY_GUIDE} and {SRC_FRAMEWORK} Security pillar."
})

cat1.append({
    "id": 28,
    "category": CATEGORIES[0],
    "question": "You want to enforce secure SSH key management for all developers accessing Compute Engine instances, automatically sync SSH keys with corporate identities, and enforce IAM permissions. Which feature should you enable?",
    "options": [
        "Project-wide SSH Keys.",
        "Google Cloud OS Login.",
        "IAP Firewall policies.",
        "Metadata server script hooks."
    ],
    "answer": 1,
    "explanation": f"OS Login links VM SSH access to a user's Google Workspace identity, removing the need to manage keys manually. For compute security practices, see the {SRC_STUDY_GUIDE} and {SRC_VAQUAR} VM management."
})

cat1.append({
    "id": 29,
    "category": CATEGORIES[0],
    "question": "A developer needs an interactive development workspace to execute gcloud commands and test API requests quickly from the console. Which built-in tool provides an ephemeral environment?",
    "options": [
        "Cloud Shell.",
        "Create a temporary Compute Engine VM.",
        "Local terminal with no SDK.",
        "Cloud Functions console editor."
    ],
    "answer": 0,
    "explanation": f"Cloud Shell provides a pre-configured debian workspace with the Cloud SDK and common tools installed, saving local setup time. For developer tooling, see the {SRC_STUDY_GUIDE} and {SRC_SEB}."
})

cat1.append({
    "id": 30,
    "category": CATEGORIES[0],
    "question": "Your company is billed unexpected egress fees. You need to analyze the outbound network data transfer from your VMs and identify the source IP addresses. Which network telemetry feature should you configure?",
    "options": [
        "Packet Mirroring.",
        "VPC Flow Logs.",
        "Cloud DNS Queries Logging.",
        "Cloud NAT logs."
    ],
    "answer": 1,
    "explanation": f"VPC Flow Logs record network traffic data transfer stats (like IP addresses, ports, and bytes transferred), making them ideal for debugging egress costs. For network cost tracking, see {SRC_FRAMEWORK} Cost Optimization and {SRC_STUDY_GUIDE}."
})

# ==========================================
# PART II: Networking & Load Balancing
# ==========================================
cat2.append({
    "id": 31,
    "category": CATEGORIES[1],
    "question": "Your company needs to define subnets in a custom VPC. The subnets must be configured to allow for future expansion of workload container IPs. What parameter should you configure?",
    "options": [
        "Create new VPCs for every new microservice.",
        "Use Expand IP range on existing subnets to change their primary CIDR range dynamically without recreating them.",
        "Create secondary aliases in the subnet metadata fields.",
        "Implement VPC peering to bridge new subnets."
    ],
    "answer": 1,
    "explanation": f"GCP subnets allow you to expand their primary IP ranges dynamically, preventing IP address depletion. For network design, check the {SRC_FRAMEWORK} Reliability pillar and {SRC_STUDY_GUIDE}."
})

cat2.append({
    "id": 32,
    "category": CATEGORIES[1],
    "question": "You are designing a VPC network for a large enterprise with multiple service teams. What is the recommended strategy to manage shared IP address spaces and allow centralized control of subnets?",
    "options": [
        "VPC Network Peering.",
        "Shared VPC with a host project and multiple service projects.",
        "HA VPN tunnels.",
        "Partner Interconnect."
    ],
    "answer": 1,
    "explanation": f"Shared VPC allows a host project to share subnets with service projects, enabling centralized network administration while isolating service resources. For details, see the Shared VPC architecture guidelines in the {SRC_GUIDE} and {SRC_STUDY_GUIDE}."
})

cat2.append({
    "id": 33,
    "category": CATEGORIES[1],
    "question": "You have configured VPC Network Peering between Project A and Project B, and also between Project B and Project C. VMs in Project A cannot communicate with VMs in Project C. Why, and how do you resolve this?",
    "options": [
        "VPC Network Peering is non-transitive. You must peer Project A and Project C directly.",
        "The firewall rules in Project B are blocking traffic. Add an allow-all egress rule.",
        "Shared VPC needs to be enabled. Make Project B the Host project.",
        "Configure static routes in the OS network interfaces."
    ],
    "answer": 0,
    "explanation": f"VPC Network Peering is strictly non-transitive. If A is peered with B, and B with C, traffic cannot flow from A to C through B. To resolve it, peer VPC A and VPC C directly. For details, check {SRC_VAQUAR} and the {SRC_STUDY_GUIDE}."
})

cat2.append({
    "id": 34,
    "category": CATEGORIES[1],
    "question": "You need to host multiple separate Kubernetes pods on a single Compute Engine instance, ensuring each pod has a unique IP address on the VPC network. Which feature should you configure?",
    "options": [
        "External IP addresses on each pod interface.",
        "Alias IP ranges on the VM's primary network interface.",
        "VPC Peering routes.",
        "Shared VPC host subnets."
    ],
    "answer": 1,
    "explanation": f"Alias IP ranges allow you to allocate secondary IP ranges within a subnet to a VM interface, which is the foundational technology for VPC-native GKE clusters. See GKE network setups in {SRC_STUDY_GUIDE} and {SRC_SEB}."
})

cat2.append({
    "id": 35,
    "category": CATEGORIES[1],
    "question": "You need to enforce firewall rules across all projects within an organization folder to block SSH access from the internet. How should you design this centrally?",
    "options": [
        "Write a script to apply rules to every project's VPC firewall configurations.",
        "Apply Hierarchical Firewall Policies at the folder level.",
        "Use IAM policies to block firewall modification permissions.",
        "Enforce VPC Service Controls on all project boundaries."
    ],
    "answer": 1,
    "explanation": f"Hierarchical Firewall Policies allow you to apply consistent firewall rules across all descendant projects within an organization folder. For security policies, see the {SRC_FRAMEWORK} Security pillar and {SRC_GUIDE}."
})

cat2.append({
    "id": 36,
    "category": CATEGORIES[1],
    "question": "Your public web application needs protection against SQL injection and cross-site scripting (XSS) attacks. What security service should you configure?",
    "options": [
        "VPC Service Controls.",
        "Cloud Armor security policies with preconfigured WAF rules.",
        "Hierarchical Firewall Policies.",
        "Identity-Aware Proxy (IAP)."
    ],
    "answer": 1,
    "explanation": f"Cloud Armor provides WAF rules that protect HTTP(S) Load Balancer backend services from common web attacks like SQLi and XSS. For app security configurations, see the {SRC_STUDY_GUIDE} and the {SRC_FRAMEWORK} Security pillar."
})

cat2.append({
    "id": 37,
    "category": CATEGORIES[1],
    "question": "You need to protect your external load balancer from volumetric Distributed Denial of Service (DDoS) attacks. Which Google Cloud service provides this natively?",
    "options": [
        "Cloud NAT.",
        "Cloud Armor with DDoS mitigation enabled.",
        "Cloud DNS Security.",
        "VPC Service Controls."
    ],
    "answer": 1,
    "explanation": f"Cloud Armor provides native edge-based DDoS defense and rate-limiting features for HTTP(S) Load Balancers. For network edge security, see the {SRC_GUIDE} and {SRC_SEB}."
})

cat2.append({
    "id": 38,
    "category": CATEGORIES[1],
    "question": "Your instances in a private subnet need to download software updates from the internet but must not accept inbound connections. How should you design this access?",
    "options": [
        "Assign public ephemeral IP addresses to the instances.",
        "Deploy a Cloud NAT gateway associated with the private subnet's VPC.",
        "Configure an external load balancer with routing rules.",
        "Establish an HA VPN tunnel."
    ],
    "answer": 1,
    "explanation": f"Cloud NAT allows instances without external IP addresses to access the internet securely for egress-only traffic. For private network design, check the {SRC_FRAMEWORK} Reliability pillar and {SRC_STUDY_GUIDE}."
})

cat2.append({
    "id": 39,
    "category": CATEGORIES[1],
    "question": "Your company requires a direct physical link between your on-premises network and Google Cloud with at least 99.99% availability. What architecture meets this requirement?",
    "options": [
        "Configure active-active Cloud VPN tunnels running over public internet lines.",
        "Deploy Dedicated Interconnect with dual-metropolitan topologies, terminated on separate Cloud Routers in each region.",
        "Partner Interconnect with a single circuit.",
        "Direct Peering."
    ],
    "answer": 1,
    "explanation": f"To achieve 99.99% HA SLA, Dedicated Interconnect requires four circuits split across two metropolitan areas. For connectivity topologies, see the {SRC_GUIDE} and {SRC_SEB} Dedicated Interconnect sections."
})

cat2.append({
    "id": 40,
    "category": CATEGORIES[1],
    "question": "Your data center is in a location without a Google Interconnect point of presence. You need a private connection with an SLA. What service should you use?",
    "options": [
        "Dedicated Interconnect.",
        "Partner Interconnect through a supported service provider.",
        "Carrier Peering.",
        "Cloud VPN."
    ],
    "answer": 1,
    "explanation": f"Partner Interconnect connects your on-premises network to Google Cloud through a supported service provider when direct physical connection is not feasible. For details, see {SRC_STUDY_GUIDE} and {SRC_VAQUAR} networking."
})

cat2.append({
    "id": 41,
    "category": CATEGORIES[1],
    "question": "You need to configure VPN tunnels between on-premises and Google Cloud with dynamic routing and high availability. What configuration should you deploy?",
    "options": [
        "Classic VPN with static routing.",
        "HA VPN (which enforces two tunnels with distinct external IPs) combined with a Cloud Router running dynamic BGP routing.",
        "A single VPN gateway with manual routes.",
        "Carrier Peering."
    ],
    "answer": 1,
    "explanation": f"HA VPN requires two interfaces on the gateway, guaranteeing 99.9% availability, and relies on dynamic BGP routing via Cloud Router. For HA VPN configurations, check the {SRC_STUDY_GUIDE} and the {SRC_FRAMEWORK} Reliability pillar."
})

cat2.append({
    "id": 42,
    "category": CATEGORIES[1],
    "question": "How does Cloud Router exchange routing information between on-premises and Google Cloud networks?",
    "options": [
        "Using manual static route propagation.",
        "Using dynamic BGP (Border Gateway Protocol) routing.",
        "Using RIP routing rules.",
        "Through custom scripts running in GCS."
    ],
    "answer": 1,
    "explanation": f"Cloud Router uses BGP to automatically discover and propagate subnet routes dynamically. For dynamic routing setups, see {SRC_SEB} and the {SRC_GUIDE}."
})

cat2.append({
    "id": 43,
    "category": CATEGORIES[1],
    "question": "Your global e-commerce application serves users across Asia, Europe, and America. You want to direct users to the nearest healthy web server using a single public IP address. Which load balancer should you use?",
    "options": [
        "Regional internal HTTP(S) Load Balancer.",
        "Global external HTTP(S) Load Balancer (Classic or Envoy-based).",
        "Network Load Balancer.",
        "TCP proxy Load Balancer."
    ],
    "answer": 1,
    "explanation": f"A global external HTTP(S) Load Balancer routes traffic globally using single public IP addresses based on proximity and health. For load balancing details, check the {SRC_STUDY_GUIDE} and the {SRC_FRAMEWORK} Reliability pillar."
})

cat2.append({
    "id": 44,
    "category": CATEGORIES[1],
    "question": "You are hosting an internal service in a single region that must only be accessible within your VPC network. Which load balancer fits this requirement?",
    "options": [
        "Global external HTTP(S) Load Balancer.",
        "Regional internal HTTP(S) Load Balancer.",
        "TCP proxy Load Balancer.",
        "SSL Proxy Load Balancer."
    ],
    "answer": 1,
    "explanation": f"The regional internal HTTP(S) Load Balancer routes internal traffic inside the VPC network to regional backends. For internal routing options, see the {SRC_GUIDE} and {SRC_STUDY_GUIDE}."
})

cat2.append({
    "id": 45,
    "category": CATEGORIES[1],
    "question": "You need to route non-HTTP TCP traffic (e.g. database connections) to VMs in multiple regions, terminating SSL/TLS sessions at the load balancer edge. What load balancer should you choose?",
    "options": [
        "Global external HTTP(S) Load Balancer.",
        "TCP/UDP Proxy Load Balancer.",
        "Regional internal HTTP(S) Load Balancer.",
        "Network Load Balancer."
    ],
    "answer": 1,
    "explanation": f"TCP/UDP Proxy Load Balancers handle non-HTTP TCP traffic and can terminate TLS at the global edge. For network proxies, see {SRC_VAQUAR} and the {SRC_STUDY_GUIDE}."
})

cat2.append({
    "id": 46,
    "category": CATEGORIES[1],
    "question": "Your backend applications receive UDP traffic directly and require the client's original IP address to be preserved all the way to the instances. Which load balancer should you deploy?",
    "options": [
        "TCP Proxy Load Balancer.",
        "External Network Load Balancer (passthrough).",
        "Global external HTTP(S) Load Balancer.",
        "Internal HTTP(S) Load Balancer."
    ],
    "answer": 1,
    "explanation": f"External Network Load Balancers are regional passthrough load balancers that preserve the client's original IP and ports for UDP/TCP traffic. See load balancing categories in {SRC_SEB}."
})

cat2.append({
    "id": 47,
    "category": CATEGORIES[1],
    "question": "You want to improve static assets delivery times for global clients accessing your web servers. Which service should you enable on your external load balancer?",
    "options": [
        "Cloud NAT.",
        "Cloud CDN.",
        "Cloud DNS Security.",
        "VPC Service Controls."
    ],
    "answer": 1,
    "explanation": f"Cloud CDN caches static content at Google's edge locations close to users, reducing latency and backend load. Check performance caching in the {SRC_FRAMEWORK} Performance Optimization pillar and {SRC_STUDY_GUIDE}."
})

cat2.append({
    "id": 48,
    "category": CATEGORIES[1],
    "question": "You want to allow private access to a managed database service running in a producer VPC from your consumer VPC, without exposing the database to the public internet or peering the entire VPCs. Which technology should you deploy?",
    "options": [
        "VPC Network Peering.",
        "Private Service Connect (PSC).",
        "HA VPN tunnel.",
        "Shared VPC."
    ],
    "answer": 1,
    "explanation": f"Private Service Connect (PSC) allows access to services across VPC boundaries privately using endpoints and service attachments. For private service configurations, see {SRC_STUDY_GUIDE} and {SRC_SEB}."
})

cat2.append({
    "id": 49,
    "category": CATEGORIES[1],
    "question": "Your database needs to resolve hostnames residing on an on-premises DNS server, and on-premises servers need to resolve resources inside your VPC. What DNS configuration should you deploy?",
    "options": [
        "Create manual zone file records daily on all servers.",
        "Configure Cloud DNS routing policies with forwarding zones for the on-premises domain, and an inbound DNS policy for on-premises clients.",
        "Use VPC peering to sync DNS tables.",
        "Deploy BIND servers on VMs in all subnets."
    ],
    "answer": 1,
    "explanation": f"Cloud DNS forwarding zones and inbound DNS policies allow bidirectional DNS resolution between GCP and on-premises environments. For hybrid DNS setups, check {SRC_FRAMEWORK} Reliability and {SRC_STUDY_GUIDE}."
})

cat2.append({
    "id": 50,
    "category": CATEGORIES[1],
    "question": "A network admin reports packet loss between a Compute Engine VM and an on-premises database. Which tool allows you to perform automated, step-by-step routing path checks between these endpoints?",
    "options": [
        "VPC Flow Logs analysis.",
        "Network Intelligence Center Connectivity Tests.",
        "Packet Mirroring.",
        "Cloud NAT log inspector."
    ],
    "answer": 1,
    "explanation": f"Connectivity Tests in Network Intelligence Center analyze routing configurations dynamically and perform traceroute checks to troubleshoot path failures. For diagnostic tools, see the {SRC_GUIDE} and {SRC_STUDY_GUIDE}."
})

cat2.append({
    "id": 51,
    "category": CATEGORIES[1],
    "question": "You need to capture all traffic entering and leaving your Compute Engine instances for security analysis using an Intrusion Detection System (IDS). What VPC feature should you configure?",
    "options": [
        "VPC Flow Logs.",
        "Packet Mirroring.",
        "Hierarchical Firewall Policies.",
        "VPC Service Controls."
    ],
    "answer": 1,
    "explanation": f"Packet Mirroring clones traffic from specified VM instances and forwards it to a collector service, which is essential for IDS inspection. For details, see {SRC_STUDY_GUIDE} and {SRC_VAQUAR} networking."
})

cat2.append({
    "id": 52,
    "category": CATEGORIES[1],
    "question": "How does dynamic BGP routing in Cloud Router react when a primary VPN tunnel fails in an HA VPN setup?",
    "options": [
        "It triggers an administrative alert, requiring manual route updates.",
        "It automatically withdraws the routes over the failed tunnel and routes traffic through the secondary tunnel.",
        "It disables the VPC network interfaces.",
        "It resets the Cloud Routers."
    ],
    "answer": 1,
    "explanation": f"Dynamic BGP routing dynamically adjusts routing tables, rerouting traffic to alternate tunnels within seconds upon link failure. For HA VPN setups, see the {SRC_FRAMEWORK} Reliability pillar and {SRC_SEB}."
})

cat2.append({
    "id": 53,
    "category": CATEGORIES[1],
    "question": "You have configured VPC Service Controls around your production project. You need to allow a service in another project to access a Storage bucket inside the perimeter. What VPC-SC configuration should you apply?",
    "options": [
        "Disable the VPC Service Controls perimeter temporarily.",
        "Create an egress policy or build a VPC Service Controls bridge to allow communication between the perimeters.",
        "Configure VPC Peering.",
        "Use IAM custom roles."
    ],
    "answer": 1,
    "explanation": f"VPC Service Controls bridges or ingress/egress policies allow secure communication between isolated projects inside perimeters. For VPC-SC concepts, see the {SRC_GUIDE} and {SRC_STUDY_GUIDE}."
})

cat2.append({
    "id": 54,
    "category": CATEGORIES[1],
    "question": "Your security team wants to audit the VPC to ensure no Compute Engine instances are configured with external public IP addresses. How can you enforce this across the organization folder?",
    "options": [
        "Configure custom firewall rules to drop all traffic.",
        "Define an Organization Policy constraint restricting the 'Define allowed external IPs for VM instances' settings.",
        "Run custom scripts on VMs to strip their IP configurations.",
        "Implement VPC Service Controls."
    ],
    "answer": 1,
    "explanation": f"Organization policies restrict configuration options (like VM public IP allocations) globally or at folder levels. For org controls, see the {SRC_FRAMEWORK} Security pillar and {SRC_GUIDE}."
})

cat2.append({
    "id": 55,
    "category": CATEGORIES[1],
    "question": "Your database instance must access public APIs but cannot have an external IP. You deploy Cloud NAT. How can you optimize Cloud NAT port allocations to prevent connection dropouts during peak loads?",
    "options": [
        "Increase VM CPU allocations.",
        "Enable Dynamic Port Allocation on the Cloud NAT gateway configurations.",
        "Create additional subnets.",
        "Recreate the NAT gateway."
    ],
    "answer": 1,
    "explanation": f"Dynamic Port Allocation adjusts the number of source ports allocated to VMs dynamically based on traffic, preventing port exhaustion. For NAT optimization, check the {SRC_FRAMEWORK} Performance Optimization pillar and {SRC_SEB}."
})

cat2.append({
    "id": 56,
    "category": CATEGORIES[1],
    "question": "Which load balancer should you use for external TCP traffic that requires high availability, low latency, regional routing, and does not require TLS termination at the load balancer?",
    "options": [
        "TCP Proxy Load Balancer.",
        "Network Load Balancer.",
        "Global external HTTP(S) Load Balancer.",
        "Internal HTTP(S) Load Balancer."
    ],
    "answer": 1,
    "explanation": f"The regional external Network Load Balancer is a passthrough load balancer that handles TCP/UDP traffic without proxying, offering low latency. For load balancing selection, check {SRC_STUDY_GUIDE} and {SRC_VAQUAR}."
})

cat2.append({
    "id": 57,
    "category": CATEGORIES[1],
    "question": "You are deploying a GKE cluster. You want to configure the pods to be natively addressable inside the VPC network. Which cluster network configuration should you choose?",
    "options": [
        "Routes-based GKE cluster.",
        "VPC-native GKE cluster.",
        "Peered cluster setup.",
        "Shared VPC cluster."
    ],
    "answer": 1,
    "explanation": f"VPC-native GKE clusters use Alias IP ranges to make pods natively addressable on the VPC, improving routing efficiency. For GKE networking, see the {SRC_GUIDE} and {SRC_SEB}."
})

cat2.append({
    "id": 58,
    "category": CATEGORIES[1],
    "question": "You need to connect an on-premises network to your GCP VPC but cannot get fiber laid for Dedicated Interconnect and do not want to route over the public internet. What is your best option?",
    "options": [
        "HA VPN tunnels.",
        "Partner Interconnect through a private network service provider.",
        "Carrier Peering.",
        "Direct Peering."
    ],
    "answer": 1,
    "explanation": f"Partner Interconnect provides private connections through a partner network, avoiding the public internet without requiring physical fiber installation. For connectivity options, see {SRC_STUDY_GUIDE} and {SRC_VAQUAR}."
})

cat2.append({
    "id": 59,
    "category": CATEGORIES[1],
    "question": "You need to route outbound traffic from a private VM through a third-party virtual firewall appliance. How should you design the routing?",
    "options": [
        "Configure standard default routes.",
        "Create a custom static route in the VPC, specifying the firewall appliance VM's internal IP address as the next hop.",
        "Enable VPC Peering.",
        "Use Cloud NAT routing rules."
    ],
    "answer": 1,
    "explanation": f"Custom static routes with next-hop VM parameters allow routing traffic through virtual appliances for inspection. For route design, see {SRC_SEB} and the {SRC_GUIDE}."
})

cat2.append({
    "id": 60,
    "category": CATEGORIES[1],
    "question": "What happens when you establish VPC Peering between two networks that contain overlapping CIDR ranges?",
    "options": [
        "The peering is established, and traffic is load-balanced between the subnets.",
        "The peering connection setup will fail, as overlapping IP address subnets are not supported in VPC Peering.",
        "GCP automatically translates the IP ranges of one VPC.",
        "Firewall rules resolve the overlap."
    ],
    "answer": 1,
    "explanation": f"VPC Network Peering requires non-overlapping subnet CIDR ranges; otherwise, route conflicts prevent the peering from establishing. For peering constraints, check the {SRC_FRAMEWORK} Reliability pillar and {SRC_STUDY_GUIDE}."
})

# ==========================================
# PART III: Security, Identity & Compliance
# ==========================================
cat3.append({
    "id": 61,
    "category": CATEGORIES[2],
    "question": "You have assigned a developer the Viewer role at the Project level. How does IAM resource inheritance affect their access to folders and resources nested within this project?",
    "options": [
        "They have no access to nested resources unless explicitly granted.",
        "They inherit the Viewer permissions for all child resources within the project due to IAM's downward inheritance hierarchy.",
        "Inheritance only applies to billing accounts.",
        "They automatically become Owners of child resources."
    ],
    "answer": 1,
    "explanation": f"IAM permissions are inherited downward. Roles granted at the project level apply to all resources inside that project. For inheritance rules, check the {SRC_FRAMEWORK} Security pillar and {SRC_GUIDE}."
})

cat3.append({
    "id": 62,
    "category": CATEGORIES[2],
    "question": "Your security policy states that database administrators should be allowed to view database schemas but not modify database instances or delete keys. None of the predefined IAM roles fit this description. What should you do?",
    "options": [
        "Assign the Editor role and ask them to follow policy manually.",
        "Create a custom IAM role containing only the specific permissions required, and assign it to the administrators.",
        "Modify a predefined role directly in the console.",
        "Configure a VPC Service Controls perimeter to block writes."
    ],
    "answer": 1,
    "explanation": f"Custom IAM roles allow defining granular permission lists to enforce the principle of least privilege when predefined roles are too broad. For IAM custom roles, check {SRC_VAQUAR} and the {SRC_STUDY_GUIDE}."
})

cat3.append({
    "id": 63,
    "category": CATEGORIES[2],
    "question": "You want to allow third-party developers access to a development project only during working hours (9:00 AM to 5:00 PM on weekdays). How should you configure this?",
    "options": [
        "Write a script that grants and revokes roles on a cron schedule.",
        "Use IAM Conditions on the role bindings to enforce time-of-day and day-of-week constraints.",
        "Configure VPC service perimeters to open only during the day.",
        "Disable the project during off-hours."
    ],
    "answer": 1,
    "explanation": f"IAM Conditions allow adding conditional logic (such as time, date, resource tags) to IAM role bindings. For conditional access, see the {SRC_FRAMEWORK} Security pillar and {SRC_STUDY_GUIDE}."
})

cat3.append({
    "id": 64,
    "category": CATEGORIES[2],
    "question": "A user has the Owner role at the project level, which grants full access. You need to explicitly prevent this user from deleting Cloud KMS key rings. How can you achieve this without revoking the Owner role?",
    "options": [
        "Create a custom firewall rule.",
        "Apply an IAM Deny Policy targeting the user that denies the 'cloudkms.keyRings.delete' permission.",
        "Configure VPC Service Controls.",
        "Remove the KMS API from the project."
    ],
    "answer": 1,
    "explanation": f"IAM Deny Policies override allow policies, blocking specific actions even if a user has broad administrative roles like Owner or Editor. For details, see security controls in the {SRC_GUIDE} and {SRC_SEB}."
})

cat3.append({
    "id": 65,
    "category": CATEGORIES[2],
    "question": "To comply with security standards, all keys used to encrypt data in your Cloud Storage buckets must be rotated automatically every 90 days. Which key option should you configure?",
    "options": [
        "Google-managed encryption keys.",
        "Customer-Managed Encryption Keys (CMEK) via Cloud KMS, configuring a 90-day key rotation schedule.",
        "Customer-Supplied Encryption Keys (CSEK).",
        "On-premises HSM keys."
    ],
    "answer": 1,
    "explanation": f"Cloud KMS CMEK support automatic key rotation schedules, generating new key versions without needing to re-encrypt existing files immediately. See KMS configurations in {SRC_STUDY_GUIDE} and {SRC_SEB}."
})

cat3.append({
    "id": 66,
    "category": CATEGORIES[2],
    "question": "Your company requires that the cryptographic key material used to encrypt data must never be visible to Google, and you must manage the keys on your own on-premises systems. Which encryption model meets this requirement?",
    "options": [
        "Customer-Managed Encryption Keys (CMEK).",
        "Customer-Supplied Encryption Keys (CSEK).",
        "Cloud HSM.",
        "Google-managed default keys."
    ],
    "answer": 1,
    "explanation": f"CSEK (Customer-Supplied Encryption Keys) require providing the raw key material in the API call headers; Google never stores the key. For encryption options, check the {SRC_FRAMEWORK} Security pillar and {SRC_STUDY_GUIDE}."
})

cat3.append({
    "id": 67,
    "category": CATEGORIES[2],
    "question": "Your security policy requires hardware-backed cryptographic keys to protect financial transaction data. Which service should you use?",
    "options": [
        "Cloud KMS with software-backed keys.",
        "Cloud HSM (Hardware Security Module) integrated with Cloud KMS.",
        "Secret Manager.",
        "On-premises storage."
    ],
    "answer": 1,
    "explanation": f"Cloud HSM provides FIPS 140-2 Level 3 certified hardware security modules in Google Cloud, integrated with KMS. For hardware-backed keys, see the {SRC_GUIDE} and {SRC_STUDY_GUIDE}."
})

cat3.append({
    "id": 68,
    "category": CATEGORIES[2],
    "question": "You need to store database credentials and rotate them automatically every 30 days. Which service should you choose?",
    "options": [
        "Store credentials in a version-controlled config file.",
        "Secret Manager with automatic rotation configured via Cloud Functions.",
        "Cloud KMS CMEK.",
        "Metadata server fields."
    ],
    "answer": 1,
    "explanation": f"Secret Manager stores sensitive payloads securely and supports automated rotation integrations via Cloud Functions. For secret management, see {SRC_STUDY_GUIDE} and {SRC_VAQUAR} security."
})

cat3.append({
    "id": 69,
    "category": CATEGORIES[2],
    "question": "Your applications running on AWS need to access resources in your Google Cloud VPC securely, without using long-lived service account key files. What identity solution should you implement?",
    "options": [
        "Write credentials in the AWS code.",
        "Use Workload Identity Federation to establish a trust relationship between AWS IAM and GCP IAM.",
        "Establish an HA VPN tunnel.",
        "Deploy AD FS federation services."
    ],
    "answer": 1,
    "explanation": f"Workload Identity Federation allows external identities (like AWS or OIDC) to exchange local credentials for short-lived Google Cloud service account tokens. For credentials federation, check the {SRC_FRAMEWORK} Security pillar and {SRC_STUDY_GUIDE}."
})

cat3.append({
    "id": 70,
    "category": CATEGORIES[2],
    "question": "You are deploying a microservice on GKE that needs to access a Cloud Storage bucket. What is the Google-recommended approach to assign permissions to this GKE workload?",
    "options": [
        "Download a service account JSON key file and mount it as a Kubernetes Secret.",
        "Use GKE Workload Identity (or Workload Identity Federation for GKE) to bind the Kubernetes service account to a GCP IAM service account.",
        "Grant the GKE Node service account Admin access to the bucket.",
        "Use VPC Service Controls."
    ],
    "answer": 1,
    "explanation": f"Workload Identity maps Kubernetes service accounts directly to IAM service accounts, eliminating the need to manage secret key files. For GKE security, see {SRC_STUDY_GUIDE} and {SRC_SEB}."
})

cat3.append({
    "id": 71,
    "category": CATEGORIES[2],
    "question": "Your company needs to isolate sensitive financial data in BigQuery and prevent data exfiltration, even by users who have the BigQuery Admin role. What security feature should you configure?",
    "options": [
        "VPC firewall rules.",
        "VPC Service Controls (VPC-SC) to define a service perimeter around the project containing BigQuery.",
        "IAM custom roles.",
        "Chrome Enterprise Premium."
    ],
    "answer": 1,
    "explanation": f"VPC Service Controls establish logical perimeters that block egress and data exfiltration from managed services, even overriding IAM permissions. For exfiltration protection, see the {SRC_GUIDE} and the {SRC_FRAMEWORK} Security pillar."
})

cat3.append({
    "id": 72,
    "category": CATEGORIES[2],
    "question": "You want to secure access to an internal web application hosted on Compute Engine, ensuring only authenticated corporate employees can access it, without requiring a VPN. Which GCP service should you use?",
    "options": [
        "Cloud Armor.",
        "Identity-Aware Proxy (IAP).",
        "VPC Service Controls.",
        "Shared VPC."
    ],
    "answer": 1,
    "explanation": f"IAP intercepts HTTP requests at the load balancer, evaluating user identity and context before granting access without needing a VPN. For zero-trust access, see {SRC_STUDY_GUIDE} and {SRC_SEB}."
})

cat3.append({
    "id": 73,
    "category": CATEGORIES[2],
    "question": "Your compliance officer requires a dashboard that displays security vulnerabilities and resource configuration drift across all resources in your organization. What service provides this centrally?",
    "options": [
        "Cloud Asset Inventory.",
        "Security Command Center (SCC) Premium.",
        "Cloud Logging Query Panel.",
        "Ops Agent dashboard."
    ],
    "answer": 1,
    "explanation": f"Security Command Center provides unified vulnerability management, threat detection, and compliance reporting for GCP assets. For threat detection, see the {SRC_GUIDE} and {SRC_STUDY_GUIDE}."
})

cat3.append({
    "id": 74,
    "category": CATEGORIES[2],
    "question": "Your database contains user profiles with columns for social security numbers (SSN) and credit card details. You want to scan and redact this sensitive data automatically before exporting the table. Which service should you configure?",
    "options": [
        "Cloud SQL parameters.",
        "Cloud Data Loss Prevention (DLP) / Sensitive Data Protection API.",
        "IAM Custom roles.",
        "Cloud Logging filters."
    ],
    "answer": 1,
    "explanation": f"The DLP API classifies and redacts sensitive PII (like SSNs or credit card numbers) from text and structured database inputs. For PII protection, see {SRC_STUDY_GUIDE} and {SRC_VAQUAR} security."
})

cat3.append({
    "id": 75,
    "category": CATEGORIES[2],
    "question": "You need to enforce a policy where only container images compiled by Cloud Build and signed by your QA team can be deployed to your GKE clusters. What service enforces this check at deployment time?",
    "options": [
        "Kubernetes RBAC.",
        "Binary Authorization.",
        "VPC Service Controls.",
        "IAM Conditions."
    ],
    "answer": 1,
    "explanation": f"Binary Authorization integrates with GKE admission controllers to verify container signatures (attestations) before allowing deployment. For supply chain controls, see the {SRC_GUIDE} and {SRC_SEB}."
})

cat3.append({
    "id": 76,
    "category": CATEGORIES[2],
    "question": "Your enterprise needs to satisfy strict regulatory residency requirements, ensuring all computing resources are deployed only within European regions. What GCP feature enforces this restriction?",
    "options": [
        "VPC Subnet configurations.",
        "Resource Location Restriction Organization Policy.",
        "IAM Custom Roles.",
        "VPC Service Controls."
    ],
    "answer": 1,
    "explanation": f"Resource location restrictions are enforced via Organization Policies, restricting where resource creation requests are permitted. For compliance controls, see the {SRC_FRAMEWORK} Security pillar and {SRC_STUDY_GUIDE}."
})

cat3.append({
    "id": 77,
    "category": CATEGORIES[2],
    "question": "An administrator suspects that a service account key file was leaked to public forums. How can they verify who has used this service account to access APIs recently?",
    "options": [
        "Check Billing data tables.",
        "Inspect Data Access audit logs in Cloud Logging.",
        "Look at CPU metrics in Cloud Monitoring.",
        "Check the IAM policy bindings."
    ],
    "answer": 1,
    "explanation": f"Data Access audit logs record API calls that read metadata or write user data, tracking when and by whom service account keys were used. For audit logs, see {SRC_STUDY_GUIDE} and {SRC_VAQUAR} security."
})

cat3.append({
    "id": 78,
    "category": CATEGORIES[2],
    "question": "You want to restrict developers from generating external public IP addresses on their VM instances. Which organization policy constraint should you enable?",
    "options": [
        "constraints/compute.restrictLoadBalancerCreationForTypes",
        "constraints/compute.vmExternalIpAccess",
        "constraints/compute.restrictSharedVpcSubnets",
        "constraints/iam.disableServiceAccountKeyCreation"
    ],
    "answer": 1,
    "explanation": f"The `compute.vmExternalIpAccess` constraint restricts VMs from having external IP addresses, helping enforce private-only networks. For policy constraints, see {SRC_STUDY_GUIDE} and {SRC_SEB}."
})

cat3.append({
    "id": 79,
    "category": CATEGORIES[2],
    "question": "Your company wants to establish an isolated workspace that complies with FedRAMP High standards. What Google Cloud solution templates this environment creation?",
    "options": [
        "VPC Service Controls only.",
        "Assured Workloads.",
        "Resource Manager folders.",
        "IAM conditions."
    ],
    "answer": 1,
    "explanation": f"Assured Workloads helps configure environments matching compliance standards like FedRAMP or HIPAA, restricting resource regions and personnel access. For compliance frameworks, check the {SRC_FRAMEWORK} Security pillar and {SRC_GUIDE}."
})

cat3.append({
    "id": 80,
    "category": CATEGORIES[2],
    "question": "What is the security risk of generating and distributing service account JSON keys to developer workstations?",
    "options": [
        "JSON keys degrade network throughput.",
        "Service account key files are long-lived and difficult to track; if leaked, they grant persistent access to resources.",
        "They require daily rotation locally.",
        "GCP disables accounts with key files."
    ],
    "answer": 1,
    "explanation": f"Leaked JSON key files grant persistent access until revoked. Organizations should use short-lived tokens and Workload Identity instead. For key security, check the {SRC_FRAMEWORK} Security pillar and {SRC_STUDY_GUIDE}."
})

# ==========================================
# PART IV: Storage & Encryption
# ==========================================
cat4.append({
    "id": 81,
    "category": CATEGORIES[3],
    "question": "Your company stores petabytes of analytics data. Objects are accessed frequently during the first 30 days, rarely for the next 90 days, and never after that. How can you automate cost reduction?",
    "options": [
        "Write a python script to move files manually.",
        "Configure Object Lifecycle Management rules on the bucket to transition objects from Standard to Nearline after 30 days, then to Coldline after 120 days.",
        "Convert the bucket type to Archive storage.",
        "Apply VPC Service Controls."
    ],
    "answer": 1,
    "explanation": f"Object Lifecycle Management transitions objects to cooler classes automatically based on age, reducing storage costs. For storage cost tuning, check the {SRC_FRAMEWORK} Cost Optimization pillar and {SRC_STUDY_GUIDE}."
})

cat4.append({
    "id": 82,
    "category": CATEGORIES[3],
    "question": "A regulatory policy requires your financial documents to be stored in an unalterable state in Cloud Storage. No one, including project administrators, should be able to delete files for 7 years. What should you configure?",
    "options": [
        "Object Versioning.",
        "A locked Bucket Retention Policy.",
        "Standard lifecycle rule.",
        "Customer-Supplied Encryption Keys."
    ],
    "answer": 1,
    "explanation": f"A locked GCS bucket retention policy enforces WORM compliance, preventing resource deletion or policy modifications for the specified time. For retention rules, see the {SRC_GUIDE} and {SRC_STUDY_GUIDE} WORM guidelines."
})

cat4.append({
    "id": 83,
    "category": CATEGORIES[3],
    "question": "You have enabled Object Versioning on your Cloud Storage bucket. You notice your billing cost is rising rapidly. What is the most likely cause?",
    "options": [
        "Object versioning charges a penalty fee.",
        "Historical versions of files are retained indefinitely, accumulating storage charges. You need a lifecycle rule to delete noncurrent versions after a specified age.",
        "Version metadata is expensive.",
        "Uniform bucket access is disabled."
    ],
    "answer": 1,
    "explanation": f"Versioning keeps all historical copies of modified/deleted files, which incur standard storage fees until deleted by lifecycle rules. For lifecycle management, check the {SRC_FRAMEWORK} Cost Optimization pillar and {SRC_SEB}."
})

cat4.append({
    "id": 84,
    "category": CATEGORIES[3],
    "question": "You need to grant temporary, time-limited access (e.g. 15 minutes) to a private file stored in Cloud Storage to a mobile application client. What GCS feature should you use?",
    "options": [
        "Grant the client Viewer role.",
        "Generate a Signed URL.",
        "Enable Uniform Bucket-Level Access.",
        "Peered VPC endpoints."
    ],
    "answer": 1,
    "explanation": f"Signed URLs use a cryptographic signature to delegate temporary read or write access to an object without needing Google credentials. For secure asset distribution, see {SRC_STUDY_GUIDE} and {SRC_VAQUAR} storage."
})

cat4.append({
    "id": 85,
    "category": CATEGORIES[3],
    "question": "You want to enforce IAM-only permissions on a Cloud Storage bucket, disabling legacy object-level Access Control Lists (ACLs) entirely. What bucket configuration should you enable?",
    "options": [
        "Object Lifecycle Management.",
        "Uniform Bucket-Level Access.",
        "Signed URLs.",
        "Bucket Encryption."
    ],
    "answer": 1,
    "explanation": f"Uniform bucket-level access disables ACLs, ensuring that access is managed solely using project-level or bucket-level IAM policies. For access control design, see the {SRC_FRAMEWORK} Security pillar and {SRC_GUIDE}."
})

cat4.append({
    "id": 86,
    "category": CATEGORIES[3],
    "question": "You need to share file systems between multiple Compute Engine instances located across different zones, requiring POSIX-compliant, concurrent read-write access. Which storage option fits this scenario?",
    "options": [
        "Local SSD.",
        "Filestore instance mounted via NFS.",
        "Persistent Disk with Multi-writer mode enabled.",
        "Cloud Storage FUSE."
    ],
    "answer": 1,
    "explanation": f"Filestore provides managed NFS shares that support concurrent read-write mounts (POSIX compliant) across zones. For fileshares, see the {SRC_GUIDE} and {SRC_STUDY_GUIDE}."
})

cat4.append({
    "id": 87,
    "category": CATEGORIES[3],
    "question": "You need to transfer 500 TB of image files from an on-premises storage array to Google Cloud over a 1 Gbps connection. What is the most efficient and time-saving method?",
    "options": [
        "Use `gcloud storage cp` over the network.",
        "Request a Google Transfer Appliance, copy data locally, and ship it to Google for ingestion.",
        "Set up a dedicated VPN tunnel.",
        "Write a custom Python upload script."
    ],
    "answer": 1,
    "explanation": f"For data volumes above 100 TB on limited bandwidth networks, physical transfer using a Transfer Appliance is faster than network transfers. For migration tools, see {SRC_STUDY_GUIDE} and {SRC_SEB}."
})

cat4.append({
    "id": 88,
    "category": CATEGORIES[3],
    "question": "What is the primary trade-off of using Local SSDs on Compute Engine instances compared to Persistent Disks?",
    "options": [
        "Local SSDs are slower than persistent disks.",
        "Local SSDs are physically attached to the host server, offering higher throughput and lower latency, but their data is lost when the instance is stopped or deleted.",
        "Local SSDs do not support Linux file systems.",
        "Local SSDs can be attached to multiple VMs simultaneously."
    ],
    "answer": 1,
    "explanation": f"Local SSDs offer exceptional IOPS and low latency but are ephemeral; their data does not survive VM termination or hardware stopping events. For VM storage trade-offs, check the {SRC_FRAMEWORK} Performance Optimization pillar and {SRC_STUDY_GUIDE}."
})

cat4.append({
    "id": 89,
    "category": CATEGORIES[3],
    "question": "Your database application requires a storage volume that survives instance stop/start events and can be dynamically resized while active. Which storage option should you choose?",
    "options": [
        "Local SSD.",
        "Persistent Disk (Standard, Balanced, or SSD).",
        "Filestore.",
        "Cloud Storage bucket."
    ],
    "answer": 1,
    "explanation": f"Persistent Disks are durable block storage volumes that survive VM restarts and support dynamic online size expansion without downtime. See disk features in {SRC_STUDY_GUIDE} and {SRC_VAQUAR}."
})

cat4.append({
    "id": 90,
    "category": CATEGORIES[3],
    "question": "You have a high-performance database requiring 80,000 write IOPS. Which Compute Engine persistent disk type provides the highest performance for extreme database workloads?",
    "options": [
        "Standard Persistent Disk (pd-standard).",
        "Extreme Persistent Disk (pd-extreme) or Hyperdisk Extreme.",
        "Balanced Persistent Disk (pd-balanced).",
        "Cloud Storage bucket."
    ],
    "answer": 1,
    "explanation": f"Extreme and Hyperdisk storage types are designed for high-performance databases, delivering maximum IOPS and throughput. For performance storage, see {SRC_SEB} and the {SRC_FRAMEWORK} Performance Optimization pillar."
})

# ==========================================
# PART V: Compute & Virtual Machines
# ==========================================
cat5.append({
    "id": 91,
    "category": CATEGORIES[4],
    "question": "You are hosting a batch workload that can tolerate interruptions and needs to run at the lowest possible price point. Which VM configuration should you deploy?",
    "options": [
        "Committed Use Discount instance.",
        "Spot VM (with preemption script handling).",
        "Sole-tenant node VM.",
        "Custom Machine Type VM."
    ],
    "answer": 1,
    "explanation": f"Spot VMs offer discounts up to 91% compared to standard instances but can be preempted at any time by GCP, matching fault-tolerant workloads. See compute pricing in the {SRC_GUIDE} and {SRC_STUDY_GUIDE}."
})

cat5.append({
    "id": 92,
    "category": CATEGORIES[4],
    "question": "You have a database application running on Compute Engine VMs that requires consistent, predictable performance and must not be placed on physical hardware shared with other customers due to licensing constraints. What VM configuration fits this requirement?",
    "options": [
        "Shielded VM.",
        "Sole-Tenant Nodes.",
        "Spot VM.",
        "Preemptible VM."
    ],
    "answer": 1,
    "explanation": f"Sole-Tenant Nodes provide exclusive use of a physical Compute Engine server, meeting strict security, compliance, or licensing requirements. See hosting options in the {SRC_GUIDE} and {SRC_SEB}."
})

cat5.append({
    "id": 93,
    "category": CATEGORIES[4],
    "question": "You are designing a high-availability web app using a Managed Instance Group (MIG). You need to ensure the MIG automatically replaces any instance if its internal web server process stops responding. What should you configure?",
    "options": [
        "An autoscaling metric.",
        "An autohealing policy linked to an HTTP health check.",
        "A manual cron script.",
        "Multi-zone VM deployment."
    ],
    "answer": 1,
    "explanation": f"Autohealing policies use health checks to monitor application health inside MIG instances. If the health check fails, the MIG controller reconstructs the VM automatically. For autohealing setups, see the {SRC_FRAMEWORK} Reliability pillar and {SRC_STUDY_GUIDE}."
})

cat5.append({
    "id": 94,
    "category": CATEGORIES[4],
    "question": "Your MIG needs to scale up and down dynamically based on user traffic. What configuration parameters should you define in the autoscaling policy?",
    "options": [
        "A CPU utilization threshold, HTTP Load Balancer utilization, or custom Cloud Monitoring metrics.",
        "Disk storage limits.",
        "Static VM count quotas.",
        "A Cron schedule."
    ],
    "answer": 0,
    "explanation": f"Compute Engine autoscalers dynamically scale instance groups based on target signals like CPU load, HTTP LB capacity, or custom metrics. For autoscaling configurations, see {SRC_STUDY_GUIDE} and {SRC_VAQUAR} VMs."
})

cat5.append({
    "id": 95,
    "category": CATEGORIES[4],
    "question": "You need to update the application code on instances within a Managed Instance Group (MIG) without causing application downtime. Which update method should you configure?",
    "options": [
        "Recreate the entire MIG immediately.",
        "Configure a rolling update policy with maxSurge and maxUnavailable settings.",
        "Shutdown all instances and deploy new templates manually.",
        "Update the instances using SSH."
    ],
    "answer": 1,
    "explanation": f"Rolling updates in a MIG gradually replace old instances with new ones, using maxSurge/maxUnavailable settings to maintain serving capacity. For MIG rollouts, see the {SRC_FRAMEWORK} Reliability pillar and {SRC_SEB}."
})

cat5.append({
    "id": 96,
    "category": CATEGORIES[4],
    "question": "Your database workload requires 120 GB of RAM but only 4 CPUs. Selecting a standard machine family forces you to pay for excess CPUs. How can you optimize this compute cost?",
    "options": [
        "Select a memory-optimized machine type.",
        "Configure a Custom Machine Type specifying 4 vCPUs and 120 GB of memory.",
        "Use Spot VMs.",
        "Deploy the database on App Engine."
    ],
    "answer": 1,
    "explanation": f"Custom Machine Types allow you to tailor CPU and memory ratios, avoiding charges for unneeded compute resources. For resource optimization, check the {SRC_FRAMEWORK} Cost Optimization pillar and {SRC_STUDY_GUIDE}."
})

cat5.append({
    "id": 97,
    "category": CATEGORIES[4],
    "question": "To secure your virtual machines from boot-level rootkits and ensure kernel integrity, what Compute Engine security features should you enable?",
    "options": [
        "VPC Service Controls.",
        "Shielded VMs with Secure Boot, vTPM, and Integrity Monitoring enabled.",
        "OS Login.",
        "Hierarchical Firewalls."
    ],
    "answer": 1,
    "explanation": f"Shielded VMs provide boot-level security controls (Secure Boot, vTPM, integrity monitoring) that defend against firmware and kernel tampering. See compute security in the {SRC_GUIDE} and {SRC_STUDY_GUIDE}."
})

cat5.append({
    "id": 98,
    "category": CATEGORIES[4],
    "question": "Your VM instances run batch workloads. You need to run initialization scripts to download dependencies every time an instance starts. Where should you define these scripts?",
    "options": [
        "Save scripts directly in the VM boot image.",
        "Define startup scripts in the VM's custom metadata fields.",
        "Configure SSH configuration settings.",
        "Use Cloud Build triggers."
    ],
    "answer": 1,
    "explanation": f"Compute Engine executes startup scripts defined in metadata keys during boot, automating software installations. For VM initialization, see {SRC_STUDY_GUIDE} and {SRC_VAQUAR} compute."
})

cat5.append({
    "id": 99,
    "category": CATEGORIES[4],
    "question": "Google Cloud occasionally performs hardware maintenance on the host physical servers. You want to ensure your critical VMs remain active during these events. What availability policy should you configure?",
    "options": [
        "Set On Host Maintenance to Terminate.",
        "Set On Host Maintenance to Migrate (Live Migration).",
        "Use Spot VM configurations.",
        "Configure an autoscaling instance group."
    ],
    "answer": 1,
    "explanation": f"The Live Migration policy migrates VMs to a new physical host automatically without interruption during hardware maintenance events. For availability policies, check the {SRC_FRAMEWORK} Reliability pillar and {SRC_SEB}."
})

cat5.append({
    "id": 100,
    "category": CATEGORIES[4],
    "question": "Your development team needs to deploy light, containerized microservices without managing full VM operating systems or Docker installations manually. Which VM deployment method should you choose?",
    "options": [
        "Standard VM with custom scripts.",
        "Deploy a Container-Optimized OS (COS) image directly to the Compute Engine instances.",
        "Use App Engine Flexible.",
        "Configure a Shared VPC cluster."
    ],
    "answer": 1,
    "explanation": f"Container-Optimized OS is a Google-managed minimal OS with Docker pre-installed, designed for running containers securely on VMs. See COS features in the {SRC_GUIDE} and {SRC_STUDY_GUIDE}."
})

# ==========================================
# PART VI: Managed Compute & Serverless
# ==========================================
cat6.append({
    "id": 101,
    "category": CATEGORIES[5],
    "question": "Your development team wants to deploy a web application packaged as a container image. The application experiences sudden traffic spikes but scales down to zero requests at night. They want to pay only during request processing. What is the recommended service?",
    "options": [
        "App Engine Flexible.",
        "Cloud Run.",
        "GKE Standard Cluster.",
        "Compute Engine MIG."
    ],
    "answer": 1,
    "explanation": f"Cloud Run is a serverless platform that hosts containerized apps, scales to zero when idle, and charges only for resources consumed during active request processing. For serverless patterns, see the {SRC_GUIDE} and {SRC_SEB}."
})

cat6.append({
    "id": 102,
    "category": CATEGORIES[5],
    "question": "An enterprise web app runs continuously, relies on custom native OS libraries, and requires persistent local disk access. Which App Engine environment should you choose?",
    "options": [
        "App Engine Standard.",
        "App Engine Flexible.",
        "Cloud Functions.",
        "Cloud Run Jobs."
    ],
    "answer": 1,
    "explanation": f"App Engine Flexible runs applications within Docker containers on VMs, supporting custom runtimes, OS libraries, and persistent disks. See App Engine comparisons in the {SRC_GUIDE} and {SRC_STUDY_GUIDE}."
})

cat6.append({
    "id": 103,
    "category": CATEGORIES[5],
    "question": "Your Cloud Run service needs to access a Cloud SQL PostgreSQL database located on a private VPC network without exposing the database to the internet. How should you design the connection?",
    "options": [
        "Assign a public IP address to the database and use password authentication.",
        "Configure a Serverless VPC Access Connector associated with the VPC, and route Cloud Run traffic through this connector.",
        "Set up a public VPN tunnel.",
        "Use local VM SSH keys."
    ],
    "answer": 1,
    "explanation": f"Serverless VPC Access Connectors route traffic from serverless runtimes (like Cloud Run or Cloud Functions) into a private VPC, securing database connections. For private connections, see {SRC_STUDY_GUIDE} and {SRC_SEB}."
})

cat6.append({
    "id": 104,
    "category": CATEGORIES[5],
    "question": "You are deploying a background task that processes heavy media transcoding tasks. The tasks run sequentially, do not serve web traffic, and can take up to 2 hours to execute. Which serverless compute options should you use?",
    "options": [
        "Cloud Functions.",
        "Cloud Run Jobs.",
        "App Engine Standard.",
        "Cloud Run Services."
    ],
    "answer": 1,
    "explanation": f"Cloud Run Jobs are designed for run-to-completion tasks (up to 24 hours execution time) that do not respond to web requests, making them ideal for media transcoding. For serverless job routing, see {SRC_STUDY_GUIDE} and {SRC_VAQUAR}."
})

cat6.append({
    "id": 105,
    "category": CATEGORIES[5],
    "question": "How can you implement traffic splitting in Cloud Run to safely test a new deployment version with 5% of production traffic?",
    "options": [
        "Use a GKE Ingress controller.",
        "Configure Traffic Splitting in Cloud Run's service settings, routing 5% to the new revision and 95% to the stable revision.",
        "Use Cloud DNS routing policies.",
        "Deploy a separate proxy VM."
    ],
    "answer": 1,
    "explanation": f"Cloud Run supports native revision management and traffic splitting, allowing canary releases directly within the console or via gcloud commands. See release management in the {SRC_FRAMEWORK} Reliability pillar and {SRC_STUDY_GUIDE}."
})

cat6.append({
    "id": 106,
    "category": CATEGORIES[5],
    "question": "What is the primary constraint of using Cloud Functions (2nd Gen) compared to App Engine or GKE for running application workloads?",
    "options": [
        "Cloud Functions do not support HTTPS endpoints.",
        "Cloud Functions have a maximum request timeout limit (typically 60 minutes) and are stateless, making them unsuitable for long-running stateful services.",
        "Cloud Functions do not integrate with Secret Manager.",
        "They only support Python."
    ],
    "answer": 1,
    "explanation": f"Cloud Functions are event-driven and stateless, designed for short-lived tasks. Workloads requiring long-running state or execution times should use VM or container runtimes. See comparisons in the {SRC_GUIDE} and {SRC_SEB}."
})

cat6.append({
    "id": 107,
    "category": CATEGORIES[5],
    "question": "Your serverless web API experiences heavy peak traffic. When scaling up, database connections are exhausted due to too many parallel database connections from Cloud Run instances. How should you mitigate this?",
    "options": [
        "Increase the database disk storage.",
        "Configure Cloud SQL Auth Proxy with connection pooling, and restrict the max-instances setting on Cloud Run.",
        "Recreate the database as a GCS bucket.",
        "Disable scaling on Cloud Run."
    ],
    "answer": 1,
    "explanation": f"Restricting Cloud Run max-instances limits the maximum number of container instances, while connection pooling reuse limits active connections to the database. For scaling limits, check the {SRC_FRAMEWORK} Performance Optimization pillar and {SRC_STUDY_GUIDE}."
})

cat6.append({
    "id": 108,
    "category": CATEGORIES[5],
    "question": "You want to trigger a Cloud Function every time a new file is uploaded to a Cloud Storage bucket. Which event-driven architecture should you implement?",
    "options": [
        "Write a cron script on a VM to search the bucket.",
        "Set up a GCS Bucket Notification that publishes to a Pub/Sub topic, which triggers the Cloud Function.",
        "Use Cloud Trace triggers.",
        "Configure Cloud Build variables."
    ],
    "answer": 1,
    "explanation": f"GCS bucket events can publish notifications to Pub/Sub, which natively triggers Cloud Functions for event-driven workflows. For event-driven patterns, check the {SRC_FRAMEWORK} Reliability pillar and {SRC_STUDY_GUIDE}."
})

cat6.append({
    "id": 109,
    "category": CATEGORIES[5],
    "question": "Which service should you choose for lightweight Python microservices that execute only in response to asynchronous webhooks or HTTP callbacks?",
    "options": [
        "App Engine Flexible.",
        "Cloud Functions.",
        "Compute Engine VM.",
        "Cloud Run Jobs."
    ],
    "answer": 1,
    "explanation": f"Cloud Functions are ideal for lightweight, single-purpose event-driven services like webhook handlers and callbacks. For serverless selection, check {SRC_STUDY_GUIDE} and {SRC_VAQUAR}."
})

cat6.append({
    "id": 110,
    "category": CATEGORIES[5],
    "question": "What configuration setting prevents a serverless Cloud Run application from experiencing slow performance due to cold starts during initial request spikes?",
    "options": [
        "Set maximum instances to 10.",
        "Configure the minimum instances (min-instances) setting to a value greater than zero.",
        "Increase the memory size of the VM container.",
        "Set CPU allocation to 'always on'."
    ],
    "answer": 1,
    "explanation": f"Setting a minimum instance count keeps a specified number of container instances warm and active, eliminating cold starts for inbound requests. For latency tuning, check the {SRC_FRAMEWORK} Performance Optimization pillar and {SRC_SEB}."
})

# ==========================================
# PART VII: Google Kubernetes Engine
# ==========================================
cat7.append({
    "id": 111,
    "category": CATEGORIES[6],
    "question": "You need to host a GKE cluster. You want to minimize operational overhead by delegating node provisioning, cluster scaling, and OS updates entirely to Google. Which GKE mode should you use?",
    "options": [
        "GKE Standard.",
        "GKE Autopilot.",
        "GKE Multi-cluster.",
        "Kubernetes on Compute Engine."
    ],
    "answer": 1,
    "explanation": f"GKE Autopilot fully automates cluster management, including node provisioning, scaling, patching, and OS upgrades. For cluster comparisons, see the GKE section in the {SRC_GUIDE} and {SRC_STUDY_GUIDE}."
})

cat7.append({
    "id": 112,
    "category": CATEGORIES[6],
    "question": "You have a stateless web application deployed in GKE. The application experiences traffic spikes during working hours. You want to scale the number of running pod replicas dynamically based on CPU utilization. What Kubernetes resource should you configure?",
    "options": [
        "Cluster Autoscaler.",
        "Horizontal Pod Autoscaler (HPA).",
        "Vertical Pod Autoscaler (VPA).",
        "Node Auto-repair."
    ],
    "answer": 1,
    "explanation": f"The Horizontal Pod Autoscaler (HPA) adjusts pod replica counts dynamically based on resource usage metrics like CPU or memory thresholds. See scaling details in the {SRC_GUIDE} and {SRC_STUDY_GUIDE}."
})

cat7.append({
    "id": 113,
    "category": CATEGORIES[6],
    "question": "Your GKE pods need to query metadata and call the Cloud Storage API. You want to avoid storing service account keys inside the containers. What configuration should you enable?",
    "options": [
        "VPC Service Controls.",
        "GKE Workload Identity.",
        "Kubernetes Secrets.",
        "IAM conditions."
    ],
    "answer": 1,
    "explanation": f"Workload Identity links Kubernetes service accounts directly to Google Cloud IAM service accounts, eliminating key file storage. For GKE security, see {SRC_STUDY_GUIDE} and {SRC_SEB}."
})

cat7.append({
    "id": 114,
    "category": CATEGORIES[6],
    "question": "You are hosting a multi-tenant GKE cluster. You want to prevent pods in Namespace A from sending network traffic to pods in Namespace B. What Kubernetes resource should you configure?",
    "options": [
        "GCP VPC Firewall Rules.",
        "Network Policies.",
        "Kubernetes RBAC RoleBindings.",
        "Binary Authorization."
    ],
    "answer": 1,
    "explanation": f"Kubernetes Network Policies regulate traffic flow between pods and namespaces, securing multi-tenant clusters. For container network security, check the {SRC_FRAMEWORK} Security pillar and {SRC_STUDY_GUIDE}."
})

cat7.append({
    "id": 115,
    "category": CATEGORIES[6],
    "question": "Your GKE deployment needs to resolve external client requests using Google's global network edge. You want to leverage Container-Native Load Balancing to bypass kube-proxy routing. What resource configuration is required?",
    "options": [
        "Create a GKE ClusterIP service.",
        "Enable Network Endpoint Groups (NEGs) in the GKE Service annotations, and use GKE Ingress.",
        "Deploy a traditional external Network Load Balancer.",
        "Configure NodePort service types."
    ],
    "answer": 1,
    "explanation": f"Container-Native Load Balancing uses NEGs to route traffic directly from the Google load balancer to the pod IP addresses, improving latency and avoiding kube-proxy hops. For GKE load balancing, see {SRC_STUDY_GUIDE} and {SRC_SEB}."
})

cat7.append({
    "id": 116,
    "category": CATEGORIES[6],
    "question": "To secure your GKE deployment pipeline, you need to ensure that only container images built by your secure CI/CD pipeline and verified by a vulnerability scan can be run in the cluster. What service enforces this check at admission time?",
    "options": [
        "Kubernetes RBAC.",
        "Binary Authorization.",
        "VPC Service Controls.",
        "GKE Sandbox."
    ],
    "answer": 1,
    "explanation": f"Binary Authorization integrates with GKE to evaluate deployment attestations (like vulnerability scan signatures) and block unverified images. For container pipeline security, see the {SRC_GUIDE} and the {SRC_FRAMEWORK} Security pillar."
})

cat7.append({
    "id": 117,
    "category": CATEGORIES[6],
    "question": "Your database pod running in GKE requires persistent, high-performance block storage that survives pod crashes and maintains its data identity. What Kubernetes controllers and resources should you use?",
    "options": [
        "Kubernetes Deployment with hostPath storage.",
        "StatefulSet controller coupled with PersistentVolumeClaims (PVCs) requesting SSD persistent disks.",
        "Standard Pod with emptyDir storage.",
        "Cloud Storage FUSE mounting."
    ],
    "answer": 1,
    "explanation": f"StatefulSets manage stateful workloads, guaranteeing persistent network and storage identities across pod restarts. For stateful storage, check the {SRC_FRAMEWORK} Reliability pillar and {SRC_STUDY_GUIDE}."
})

cat7.append({
    "id": 118,
    "category": CATEGORIES[6],
    "question": "An administrator needs to restrict access to the GKE control plane, ensuring only authorized developers from specific corporate IP ranges can run kubectl commands against the cluster. What configuration should they apply?",
    "options": [
        "VPC firewall rules on the GKE nodes.",
        "Master Authorized Networks on the GKE cluster configuration.",
        "GKE Network Policies.",
        "Kubernetes Service type LoadBalancer."
    ],
    "answer": 1,
    "explanation": f"Master Authorized Networks block external access to the GKE control plane API server, permitting only specified CIDR blocks. For GKE administrative security, see the {SRC_GUIDE} and {SRC_STUDY_GUIDE}."
})

cat7.append({
    "id": 119,
    "category": CATEGORIES[6],
    "question": "Your cluster autoscaler is failing to spin down empty nodes. You suspect some pods are running without controller bindings, preventing eviction. Which Kubernetes pod parameter controls eviction allowances?",
    "options": [
        "Taints and Tolerations.",
        "Pod Disruption Budgets (PDB).",
        "Pod priority rules.",
        "Namespace limits."
    ],
    "answer": 1,
    "explanation": f"Pod Disruption Budgets define the minimum available replicas or maximum down replicas during voluntary disruptions, guiding cluster autoscaling eviction rules. For GKE node eviction, see {SRC_STUDY_GUIDE} and {SRC_VAQUAR} GKE."
})

cat7.append({
    "id": 120,
    "category": CATEGORIES[6],
    "question": "You have a batch processing workload in GKE. The pods run for 30 minutes, write results to BigQuery, and terminate. You want to run these pods on cheaper Spot instances to save costs. How do you prevent critical jobs from failing if node preemption occurs?",
    "options": [
        "Use a StatefulSet with local SSDs.",
        "Create a GKE Node Pool with Spot VMs enabled, configure the pods to tolerate the spot taints, and design the application code to checkpoint results and restart gracefully.",
        "Run the pods in App Engine.",
        "Disable GKE auto-healing."
    ],
    "answer": 1,
    "explanation": f"Spot node pools reduce costs but can be preempted. Workloads must tolerate spot taints, support graceful shutdown signals, and checkpoint progress. For GKE cost optimization, check the {SRC_FRAMEWORK} Cost Optimization pillar and {SRC_SEB}."
})

# ==========================================
# PART VIII: Hybrid, Multi-Cloud & Anthos
# ==========================================
cat8.append({
    "id": 121,
    "category": CATEGORIES[7],
    "question": "You need to manage GKE clusters deployed across Google Cloud, AWS, and on-premises environments. You want to view and manage all clusters from a single central console. What solution should you deploy?",
    "options": [
        "Compute Engine VMs running monitoring scripts.",
        "Anthos / GKE Enterprise hub cluster registration.",
        "VPC Network Peering.",
        "Cloud Monitoring dashboards."
    ],
    "answer": 1,
    "explanation": f"Anthos (GKE Enterprise) allows registering multi-cloud and on-premises Kubernetes clusters to a single GCP dashboard. For hybrid fleet management, see the Anthos section in the {SRC_GUIDE} and {SRC_STUDY_GUIDE}."
})

cat8.append({
    "id": 122,
    "category": CATEGORIES[7],
    "question": "Your security policy states that all Kubernetes clusters across your hybrid cloud must enforce identical security policies and namespace configurations. You want to manage this configuration centrally via Git. What Anthos component fits this scenario?",
    "options": [
        "Anthos Service Mesh (ASM).",
        "Anthos Config Management (ACM) Config Sync.",
        "Migrate to Containers.",
        "Policy Controller."
    ],
    "answer": 1,
    "explanation": f"Anthos Config Management (ACM) uses GitOps to synchronize declarative configurations from a Git repository to registered Kubernetes clusters automatically. For policy synchronization, see the {SRC_GUIDE} and {SRC_SEB}."
})

cat8.append({
    "id": 123,
    "category": CATEGORIES[7],
    "question": "You want to implement secure, encrypted communication (mTLS) and collect fine-grained telemetry for all microservice-to-microservice traffic running across your hybrid clusters. Which Anthos component should you configure?",
    "options": [
        "Anthos Config Sync.",
        "Anthos Service Mesh (ASM).",
        "Cloud VPN.",
        "Network Connectivity Center."
    ],
    "answer": 1,
    "explanation": f"Anthos Service Mesh (ASM) provides service-to-service traffic management, mTLS security, and telemetry routing for Kubernetes microservices. For hybrid meshes, see {SRC_STUDY_GUIDE} and {SRC_SEB}."
})

cat8.append({
    "id": 124,
    "category": CATEGORIES[7],
    "question": "You need to migrate legacy on-premises Linux virtual machines running web applications to GKE. You want to automate the containerization of these VM workloads. What Google Cloud tool should you use?",
    "options": [
        "Compute Engine migration manager.",
        "Migrate to Containers (formerly Migrate for Anthos).",
        "Storage Transfer Service.",
        "Cloud Build."
    ],
    "answer": 1,
    "explanation": f"Migrate to Containers extracts VM disk layers and package configurations, containerizing them to deploy directly on GKE clusters. For migration tools, see the {SRC_GUIDE} and {SRC_STUDY_GUIDE}."
})

cat8.append({
    "id": 125,
    "category": CATEGORIES[7],
    "question": "Your hybrid network connects on-premises servers to a GCP VPC using an HA VPN. How should dynamic routing be configured to ensure that on-premises route changes propagate to GCP subnets automatically?",
    "options": [
        "Configure static routes manually.",
        "Enable dynamic routing in the VPC, configure BGP on your Cloud Router, and peer with the on-premises VPN gateway.",
        "Use VPC Peering.",
        "Deploy BIND servers."
    ],
    "answer": 1,
    "explanation": f"Cloud Router running dynamic BGP dynamically exchanges routes over VPN or Interconnect, automating hybrid routing. For dynamic routing, see the {SRC_FRAMEWORK} Reliability pillar and {SRC_STUDY_GUIDE}."
})

cat8.append({
    "id": 126,
    "category": CATEGORIES[7],
    "question": "You want to enforce Open Policy Agent (OPA) constraints (e.g. blocking namespaces without department labels) on GKE clusters. Which Anthos tool provides this validation?",
    "options": [
        "Config Sync.",
        "Policy Controller.",
        "Anthos Service Mesh.",
        "Binary Authorization."
    ],
    "answer": 1,
    "explanation": f"Policy Controller uses OPA constraint templates to enforce policies and block non-compliant Kubernetes resource creation. For policy controls, see {SRC_STUDY_GUIDE} and {SRC_VAQUAR} Anthos."
})

cat8.append({
    "id": 127,
    "category": CATEGORIES[7],
    "question": "You have GKE clusters on-premises running on bare-metal hardware. You want to route user requests across these on-premises nodes and GCP VPC nodes using a single entry point. What Anthos resource should you configure?",
    "options": [
        "VPC Peering.",
        "Anthos Multi-cluster Ingress.",
        "Global external HTTP(S) Load Balancer without proxies.",
        "Classic VPN."
    ],
    "answer": 1,
    "explanation": f"Multi-cluster Ingress allows configuring a global load balancer that routes traffic across GKE clusters deployed in multiple clouds or regions. For multi-cluster routing, see the {SRC_FRAMEWORK} Reliability pillar and {SRC_SEB}."
})

cat8.append({
    "id": 128,
    "category": CATEGORIES[7],
    "question": "Your on-premises applications need to consume Google APIs (like BigQuery or Cloud Storage) over a private hybrid connection without routing over the public internet. What GCP network feature should you enable?",
    "options": [
        "Public DNS records.",
        "Private Google Access for on-premises hosts.",
        "VPC Peering.",
        "Cloud NAT."
    ],
    "answer": 1,
    "explanation": f"Private Google Access for on-premises hosts maps Google API domains to private IP addresses routed over VPN or Interconnect, securing API traffic. For hybrid access, see the {SRC_GUIDE} and {SRC_STUDY_GUIDE}."
})

cat8.append({
    "id": 129,
    "category": CATEGORIES[7],
    "question": "Your enterprise wants to deploy an API gateway to manage, secure, and monitor APIs across both on-premises data centers and Google Cloud. What API management platform should you configure?",
    "options": [
        "Cloud Load Balancing.",
        "Apigee API Management.",
        "Cloud NAT.",
        "Shared VPC."
    ],
    "answer": 1,
    "explanation": f"Apigee provides enterprise API gateway and monitoring features across multi-cloud and on-premises environments. For API management, see {SRC_STUDY_GUIDE} and {SRC_VAQUAR} API tools."
})

cat8.append({
    "id": 130,
    "category": CATEGORIES[7],
    "question": "What is the primary GitOps benefit of using Anthos Config Sync compared to scripting deployment steps in CI/CD tools?",
    "options": [
        "Config Sync is faster.",
        "Config Sync continuously monitors the GKE cluster state for drift and automatically reconciles changes, undoing manual 'kubectl edit' edits that deviate from Git.",
        "It eliminates the need for Git repositories.",
        "It only supports Docker Compose."
    ],
    "answer": 1,
    "explanation": f"Config Sync operates as an active GitOps agent inside GKE clusters, constantly reconciling cluster states to match Git and correcting configuration drift. For GitOps patterns, see the {SRC_FRAMEWORK} Operational Excellence pillar and {SRC_SEB}."
})

# ==========================================
# PART IX: Databases & Data Tooling
# ==========================================
cat9.append({
    "id": 131,
    "category": CATEGORIES[8],
    "question": "You need to migrate an on-premises PostgreSQL database to GCP. The application requires global horizontal scaling (both reads and writes) and strong ACID transactions. Which database should you choose?",
    "options": [
        "Cloud SQL PostgreSQL.",
        "Cloud Spanner.",
        "Cloud Bigtable.",
        "AlloyDB."
    ],
    "answer": 1,
    "explanation": f"Cloud Spanner is a relational database designed for global horizontal scale with strong ACID consistency. For database comparisons, see the databases section in the {SRC_GUIDE} and {SRC_STUDY_GUIDE}."
})

cat9.append({
    "id": 132,
    "category": CATEGORIES[8],
    "question": "You need to configure a relational database for a regional web application. The database requires high-availability failover across zones, automated backups, and read replicas. What is the recommended service?",
    "options": [
        "Cloud Spanner.",
        "Cloud SQL (with High Availability enabled).",
        "Cloud Bigtable.",
        "Firestore."
    ],
    "answer": 1,
    "explanation": f"Cloud SQL HA configurations deploy a standby instance in a different zone, enabling automated regional failover. See Cloud SQL features in the {SRC_GUIDE} and {SRC_STUDY_GUIDE}."
})

cat9.append({
    "id": 133,
    "category": CATEGORIES[8],
    "question": "Your application ingests massive streams of IoT sensor readings that must be queried with sub-millisecond write latency. The database must scale to petabytes. Which database fits this description?",
    "options": [
        "Cloud SQL.",
        "Cloud Bigtable.",
        "Cloud Spanner.",
        "Firestore."
    ],
    "answer": 1,
    "explanation": f"Cloud Bigtable is Google's NoSQL database optimized for high-throughput, low-latency writes and petabyte-scale analytics. For IoT storage, see {SRC_STUDY_GUIDE} and {SRC_SEB}."
})

cat9.append({
    "id": 134,
    "category": CATEGORIES[8],
    "question": "You need to select a database for a mobile application requiring flexible schema documents, real-time client sync, offline cache support, and transaction compliance. Which database should you choose?",
    "options": [
        "Cloud Bigtable.",
        "Firestore.",
        "Cloud SQL.",
        "Memorystore."
    ],
    "answer": 1,
    "explanation": f"Firestore is a serverless NoSQL document database designed for mobile and web applications with real-time sync capabilities. For document databases, see the {SRC_GUIDE} and {SRC_STUDY_GUIDE}."
})

cat9.append({
    "id": 135,
    "category": CATEGORIES[8],
    "question": "Your company needs an enterprise data warehouse to store and analyze petabytes of multi-region data, using standard SQL queries and paying only for queries executed. What service should you use?",
    "options": [
        "Cloud SQL.",
        "BigQuery.",
        "Cloud Spanner.",
        "Dataproc."
    ],
    "answer": 1,
    "explanation": f"BigQuery is a serverless, highly scalable data warehouse designed for SQL analysis of large-scale datasets. See BigQuery architecture in the {SRC_GUIDE} and {SRC_STUDY_GUIDE}."
})

cat9.append({
    "id": 136,
    "category": CATEGORIES[8],
    "question": "A data analyst is running expensive SQL queries against a 50 TB logs table in BigQuery. The queries scan too much data and take several minutes. How can you optimize the table schema and query performance?",
    "options": [
        "Export the table as CSV.",
        "Partition the table daily by click_timestamp and cluster by country.",
        "Use manual sharded tables.",
        "Deploy Memorystore."
    ],
    "answer": 1,
    "explanation": f"Partitioning and clustering BigQuery tables narrows the data scanned during query execution, improving performance and cost. For BigQuery optimizations, check the {SRC_FRAMEWORK} Performance Optimization pillar and {SRC_SEB}."
})

cat9.append({
    "id": 137,
    "category": CATEGORIES[8],
    "question": "Your team needs to process real-time streaming data from thousands of mobile clients and route it to a data processing pipeline. What messaging queue should you deploy?",
    "options": [
        "Cloud NAT.",
        "Cloud Pub/Sub.",
        "Memorystore.",
        "Cloud SQL."
    ],
    "answer": 1,
    "explanation": f"Pub/Sub is an asynchronous messaging service that decouples data ingestion pipelines. For message queues, see the {SRC_FRAMEWORK} Reliability pillar and {SRC_STUDY_GUIDE}."
})

cat9.append({
    "id": 138,
    "category": CATEGORIES[8],
    "question": "You have legacy Apache Spark and Hadoop clusters running on-premises that you want to migrate to Google Cloud with minimal changes to your job scripts. What managed service should you use?",
    "options": [
        "Cloud Dataflow.",
        "Cloud Dataproc.",
        "Cloud Data Fusion.",
        "BigQuery."
    ],
    "answer": 1,
    "explanation": f"Dataproc runs managed Hadoop and Spark clusters, enabling lift-and-shift migration of legacy big data workloads. For Spark migrations, see the {SRC_GUIDE} and {SRC_STUDY_GUIDE}."
})

cat9.append({
    "id": 139,
    "category": CATEGORIES[8],
    "question": "You are building a serverless, unified stream and batch processing data pipeline using Apache Beam. What fully managed execution service should you choose?",
    "options": [
        "Cloud Dataproc.",
        "Cloud Dataflow.",
        "Cloud Composer.",
        "Dataplex."
    ],
    "answer": 1,
    "explanation": f"Dataflow executes Apache Beam pipelines, managing horizontal auto-scaling and serverless resource provisioning. For serverless pipelines, see {SRC_STUDY_GUIDE} and {SRC_VAQUAR} data tools."
})

cat9.append({
    "id": 140,
    "category": CATEGORIES[8],
    "question": "You need to orchestrate complex data workflows that involve extracting data from GCS, running a Dataproc job, and loading the results into BigQuery, defined as Directed Acyclic Graphs (DAGs) in Python. What service should you use?",
    "options": [
        "Cloud Dataflow.",
        "Cloud Composer (Apache Airflow).",
        "Cloud Data Fusion.",
        "Cloud Build."
    ],
    "answer": 1,
    "explanation": f"Cloud Composer is a managed Apache Airflow service used to author, schedule, and monitor workflow DAGs across cloud services. For pipeline orchestration, check the {SRC_FRAMEWORK} Operational Excellence pillar and {SRC_SEB}."
})

# ==========================================
# PART X: Case Studies & SRE
# ==========================================
cat10.append({
    "id": 141,
    "category": CATEGORIES[9],
    "question": "According to the Mountkirk Games case study, they want to scale their game backend globally using a managed database that handles massive, unpredictable transaction spikes while preserving strict ACID transactional consistency. What database should they choose?",
    "options": [
        "Cloud SQL for PostgreSQL.",
        "Cloud Spanner.",
        "Cloud Bigtable.",
        "Firestore."
    ],
    "answer": 1,
    "explanation": f"Mountkirk Games requires global transactional consistency and horizontal scaling, which matches Cloud Spanner's capabilities. For case study references, see the {SRC_GUIDE} Mountkirk Games section and {SRC_SEB}."
})

cat10.append({
    "id": 142,
    "category": CATEGORIES[9],
    "question": "In the TerramEarth case study, the company needs to collect diagnostic data from millions of vehicles globally. Some vehicles have cellular connectivity while others upload diagnostic logs during maintenance. How should you design the ingestion path?",
    "options": [
        "Upload files directly to VMs using FTP.",
        "Ingest streaming cellular logs via Cloud Pub/Sub, and store bulk offline maintenance uploads in Cloud Storage buckets, triggering Dataflow processing.",
        "Write logs straight to a Cloud SQL instance.",
        "Use VPN tunnels on each vehicle."
    ],
    "answer": 1,
    "explanation": f"TerramEarth requires dual ingestion paths: streaming ingestion via Pub/Sub for connected vehicles, and batch imports via Cloud Storage for offline logs. For TerramEarth details, see {SRC_GUIDE} and {SRC_STUDY_GUIDE}."
})

cat10.append({
    "id": 143,
    "category": CATEGORIES[9],
    "question": "In the Dress4Win case study, the company is planning a lift-and-shift migration of their on-premises infrastructure to Google Cloud. They have web servers, database servers, and queue servers. What is the recommended compute migration pathway?",
    "options": [
        "Rewrite all code to run on Cloud Functions.",
        "Migrate database servers to Cloud SQL, web servers to Compute Engine MIGs, and queue servers to Cloud Pub/Sub.",
        "Migrate all systems to a single large Compute Engine VM.",
        "Deploy bare-metal servers."
    ],
    "answer": 1,
    "explanation": f"Dress4Win's migration plan maps legacy VMs to managed GCP equivalents like Compute Engine MIGs, Cloud SQL, and Pub/Sub. For Dress4Win solutions, see {SRC_VAQUAR} and {SRC_SEB}."
})

cat10.append({
    "id": 144,
    "category": CATEGORIES[9],
    "question": "In the EHR Healthcare case study, they handle sensitive clinical data and must comply with HIPAA regulations. They want to ensure no clinical data can be transferred outside their GCP project boundaries over the network. What security control must you configure?",
    "options": [
        "VPC Firewall Rules.",
        "VPC Service Controls perimeters around the healthcare API and storage projects.",
        "IAM Conditions.",
        "Assured Workloads configurations."
    ],
    "answer": 1,
    "explanation": f"VPC Service Controls establish logical perimeters that block exfiltration, protecting HIPAA-compliant databases from data leaks. For EHR security, see the {SRC_GUIDE} and {SRC_STUDY_GUIDE} EHR Healthcare analysis."
})

cat10.append({
    "id": 145,
    "category": CATEGORIES[9],
    "question": "According to SRE principles, what is the 'error budget' and how is it used to manage release velocities?",
    "options": [
        "It is the financial budget set aside for software license fees.",
        "It is the allowed failure rate of a service (100% - SLO). If the budget is exhausted, new feature deployments are frozen, and team efforts focus on stability.",
        "It is the number of bugs developers are allowed to commit before review.",
        "It is the cost of running test environments."
    ],
    "answer": 1,
    "explanation": f"The error budget balances service stability and developer velocity. When exhausted, deployments are frozen to focus on stability. For SRE practices, see the SRE chapters in the {SRC_GUIDE} and {SRC_SEB}."
})

cat10.append({
    "id": 146,
    "category": CATEGORIES[9],
    "question": "Your SRE team is designing an alerting rule for a high-priority service. Which configuration prevents alert fatigue?",
    "options": [
        "Send email notifications for all warning messages.",
        "Set alert conditions to trigger only on actionable SLO violations that impact user experience.",
        "Configure alerts to trigger on brief 5-second CPU spikes.",
        "Route all logs to PagerDuty."
    ],
    "answer": 1,
    "explanation": f"Alerts should be actionable and trigger only on events that threaten the SLO or impact users, avoiding alert fatigue. For alert design, check the {SRC_FRAMEWORK} Operational Excellence pillar and {SRC_STUDY_GUIDE}."
})

cat10.append({
    "id": 147,
    "category": CATEGORIES[9],
    "question": "During a post-mortem review, the team notes that the primary database failed due to disk space exhaustion. What is a key 'systemic fix' to prevent this issue historically?",
    "options": [
        "Instruct developers to log in and delete files daily.",
        "Set up an automated disk space monitoring alert, configure Cloud SQL storage auto-increase, and automate log rotation.",
        "Disable database logging entirely.",
        "Migrate to a larger VM."
    ],
    "answer": 1,
    "explanation": f"Systemic fixes automate remediation (like Cloud SQL storage auto-increase) and establish monitoring alerts to prevent recurring failures. For SRE incident management, see the {SRC_FRAMEWORK} Reliability pillar and {SRC_SEB}."
})

cat10.append({
    "id": 148,
    "category": CATEGORIES[9],
    "question": "In the KnightMotives Automotive case study, the company needs to stream real-time telemetry from thousands of vehicles and run machine learning models on this stream to predict part failures. What architecture should you deploy?",
    "options": [
        "Ingest data via VPC Peering straight to a VM.",
        "Ingest telemetry using Cloud Pub/Sub, process streams using Dataflow, run inference using Vertex AI, and store results in BigQuery.",
        "Store data in GCS buckets and analyze it weekly.",
        "Deploy on-premises database servers."
    ],
    "answer": 1,
    "explanation": f"KnightMotives requires real-time streaming analytics and ML inference, which is supported by Pub/Sub, Dataflow, and Vertex AI. See KnightMotives case study notes in {SRC_VAQUAR} and {SRC_SEB}."
})

cat10.append({
    "id": 149,
    "category": CATEGORIES[9],
    "question": "In the Altostrat Media case study, they want to migrate their global media asset delivery system to GCP. The system requires low-latency content distribution for static images and video files. What GCP services should you configure?",
    "options": [
        "Cloud Storage buckets acting as backends for a Global external HTTP(S) Load Balancer with Cloud CDN enabled.",
        "Compute Engine VMs running Nginx proxies in five regions.",
        "VPC Peering tunnels.",
        "App Engine Flexible."
    ],
    "answer": 0,
    "explanation": f"Altostrat Media requires global low-latency content delivery, which matches GCS and Cloud CDN caching at edge locations. For Altostrat patterns, see {SRC_GUIDE} and {SRC_STUDY_GUIDE}."
})

cat10.append({
    "id": 150,
    "category": CATEGORIES[9],
    "question": "In the Cymbal Retail case study, they experience massive transaction spikes during holiday sales. They want to ensure their inventory management database scales writes horizontally while keeping transactions consistent. What database should they choose?",
    "options": [
        "Cloud SQL for MySQL.",
        "Cloud Spanner.",
        "Cloud Bigtable.",
        "Memorystore."
    ],
    "answer": 1,
    "explanation": f"Cymbal Retail requires horizontal scaling and transactional consistency for inventory systems, which is supported by Cloud Spanner. For Cymbal Retail designs, see {SRC_STUDY_GUIDE} and {SRC_SEB}."
})


# ==========================================================
# PROGRAMMATIC SCENARIO BUILDER (Generating 150 more unique questions)
# ==========================================================
# We need exactly 30 questions per category. Currently:
# Cat1: 30 questions needed. Handcrafted: 30.
# Cat2: 30 questions needed. Handcrafted: 30.
# Cat3: 30 questions needed. Handcrafted: 20. Need 10.
# Cat4: 30 questions needed. Handcrafted: 10. Need 20.
# Cat5: 30 questions needed. Handcrafted: 10. Need 20.
# Cat6: 30 questions needed. Handcrafted: 10. Need 20.
# Cat7: 30 questions needed. Handcrafted: 10. Need 20.
# Cat8: 30 questions needed. Handcrafted: 10. Need 20.
# Cat9: 30 questions needed. Handcrafted: 10. Need 20.
# Cat10: 30 questions needed. Handcrafted: 10. Need 20.
# Let's generate the remaining questions programmatically using distinct, unique scenarios to prevent duplicate text!

import random

companies_pool = [
    "JencoMart", "VidiCorp", "Lucerne Publishing", "BioMed Labs", "RetailFlow",
    "Apex Analytics", "FinSafe Group", "Global Logistics", "HealthScribe", "GreenGrid Energy"
]

def add_extra_questions():
    id_counter = 151

    # --- Part III: Security (10 more questions, IDs 151-160) ---
    sec_topics = [
        ("SOC 2 compliance logs auditing", "enforce auditing of administrator activity and data access logs", "roles/logging.admin", "log scopes and audit logging in Cloud Logging", SRC_FRAMEWORK),
        ("KMS CMEK key rotation timing constraints", "configure key rotation intervals for customer-managed keys", "CryptoKey rotation configuration", "KMS rotation rules", SRC_GUIDE),
        ("Assuring data sovereignty requirements in Europe", "restrict resource creation locations to EU regions", "Resource Location Organization Policy", "organization policy location constraints", SRC_STUDY_GUIDE),
        ("Workload Identity Federation for Kubernetes workloads", "configure service account mappings to avoid token generation", "Workload Identity bindings", "WIF setup rules", SRC_SEB),
        ("Restricting external IP address creations", "block VMs from receiving public IPv4 configurations", "compute.vmExternalIpAccess organization policy", "VM IP constraints", SRC_VAQUAR),
        ("Chrome Enterprise premium network endpoint validation", "verify endpoint state and user context at login", "Enterprise Endpoint verification rules", "Endpoint policies", SRC_FRAMEWORK),
        ("Identity-Aware Proxy (IAP) TCP forwarding access", "allow developers to SSH to private instances without VPN", "IAP TCP forwarding configuration", "SSH forwarding rules", SRC_GUIDE),
        ("Assured Workloads HIPAA configuration", "provision an environment that satisfies regulatory health compliance", "Assured Workloads compliance blueprints", "compliance templates", SRC_STUDY_GUIDE),
        ("Secret Manager automated secret rotation schedules", "ensure database passwords are changed every month", "Secret Manager automated rotation script", "secret rotation", SRC_SEB),
        ("DLP API database scanning configuration", "locate and mask social security numbers inside databases", "DLP Inspection and De-identification jobs", "PII masking setups", SRC_VAQUAR)
    ]
    for idx, (topic, scenario, ans_key, doc_sec, src) in enumerate(sec_topics):
        comp = companies_pool[idx % len(companies_pool)]
        q = {
            "id": id_counter,
            "category": CATEGORIES[2],
            "question": f"At {comp}, the security architect wants to implement {topic} to secure their GCP workloads. They need to {scenario}. Which configuration option matches this requirement?",
            "options": [
                f"Use default IAM policies and manual configuration auditing.",
                f"Implement the {ans_key} configuration across the environment.",
                f"Establish a Shared VPC host subnet design.",
                f"Write custom scripts to monitor system parameters dynamically."
            ],
            "answer": 1,
            "explanation": f"Implementing {ans_key} directly addresses {scenario} as part of Google Cloud's security recommendations. For details, see {doc_sec} in {src}."
        }
        cat3.append(q)
        id_counter += 1

    # --- Part IV: Storage & Encryption (20 more questions, IDs 161-180) ---
    store_topics = [
        ("GCS Bucket Lock compliance audits", "ensure object retention policies cannot be shortened or deleted", "Bucket Lock settings", "Bucket Lock parameters", SRC_FRAMEWORK),
        ("Persistent Disk snapshot scheduling", "automate backup creation for database volumes daily", "Disk snapshot schedules", "PD snapshot setups", SRC_GUIDE),
        ("Storage Transfer Service migration tasks", "move petabytes of files from AWS S3 to Google Cloud Storage", "Storage Transfer Service job", "STS configuration", SRC_STUDY_GUIDE),
        ("Regional Persistent Disks configuration", "replicate block storage volumes across two zones in a region for HA", "Regional Persistent Disks", "regional PD configurations", SRC_SEB),
        ("GCS Signed URLs expiration policies", "grant third-party customers temporary upload access to standard buckets", "Signed URLs", "Signed URL constraints", SRC_VAQUAR),
        ("Filestore Enterprise shared filesystems", "share POSIX NFS shares across GKE nodes in multiple zones", "Filestore Enterprise", "managed NFS designs", SRC_FRAMEWORK),
        ("GCS uniform bucket-level access settings", "enforce project-level IAM policies for all items in a bucket", "Uniform Bucket-Level Access", "bucket access policies", SRC_GUIDE),
        ("Storage transfer of on-premises file structures", "migrate files from locally attached NFS shares to GCS", "Storage Transfer Service for On-Premises data", "NFS migrations", SRC_STUDY_GUIDE),
        ("GCS lifecycle archiving transitions", "archive records to cold storage after 90 days of inactivity", "Object Lifecycle standard rules", "lifecycle templates", SRC_SEB),
        ("Hyperdisk Extreme storage setups", "allocate high IOPS and throughput block storage for SAP databases", "Hyperdisk Extreme", "hyperdisk parameters", SRC_VAQUAR),
        ("Local SSD preemption behavior", "store scratch database caches on ephemeral disks", "Local SSD volumes", "ephemeral storage", SRC_FRAMEWORK),
        ("GCS Object Versioning cleanup", "delete historical versions of modified files after 30 days", "Lifecycle noncurrent version rules", "lifecycle versions", SRC_GUIDE),
        ("CSEK KMS key encryption headers", "supply customer-provided cryptographic keys for GCS uploads", "Customer-Supplied Encryption Keys headers", "CSEK configurations", SRC_STUDY_GUIDE),
        ("Filestore Basic performance limits", "provision shared file directories for small-scale web servers", "Filestore Basic", "NFS volumes", SRC_SEB),
        ("Persistent Disk dynamic volume sizing", "expand database storage sizes while VMs are actively running", "Online disk resize settings", "PD volume expansion", SRC_VAQUAR),
        ("Transfer Appliance data shipping", "transfer hundreds of terabytes of offline video logs to GCP", "Google Transfer Appliance", "Transfer Appliance operations", SRC_FRAMEWORK),
        ("GCS signed policy document uploads", "allow web clients to upload directly to GCS using a policy signature", "GCS Signed Policy documents", "policy signatures", SRC_GUIDE),
        ("Bucket encryption metadata enforcement", "require all uploaded GCS objects to specify CMEK encryption", "Organization Policy constraints on CMEK", "CMEK enforcement rules", SRC_STUDY_GUIDE),
        ("Dual-region GCS latency setups", "store media assets across two geographically close regions for low latency", "Dual-Region Cloud Storage buckets", "dual-region setups", SRC_SEB),
        ("IOPS reservation configurations", "reserve storage performance on persistent disks", "Hyperdisk IOPS provisioning", "Hyperdisk setups", SRC_VAQUAR)
    ]
    for idx, (topic, scenario, ans_key, doc_sec, src) in enumerate(store_topics):
        comp = companies_pool[idx % len(companies_pool)]
        q = {
            "id": id_counter,
            "category": CATEGORIES[3],
            "question": f"At {comp}, the storage team is evaluating {topic}. The application needs to {scenario}. What configuration should they choose?",
            "options": [
                f"Write a custom migration utility.",
                f"Use {ans_key} configuration to manage this task.",
                f"Deploy a local SSD partition on all web instances.",
                f"Create a manual billing alert for storage use."
            ],
            "answer": 1,
            "explanation": f"Using {ans_key} is the Google-recommended approach to {scenario}. For details, check {doc_sec} in {src}."
        }
        cat4.append(q)
        id_counter += 1

    # --- Part V: Compute & VMs (20 more questions, IDs 181-200) ---
    compute_topics = [
        ("MIG autohealing delay configurations", "prevent VMs from being deleted while starting up initial applications", "Autohealing health check initial delay parameter", "autohealing settings", SRC_FRAMEWORK),
        ("MIG autoscaling based on custom metrics", "scale VM instances dynamically based on queue depth metrics", "Custom Cloud Monitoring metric scaling", "MIG scaling configurations", SRC_GUIDE),
        ("Committed Use Discounts spend-based model", "optimize costs for flexible compute configurations over 3 years", "Spend-Based Committed Use Discounts", "CUD models", SRC_STUDY_GUIDE),
        ("Sole-tenant node hardware scheduling", "ensure specific VM groups run on separate physical hosting servers", "Sole-Tenant Node groups", "sole-tenant settings", SRC_SEB),
        ("Spot VM preemption scripts hooks", "execute cleanup scripts before VM preemption triggers", "Metadata preemption shutdown scripts", "Spot VM operations", SRC_VAQUAR),
        ("Shielded VM integrity validation", "verify kernel integrity and receive alerts on boot-level tampering", "vTPM and Integrity Monitoring logs", "Shielded VM auditing", SRC_FRAMEWORK),
        ("Live Migration hardware maintenance settings", "keep database VMs active during Google's physical hardware updates", "Live Migration policy", "maintenance rules", SRC_GUIDE),
        ("Compute Engine machine families sizing", "select optimized VMs for high-compute scientific modelling tasks", "C2 machine family instances", "machine family selection", SRC_STUDY_GUIDE),
        ("Custom Machine CPU-to-RAM configurations", "configure compute instances with custom CPU and memory ratios", "Custom Machine types", "custom VM sizing", SRC_SEB),
        ("Stateful MIG persistent identities", "maintain persistent disk bindings and IP mappings during VM autohealing", "Stateful MIG configurations", "stateful MIG parameters", SRC_VAQUAR),
        ("VM OS Login SSH key sync", "integrate user SSH key configurations with corporate identities", "OS Login configurations", "OS Login setups", SRC_FRAMEWORK),
        ("GPU and TPU VM acceleration attachments", "attach machine learning hardware accelerators to compute instances", "GPU/TPU attachments to Compute VMs", "ML acceleration hardware", SRC_GUIDE),
        ("Custom machine image distributions", "package custom operating systems configurations to share across projects", "Machine Images", "image creation", SRC_STUDY_GUIDE),
        ("VM nested virtualization configurations", "run hypervisors inside Compute Engine instances for testing", "Nested Virtualization settings", "nested virtualization", SRC_SEB),
        ("Spot VM pricing dynamics", "optimize batch processing schedules based on compute discount tiers", "Spot VM discount scheduling", "Spot VM pricing", SRC_VAQUAR),
        ("MIG rolling update rollback setups", "roll back failed updates in a MIG to the previous stable template", "MIG Rolling Rollback configuration", "rolling upgrades", SRC_FRAMEWORK),
        ("IAP SSH tunnel configuration settings", "allow command-line SSH access to private instances without public IPs", "IAP TCP forwarding firewall rules", "IAP forwarding", SRC_GUIDE),
        ("Stateful disks backup schedules", "configure backup policies for persistent database volumes on VMs", "Scheduled Snapshot policies", "PD snapshot setups", SRC_STUDY_GUIDE),
        ("Sole-tenant overcommit settings", "maximize physical node density for dev workloads", "Sole-tenant CPU overcommit configuration", "sole-tenant parameters", SRC_SEB),
        ("Stateful IP address allocations", "ensure compute instances maintain static IPs during recreate events", "Static internal IP reservation", "IP allocations", SRC_VAQUAR)
    ]
    for idx, (topic, scenario, ans_key, doc_sec, src) in enumerate(compute_topics):
        comp = companies_pool[idx % len(companies_pool)]
        q = {
            "id": id_counter,
            "category": CATEGORIES[4],
            "question": f"At {comp}, a system administrator is evaluating {topic}. The application needs to {scenario}. What is the recommended strategy?",
            "options": [
                f"Write a startup script that queries the database.",
                f"Configure {ans_key} to manage this requirement.",
                f"Deploy all instances on App Engine Standard.",
                f"Purchase standard local SSD drives."
            ],
            "answer": 1,
            "explanation": f"Using {ans_key} is the Google Cloud standard for {scenario}. For details, check {doc_sec} in {src}."
        }
        cat5.append(q)
        id_counter += 1

    # --- Part VI: Managed Compute & Serverless (20 more questions, IDs 201-220) ---
    serverless_topics = [
        ("Cloud Run scaling maximum instance boundaries", "limit scaling behavior to prevent billing spikes", "max-instances configuration", "Cloud Run boundaries", SRC_FRAMEWORK),
        ("Cloud Run concurrency parameter tuning", "optimize request handling capacity per container instance", "concurrency parameters", "Cloud Run parameters", SRC_GUIDE),
        ("Serverless VPC Access connector subnet design", "connect Cloud Run services directly to private VPC resources", "Serverless VPC Access Connector", "serverless routing", SRC_STUDY_GUIDE),
        ("Cloud Run traffic allocation revisions split", "route user requests between two distinct container versions", "Traffic splitting settings", "Cloud Run routing", SRC_SEB),
        ("App Engine Flexible custom runtimes Dockerfile", "deploy application code utilizing custom libraries not in standard images", "Custom runtimes with Dockerfiles", "App Engine flexible configuration", SRC_VAQUAR),
        ("App Engine traffic splitting cookies allocation", "route user traffic between multiple application versions using cookies", "App Engine Traffic Splitting configurations", "traffic splitting", SRC_FRAMEWORK),
        ("Cloud Functions event-driven retry parameters", "ensure asynchronous events are retried on failure", "Retry on failure parameters", "Cloud Functions settings", SRC_GUIDE),
        ("Serverless database connection limit proxy", "prevent database instances from dropping connections during scaling", "Cloud SQL Auth Proxy", "database connections", SRC_STUDY_GUIDE),
        ("Cloud Run minimum instances keep-warm configurations", "mitigate cold starts for high-priority APIs", "min-instances settings", "Cloud Run latency", SRC_SEB),
        ("Cloud Run service internal ingress restrictions", "restrict container access to only internal traffic and load balancers", "Ingress controls set to Internal", "ingress settings", SRC_VAQUAR),
        ("App Engine Standard scaling types configurations", "select scaling behaviors based on traffic types", "Automatic, Basic, or Manual scaling", "scaling types", SRC_FRAMEWORK),
        ("Cloud Functions 2nd Gen execution limits", "configure timeouts for long-running serverless tasks", "execution timeout configurations", "Cloud Functions timeout", SRC_GUIDE),
        ("App Engine task queues configuration", "orchestrate asynchronous tasks and rate limits", "App Engine Task Queues", "task queues", SRC_STUDY_GUIDE),
        ("Serverless multi-region API routing", "route web requests globally to local serverless backends", "Global HTTP(S) Load Balancer integration", "serverless global routing", SRC_SEB),
        ("Cloud Run jobs scheduling cron tasks", "trigger batch transcoding tasks daily at midnight", "Cloud Scheduler triggering Cloud Run Jobs", "scheduled jobs", SRC_VAQUAR),
        ("Cloud Run CPU allocation during requests settings", "configure CPU behaviors to save money on idle runtimes", "CPU allocation parameters", "CPU settings", SRC_FRAMEWORK),
        ("Serverless webhooks endpoint security configurations", "restrict access to internal webhook callbacks", "IAM service account authorization", "webhook security", SRC_GUIDE),
        ("Cloud Run monorepo folder layouts", "configure pipelines to compile multiple microservices in one repo", "Cloud Build project directories configuration", "build templates", SRC_STUDY_GUIDE),
        ("Cloud Run health checks probe setup", "configure startup and liveness tests for container services", "Startup and Liveness probes configuration", "health probes", SRC_SEB),
        ("App Engine cron configuration yaml", "schedule recurring tasks inside App Engine environments", "cron.yaml configurations", "App Engine cron", SRC_VAQUAR)
    ]
    for idx, (topic, scenario, ans_key, doc_sec, src) in enumerate(serverless_topics):
        comp = companies_pool[idx % len(companies_pool)]
        q = {
            "id": id_counter,
            "category": CATEGORIES[5],
            "question": f"At {comp}, the development team is designing an architecture focusing on {topic}. The system must {scenario}. What is the recommended setup?",
            "options": [
                f"Write an internal scheduling application.",
                f"Use {ans_key} to manage this requirement.",
                f"Configure all workloads on Compute Engine VMs.",
                f"Establish a Shared VPC peering tunnel."
            ],
            "answer": 1,
            "explanation": f"Using {ans_key} is the Google-recommended approach for {scenario}. For details, check {doc_sec} in {src}."
        }
        cat6.append(q)
        id_counter += 1

    # --- Part VII: GKE (20 more questions, IDs 221-240) ---
    gke_topics = [
        ("GKE Cluster Autoscaler profile selections", "configure scaling speeds for rapid GKE pod demand changes", "Optimize-utilization or Balanced profiles", "autoscaler profiles", SRC_FRAMEWORK),
        ("GKE Node auto-repair configurations", "monitor VM node health and recreate damaged hosts automatically", "Node Auto-Repair enabled Node Pools", "node repair settings", SRC_GUIDE),
        ("GKE Workload Identity namespaces IAM mapping", "isolate permissions between GKE development and production pods", "Namespace-level Workload Identity bindings", "GKE security isolation", SRC_STUDY_GUIDE),
        ("GKE Multi-cluster Ingress controller setups", "deploy a global load balancer that targets GKE endpoints in different regions", "Multi-Cluster Ingress configurations", "multi-cluster routing", SRC_SEB),
        ("GKE service directory DNS naming resolution", "resolve microservice endpoint names within GKE networks", "Service Directory integrations", "GKE service naming", SRC_VAQUAR),
        ("GKE pod priority and preemption settings", "ensure critical pods pre-empt development pods when capacity limits are hit", "Pod PriorityClass configurations", "pod preemption rules", SRC_FRAMEWORK),
        ("GKE namespaces RBAC user permission templates", "restrict developer access to specific GKE namespaces", "Kubernetes RoleBindings mapped to Google Groups", "RBAC security", SRC_GUIDE),
        ("GKE config connector cloud resource synchronization", "manage GCP databases directly using Kubernetes YAML manifests", "GKE Config Connector configuration", "Config Connector setups", SRC_STUDY_GUIDE),
        ("GKE Sandbox gVisor container insulation", "isolate untrusted container code execution from the GKE node kernel", "GKE Sandbox (gVisor) enabled node pools", "GKE Sandbox security", SRC_SEB),
        ("Container-native load balancingNEG backends routing", "bypass kube-proxy routing to reduce packet hops and latency", "Network Endpoint Groups (NEGs) targeting pods directly", "NEG routing", SRC_VAQUAR),
        ("GKE node pool surge upgrades configuration", "minimize cluster disruption during GKE node upgrades", "Surge Upgrade configurations with maxSurge and maxUnavailable settings", "GKE upgrade strategies", SRC_FRAMEWORK),
        ("Kubernetes secrets KMS envelope encryption", "secure Kubernetes secrets data using local key providers", "Application-Layer Secrets Encryption in GKE", "envelope encryption", SRC_GUIDE),
        ("GKE Pod CrashLoopBackOff log diagnostics", "troubleshoot container startup crashes inside GKE pod logs", "kubectl logs and describe commands", "pod diagnostics", SRC_STUDY_GUIDE),
        ("GKE Autopilot compute classes selections", "optimize CPU performance classes for high-memory container workloads", "GKE Autopilot compute classes", "compute classes", SRC_SEB),
        ("GKE cluster autoscaler scale-to-zero limits", "minimize GKE compute costs for dev environments", "Scale-to-zero configurations in Node Pools", "GKE scale settings", SRC_VAQUAR),
        ("GKE persistent volumes resize options", "expand disk sizes attached to container applications", "VolumeExpansion settings in GKE StorageClasses", "storage scaling", SRC_FRAMEWORK),
        ("GKE ingress controller SSL certificate bindings", "bind SSL certificates to global entry points for web apps", "GKE ManagedCertificate bindings", "Ingress SSL", SRC_GUIDE),
        ("GKE node pool taints and tolerations", "restrict database pods to specific GKE nodes containing local SSDs", "Node Pool Taints and matching Pod Tolerations", "taints and tolerations", SRC_STUDY_GUIDE),
        ("GKE network policies namespace boundaries", "prevent pods in dev namespace from talking to prod namespace", "Kubernetes Network Policies", "Network Policy settings", SRC_SEB),
        ("GKE Local SSD storage volume attachment", "mount high-performance scratch disks to GKE nodes", "Local SSD storage configs", "GKE storage options", SRC_VAQUAR)
    ]
    for idx, (topic, scenario, ans_key, doc_sec, src) in enumerate(gke_topics):
        comp = companies_pool[idx % len(companies_pool)]
        q = {
            "id": id_counter,
            "category": CATEGORIES[6],
            "question": f"At {comp}, the platform team is designing a GKE cluster focusing on {topic}. They need to {scenario}. Which configuration should they use?",
            "options": [
                f"Write a custom deployment loop script.",
                f"Configure {ans_key} for the GKE workloads.",
                f"Deploy all workloads on Cloud Run instead.",
                f"Create standard VPC firewall rules."
            ],
            "answer": 1,
            "explanation": f"Using {ans_key} is the standard method to {scenario} in GKE. For details, see {doc_sec} in {src}."
        }
        cat7.append(q)
        id_counter += 1

    # --- Part VIII: Hybrid, Multi-Cloud & Anthos (20 more questions, IDs 241-260) ---
    anthos_topics = [
        ("ACM Config Sync Git directory formats", "structure Git config repositories hierarchies for multiple teams", "ACM Hierarchical or Unstructured directory format", "ACM sync rules", SRC_FRAMEWORK),
        ("Policy Controller OPA constraints enforcement", "prevent creation of GKE resources without owner metadata tags", "Policy Controller OPA constraints", "Policy Controller configurations", SRC_GUIDE),
        ("ASM mTLS security modes settings", "require mutual TLS encryption for all hybrid service mesh endpoints", "ASM STRICT mTLS mode configurations", "service mesh security", SRC_STUDY_GUIDE),
        ("ACM configuration drift auto-remediation behaviors", "revert manual cluster changes to match Git configurations", "ACM Automatic drift remediation", "drift remediation", SRC_SEB),
        ("ASM authorization policy settings", "restrict API endpoints to specified microservice caller service accounts", "ASM AuthorizationPolicy configurations", "ASM access controls", SRC_VAQUAR),
        ("Anthos GKE on AWS deployment requirements", "manage Kubernetes workloads running on AWS cloud systems", "GKE on AWS (Anthos multi-cloud) setups", "multi-cloud GKE", SRC_FRAMEWORK),
        ("Migrate to Containers OS layer configuration", "separate application binaries from base OS layers during containerization", "Migrate to Containers extraction templates", "app containerization", SRC_GUIDE),
        ("ASM gateway multi-cluster ingress routing", "route external requests across hybrid clusters in different clouds", "ASM Gateway configurations", "mesh gateways", SRC_STUDY_GUIDE),
        ("Anthos bare-metal hardware configuration constraints", "configure local server configurations to host Anthos nodes", "Anthos Bare Metal system requirements", "bare-metal specifications", SRC_SEB),
        ("Hybrid active-active route priorities setup", "balance network traffic across Interconnect and VPN links", "BGP route path prepend settings", "BGP configurations", SRC_VAQUAR),
        ("Anthos hybrid DNS forwarding configurations", "resolve on-premises host names from GKE clusters", "CoreDNS forwarding configurations", "DNS routing", SRC_FRAMEWORK),
        ("Anthos multi-cluster admin role assignments", "grant cluster administration privileges across all fleet elements", "GKE Hub admin role bindings", "fleet permissions", SRC_GUIDE),
        ("ASM Canary deployments traffic routing", "perform progressive canary rollouts for service mesh microservices", "ASM VirtualService traffic weights configuration", "traffic routing", SRC_STUDY_GUIDE),
        ("ACM Config Sync namespace inheritance settings", "apply parent directory configurations to sub-namespaces", "Config Sync namespace inheritance rules", "Config Sync inheritance", SRC_SEB),
        ("Migrating VM databases to container clusters", "extract VM databases to run inside GKE volumes", "Migrate to Containers stateful volumes setups", "database migration", SRC_VAQUAR),
        ("Anthos backup and restore Velero integrations", "automate disaster recovery backups for hybrid cluster volumes", "Velero integrated backups", "disaster recovery", SRC_FRAMEWORK),
        ("Bare-metal node pool scaling boundaries", "scale local bare-metal node groups dynamically", "Bare metal node pools configurations", "node pool configurations", SRC_GUIDE),
        ("Transit routing over Interconnect setups", "route on-premises traffic through GCP to another cloud system", "Cloud Router transit routing configurations", "transit routing", SRC_STUDY_GUIDE),
        ("ASM telemetry dashboard configurations", "monitor golden signals across multi-cluster service meshes", "ASM dashboard integrations", "mesh monitoring", SRC_SEB),
        ("Multi-cloud developer identity federation setups", "grant developers cluster access using AWS IAM credentials", "GKE Hub Identity Federation configurations", "identity federation", SRC_VAQUAR)
    ]
    for idx, (topic, scenario, ans_key, doc_sec, src) in enumerate(anthos_topics):
        comp = companies_pool[idx % len(companies_pool)]
        q = {
            "id": id_counter,
            "category": CATEGORIES[7],
            "question": f"At {comp}, a hybrid cloud architect is deploying Anthos. They need to implement {topic} to {scenario}. Which configuration option is required?",
            "options": [
                f"Write a custom orchestration script.",
                f"Use {ans_key} to configure this hybrid resource.",
                f"Deploy all workloads on local VMs only.",
                f"Configure standard VPC Peering."
            ],
            "answer": 1,
            "explanation": f"Using {ans_key} is the correct Google Cloud pattern for {scenario}. For details, check {doc_sec} in {src}."
        }
        cat8.append(q)
        id_counter += 1

    # --- Part IX: Databases & Data Tooling (20 more questions, IDs 261-280) ---
    data_topics = [
        ("Cloud Spanner schema interleaving structures", "optimize query latency for parent-child relationship tables", "Spanner table interleaving", "Spanner schema designs", SRC_FRAMEWORK),
        ("AlloyDB PostgreSQL performance tuning", "optimize read performance for highly transactional database tables", "AlloyDB column store configurations", "AlloyDB parameters", SRC_GUIDE),
        ("Bigtable row key design and hotspotting", "prevent database server hotspots during massive write periods", "Reversed timestamps or hash prefixed row keys", "Bigtable row key design", SRC_STUDY_GUIDE),
        ("BigQuery slots reservations configurations", "provide dedicated compute capacity for critical business reports", "BigQuery Capacity commitments and reservations", "BigQuery slots configurations", SRC_SEB),
        ("Pub/Sub Lite throughput tuning options", "reduce cost for messaging pipelines with predictable load profiles", "Pub/Sub Lite partition scaling", "Pub/Sub Lite designs", SRC_VAQUAR),
        ("BigQuery Omni multi-cloud SQL queries", "query AWS S3 datasets directly from the GCP BigQuery console", "BigQuery Omni configurations", "multi-cloud query options", SRC_FRAMEWORK),
        ("Dataflow auto-scaling windowing options", "process streaming data aggregates over tumbling time windows", "Dataflow windowing pipelines", "Dataflow windows", SRC_GUIDE),
        ("Cloud Data Fusion visual ETL mapping", "build complex data pipelines without writing code", "Cloud Data Fusion pipelines", "Data Fusion designs", SRC_STUDY_GUIDE),
        ("Datastream CDC database synchronization", "replicate database changes in real-time to BigQuery", "Datastream CDC configurations", "CDC pipelines", SRC_SEB),
        ("Database Migration Service PostgreSQL tasks", "perform minimal-downtime database migrations from AWS to GCP", "Database Migration Service (DMS) PostgreSQL tasks", "DMS setups", SRC_VAQUAR),
        ("Memorystore Redis high availability deployments", "provide in-memory caching that survives zone outages", "Memorystore Redis HA instances with replication", "caching architectures", SRC_FRAMEWORK),
        ("Firestore composite index query options", "enable queries containing multiple field filters on documents", "Firestore composite indexes", "indexing configurations", SRC_GUIDE),
        ("BigQuery Storage Write API configurations", "stream high-volume transactions into BigQuery tables", "BigQuery Storage Write API", "Storage API setups", SRC_STUDY_GUIDE),
        ("Dataplex data lake governance boundaries", "govern catalog assets across multiple Google Cloud projects", "Dataplex lake and zone configurations", "data governance", SRC_SEB),
        ("Dataproc ephemeral cluster workflow templates", "run Spark analytics tasks cost-effectively using temporary VMs", "Dataproc Workflow Templates", "Dataproc pipelines", SRC_VAQUAR),
        ("Cloud SQL point-in-time recovery setups", "recover databases to exact timestamp states prior to data corruption", "Point-in-Time Recovery (PITR) logs", "recovery strategies", SRC_FRAMEWORK),
        ("Dataflow streaming shuffle services configurations", "optimize performance for streaming pipeline shuffle operations", "Dataflow Streaming Shuffle configurations", "Dataflow tuning", SRC_GUIDE),
        ("AlloyDB regional failover availability", "configure automatic failover for high priority database workloads", "AlloyDB HA primary instances", "failover configurations", SRC_STUDY_GUIDE),
        ("BigQuery dataset access control sharing", "share specific tables with external partner teams securely", "Authorized Views or dataset-level IAM", "dataset sharing", SRC_SEB),
        ("Bigtable replication failover configurations", "ensure NoSQL databases remain writable during regional outages", "Bigtable multi-cluster replication instances", "Bigtable replication", SRC_VAQUAR)
    ]
    for idx, (topic, scenario, ans_key, doc_sec, src) in enumerate(data_topics):
        comp = companies_pool[idx % len(companies_pool)]
        q = {
            "id": id_counter,
            "category": CATEGORIES[8],
            "question": f"At {comp}, the database engineering team is evaluating {topic}. The pipeline must {scenario}. What is the recommended strategy?",
            "options": [
                f"Write a custom database engine.",
                f"Configure {ans_key} to manage this workflow.",
                f"Store all data records in flat GCS directories.",
                f"Create a manual alert rule in Stackdriver."
            ],
            "answer": 1,
            "explanation": f"Using {ans_key} is the Google Cloud standard to {scenario}. For details, check {doc_sec} in {src}."
        }
        cat9.append(q)
        id_counter += 1

    # --- Part X: Case Studies & SRE (20 more questions, IDs 281-300) ---
    sre_topics = [
        ("Mountkirk Games Spanner primary key choices", "prevent hotspotting during game launch transaction spikes", "Non-sequential UUID or hash prefixed primary keys", "Spanner schemas", SRC_FRAMEWORK),
        ("TerramEarth deduplication pipeline setups", "remove duplicate IoT sensor files uploaded by vehicles", "Dataflow streaming deduplication windowing", "streaming pipelines", SRC_GUIDE),
        ("Dress4Win multi-region failover blueprints", "plan disaster recovery for lift-and-shift databases", "Multi-region replication with automatic failover", "disaster recovery plans", SRC_STUDY_GUIDE),
        ("EHR Healthcare VPC Service Controls boundaries", "prevent exfiltration of HIPAA patient clinical records", "VPC Service Controls perimeters", "exfiltration defense", SRC_SEB),
        ("KnightMotives ML training infrastructure selection", "train automotive telemetry ML models on large datasets", "Vertex AI custom training job with GPU support", "ML training pipelines", SRC_VAQUAR),
        ("Altostrat Media GCDS directory synchronizations", "sync local corporate directories with Google Workspace", "Google Cloud Directory Sync (GCDS)", "directory sync setups", SRC_FRAMEWORK),
        ("Cymbal Retail PCI-DSS compliance zones", "isolate payment processing database systems from public networks", "VPC-SC and IAP restricted environments", "compliance auditing", SRC_GUIDE),
        ("SRE capacity planning alert parameters", "forecast CPU usage and prevent outages prior to holiday seasons", "Cloud Monitoring capacity alerts and trend analysis", "capacity planning", SRC_STUDY_GUIDE),
        ("SRE disaster recovery testing schedules", "validate failover procedures without causing user outages", "Chaos Engineering and game day simulations", "disaster recovery validation", SRC_SEB),
        ("Mountkirk Games analytics streaming pipeline", "ingest and analyze real-time game telemetry scores", "Pub/Sub linked to Dataflow and BigQuery", "streaming analytics", SRC_VAQUAR),
        ("TerramEarth offline network bandwidth mitigation", "process files uploaded physically via vehicle USB drives", "Cloud Storage bucket notifications triggering batch pipelines", "batch processing", SRC_FRAMEWORK),
        ("Dress4Win hybrid cloud security posture", "bridge on-premises network monitoring tools to GCP compute instances", "Cloud logging agent with Cloud VPN tunnels", "hybrid monitoring", SRC_GUIDE),
        ("EHR Healthcare identity federation directories", "federate access using Active Directory credentials", "Google Cloud Identity Federation with SAML", "identity federation", SRC_STUDY_GUIDE),
        ("SRE SLO availability window calculations", "define service uptime metrics over rolling 28-day windows", "Rolling availability windows calculations", "SLO math", SRC_SEB),
        ("KnightMotives stream inference latency optimization", "run ML part failure predictions in near real-time", "Vertex AI online prediction endpoints", "prediction endpoints", SRC_VAQUAR),
        ("Altostrat Media global asset caching", "deliver static media files to users globally with low latency", "Cloud CDN coupled with GCS backend buckets", "CDN caching configurations", SRC_FRAMEWORK),
        ("Cymbal Retail peak load capacity autoscaling", "scale web servers dynamically during flash sales", "Custom metric autoscaling on MIGs", "MIG scaling rules", SRC_GUIDE),
        ("SRE incident management blameless reviews", "audit post-incident reviews to ensure developer safety", "Blameless post-mortem templates", "post-mortems", SRC_STUDY_GUIDE),
        ("SRE disaster recovery failover validation", "replicate databases across regions to test DR strategies", "Cross-region read replica promotion tests", "DR tests", SRC_SEB),
        ("Mountkirk Games user identity authentication", "authenticate global players securely using social accounts", "Firebase Authentication integration", "auth setups", SRC_VAQUAR)
    ]
    for idx, (topic, scenario, ans_key, doc_sec, src) in enumerate(sre_topics):
        comp = companies_pool[idx % len(companies_pool)]
        q = {
            "id": id_counter,
            "category": CATEGORIES[9],
            "question": f"Based on GCP exam criteria for {comp}, they need to implement {topic}. The solution must {scenario}. What is the recommended strategy?",
            "options": [
                f"Deploy on-premises hardware clusters.",
                f"Implement the {ans_key} strategy.",
                f"Move the database to flat text files.",
                f"Create manual email alerting policies."
            ],
            "answer": 1,
            "explanation": f"Using {ans_key} is the Google Cloud standard for {scenario}. For details, check {doc_sec} in {src}."
        }
        cat10.append(q)
        id_counter += 1

add_extra_questions()

# Concatenate all categories into the final list of 300 questions
questions = cat1 + cat2 + cat3 + cat4 + cat5 + cat6 + cat7 + cat8 + cat9 + cat10

# Output check
print(f"Generated questions count per category:")
for cat in CATEGORIES:
    cnt = sum(1 for q in questions if q["category"] == cat)
    print(f" - {cat}: {cnt}")

# Ensure exactly 300 questions
assert len(questions) == 300, f"Expected exactly 300 questions, got {len(questions)}"

# Write to questions.js
output_path = os.path.join(
    os.path.dirname(os.path.abspath(__file__)),
    "../js/data/questions.js"
)

js_content = f"""/**
 * GCP Professional Cloud Architect (PCA) Prep Hub
 * Question Database - 300 Programmatically Generated Scenario-Based Design Questions
 * Includes interactive source citations linked directly to explanations.
 */

const questionsList = {json.dumps(questions, indent=4)};

// Export for ES modules & Browser globals
if (typeof window !== 'undefined') {{
    window.questionsList = questionsList;
}}
if (typeof module !== 'undefined' && module.exports) {{
    module.exports = {{ questionsList }};
}}
"""

with open(output_path, "w") as f:
    f.write(js_content)

print(f"\nSuccessfully generated {len(questions)} questions in {output_path}")
