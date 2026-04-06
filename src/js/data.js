// Portfolio data — migrated from client/src/lib/data.ts and updated per PORTFOLIO_PROMPT.md

const experiences = [
  {
    id: "akkodis",
    logo: "images/aodocs_logo.jpeg",
    company: "Akkodis",
    client: "AoDocs",
    position: "Senior Software Engineer - Freelance",
    period: "June 2025 - Today",
    duration: "Current",
    description: [
      "Analyze the impact of large-scale file copying and develop file transfer services",
      "Conduct code reviews and maintain test environments aligned with daily releases",
      "Support production environment and handle client requests",
      "Animate agile rituals and contribute to documentation"
    ],
    technologies: ["Java 17", "Spring Boot", "Terraform", "Google GCP", "Google Datastore", "Git", "Postman", "JUnit", "DevOps", "GitHub CI", "REST API"],
    description_fr: [
      "Analyser l'impact des copies de fichiers à grande échelle et développer des services de transfert de fichiers",
      "Effectuer des revues de code et maintenir des environnements de test alignés avec les livraisons quotidiennes",
      "Assurer le support de l'environnement de production et traiter les demandes clients",
      "Animer les rituels agiles et contribuer à la documentation"
    ]
  },
  {
    id: "intelcia",
    logo: "images/intelcia_it_solutions_logo.jpeg",
    company: "Intelcia IT Solutions",
    client: "SFR",
    position: "Senior Software Engineer - Freelance",
    period: "May 2023 - June 2025",
    duration: "2 yrs 1 mo",
    description: [
      "Led business and technical meetings with team management of 3 developers",
      "Redesigned appointment management back-office application with generic, modular architecture",
      "Migrated appointment applications from MongoDB to PostgreSQL",
      "Migrated application instances from virtual machines to Kubernetes",
      "Migrated CSV file management from local file systems to AWS S3",
      "Orchestrated batch jobs using Apache Airflow DAGs and Spring Batch",
      "Built and maintained CI/CD pipelines using GitLab CI"
    ],
    technologies: ["Java 17/11/8", "Angular 17/TS", "Spring Boot", "Spring Batch", "MongoDB", "PostgreSQL", "Git", "Maven", "SQL", "Postman", "DevOps", "GitLab CI", "K8s", "REST API", "Apache Airflow", "Batch Scripting"],
    description_fr: [
      "Pilotage des réunions métier et techniques avec management d'une équipe de 3 développeurs",
      "Refonte de l'application back-office de gestion des rendez-vous avec une architecture générique et modulaire",
      "Migration des applications de rendez-vous de MongoDB vers PostgreSQL",
      "Migration des instances applicatives des machines virtuelles vers Kubernetes",
      "Migration de la gestion des fichiers CSV du système de fichiers local vers AWS S3",
      "Orchestration des traitements batch via les DAGs Apache Airflow et Spring Batch",
      "Construction et maintenance des pipelines CI/CD avec GitLab CI"
    ]
  },
  {
    id: "ticketmaster",
    logo: "images/ticketmaster_logo.jpeg",
    company: "Ticketmaster",
    client: "TMTOOLS",
    position: "Senior Software Engineer - Freelance",
    period: "Feb 2022 - May 2023",
    duration: "1 yr 3 mos",
    description: [
      "Collaborated with Product Owners and stakeholders for functional and technical breakdowns",
      "Implemented the BFF pattern and service orchestration through API Gateway and Load Balancer",
      "Provided production support and hot deployments triggered by PagerDuty alerts",
      "Trained and onboarded new team members",
      "Developed APIs (BFF pattern) and tag management services",
      "Maintained the IDENTITY platform handling access management and migrations"
    ],
    technologies: ["Java", "TypeScript", "Kotlin", "Spring", "MySQL", "JPA", "Git", "Gradle", "SQL", "Postman", "Docker", "CI/CD", "GitLab", "REST API", "Swagger", "SOA", "JUnit", "Mockito", "Cucumber/Gherkin", "SSH", "Linux"],
    description_fr: [
      "Collaboration avec les Product Owners et parties prenantes pour les découpages fonctionnels et techniques",
      "Implémentation du pattern BFF et orchestration de services via API Gateway et Load Balancer",
      "Support en production et déploiements à chaud déclenchés par les alertes PagerDuty",
      "Formation et intégration des nouveaux membres de l'équipe",
      "Développement d'APIs (pattern BFF) et services de gestion des tags",
      "Maintenance de la plateforme IDENTITY gérant les accès et les migrations"
    ]
  },
  {
    id: "percall",
    logo: "images/percall_sa_logo.jpeg",
    company: "Percall Group",
    position: "Analyst Developer - Project SOLINGS",
    period: "Oct 2020 - Feb 2022",
    duration: "1 yr 4 mos",
    description: [
      "Implemented features such as Change Project, Search, and Create New Revision",
      "Conducted code reviews and mentored team members",
      "Configured preference management (JSON format) in the database",
      "Handled bug fixes and change requests requested by the client",
      "Migrated existing functionalities from ThingWorx and developed REST APIs",
      "Designed and wrote test scenarios using SQUASH"
    ],
    technologies: ["Java", "JavaScript", "Spring Framework", "Oracle", "PostgreSQL", "JPA Hibernate", "Git", "Gradle", "Maven", "SQL", "Docker", "REST API", "SOA", "JIRA", "Confluence", "JUnit3", "Mockito", "SQUASH", "Postman", "UML"],
    description_fr: [
      "Implémentation de fonctionnalités : Changement de projet, Recherche et Création de nouvelle révision",
      "Revues de code et mentorat des membres de l'équipe",
      "Configuration de la gestion des préférences (format JSON) en base de données",
      "Corrections de bugs et gestion des demandes de modification du client",
      "Migration des fonctionnalités existantes depuis ThingWorx et développement d'APIs REST",
      "Conception et rédaction de scénarios de tests avec SQUASH"
    ]
  },
  {
    id: "sqli",
    logo: "images/sqli_logo.jpeg",
    company: "SQLI Maroc",
    client: "NESTLE / NESPRESSO",
    position: "Software Engineer - Projet NESPRESSO",
    period: "Oct 2018 - Aug 2020",
    duration: "1 yr 10 mos",
    description: [
      "Integrated an MVP for Customer-Driven Testing using PACT",
      "Implemented full build automation with Maven for smooth continuous integration",
      "Integrated Ecapi-Cart into the core NC2 application",
      "Optimized promotional calculation logic and developed the Easy Orders module",
      "Investigated, analyzed, and fixed bugs in Release and Production environments",
      "Managed the full translation workflow for Android and iOS applications"
    ],
    technologies: ["Java", "JavaScript", "TypeScript", "Spring Framework", "Angular JS/5", "Oracle", "PostgreSQL", "JPA Hibernate", "SAP Hybris", "Puppet Hiera", "Git", "ANT", "Gradle", "Maven", "Jenkins", "Sonar", "Groovy", "SQL", "Docker", "REST API", "SOA", "JIRA", "Confluence", "JUnit", "Mockito", "Postman"],
    description_fr: [
      "Intégration d'un MVP pour les tests pilotés par le client avec PACT",
      "Mise en place de l'automatisation complète du build avec Maven pour une intégration continue fluide",
      "Intégration d'Ecapi-Cart dans le noyau de l'application NC2",
      "Optimisation de la logique de calcul promotionnel et développement du module Easy Orders",
      "Investigation, analyse et correction de bugs dans les environnements Release et Production",
      "Gestion du workflow complet de traduction pour les applications Android et iOS"
    ]
  },
  {
    id: "mobiblanc",
    logo: "images/mobiblanc_logo.jpeg",
    company: "Mobiblanc",
    client: "2M",
    position: "Backend Developer",
    period: "Aug 2018 - Oct 2018",
    duration: "2 mos",
    description: [
      "Contributed to the development of the CRM system",
      "Developed a user role management module and REST APIs for the My2M mobile application",
      "Created unit test scenarios using JUnit and Mockito",
      "Provided support for bug fixing and issue resolution"
    ],
    technologies: ["Java", "JavaScript", "TypeScript", "AJAX", "Spring Framework", "PostgreSQL", "JPA Hibernate", "Git", "Maven", "SQL", "Docker", "REST API", "SOA", "JUnit", "Mockito", "Postman", "UML"],
    description_fr: [
      "Contribution au développement du système CRM",
      "Développement d'un module de gestion des rôles utilisateurs et d'APIs REST pour l'application mobile My2M",
      "Création de scénarios de tests unitaires avec JUnit et Mockito",
      "Support pour la correction de bugs et la résolution d'incidents"
    ]
  },
  {
    id: "norsys",
    logo: "images/norsys_logo.jpeg",
    company: "Norsys Afrique",
    position: "End-of-study Internship – Norsys recrute",
    period: "Feb 2018 - June 2018",
    duration: "4 mos",
    description: [
      "Studied and developed an automated recruitment solution assisted by a chatbot",
      "Created UML diagrams: class, use case, and sequence diagrams",
      "Wrote functional and technical specifications and created documentation"
    ],
    technologies: ["Java", "JavaScript", "TypeScript", "Spring Framework", "PostgreSQL", "JPA Hibernate", "Git", "Maven", "SQL", "Docker", "REST API", "SOA", "JUnit", "Mockito", "SQUASH", "Postman", "UML", "Angular 5", "HTML/CSS"],
    description_fr: [
      "Étude et développement d'une solution de recrutement automatisée assistée par un chatbot",
      "Création de diagrammes UML : classes, cas d'utilisation et de séquence",
      "Rédaction des spécifications fonctionnelles et techniques et création de la documentation"
    ]
  }
];

