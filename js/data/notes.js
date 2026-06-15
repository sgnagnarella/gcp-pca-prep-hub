/**
 * GCP Professional Cloud Architect (PCA) Prep Hub
 * Study Notes Database - Expanded to cover all 10 core domains in-depth.
 */

const notesData = {
    "part1": {
        "title": "Operations Suite, Billing, & Developer Tools",
        "sybex": "Sybex Ch 8, 11",
        "intro": "Focuses on Google Cloud's monitoring, logging, and observability tools, SRE operational guidelines, and developer automation.",
        "content": `
            <h4>1. Site Reliability Engineering (SRE) Golden Signals</h4>
            <p>SRE organizations track four primary observability metrics to evaluate system health:</p>
            <ul>
                <li><strong>Latency:</strong> The time it takes to service a request (e.g., HTTP request round-trip). Important to separate latency of successful requests from failed requests.</li>
                <li><strong>Traffic:</strong> A measure of demand on the system (e.g., HTTP requests per second, bandwidth, or database transactions).</li>
                <li><strong>Errors:</strong> The rate of requests that fail (e.g., HTTP 500 status codes, explicit failure returns, or failure to meet response deadlines).</li>
                <li><strong>Saturation:</strong> A measure of system fullness, indicating resource constraints (e.g., memory limits, CPU usage, thread pool utilization, or disk write IOPS).</li>
            </ul>

            <h4>2. White-Box vs. Black-Box Monitoring</h4>
            <table>
                <thead>
                    <tr>
                        <th>Observability Type</th>
                        <th>Definition / Strategy</th>
                        <th>GCP Implementation</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><strong>White-Box</strong></td>
                        <td>Internal instrumentation of code, logs, and system metrics. Used to detect issues before they impact users (predictive).</td>
                        <td>Cloud Logging, Cloud Trace, custom application metrics exported to Cloud Monitoring.</td>
                    </tr>
                    <tr>
                        <td><strong>Black-Box</strong></td>
                        <td>External testing of user-facing behavior. Focuses on whether the system is responding correctly from the outside (reactive).</td>
                        <td>Cloud Monitoring Synthetic Monitors, Uptime Checks from multiple global locations.</td>
                    </tr>
                </tbody>
            </table>

            <h4>3. Billing Operations and Cost Controls</h4>
            <ul>
                <li><strong>BigQuery Billing Export:</strong> Enable detailed billing data export directly to BigQuery. This allows running custom SQL queries to analyze usage patterns, identify anomalies, and create custom cost visualization dashboards in Looker Studio.</li>
                <li><strong>Labels:</strong> Key-value pairs attached to resources (like VMs, GCS buckets, or projects). Use labels (e.g., <code>env=prod</code>, <code>dept=rnd</code>) to allocate spending accurately across departments.</li>
                <li><strong>Budgets & Alerts:</strong> Set budgets at the project or billing account level. Configure alert thresholds (e.g., 50%, 70%, 90%, 100% of budget) to trigger emails, SMS, or Cloud Pub/Sub events (to automate resource shutdown).</li>
            </ul>

            <h4>4. CI/CD Tooling</h4>
            <ul>
                <li><strong>Cloud Build:</strong> Fully managed serverless CI/CD tool that compiles, tests, and deploys applications. Supports custom build steps running inside Docker containers.</li>
                <li><strong>Artifact Registry:</strong> Next-generation package manager that supports Docker containers, Maven, npm, Python packages, and Go binaries. Securely scans containers for vulnerabilities.</li>
                <li><strong>Cloud Deploy:</strong> Fully managed continuous delivery service that automates application deployment to Google Kubernetes Engine (GKE) and Cloud Run. Handles canary rollouts, blue/green rollouts, and one-click rollbacks.</li>
            </ul>
        `,
        "docs": [
            { "name": "SRE Golden Signals (Google Book)", "url": "https://sre.google/sre-book/monitoring-distributed-systems/" },
            { "name": "BigQuery Billing Exports", "url": "https://cloud.google.com/billing/docs/how-to/export-data-bigquery" },
            { "name": "Cloud Deploy Rollout Strategies", "url": "https://cloud.google.com/deploy/docs/rollout-strategies" }
        ],
        "checklist": [
            "Configure a mock Billing Budget with Pub/Sub automation trigger",
            "Set up Cloud Monitoring Synthetic Monitor Uptime Check",
            "Write a cloudbuild.yaml script compiling a Docker image and pushing to Artifact Registry"
        ]
    },
    "part2": {
        "title": "Networking, VPCs, & Load Balancing",
        "sybex": "Sybex Ch 6",
        "intro": "Covers VPC infrastructure, cross-project networking, hybrid connectivity to on-prem data centers, and global anycast Load Balancing.",
        "content": `
            <h4>1. VPC Peering vs. Shared VPC</h4>
            <ul>
                <li><strong>VPC Network Peering:</strong> Connects two distinct VPC networks (even across different organizations) to communicate via private RFC 1918 IPs. Note that VPC Peering is <strong>non-transitive</strong> (A peered with B, and B peered with C does NOT allow A to communicate with C). Subnet CIDRs cannot overlap.</li>
                <li><strong>Shared VPC:</strong> Promotes centralized administration. A single <strong>Host Project</strong> manages network resources (VPCs, subnets, firewalls, VPNs). Separate <strong>Service Projects</strong> deploy their VM workloads or GKE clusters directly into shared subnets. Subnets are delegated using the <code>Compute Network User</code> IAM role.</li>
            </ul>

            <h4>2. Hybrid Connectivity Topologies</h4>
            <table>
                <thead>
                    <tr>
                        <th>Connectivity Type</th>
                        <th>SLA / Reliability</th>
                        <th>Bandwidth</th>
                        <th>Provisioning Time</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><strong>Cloud VPN (IPsec)</strong></td>
                        <td>99.9% (Classic) / 99.99% (HA VPN)</td>
                        <td>Up to 3 Gbps per tunnel</td>
                        <td>Minutes (over public internet)</td>
                    </tr>
                    <tr>
                        <td><strong>Partner Interconnect</strong></td>
                        <td>99.9% / 99.99% (Topology dependent)</td>
                        <td>50 Mbps to 10 Gbps per connection</td>
                        <td>Days to Weeks (via partner)</td>
                    </tr>
                    <tr>
                        <td><strong>Dedicated Interconnect</strong></td>
                        <td>99.9% / 99.99% (Topology dependent)</td>
                        <td>10 Gbps or 100 Gbps physical circuits</td>
                        <td>Weeks to Months (fiber co-location)</td>
                    </tr>
                </tbody>
            </table>
            <p><strong>Note for 99.99% HA SLA:</strong> Dedicated Interconnect requires at least two physical connections in Metropolitan Area A (co-location facility 1) and two connections in Metropolitan Area B (co-location facility 2), terminating on separate Cloud Routers in Google's edge.</p>

            <h4>3. Load Balancing Strategy</h4>
            <ul>
                <li><strong>Global External HTTP(S) LB:</strong> Multi-regional proxy load balancer utilizing Google's Anycast IP addresses. Directs users automatically to the closest healthy backend. Supports Cloud CDN, SSL offloading, URL maps, and Cloud Armor.</li>
                <li><strong>Regional External HTTP(S) LB:</strong> Regional proxy load balancer. Best for routing traffic to backends within a single region when regional isolation is required.</li>
                <li><strong>External Network TCP/UDP LB (Proxy or Passthrough):</strong> Regional load balancer. Passthrough LB preserves client source IP; proxy LB terminates client TCP sessions.</li>
                <li><strong>Internal TCP/UDP LB:</strong> Highly scalable regional load balancer that routes internal private traffic (within VPC) with sub-millisecond latency.</li>
            </ul>
        `,
        "docs": [
            { "name": "VPC Peering vs. Shared VPC", "url": "https://cloud.google.com/vpc/docs/shared-vpc" },
            { "name": "Interconnect 99.99% Availability HA Guide", "url": "https://cloud.google.com/network-connectivity/docs/interconnect/concepts/high-availability-dedicated" },
            { "name": "Load Balancing Decision Guide", "url": "https://cloud.google.com/load-balancing/docs/choosing-load-balancer" }
        ],
        "checklist": [
            "Draw a Shared VPC network architecture containing Host and Service Projects",
            "Identify when to use a Passthrough NLB vs. a Proxy LB",
            "Configure Private Google Access on a VPC subnet"
        ]
    },
    "part3": {
        "title": "Security, Identity, & Compliance",
        "sybex": "Sybex Ch 7",
        "intro": "Focuses on Identity and Access Management (IAM), data encryption keys, secure network perimeters, and regulatory compliance.",
        "content": `
            <h4>1. IAM Hierarchy & Inherited Permissions</h4>
            <p>Permissions in GCP flow downward through the hierarchy: <strong>Organization &rarr; Folders &rarr; Projects &rarr; Resources</strong>. Permissions are additive; a user granted <code>Storage Admin</code> at the Folder level cannot have that permission restricted or revoked at the Project level. <strong>Deny Policies</strong> are evaluated first and override any active Allow permissions.</p>

            <h4>2. Predefined vs. Custom Roles</h4>
            <ul>
                <li><strong>Predefined Roles:</strong> Maintained and updated by Google (e.g., <code>roles/pubsub.publisher</code>). Automatically updated when Google adds new API features.</li>
                <li><strong>Custom Roles:</strong> Created to enforce the Principle of Least Privilege. Only bundle the exact API permissions required. <em>Constraint:</em> Must be managed manually when Google updates APIs, and cannot be applied at the Folder or Organization level.</li>
            </ul>

            <h4>3. Data Encryption Models</h4>
            <ul>
                <li><strong>Google-Managed Encryption Keys:</strong> Default encryption at rest. Keys are managed, rotated, and secured entirely by Google.</li>
                <li><strong>Customer-Managed Encryption Keys (CMEK):</strong> Customers manage key creation, rotation policies, and access controls using <strong>Cloud KMS</strong>. The data still resides on GCP.</li>
                <li><strong>Customer-Supplied Encryption Keys (CSEK):</strong> Customers generate and manage keys on-premises and supply them in API headers (supported on GCS and Compute Engine). Google never stores the key on disk. If the key is lost, data recovery is impossible.</li>
            </ul>

            <h4>4. Security Boundaries & Zero-Trust</h4>
            <ul>
                <li><strong>VPC Service Controls:</strong> Restricts data exfiltration by enclosing projects or services (like GCS or BigQuery) in a secure cryptographic service perimeter. Prevents users inside the network from copy-pasting data to external projects.</li>
                <li><strong>Identity-Aware Proxy (IAP):</strong> Allows developers or employees to access internal corporate applications and VMs via SSH/TCP without establishing standard VPN connections, utilizing context-aware access policies.</li>
                <li><strong>Cloud Armor:</strong> Operates at the edge of Google's network to mitigate DDoS attacks and protect HTTP(S) applications against SQL injection and cross-site scripting (XSS) attacks.</li>
            </ul>
        `,
        "docs": [
            { "name": "VPC Service Controls Overview", "url": "https://cloud.google.com/vpc-service-controls/docs/overview" },
            { "name": "Identity-Aware Proxy (IAP) Concepts", "url": "https://cloud.google.com/iap/docs/concepts-overview" },
            { "name": "IAM Recommender Service", "url": "https://cloud.google.com/iam/docs/recommender-overview" }
        ],
        "checklist": [
            "Configure a VPC Service Perimeter restricting a Cloud Storage bucket",
            "Set up IAP Context-Aware access mapping to a developer email",
            "Create a Cloud KMS encryption key ring and enable CMEK on a BigQuery dataset"
        ]
    },
    "part4": {
        "title": "Storage Options & Encryption",
        "sybex": "Sybex Ch 5",
        "intro": "Details object storage classes, block storage volumes, network file systems, and lifecycle compliance.",
        "content": `
            <h4>1. Cloud Storage (GCS) Classes & Lifecycles</h4>
            <table>
                <thead>
                    <tr>
                        <th>GCS Class</th>
                        <th>Minimum Storage Period</th>
                        <th>Ideal Use Case</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><strong>Standard</strong></td>
                        <td>None</td>
                        <td>Active, frequently accessed media files, web assets.</td>
                    </tr>
                    <tr>
                        <td><strong>Nearline</strong></td>
                        <td>30 Days</td>
                        <td>Backup data, accessed less than once a month.</td>
                    </tr>
                    <tr>
                        <td><strong>Coldline</strong></td>
                        <td>90 Days</td>
                        <td>Disaster recovery archives, accessed less than once a quarter.</td>
                    </tr>
                    <tr>
                        <td><strong>Archive</strong></td>
                        <td>360 Days</td>
                        <td>Regulatory backups, audit compliance files, accessed once a year.</td>
                    </tr>
                </tbody>
            </table>
            <p><strong>Object Lifecycle Management:</strong> Automatically transitions objects to cheaper storage classes or deletes them after a specified number of days or version criteria.</p>
            <p><strong>Retention Policies & Bucket Lock:</strong> Enforces WORM (Write Once, Read Many) policies. Once a retention policy is locked, it cannot be modified or deleted, even by project Owners or administrators.</p>

            <h4>2. Persistent Disks (Block Storage)</h4>
            <ul>
                <li><strong>Standard Persistent Disks (pd-standard):</strong> Cost-effective storage for sequential read/write operations (e.g., standard file shares, web servers).</li>
                <li><strong>Balanced Persistent Disks (pd-balanced):</strong> Default storage for VMs. Balance cost and IOPS for general-purpose workloads.</li>
                <li><strong>SSD Persistent Disks (pd-ssd):</strong> High-performance block storage for transactional enterprise databases (like SQL Server or PostgreSQL).</li>
                <li><strong>Extreme Persistent Disks (pd-extreme):</strong> Premium block storage with customizable provisioned IOPS, optimized for extremely high-throughput workloads.</li>
                <li><strong>Local SSDs:</strong> Physically attached to the host server running the VM. Provide ultra-low latency and extremely high IOPS, but data is <strong>ephemeral</strong> and lost when the VM is stopped or terminated.</li>
            </ul>

            <h4>3. Filestore (NAS)</h4>
            <p>A fully managed Network Attached Storage (NAS) service providing POSIX-compliant NFS file shares. Best for legacy applications running on Compute Engine VMs that require concurrent read/write access to a shared directory (multi-attach).</p>
        `,
        "docs": [
            { "name": "Cloud Storage Classes Overview", "url": "https://cloud.google.com/storage/docs/storage-classes" },
            { "name": "Bucket Lock and Retention Policies", "url": "https://cloud.google.com/storage/docs/bucket-lock" },
            { "name": "Compute Engine Disk Performance", "url": "https://cloud.google.com/compute/docs/disks/performance" }
        ],
        "checklist": [
            "Write a JSON lifecycle rule moving objects to Coldline after 30 days and deleting them after 360 days",
            "Identify when to attach a Local SSD vs. a Persistent Disk SSD",
            "Configure a Filestore NFS share and mount it on a Compute Engine instance"
        ]
    },
    "part5": {
        "title": "Virtual Machines & Managed Instance Groups",
        "sybex": "Sybex Ch 4",
        "intro": "Covers Compute Engine virtual machines, autoscaling and autohealing configurations, snapshots, and Spot VM schedules.",
        "content": `
            <h4>1. Managed Instance Groups (MIGs) and Scaling</h4>
            <p>MIGs maintain high availability of stateless VM workloads by deploying identical instances across multiple zones in a region using an <strong>Instance Template</strong>.</p>
            <ul>
                <li><strong>Autoscaling:</strong> Automatically adds or removes VM instances from the MIG based on metrics like CPU utilization, HTTP Load Balancing capacity, or Cloud Pub/Sub queue length.</li>
                <li><strong>Autohealing:</strong> Monitors application health using an HTTP/HTTPS health check. If an instance's application fails the health check (e.g., returns 502 Bad Gateway), the autohealing system automatically recreates the VM instance.</li>
                <li><strong>MIG Update Policies:</strong> Supports <strong>Proactive</strong> (automatically roll out template updates in batches) and <strong>Opportunistic</strong> (updates applied only when instances are scaled out or recreated). Use <code>minReadySec</code> to delay updating subsequent VMs while caches synchronize.</li>
            </ul>

            <h4>2. Crash-Consistent vs. Application-Consistent Disk Snapshots</h4>
            <ul>
                <li><strong>Crash-Consistent:</strong> The snapshot captures the state of the disk at a single instant. It does not wait for database flush operations. This is the default.</li>
                <li><strong>Application-Consistent:</strong> For highly active databases, you must flush writes to disk and freeze the database file system prior to running the snapshot, then unfreeze writes once the snapshot starts. This ensures zero transactional corruption.</li>
            </ul>

            <h4>3. Spot VMs</h4>
            <p>Highly cost-effective compute instances (saving up to 60-91% compared to standard VMs). Spot VMs run on spare Google capacity. Google can terminate/preempt Spot VMs at any time with a <strong>30-second warning</strong>. Perfect for batch processing, stateless worker pools, and parallel compute runs where preemption is tolerated.</p>
        `,
        "docs": [
            { "name": "Managed Instance Group Autohealing", "url": "https://cloud.google.com/compute/docs/instance-groups/creating-groups-of-managed-instances" },
            { "name": "Creating Application-Consistent Snapshots", "url": "https://cloud.google.com/compute/docs/disks/create-app-consistent-snapshots" },
            { "name": "Spot VMs Overview", "url": "https://cloud.google.com/compute/docs/instances/spot" }
        ],
        "checklist": [
            "Deploy a MIG with CPU autoscaler set to 70% threshold",
            "Create a cron schedule running incremental snapshots of a boot disk",
            "Write a script handling Spot VM preemption signals using metadata endpoints"
        ]
    },
    "part6": {
        "title": "Managed Compute & Serverless",
        "sybex": "Sybex Ch 4",
        "intro": "Focuses on serverless application runtimes, containers on Cloud Run, and App Engine standard vs flexible options.",
        "content": `
            <h4>1. App Engine Standard vs. Flexible</h4>
            <table>
                <thead>
                    <tr>
                        <th>Features</th>
                        <th>App Engine Standard</th>
                        <th>App Engine Flexible</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><strong>Runtime</strong></td>
                        <td>Specific versions of Java, Python, Go, Node.js (sandboxed).</td>
                        <td>Custom Docker containers (any language/library).</td>
                    </tr>
                    <tr>
                        <td><strong>Startup Time</strong></td>
                        <td>Seconds (scales to zero instantly).</td>
                        <td>Minutes (deploying virtual machines).</td>
                    </tr>
                    <tr>
                        <td><strong>OS Access</strong></td>
                        <td>None (fully sandboxed runtime).</td>
                        <td>Allows SSH and custom OS-level libraries.</td>
                    </tr>
                    <tr>
                        <td><strong>Ideal Use Case</strong></td>
                        <td>Rapidly scaling stateless web applications with low traffic spikes.</td>
                        <td>Legacy applications with custom OS dependencies or long startup times.</td>
                    </tr>
                </tbody>
            </table>

            <h4>2. Cloud Run</h4>
            <p>A fully managed serverless platform that runs stateless containerized applications over Web technology. It abstract all infrastructure management, automatically scaling from 0 to thousands of instances.</p>
            <ul>
                <li><strong>Scaling:</strong> Scales based on concurrent requests. Standard instances can process up to 250 requests concurrently, reducing cold starts.</li>
                <li><strong>Scale-to-Zero:</strong> When traffic stops, Cloud Run scales down to zero instances. You only pay for CPU and memory during request execution.</li>
                <li><strong>CPU Allocation:</strong> Choose between 'CPU allocated only during request processing' (most cost-effective) or 'CPU always allocated' (faster performance, reduces cold starts).</li>
            </ul>

            <h4>3. Cloud Functions</h4>
            <p>Serverless event-driven functions as a service (FaaS). Executes small blocks of code in response to events emitted by Cloud Pub/Sub, Cloud Storage, or HTTP requests. Best for lightweight data pipelines or webhooks.</p>
        `,
        "docs": [
            { "name": "App Engine Environments Comparison", "url": "https://cloud.google.com/appengine/docs/the-appengine-environments" },
            { "name": "Cloud Run Autoscaling and Concurrency", "url": "https://cloud.google.com/run/docs/configuring/max-instances" },
            { "name": "Cloud Functions Event Runtimes", "url": "https://cloud.google.com/functions/docs/concepts/runtimes" }
        ],
        "checklist": [
            "Deploy a basic hello-world web app to Cloud Run",
            "Set max-instances limits on Cloud Run to prevent database connection exhaustion",
            "Trigger a Cloud Function automatically on GCS file upload events"
        ]
    },
    "part7": {
        "title": "Google Kubernetes Engine (GKE)",
        "sybex": "Sybex Ch 4",
        "intro": "Focuses on deploying, managing, and scaling containerized applications on Kubernetes Engine standard or autopilot clusters.",
        "content": `
            <h4>1. GKE Standard vs. GKE Autopilot</h4>
            <ul>
                <li><strong>GKE Standard:</strong> Provides full control over the cluster nodes. You manage node pools, configure VM sizes, configure scaling thresholds, and patch operating systems. You pay for the underlying VM compute resources.</li>
                <li><strong>GKE Autopilot:</strong> Google manages the cluster control plane and the node pools. Google manages provisioning, security patching, and autoscaling. You only pay for the CPU, memory, and storage requested by the active pods. Highly recommended to reduce operational overhead.</li>
            </ul>

            <h4>2. GKE Operations & Commands</h4>
            <ul>
                <li><strong>Deploying workloads:</strong> Controlled via declarative YAML configuration files (Deployments, StatefulSets, Services, DaemonSets).</li>
                <li><strong>Canary Rollout:</strong> Deploy a second Deployment with a duplicate selector but only a single pod. The GKE Service distributes traffic across the old and new pods. Or utilize Istio (Anthos Service Mesh) for ratio routing (e.g., 5%).</li>
                <li><strong>Useful CLI Commands:</strong>
                    <ul>
                        <li><code>kubectl rollout status deployment/web-deployment</code> (Verify rollout state)</li>
                        <li><code>kubectl rollout undo deployment/web-deployment</code> (Immediately roll back to previous deployment)</li>
                        <li><code>kubectl get pods -l app=web-app</code> (Get pods by label selector)</li>
                    </ul>
                </li>
            </ul>

            <h4>3. Stateful vs. Stateless Workloads</h4>
            <ul>
                <li><strong>Stateless:</strong> Replicated using <code>Deployments</code>. Pods can be destroyed and recreated on any node without data loss.</li>
                <li><strong>Stateful:</strong> Replicated using <code>StatefulSets</code>. Each pod is assigned a persistent, unique index and volume binding (using PersistentVolumeClaims). Ideal for database clusters.</li>
            </ul>
        `,
        "docs": [
            { "name": "GKE Standard vs. Autopilot", "url": "https://cloud.google.com/kubernetes-engine/docs/concepts/autopilot-overview" },
            { "name": "Kubectl Rollout Command Guide", "url": "https://kubernetes.io/docs/reference/generated/kubectl/kubectl-commands#rollout" },
            { "name": "Kubernetes DaemonSet Concept", "url": "https://kubernetes.io/docs/concepts/workloads/controllers/daemonset/" }
        ],
        "checklist": [
            "Provision a GKE Autopilot cluster",
            "Write a GKE deployment manifest with resource requests and limits",
            "Simulate a container update failure and perform a kubectl rollout undo"
        ]
    },
    "part8": {
        "title": "Anthos & Hybrid Multi-Cloud Platforms",
        "sybex": "Sybex Ch 6, 12",
        "intro": "Details Google Cloud's enterprise platform for multi-cluster management, policy automation, service meshes, and migration.",
        "content": `
            <h4>1. Anthos / GKE Enterprise Overview</h4>
            <p>Anthos is Google's hybrid and multi-cloud container orchestration platform. It manages GKE clusters running on Google Cloud, on-premises VMware (GKE on-prem), bare metal, AWS, and Azure from a single interface.</p>

            <h4>2. Anthos Config Management (ACM)</h4>
            <p>ACM enforces security policies, namespace allocations, and IAM configurations across all registered Anthos clusters using a <strong>GitOps</strong> approach. Platforms administrators declare configurations in a centralized Git repository. ACM agents running inside the clusters periodically sync and apply the configurations, preventing drift.</p>
            <ul>
                <li><strong>Config Sync:</strong> Synchronizes Kubernetes manifests from Git.</li>
                <li><strong>Policy Controller:</strong> Evaluates cluster compliance (using Open Policy Agent Gatekeeper rules) before configurations are applied (e.g., preventing containers from running with root privileges).</li>
            </ul>

            <h4>3. Anthos Service Mesh (ASM)</h4>
            <p>A fully managed, Istio-compatible service mesh that connects, secures, and monitors microservices across clusters.</p>
            <ul>
                <li><strong>Security:</strong> Enforces mutual TLS (mTLS) encryption for secure pod-to-pod communications automatically.</li>
                <li><strong>Traffic Management:</strong> Configures fine-grained routing policies (canary splits, circuit breakers, and fault injections).</li>
                <li><strong>Observability:</strong> Collects telemetry and latency profiles to map service dependency networks.</li>
            </ul>

            <h4>4. Migrate for Anthos</h4>
            <p>Automates the extraction and conversion of legacy applications running on VM instances (on-premises or on Compute Engine) directly into containers running in a GKE cluster, simplifying legacy modernization.</p>
        `,
        "docs": [
            { "name": "Anthos Architectures Guide", "url": "https://cloud.google.com/anthos/docs/concepts/overview" },
            { "name": "ACM Config Sync Introduction", "url": "https://cloud.google.com/anthos-config-management/docs/concepts/config-sync" },
            { "name": "Migrate for Anthos Overview", "url": "https://cloud.google.com/migrate/anthos/docs" }
        ],
        "checklist": [
            "Structure an ACM hierarchical Git repository",
            "Draft a Policy Controller constraint blocking default namespaces",
            "Explain the transition mechanism of Migrate for Anthos"
        ]
    },
    "part9": {
        "title": "Databases & Analytical Pipelines",
        "sybex": "Sybex Ch 5",
        "intro": "Examines Google Cloud's transactional, NoSQL, and analytical databases, along with batch/stream data integration tools.",
        "content": `
            <h4>1. Database Selection Matrix</h4>
            <table>
                <thead>
                    <tr>
                        <th>Database</th>
                        <th>Type / API</th>
                        <th>Scale</th>
                        <th>Consistency / HA</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><strong>Cloud SQL</strong></td>
                        <td>Relational (PG, MySQL, MS SQL)</td>
                        <td>Up to 30 TB</td>
                        <td>ACID / Regional Active-Standby failover</td>
                    </tr>
                    <tr>
                        <td><strong>Cloud Spanner</strong></td>
                        <td>Relational (SQL, Postgres dial.)</td>
                        <td>Unlimited horizontal scale</td>
                        <td>Strong Global ACID / 99.999% SLA</td>
                    </tr>
                    <tr>
                        <td><strong>Firestore</strong></td>
                        <td>NoSQL Document</td>
                        <td>Terabytes</td>
                        <td>Strong consistency / Mobile-web sync</td>
                    </tr>
                    <tr>
                        <td><strong>Cloud Bigtable</strong></td>
                        <td>NoSQL Wide-Column</td>
                        <td>Petabytes</td>
                        <td>Eventual consistency / High write throughput</td>
                    </tr>
                </tbody>
            </table>

            <h4>2. BigQuery Optimization</h4>
            <ul>
                <li><strong>Partitioning:</strong> Divides a table into smaller segments based on a date or timestamp column (e.g., transaction date). Queries filtering by the partition key scan only the relevant partition, significantly reducing query costs and execution times.</li>
                <li><strong>Clustering:</strong> Organizes data inside partitions based on the values of up to four columns (e.g., customer ID or country). Optimized for filter and aggregation queries.</li>
                <li><strong>BI Engine:</strong> An in-memory analysis service that enables sub-second query response times in Looker Studio.</li>
            </ul>

            <h4>3. Ingestion & Integration Pipelines</h4>
            <ul>
                <li><strong>Cloud Pub/Sub:</strong> High-throughput, real-time message ingestion service. Acts as the landing point for streaming data (e.g., game telemetry, clickstream logs).</li>
                <li><strong>Cloud Dataflow:</strong> Serverless batch and stream processing engine based on Apache Beam. Cleanses, aggregates, and transforms data before loading it into BigQuery.</li>
                <li><strong>Cloud Dataproc:</strong> Managed Hadoop and Spark service. Used to migrate existing on-premises Hadoop clusters directly to GCP with minimal code modification.</li>
                <li><strong>Datastream:</strong> Serverless Change Data Capture (CDC) service that replicates databases (like Oracle or MySQL) to Cloud Storage, BigQuery, or Spanner in real-time.</li>
            </ul>
        `,
        "docs": [
            { "name": "Cloud Spanner Whitepaper (TrueTime)", "url": "https://cloud.google.com/spanner/docs/whitepapers/life-of-a-read-write-transaction" },
            { "name": "BigQuery Partitioning & Clustering", "url": "https://cloud.google.com/bigquery/docs/partitioned-tables" },
            { "name": "Datastream CDC Overview", "url": "https://cloud.google.com/datastream" }
        ],
        "checklist": [
            "Set up Daily Partitioning and Customer ID Clustering on a BigQuery table schema",
            "Differentiate a Hot Key design in Cloud Bigtable and redesign it using salting",
            "Configure a Cloud SQL high-availability configuration replica"
        ]
    },
    "part10": {
        "title": "Case Studies & SRE Principles",
        "sybex": "Sybex Ch 1, 2, 9, 10",
        "intro": "Synthesizes the four main PCA case studies and aligns business requirements with operational SRE metrics.",
        "content": `
            <h4>1. Mountkirk Games Case Study</h4>
            <p><strong>Scenario:</strong> Launching a global multiplayer mobile game. Expecting millions of active users. Telemetry must be collected in real-time.</p>
            <ul>
                <li><strong>Business Requirements:</strong> Global scale, minimize operational overhead, aggregate analytics.</li>
                <li><strong>Architecture Solution:</strong> Stream telemetry to <strong>Cloud Pub/Sub</strong> &rarr; process via <strong>Cloud Dataflow</strong> &rarr; store time-series telemetry in <strong>Cloud Bigtable</strong> (for rapid writes). Run analytics by loading data into <strong>BigQuery</strong>. Deploy backends on <strong>GKE Autopilot</strong> using Spot VMs for cost optimization.</li>
            </ul>

            <h4>2. TerramEarth Case Study</h4>
            <p><strong>Scenario:</strong> Millions of connected agricultural vehicles. Many operate offline in remote farms. Data uploaded in batches at dealerships.</p>
            <ul>
                <li><strong>Business Requirements:</strong> Predictive vehicle maintenance, manage massive historical datasets, run ML queries.</li>
                <li><strong>Architecture Solution:</strong> Offline batch files uploaded directly to <strong>Google Cloud Storage</strong> &rarr; trigger <strong>Cloud Dataflow</strong> &rarr; load into <strong>BigQuery</strong>. Real-time telemetry streamed using MQTT protocols to <strong>Cloud Pub/Sub</strong>. Run predictive maintenance queries using <strong>BigQuery ML</strong>.</li>
            </ul>

            <h4>3. Dress4Win Case Study</h4>
            <p><strong>Scenario:</strong> E-commerce clothing website. Migrating legacy on-premises architecture to GCP.</p>
            <ul>
                <li><strong>Business Requirements:</strong> Minimize downtime during migration, control costs, deploy dev/test first.</li>
                <li><strong>Architecture Solution:</strong> Establish connection using <strong>Cloud VPN</strong>. Migrate development environments first to test scale. Use database replication (on-premises database replication to a <strong>Cloud SQL</strong> HA standby in GCP) before switching over traffic.</li>
            </ul>

            <h4>4. EHR Healthcare Case Study</h4>
            <p><strong>Scenario:</strong> Enterprise clinical record host. Handling highly regulated Patient Health Information (PHI) subject to HIPAA audits.</p>
            <ul>
                <li><strong>Business Requirements:</strong> Strict regulatory compliance, data residency, multi-region database transactions.</li>
                <li><strong>Architecture Solution:</strong> Deploy <strong>Cloud Spanner</strong> across multiple regions for global ACID transactions. Secure patient records using <strong>VPC Service Controls</strong> to prevent data exfiltration. Enforce <strong>CMEK</strong> encryption using <strong>Cloud KMS</strong> keys. Establish redundant connections via <strong>Cloud Interconnect</strong>.</li>
            </ul>

            <h4>5. JencoMart Case Study</h4>
            <p><strong>Scenario:</strong> Legacy retail brand migrating their user portal, product catalog, and database infrastructure to GCP.</p>
            <ul>
                <li><strong>Business Requirements:</strong> Leverage cloud scalability, minimize licensing costs, migrate database without disruption.</li>
                <li><strong>Architecture Solution:</strong> Lift-and-shift catalog/web servers using <strong>Compute Engine VMs</strong>. Migrate Oracle database to <strong>Cloud SQL for PostgreSQL</strong> to minimize proprietary licensing overhead. Secure static assets on <strong>Cloud Storage</strong> and optimize query analysis of user purchasing patterns using <strong>BigQuery</strong>.</li>
            </ul>

            <h4>6. SRE SLA, SLO, and SLI Math</h4>
            <ul>
                <li><strong>Service Level Indicator (SLI):</strong> <code>SLI = (Good Events / Total Events) * 100</code>. Example: Latency under 200ms for HTTP requests.</li>
                <li><strong>Service Level Objective (SLO):</strong> The target reliability rate agreed upon by the SRE and Product teams (e.g., 99.9% availability over 30 days).</li>
                <li><strong>Service Level Agreement (SLA):</strong> The user-facing reliability agreement, typically lower than the SLO (e.g., 99.5%). Breaches carry billing credit penalties.</li>
                <li><strong>Error Budget Calculation:</strong> <code>Error Budget = 100% - SLO</code>.
                    <ul>
                        <li>For a 99.9% SLO over a 30-day period (43,200 minutes), the maximum allowed downtime is: <code>0.001 * 43,200 = 43.2 minutes</code>.</li>
                        <li>If a major deployment causes a 45-minute outage, the budget is fully exhausted. Feature updates must freeze to focus entirely on stability.</li>
                    </ul>
                </li>
            </ul>
        `,
        "docs": [
            { "name": "Official GCP Case Studies Guides", "url": "https://cloud.google.com/learn/certification/cloud-architect" },
            { "name": "Google SRE Workbook (Error Budgets)", "url": "https://sre.google/workbook/error-budget-policy/" },
            { "name": "HIPAA Compliance on Google Cloud", "url": "https://cloud.google.com/security/compliance/hipaa" }
        ],
        "checklist": [
            "Compute the allowed monthly downtime minutes for a 99.99% SLO",
            "Map out the data flow from TerramEarth's offline vehicle files to BigQuery",
            "Review EHR Healthcare compliance controls for data encryption at rest and in transit"
        ]
    }
};

// Export for ES modules & Browser globals
if (typeof window !== 'undefined') {
    window.notesData = notesData;
}
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { notesData };
}
