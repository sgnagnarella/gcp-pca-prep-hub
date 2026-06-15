/**
 * GCP Professional Cloud Architect (PCA) Prep Hub
 * Question Database - 200 Programmatically Generated Scenario-Based Design Questions
 */

const questionsList = [
    {
        "id": 1,
        "category": "Part I: Operations & Developer Tools",
        "question": "At JencoMart, the SRE team needs to ensure the developer API meets an SLA of 99.9% availability. They need to monitor latency metrics in a way that distinguishes successful read operations from read errors, and alerts on anomalies. Which Google-recommended approach should they use?",
        "options": [
            "Export all application console logs to Cloud Logging, set up a log-based metric counting 2xx and 5xx statuses, and alert on threshold breaches.",
            "Install the Ops Agent on VMs, enable Prometheus metric scraping for the API server, configure custom latency metrics in Cloud Monitoring, and use percentiles for alerts.",
            "Write a script that curls the health endpoint every minute, logs success, and sends a slack notification if it returns a 5xx error.",
            "Set up a Cloud Monitoring synthetic monitor uptime check, configure it to run against the API, and alert on response times above 500ms."
        ],
        "answer": 1,
        "explanation": "Custom application metrics scraped via the Ops Agent (using Prometheus endpoints) are the standard way to export fine-grained white-box metrics like latency percentiles. Log-based metrics and synthetic uptime checks are black-box and do not capture internal processing percentiles efficiently."
    },
    {
        "id": 2,
        "category": "Part I: Operations & Developer Tools",
        "question": "At Mountkirk Games, the SRE team needs to ensure the developer API meets an SLA of 99.99% availability. They need to monitor latency metrics in a way that distinguishes successful read operations from read errors, and alerts on anomalies. Which Google-recommended approach should they use?",
        "options": [
            "Export all application console logs to Cloud Logging, set up a log-based metric counting 2xx and 5xx statuses, and alert on threshold breaches.",
            "Install the Ops Agent on VMs, enable Prometheus metric scraping for the API server, configure custom latency metrics in Cloud Monitoring, and use percentiles for alerts.",
            "Write a script that curls the health endpoint every minute, logs success, and sends a slack notification if it returns a 5xx error.",
            "Set up a Cloud Monitoring synthetic monitor uptime check, configure it to run against the API, and alert on response times above 500ms."
        ],
        "answer": 1,
        "explanation": "Custom application metrics scraped via the Ops Agent (using Prometheus endpoints) are the standard way to export fine-grained white-box metrics like latency percentiles. Log-based metrics and synthetic uptime checks are black-box and do not capture internal processing percentiles efficiently."
    },
    {
        "id": 3,
        "category": "Part I: Operations & Developer Tools",
        "question": "At TerramEarth, the SRE team needs to ensure the developer API meets an SLA of 99.95% availability. They need to monitor latency metrics in a way that distinguishes successful read operations from read errors, and alerts on anomalies. Which Google-recommended approach should they use?",
        "options": [
            "Export all application console logs to Cloud Logging, set up a log-based metric counting 2xx and 5xx statuses, and alert on threshold breaches.",
            "Install the Ops Agent on VMs, enable Prometheus metric scraping for the API server, configure custom latency metrics in Cloud Monitoring, and use percentiles for alerts.",
            "Write a script that curls the health endpoint every minute, logs success, and sends a slack notification if it returns a 5xx error.",
            "Set up a Cloud Monitoring synthetic monitor uptime check, configure it to run against the API, and alert on response times above 500ms."
        ],
        "answer": 1,
        "explanation": "Custom application metrics scraped via the Ops Agent (using Prometheus endpoints) are the standard way to export fine-grained white-box metrics like latency percentiles. Log-based metrics and synthetic uptime checks are black-box and do not capture internal processing percentiles efficiently."
    },
    {
        "id": 4,
        "category": "Part I: Operations & Developer Tools",
        "question": "At Dress4Win, the SRE team needs to ensure the developer API meets an SLA of 99.999% availability. They need to monitor latency metrics in a way that distinguishes successful read operations from read errors, and alerts on anomalies. Which Google-recommended approach should they use?",
        "options": [
            "Export all application console logs to Cloud Logging, set up a log-based metric counting 2xx and 5xx statuses, and alert on threshold breaches.",
            "Install the Ops Agent on VMs, enable Prometheus metric scraping for the API server, configure custom latency metrics in Cloud Monitoring, and use percentiles for alerts.",
            "Write a script that curls the health endpoint every minute, logs success, and sends a slack notification if it returns a 5xx error.",
            "Set up a Cloud Monitoring synthetic monitor uptime check, configure it to run against the API, and alert on response times above 500ms."
        ],
        "answer": 1,
        "explanation": "Custom application metrics scraped via the Ops Agent (using Prometheus endpoints) are the standard way to export fine-grained white-box metrics like latency percentiles. Log-based metrics and synthetic uptime checks are black-box and do not capture internal processing percentiles efficiently."
    },
    {
        "id": 5,
        "category": "Part I: Operations & Developer Tools",
        "question": "At EHR Healthcare, the SRE team needs to ensure the developer API meets an SLA of 99.9% availability. They need to monitor latency metrics in a way that distinguishes successful read operations from read errors, and alerts on anomalies. Which Google-recommended approach should they use?",
        "options": [
            "Export all application console logs to Cloud Logging, set up a log-based metric counting 2xx and 5xx statuses, and alert on threshold breaches.",
            "Install the Ops Agent on VMs, enable Prometheus metric scraping for the API server, configure custom latency metrics in Cloud Monitoring, and use percentiles for alerts.",
            "Write a script that curls the health endpoint every minute, logs success, and sends a slack notification if it returns a 5xx error.",
            "Set up a Cloud Monitoring synthetic monitor uptime check, configure it to run against the API, and alert on response times above 500ms."
        ],
        "answer": 1,
        "explanation": "Custom application metrics scraped via the Ops Agent (using Prometheus endpoints) are the standard way to export fine-grained white-box metrics like latency percentiles. Log-based metrics and synthetic uptime checks are black-box and do not capture internal processing percentiles efficiently."
    },
    {
        "id": 6,
        "category": "Part I: Operations & Developer Tools",
        "question": "At VidiCorp, the SRE team needs to ensure the developer API meets an SLA of 99.99% availability. They need to monitor latency metrics in a way that distinguishes successful read operations from read errors, and alerts on anomalies. Which Google-recommended approach should they use?",
        "options": [
            "Export all application console logs to Cloud Logging, set up a log-based metric counting 2xx and 5xx statuses, and alert on threshold breaches.",
            "Install the Ops Agent on VMs, enable Prometheus metric scraping for the API server, configure custom latency metrics in Cloud Monitoring, and use percentiles for alerts.",
            "Write a script that curls the health endpoint every minute, logs success, and sends a slack notification if it returns a 5xx error.",
            "Set up a Cloud Monitoring synthetic monitor uptime check, configure it to run against the API, and alert on response times above 500ms."
        ],
        "answer": 1,
        "explanation": "Custom application metrics scraped via the Ops Agent (using Prometheus endpoints) are the standard way to export fine-grained white-box metrics like latency percentiles. Log-based metrics and synthetic uptime checks are black-box and do not capture internal processing percentiles efficiently."
    },
    {
        "id": 7,
        "category": "Part I: Operations & Developer Tools",
        "question": "At Lucerne Publishing, the SRE team needs to ensure the developer API meets an SLA of 99.95% availability. They need to monitor latency metrics in a way that distinguishes successful read operations from read errors, and alerts on anomalies. Which Google-recommended approach should they use?",
        "options": [
            "Export all application console logs to Cloud Logging, set up a log-based metric counting 2xx and 5xx statuses, and alert on threshold breaches.",
            "Install the Ops Agent on VMs, enable Prometheus metric scraping for the API server, configure custom latency metrics in Cloud Monitoring, and use percentiles for alerts.",
            "Write a script that curls the health endpoint every minute, logs success, and sends a slack notification if it returns a 5xx error.",
            "Set up a Cloud Monitoring synthetic monitor uptime check, configure it to run against the API, and alert on response times above 500ms."
        ],
        "answer": 1,
        "explanation": "Custom application metrics scraped via the Ops Agent (using Prometheus endpoints) are the standard way to export fine-grained white-box metrics like latency percentiles. Log-based metrics and synthetic uptime checks are black-box and do not capture internal processing percentiles efficiently."
    },
    {
        "id": 8,
        "category": "Part I: Operations & Developer Tools",
        "question": "At AeroSpace Corp, the SRE team needs to ensure the developer API meets an SLA of 99.999% availability. They need to monitor latency metrics in a way that distinguishes successful read operations from read errors, and alerts on anomalies. Which Google-recommended approach should they use?",
        "options": [
            "Export all application console logs to Cloud Logging, set up a log-based metric counting 2xx and 5xx statuses, and alert on threshold breaches.",
            "Install the Ops Agent on VMs, enable Prometheus metric scraping for the API server, configure custom latency metrics in Cloud Monitoring, and use percentiles for alerts.",
            "Write a script that curls the health endpoint every minute, logs success, and sends a slack notification if it returns a 5xx error.",
            "Set up a Cloud Monitoring synthetic monitor uptime check, configure it to run against the API, and alert on response times above 500ms."
        ],
        "answer": 1,
        "explanation": "Custom application metrics scraped via the Ops Agent (using Prometheus endpoints) are the standard way to export fine-grained white-box metrics like latency percentiles. Log-based metrics and synthetic uptime checks are black-box and do not capture internal processing percentiles efficiently."
    },
    {
        "id": 9,
        "category": "Part I: Operations & Developer Tools",
        "question": "At BioMed Labs, the SRE team needs to ensure the developer API meets an SLA of 99.9% availability. They need to monitor latency metrics in a way that distinguishes successful read operations from read errors, and alerts on anomalies. Which Google-recommended approach should they use?",
        "options": [
            "Export all application console logs to Cloud Logging, set up a log-based metric counting 2xx and 5xx statuses, and alert on threshold breaches.",
            "Install the Ops Agent on VMs, enable Prometheus metric scraping for the API server, configure custom latency metrics in Cloud Monitoring, and use percentiles for alerts.",
            "Write a script that curls the health endpoint every minute, logs success, and sends a slack notification if it returns a 5xx error.",
            "Set up a Cloud Monitoring synthetic monitor uptime check, configure it to run against the API, and alert on response times above 500ms."
        ],
        "answer": 1,
        "explanation": "Custom application metrics scraped via the Ops Agent (using Prometheus endpoints) are the standard way to export fine-grained white-box metrics like latency percentiles. Log-based metrics and synthetic uptime checks are black-box and do not capture internal processing percentiles efficiently."
    },
    {
        "id": 10,
        "category": "Part I: Operations & Developer Tools",
        "question": "At RetailFlow, the SRE team needs to ensure the developer API meets an SLA of 99.99% availability. They need to monitor latency metrics in a way that distinguishes successful read operations from read errors, and alerts on anomalies. Which Google-recommended approach should they use?",
        "options": [
            "Export all application console logs to Cloud Logging, set up a log-based metric counting 2xx and 5xx statuses, and alert on threshold breaches.",
            "Install the Ops Agent on VMs, enable Prometheus metric scraping for the API server, configure custom latency metrics in Cloud Monitoring, and use percentiles for alerts.",
            "Write a script that curls the health endpoint every minute, logs success, and sends a slack notification if it returns a 5xx error.",
            "Set up a Cloud Monitoring synthetic monitor uptime check, configure it to run against the API, and alert on response times above 500ms."
        ],
        "answer": 1,
        "explanation": "Custom application metrics scraped via the Ops Agent (using Prometheus endpoints) are the standard way to export fine-grained white-box metrics like latency percentiles. Log-based metrics and synthetic uptime checks are black-box and do not capture internal processing percentiles efficiently."
    },
    {
        "id": 11,
        "category": "Part I: Operations & Developer Tools",
        "question": "The finance department at Apex Analytics requires daily breakdowns of cloud spending segmented by environment (development, staging, production) and department (engineering, marketing). How should you design the cost tracking system?",
        "options": [
            "Create separate billing accounts for each environment and department, and assign projects to them.",
            "Use Folders to segregate environments, label all individual resources with key-value pairs (e.g. dept=marketing, env=prod), enable Cloud Billing export to BigQuery, and build a Looker Studio dashboard.",
            "Write an automated Python script that queries the Cloud Billing API hourly and generates a spreadsheet sorted by department.",
            "Grant the billing viewer role to all team leads and have them check their project budgets in the GCP console manually."
        ],
        "answer": 1,
        "explanation": "Google Cloud's recommended practice for cost allocation is to organize projects using Folders, apply Labels to resources for detailed tagging, export billing logs to BigQuery, and visualize the findings using Looker Studio. Separate billing accounts are too complex to manage, and manual checks are error-prone."
    },
    {
        "id": 12,
        "category": "Part I: Operations & Developer Tools",
        "question": "The finance department at FinSafe Group requires daily breakdowns of cloud spending segmented by environment (development, staging, production) and department (engineering, marketing). How should you design the cost tracking system?",
        "options": [
            "Create separate billing accounts for each environment and department, and assign projects to them.",
            "Use Folders to segregate environments, label all individual resources with key-value pairs (e.g. dept=marketing, env=prod), enable Cloud Billing export to BigQuery, and build a Looker Studio dashboard.",
            "Write an automated Python script that queries the Cloud Billing API hourly and generates a spreadsheet sorted by department.",
            "Grant the billing viewer role to all team leads and have them check their project budgets in the GCP console manually."
        ],
        "answer": 1,
        "explanation": "Google Cloud's recommended practice for cost allocation is to organize projects using Folders, apply Labels to resources for detailed tagging, export billing logs to BigQuery, and visualize the findings using Looker Studio. Separate billing accounts are too complex to manage, and manual checks are error-prone."
    },
    {
        "id": 13,
        "category": "Part I: Operations & Developer Tools",
        "question": "The finance department at Global Logistics requires daily breakdowns of cloud spending segmented by environment (development, staging, production) and department (engineering, marketing). How should you design the cost tracking system?",
        "options": [
            "Create separate billing accounts for each environment and department, and assign projects to them.",
            "Use Folders to segregate environments, label all individual resources with key-value pairs (e.g. dept=marketing, env=prod), enable Cloud Billing export to BigQuery, and build a Looker Studio dashboard.",
            "Write an automated Python script that queries the Cloud Billing API hourly and generates a spreadsheet sorted by department.",
            "Grant the billing viewer role to all team leads and have them check their project budgets in the GCP console manually."
        ],
        "answer": 1,
        "explanation": "Google Cloud's recommended practice for cost allocation is to organize projects using Folders, apply Labels to resources for detailed tagging, export billing logs to BigQuery, and visualize the findings using Looker Studio. Separate billing accounts are too complex to manage, and manual checks are error-prone."
    },
    {
        "id": 14,
        "category": "Part I: Operations & Developer Tools",
        "question": "The finance department at HealthScribe requires daily breakdowns of cloud spending segmented by environment (development, staging, production) and department (engineering, marketing). How should you design the cost tracking system?",
        "options": [
            "Create separate billing accounts for each environment and department, and assign projects to them.",
            "Use Folders to segregate environments, label all individual resources with key-value pairs (e.g. dept=marketing, env=prod), enable Cloud Billing export to BigQuery, and build a Looker Studio dashboard.",
            "Write an automated Python script that queries the Cloud Billing API hourly and generates a spreadsheet sorted by department.",
            "Grant the billing viewer role to all team leads and have them check their project budgets in the GCP console manually."
        ],
        "answer": 1,
        "explanation": "Google Cloud's recommended practice for cost allocation is to organize projects using Folders, apply Labels to resources for detailed tagging, export billing logs to BigQuery, and visualize the findings using Looker Studio. Separate billing accounts are too complex to manage, and manual checks are error-prone."
    },
    {
        "id": 15,
        "category": "Part I: Operations & Developer Tools",
        "question": "The finance department at EduLearn Ltd requires daily breakdowns of cloud spending segmented by environment (development, staging, production) and department (engineering, marketing). How should you design the cost tracking system?",
        "options": [
            "Create separate billing accounts for each environment and department, and assign projects to them.",
            "Use Folders to segregate environments, label all individual resources with key-value pairs (e.g. dept=marketing, env=prod), enable Cloud Billing export to BigQuery, and build a Looker Studio dashboard.",
            "Write an automated Python script that queries the Cloud Billing API hourly and generates a spreadsheet sorted by department.",
            "Grant the billing viewer role to all team leads and have them check their project budgets in the GCP console manually."
        ],
        "answer": 1,
        "explanation": "Google Cloud's recommended practice for cost allocation is to organize projects using Folders, apply Labels to resources for detailed tagging, export billing logs to BigQuery, and visualize the findings using Looker Studio. Separate billing accounts are too complex to manage, and manual checks are error-prone."
    },
    {
        "id": 16,
        "category": "Part I: Operations & Developer Tools",
        "question": "The finance department at MegaMedia Inc requires daily breakdowns of cloud spending segmented by environment (development, staging, production) and department (engineering, marketing). How should you design the cost tracking system?",
        "options": [
            "Create separate billing accounts for each environment and department, and assign projects to them.",
            "Use Folders to segregate environments, label all individual resources with key-value pairs (e.g. dept=marketing, env=prod), enable Cloud Billing export to BigQuery, and build a Looker Studio dashboard.",
            "Write an automated Python script that queries the Cloud Billing API hourly and generates a spreadsheet sorted by department.",
            "Grant the billing viewer role to all team leads and have them check their project budgets in the GCP console manually."
        ],
        "answer": 1,
        "explanation": "Google Cloud's recommended practice for cost allocation is to organize projects using Folders, apply Labels to resources for detailed tagging, export billing logs to BigQuery, and visualize the findings using Looker Studio. Separate billing accounts are too complex to manage, and manual checks are error-prone."
    },
    {
        "id": 17,
        "category": "Part I: Operations & Developer Tools",
        "question": "The finance department at GovTech Portal requires daily breakdowns of cloud spending segmented by environment (development, staging, production) and department (engineering, marketing). How should you design the cost tracking system?",
        "options": [
            "Create separate billing accounts for each environment and department, and assign projects to them.",
            "Use Folders to segregate environments, label all individual resources with key-value pairs (e.g. dept=marketing, env=prod), enable Cloud Billing export to BigQuery, and build a Looker Studio dashboard.",
            "Write an automated Python script that queries the Cloud Billing API hourly and generates a spreadsheet sorted by department.",
            "Grant the billing viewer role to all team leads and have them check their project budgets in the GCP console manually."
        ],
        "answer": 1,
        "explanation": "Google Cloud's recommended practice for cost allocation is to organize projects using Folders, apply Labels to resources for detailed tagging, export billing logs to BigQuery, and visualize the findings using Looker Studio. Separate billing accounts are too complex to manage, and manual checks are error-prone."
    },
    {
        "id": 18,
        "category": "Part I: Operations & Developer Tools",
        "question": "The finance department at GreenGrid Energy requires daily breakdowns of cloud spending segmented by environment (development, staging, production) and department (engineering, marketing). How should you design the cost tracking system?",
        "options": [
            "Create separate billing accounts for each environment and department, and assign projects to them.",
            "Use Folders to segregate environments, label all individual resources with key-value pairs (e.g. dept=marketing, env=prod), enable Cloud Billing export to BigQuery, and build a Looker Studio dashboard.",
            "Write an automated Python script that queries the Cloud Billing API hourly and generates a spreadsheet sorted by department.",
            "Grant the billing viewer role to all team leads and have them check their project budgets in the GCP console manually."
        ],
        "answer": 1,
        "explanation": "Google Cloud's recommended practice for cost allocation is to organize projects using Folders, apply Labels to resources for detailed tagging, export billing logs to BigQuery, and visualize the findings using Looker Studio. Separate billing accounts are too complex to manage, and manual checks are error-prone."
    },
    {
        "id": 19,
        "category": "Part I: Operations & Developer Tools",
        "question": "The finance department at AgriGrow Labs requires daily breakdowns of cloud spending segmented by environment (development, staging, production) and department (engineering, marketing). How should you design the cost tracking system?",
        "options": [
            "Create separate billing accounts for each environment and department, and assign projects to them.",
            "Use Folders to segregate environments, label all individual resources with key-value pairs (e.g. dept=marketing, env=prod), enable Cloud Billing export to BigQuery, and build a Looker Studio dashboard.",
            "Write an automated Python script that queries the Cloud Billing API hourly and generates a spreadsheet sorted by department.",
            "Grant the billing viewer role to all team leads and have them check their project budgets in the GCP console manually."
        ],
        "answer": 1,
        "explanation": "Google Cloud's recommended practice for cost allocation is to organize projects using Folders, apply Labels to resources for detailed tagging, export billing logs to BigQuery, and visualize the findings using Looker Studio. Separate billing accounts are too complex to manage, and manual checks are error-prone."
    },
    {
        "id": 20,
        "category": "Part I: Operations & Developer Tools",
        "question": "The finance department at SecureTrans requires daily breakdowns of cloud spending segmented by environment (development, staging, production) and department (engineering, marketing). How should you design the cost tracking system?",
        "options": [
            "Create separate billing accounts for each environment and department, and assign projects to them.",
            "Use Folders to segregate environments, label all individual resources with key-value pairs (e.g. dept=marketing, env=prod), enable Cloud Billing export to BigQuery, and build a Looker Studio dashboard.",
            "Write an automated Python script that queries the Cloud Billing API hourly and generates a spreadsheet sorted by department.",
            "Grant the billing viewer role to all team leads and have them check their project budgets in the GCP console manually."
        ],
        "answer": 1,
        "explanation": "Google Cloud's recommended practice for cost allocation is to organize projects using Folders, apply Labels to resources for detailed tagging, export billing logs to BigQuery, and visualize the findings using Looker Studio. Separate billing accounts are too complex to manage, and manual checks are error-prone."
    },
    {
        "id": 21,
        "category": "Part II: Networking & Load Balancing",
        "question": "A network architect at JencoMart needs to establish a hybrid connection to their on-premises office. They require a physical connection with 99.9% availability and a bandwidth requirement of 10 Gbps, strictly avoiding the public internet. Which connectivity topology meets these requirements?",
        "options": [
            "Configure active-active Cloud VPN tunnels running over public fiber.",
            "Deploy Dedicated Interconnect with at least two circuits at one co-location facility and a redundant pair of circuits at a second co-location facility in a different city, terminated on separate Cloud Routers in each region.",
            "Deploy Partner Interconnect with a single 10 Gbps circuit connecting through an authorized service provider.",
            "Set up Carrier Peering with a service provider to route traffic through private circuits directly."
        ],
        "answer": 1,
        "explanation": "Dedicated Interconnect provides direct physical connections. For 99.99% availability (HA SLA), Google requires a dual-metropolitan topology: at least two connections in one metro area (colocation facility A) and another two in a different metro area (colocation facility B), running BGP routing with Cloud Routers. Carrier Peering does not offer an SLA."
    },
    {
        "id": 22,
        "category": "Part II: Networking & Load Balancing",
        "question": "A network architect at Mountkirk Games needs to establish a hybrid connection to their on-premises office. They require a physical connection with 99.99% availability and a bandwidth requirement of 10 Gbps, strictly avoiding the public internet. Which connectivity topology meets these requirements?",
        "options": [
            "Configure active-active Cloud VPN tunnels running over public fiber.",
            "Deploy Dedicated Interconnect with at least two circuits at one co-location facility and a redundant pair of circuits at a second co-location facility in a different city, terminated on separate Cloud Routers in each region.",
            "Deploy Partner Interconnect with a single 10 Gbps circuit connecting through an authorized service provider.",
            "Set up Carrier Peering with a service provider to route traffic through private circuits directly."
        ],
        "answer": 1,
        "explanation": "Dedicated Interconnect provides direct physical connections. For 99.99% availability (HA SLA), Google requires a dual-metropolitan topology: at least two connections in one metro area (colocation facility A) and another two in a different metro area (colocation facility B), running BGP routing with Cloud Routers. Carrier Peering does not offer an SLA."
    },
    {
        "id": 23,
        "category": "Part II: Networking & Load Balancing",
        "question": "A network architect at TerramEarth needs to establish a hybrid connection to their on-premises office. They require a physical connection with 99.95% availability and a bandwidth requirement of 10 Gbps, strictly avoiding the public internet. Which connectivity topology meets these requirements?",
        "options": [
            "Configure active-active Cloud VPN tunnels running over public fiber.",
            "Deploy Dedicated Interconnect with at least two circuits at one co-location facility and a redundant pair of circuits at a second co-location facility in a different city, terminated on separate Cloud Routers in each region.",
            "Deploy Partner Interconnect with a single 10 Gbps circuit connecting through an authorized service provider.",
            "Set up Carrier Peering with a service provider to route traffic through private circuits directly."
        ],
        "answer": 1,
        "explanation": "Dedicated Interconnect provides direct physical connections. For 99.99% availability (HA SLA), Google requires a dual-metropolitan topology: at least two connections in one metro area (colocation facility A) and another two in a different metro area (colocation facility B), running BGP routing with Cloud Routers. Carrier Peering does not offer an SLA."
    },
    {
        "id": 24,
        "category": "Part II: Networking & Load Balancing",
        "question": "A network architect at Dress4Win needs to establish a hybrid connection to their on-premises office. They require a physical connection with 99.999% availability and a bandwidth requirement of 10 Gbps, strictly avoiding the public internet. Which connectivity topology meets these requirements?",
        "options": [
            "Configure active-active Cloud VPN tunnels running over public fiber.",
            "Deploy Dedicated Interconnect with at least two circuits at one co-location facility and a redundant pair of circuits at a second co-location facility in a different city, terminated on separate Cloud Routers in each region.",
            "Deploy Partner Interconnect with a single 10 Gbps circuit connecting through an authorized service provider.",
            "Set up Carrier Peering with a service provider to route traffic through private circuits directly."
        ],
        "answer": 1,
        "explanation": "Dedicated Interconnect provides direct physical connections. For 99.99% availability (HA SLA), Google requires a dual-metropolitan topology: at least two connections in one metro area (colocation facility A) and another two in a different metro area (colocation facility B), running BGP routing with Cloud Routers. Carrier Peering does not offer an SLA."
    },
    {
        "id": 25,
        "category": "Part II: Networking & Load Balancing",
        "question": "A network architect at EHR Healthcare needs to establish a hybrid connection to their on-premises office. They require a physical connection with 99.9% availability and a bandwidth requirement of 10 Gbps, strictly avoiding the public internet. Which connectivity topology meets these requirements?",
        "options": [
            "Configure active-active Cloud VPN tunnels running over public fiber.",
            "Deploy Dedicated Interconnect with at least two circuits at one co-location facility and a redundant pair of circuits at a second co-location facility in a different city, terminated on separate Cloud Routers in each region.",
            "Deploy Partner Interconnect with a single 10 Gbps circuit connecting through an authorized service provider.",
            "Set up Carrier Peering with a service provider to route traffic through private circuits directly."
        ],
        "answer": 1,
        "explanation": "Dedicated Interconnect provides direct physical connections. For 99.99% availability (HA SLA), Google requires a dual-metropolitan topology: at least two connections in one metro area (colocation facility A) and another two in a different metro area (colocation facility B), running BGP routing with Cloud Routers. Carrier Peering does not offer an SLA."
    },
    {
        "id": 26,
        "category": "Part II: Networking & Load Balancing",
        "question": "A network architect at VidiCorp needs to establish a hybrid connection to their on-premises office. They require a physical connection with 99.99% availability and a bandwidth requirement of 10 Gbps, strictly avoiding the public internet. Which connectivity topology meets these requirements?",
        "options": [
            "Configure active-active Cloud VPN tunnels running over public fiber.",
            "Deploy Dedicated Interconnect with at least two circuits at one co-location facility and a redundant pair of circuits at a second co-location facility in a different city, terminated on separate Cloud Routers in each region.",
            "Deploy Partner Interconnect with a single 10 Gbps circuit connecting through an authorized service provider.",
            "Set up Carrier Peering with a service provider to route traffic through private circuits directly."
        ],
        "answer": 1,
        "explanation": "Dedicated Interconnect provides direct physical connections. For 99.99% availability (HA SLA), Google requires a dual-metropolitan topology: at least two connections in one metro area (colocation facility A) and another two in a different metro area (colocation facility B), running BGP routing with Cloud Routers. Carrier Peering does not offer an SLA."
    },
    {
        "id": 27,
        "category": "Part II: Networking & Load Balancing",
        "question": "A network architect at Lucerne Publishing needs to establish a hybrid connection to their on-premises office. They require a physical connection with 99.95% availability and a bandwidth requirement of 10 Gbps, strictly avoiding the public internet. Which connectivity topology meets these requirements?",
        "options": [
            "Configure active-active Cloud VPN tunnels running over public fiber.",
            "Deploy Dedicated Interconnect with at least two circuits at one co-location facility and a redundant pair of circuits at a second co-location facility in a different city, terminated on separate Cloud Routers in each region.",
            "Deploy Partner Interconnect with a single 10 Gbps circuit connecting through an authorized service provider.",
            "Set up Carrier Peering with a service provider to route traffic through private circuits directly."
        ],
        "answer": 1,
        "explanation": "Dedicated Interconnect provides direct physical connections. For 99.99% availability (HA SLA), Google requires a dual-metropolitan topology: at least two connections in one metro area (colocation facility A) and another two in a different metro area (colocation facility B), running BGP routing with Cloud Routers. Carrier Peering does not offer an SLA."
    },
    {
        "id": 28,
        "category": "Part II: Networking & Load Balancing",
        "question": "A network architect at AeroSpace Corp needs to establish a hybrid connection to their on-premises office. They require a physical connection with 99.999% availability and a bandwidth requirement of 10 Gbps, strictly avoiding the public internet. Which connectivity topology meets these requirements?",
        "options": [
            "Configure active-active Cloud VPN tunnels running over public fiber.",
            "Deploy Dedicated Interconnect with at least two circuits at one co-location facility and a redundant pair of circuits at a second co-location facility in a different city, terminated on separate Cloud Routers in each region.",
            "Deploy Partner Interconnect with a single 10 Gbps circuit connecting through an authorized service provider.",
            "Set up Carrier Peering with a service provider to route traffic through private circuits directly."
        ],
        "answer": 1,
        "explanation": "Dedicated Interconnect provides direct physical connections. For 99.99% availability (HA SLA), Google requires a dual-metropolitan topology: at least two connections in one metro area (colocation facility A) and another two in a different metro area (colocation facility B), running BGP routing with Cloud Routers. Carrier Peering does not offer an SLA."
    },
    {
        "id": 29,
        "category": "Part II: Networking & Load Balancing",
        "question": "A network architect at BioMed Labs needs to establish a hybrid connection to their on-premises office. They require a physical connection with 99.9% availability and a bandwidth requirement of 10 Gbps, strictly avoiding the public internet. Which connectivity topology meets these requirements?",
        "options": [
            "Configure active-active Cloud VPN tunnels running over public fiber.",
            "Deploy Dedicated Interconnect with at least two circuits at one co-location facility and a redundant pair of circuits at a second co-location facility in a different city, terminated on separate Cloud Routers in each region.",
            "Deploy Partner Interconnect with a single 10 Gbps circuit connecting through an authorized service provider.",
            "Set up Carrier Peering with a service provider to route traffic through private circuits directly."
        ],
        "answer": 1,
        "explanation": "Dedicated Interconnect provides direct physical connections. For 99.99% availability (HA SLA), Google requires a dual-metropolitan topology: at least two connections in one metro area (colocation facility A) and another two in a different metro area (colocation facility B), running BGP routing with Cloud Routers. Carrier Peering does not offer an SLA."
    },
    {
        "id": 30,
        "category": "Part II: Networking & Load Balancing",
        "question": "A network architect at RetailFlow needs to establish a hybrid connection to their on-premises office. They require a physical connection with 99.99% availability and a bandwidth requirement of 10 Gbps, strictly avoiding the public internet. Which connectivity topology meets these requirements?",
        "options": [
            "Configure active-active Cloud VPN tunnels running over public fiber.",
            "Deploy Dedicated Interconnect with at least two circuits at one co-location facility and a redundant pair of circuits at a second co-location facility in a different city, terminated on separate Cloud Routers in each region.",
            "Deploy Partner Interconnect with a single 10 Gbps circuit connecting through an authorized service provider.",
            "Set up Carrier Peering with a service provider to route traffic through private circuits directly."
        ],
        "answer": 1,
        "explanation": "Dedicated Interconnect provides direct physical connections. For 99.99% availability (HA SLA), Google requires a dual-metropolitan topology: at least two connections in one metro area (colocation facility A) and another two in a different metro area (colocation facility B), running BGP routing with Cloud Routers. Carrier Peering does not offer an SLA."
    },
    {
        "id": 31,
        "category": "Part II: Networking & Load Balancing",
        "question": "The security team at Apex Analytics has configured VPC Network Peering between Project A and Project B. They now peer Project B with Project C. Network admins report that VMs in Project A cannot ping VMs in Project C. Why is this happening and how do you resolve it?",
        "options": [
            "VPC Peering requires a VPN gateway to route traffic. Set up a Cloud VPN tunnel between A and C.",
            "VPC Network Peering is non-transitive. If A is peered with B, and B with C, Project A cannot reach C. You must establish direct VPC Network Peering between A and C (ensuring no subnet CIDR overlaps).",
            "Firewall rules in Project B are blocking traffic forwarding. Enable IP forwarding on all instances in B.",
            "Shared VPC must be enabled before VPC peering can forward transit traffic. Convert B into a Host Project."
        ],
        "answer": 1,
        "explanation": "VPC Network Peering is strictly non-transitive. If VPC A is peered with B, and B is peered with C, traffic cannot flow from A to C through B. To resolve it, peer VPC A and VPC C directly, ensuring that their subnet CIDR ranges do not overlap."
    },
    {
        "id": 32,
        "category": "Part II: Networking & Load Balancing",
        "question": "The security team at FinSafe Group has configured VPC Network Peering between Project A and Project B. They now peer Project B with Project C. Network admins report that VMs in Project A cannot ping VMs in Project C. Why is this happening and how do you resolve it?",
        "options": [
            "VPC Peering requires a VPN gateway to route traffic. Set up a Cloud VPN tunnel between A and C.",
            "VPC Network Peering is non-transitive. If A is peered with B, and B with C, Project A cannot reach C. You must establish direct VPC Network Peering between A and C (ensuring no subnet CIDR overlaps).",
            "Firewall rules in Project B are blocking traffic forwarding. Enable IP forwarding on all instances in B.",
            "Shared VPC must be enabled before VPC peering can forward transit traffic. Convert B into a Host Project."
        ],
        "answer": 1,
        "explanation": "VPC Network Peering is strictly non-transitive. If VPC A is peered with B, and B is peered with C, traffic cannot flow from A to C through B. To resolve it, peer VPC A and VPC C directly, ensuring that their subnet CIDR ranges do not overlap."
    },
    {
        "id": 33,
        "category": "Part II: Networking & Load Balancing",
        "question": "The security team at Global Logistics has configured VPC Network Peering between Project A and Project B. They now peer Project B with Project C. Network admins report that VMs in Project A cannot ping VMs in Project C. Why is this happening and how do you resolve it?",
        "options": [
            "VPC Peering requires a VPN gateway to route traffic. Set up a Cloud VPN tunnel between A and C.",
            "VPC Network Peering is non-transitive. If A is peered with B, and B with C, Project A cannot reach C. You must establish direct VPC Network Peering between A and C (ensuring no subnet CIDR overlaps).",
            "Firewall rules in Project B are blocking traffic forwarding. Enable IP forwarding on all instances in B.",
            "Shared VPC must be enabled before VPC peering can forward transit traffic. Convert B into a Host Project."
        ],
        "answer": 1,
        "explanation": "VPC Network Peering is strictly non-transitive. If VPC A is peered with B, and B is peered with C, traffic cannot flow from A to C through B. To resolve it, peer VPC A and VPC C directly, ensuring that their subnet CIDR ranges do not overlap."
    },
    {
        "id": 34,
        "category": "Part II: Networking & Load Balancing",
        "question": "The security team at HealthScribe has configured VPC Network Peering between Project A and Project B. They now peer Project B with Project C. Network admins report that VMs in Project A cannot ping VMs in Project C. Why is this happening and how do you resolve it?",
        "options": [
            "VPC Peering requires a VPN gateway to route traffic. Set up a Cloud VPN tunnel between A and C.",
            "VPC Network Peering is non-transitive. If A is peered with B, and B with C, Project A cannot reach C. You must establish direct VPC Network Peering between A and C (ensuring no subnet CIDR overlaps).",
            "Firewall rules in Project B are blocking traffic forwarding. Enable IP forwarding on all instances in B.",
            "Shared VPC must be enabled before VPC peering can forward transit traffic. Convert B into a Host Project."
        ],
        "answer": 1,
        "explanation": "VPC Network Peering is strictly non-transitive. If VPC A is peered with B, and B is peered with C, traffic cannot flow from A to C through B. To resolve it, peer VPC A and VPC C directly, ensuring that their subnet CIDR ranges do not overlap."
    },
    {
        "id": 35,
        "category": "Part II: Networking & Load Balancing",
        "question": "The security team at EduLearn Ltd has configured VPC Network Peering between Project A and Project B. They now peer Project B with Project C. Network admins report that VMs in Project A cannot ping VMs in Project C. Why is this happening and how do you resolve it?",
        "options": [
            "VPC Peering requires a VPN gateway to route traffic. Set up a Cloud VPN tunnel between A and C.",
            "VPC Network Peering is non-transitive. If A is peered with B, and B with C, Project A cannot reach C. You must establish direct VPC Network Peering between A and C (ensuring no subnet CIDR overlaps).",
            "Firewall rules in Project B are blocking traffic forwarding. Enable IP forwarding on all instances in B.",
            "Shared VPC must be enabled before VPC peering can forward transit traffic. Convert B into a Host Project."
        ],
        "answer": 1,
        "explanation": "VPC Network Peering is strictly non-transitive. If VPC A is peered with B, and B is peered with C, traffic cannot flow from A to C through B. To resolve it, peer VPC A and VPC C directly, ensuring that their subnet CIDR ranges do not overlap."
    },
    {
        "id": 36,
        "category": "Part II: Networking & Load Balancing",
        "question": "The security team at MegaMedia Inc has configured VPC Network Peering between Project A and Project B. They now peer Project B with Project C. Network admins report that VMs in Project A cannot ping VMs in Project C. Why is this happening and how do you resolve it?",
        "options": [
            "VPC Peering requires a VPN gateway to route traffic. Set up a Cloud VPN tunnel between A and C.",
            "VPC Network Peering is non-transitive. If A is peered with B, and B with C, Project A cannot reach C. You must establish direct VPC Network Peering between A and C (ensuring no subnet CIDR overlaps).",
            "Firewall rules in Project B are blocking traffic forwarding. Enable IP forwarding on all instances in B.",
            "Shared VPC must be enabled before VPC peering can forward transit traffic. Convert B into a Host Project."
        ],
        "answer": 1,
        "explanation": "VPC Network Peering is strictly non-transitive. If VPC A is peered with B, and B is peered with C, traffic cannot flow from A to C through B. To resolve it, peer VPC A and VPC C directly, ensuring that their subnet CIDR ranges do not overlap."
    },
    {
        "id": 37,
        "category": "Part II: Networking & Load Balancing",
        "question": "The security team at GovTech Portal has configured VPC Network Peering between Project A and Project B. They now peer Project B with Project C. Network admins report that VMs in Project A cannot ping VMs in Project C. Why is this happening and how do you resolve it?",
        "options": [
            "VPC Peering requires a VPN gateway to route traffic. Set up a Cloud VPN tunnel between A and C.",
            "VPC Network Peering is non-transitive. If A is peered with B, and B with C, Project A cannot reach C. You must establish direct VPC Network Peering between A and C (ensuring no subnet CIDR overlaps).",
            "Firewall rules in Project B are blocking traffic forwarding. Enable IP forwarding on all instances in B.",
            "Shared VPC must be enabled before VPC peering can forward transit traffic. Convert B into a Host Project."
        ],
        "answer": 1,
        "explanation": "VPC Network Peering is strictly non-transitive. If VPC A is peered with B, and B is peered with C, traffic cannot flow from A to C through B. To resolve it, peer VPC A and VPC C directly, ensuring that their subnet CIDR ranges do not overlap."
    },
    {
        "id": 38,
        "category": "Part II: Networking & Load Balancing",
        "question": "The security team at GreenGrid Energy has configured VPC Network Peering between Project A and Project B. They now peer Project B with Project C. Network admins report that VMs in Project A cannot ping VMs in Project C. Why is this happening and how do you resolve it?",
        "options": [
            "VPC Peering requires a VPN gateway to route traffic. Set up a Cloud VPN tunnel between A and C.",
            "VPC Network Peering is non-transitive. If A is peered with B, and B with C, Project A cannot reach C. You must establish direct VPC Network Peering between A and C (ensuring no subnet CIDR overlaps).",
            "Firewall rules in Project B are blocking traffic forwarding. Enable IP forwarding on all instances in B.",
            "Shared VPC must be enabled before VPC peering can forward transit traffic. Convert B into a Host Project."
        ],
        "answer": 1,
        "explanation": "VPC Network Peering is strictly non-transitive. If VPC A is peered with B, and B is peered with C, traffic cannot flow from A to C through B. To resolve it, peer VPC A and VPC C directly, ensuring that their subnet CIDR ranges do not overlap."
    },
    {
        "id": 39,
        "category": "Part II: Networking & Load Balancing",
        "question": "The security team at AgriGrow Labs has configured VPC Network Peering between Project A and Project B. They now peer Project B with Project C. Network admins report that VMs in Project A cannot ping VMs in Project C. Why is this happening and how do you resolve it?",
        "options": [
            "VPC Peering requires a VPN gateway to route traffic. Set up a Cloud VPN tunnel between A and C.",
            "VPC Network Peering is non-transitive. If A is peered with B, and B with C, Project A cannot reach C. You must establish direct VPC Network Peering between A and C (ensuring no subnet CIDR overlaps).",
            "Firewall rules in Project B are blocking traffic forwarding. Enable IP forwarding on all instances in B.",
            "Shared VPC must be enabled before VPC peering can forward transit traffic. Convert B into a Host Project."
        ],
        "answer": 1,
        "explanation": "VPC Network Peering is strictly non-transitive. If VPC A is peered with B, and B is peered with C, traffic cannot flow from A to C through B. To resolve it, peer VPC A and VPC C directly, ensuring that their subnet CIDR ranges do not overlap."
    },
    {
        "id": 40,
        "category": "Part II: Networking & Load Balancing",
        "question": "The security team at SecureTrans has configured VPC Network Peering between Project A and Project B. They now peer Project B with Project C. Network admins report that VMs in Project A cannot ping VMs in Project C. Why is this happening and how do you resolve it?",
        "options": [
            "VPC Peering requires a VPN gateway to route traffic. Set up a Cloud VPN tunnel between A and C.",
            "VPC Network Peering is non-transitive. If A is peered with B, and B with C, Project A cannot reach C. You must establish direct VPC Network Peering between A and C (ensuring no subnet CIDR overlaps).",
            "Firewall rules in Project B are blocking traffic forwarding. Enable IP forwarding on all instances in B.",
            "Shared VPC must be enabled before VPC peering can forward transit traffic. Convert B into a Host Project."
        ],
        "answer": 1,
        "explanation": "VPC Network Peering is strictly non-transitive. If VPC A is peered with B, and B is peered with C, traffic cannot flow from A to C through B. To resolve it, peer VPC A and VPC C directly, ensuring that their subnet CIDR ranges do not overlap."
    },
    {
        "id": 41,
        "category": "Part III: Security, Identity & Compliance",
        "question": "To comply with regulatory standards, JencoMart must encrypt all objects in a new Cloud Storage bucket using Customer-Managed Encryption Keys (CMEK). The key rotation policy must rotate the key every 90 days. How should you set this up?",
        "options": [
            "Create a key ring in Cloud KMS, generate a key, set the rotation period to 90 days, grant the Cloud Storage Service Agent the CryptoKey Encrypter/Decrypter role, and associate the key with the bucket.",
            "Write a script that rotates keys locally and uploads them via the CSEK headers with each gsutil upload.",
            "Use default Google-managed keys and check the 90-day compliance box in the bucket settings.",
            "Use Cloud HSM to store keys on-premises, and configure a Cloud VPN tunnel to pass keys to GCS during read/write operations."
        ],
        "answer": 0,
        "explanation": "To implement CMEK, you generate a key in Cloud KMS, set its auto-rotation period, grant the service account for GCS (the GCS Service Agent) permissions to use the key (`roles/cloudkms.cryptoKeyEncrypterDecrypter`), and configure the bucket to use this key. CSEK requires supplying keys with every request, which is complex and does not support automatic KMS rotation."
    },
    {
        "id": 42,
        "category": "Part III: Security, Identity & Compliance",
        "question": "To comply with regulatory standards, Mountkirk Games must encrypt all objects in a new Cloud Storage bucket using Customer-Managed Encryption Keys (CMEK). The key rotation policy must rotate the key every 90 days. How should you set this up?",
        "options": [
            "Create a key ring in Cloud KMS, generate a key, set the rotation period to 90 days, grant the Cloud Storage Service Agent the CryptoKey Encrypter/Decrypter role, and associate the key with the bucket.",
            "Write a script that rotates keys locally and uploads them via the CSEK headers with each gsutil upload.",
            "Use default Google-managed keys and check the 90-day compliance box in the bucket settings.",
            "Use Cloud HSM to store keys on-premises, and configure a Cloud VPN tunnel to pass keys to GCS during read/write operations."
        ],
        "answer": 0,
        "explanation": "To implement CMEK, you generate a key in Cloud KMS, set its auto-rotation period, grant the service account for GCS (the GCS Service Agent) permissions to use the key (`roles/cloudkms.cryptoKeyEncrypterDecrypter`), and configure the bucket to use this key. CSEK requires supplying keys with every request, which is complex and does not support automatic KMS rotation."
    },
    {
        "id": 43,
        "category": "Part III: Security, Identity & Compliance",
        "question": "To comply with regulatory standards, TerramEarth must encrypt all objects in a new Cloud Storage bucket using Customer-Managed Encryption Keys (CMEK). The key rotation policy must rotate the key every 90 days. How should you set this up?",
        "options": [
            "Create a key ring in Cloud KMS, generate a key, set the rotation period to 90 days, grant the Cloud Storage Service Agent the CryptoKey Encrypter/Decrypter role, and associate the key with the bucket.",
            "Write a script that rotates keys locally and uploads them via the CSEK headers with each gsutil upload.",
            "Use default Google-managed keys and check the 90-day compliance box in the bucket settings.",
            "Use Cloud HSM to store keys on-premises, and configure a Cloud VPN tunnel to pass keys to GCS during read/write operations."
        ],
        "answer": 0,
        "explanation": "To implement CMEK, you generate a key in Cloud KMS, set its auto-rotation period, grant the service account for GCS (the GCS Service Agent) permissions to use the key (`roles/cloudkms.cryptoKeyEncrypterDecrypter`), and configure the bucket to use this key. CSEK requires supplying keys with every request, which is complex and does not support automatic KMS rotation."
    },
    {
        "id": 44,
        "category": "Part III: Security, Identity & Compliance",
        "question": "To comply with regulatory standards, Dress4Win must encrypt all objects in a new Cloud Storage bucket using Customer-Managed Encryption Keys (CMEK). The key rotation policy must rotate the key every 90 days. How should you set this up?",
        "options": [
            "Create a key ring in Cloud KMS, generate a key, set the rotation period to 90 days, grant the Cloud Storage Service Agent the CryptoKey Encrypter/Decrypter role, and associate the key with the bucket.",
            "Write a script that rotates keys locally and uploads them via the CSEK headers with each gsutil upload.",
            "Use default Google-managed keys and check the 90-day compliance box in the bucket settings.",
            "Use Cloud HSM to store keys on-premises, and configure a Cloud VPN tunnel to pass keys to GCS during read/write operations."
        ],
        "answer": 0,
        "explanation": "To implement CMEK, you generate a key in Cloud KMS, set its auto-rotation period, grant the service account for GCS (the GCS Service Agent) permissions to use the key (`roles/cloudkms.cryptoKeyEncrypterDecrypter`), and configure the bucket to use this key. CSEK requires supplying keys with every request, which is complex and does not support automatic KMS rotation."
    },
    {
        "id": 45,
        "category": "Part III: Security, Identity & Compliance",
        "question": "To comply with regulatory standards, EHR Healthcare must encrypt all objects in a new Cloud Storage bucket using Customer-Managed Encryption Keys (CMEK). The key rotation policy must rotate the key every 90 days. How should you set this up?",
        "options": [
            "Create a key ring in Cloud KMS, generate a key, set the rotation period to 90 days, grant the Cloud Storage Service Agent the CryptoKey Encrypter/Decrypter role, and associate the key with the bucket.",
            "Write a script that rotates keys locally and uploads them via the CSEK headers with each gsutil upload.",
            "Use default Google-managed keys and check the 90-day compliance box in the bucket settings.",
            "Use Cloud HSM to store keys on-premises, and configure a Cloud VPN tunnel to pass keys to GCS during read/write operations."
        ],
        "answer": 0,
        "explanation": "To implement CMEK, you generate a key in Cloud KMS, set its auto-rotation period, grant the service account for GCS (the GCS Service Agent) permissions to use the key (`roles/cloudkms.cryptoKeyEncrypterDecrypter`), and configure the bucket to use this key. CSEK requires supplying keys with every request, which is complex and does not support automatic KMS rotation."
    },
    {
        "id": 46,
        "category": "Part III: Security, Identity & Compliance",
        "question": "To comply with regulatory standards, VidiCorp must encrypt all objects in a new Cloud Storage bucket using Customer-Managed Encryption Keys (CMEK). The key rotation policy must rotate the key every 90 days. How should you set this up?",
        "options": [
            "Create a key ring in Cloud KMS, generate a key, set the rotation period to 90 days, grant the Cloud Storage Service Agent the CryptoKey Encrypter/Decrypter role, and associate the key with the bucket.",
            "Write a script that rotates keys locally and uploads them via the CSEK headers with each gsutil upload.",
            "Use default Google-managed keys and check the 90-day compliance box in the bucket settings.",
            "Use Cloud HSM to store keys on-premises, and configure a Cloud VPN tunnel to pass keys to GCS during read/write operations."
        ],
        "answer": 0,
        "explanation": "To implement CMEK, you generate a key in Cloud KMS, set its auto-rotation period, grant the service account for GCS (the GCS Service Agent) permissions to use the key (`roles/cloudkms.cryptoKeyEncrypterDecrypter`), and configure the bucket to use this key. CSEK requires supplying keys with every request, which is complex and does not support automatic KMS rotation."
    },
    {
        "id": 47,
        "category": "Part III: Security, Identity & Compliance",
        "question": "To comply with regulatory standards, Lucerne Publishing must encrypt all objects in a new Cloud Storage bucket using Customer-Managed Encryption Keys (CMEK). The key rotation policy must rotate the key every 90 days. How should you set this up?",
        "options": [
            "Create a key ring in Cloud KMS, generate a key, set the rotation period to 90 days, grant the Cloud Storage Service Agent the CryptoKey Encrypter/Decrypter role, and associate the key with the bucket.",
            "Write a script that rotates keys locally and uploads them via the CSEK headers with each gsutil upload.",
            "Use default Google-managed keys and check the 90-day compliance box in the bucket settings.",
            "Use Cloud HSM to store keys on-premises, and configure a Cloud VPN tunnel to pass keys to GCS during read/write operations."
        ],
        "answer": 0,
        "explanation": "To implement CMEK, you generate a key in Cloud KMS, set its auto-rotation period, grant the service account for GCS (the GCS Service Agent) permissions to use the key (`roles/cloudkms.cryptoKeyEncrypterDecrypter`), and configure the bucket to use this key. CSEK requires supplying keys with every request, which is complex and does not support automatic KMS rotation."
    },
    {
        "id": 48,
        "category": "Part III: Security, Identity & Compliance",
        "question": "To comply with regulatory standards, AeroSpace Corp must encrypt all objects in a new Cloud Storage bucket using Customer-Managed Encryption Keys (CMEK). The key rotation policy must rotate the key every 90 days. How should you set this up?",
        "options": [
            "Create a key ring in Cloud KMS, generate a key, set the rotation period to 90 days, grant the Cloud Storage Service Agent the CryptoKey Encrypter/Decrypter role, and associate the key with the bucket.",
            "Write a script that rotates keys locally and uploads them via the CSEK headers with each gsutil upload.",
            "Use default Google-managed keys and check the 90-day compliance box in the bucket settings.",
            "Use Cloud HSM to store keys on-premises, and configure a Cloud VPN tunnel to pass keys to GCS during read/write operations."
        ],
        "answer": 0,
        "explanation": "To implement CMEK, you generate a key in Cloud KMS, set its auto-rotation period, grant the service account for GCS (the GCS Service Agent) permissions to use the key (`roles/cloudkms.cryptoKeyEncrypterDecrypter`), and configure the bucket to use this key. CSEK requires supplying keys with every request, which is complex and does not support automatic KMS rotation."
    },
    {
        "id": 49,
        "category": "Part III: Security, Identity & Compliance",
        "question": "To comply with regulatory standards, BioMed Labs must encrypt all objects in a new Cloud Storage bucket using Customer-Managed Encryption Keys (CMEK). The key rotation policy must rotate the key every 90 days. How should you set this up?",
        "options": [
            "Create a key ring in Cloud KMS, generate a key, set the rotation period to 90 days, grant the Cloud Storage Service Agent the CryptoKey Encrypter/Decrypter role, and associate the key with the bucket.",
            "Write a script that rotates keys locally and uploads them via the CSEK headers with each gsutil upload.",
            "Use default Google-managed keys and check the 90-day compliance box in the bucket settings.",
            "Use Cloud HSM to store keys on-premises, and configure a Cloud VPN tunnel to pass keys to GCS during read/write operations."
        ],
        "answer": 0,
        "explanation": "To implement CMEK, you generate a key in Cloud KMS, set its auto-rotation period, grant the service account for GCS (the GCS Service Agent) permissions to use the key (`roles/cloudkms.cryptoKeyEncrypterDecrypter`), and configure the bucket to use this key. CSEK requires supplying keys with every request, which is complex and does not support automatic KMS rotation."
    },
    {
        "id": 50,
        "category": "Part III: Security, Identity & Compliance",
        "question": "To comply with regulatory standards, RetailFlow must encrypt all objects in a new Cloud Storage bucket using Customer-Managed Encryption Keys (CMEK). The key rotation policy must rotate the key every 90 days. How should you set this up?",
        "options": [
            "Create a key ring in Cloud KMS, generate a key, set the rotation period to 90 days, grant the Cloud Storage Service Agent the CryptoKey Encrypter/Decrypter role, and associate the key with the bucket.",
            "Write a script that rotates keys locally and uploads them via the CSEK headers with each gsutil upload.",
            "Use default Google-managed keys and check the 90-day compliance box in the bucket settings.",
            "Use Cloud HSM to store keys on-premises, and configure a Cloud VPN tunnel to pass keys to GCS during read/write operations."
        ],
        "answer": 0,
        "explanation": "To implement CMEK, you generate a key in Cloud KMS, set its auto-rotation period, grant the service account for GCS (the GCS Service Agent) permissions to use the key (`roles/cloudkms.cryptoKeyEncrypterDecrypter`), and configure the bucket to use this key. CSEK requires supplying keys with every request, which is complex and does not support automatic KMS rotation."
    },
    {
        "id": 51,
        "category": "Part III: Security, Identity & Compliance",
        "question": "The compliance officer at Apex Analytics has requested that developers should not have access to production resources, even though they hold the Editor role at the project level. How can you restrict their access without modifying their Project Editor roles?",
        "options": [
            "Use VPC Service Controls to block developer IP addresses from accessing the production subnet.",
            "Create a Deny Policy in IAM targeting the developers' group that restricts administrative operations on resources within the production scope.",
            "Use IAM Conditions to restrict their access to weekends only.",
            "Create a custom role that duplicates the Editor role and delete the permissions manually, then assign it."
        ],
        "answer": 1,
        "explanation": "IAM Deny Policies allow organizations to define deny rules that override allow policies. Even if a user has the Editor role (which allows full access), a Deny policy will block specific permissions explicitly, enforcing security boundaries without revoking general roles."
    },
    {
        "id": 52,
        "category": "Part III: Security, Identity & Compliance",
        "question": "The compliance officer at FinSafe Group has requested that developers should not have access to production resources, even though they hold the Editor role at the project level. How can you restrict their access without modifying their Project Editor roles?",
        "options": [
            "Use VPC Service Controls to block developer IP addresses from accessing the production subnet.",
            "Create a Deny Policy in IAM targeting the developers' group that restricts administrative operations on resources within the production scope.",
            "Use IAM Conditions to restrict their access to weekends only.",
            "Create a custom role that duplicates the Editor role and delete the permissions manually, then assign it."
        ],
        "answer": 1,
        "explanation": "IAM Deny Policies allow organizations to define deny rules that override allow policies. Even if a user has the Editor role (which allows full access), a Deny policy will block specific permissions explicitly, enforcing security boundaries without revoking general roles."
    },
    {
        "id": 53,
        "category": "Part III: Security, Identity & Compliance",
        "question": "The compliance officer at Global Logistics has requested that developers should not have access to production resources, even though they hold the Editor role at the project level. How can you restrict their access without modifying their Project Editor roles?",
        "options": [
            "Use VPC Service Controls to block developer IP addresses from accessing the production subnet.",
            "Create a Deny Policy in IAM targeting the developers' group that restricts administrative operations on resources within the production scope.",
            "Use IAM Conditions to restrict their access to weekends only.",
            "Create a custom role that duplicates the Editor role and delete the permissions manually, then assign it."
        ],
        "answer": 1,
        "explanation": "IAM Deny Policies allow organizations to define deny rules that override allow policies. Even if a user has the Editor role (which allows full access), a Deny policy will block specific permissions explicitly, enforcing security boundaries without revoking general roles."
    },
    {
        "id": 54,
        "category": "Part III: Security, Identity & Compliance",
        "question": "The compliance officer at HealthScribe has requested that developers should not have access to production resources, even though they hold the Editor role at the project level. How can you restrict their access without modifying their Project Editor roles?",
        "options": [
            "Use VPC Service Controls to block developer IP addresses from accessing the production subnet.",
            "Create a Deny Policy in IAM targeting the developers' group that restricts administrative operations on resources within the production scope.",
            "Use IAM Conditions to restrict their access to weekends only.",
            "Create a custom role that duplicates the Editor role and delete the permissions manually, then assign it."
        ],
        "answer": 1,
        "explanation": "IAM Deny Policies allow organizations to define deny rules that override allow policies. Even if a user has the Editor role (which allows full access), a Deny policy will block specific permissions explicitly, enforcing security boundaries without revoking general roles."
    },
    {
        "id": 55,
        "category": "Part III: Security, Identity & Compliance",
        "question": "The compliance officer at EduLearn Ltd has requested that developers should not have access to production resources, even though they hold the Editor role at the project level. How can you restrict their access without modifying their Project Editor roles?",
        "options": [
            "Use VPC Service Controls to block developer IP addresses from accessing the production subnet.",
            "Create a Deny Policy in IAM targeting the developers' group that restricts administrative operations on resources within the production scope.",
            "Use IAM Conditions to restrict their access to weekends only.",
            "Create a custom role that duplicates the Editor role and delete the permissions manually, then assign it."
        ],
        "answer": 1,
        "explanation": "IAM Deny Policies allow organizations to define deny rules that override allow policies. Even if a user has the Editor role (which allows full access), a Deny policy will block specific permissions explicitly, enforcing security boundaries without revoking general roles."
    },
    {
        "id": 56,
        "category": "Part III: Security, Identity & Compliance",
        "question": "The compliance officer at MegaMedia Inc has requested that developers should not have access to production resources, even though they hold the Editor role at the project level. How can you restrict their access without modifying their Project Editor roles?",
        "options": [
            "Use VPC Service Controls to block developer IP addresses from accessing the production subnet.",
            "Create a Deny Policy in IAM targeting the developers' group that restricts administrative operations on resources within the production scope.",
            "Use IAM Conditions to restrict their access to weekends only.",
            "Create a custom role that duplicates the Editor role and delete the permissions manually, then assign it."
        ],
        "answer": 1,
        "explanation": "IAM Deny Policies allow organizations to define deny rules that override allow policies. Even if a user has the Editor role (which allows full access), a Deny policy will block specific permissions explicitly, enforcing security boundaries without revoking general roles."
    },
    {
        "id": 57,
        "category": "Part III: Security, Identity & Compliance",
        "question": "The compliance officer at GovTech Portal has requested that developers should not have access to production resources, even though they hold the Editor role at the project level. How can you restrict their access without modifying their Project Editor roles?",
        "options": [
            "Use VPC Service Controls to block developer IP addresses from accessing the production subnet.",
            "Create a Deny Policy in IAM targeting the developers' group that restricts administrative operations on resources within the production scope.",
            "Use IAM Conditions to restrict their access to weekends only.",
            "Create a custom role that duplicates the Editor role and delete the permissions manually, then assign it."
        ],
        "answer": 1,
        "explanation": "IAM Deny Policies allow organizations to define deny rules that override allow policies. Even if a user has the Editor role (which allows full access), a Deny policy will block specific permissions explicitly, enforcing security boundaries without revoking general roles."
    },
    {
        "id": 58,
        "category": "Part III: Security, Identity & Compliance",
        "question": "The compliance officer at GreenGrid Energy has requested that developers should not have access to production resources, even though they hold the Editor role at the project level. How can you restrict their access without modifying their Project Editor roles?",
        "options": [
            "Use VPC Service Controls to block developer IP addresses from accessing the production subnet.",
            "Create a Deny Policy in IAM targeting the developers' group that restricts administrative operations on resources within the production scope.",
            "Use IAM Conditions to restrict their access to weekends only.",
            "Create a custom role that duplicates the Editor role and delete the permissions manually, then assign it."
        ],
        "answer": 1,
        "explanation": "IAM Deny Policies allow organizations to define deny rules that override allow policies. Even if a user has the Editor role (which allows full access), a Deny policy will block specific permissions explicitly, enforcing security boundaries without revoking general roles."
    },
    {
        "id": 59,
        "category": "Part III: Security, Identity & Compliance",
        "question": "The compliance officer at AgriGrow Labs has requested that developers should not have access to production resources, even though they hold the Editor role at the project level. How can you restrict their access without modifying their Project Editor roles?",
        "options": [
            "Use VPC Service Controls to block developer IP addresses from accessing the production subnet.",
            "Create a Deny Policy in IAM targeting the developers' group that restricts administrative operations on resources within the production scope.",
            "Use IAM Conditions to restrict their access to weekends only.",
            "Create a custom role that duplicates the Editor role and delete the permissions manually, then assign it."
        ],
        "answer": 1,
        "explanation": "IAM Deny Policies allow organizations to define deny rules that override allow policies. Even if a user has the Editor role (which allows full access), a Deny policy will block specific permissions explicitly, enforcing security boundaries without revoking general roles."
    },
    {
        "id": 60,
        "category": "Part III: Security, Identity & Compliance",
        "question": "The compliance officer at SecureTrans has requested that developers should not have access to production resources, even though they hold the Editor role at the project level. How can you restrict their access without modifying their Project Editor roles?",
        "options": [
            "Use VPC Service Controls to block developer IP addresses from accessing the production subnet.",
            "Create a Deny Policy in IAM targeting the developers' group that restricts administrative operations on resources within the production scope.",
            "Use IAM Conditions to restrict their access to weekends only.",
            "Create a custom role that duplicates the Editor role and delete the permissions manually, then assign it."
        ],
        "answer": 1,
        "explanation": "IAM Deny Policies allow organizations to define deny rules that override allow policies. Even if a user has the Editor role (which allows full access), a Deny policy will block specific permissions explicitly, enforcing security boundaries without revoking general roles."
    },
    {
        "id": 61,
        "category": "Part IV: Storage & Encryption",
        "question": "At JencoMart, regulatory requirements state that financial transaction documents must be retained in Cloud Storage for 7 years and cannot be deleted or modified by anyone, including the project owners. What GCS feature matches this?",
        "options": [
            "Use Object Versioning and keep 100 historical versions.",
            "Enable a Bucket Retention Policy with the required duration and lock it.",
            "Configure an Object Lifecycle rule to transition old objects to Archive storage after 30 days.",
            "Enable Customer-Supplied Encryption Keys (CSEK) and destroy the decryption key locally."
        ],
        "answer": 1,
        "explanation": "A locked GCS Bucket Retention Policy enforces Write-Once-Read-Many (WORM) compliance. Once locked, the policy cannot be deleted or shortened, and even project owners or organization administrators cannot delete objects or the bucket itself until the retention period has expired."
    },
    {
        "id": 62,
        "category": "Part IV: Storage & Encryption",
        "question": "At Mountkirk Games, regulatory requirements state that financial transaction documents must be retained in Cloud Storage for 7 years and cannot be deleted or modified by anyone, including the project owners. What GCS feature matches this?",
        "options": [
            "Use Object Versioning and keep 100 historical versions.",
            "Enable a Bucket Retention Policy with the required duration and lock it.",
            "Configure an Object Lifecycle rule to transition old objects to Archive storage after 30 days.",
            "Enable Customer-Supplied Encryption Keys (CSEK) and destroy the decryption key locally."
        ],
        "answer": 1,
        "explanation": "A locked GCS Bucket Retention Policy enforces Write-Once-Read-Many (WORM) compliance. Once locked, the policy cannot be deleted or shortened, and even project owners or organization administrators cannot delete objects or the bucket itself until the retention period has expired."
    },
    {
        "id": 63,
        "category": "Part IV: Storage & Encryption",
        "question": "At TerramEarth, regulatory requirements state that financial transaction documents must be retained in Cloud Storage for 7 years and cannot be deleted or modified by anyone, including the project owners. What GCS feature matches this?",
        "options": [
            "Use Object Versioning and keep 100 historical versions.",
            "Enable a Bucket Retention Policy with the required duration and lock it.",
            "Configure an Object Lifecycle rule to transition old objects to Archive storage after 30 days.",
            "Enable Customer-Supplied Encryption Keys (CSEK) and destroy the decryption key locally."
        ],
        "answer": 1,
        "explanation": "A locked GCS Bucket Retention Policy enforces Write-Once-Read-Many (WORM) compliance. Once locked, the policy cannot be deleted or shortened, and even project owners or organization administrators cannot delete objects or the bucket itself until the retention period has expired."
    },
    {
        "id": 64,
        "category": "Part IV: Storage & Encryption",
        "question": "At Dress4Win, regulatory requirements state that financial transaction documents must be retained in Cloud Storage for 7 years and cannot be deleted or modified by anyone, including the project owners. What GCS feature matches this?",
        "options": [
            "Use Object Versioning and keep 100 historical versions.",
            "Enable a Bucket Retention Policy with the required duration and lock it.",
            "Configure an Object Lifecycle rule to transition old objects to Archive storage after 30 days.",
            "Enable Customer-Supplied Encryption Keys (CSEK) and destroy the decryption key locally."
        ],
        "answer": 1,
        "explanation": "A locked GCS Bucket Retention Policy enforces Write-Once-Read-Many (WORM) compliance. Once locked, the policy cannot be deleted or shortened, and even project owners or organization administrators cannot delete objects or the bucket itself until the retention period has expired."
    },
    {
        "id": 65,
        "category": "Part IV: Storage & Encryption",
        "question": "At EHR Healthcare, regulatory requirements state that financial transaction documents must be retained in Cloud Storage for 7 years and cannot be deleted or modified by anyone, including the project owners. What GCS feature matches this?",
        "options": [
            "Use Object Versioning and keep 100 historical versions.",
            "Enable a Bucket Retention Policy with the required duration and lock it.",
            "Configure an Object Lifecycle rule to transition old objects to Archive storage after 30 days.",
            "Enable Customer-Supplied Encryption Keys (CSEK) and destroy the decryption key locally."
        ],
        "answer": 1,
        "explanation": "A locked GCS Bucket Retention Policy enforces Write-Once-Read-Many (WORM) compliance. Once locked, the policy cannot be deleted or shortened, and even project owners or organization administrators cannot delete objects or the bucket itself until the retention period has expired."
    },
    {
        "id": 66,
        "category": "Part IV: Storage & Encryption",
        "question": "At VidiCorp, regulatory requirements state that financial transaction documents must be retained in Cloud Storage for 7 years and cannot be deleted or modified by anyone, including the project owners. What GCS feature matches this?",
        "options": [
            "Use Object Versioning and keep 100 historical versions.",
            "Enable a Bucket Retention Policy with the required duration and lock it.",
            "Configure an Object Lifecycle rule to transition old objects to Archive storage after 30 days.",
            "Enable Customer-Supplied Encryption Keys (CSEK) and destroy the decryption key locally."
        ],
        "answer": 1,
        "explanation": "A locked GCS Bucket Retention Policy enforces Write-Once-Read-Many (WORM) compliance. Once locked, the policy cannot be deleted or shortened, and even project owners or organization administrators cannot delete objects or the bucket itself until the retention period has expired."
    },
    {
        "id": 67,
        "category": "Part IV: Storage & Encryption",
        "question": "At Lucerne Publishing, regulatory requirements state that financial transaction documents must be retained in Cloud Storage for 7 years and cannot be deleted or modified by anyone, including the project owners. What GCS feature matches this?",
        "options": [
            "Use Object Versioning and keep 100 historical versions.",
            "Enable a Bucket Retention Policy with the required duration and lock it.",
            "Configure an Object Lifecycle rule to transition old objects to Archive storage after 30 days.",
            "Enable Customer-Supplied Encryption Keys (CSEK) and destroy the decryption key locally."
        ],
        "answer": 1,
        "explanation": "A locked GCS Bucket Retention Policy enforces Write-Once-Read-Many (WORM) compliance. Once locked, the policy cannot be deleted or shortened, and even project owners or organization administrators cannot delete objects or the bucket itself until the retention period has expired."
    },
    {
        "id": 68,
        "category": "Part IV: Storage & Encryption",
        "question": "At AeroSpace Corp, regulatory requirements state that financial transaction documents must be retained in Cloud Storage for 7 years and cannot be deleted or modified by anyone, including the project owners. What GCS feature matches this?",
        "options": [
            "Use Object Versioning and keep 100 historical versions.",
            "Enable a Bucket Retention Policy with the required duration and lock it.",
            "Configure an Object Lifecycle rule to transition old objects to Archive storage after 30 days.",
            "Enable Customer-Supplied Encryption Keys (CSEK) and destroy the decryption key locally."
        ],
        "answer": 1,
        "explanation": "A locked GCS Bucket Retention Policy enforces Write-Once-Read-Many (WORM) compliance. Once locked, the policy cannot be deleted or shortened, and even project owners or organization administrators cannot delete objects or the bucket itself until the retention period has expired."
    },
    {
        "id": 69,
        "category": "Part IV: Storage & Encryption",
        "question": "At BioMed Labs, regulatory requirements state that financial transaction documents must be retained in Cloud Storage for 7 years and cannot be deleted or modified by anyone, including the project owners. What GCS feature matches this?",
        "options": [
            "Use Object Versioning and keep 100 historical versions.",
            "Enable a Bucket Retention Policy with the required duration and lock it.",
            "Configure an Object Lifecycle rule to transition old objects to Archive storage after 30 days.",
            "Enable Customer-Supplied Encryption Keys (CSEK) and destroy the decryption key locally."
        ],
        "answer": 1,
        "explanation": "A locked GCS Bucket Retention Policy enforces Write-Once-Read-Many (WORM) compliance. Once locked, the policy cannot be deleted or shortened, and even project owners or organization administrators cannot delete objects or the bucket itself until the retention period has expired."
    },
    {
        "id": 70,
        "category": "Part IV: Storage & Encryption",
        "question": "At RetailFlow, regulatory requirements state that financial transaction documents must be retained in Cloud Storage for 7 years and cannot be deleted or modified by anyone, including the project owners. What GCS feature matches this?",
        "options": [
            "Use Object Versioning and keep 100 historical versions.",
            "Enable a Bucket Retention Policy with the required duration and lock it.",
            "Configure an Object Lifecycle rule to transition old objects to Archive storage after 30 days.",
            "Enable Customer-Supplied Encryption Keys (CSEK) and destroy the decryption key locally."
        ],
        "answer": 1,
        "explanation": "A locked GCS Bucket Retention Policy enforces Write-Once-Read-Many (WORM) compliance. Once locked, the policy cannot be deleted or shortened, and even project owners or organization administrators cannot delete objects or the bucket itself until the retention period has expired."
    },
    {
        "id": 71,
        "category": "Part IV: Storage & Encryption",
        "question": "A developer at Apex Analytics is migrating a legacy document management system to GCP. The backend requires POSIX-compliant file access and simultaneous read-write access from multiple Compute Engine instances across different zones. What is the most appropriate storage option?",
        "options": [
            "Standard Persistent Disk attached to multiple instances in read-only mode.",
            "Create a Cloud Storage bucket and mount it on all instances using Cloud Storage FUSE.",
            "Provision a Filestore instance and mount the NFS share on all Compute Engine instances.",
            "Deploy a Local SSD partition and set up block-level replication."
        ],
        "answer": 2,
        "explanation": "Filestore provides fully managed, POSIX-compliant NFS file shares. It supports simultaneous read-write access from multiple client instances (multi-attach), making it the direct fit for shared file systems. GCS FUSE is not fully POSIX-compliant, and Persistent Disks do not support concurrent read-write from multiple instances."
    },
    {
        "id": 72,
        "category": "Part IV: Storage & Encryption",
        "question": "A developer at FinSafe Group is migrating a legacy document management system to GCP. The backend requires POSIX-compliant file access and simultaneous read-write access from multiple Compute Engine instances across different zones. What is the most appropriate storage option?",
        "options": [
            "Standard Persistent Disk attached to multiple instances in read-only mode.",
            "Create a Cloud Storage bucket and mount it on all instances using Cloud Storage FUSE.",
            "Provision a Filestore instance and mount the NFS share on all Compute Engine instances.",
            "Deploy a Local SSD partition and set up block-level replication."
        ],
        "answer": 2,
        "explanation": "Filestore provides fully managed, POSIX-compliant NFS file shares. It supports simultaneous read-write access from multiple client instances (multi-attach), making it the direct fit for shared file systems. GCS FUSE is not fully POSIX-compliant, and Persistent Disks do not support concurrent read-write from multiple instances."
    },
    {
        "id": 73,
        "category": "Part IV: Storage & Encryption",
        "question": "A developer at Global Logistics is migrating a legacy document management system to GCP. The backend requires POSIX-compliant file access and simultaneous read-write access from multiple Compute Engine instances across different zones. What is the most appropriate storage option?",
        "options": [
            "Standard Persistent Disk attached to multiple instances in read-only mode.",
            "Create a Cloud Storage bucket and mount it on all instances using Cloud Storage FUSE.",
            "Provision a Filestore instance and mount the NFS share on all Compute Engine instances.",
            "Deploy a Local SSD partition and set up block-level replication."
        ],
        "answer": 2,
        "explanation": "Filestore provides fully managed, POSIX-compliant NFS file shares. It supports simultaneous read-write access from multiple client instances (multi-attach), making it the direct fit for shared file systems. GCS FUSE is not fully POSIX-compliant, and Persistent Disks do not support concurrent read-write from multiple instances."
    },
    {
        "id": 74,
        "category": "Part IV: Storage & Encryption",
        "question": "A developer at HealthScribe is migrating a legacy document management system to GCP. The backend requires POSIX-compliant file access and simultaneous read-write access from multiple Compute Engine instances across different zones. What is the most appropriate storage option?",
        "options": [
            "Standard Persistent Disk attached to multiple instances in read-only mode.",
            "Create a Cloud Storage bucket and mount it on all instances using Cloud Storage FUSE.",
            "Provision a Filestore instance and mount the NFS share on all Compute Engine instances.",
            "Deploy a Local SSD partition and set up block-level replication."
        ],
        "answer": 2,
        "explanation": "Filestore provides fully managed, POSIX-compliant NFS file shares. It supports simultaneous read-write access from multiple client instances (multi-attach), making it the direct fit for shared file systems. GCS FUSE is not fully POSIX-compliant, and Persistent Disks do not support concurrent read-write from multiple instances."
    },
    {
        "id": 75,
        "category": "Part IV: Storage & Encryption",
        "question": "A developer at EduLearn Ltd is migrating a legacy document management system to GCP. The backend requires POSIX-compliant file access and simultaneous read-write access from multiple Compute Engine instances across different zones. What is the most appropriate storage option?",
        "options": [
            "Standard Persistent Disk attached to multiple instances in read-only mode.",
            "Create a Cloud Storage bucket and mount it on all instances using Cloud Storage FUSE.",
            "Provision a Filestore instance and mount the NFS share on all Compute Engine instances.",
            "Deploy a Local SSD partition and set up block-level replication."
        ],
        "answer": 2,
        "explanation": "Filestore provides fully managed, POSIX-compliant NFS file shares. It supports simultaneous read-write access from multiple client instances (multi-attach), making it the direct fit for shared file systems. GCS FUSE is not fully POSIX-compliant, and Persistent Disks do not support concurrent read-write from multiple instances."
    },
    {
        "id": 76,
        "category": "Part IV: Storage & Encryption",
        "question": "A developer at MegaMedia Inc is migrating a legacy document management system to GCP. The backend requires POSIX-compliant file access and simultaneous read-write access from multiple Compute Engine instances across different zones. What is the most appropriate storage option?",
        "options": [
            "Standard Persistent Disk attached to multiple instances in read-only mode.",
            "Create a Cloud Storage bucket and mount it on all instances using Cloud Storage FUSE.",
            "Provision a Filestore instance and mount the NFS share on all Compute Engine instances.",
            "Deploy a Local SSD partition and set up block-level replication."
        ],
        "answer": 2,
        "explanation": "Filestore provides fully managed, POSIX-compliant NFS file shares. It supports simultaneous read-write access from multiple client instances (multi-attach), making it the direct fit for shared file systems. GCS FUSE is not fully POSIX-compliant, and Persistent Disks do not support concurrent read-write from multiple instances."
    },
    {
        "id": 77,
        "category": "Part IV: Storage & Encryption",
        "question": "A developer at GovTech Portal is migrating a legacy document management system to GCP. The backend requires POSIX-compliant file access and simultaneous read-write access from multiple Compute Engine instances across different zones. What is the most appropriate storage option?",
        "options": [
            "Standard Persistent Disk attached to multiple instances in read-only mode.",
            "Create a Cloud Storage bucket and mount it on all instances using Cloud Storage FUSE.",
            "Provision a Filestore instance and mount the NFS share on all Compute Engine instances.",
            "Deploy a Local SSD partition and set up block-level replication."
        ],
        "answer": 2,
        "explanation": "Filestore provides fully managed, POSIX-compliant NFS file shares. It supports simultaneous read-write access from multiple client instances (multi-attach), making it the direct fit for shared file systems. GCS FUSE is not fully POSIX-compliant, and Persistent Disks do not support concurrent read-write from multiple instances."
    },
    {
        "id": 78,
        "category": "Part IV: Storage & Encryption",
        "question": "A developer at GreenGrid Energy is migrating a legacy document management system to GCP. The backend requires POSIX-compliant file access and simultaneous read-write access from multiple Compute Engine instances across different zones. What is the most appropriate storage option?",
        "options": [
            "Standard Persistent Disk attached to multiple instances in read-only mode.",
            "Create a Cloud Storage bucket and mount it on all instances using Cloud Storage FUSE.",
            "Provision a Filestore instance and mount the NFS share on all Compute Engine instances.",
            "Deploy a Local SSD partition and set up block-level replication."
        ],
        "answer": 2,
        "explanation": "Filestore provides fully managed, POSIX-compliant NFS file shares. It supports simultaneous read-write access from multiple client instances (multi-attach), making it the direct fit for shared file systems. GCS FUSE is not fully POSIX-compliant, and Persistent Disks do not support concurrent read-write from multiple instances."
    },
    {
        "id": 79,
        "category": "Part IV: Storage & Encryption",
        "question": "A developer at AgriGrow Labs is migrating a legacy document management system to GCP. The backend requires POSIX-compliant file access and simultaneous read-write access from multiple Compute Engine instances across different zones. What is the most appropriate storage option?",
        "options": [
            "Standard Persistent Disk attached to multiple instances in read-only mode.",
            "Create a Cloud Storage bucket and mount it on all instances using Cloud Storage FUSE.",
            "Provision a Filestore instance and mount the NFS share on all Compute Engine instances.",
            "Deploy a Local SSD partition and set up block-level replication."
        ],
        "answer": 2,
        "explanation": "Filestore provides fully managed, POSIX-compliant NFS file shares. It supports simultaneous read-write access from multiple client instances (multi-attach), making it the direct fit for shared file systems. GCS FUSE is not fully POSIX-compliant, and Persistent Disks do not support concurrent read-write from multiple instances."
    },
    {
        "id": 80,
        "category": "Part IV: Storage & Encryption",
        "question": "A developer at SecureTrans is migrating a legacy document management system to GCP. The backend requires POSIX-compliant file access and simultaneous read-write access from multiple Compute Engine instances across different zones. What is the most appropriate storage option?",
        "options": [
            "Standard Persistent Disk attached to multiple instances in read-only mode.",
            "Create a Cloud Storage bucket and mount it on all instances using Cloud Storage FUSE.",
            "Provision a Filestore instance and mount the NFS share on all Compute Engine instances.",
            "Deploy a Local SSD partition and set up block-level replication."
        ],
        "answer": 2,
        "explanation": "Filestore provides fully managed, POSIX-compliant NFS file shares. It supports simultaneous read-write access from multiple client instances (multi-attach), making it the direct fit for shared file systems. GCS FUSE is not fully POSIX-compliant, and Persistent Disks do not support concurrent read-write from multiple instances."
    },
    {
        "id": 81,
        "category": "Part V: Compute & Virtual Machines",
        "question": "To optimize costs, JencoMart is deploying a batch compute workload on Compute Engine. The workload runs daily, is tolerant of interruptions, and can be easily resumed. Which VM configuration offers the lowest cost?",
        "options": [
            "Configure custom machine type instances with standard disks.",
            "Deploy Spot VMs with preemption handling scripts.",
            "Purchase Compute Engine Committed Use Contracts for 3 years.",
            "Deploy sole-tenant nodes with e2-micro machines."
        ],
        "answer": 1,
        "explanation": "Spot VMs are the most cost-effective compute instances (offering 60-91% discounts) for fault-tolerant batch workloads that can handle preemption. Committed Use Contracts require steady-state configurations, which might not match daily spike batch runs."
    },
    {
        "id": 82,
        "category": "Part V: Compute & Virtual Machines",
        "question": "To optimize costs, Mountkirk Games is deploying a batch compute workload on Compute Engine. The workload runs daily, is tolerant of interruptions, and can be easily resumed. Which VM configuration offers the lowest cost?",
        "options": [
            "Configure custom machine type instances with standard disks.",
            "Deploy Spot VMs with preemption handling scripts.",
            "Purchase Compute Engine Committed Use Contracts for 3 years.",
            "Deploy sole-tenant nodes with e2-micro machines."
        ],
        "answer": 1,
        "explanation": "Spot VMs are the most cost-effective compute instances (offering 60-91% discounts) for fault-tolerant batch workloads that can handle preemption. Committed Use Contracts require steady-state configurations, which might not match daily spike batch runs."
    },
    {
        "id": 83,
        "category": "Part V: Compute & Virtual Machines",
        "question": "To optimize costs, TerramEarth is deploying a batch compute workload on Compute Engine. The workload runs daily, is tolerant of interruptions, and can be easily resumed. Which VM configuration offers the lowest cost?",
        "options": [
            "Configure custom machine type instances with standard disks.",
            "Deploy Spot VMs with preemption handling scripts.",
            "Purchase Compute Engine Committed Use Contracts for 3 years.",
            "Deploy sole-tenant nodes with e2-micro machines."
        ],
        "answer": 1,
        "explanation": "Spot VMs are the most cost-effective compute instances (offering 60-91% discounts) for fault-tolerant batch workloads that can handle preemption. Committed Use Contracts require steady-state configurations, which might not match daily spike batch runs."
    },
    {
        "id": 84,
        "category": "Part V: Compute & Virtual Machines",
        "question": "To optimize costs, Dress4Win is deploying a batch compute workload on Compute Engine. The workload runs daily, is tolerant of interruptions, and can be easily resumed. Which VM configuration offers the lowest cost?",
        "options": [
            "Configure custom machine type instances with standard disks.",
            "Deploy Spot VMs with preemption handling scripts.",
            "Purchase Compute Engine Committed Use Contracts for 3 years.",
            "Deploy sole-tenant nodes with e2-micro machines."
        ],
        "answer": 1,
        "explanation": "Spot VMs are the most cost-effective compute instances (offering 60-91% discounts) for fault-tolerant batch workloads that can handle preemption. Committed Use Contracts require steady-state configurations, which might not match daily spike batch runs."
    },
    {
        "id": 85,
        "category": "Part V: Compute & Virtual Machines",
        "question": "To optimize costs, EHR Healthcare is deploying a batch compute workload on Compute Engine. The workload runs daily, is tolerant of interruptions, and can be easily resumed. Which VM configuration offers the lowest cost?",
        "options": [
            "Configure custom machine type instances with standard disks.",
            "Deploy Spot VMs with preemption handling scripts.",
            "Purchase Compute Engine Committed Use Contracts for 3 years.",
            "Deploy sole-tenant nodes with e2-micro machines."
        ],
        "answer": 1,
        "explanation": "Spot VMs are the most cost-effective compute instances (offering 60-91% discounts) for fault-tolerant batch workloads that can handle preemption. Committed Use Contracts require steady-state configurations, which might not match daily spike batch runs."
    },
    {
        "id": 86,
        "category": "Part V: Compute & Virtual Machines",
        "question": "To optimize costs, VidiCorp is deploying a batch compute workload on Compute Engine. The workload runs daily, is tolerant of interruptions, and can be easily resumed. Which VM configuration offers the lowest cost?",
        "options": [
            "Configure custom machine type instances with standard disks.",
            "Deploy Spot VMs with preemption handling scripts.",
            "Purchase Compute Engine Committed Use Contracts for 3 years.",
            "Deploy sole-tenant nodes with e2-micro machines."
        ],
        "answer": 1,
        "explanation": "Spot VMs are the most cost-effective compute instances (offering 60-91% discounts) for fault-tolerant batch workloads that can handle preemption. Committed Use Contracts require steady-state configurations, which might not match daily spike batch runs."
    },
    {
        "id": 87,
        "category": "Part V: Compute & Virtual Machines",
        "question": "To optimize costs, Lucerne Publishing is deploying a batch compute workload on Compute Engine. The workload runs daily, is tolerant of interruptions, and can be easily resumed. Which VM configuration offers the lowest cost?",
        "options": [
            "Configure custom machine type instances with standard disks.",
            "Deploy Spot VMs with preemption handling scripts.",
            "Purchase Compute Engine Committed Use Contracts for 3 years.",
            "Deploy sole-tenant nodes with e2-micro machines."
        ],
        "answer": 1,
        "explanation": "Spot VMs are the most cost-effective compute instances (offering 60-91% discounts) for fault-tolerant batch workloads that can handle preemption. Committed Use Contracts require steady-state configurations, which might not match daily spike batch runs."
    },
    {
        "id": 88,
        "category": "Part V: Compute & Virtual Machines",
        "question": "To optimize costs, AeroSpace Corp is deploying a batch compute workload on Compute Engine. The workload runs daily, is tolerant of interruptions, and can be easily resumed. Which VM configuration offers the lowest cost?",
        "options": [
            "Configure custom machine type instances with standard disks.",
            "Deploy Spot VMs with preemption handling scripts.",
            "Purchase Compute Engine Committed Use Contracts for 3 years.",
            "Deploy sole-tenant nodes with e2-micro machines."
        ],
        "answer": 1,
        "explanation": "Spot VMs are the most cost-effective compute instances (offering 60-91% discounts) for fault-tolerant batch workloads that can handle preemption. Committed Use Contracts require steady-state configurations, which might not match daily spike batch runs."
    },
    {
        "id": 89,
        "category": "Part V: Compute & Virtual Machines",
        "question": "To optimize costs, BioMed Labs is deploying a batch compute workload on Compute Engine. The workload runs daily, is tolerant of interruptions, and can be easily resumed. Which VM configuration offers the lowest cost?",
        "options": [
            "Configure custom machine type instances with standard disks.",
            "Deploy Spot VMs with preemption handling scripts.",
            "Purchase Compute Engine Committed Use Contracts for 3 years.",
            "Deploy sole-tenant nodes with e2-micro machines."
        ],
        "answer": 1,
        "explanation": "Spot VMs are the most cost-effective compute instances (offering 60-91% discounts) for fault-tolerant batch workloads that can handle preemption. Committed Use Contracts require steady-state configurations, which might not match daily spike batch runs."
    },
    {
        "id": 90,
        "category": "Part V: Compute & Virtual Machines",
        "question": "To optimize costs, RetailFlow is deploying a batch compute workload on Compute Engine. The workload runs daily, is tolerant of interruptions, and can be easily resumed. Which VM configuration offers the lowest cost?",
        "options": [
            "Configure custom machine type instances with standard disks.",
            "Deploy Spot VMs with preemption handling scripts.",
            "Purchase Compute Engine Committed Use Contracts for 3 years.",
            "Deploy sole-tenant nodes with e2-micro machines."
        ],
        "answer": 1,
        "explanation": "Spot VMs are the most cost-effective compute instances (offering 60-91% discounts) for fault-tolerant batch workloads that can handle preemption. Committed Use Contracts require steady-state configurations, which might not match daily spike batch runs."
    },
    {
        "id": 91,
        "category": "Part V: Compute & Virtual Machines",
        "question": "An administrator at Apex Analytics is configuring a Managed Instance Group (MIG) for a stateless web application. They need to ensure instances are automatically recreated if the web server process inside crashes, even if the VM remains active. How should they configure this?",
        "options": [
            "Set up an autoscaling metric based on HTTP Load Balancer throughput.",
            "Configure an HTTP health check, attach it to the MIG, and set the autohealing policy.",
            "Use Stackdriver logs to trigger a Pub/Sub alert that executes a cloud function to reset the VM.",
            "Deploy the instances in a multi-zone layout with standard persistent disks."
        ],
        "answer": 1,
        "explanation": "An autohealing policy uses health checks to monitor application-level health inside instances. If the health check fails, the MIG controller automatically deletes and recreates the instance. CPU/traffic scaling is for capacity sizing, not health remediation."
    },
    {
        "id": 92,
        "category": "Part V: Compute & Virtual Machines",
        "question": "An administrator at FinSafe Group is configuring a Managed Instance Group (MIG) for a stateless web application. They need to ensure instances are automatically recreated if the web server process inside crashes, even if the VM remains active. How should they configure this?",
        "options": [
            "Set up an autoscaling metric based on HTTP Load Balancer throughput.",
            "Configure an HTTP health check, attach it to the MIG, and set the autohealing policy.",
            "Use Stackdriver logs to trigger a Pub/Sub alert that executes a cloud function to reset the VM.",
            "Deploy the instances in a multi-zone layout with standard persistent disks."
        ],
        "answer": 1,
        "explanation": "An autohealing policy uses health checks to monitor application-level health inside instances. If the health check fails, the MIG controller automatically deletes and recreates the instance. CPU/traffic scaling is for capacity sizing, not health remediation."
    },
    {
        "id": 93,
        "category": "Part V: Compute & Virtual Machines",
        "question": "An administrator at Global Logistics is configuring a Managed Instance Group (MIG) for a stateless web application. They need to ensure instances are automatically recreated if the web server process inside crashes, even if the VM remains active. How should they configure this?",
        "options": [
            "Set up an autoscaling metric based on HTTP Load Balancer throughput.",
            "Configure an HTTP health check, attach it to the MIG, and set the autohealing policy.",
            "Use Stackdriver logs to trigger a Pub/Sub alert that executes a cloud function to reset the VM.",
            "Deploy the instances in a multi-zone layout with standard persistent disks."
        ],
        "answer": 1,
        "explanation": "An autohealing policy uses health checks to monitor application-level health inside instances. If the health check fails, the MIG controller automatically deletes and recreates the instance. CPU/traffic scaling is for capacity sizing, not health remediation."
    },
    {
        "id": 94,
        "category": "Part V: Compute & Virtual Machines",
        "question": "An administrator at HealthScribe is configuring a Managed Instance Group (MIG) for a stateless web application. They need to ensure instances are automatically recreated if the web server process inside crashes, even if the VM remains active. How should they configure this?",
        "options": [
            "Set up an autoscaling metric based on HTTP Load Balancer throughput.",
            "Configure an HTTP health check, attach it to the MIG, and set the autohealing policy.",
            "Use Stackdriver logs to trigger a Pub/Sub alert that executes a cloud function to reset the VM.",
            "Deploy the instances in a multi-zone layout with standard persistent disks."
        ],
        "answer": 1,
        "explanation": "An autohealing policy uses health checks to monitor application-level health inside instances. If the health check fails, the MIG controller automatically deletes and recreates the instance. CPU/traffic scaling is for capacity sizing, not health remediation."
    },
    {
        "id": 95,
        "category": "Part V: Compute & Virtual Machines",
        "question": "An administrator at EduLearn Ltd is configuring a Managed Instance Group (MIG) for a stateless web application. They need to ensure instances are automatically recreated if the web server process inside crashes, even if the VM remains active. How should they configure this?",
        "options": [
            "Set up an autoscaling metric based on HTTP Load Balancer throughput.",
            "Configure an HTTP health check, attach it to the MIG, and set the autohealing policy.",
            "Use Stackdriver logs to trigger a Pub/Sub alert that executes a cloud function to reset the VM.",
            "Deploy the instances in a multi-zone layout with standard persistent disks."
        ],
        "answer": 1,
        "explanation": "An autohealing policy uses health checks to monitor application-level health inside instances. If the health check fails, the MIG controller automatically deletes and recreates the instance. CPU/traffic scaling is for capacity sizing, not health remediation."
    },
    {
        "id": 96,
        "category": "Part V: Compute & Virtual Machines",
        "question": "An administrator at MegaMedia Inc is configuring a Managed Instance Group (MIG) for a stateless web application. They need to ensure instances are automatically recreated if the web server process inside crashes, even if the VM remains active. How should they configure this?",
        "options": [
            "Set up an autoscaling metric based on HTTP Load Balancer throughput.",
            "Configure an HTTP health check, attach it to the MIG, and set the autohealing policy.",
            "Use Stackdriver logs to trigger a Pub/Sub alert that executes a cloud function to reset the VM.",
            "Deploy the instances in a multi-zone layout with standard persistent disks."
        ],
        "answer": 1,
        "explanation": "An autohealing policy uses health checks to monitor application-level health inside instances. If the health check fails, the MIG controller automatically deletes and recreates the instance. CPU/traffic scaling is for capacity sizing, not health remediation."
    },
    {
        "id": 97,
        "category": "Part V: Compute & Virtual Machines",
        "question": "An administrator at GovTech Portal is configuring a Managed Instance Group (MIG) for a stateless web application. They need to ensure instances are automatically recreated if the web server process inside crashes, even if the VM remains active. How should they configure this?",
        "options": [
            "Set up an autoscaling metric based on HTTP Load Balancer throughput.",
            "Configure an HTTP health check, attach it to the MIG, and set the autohealing policy.",
            "Use Stackdriver logs to trigger a Pub/Sub alert that executes a cloud function to reset the VM.",
            "Deploy the instances in a multi-zone layout with standard persistent disks."
        ],
        "answer": 1,
        "explanation": "An autohealing policy uses health checks to monitor application-level health inside instances. If the health check fails, the MIG controller automatically deletes and recreates the instance. CPU/traffic scaling is for capacity sizing, not health remediation."
    },
    {
        "id": 98,
        "category": "Part V: Compute & Virtual Machines",
        "question": "An administrator at GreenGrid Energy is configuring a Managed Instance Group (MIG) for a stateless web application. They need to ensure instances are automatically recreated if the web server process inside crashes, even if the VM remains active. How should they configure this?",
        "options": [
            "Set up an autoscaling metric based on HTTP Load Balancer throughput.",
            "Configure an HTTP health check, attach it to the MIG, and set the autohealing policy.",
            "Use Stackdriver logs to trigger a Pub/Sub alert that executes a cloud function to reset the VM.",
            "Deploy the instances in a multi-zone layout with standard persistent disks."
        ],
        "answer": 1,
        "explanation": "An autohealing policy uses health checks to monitor application-level health inside instances. If the health check fails, the MIG controller automatically deletes and recreates the instance. CPU/traffic scaling is for capacity sizing, not health remediation."
    },
    {
        "id": 99,
        "category": "Part V: Compute & Virtual Machines",
        "question": "An administrator at AgriGrow Labs is configuring a Managed Instance Group (MIG) for a stateless web application. They need to ensure instances are automatically recreated if the web server process inside crashes, even if the VM remains active. How should they configure this?",
        "options": [
            "Set up an autoscaling metric based on HTTP Load Balancer throughput.",
            "Configure an HTTP health check, attach it to the MIG, and set the autohealing policy.",
            "Use Stackdriver logs to trigger a Pub/Sub alert that executes a cloud function to reset the VM.",
            "Deploy the instances in a multi-zone layout with standard persistent disks."
        ],
        "answer": 1,
        "explanation": "An autohealing policy uses health checks to monitor application-level health inside instances. If the health check fails, the MIG controller automatically deletes and recreates the instance. CPU/traffic scaling is for capacity sizing, not health remediation."
    },
    {
        "id": 100,
        "category": "Part V: Compute & Virtual Machines",
        "question": "An administrator at SecureTrans is configuring a Managed Instance Group (MIG) for a stateless web application. They need to ensure instances are automatically recreated if the web server process inside crashes, even if the VM remains active. How should they configure this?",
        "options": [
            "Set up an autoscaling metric based on HTTP Load Balancer throughput.",
            "Configure an HTTP health check, attach it to the MIG, and set the autohealing policy.",
            "Use Stackdriver logs to trigger a Pub/Sub alert that executes a cloud function to reset the VM.",
            "Deploy the instances in a multi-zone layout with standard persistent disks."
        ],
        "answer": 1,
        "explanation": "An autohealing policy uses health checks to monitor application-level health inside instances. If the health check fails, the MIG controller automatically deletes and recreates the instance. CPU/traffic scaling is for capacity sizing, not health remediation."
    },
    {
        "id": 101,
        "category": "Part VI: Managed Compute & Serverless",
        "question": "Developers at JencoMart are building a microservices web application. The application will experience sudden spikes in traffic but will scale down to zero requests at night. They want to package the app in Docker containers and pay only during request processing. What is the recommended service?",
        "options": [
            "App Engine Flexible Environment",
            "Cloud Run",
            "GKE Standard Cluster",
            "Compute Engine VMs with Docker installed"
        ],
        "answer": 1,
        "explanation": "Cloud Run is a fully managed serverless platform that runs containers and supports scaling to zero. You only pay for CPU and memory consumed during active request processing. App Engine Flexible does not scale to zero, and GKE requires node pool management."
    },
    {
        "id": 102,
        "category": "Part VI: Managed Compute & Serverless",
        "question": "Developers at Mountkirk Games are building a microservices web application. The application will experience sudden spikes in traffic but will scale down to zero requests at night. They want to package the app in Docker containers and pay only during request processing. What is the recommended service?",
        "options": [
            "App Engine Flexible Environment",
            "Cloud Run",
            "GKE Standard Cluster",
            "Compute Engine VMs with Docker installed"
        ],
        "answer": 1,
        "explanation": "Cloud Run is a fully managed serverless platform that runs containers and supports scaling to zero. You only pay for CPU and memory consumed during active request processing. App Engine Flexible does not scale to zero, and GKE requires node pool management."
    },
    {
        "id": 103,
        "category": "Part VI: Managed Compute & Serverless",
        "question": "Developers at TerramEarth are building a microservices web application. The application will experience sudden spikes in traffic but will scale down to zero requests at night. They want to package the app in Docker containers and pay only during request processing. What is the recommended service?",
        "options": [
            "App Engine Flexible Environment",
            "Cloud Run",
            "GKE Standard Cluster",
            "Compute Engine VMs with Docker installed"
        ],
        "answer": 1,
        "explanation": "Cloud Run is a fully managed serverless platform that runs containers and supports scaling to zero. You only pay for CPU and memory consumed during active request processing. App Engine Flexible does not scale to zero, and GKE requires node pool management."
    },
    {
        "id": 104,
        "category": "Part VI: Managed Compute & Serverless",
        "question": "Developers at Dress4Win are building a microservices web application. The application will experience sudden spikes in traffic but will scale down to zero requests at night. They want to package the app in Docker containers and pay only during request processing. What is the recommended service?",
        "options": [
            "App Engine Flexible Environment",
            "Cloud Run",
            "GKE Standard Cluster",
            "Compute Engine VMs with Docker installed"
        ],
        "answer": 1,
        "explanation": "Cloud Run is a fully managed serverless platform that runs containers and supports scaling to zero. You only pay for CPU and memory consumed during active request processing. App Engine Flexible does not scale to zero, and GKE requires node pool management."
    },
    {
        "id": 105,
        "category": "Part VI: Managed Compute & Serverless",
        "question": "Developers at EHR Healthcare are building a microservices web application. The application will experience sudden spikes in traffic but will scale down to zero requests at night. They want to package the app in Docker containers and pay only during request processing. What is the recommended service?",
        "options": [
            "App Engine Flexible Environment",
            "Cloud Run",
            "GKE Standard Cluster",
            "Compute Engine VMs with Docker installed"
        ],
        "answer": 1,
        "explanation": "Cloud Run is a fully managed serverless platform that runs containers and supports scaling to zero. You only pay for CPU and memory consumed during active request processing. App Engine Flexible does not scale to zero, and GKE requires node pool management."
    },
    {
        "id": 106,
        "category": "Part VI: Managed Compute & Serverless",
        "question": "Developers at VidiCorp are building a microservices web application. The application will experience sudden spikes in traffic but will scale down to zero requests at night. They want to package the app in Docker containers and pay only during request processing. What is the recommended service?",
        "options": [
            "App Engine Flexible Environment",
            "Cloud Run",
            "GKE Standard Cluster",
            "Compute Engine VMs with Docker installed"
        ],
        "answer": 1,
        "explanation": "Cloud Run is a fully managed serverless platform that runs containers and supports scaling to zero. You only pay for CPU and memory consumed during active request processing. App Engine Flexible does not scale to zero, and GKE requires node pool management."
    },
    {
        "id": 107,
        "category": "Part VI: Managed Compute & Serverless",
        "question": "Developers at Lucerne Publishing are building a microservices web application. The application will experience sudden spikes in traffic but will scale down to zero requests at night. They want to package the app in Docker containers and pay only during request processing. What is the recommended service?",
        "options": [
            "App Engine Flexible Environment",
            "Cloud Run",
            "GKE Standard Cluster",
            "Compute Engine VMs with Docker installed"
        ],
        "answer": 1,
        "explanation": "Cloud Run is a fully managed serverless platform that runs containers and supports scaling to zero. You only pay for CPU and memory consumed during active request processing. App Engine Flexible does not scale to zero, and GKE requires node pool management."
    },
    {
        "id": 108,
        "category": "Part VI: Managed Compute & Serverless",
        "question": "Developers at AeroSpace Corp are building a microservices web application. The application will experience sudden spikes in traffic but will scale down to zero requests at night. They want to package the app in Docker containers and pay only during request processing. What is the recommended service?",
        "options": [
            "App Engine Flexible Environment",
            "Cloud Run",
            "GKE Standard Cluster",
            "Compute Engine VMs with Docker installed"
        ],
        "answer": 1,
        "explanation": "Cloud Run is a fully managed serverless platform that runs containers and supports scaling to zero. You only pay for CPU and memory consumed during active request processing. App Engine Flexible does not scale to zero, and GKE requires node pool management."
    },
    {
        "id": 109,
        "category": "Part VI: Managed Compute & Serverless",
        "question": "Developers at BioMed Labs are building a microservices web application. The application will experience sudden spikes in traffic but will scale down to zero requests at night. They want to package the app in Docker containers and pay only during request processing. What is the recommended service?",
        "options": [
            "App Engine Flexible Environment",
            "Cloud Run",
            "GKE Standard Cluster",
            "Compute Engine VMs with Docker installed"
        ],
        "answer": 1,
        "explanation": "Cloud Run is a fully managed serverless platform that runs containers and supports scaling to zero. You only pay for CPU and memory consumed during active request processing. App Engine Flexible does not scale to zero, and GKE requires node pool management."
    },
    {
        "id": 110,
        "category": "Part VI: Managed Compute & Serverless",
        "question": "Developers at RetailFlow are building a microservices web application. The application will experience sudden spikes in traffic but will scale down to zero requests at night. They want to package the app in Docker containers and pay only during request processing. What is the recommended service?",
        "options": [
            "App Engine Flexible Environment",
            "Cloud Run",
            "GKE Standard Cluster",
            "Compute Engine VMs with Docker installed"
        ],
        "answer": 1,
        "explanation": "Cloud Run is a fully managed serverless platform that runs containers and supports scaling to zero. You only pay for CPU and memory consumed during active request processing. App Engine Flexible does not scale to zero, and GKE requires node pool management."
    },
    {
        "id": 111,
        "category": "Part VI: Managed Compute & Serverless",
        "question": "A legacy enterprise backend system at Apex Analytics needs to be migrated to Google Cloud. The system requires custom native OS libraries, takes 5 minutes to bootstrap, and runs continuously. Which App Engine environment is appropriate?",
        "options": [
            "App Engine Standard Environment",
            "App Engine Flexible Environment",
            "App Engine serverless Cloud Functions",
            "Cloud Run in scaling mode"
        ],
        "answer": 1,
        "explanation": "App Engine Flexible Environment is designed for stateful or legacy applications that require custom OS libraries, Docker containers, and run continuously on virtual machines. App Engine Standard has sandbox restrictions and requires rapid startup."
    },
    {
        "id": 112,
        "category": "Part VI: Managed Compute & Serverless",
        "question": "A legacy enterprise backend system at FinSafe Group needs to be migrated to Google Cloud. The system requires custom native OS libraries, takes 5 minutes to bootstrap, and runs continuously. Which App Engine environment is appropriate?",
        "options": [
            "App Engine Standard Environment",
            "App Engine Flexible Environment",
            "App Engine serverless Cloud Functions",
            "Cloud Run in scaling mode"
        ],
        "answer": 1,
        "explanation": "App Engine Flexible Environment is designed for stateful or legacy applications that require custom OS libraries, Docker containers, and run continuously on virtual machines. App Engine Standard has sandbox restrictions and requires rapid startup."
    },
    {
        "id": 113,
        "category": "Part VI: Managed Compute & Serverless",
        "question": "A legacy enterprise backend system at Global Logistics needs to be migrated to Google Cloud. The system requires custom native OS libraries, takes 5 minutes to bootstrap, and runs continuously. Which App Engine environment is appropriate?",
        "options": [
            "App Engine Standard Environment",
            "App Engine Flexible Environment",
            "App Engine serverless Cloud Functions",
            "Cloud Run in scaling mode"
        ],
        "answer": 1,
        "explanation": "App Engine Flexible Environment is designed for stateful or legacy applications that require custom OS libraries, Docker containers, and run continuously on virtual machines. App Engine Standard has sandbox restrictions and requires rapid startup."
    },
    {
        "id": 114,
        "category": "Part VI: Managed Compute & Serverless",
        "question": "A legacy enterprise backend system at HealthScribe needs to be migrated to Google Cloud. The system requires custom native OS libraries, takes 5 minutes to bootstrap, and runs continuously. Which App Engine environment is appropriate?",
        "options": [
            "App Engine Standard Environment",
            "App Engine Flexible Environment",
            "App Engine serverless Cloud Functions",
            "Cloud Run in scaling mode"
        ],
        "answer": 1,
        "explanation": "App Engine Flexible Environment is designed for stateful or legacy applications that require custom OS libraries, Docker containers, and run continuously on virtual machines. App Engine Standard has sandbox restrictions and requires rapid startup."
    },
    {
        "id": 115,
        "category": "Part VI: Managed Compute & Serverless",
        "question": "A legacy enterprise backend system at EduLearn Ltd needs to be migrated to Google Cloud. The system requires custom native OS libraries, takes 5 minutes to bootstrap, and runs continuously. Which App Engine environment is appropriate?",
        "options": [
            "App Engine Standard Environment",
            "App Engine Flexible Environment",
            "App Engine serverless Cloud Functions",
            "Cloud Run in scaling mode"
        ],
        "answer": 1,
        "explanation": "App Engine Flexible Environment is designed for stateful or legacy applications that require custom OS libraries, Docker containers, and run continuously on virtual machines. App Engine Standard has sandbox restrictions and requires rapid startup."
    },
    {
        "id": 116,
        "category": "Part VI: Managed Compute & Serverless",
        "question": "A legacy enterprise backend system at MegaMedia Inc needs to be migrated to Google Cloud. The system requires custom native OS libraries, takes 5 minutes to bootstrap, and runs continuously. Which App Engine environment is appropriate?",
        "options": [
            "App Engine Standard Environment",
            "App Engine Flexible Environment",
            "App Engine serverless Cloud Functions",
            "Cloud Run in scaling mode"
        ],
        "answer": 1,
        "explanation": "App Engine Flexible Environment is designed for stateful or legacy applications that require custom OS libraries, Docker containers, and run continuously on virtual machines. App Engine Standard has sandbox restrictions and requires rapid startup."
    },
    {
        "id": 117,
        "category": "Part VI: Managed Compute & Serverless",
        "question": "A legacy enterprise backend system at GovTech Portal needs to be migrated to Google Cloud. The system requires custom native OS libraries, takes 5 minutes to bootstrap, and runs continuously. Which App Engine environment is appropriate?",
        "options": [
            "App Engine Standard Environment",
            "App Engine Flexible Environment",
            "App Engine serverless Cloud Functions",
            "Cloud Run in scaling mode"
        ],
        "answer": 1,
        "explanation": "App Engine Flexible Environment is designed for stateful or legacy applications that require custom OS libraries, Docker containers, and run continuously on virtual machines. App Engine Standard has sandbox restrictions and requires rapid startup."
    },
    {
        "id": 118,
        "category": "Part VI: Managed Compute & Serverless",
        "question": "A legacy enterprise backend system at GreenGrid Energy needs to be migrated to Google Cloud. The system requires custom native OS libraries, takes 5 minutes to bootstrap, and runs continuously. Which App Engine environment is appropriate?",
        "options": [
            "App Engine Standard Environment",
            "App Engine Flexible Environment",
            "App Engine serverless Cloud Functions",
            "Cloud Run in scaling mode"
        ],
        "answer": 1,
        "explanation": "App Engine Flexible Environment is designed for stateful or legacy applications that require custom OS libraries, Docker containers, and run continuously on virtual machines. App Engine Standard has sandbox restrictions and requires rapid startup."
    },
    {
        "id": 119,
        "category": "Part VI: Managed Compute & Serverless",
        "question": "A legacy enterprise backend system at AgriGrow Labs needs to be migrated to Google Cloud. The system requires custom native OS libraries, takes 5 minutes to bootstrap, and runs continuously. Which App Engine environment is appropriate?",
        "options": [
            "App Engine Standard Environment",
            "App Engine Flexible Environment",
            "App Engine serverless Cloud Functions",
            "Cloud Run in scaling mode"
        ],
        "answer": 1,
        "explanation": "App Engine Flexible Environment is designed for stateful or legacy applications that require custom OS libraries, Docker containers, and run continuously on virtual machines. App Engine Standard has sandbox restrictions and requires rapid startup."
    },
    {
        "id": 120,
        "category": "Part VI: Managed Compute & Serverless",
        "question": "A legacy enterprise backend system at SecureTrans needs to be migrated to Google Cloud. The system requires custom native OS libraries, takes 5 minutes to bootstrap, and runs continuously. Which App Engine environment is appropriate?",
        "options": [
            "App Engine Standard Environment",
            "App Engine Flexible Environment",
            "App Engine serverless Cloud Functions",
            "Cloud Run in scaling mode"
        ],
        "answer": 1,
        "explanation": "App Engine Flexible Environment is designed for stateful or legacy applications that require custom OS libraries, Docker containers, and run continuously on virtual machines. App Engine Standard has sandbox restrictions and requires rapid startup."
    },
    {
        "id": 121,
        "category": "Part VII: Google Kubernetes Engine",
        "question": "An administrator at JencoMart needs to deploy a Kubernetes-based microservices application. The company wants to minimize the operational overhead of managing nodes, patching operating systems, and scaling virtual machines. Which GKE configuration should they choose?",
        "options": [
            "GKE Standard Cluster with Cluster Autoscaler enabled.",
            "GKE Autopilot Cluster.",
            "GKE multi-cluster setup managed via Anthos bare-metal on-prem.",
            "Compute Engine instances running a kubeadm-configured cluster."
        ],
        "answer": 1,
        "explanation": "GKE Autopilot is a fully managed GKE cluster configuration. Google manages the node infrastructure, scaling, patching, and security configurations. The customer only pays for the CPU, memory, and storage requested by active pods, reducing operational overhead."
    },
    {
        "id": 122,
        "category": "Part VII: Google Kubernetes Engine",
        "question": "An administrator at Mountkirk Games needs to deploy a Kubernetes-based microservices application. The company wants to minimize the operational overhead of managing nodes, patching operating systems, and scaling virtual machines. Which GKE configuration should they choose?",
        "options": [
            "GKE Standard Cluster with Cluster Autoscaler enabled.",
            "GKE Autopilot Cluster.",
            "GKE multi-cluster setup managed via Anthos bare-metal on-prem.",
            "Compute Engine instances running a kubeadm-configured cluster."
        ],
        "answer": 1,
        "explanation": "GKE Autopilot is a fully managed GKE cluster configuration. Google manages the node infrastructure, scaling, patching, and security configurations. The customer only pays for the CPU, memory, and storage requested by active pods, reducing operational overhead."
    },
    {
        "id": 123,
        "category": "Part VII: Google Kubernetes Engine",
        "question": "An administrator at TerramEarth needs to deploy a Kubernetes-based microservices application. The company wants to minimize the operational overhead of managing nodes, patching operating systems, and scaling virtual machines. Which GKE configuration should they choose?",
        "options": [
            "GKE Standard Cluster with Cluster Autoscaler enabled.",
            "GKE Autopilot Cluster.",
            "GKE multi-cluster setup managed via Anthos bare-metal on-prem.",
            "Compute Engine instances running a kubeadm-configured cluster."
        ],
        "answer": 1,
        "explanation": "GKE Autopilot is a fully managed GKE cluster configuration. Google manages the node infrastructure, scaling, patching, and security configurations. The customer only pays for the CPU, memory, and storage requested by active pods, reducing operational overhead."
    },
    {
        "id": 124,
        "category": "Part VII: Google Kubernetes Engine",
        "question": "An administrator at Dress4Win needs to deploy a Kubernetes-based microservices application. The company wants to minimize the operational overhead of managing nodes, patching operating systems, and scaling virtual machines. Which GKE configuration should they choose?",
        "options": [
            "GKE Standard Cluster with Cluster Autoscaler enabled.",
            "GKE Autopilot Cluster.",
            "GKE multi-cluster setup managed via Anthos bare-metal on-prem.",
            "Compute Engine instances running a kubeadm-configured cluster."
        ],
        "answer": 1,
        "explanation": "GKE Autopilot is a fully managed GKE cluster configuration. Google manages the node infrastructure, scaling, patching, and security configurations. The customer only pays for the CPU, memory, and storage requested by active pods, reducing operational overhead."
    },
    {
        "id": 125,
        "category": "Part VII: Google Kubernetes Engine",
        "question": "An administrator at EHR Healthcare needs to deploy a Kubernetes-based microservices application. The company wants to minimize the operational overhead of managing nodes, patching operating systems, and scaling virtual machines. Which GKE configuration should they choose?",
        "options": [
            "GKE Standard Cluster with Cluster Autoscaler enabled.",
            "GKE Autopilot Cluster.",
            "GKE multi-cluster setup managed via Anthos bare-metal on-prem.",
            "Compute Engine instances running a kubeadm-configured cluster."
        ],
        "answer": 1,
        "explanation": "GKE Autopilot is a fully managed GKE cluster configuration. Google manages the node infrastructure, scaling, patching, and security configurations. The customer only pays for the CPU, memory, and storage requested by active pods, reducing operational overhead."
    },
    {
        "id": 126,
        "category": "Part VII: Google Kubernetes Engine",
        "question": "An administrator at VidiCorp needs to deploy a Kubernetes-based microservices application. The company wants to minimize the operational overhead of managing nodes, patching operating systems, and scaling virtual machines. Which GKE configuration should they choose?",
        "options": [
            "GKE Standard Cluster with Cluster Autoscaler enabled.",
            "GKE Autopilot Cluster.",
            "GKE multi-cluster setup managed via Anthos bare-metal on-prem.",
            "Compute Engine instances running a kubeadm-configured cluster."
        ],
        "answer": 1,
        "explanation": "GKE Autopilot is a fully managed GKE cluster configuration. Google manages the node infrastructure, scaling, patching, and security configurations. The customer only pays for the CPU, memory, and storage requested by active pods, reducing operational overhead."
    },
    {
        "id": 127,
        "category": "Part VII: Google Kubernetes Engine",
        "question": "An administrator at Lucerne Publishing needs to deploy a Kubernetes-based microservices application. The company wants to minimize the operational overhead of managing nodes, patching operating systems, and scaling virtual machines. Which GKE configuration should they choose?",
        "options": [
            "GKE Standard Cluster with Cluster Autoscaler enabled.",
            "GKE Autopilot Cluster.",
            "GKE multi-cluster setup managed via Anthos bare-metal on-prem.",
            "Compute Engine instances running a kubeadm-configured cluster."
        ],
        "answer": 1,
        "explanation": "GKE Autopilot is a fully managed GKE cluster configuration. Google manages the node infrastructure, scaling, patching, and security configurations. The customer only pays for the CPU, memory, and storage requested by active pods, reducing operational overhead."
    },
    {
        "id": 128,
        "category": "Part VII: Google Kubernetes Engine",
        "question": "An administrator at AeroSpace Corp needs to deploy a Kubernetes-based microservices application. The company wants to minimize the operational overhead of managing nodes, patching operating systems, and scaling virtual machines. Which GKE configuration should they choose?",
        "options": [
            "GKE Standard Cluster with Cluster Autoscaler enabled.",
            "GKE Autopilot Cluster.",
            "GKE multi-cluster setup managed via Anthos bare-metal on-prem.",
            "Compute Engine instances running a kubeadm-configured cluster."
        ],
        "answer": 1,
        "explanation": "GKE Autopilot is a fully managed GKE cluster configuration. Google manages the node infrastructure, scaling, patching, and security configurations. The customer only pays for the CPU, memory, and storage requested by active pods, reducing operational overhead."
    },
    {
        "id": 129,
        "category": "Part VII: Google Kubernetes Engine",
        "question": "An administrator at BioMed Labs needs to deploy a Kubernetes-based microservices application. The company wants to minimize the operational overhead of managing nodes, patching operating systems, and scaling virtual machines. Which GKE configuration should they choose?",
        "options": [
            "GKE Standard Cluster with Cluster Autoscaler enabled.",
            "GKE Autopilot Cluster.",
            "GKE multi-cluster setup managed via Anthos bare-metal on-prem.",
            "Compute Engine instances running a kubeadm-configured cluster."
        ],
        "answer": 1,
        "explanation": "GKE Autopilot is a fully managed GKE cluster configuration. Google manages the node infrastructure, scaling, patching, and security configurations. The customer only pays for the CPU, memory, and storage requested by active pods, reducing operational overhead."
    },
    {
        "id": 130,
        "category": "Part VII: Google Kubernetes Engine",
        "question": "An administrator at RetailFlow needs to deploy a Kubernetes-based microservices application. The company wants to minimize the operational overhead of managing nodes, patching operating systems, and scaling virtual machines. Which GKE configuration should they choose?",
        "options": [
            "GKE Standard Cluster with Cluster Autoscaler enabled.",
            "GKE Autopilot Cluster.",
            "GKE multi-cluster setup managed via Anthos bare-metal on-prem.",
            "Compute Engine instances running a kubeadm-configured cluster."
        ],
        "answer": 1,
        "explanation": "GKE Autopilot is a fully managed GKE cluster configuration. Google manages the node infrastructure, scaling, patching, and security configurations. The customer only pays for the CPU, memory, and storage requested by active pods, reducing operational overhead."
    },
    {
        "id": 131,
        "category": "Part VII: Google Kubernetes Engine",
        "question": "A DevOps engineer at Apex Analytics has rolled out a new deployment version in GKE. They notice that the new pods are throwing crash loop back-off errors. They need to roll back the cluster to the previous working deployment immediately. What is the correct command?",
        "options": [
            "kubectl delete deployment/<deployment-name>",
            "kubectl rollout undo deployment/<deployment-name>",
            "gcloud container clusters update --rollback",
            "kubectl scale deployment/<deployment-name> --replicas=0"
        ],
        "answer": 1,
        "explanation": "`kubectl rollout undo` is the standard Kubernetes CLI command to roll back a deployment to its previous stable revision, restoring service immediately."
    },
    {
        "id": 132,
        "category": "Part VII: Google Kubernetes Engine",
        "question": "A DevOps engineer at FinSafe Group has rolled out a new deployment version in GKE. They notice that the new pods are throwing crash loop back-off errors. They need to roll back the cluster to the previous working deployment immediately. What is the correct command?",
        "options": [
            "kubectl delete deployment/<deployment-name>",
            "kubectl rollout undo deployment/<deployment-name>",
            "gcloud container clusters update --rollback",
            "kubectl scale deployment/<deployment-name> --replicas=0"
        ],
        "answer": 1,
        "explanation": "`kubectl rollout undo` is the standard Kubernetes CLI command to roll back a deployment to its previous stable revision, restoring service immediately."
    },
    {
        "id": 133,
        "category": "Part VII: Google Kubernetes Engine",
        "question": "A DevOps engineer at Global Logistics has rolled out a new deployment version in GKE. They notice that the new pods are throwing crash loop back-off errors. They need to roll back the cluster to the previous working deployment immediately. What is the correct command?",
        "options": [
            "kubectl delete deployment/<deployment-name>",
            "kubectl rollout undo deployment/<deployment-name>",
            "gcloud container clusters update --rollback",
            "kubectl scale deployment/<deployment-name> --replicas=0"
        ],
        "answer": 1,
        "explanation": "`kubectl rollout undo` is the standard Kubernetes CLI command to roll back a deployment to its previous stable revision, restoring service immediately."
    },
    {
        "id": 134,
        "category": "Part VII: Google Kubernetes Engine",
        "question": "A DevOps engineer at HealthScribe has rolled out a new deployment version in GKE. They notice that the new pods are throwing crash loop back-off errors. They need to roll back the cluster to the previous working deployment immediately. What is the correct command?",
        "options": [
            "kubectl delete deployment/<deployment-name>",
            "kubectl rollout undo deployment/<deployment-name>",
            "gcloud container clusters update --rollback",
            "kubectl scale deployment/<deployment-name> --replicas=0"
        ],
        "answer": 1,
        "explanation": "`kubectl rollout undo` is the standard Kubernetes CLI command to roll back a deployment to its previous stable revision, restoring service immediately."
    },
    {
        "id": 135,
        "category": "Part VII: Google Kubernetes Engine",
        "question": "A DevOps engineer at EduLearn Ltd has rolled out a new deployment version in GKE. They notice that the new pods are throwing crash loop back-off errors. They need to roll back the cluster to the previous working deployment immediately. What is the correct command?",
        "options": [
            "kubectl delete deployment/<deployment-name>",
            "kubectl rollout undo deployment/<deployment-name>",
            "gcloud container clusters update --rollback",
            "kubectl scale deployment/<deployment-name> --replicas=0"
        ],
        "answer": 1,
        "explanation": "`kubectl rollout undo` is the standard Kubernetes CLI command to roll back a deployment to its previous stable revision, restoring service immediately."
    },
    {
        "id": 136,
        "category": "Part VII: Google Kubernetes Engine",
        "question": "A DevOps engineer at MegaMedia Inc has rolled out a new deployment version in GKE. They notice that the new pods are throwing crash loop back-off errors. They need to roll back the cluster to the previous working deployment immediately. What is the correct command?",
        "options": [
            "kubectl delete deployment/<deployment-name>",
            "kubectl rollout undo deployment/<deployment-name>",
            "gcloud container clusters update --rollback",
            "kubectl scale deployment/<deployment-name> --replicas=0"
        ],
        "answer": 1,
        "explanation": "`kubectl rollout undo` is the standard Kubernetes CLI command to roll back a deployment to its previous stable revision, restoring service immediately."
    },
    {
        "id": 137,
        "category": "Part VII: Google Kubernetes Engine",
        "question": "A DevOps engineer at GovTech Portal has rolled out a new deployment version in GKE. They notice that the new pods are throwing crash loop back-off errors. They need to roll back the cluster to the previous working deployment immediately. What is the correct command?",
        "options": [
            "kubectl delete deployment/<deployment-name>",
            "kubectl rollout undo deployment/<deployment-name>",
            "gcloud container clusters update --rollback",
            "kubectl scale deployment/<deployment-name> --replicas=0"
        ],
        "answer": 1,
        "explanation": "`kubectl rollout undo` is the standard Kubernetes CLI command to roll back a deployment to its previous stable revision, restoring service immediately."
    },
    {
        "id": 138,
        "category": "Part VII: Google Kubernetes Engine",
        "question": "A DevOps engineer at GreenGrid Energy has rolled out a new deployment version in GKE. They notice that the new pods are throwing crash loop back-off errors. They need to roll back the cluster to the previous working deployment immediately. What is the correct command?",
        "options": [
            "kubectl delete deployment/<deployment-name>",
            "kubectl rollout undo deployment/<deployment-name>",
            "gcloud container clusters update --rollback",
            "kubectl scale deployment/<deployment-name> --replicas=0"
        ],
        "answer": 1,
        "explanation": "`kubectl rollout undo` is the standard Kubernetes CLI command to roll back a deployment to its previous stable revision, restoring service immediately."
    },
    {
        "id": 139,
        "category": "Part VII: Google Kubernetes Engine",
        "question": "A DevOps engineer at AgriGrow Labs has rolled out a new deployment version in GKE. They notice that the new pods are throwing crash loop back-off errors. They need to roll back the cluster to the previous working deployment immediately. What is the correct command?",
        "options": [
            "kubectl delete deployment/<deployment-name>",
            "kubectl rollout undo deployment/<deployment-name>",
            "gcloud container clusters update --rollback",
            "kubectl scale deployment/<deployment-name> --replicas=0"
        ],
        "answer": 1,
        "explanation": "`kubectl rollout undo` is the standard Kubernetes CLI command to roll back a deployment to its previous stable revision, restoring service immediately."
    },
    {
        "id": 140,
        "category": "Part VII: Google Kubernetes Engine",
        "question": "A DevOps engineer at SecureTrans has rolled out a new deployment version in GKE. They notice that the new pods are throwing crash loop back-off errors. They need to roll back the cluster to the previous working deployment immediately. What is the correct command?",
        "options": [
            "kubectl delete deployment/<deployment-name>",
            "kubectl rollout undo deployment/<deployment-name>",
            "gcloud container clusters update --rollback",
            "kubectl scale deployment/<deployment-name> --replicas=0"
        ],
        "answer": 1,
        "explanation": "`kubectl rollout undo` is the standard Kubernetes CLI command to roll back a deployment to its previous stable revision, restoring service immediately."
    },
    {
        "id": 141,
        "category": "Part VIII: Hybrid, Multi-Cloud & Anthos",
        "question": "The platform team at JencoMart manages GKE clusters across GCP, AWS, and on-premises VMware. They want to enforce identical security restrictions and namespace configs from a central Git repository. What Anthos component should they use?",
        "options": [
            "Anthos Service Mesh (ASM)",
            "Anthos Config Management (ACM)",
            "Migrate for Anthos",
            "Anthos Multi-Cloud portal"
        ],
        "answer": 1,
        "explanation": "Anthos Config Management (ACM) uses GitOps principles to synchronize declarative configurations (such as namespaces, policies, and cluster roles) from a Git repository to all registered GKE and hybrid clusters automatically."
    },
    {
        "id": 142,
        "category": "Part VIII: Hybrid, Multi-Cloud & Anthos",
        "question": "The platform team at Mountkirk Games manages GKE clusters across GCP, AWS, and on-premises VMware. They want to enforce identical security restrictions and namespace configs from a central Git repository. What Anthos component should they use?",
        "options": [
            "Anthos Service Mesh (ASM)",
            "Anthos Config Management (ACM)",
            "Migrate for Anthos",
            "Anthos Multi-Cloud portal"
        ],
        "answer": 1,
        "explanation": "Anthos Config Management (ACM) uses GitOps principles to synchronize declarative configurations (such as namespaces, policies, and cluster roles) from a Git repository to all registered GKE and hybrid clusters automatically."
    },
    {
        "id": 143,
        "category": "Part VIII: Hybrid, Multi-Cloud & Anthos",
        "question": "The platform team at TerramEarth manages GKE clusters across GCP, AWS, and on-premises VMware. They want to enforce identical security restrictions and namespace configs from a central Git repository. What Anthos component should they use?",
        "options": [
            "Anthos Service Mesh (ASM)",
            "Anthos Config Management (ACM)",
            "Migrate for Anthos",
            "Anthos Multi-Cloud portal"
        ],
        "answer": 1,
        "explanation": "Anthos Config Management (ACM) uses GitOps principles to synchronize declarative configurations (such as namespaces, policies, and cluster roles) from a Git repository to all registered GKE and hybrid clusters automatically."
    },
    {
        "id": 144,
        "category": "Part VIII: Hybrid, Multi-Cloud & Anthos",
        "question": "The platform team at Dress4Win manages GKE clusters across GCP, AWS, and on-premises VMware. They want to enforce identical security restrictions and namespace configs from a central Git repository. What Anthos component should they use?",
        "options": [
            "Anthos Service Mesh (ASM)",
            "Anthos Config Management (ACM)",
            "Migrate for Anthos",
            "Anthos Multi-Cloud portal"
        ],
        "answer": 1,
        "explanation": "Anthos Config Management (ACM) uses GitOps principles to synchronize declarative configurations (such as namespaces, policies, and cluster roles) from a Git repository to all registered GKE and hybrid clusters automatically."
    },
    {
        "id": 145,
        "category": "Part VIII: Hybrid, Multi-Cloud & Anthos",
        "question": "The platform team at EHR Healthcare manages GKE clusters across GCP, AWS, and on-premises VMware. They want to enforce identical security restrictions and namespace configs from a central Git repository. What Anthos component should they use?",
        "options": [
            "Anthos Service Mesh (ASM)",
            "Anthos Config Management (ACM)",
            "Migrate for Anthos",
            "Anthos Multi-Cloud portal"
        ],
        "answer": 1,
        "explanation": "Anthos Config Management (ACM) uses GitOps principles to synchronize declarative configurations (such as namespaces, policies, and cluster roles) from a Git repository to all registered GKE and hybrid clusters automatically."
    },
    {
        "id": 146,
        "category": "Part VIII: Hybrid, Multi-Cloud & Anthos",
        "question": "The platform team at VidiCorp manages GKE clusters across GCP, AWS, and on-premises VMware. They want to enforce identical security restrictions and namespace configs from a central Git repository. What Anthos component should they use?",
        "options": [
            "Anthos Service Mesh (ASM)",
            "Anthos Config Management (ACM)",
            "Migrate for Anthos",
            "Anthos Multi-Cloud portal"
        ],
        "answer": 1,
        "explanation": "Anthos Config Management (ACM) uses GitOps principles to synchronize declarative configurations (such as namespaces, policies, and cluster roles) from a Git repository to all registered GKE and hybrid clusters automatically."
    },
    {
        "id": 147,
        "category": "Part VIII: Hybrid, Multi-Cloud & Anthos",
        "question": "The platform team at Lucerne Publishing manages GKE clusters across GCP, AWS, and on-premises VMware. They want to enforce identical security restrictions and namespace configs from a central Git repository. What Anthos component should they use?",
        "options": [
            "Anthos Service Mesh (ASM)",
            "Anthos Config Management (ACM)",
            "Migrate for Anthos",
            "Anthos Multi-Cloud portal"
        ],
        "answer": 1,
        "explanation": "Anthos Config Management (ACM) uses GitOps principles to synchronize declarative configurations (such as namespaces, policies, and cluster roles) from a Git repository to all registered GKE and hybrid clusters automatically."
    },
    {
        "id": 148,
        "category": "Part VIII: Hybrid, Multi-Cloud & Anthos",
        "question": "The platform team at AeroSpace Corp manages GKE clusters across GCP, AWS, and on-premises VMware. They want to enforce identical security restrictions and namespace configs from a central Git repository. What Anthos component should they use?",
        "options": [
            "Anthos Service Mesh (ASM)",
            "Anthos Config Management (ACM)",
            "Migrate for Anthos",
            "Anthos Multi-Cloud portal"
        ],
        "answer": 1,
        "explanation": "Anthos Config Management (ACM) uses GitOps principles to synchronize declarative configurations (such as namespaces, policies, and cluster roles) from a Git repository to all registered GKE and hybrid clusters automatically."
    },
    {
        "id": 149,
        "category": "Part VIII: Hybrid, Multi-Cloud & Anthos",
        "question": "The platform team at BioMed Labs manages GKE clusters across GCP, AWS, and on-premises VMware. They want to enforce identical security restrictions and namespace configs from a central Git repository. What Anthos component should they use?",
        "options": [
            "Anthos Service Mesh (ASM)",
            "Anthos Config Management (ACM)",
            "Migrate for Anthos",
            "Anthos Multi-Cloud portal"
        ],
        "answer": 1,
        "explanation": "Anthos Config Management (ACM) uses GitOps principles to synchronize declarative configurations (such as namespaces, policies, and cluster roles) from a Git repository to all registered GKE and hybrid clusters automatically."
    },
    {
        "id": 150,
        "category": "Part VIII: Hybrid, Multi-Cloud & Anthos",
        "question": "The platform team at RetailFlow manages GKE clusters across GCP, AWS, and on-premises VMware. They want to enforce identical security restrictions and namespace configs from a central Git repository. What Anthos component should they use?",
        "options": [
            "Anthos Service Mesh (ASM)",
            "Anthos Config Management (ACM)",
            "Migrate for Anthos",
            "Anthos Multi-Cloud portal"
        ],
        "answer": 1,
        "explanation": "Anthos Config Management (ACM) uses GitOps principles to synchronize declarative configurations (such as namespaces, policies, and cluster roles) from a Git repository to all registered GKE and hybrid clusters automatically."
    },
    {
        "id": 151,
        "category": "Part VIII: Hybrid, Multi-Cloud & Anthos",
        "question": "A legacy line-of-business application at Apex Analytics runs on-premises on a Windows VM. The company wants to containerize this workload and run it on a GKE cluster. What Google Cloud tool should they use to automate the containerization?",
        "options": [
            "Compute Engine migration manager.",
            "Migrate for Anthos / GKE Enterprise Migration.",
            "Storage Transfer Service.",
            "Google Cloud Build container builder."
        ],
        "answer": 1,
        "explanation": "Migrate for Anthos (now GKE Enterprise migration tool) extracts VM-based applications (such as on-prem VMs) and converts them into containers running inside GKE clusters, simplifying containerization."
    },
    {
        "id": 152,
        "category": "Part VIII: Hybrid, Multi-Cloud & Anthos",
        "question": "A legacy line-of-business application at FinSafe Group runs on-premises on a Windows VM. The company wants to containerize this workload and run it on a GKE cluster. What Google Cloud tool should they use to automate the containerization?",
        "options": [
            "Compute Engine migration manager.",
            "Migrate for Anthos / GKE Enterprise Migration.",
            "Storage Transfer Service.",
            "Google Cloud Build container builder."
        ],
        "answer": 1,
        "explanation": "Migrate for Anthos (now GKE Enterprise migration tool) extracts VM-based applications (such as on-prem VMs) and converts them into containers running inside GKE clusters, simplifying containerization."
    },
    {
        "id": 153,
        "category": "Part VIII: Hybrid, Multi-Cloud & Anthos",
        "question": "A legacy line-of-business application at Global Logistics runs on-premises on a Windows VM. The company wants to containerize this workload and run it on a GKE cluster. What Google Cloud tool should they use to automate the containerization?",
        "options": [
            "Compute Engine migration manager.",
            "Migrate for Anthos / GKE Enterprise Migration.",
            "Storage Transfer Service.",
            "Google Cloud Build container builder."
        ],
        "answer": 1,
        "explanation": "Migrate for Anthos (now GKE Enterprise migration tool) extracts VM-based applications (such as on-prem VMs) and converts them into containers running inside GKE clusters, simplifying containerization."
    },
    {
        "id": 154,
        "category": "Part VIII: Hybrid, Multi-Cloud & Anthos",
        "question": "A legacy line-of-business application at HealthScribe runs on-premises on a Windows VM. The company wants to containerize this workload and run it on a GKE cluster. What Google Cloud tool should they use to automate the containerization?",
        "options": [
            "Compute Engine migration manager.",
            "Migrate for Anthos / GKE Enterprise Migration.",
            "Storage Transfer Service.",
            "Google Cloud Build container builder."
        ],
        "answer": 1,
        "explanation": "Migrate for Anthos (now GKE Enterprise migration tool) extracts VM-based applications (such as on-prem VMs) and converts them into containers running inside GKE clusters, simplifying containerization."
    },
    {
        "id": 155,
        "category": "Part VIII: Hybrid, Multi-Cloud & Anthos",
        "question": "A legacy line-of-business application at EduLearn Ltd runs on-premises on a Windows VM. The company wants to containerize this workload and run it on a GKE cluster. What Google Cloud tool should they use to automate the containerization?",
        "options": [
            "Compute Engine migration manager.",
            "Migrate for Anthos / GKE Enterprise Migration.",
            "Storage Transfer Service.",
            "Google Cloud Build container builder."
        ],
        "answer": 1,
        "explanation": "Migrate for Anthos (now GKE Enterprise migration tool) extracts VM-based applications (such as on-prem VMs) and converts them into containers running inside GKE clusters, simplifying containerization."
    },
    {
        "id": 156,
        "category": "Part VIII: Hybrid, Multi-Cloud & Anthos",
        "question": "A legacy line-of-business application at MegaMedia Inc runs on-premises on a Windows VM. The company wants to containerize this workload and run it on a GKE cluster. What Google Cloud tool should they use to automate the containerization?",
        "options": [
            "Compute Engine migration manager.",
            "Migrate for Anthos / GKE Enterprise Migration.",
            "Storage Transfer Service.",
            "Google Cloud Build container builder."
        ],
        "answer": 1,
        "explanation": "Migrate for Anthos (now GKE Enterprise migration tool) extracts VM-based applications (such as on-prem VMs) and converts them into containers running inside GKE clusters, simplifying containerization."
    },
    {
        "id": 157,
        "category": "Part VIII: Hybrid, Multi-Cloud & Anthos",
        "question": "A legacy line-of-business application at GovTech Portal runs on-premises on a Windows VM. The company wants to containerize this workload and run it on a GKE cluster. What Google Cloud tool should they use to automate the containerization?",
        "options": [
            "Compute Engine migration manager.",
            "Migrate for Anthos / GKE Enterprise Migration.",
            "Storage Transfer Service.",
            "Google Cloud Build container builder."
        ],
        "answer": 1,
        "explanation": "Migrate for Anthos (now GKE Enterprise migration tool) extracts VM-based applications (such as on-prem VMs) and converts them into containers running inside GKE clusters, simplifying containerization."
    },
    {
        "id": 158,
        "category": "Part VIII: Hybrid, Multi-Cloud & Anthos",
        "question": "A legacy line-of-business application at GreenGrid Energy runs on-premises on a Windows VM. The company wants to containerize this workload and run it on a GKE cluster. What Google Cloud tool should they use to automate the containerization?",
        "options": [
            "Compute Engine migration manager.",
            "Migrate for Anthos / GKE Enterprise Migration.",
            "Storage Transfer Service.",
            "Google Cloud Build container builder."
        ],
        "answer": 1,
        "explanation": "Migrate for Anthos (now GKE Enterprise migration tool) extracts VM-based applications (such as on-prem VMs) and converts them into containers running inside GKE clusters, simplifying containerization."
    },
    {
        "id": 159,
        "category": "Part VIII: Hybrid, Multi-Cloud & Anthos",
        "question": "A legacy line-of-business application at AgriGrow Labs runs on-premises on a Windows VM. The company wants to containerize this workload and run it on a GKE cluster. What Google Cloud tool should they use to automate the containerization?",
        "options": [
            "Compute Engine migration manager.",
            "Migrate for Anthos / GKE Enterprise Migration.",
            "Storage Transfer Service.",
            "Google Cloud Build container builder."
        ],
        "answer": 1,
        "explanation": "Migrate for Anthos (now GKE Enterprise migration tool) extracts VM-based applications (such as on-prem VMs) and converts them into containers running inside GKE clusters, simplifying containerization."
    },
    {
        "id": 160,
        "category": "Part VIII: Hybrid, Multi-Cloud & Anthos",
        "question": "A legacy line-of-business application at SecureTrans runs on-premises on a Windows VM. The company wants to containerize this workload and run it on a GKE cluster. What Google Cloud tool should they use to automate the containerization?",
        "options": [
            "Compute Engine migration manager.",
            "Migrate for Anthos / GKE Enterprise Migration.",
            "Storage Transfer Service.",
            "Google Cloud Build container builder."
        ],
        "answer": 1,
        "explanation": "Migrate for Anthos (now GKE Enterprise migration tool) extracts VM-based applications (such as on-prem VMs) and converts them into containers running inside GKE clusters, simplifying containerization."
    },
    {
        "id": 161,
        "category": "Part IX: Databases & Data Tooling",
        "question": "At JencoMart, a new globally distributed financial system requires a database that scales horizontally worldwide and supports strong ACID consistency for transactional schedules. Which database fits this description?",
        "options": [
            "Cloud SQL with read replicas.",
            "Cloud Spanner.",
            "Cloud Bigtable.",
            "AlloyDB for PostgreSQL with cross-region replication."
        ],
        "answer": 1,
        "explanation": "Cloud Spanner is Google Cloud's globally distributed relational database designed for global horizontal scale with strong ACID consistency. Cloud SQL does not scale write operations horizontally globally with ACID. Bigtable is NoSQL."
    },
    {
        "id": 162,
        "category": "Part IX: Databases & Data Tooling",
        "question": "At Mountkirk Games, a new globally distributed financial system requires a database that scales horizontally worldwide and supports strong ACID consistency for transactional schedules. Which database fits this description?",
        "options": [
            "Cloud SQL with read replicas.",
            "Cloud Spanner.",
            "Cloud Bigtable.",
            "AlloyDB for PostgreSQL with cross-region replication."
        ],
        "answer": 1,
        "explanation": "Cloud Spanner is Google Cloud's globally distributed relational database designed for global horizontal scale with strong ACID consistency. Cloud SQL does not scale write operations horizontally globally with ACID. Bigtable is NoSQL."
    },
    {
        "id": 163,
        "category": "Part IX: Databases & Data Tooling",
        "question": "At TerramEarth, a new globally distributed financial system requires a database that scales horizontally worldwide and supports strong ACID consistency for transactional schedules. Which database fits this description?",
        "options": [
            "Cloud SQL with read replicas.",
            "Cloud Spanner.",
            "Cloud Bigtable.",
            "AlloyDB for PostgreSQL with cross-region replication."
        ],
        "answer": 1,
        "explanation": "Cloud Spanner is Google Cloud's globally distributed relational database designed for global horizontal scale with strong ACID consistency. Cloud SQL does not scale write operations horizontally globally with ACID. Bigtable is NoSQL."
    },
    {
        "id": 164,
        "category": "Part IX: Databases & Data Tooling",
        "question": "At Dress4Win, a new globally distributed financial system requires a database that scales horizontally worldwide and supports strong ACID consistency for transactional schedules. Which database fits this description?",
        "options": [
            "Cloud SQL with read replicas.",
            "Cloud Spanner.",
            "Cloud Bigtable.",
            "AlloyDB for PostgreSQL with cross-region replication."
        ],
        "answer": 1,
        "explanation": "Cloud Spanner is Google Cloud's globally distributed relational database designed for global horizontal scale with strong ACID consistency. Cloud SQL does not scale write operations horizontally globally with ACID. Bigtable is NoSQL."
    },
    {
        "id": 165,
        "category": "Part IX: Databases & Data Tooling",
        "question": "At EHR Healthcare, a new globally distributed financial system requires a database that scales horizontally worldwide and supports strong ACID consistency for transactional schedules. Which database fits this description?",
        "options": [
            "Cloud SQL with read replicas.",
            "Cloud Spanner.",
            "Cloud Bigtable.",
            "AlloyDB for PostgreSQL with cross-region replication."
        ],
        "answer": 1,
        "explanation": "Cloud Spanner is Google Cloud's globally distributed relational database designed for global horizontal scale with strong ACID consistency. Cloud SQL does not scale write operations horizontally globally with ACID. Bigtable is NoSQL."
    },
    {
        "id": 166,
        "category": "Part IX: Databases & Data Tooling",
        "question": "At VidiCorp, a new globally distributed financial system requires a database that scales horizontally worldwide and supports strong ACID consistency for transactional schedules. Which database fits this description?",
        "options": [
            "Cloud SQL with read replicas.",
            "Cloud Spanner.",
            "Cloud Bigtable.",
            "AlloyDB for PostgreSQL with cross-region replication."
        ],
        "answer": 1,
        "explanation": "Cloud Spanner is Google Cloud's globally distributed relational database designed for global horizontal scale with strong ACID consistency. Cloud SQL does not scale write operations horizontally globally with ACID. Bigtable is NoSQL."
    },
    {
        "id": 167,
        "category": "Part IX: Databases & Data Tooling",
        "question": "At Lucerne Publishing, a new globally distributed financial system requires a database that scales horizontally worldwide and supports strong ACID consistency for transactional schedules. Which database fits this description?",
        "options": [
            "Cloud SQL with read replicas.",
            "Cloud Spanner.",
            "Cloud Bigtable.",
            "AlloyDB for PostgreSQL with cross-region replication."
        ],
        "answer": 1,
        "explanation": "Cloud Spanner is Google Cloud's globally distributed relational database designed for global horizontal scale with strong ACID consistency. Cloud SQL does not scale write operations horizontally globally with ACID. Bigtable is NoSQL."
    },
    {
        "id": 168,
        "category": "Part IX: Databases & Data Tooling",
        "question": "At AeroSpace Corp, a new globally distributed financial system requires a database that scales horizontally worldwide and supports strong ACID consistency for transactional schedules. Which database fits this description?",
        "options": [
            "Cloud SQL with read replicas.",
            "Cloud Spanner.",
            "Cloud Bigtable.",
            "AlloyDB for PostgreSQL with cross-region replication."
        ],
        "answer": 1,
        "explanation": "Cloud Spanner is Google Cloud's globally distributed relational database designed for global horizontal scale with strong ACID consistency. Cloud SQL does not scale write operations horizontally globally with ACID. Bigtable is NoSQL."
    },
    {
        "id": 169,
        "category": "Part IX: Databases & Data Tooling",
        "question": "At BioMed Labs, a new globally distributed financial system requires a database that scales horizontally worldwide and supports strong ACID consistency for transactional schedules. Which database fits this description?",
        "options": [
            "Cloud SQL with read replicas.",
            "Cloud Spanner.",
            "Cloud Bigtable.",
            "AlloyDB for PostgreSQL with cross-region replication."
        ],
        "answer": 1,
        "explanation": "Cloud Spanner is Google Cloud's globally distributed relational database designed for global horizontal scale with strong ACID consistency. Cloud SQL does not scale write operations horizontally globally with ACID. Bigtable is NoSQL."
    },
    {
        "id": 170,
        "category": "Part IX: Databases & Data Tooling",
        "question": "At RetailFlow, a new globally distributed financial system requires a database that scales horizontally worldwide and supports strong ACID consistency for transactional schedules. Which database fits this description?",
        "options": [
            "Cloud SQL with read replicas.",
            "Cloud Spanner.",
            "Cloud Bigtable.",
            "AlloyDB for PostgreSQL with cross-region replication."
        ],
        "answer": 1,
        "explanation": "Cloud Spanner is Google Cloud's globally distributed relational database designed for global horizontal scale with strong ACID consistency. Cloud SQL does not scale write operations horizontally globally with ACID. Bigtable is NoSQL."
    },
    {
        "id": 171,
        "category": "Part IX: Databases & Data Tooling",
        "question": "A data analyst at Apex Analytics is querying a 50 TB log table in BigQuery. The queries filter on click_timestamp and group by country. The queries are running slowly and scanning too much data. How should they optimize the table?",
        "options": [
            "Partition the table daily by click_timestamp and cluster by country.",
            "Export the table as CSV and query it using Cloud Storage external tables.",
            "Shard the table into daily sub-tables (e.g., clicks_20260615).",
            "Increase BigQuery slot allocations manually."
        ],
        "answer": 0,
        "explanation": "Partitioning the table by click_timestamp narrows the scanned data to relevant days. Clustering by country groups the data sorting order, reducing scans during filters and aggregations. Sharding tables manually is deprecated in favor of native partitioning."
    },
    {
        "id": 172,
        "category": "Part IX: Databases & Data Tooling",
        "question": "A data analyst at FinSafe Group is querying a 50 TB log table in BigQuery. The queries filter on click_timestamp and group by country. The queries are running slowly and scanning too much data. How should they optimize the table?",
        "options": [
            "Partition the table daily by click_timestamp and cluster by country.",
            "Export the table as CSV and query it using Cloud Storage external tables.",
            "Shard the table into daily sub-tables (e.g., clicks_20260615).",
            "Increase BigQuery slot allocations manually."
        ],
        "answer": 0,
        "explanation": "Partitioning the table by click_timestamp narrows the scanned data to relevant days. Clustering by country groups the data sorting order, reducing scans during filters and aggregations. Sharding tables manually is deprecated in favor of native partitioning."
    },
    {
        "id": 173,
        "category": "Part IX: Databases & Data Tooling",
        "question": "A data analyst at Global Logistics is querying a 50 TB log table in BigQuery. The queries filter on click_timestamp and group by country. The queries are running slowly and scanning too much data. How should they optimize the table?",
        "options": [
            "Partition the table daily by click_timestamp and cluster by country.",
            "Export the table as CSV and query it using Cloud Storage external tables.",
            "Shard the table into daily sub-tables (e.g., clicks_20260615).",
            "Increase BigQuery slot allocations manually."
        ],
        "answer": 0,
        "explanation": "Partitioning the table by click_timestamp narrows the scanned data to relevant days. Clustering by country groups the data sorting order, reducing scans during filters and aggregations. Sharding tables manually is deprecated in favor of native partitioning."
    },
    {
        "id": 174,
        "category": "Part IX: Databases & Data Tooling",
        "question": "A data analyst at HealthScribe is querying a 50 TB log table in BigQuery. The queries filter on click_timestamp and group by country. The queries are running slowly and scanning too much data. How should they optimize the table?",
        "options": [
            "Partition the table daily by click_timestamp and cluster by country.",
            "Export the table as CSV and query it using Cloud Storage external tables.",
            "Shard the table into daily sub-tables (e.g., clicks_20260615).",
            "Increase BigQuery slot allocations manually."
        ],
        "answer": 0,
        "explanation": "Partitioning the table by click_timestamp narrows the scanned data to relevant days. Clustering by country groups the data sorting order, reducing scans during filters and aggregations. Sharding tables manually is deprecated in favor of native partitioning."
    },
    {
        "id": 175,
        "category": "Part IX: Databases & Data Tooling",
        "question": "A data analyst at EduLearn Ltd is querying a 50 TB log table in BigQuery. The queries filter on click_timestamp and group by country. The queries are running slowly and scanning too much data. How should they optimize the table?",
        "options": [
            "Partition the table daily by click_timestamp and cluster by country.",
            "Export the table as CSV and query it using Cloud Storage external tables.",
            "Shard the table into daily sub-tables (e.g., clicks_20260615).",
            "Increase BigQuery slot allocations manually."
        ],
        "answer": 0,
        "explanation": "Partitioning the table by click_timestamp narrows the scanned data to relevant days. Clustering by country groups the data sorting order, reducing scans during filters and aggregations. Sharding tables manually is deprecated in favor of native partitioning."
    },
    {
        "id": 176,
        "category": "Part IX: Databases & Data Tooling",
        "question": "A data analyst at MegaMedia Inc is querying a 50 TB log table in BigQuery. The queries filter on click_timestamp and group by country. The queries are running slowly and scanning too much data. How should they optimize the table?",
        "options": [
            "Partition the table daily by click_timestamp and cluster by country.",
            "Export the table as CSV and query it using Cloud Storage external tables.",
            "Shard the table into daily sub-tables (e.g., clicks_20260615).",
            "Increase BigQuery slot allocations manually."
        ],
        "answer": 0,
        "explanation": "Partitioning the table by click_timestamp narrows the scanned data to relevant days. Clustering by country groups the data sorting order, reducing scans during filters and aggregations. Sharding tables manually is deprecated in favor of native partitioning."
    },
    {
        "id": 177,
        "category": "Part IX: Databases & Data Tooling",
        "question": "A data analyst at GovTech Portal is querying a 50 TB log table in BigQuery. The queries filter on click_timestamp and group by country. The queries are running slowly and scanning too much data. How should they optimize the table?",
        "options": [
            "Partition the table daily by click_timestamp and cluster by country.",
            "Export the table as CSV and query it using Cloud Storage external tables.",
            "Shard the table into daily sub-tables (e.g., clicks_20260615).",
            "Increase BigQuery slot allocations manually."
        ],
        "answer": 0,
        "explanation": "Partitioning the table by click_timestamp narrows the scanned data to relevant days. Clustering by country groups the data sorting order, reducing scans during filters and aggregations. Sharding tables manually is deprecated in favor of native partitioning."
    },
    {
        "id": 178,
        "category": "Part IX: Databases & Data Tooling",
        "question": "A data analyst at GreenGrid Energy is querying a 50 TB log table in BigQuery. The queries filter on click_timestamp and group by country. The queries are running slowly and scanning too much data. How should they optimize the table?",
        "options": [
            "Partition the table daily by click_timestamp and cluster by country.",
            "Export the table as CSV and query it using Cloud Storage external tables.",
            "Shard the table into daily sub-tables (e.g., clicks_20260615).",
            "Increase BigQuery slot allocations manually."
        ],
        "answer": 0,
        "explanation": "Partitioning the table by click_timestamp narrows the scanned data to relevant days. Clustering by country groups the data sorting order, reducing scans during filters and aggregations. Sharding tables manually is deprecated in favor of native partitioning."
    },
    {
        "id": 179,
        "category": "Part IX: Databases & Data Tooling",
        "question": "A data analyst at AgriGrow Labs is querying a 50 TB log table in BigQuery. The queries filter on click_timestamp and group by country. The queries are running slowly and scanning too much data. How should they optimize the table?",
        "options": [
            "Partition the table daily by click_timestamp and cluster by country.",
            "Export the table as CSV and query it using Cloud Storage external tables.",
            "Shard the table into daily sub-tables (e.g., clicks_20260615).",
            "Increase BigQuery slot allocations manually."
        ],
        "answer": 0,
        "explanation": "Partitioning the table by click_timestamp narrows the scanned data to relevant days. Clustering by country groups the data sorting order, reducing scans during filters and aggregations. Sharding tables manually is deprecated in favor of native partitioning."
    },
    {
        "id": 180,
        "category": "Part IX: Databases & Data Tooling",
        "question": "A data analyst at SecureTrans is querying a 50 TB log table in BigQuery. The queries filter on click_timestamp and group by country. The queries are running slowly and scanning too much data. How should they optimize the table?",
        "options": [
            "Partition the table daily by click_timestamp and cluster by country.",
            "Export the table as CSV and query it using Cloud Storage external tables.",
            "Shard the table into daily sub-tables (e.g., clicks_20260615).",
            "Increase BigQuery slot allocations manually."
        ],
        "answer": 0,
        "explanation": "Partitioning the table by click_timestamp narrows the scanned data to relevant days. Clustering by country groups the data sorting order, reducing scans during filters and aggregations. Sharding tables manually is deprecated in favor of native partitioning."
    },
    {
        "id": 181,
        "category": "Part X: Case Studies & SRE",
        "question": "At JencoMart, the web service has an SLO of 99.9% availability over a 30-day window (43,200 minutes). An engineer is scheduling a rollout that will require 25 minutes of downtime. What portion of the monthly Error Budget is consumed?",
        "options": [
            "100% (the entire error budget is exhausted).",
            "Approximately 58% of the error budget.",
            "Less than 5% of the error budget.",
            "The SLA is breached immediately."
        ],
        "answer": 1,
        "explanation": "For 99.9% SLO over 43,200 minutes, the allowed downtime is: 100% - 99.9% = 0.1%. Total budget = 0.001 * 43,200 = 43.2 minutes. A 25-minute outage consumes: 25 / 43.2 = 57.8% (approx. 58%) of the Error Budget."
    },
    {
        "id": 182,
        "category": "Part X: Case Studies & SRE",
        "question": "At Mountkirk Games, the web service has an SLO of 99.9% availability over a 30-day window (43,200 minutes). An engineer is scheduling a rollout that will require 25 minutes of downtime. What portion of the monthly Error Budget is consumed?",
        "options": [
            "100% (the entire error budget is exhausted).",
            "Approximately 58% of the error budget.",
            "Less than 5% of the error budget.",
            "The SLA is breached immediately."
        ],
        "answer": 1,
        "explanation": "For 99.9% SLO over 43,200 minutes, the allowed downtime is: 100% - 99.9% = 0.1%. Total budget = 0.001 * 43,200 = 43.2 minutes. A 25-minute outage consumes: 25 / 43.2 = 57.8% (approx. 58%) of the Error Budget."
    },
    {
        "id": 183,
        "category": "Part X: Case Studies & SRE",
        "question": "At TerramEarth, the web service has an SLO of 99.9% availability over a 30-day window (43,200 minutes). An engineer is scheduling a rollout that will require 25 minutes of downtime. What portion of the monthly Error Budget is consumed?",
        "options": [
            "100% (the entire error budget is exhausted).",
            "Approximately 58% of the error budget.",
            "Less than 5% of the error budget.",
            "The SLA is breached immediately."
        ],
        "answer": 1,
        "explanation": "For 99.9% SLO over 43,200 minutes, the allowed downtime is: 100% - 99.9% = 0.1%. Total budget = 0.001 * 43,200 = 43.2 minutes. A 25-minute outage consumes: 25 / 43.2 = 57.8% (approx. 58%) of the Error Budget."
    },
    {
        "id": 184,
        "category": "Part X: Case Studies & SRE",
        "question": "At Dress4Win, the web service has an SLO of 99.9% availability over a 30-day window (43,200 minutes). An engineer is scheduling a rollout that will require 25 minutes of downtime. What portion of the monthly Error Budget is consumed?",
        "options": [
            "100% (the entire error budget is exhausted).",
            "Approximately 58% of the error budget.",
            "Less than 5% of the error budget.",
            "The SLA is breached immediately."
        ],
        "answer": 1,
        "explanation": "For 99.9% SLO over 43,200 minutes, the allowed downtime is: 100% - 99.9% = 0.1%. Total budget = 0.001 * 43,200 = 43.2 minutes. A 25-minute outage consumes: 25 / 43.2 = 57.8% (approx. 58%) of the Error Budget."
    },
    {
        "id": 185,
        "category": "Part X: Case Studies & SRE",
        "question": "At EHR Healthcare, the web service has an SLO of 99.9% availability over a 30-day window (43,200 minutes). An engineer is scheduling a rollout that will require 25 minutes of downtime. What portion of the monthly Error Budget is consumed?",
        "options": [
            "100% (the entire error budget is exhausted).",
            "Approximately 58% of the error budget.",
            "Less than 5% of the error budget.",
            "The SLA is breached immediately."
        ],
        "answer": 1,
        "explanation": "For 99.9% SLO over 43,200 minutes, the allowed downtime is: 100% - 99.9% = 0.1%. Total budget = 0.001 * 43,200 = 43.2 minutes. A 25-minute outage consumes: 25 / 43.2 = 57.8% (approx. 58%) of the Error Budget."
    },
    {
        "id": 186,
        "category": "Part X: Case Studies & SRE",
        "question": "At VidiCorp, the web service has an SLO of 99.9% availability over a 30-day window (43,200 minutes). An engineer is scheduling a rollout that will require 25 minutes of downtime. What portion of the monthly Error Budget is consumed?",
        "options": [
            "100% (the entire error budget is exhausted).",
            "Approximately 58% of the error budget.",
            "Less than 5% of the error budget.",
            "The SLA is breached immediately."
        ],
        "answer": 1,
        "explanation": "For 99.9% SLO over 43,200 minutes, the allowed downtime is: 100% - 99.9% = 0.1%. Total budget = 0.001 * 43,200 = 43.2 minutes. A 25-minute outage consumes: 25 / 43.2 = 57.8% (approx. 58%) of the Error Budget."
    },
    {
        "id": 187,
        "category": "Part X: Case Studies & SRE",
        "question": "At Lucerne Publishing, the web service has an SLO of 99.9% availability over a 30-day window (43,200 minutes). An engineer is scheduling a rollout that will require 25 minutes of downtime. What portion of the monthly Error Budget is consumed?",
        "options": [
            "100% (the entire error budget is exhausted).",
            "Approximately 58% of the error budget.",
            "Less than 5% of the error budget.",
            "The SLA is breached immediately."
        ],
        "answer": 1,
        "explanation": "For 99.9% SLO over 43,200 minutes, the allowed downtime is: 100% - 99.9% = 0.1%. Total budget = 0.001 * 43,200 = 43.2 minutes. A 25-minute outage consumes: 25 / 43.2 = 57.8% (approx. 58%) of the Error Budget."
    },
    {
        "id": 188,
        "category": "Part X: Case Studies & SRE",
        "question": "At AeroSpace Corp, the web service has an SLO of 99.9% availability over a 30-day window (43,200 minutes). An engineer is scheduling a rollout that will require 25 minutes of downtime. What portion of the monthly Error Budget is consumed?",
        "options": [
            "100% (the entire error budget is exhausted).",
            "Approximately 58% of the error budget.",
            "Less than 5% of the error budget.",
            "The SLA is breached immediately."
        ],
        "answer": 1,
        "explanation": "For 99.9% SLO over 43,200 minutes, the allowed downtime is: 100% - 99.9% = 0.1%. Total budget = 0.001 * 43,200 = 43.2 minutes. A 25-minute outage consumes: 25 / 43.2 = 57.8% (approx. 58%) of the Error Budget."
    },
    {
        "id": 189,
        "category": "Part X: Case Studies & SRE",
        "question": "At BioMed Labs, the web service has an SLO of 99.9% availability over a 30-day window (43,200 minutes). An engineer is scheduling a rollout that will require 25 minutes of downtime. What portion of the monthly Error Budget is consumed?",
        "options": [
            "100% (the entire error budget is exhausted).",
            "Approximately 58% of the error budget.",
            "Less than 5% of the error budget.",
            "The SLA is breached immediately."
        ],
        "answer": 1,
        "explanation": "For 99.9% SLO over 43,200 minutes, the allowed downtime is: 100% - 99.9% = 0.1%. Total budget = 0.001 * 43,200 = 43.2 minutes. A 25-minute outage consumes: 25 / 43.2 = 57.8% (approx. 58%) of the Error Budget."
    },
    {
        "id": 190,
        "category": "Part X: Case Studies & SRE",
        "question": "At RetailFlow, the web service has an SLO of 99.9% availability over a 30-day window (43,200 minutes). An engineer is scheduling a rollout that will require 25 minutes of downtime. What portion of the monthly Error Budget is consumed?",
        "options": [
            "100% (the entire error budget is exhausted).",
            "Approximately 58% of the error budget.",
            "Less than 5% of the error budget.",
            "The SLA is breached immediately."
        ],
        "answer": 1,
        "explanation": "For 99.9% SLO over 43,200 minutes, the allowed downtime is: 100% - 99.9% = 0.1%. Total budget = 0.001 * 43,200 = 43.2 minutes. A 25-minute outage consumes: 25 / 43.2 = 57.8% (approx. 58%) of the Error Budget."
    },
    {
        "id": 191,
        "category": "Part X: Case Studies & SRE",
        "question": "During a migration assessment, Apex Analytics maps their legacy e-commerce platform dependencies. They need to deploy a secure, highly scalable ingestion pipeline for customer orders, separating order placement from inventory updates. What GCP services should they choose?",
        "options": [
            "Deploy Cloud Spanner to process and parse order streams.",
            "Ingest orders using Cloud Pub/Sub, and trigger Cloud Functions to write to Cloud SQL.",
            "Use Cloud VPN tunnels to pipe orders straight to on-premises servers.",
            "Configure a Dedicated Interconnect route directly to Google Storage."
        ],
        "answer": 1,
        "explanation": "Cloud Pub/Sub acts as a highly scalable message queue that decouples publishers (order placement) from subscribers (inventory updates), providing a reliable landing zone."
    },
    {
        "id": 192,
        "category": "Part X: Case Studies & SRE",
        "question": "During a migration assessment, FinSafe Group maps their legacy e-commerce platform dependencies. They need to deploy a secure, highly scalable ingestion pipeline for customer orders, separating order placement from inventory updates. What GCP services should they choose?",
        "options": [
            "Deploy Cloud Spanner to process and parse order streams.",
            "Ingest orders using Cloud Pub/Sub, and trigger Cloud Functions to write to Cloud SQL.",
            "Use Cloud VPN tunnels to pipe orders straight to on-premises servers.",
            "Configure a Dedicated Interconnect route directly to Google Storage."
        ],
        "answer": 1,
        "explanation": "Cloud Pub/Sub acts as a highly scalable message queue that decouples publishers (order placement) from subscribers (inventory updates), providing a reliable landing zone."
    },
    {
        "id": 193,
        "category": "Part X: Case Studies & SRE",
        "question": "During a migration assessment, Global Logistics maps their legacy e-commerce platform dependencies. They need to deploy a secure, highly scalable ingestion pipeline for customer orders, separating order placement from inventory updates. What GCP services should they choose?",
        "options": [
            "Deploy Cloud Spanner to process and parse order streams.",
            "Ingest orders using Cloud Pub/Sub, and trigger Cloud Functions to write to Cloud SQL.",
            "Use Cloud VPN tunnels to pipe orders straight to on-premises servers.",
            "Configure a Dedicated Interconnect route directly to Google Storage."
        ],
        "answer": 1,
        "explanation": "Cloud Pub/Sub acts as a highly scalable message queue that decouples publishers (order placement) from subscribers (inventory updates), providing a reliable landing zone."
    },
    {
        "id": 194,
        "category": "Part X: Case Studies & SRE",
        "question": "During a migration assessment, HealthScribe maps their legacy e-commerce platform dependencies. They need to deploy a secure, highly scalable ingestion pipeline for customer orders, separating order placement from inventory updates. What GCP services should they choose?",
        "options": [
            "Deploy Cloud Spanner to process and parse order streams.",
            "Ingest orders using Cloud Pub/Sub, and trigger Cloud Functions to write to Cloud SQL.",
            "Use Cloud VPN tunnels to pipe orders straight to on-premises servers.",
            "Configure a Dedicated Interconnect route directly to Google Storage."
        ],
        "answer": 1,
        "explanation": "Cloud Pub/Sub acts as a highly scalable message queue that decouples publishers (order placement) from subscribers (inventory updates), providing a reliable landing zone."
    },
    {
        "id": 195,
        "category": "Part X: Case Studies & SRE",
        "question": "During a migration assessment, EduLearn Ltd maps their legacy e-commerce platform dependencies. They need to deploy a secure, highly scalable ingestion pipeline for customer orders, separating order placement from inventory updates. What GCP services should they choose?",
        "options": [
            "Deploy Cloud Spanner to process and parse order streams.",
            "Ingest orders using Cloud Pub/Sub, and trigger Cloud Functions to write to Cloud SQL.",
            "Use Cloud VPN tunnels to pipe orders straight to on-premises servers.",
            "Configure a Dedicated Interconnect route directly to Google Storage."
        ],
        "answer": 1,
        "explanation": "Cloud Pub/Sub acts as a highly scalable message queue that decouples publishers (order placement) from subscribers (inventory updates), providing a reliable landing zone."
    },
    {
        "id": 196,
        "category": "Part X: Case Studies & SRE",
        "question": "During a migration assessment, MegaMedia Inc maps their legacy e-commerce platform dependencies. They need to deploy a secure, highly scalable ingestion pipeline for customer orders, separating order placement from inventory updates. What GCP services should they choose?",
        "options": [
            "Deploy Cloud Spanner to process and parse order streams.",
            "Ingest orders using Cloud Pub/Sub, and trigger Cloud Functions to write to Cloud SQL.",
            "Use Cloud VPN tunnels to pipe orders straight to on-premises servers.",
            "Configure a Dedicated Interconnect route directly to Google Storage."
        ],
        "answer": 1,
        "explanation": "Cloud Pub/Sub acts as a highly scalable message queue that decouples publishers (order placement) from subscribers (inventory updates), providing a reliable landing zone."
    },
    {
        "id": 197,
        "category": "Part X: Case Studies & SRE",
        "question": "During a migration assessment, GovTech Portal maps their legacy e-commerce platform dependencies. They need to deploy a secure, highly scalable ingestion pipeline for customer orders, separating order placement from inventory updates. What GCP services should they choose?",
        "options": [
            "Deploy Cloud Spanner to process and parse order streams.",
            "Ingest orders using Cloud Pub/Sub, and trigger Cloud Functions to write to Cloud SQL.",
            "Use Cloud VPN tunnels to pipe orders straight to on-premises servers.",
            "Configure a Dedicated Interconnect route directly to Google Storage."
        ],
        "answer": 1,
        "explanation": "Cloud Pub/Sub acts as a highly scalable message queue that decouples publishers (order placement) from subscribers (inventory updates), providing a reliable landing zone."
    },
    {
        "id": 198,
        "category": "Part X: Case Studies & SRE",
        "question": "During a migration assessment, GreenGrid Energy maps their legacy e-commerce platform dependencies. They need to deploy a secure, highly scalable ingestion pipeline for customer orders, separating order placement from inventory updates. What GCP services should they choose?",
        "options": [
            "Deploy Cloud Spanner to process and parse order streams.",
            "Ingest orders using Cloud Pub/Sub, and trigger Cloud Functions to write to Cloud SQL.",
            "Use Cloud VPN tunnels to pipe orders straight to on-premises servers.",
            "Configure a Dedicated Interconnect route directly to Google Storage."
        ],
        "answer": 1,
        "explanation": "Cloud Pub/Sub acts as a highly scalable message queue that decouples publishers (order placement) from subscribers (inventory updates), providing a reliable landing zone."
    },
    {
        "id": 199,
        "category": "Part X: Case Studies & SRE",
        "question": "During a migration assessment, AgriGrow Labs maps their legacy e-commerce platform dependencies. They need to deploy a secure, highly scalable ingestion pipeline for customer orders, separating order placement from inventory updates. What GCP services should they choose?",
        "options": [
            "Deploy Cloud Spanner to process and parse order streams.",
            "Ingest orders using Cloud Pub/Sub, and trigger Cloud Functions to write to Cloud SQL.",
            "Use Cloud VPN tunnels to pipe orders straight to on-premises servers.",
            "Configure a Dedicated Interconnect route directly to Google Storage."
        ],
        "answer": 1,
        "explanation": "Cloud Pub/Sub acts as a highly scalable message queue that decouples publishers (order placement) from subscribers (inventory updates), providing a reliable landing zone."
    },
    {
        "id": 200,
        "category": "Part X: Case Studies & SRE",
        "question": "During a migration assessment, SecureTrans maps their legacy e-commerce platform dependencies. They need to deploy a secure, highly scalable ingestion pipeline for customer orders, separating order placement from inventory updates. What GCP services should they choose?",
        "options": [
            "Deploy Cloud Spanner to process and parse order streams.",
            "Ingest orders using Cloud Pub/Sub, and trigger Cloud Functions to write to Cloud SQL.",
            "Use Cloud VPN tunnels to pipe orders straight to on-premises servers.",
            "Configure a Dedicated Interconnect route directly to Google Storage."
        ],
        "answer": 1,
        "explanation": "Cloud Pub/Sub acts as a highly scalable message queue that decouples publishers (order placement) from subscribers (inventory updates), providing a reliable landing zone."
    }
];

// Export for ES modules & Browser globals
if (typeof window !== 'undefined') {
    window.questionsList = questionsList;
}
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { questionsList };
}