const projects = [
  {
    id: "toukrichtemed24",
    name: "toukrichtemed24",
    description: "Personal portfolio website",
    url: "https://github.com/toukmed/toukrichtemed24",
    language: "HTML",
    updated: "Apr 6, 2026"
  },
  {
    id: "google-places-scrapper",
    name: "google-places-scrapper",
    description: "Web scraper for Google Places data",
    url: "https://github.com/toukmed/google-places-scrapper",
    language: "Java",
    updated: "Apr 2, 2026"
  },
  {
    id: "email-notification-microservice",
    name: "email-notification-microservice",
    description: "Microservice for email notifications",
    url: "https://github.com/toukmed/email-notification-microservice",
    language: "Java",
    updated: "Apr 2, 2026"
  },
  {
    id: "engins-front",
    name: "engins-front",
    description: "Frontend application for engine management",
    url: "https://github.com/toukmed/engins-front",
    language: "SCSS",
    updated: "Mar 16, 2026"
  },
  {
    id: "engins-manager",
    name: "engins-manager",
    description: "Manager application for engine operations",
    url: "https://github.com/toukmed/engins-manager",
    language: "Shell",
    updated: "Mar 16, 2026"
  },
  {
    id: "engins-backend",
    name: "engins-backend",
    description: "Backend service for engine management system",
    url: "https://github.com/toukmed/engins-backend",
    language: "Java",
    updated: "Mar 16, 2026"
  },
  {
    id: "portfolio",
    name: "portfolio",
    description: "Portfolio website built with TypeScript",
    url: "https://github.com/toukmed/portfolio",
    language: "TypeScript",
    updated: "May 10, 2025"
  },
  {
    id: "startwars",
    name: "startwars",
    description: "Web application that loads data from SWAPI and allows bookmarking characters",
    url: "https://github.com/toukmed/startwars",
    language: "TypeScript",
    updated: "May 21, 2024"
  },
  {
    id: "start-wars-backend",
    name: "start-wars-backend",
    description: "Backend API for Star Wars application",
    url: "https://github.com/toukmed/start-wars-backend",
    language: "Java",
    updated: "May 23, 2024"
  },
  {
    id: "star-wars-front",
    name: "star-wars-front",
    description: "Frontend for Star Wars application",
    url: "https://github.com/toukmed/star-wars-front",
    language: "TypeScript",
    updated: "May 23, 2024"
  }
];

const skills = [
  {
    category: "Languages",
    category_fr: "Langages",
    items: ["Java 8, 11, 17, 19, 21", "Kotlin", "JavaScript", "TypeScript", "SQL", "HTML", "CSS"]
  },
  {
    category: "Databases",
    category_fr: "Bases de données",
    items: ["MySQL", "PostgreSQL", "Oracle", "MongoDB"]
  },
  {
    category: "Backend Frameworks",
    category_fr: "Frameworks Backend",
    items: ["Spring Core", "Spring MVC", "Spring Batch", "Spring Boot", "Hibernate"]
  },
  {
    category: "Frontend Frameworks",
    category_fr: "Frameworks Frontend",
    items: ["Angular 5-19", "React"]
  },
  {
    category: "Servers",
    category_fr: "Serveurs",
    items: ["Tomcat", "Nginx", "Traefik"]
  },
  {
    category: "Testing",
    category_fr: "Tests",
    items: ["JUnit", "Mockito", "BDD/Cucumber", "Gherkin", "Postman"]
  },
  {
    category: "DevOps & CI/CD",
    category_fr: "DevOps & CI/CD",
    items: ["Docker", "Docker Compose", "Jenkins", "Sonar", "GitLab CI", "GitHub (CI/CD/Workflow)", "Git/Git workflow", "Maven", "Gradle"]
  },
  {
    category: "Architecture & Design",
    category_fr: "Architecture & Conception",
    items: ["MVC", "SOA", "Design Patterns", "SOLID", "UML", "TDD", "Event Driven Development", "AI oriented programming"]
  },
  {
    category: "Tools & Platforms",
    category_fr: "Outils & Plateformes",
    items: ["Jira", "Confluence", "AWS S3", "GCP", "Kubernetes", "Apache Airflow"]
  }
];

const education = [
  {
    degree: "State Engineer's Degree",
    degree_fr: "Diplôme d'Ingénieur d'État",
    field: "Software Engineering and Distributed Computer Systems",
    field_fr: "Génie Logiciel et Systèmes Informatiques Répartis",
    school: "École Normale Supérieure de l'Enseignement Technique, Mohammedia",
    period: "2015 - 2018"
  },
  {
    degree: "Preparatory Classes",
    degree_fr: "Classes Préparatoires",
    field: "TSI",
    field_fr: "TSI",
    school: "Lycée Mohamed V, Beni Mellal",
    period: "2011 - 2014"
  },
  {
    degree: "Baccalaureate",
    degree_fr: "Baccalauréat",
    field: "Mechanical Sciences and Technologies",
    field_fr: "Sciences et Technologies Mécaniques",
    school: "Lycée Mohamed V, Beni Mellal",
    period: "June 2011"
  }
];
