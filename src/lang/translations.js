export const LANGUAGES = [
  { code: 'en', label: 'English', flag: '🇬🇧' },
  { code: 'es', label: 'Español', flag: '🇪🇸' },
  { code: 'fr', label: 'Français', flag: '🇫🇷' },
  { code: 'nl', label: 'Nederlands', flag: '🇳🇱' },
  { code: 'pt', label: 'Português', flag: '🇵🇹' },
  { code: 'de', label: 'Deutsch', flag: '🇩🇪' },
];

export const translations = {
  en: {
    nav: {
      home: 'Home',
      projects: 'Projects',
      about: 'About',
      blog: 'Blog',
      contact: 'Contact',
      resume: 'Resume',
    },
    hero: {
      status: 'Available for new product work — 2026',
      titleStart: 'I build business apps',
      titleMuted: 'that companies actually use.',
      lead: 'Clean UI • Boxes + Arrows • Business Logic • Real-World Projects.',
      description:
        'Java + React full-stack builder focused on production-ready internal tools, not toy demos. Specializing in Spring Boot, React, and PostgreSQL architectures.',
      nameLabel: 'NAME',
      nameValue: 'Stephen Karikari',
      roleLabel: 'ROLE',
      roleValue: 'Full-Stack • Java / React',
      locationLabel: 'LOCATION',
      locationValue: 'Open to Remote & On-site',
      viewProjects: 'View Projects',
      github: 'GitHub',
      linkedin: 'LinkedIn',
      resume: 'Resume',
      diagram: {
        reactTitle: 'React UI — Kiosk & Web',
        reactDesc: 'Components • State • Clean UI • Boxes',
        actionTitle: 'Action',
        actionDesc: 'User intent',
        javaTitle: 'Java API — Spring Boot',
        javaDesc: 'REST • Auth • Business Logic • RBAC',
        validateTitle: 'Validate',
        validateDesc: 'Rule engine',
        dbTitle: 'PostgreSQL / MySQL',
        dbDesc: 'Orders • Members • Inventory • Logs',
        dockerTitle: 'Docker',
        dockerDesc: 'Render • Prod',
        flowCaption: 'SYSTEM FLOW — REQ → RULES → STATE → DEPLOY',
        flowLive: 'Live • Prod',
      },
    },
    projects: {
      title: 'Featured Projects',
      subtitle: "Real-world applications I've built from concept to deployment",
      businessValueLabel: 'Business value:',
      liveDemo: 'Live Demo',
      sourceCode: 'Source Code',
      clickToExpand: 'Click to expand',
      lightboxPreview: 'Screenshot Preview',
      items: {
        1: {
          title: 'GioChat',
          description:
            'Real-time chat platform for internal teams. Typing indicators, presence, rooms, and file sharing.',
          businessValue: 'Reduces internal email by 40% — designed for small business team comms.',
        },
        2: {
          title: 'Budget App',
          description:
            'Personal finance tracker with income/expense management, visual charts, and monthly budget reports.',
          businessValue: 'Helps users save 25% more monthly — clear spending insights at a glance.',
        },
        3: {
          title: 'Association Portal',
          description:
            'Member management system for organizations with role-based access, event tracking, and announcements.',
          businessValue: 'Streamlines org management for 500+ members — replaces spreadsheets and email chains.',
        },
        4: {
          title: 'Coffee Machine Dashboard',
          description:
            'IoT-inspired dashboard for monitoring and controlling coffee machine operations with real-time status.',
          businessValue: 'Cuts downtime by 60% — predictive alerts before machines need servicing.',
        },
        5: {
          title: 'Shopping App',
          description:
            'Full e-commerce platform with product catalog, shopping cart, checkout flow, and order management.',
          businessValue: 'End-to-end purchase flow — handles inventory, payments, and order tracking.',
        },
        6: {
          title: 'Work Control',
          description:
            'Project management tool for tracking tasks, deadlines, and team workload with visual boards.',
          businessValue: 'Boosts team productivity by 30% — clear task ownership and progress tracking.',
        },
      },
    },
    about: {
      title: 'About Me',
      subtitle: 'A passionate engineer dedicated to crafting clean, high-performance web applications from end to end.',
      journeyTitle: 'My Journey',
      p1: "I'm Stephen Karikari, a passionate full-stack developer specializing in Java and React. I believe in building software that solves real business problems — clean, maintainable, and user-focused.",
      p2: 'With hands-on experience in building complete web applications from database design to frontend deployment, I bring a practical, business-minded approach to every project. I love turning complex requirements into elegant, simple solutions.',
      p3: 'My goal is to join a forward-thinking company where I can contribute to impactful projects, grow as an engineer, and help build products that make a real difference.',
      skillsTitle: 'Technical Skills',
      stats: {
        projectsBuilt: 'Projects Built',
        languagesMastered: 'Languages Mastered',
        fullStack: 'Full-Stack',
      },
    },
    blog: {
      title: 'Blog',
      subtitle: 'Thoughts, lessons, and insights from my development journey',
      readMore: 'Read More',
      posts: {
        1: {
          title: 'Why I Chose Java + React as My Stack',
          date: 'August 15, 2026',
          excerpt:
            'After exploring many technologies, I found that Java and React together give me the perfect balance of robust backend capabilities and dynamic frontend experiences...',
          category: 'Tech Stack',
        },
        2: {
          title: 'Building My First Real-Time Chat App',
          date: 'July 28, 2026',
          excerpt:
            "GioChat taught me more about WebSockets, state management, and real-time data flow than any tutorial ever could. Here's what I learned...",
          category: 'Project Story',
        },
        3: {
          title: 'From Tutorials to Real Projects: My Journey',
          date: 'July 10, 2026',
          excerpt:
            "The biggest leap in my development career was moving from following tutorials to building my own applications from scratch. Here's how I made that transition...",
          category: 'Career',
        },
      },
    },
    contact: {
      title: 'Get In Touch',
      subtitle: "Have a project in mind or want to discuss opportunities? I'd love to hear from you.",
      infoTitle: 'Contact Information',
      infoDesc:
        'Feel free to reach out through any of the platforms below or send a direct message using the form.',
      emailLabel: 'Email',
      linkedinLabel: 'LinkedIn',
      githubLabel: 'GitHub',
      locationLabel: 'Location & Availability',
      locationValue: 'Open to Remote & On-site',
      form: {
        name: 'Name',
        namePlaceholder: 'Your full name',
        email: 'Email',
        emailPlaceholder: 'you@example.com',
        subject: 'Subject',
        subjectPlaceholder: 'Project inquiry / Opportunity',
        message: 'Message',
        messagePlaceholder: 'Tell me about your project, timeline, or requirements...',
        send: 'Send Message',
        successAlert: 'Thank you! Your message has been sent successfully.',
      },
    },
    footer: {
      role: 'Java + React Full-Stack Developer',
      description: 'Building clean, business-focused web applications.',
      quickLinks: 'Quick Links',
      connect: 'Connect',
      rights: 'All rights reserved.',
      builtWith: 'Built with React + Vite',
      backToTop: 'Back to Top',
    },
    cookies: {
      title: 'We use cookies',
      description: 'We use essential cookies and local storage to remember your theme and language preferences.',
      accept: 'Accept All',
      decline: 'Decline',
    },
  },

  es: {
    nav: {
      home: 'Inicio',
      projects: 'Proyectos',
      about: 'Sobre Mí',
      blog: 'Blog',
      contact: 'Contacto',
      resume: 'Currículum',
    },
    hero: {
      status: 'Disponible para nuevos proyectos — 2026',
      titleStart: 'Desarrollo aplicaciones de negocio',
      titleMuted: 'que las empresas realmente usan.',
      lead: 'UI Limpia • Cajas + Flechas • Lógica de Negocio • Proyectos Reales.',
      description:
        'Desarrollador full-stack Java + React enfocado en herramientas internas listas para producción. Especializado en arquitecturas Spring Boot, React y PostgreSQL.',
      nameLabel: 'NOMBRE',
      nameValue: 'Stephen Karikari',
      roleLabel: 'ROL',
      roleValue: 'Full-Stack • Java / React',
      locationLabel: 'UBICACIÓN',
      locationValue: 'Disponible Remoto & Presencial',
      viewProjects: 'Ver Proyectos',
      github: 'GitHub',
      linkedin: 'LinkedIn',
      resume: 'Currículum',
      diagram: {
        reactTitle: 'React UI — Kiosco & Web',
        reactDesc: 'Componentes • Estado • UI Limpia • Cajas',
        actionTitle: 'Acción',
        actionDesc: 'Intención del usuario',
        javaTitle: 'Java API — Spring Boot',
        javaDesc: 'REST • Auth • Lógica de Negocio • RBAC',
        validateTitle: 'Validar',
        validateDesc: 'Motor de reglas',
        dbTitle: 'PostgreSQL / MySQL',
        dbDesc: 'Pedidos • Miembros • Inventario • Logs',
        dockerTitle: 'Docker',
        dockerDesc: 'Render • Producción',
        flowCaption: 'FLUJO DEL SISTEMA — REQ → REGLAS → ESTADO → DESPLIEGUE',
        flowLive: 'En vivo • Prod',
      },
    },
    projects: {
      title: 'Proyectos Destacados',
      subtitle: 'Aplicaciones reales desarrolladas desde el concepto hasta el despliegue',
      businessValueLabel: 'Valor de negocio:',
      liveDemo: 'Demo en Vivo',
      sourceCode: 'Código Fuente',
      clickToExpand: 'Clic para ampliar',
      lightboxPreview: 'Vista previa de captura',
      items: {
        1: {
          title: 'GioChat',
          description:
            'Plataforma de chat en tiempo real para equipos. Indicadores de escritura, salas y transferencia de archivos.',
          businessValue: 'Reduce el correo electrónico interno en un 40% — diseñado para comunicación de equipos.',
        },
        2: {
          title: 'Budget App',
          description:
            'Gestor de finanzas personales con control de ingresos/gastos, gráficos visuales e informes mensuales.',
          businessValue: 'Ayuda a los usuarios a ahorrar un 25% más cada mes con análisis claros de gastos.',
        },
        3: {
          title: 'Portal de Asociación',
          description:
            'Sistema de gestión de miembros para organizaciones con control de acceso por roles, eventos y comunicados.',
          businessValue: 'Optimiza la gestión de más de 500 miembros — sustituye hojas de cálculo y cadenas de correos.',
        },
        4: {
          title: 'Panel de Cafetera',
          description:
            'Panel inspirado en IoT para monitorear y controlar operaciones de cafeteras con estado en tiempo real.',
          businessValue: 'Reduce tiempos de inactividad en un 60% con alertas predictivas de mantenimiento.',
        },
        5: {
          title: 'App de Compras',
          description:
            'Plataforma completa de comercio electrónico con catálogo de productos, carrito, checkout y gestión de pedidos.',
          businessValue: 'Flujo de compra de extremo a extremo — maneja inventario, pagos y seguimiento.',
        },
        6: {
          title: 'Work Control',
          description:
            'Herramienta de gestión de proyectos para rastrear tareas, plazos y carga de trabajo con tableros visuales.',
          businessValue: 'Aumenta la productividad del equipo en un 30% con asignación clara de tareas.',
        },
      },
    },
    about: {
      title: 'Sobre Mí',
      subtitle: 'Un ingeniero dedicado a crear aplicaciones web limpias y de alto rendimiento de principio a fin.',
      journeyTitle: 'Mi Trayectoria',
      p1: 'Soy Stephen Karikari, desarrollador full-stack apasionado por Java y React. Creo en crear software que resuelva problemas empresariales reales — limpio, mantenible y centrado en el usuario.',
      p2: 'Con experiencia práctica desde el diseño de bases de datos hasta el despliegue frontend, aporto un enfoque práctico y orientado a resultados en cada proyecto. Me encanta transformar requisitos complejos en soluciones sencillas y elegantes.',
      p3: 'Mi objetivo es unirme a una empresa innovadora donde pueda contribuir en proyectos de gran impacto, crecer como ingeniero y construir productos valiosos.',
      skillsTitle: 'Habilidades Técnicas',
      stats: {
        projectsBuilt: 'Proyectos Creados',
        languagesMastered: 'Lenguajes Dominados',
        fullStack: 'Full-Stack',
      },
    },
    blog: {
      title: 'Blog',
      subtitle: 'Reflexiones, lecciones y experiencias de mi camino en el desarrollo',
      readMore: 'Leer Más',
      posts: {
        1: {
          title: 'Por qué elegí Java + React como mi stack',
          date: '15 de Agosto de 2026',
          excerpt:
            'Tras explorar diversas tecnologías, encontré que Java y React juntos me ofrecen el equilibrio perfecto entre robustez backend y dinamismo frontend...',
          category: 'Stack Tecnológico',
        },
        2: {
          title: 'Creando mi primera aplicación de chat en tiempo real',
          date: '28 de Julio de 2026',
          excerpt:
            'GioChat me enseñó más sobre WebSockets, gestión de estado y flujos en tiempo real que cualquier tutorial...',
          category: 'Historia del Proyecto',
        },
        3: {
          title: 'De tutoriales a proyectos reales: Mi trayectoria',
          date: '10 de Julio de 2026',
          excerpt:
            'El mayor salto en mi carrera fue pasar de seguir tutoriales pasivamente a construir mis propias aplicaciones completas...',
          category: 'Carrera',
        },
      },
    },
    contact: {
      title: 'Contacto',
      subtitle: '¿Tiene un proyecto en mente o desea hablar sobre oportunidades? Estaré encantado de conversar.',
      infoTitle: 'Información de Contacto',
      infoDesc:
        'No dude en comunicarse a través de las plataformas indicadas o enviar un mensaje directo mediante el formulario.',
      emailLabel: 'Correo Electrónico',
      linkedinLabel: 'LinkedIn',
      githubLabel: 'GitHub',
      locationLabel: 'Ubicación y Disponibilidad',
      locationValue: 'Disponible Remoto & Presencial',
      form: {
        name: 'Nombre',
        namePlaceholder: 'Su nombre completo',
        email: 'Correo Electrónico',
        emailPlaceholder: 'su_correo@ejemplo.com',
        subject: 'Asunto',
        subjectPlaceholder: 'Consulta sobre proyecto / Oportunidad',
        message: 'Mensaje',
        messagePlaceholder: 'Cuénteme sobre su proyecto, plazos o requisitos...',
        send: 'Enviar Mensaje',
        successAlert: '¡Gracias! Su mensaje ha sido enviado exitosamente.',
      },
    },
    footer: {
      role: 'Desarrollador Full-Stack Java + React',
      description: 'Construyendo aplicaciones web limpias y enfocadas en negocios.',
      quickLinks: 'Enlaces Rápidos',
      connect: 'Conectar',
      rights: 'Todos los derechos reservados.',
      builtWith: 'Creado con React + Vite',
      backToTop: 'Volver Arriba',
    },
    cookies: {
      title: 'Uso de cookies',
      description: 'Utilizamos cookies esenciales y almacenamiento local para recordar sus preferencias de tema e idioma.',
      accept: 'Aceptar Todas',
      decline: 'Rechazar',
    },
  },

  fr: {
    nav: {
      home: 'Accueil',
      projects: 'Projets',
      about: 'À Propos',
      blog: 'Blog',
      contact: 'Contact',
      resume: 'CV',
    },
    hero: {
      status: 'Disponible pour de nouveaux projets — 2026',
      titleStart: "Je crée des applications d'entreprise",
      titleMuted: 'que les sociétés utilisent réellement.',
      lead: 'UI Épurée • Boîtes + Flèches • Logique Métier • Projets Concrets.',
      description:
        'Développeur full-stack Java + React axé sur des outils internes robustes et prêts pour la production. Spécialisé dans les architectures Spring Boot, React et PostgreSQL.',
      nameLabel: 'NOM',
      nameValue: 'Stephen Karikari',
      roleLabel: 'RÔLE',
      roleValue: 'Full-Stack • Java / React',
      locationLabel: 'LOCALISATION',
      locationValue: 'Ouvert au Télétravail & Présentiel',
      viewProjects: 'Voir les Projets',
      github: 'GitHub',
      linkedin: 'LinkedIn',
      resume: 'CV',
      diagram: {
        reactTitle: 'UI React — Kiosque & Web',
        reactDesc: 'Composants • État • UI Épurée • Boîtes',
        actionTitle: 'Action',
        actionDesc: 'Intention utilisateur',
        javaTitle: 'API Java — Spring Boot',
        javaDesc: 'REST • Auth • Logique Métier • RBAC',
        validateTitle: 'Valider',
        validateDesc: 'Moteur de règles',
        dbTitle: 'PostgreSQL / MySQL',
        dbDesc: 'Commandes • Membres • Inventaire • Logs',
        dockerTitle: 'Docker',
        dockerDesc: 'Render • Prod',
        flowCaption: 'FLUX SYSTÈME — REQ → RÈGLES → ÉTAT → DÉPLOIEMENT',
        flowLive: 'En direct • Prod',
      },
    },
    projects: {
      title: 'Projets Réalisés',
      subtitle: "Des applications concrètes conçues de l'idée jusqu'au déploiement",
      businessValueLabel: 'Valeur ajoutée :',
      liveDemo: 'Démo en direct',
      sourceCode: 'Code Source',
      clickToExpand: 'Agrandir',
      lightboxPreview: 'Aperçu de la Capture',
      items: {
        1: {
          title: 'GioChat',
          description:
            'Plateforme de messagerie en temps réel pour équipes. Indicateurs de frappe, présence, salons et partage de fichiers.',
          businessValue: "Réduit les emails internes de 40% — pensé pour la communication d'équipe.",
        },
        2: {
          title: 'Budget App',
          description:
            'Suivi des finances personnelles avec gestion revenus/dépenses, graphiques clairs et bilans mensuels.',
          businessValue: "Aide à économiser 25% de plus par mois grâce à une vision claire des dépenses.",
        },
        3: {
          title: 'Portail Association',
          description:
            'Système de gestion des membres pour organisations avec contrôle des accès, suivi des événements et annonces.',
          businessValue: 'Simplifie la gestion de 500+ membres — remplace tableurs et chaînes de mails.',
        },
        4: {
          title: 'Tableau de Bord Machine à Café',
          description:
            'Tableau de bord inspiré IoT pour surveiller et contrôler les opérations des machines à café avec état en direct.',
          businessValue: 'Réduit les pannes de 60% — alertes prédictives avant toute maintenance.',
        },
        5: {
          title: 'Application E-Commerce',
          description:
            'Plateforme e-commerce complète avec catalogue produits, panier, processus de paiement et gestion des commandes.',
          businessValue: 'Parcours d’achat complet — gère les stocks, paiements et expéditions.',
        },
        6: {
          title: 'Work Control',
          description:
            'Outil de gestion de projets pour le suivi des tâches, échéances et charges de travail avec tableaux visuels.',
          businessValue: 'Améliore la productivité de 30% grâce à une attribution claire des tâches.',
        },
      },
    },
    about: {
      title: 'À Propos de Moi',
      subtitle: 'Un ingénieur passionné dédié à concevoir des applications web propres et performantes de bout en bout.',
      journeyTitle: 'Mon Parcours',
      p1: "Je suis Stephen Karikari, développeur full-stack passionné spécialisé en Java et React. Je conçois des logiciels qui résolvent de vrais défis d'entreprise — propres, maintenables et centrés sur l'utilisateur.",
      p2: 'Avec une expérience concrète couvrant la conception de bases de données jusqu’au déploiement frontend, j’apporte une approche pragmatique et orientée résultats à chaque projet. J’aime transformer des exigences complexes en solutions élégantes et simples.',
      p3: 'Mon objectif est d’intégrer une entreprise innovante où je pourrai contribuer à des projets d’envergure, évoluer techniquement et concevoir des produits à fort impact.',
      skillsTitle: 'Compétences Techniques',
      stats: {
        projectsBuilt: 'Projets Conçus',
        languagesMastered: 'Langages Maîtrisés',
        fullStack: 'Full-Stack',
      },
    },
    blog: {
      title: 'Blog',
      subtitle: "Réflexions, leçons et retours d'expérience sur mon parcours de développeur",
      readMore: 'Lire Plus',
      posts: {
        1: {
          title: 'Pourquoi j’ai choisi la stack Java + React',
          date: '15 Août 2026',
          excerpt:
            'Après avoir exploré diverses technologies, j’ai constaté que Java et React offrent l’équilibre idéal entre robustesse backend et dynamisme frontend...',
          category: 'Stack Technique',
        },
        2: {
          title: 'Créer ma première application de chat temps réel',
          date: '28 Juillet 2026',
          excerpt:
            'GioChat m’a appris davantage sur les WebSockets, la gestion d’état et le flux temps réel que n’importe quel tutoriel...',
          category: 'Projet',
        },
        3: {
          title: 'Des tutoriels aux projets concrets : Mon voyage',
          date: '10 Juillet 2026',
          excerpt:
            'La plus grande étape de ma carrière a été de passer du suivi passif de tutos à la création autonome d’applications complètes...',
          category: 'Carrière',
        },
      },
    },
    contact: {
      title: 'Contactez-Moi',
      subtitle: 'Vous avez un projet en tête ou souhaitez discuter d’opportunités ? Je serais ravi d’échanger.',
      infoTitle: 'Coordonnées',
      infoDesc:
        'N’hésitez pas à me joindre via les plateformes ci-dessous ou en envoyant un message direct via le formulaire.',
      emailLabel: 'Email',
      linkedinLabel: 'LinkedIn',
      githubLabel: 'GitHub',
      locationLabel: 'Disponibilité & Lieu',
      locationValue: 'Disponible Télétravail & Présentiel',
      form: {
        name: 'Nom',
        namePlaceholder: 'Votre nom complet',
        email: 'Email',
        emailPlaceholder: 'vous@exemple.com',
        subject: 'Sujet',
        subjectPlaceholder: 'Proposition de projet / Opportunité',
        message: 'Message',
        messagePlaceholder: 'Décrivez votre projet, vos délais ou vos besoins...',
        send: 'Envoyer le Message',
        successAlert: 'Merci ! Votre message a été envoyé avec succès.',
      },
    },
    footer: {
      role: 'Développeur Full-Stack Java + React',
      description: "Conception d'applications web d'entreprise propres et performantes.",
      quickLinks: 'Liens Rapides',
      connect: 'Réseaux',
      rights: 'Tous droits réservés.',
      builtWith: 'Développé avec React + Vite',
      backToTop: 'Haut de page',
    },
    cookies: {
      title: 'Nous utilisons des cookies',
      description: 'Nous utilisons des cookies essentiels et le stockage local pour mémoriser vos préférences de thème et de langue.',
      accept: 'Tout Accepter',
      decline: 'Refuser',
    },
  },

  nl: {
    nav: {
      home: 'Home',
      projects: 'Projecten',
      about: 'Over Mij',
      blog: 'Blog',
      contact: 'Contact',
      resume: 'CV',
    },
    hero: {
      status: 'Beschikbaar voor nieuwe projecten — 2026',
      titleStart: 'Ik bouw bedrijfsapps',
      titleMuted: 'die bedrijven echt gebruiken.',
      lead: 'Strakke UI • Vakken + Pijlen • Bedrijfslogica • Echte Projecten.',
      description:
        'Java + React full-stack ontwikkelaar gericht op betrouwbare interne tools voor productie. Gespecialiseerd in Spring Boot, React en PostgreSQL architecturen.',
      nameLabel: 'NAAM',
      nameValue: 'Stephen Karikari',
      roleLabel: 'ROL',
      roleValue: 'Full-Stack • Java / React',
      locationLabel: 'LOCATIE',
      locationValue: 'Open voor Remote & Op Locatie',
      viewProjects: 'Bekijk Projecten',
      github: 'GitHub',
      linkedin: 'LinkedIn',
      resume: 'CV',
      diagram: {
        reactTitle: 'React UI — Kiosk & Web',
        reactDesc: 'Componenten • State • Strakke UI • Vakken',
        actionTitle: 'Actie',
        actionDesc: 'Gebruikersintentie',
        javaTitle: 'Java API — Spring Boot',
        javaDesc: 'REST • Auth • Bedrijfslogica • RBAC',
        validateTitle: 'Valideren',
        validateDesc: 'Regelmotor',
        dbTitle: 'PostgreSQL / MySQL',
        dbDesc: 'Bestellingen • Leden • Voorraad • Logs',
        dockerTitle: 'Docker',
        dockerDesc: 'Render • Productie',
        flowCaption: 'SYSTEEMSTROOM — REQ → REGELS → STATUS → DEPLOY',
        flowLive: 'Live • Prod',
      },
    },
    projects: {
      title: 'Uitgelichte Projecten',
      subtitle: 'Praktijkapplicaties gebouwd van concept tot implementatie',
      businessValueLabel: 'Bedrijfswaarde:',
      liveDemo: 'Live Demo',
      sourceCode: 'Broncode',
      clickToExpand: 'Klik om te vergroten',
      lightboxPreview: 'Schermafbeelding Voorbeeld',
      items: {
        1: {
          title: 'GioChat',
          description:
            'Real-time chatplatform voor interne teams. Typ-indicatoren, aanwezigheid, kanalen en bestanden delen.',
          businessValue: 'Vermindert interne e-mail met 40% — ontworpen voor teamcommunicatie.',
        },
        2: {
          title: 'Budget App',
          description:
            'Persoonlijke financiële tracker met inkomsten/uitgaven beheer, visuele grafieken en maandelijkse rapporten.',
          businessValue: 'Helpt gebruikers 25% meer per maand te sparen door duidelijk inzicht.',
        },
        3: {
          title: 'Verenigingsportaal',
          description:
            'Ledenbeheersysteem voor organisaties met rolgebaseerde toegang, evenementen en aankondigingen.',
          businessValue: 'Stroomlijnt beheer voor 500+ leden — vervangt spreadsheets en mailings.',
        },
        4: {
          title: 'Koffiemachine Dashboard',
          description:
            'IoT-dashboard voor het bewaken en bedienen van koffiemachines met live statusupdates.',
          businessValue: 'Verlaagt uitval met 60% — voorspellende meldingen vóór onderhoud nodig is.',
        },
        5: {
          title: 'Winkel Applicatie',
          description:
            'Volledig e-commerce platform met productcatalogus, winkelwagen, afrekenen en orderbeheer.',
          businessValue: 'End-to-end bestelproces — beheert voorraad, betalingen en levering.',
        },
        6: {
          title: 'Work Control',
          description:
            'Projectmanagement tool voor het volgen van taken, deadlines en teamwerklast met visuele borden.',
          businessValue: 'Verhoogt teamproductiviteit met 30% door duidelijke taakverdeling.',
        },
      },
    },
    about: {
      title: 'Over Mij',
      subtitle: 'Een gedreven ontwikkelaar die strakke, hoogwaardige webapplicaties van begin tot eind bouwt.',
      journeyTitle: 'Mijn Reis',
      p1: 'Ik ben Stephen Karikari, een gepassioneerde full-stack ontwikkelaar gespecialiseerd in Java en React. Ik geloof in het bouwen van software die echte bedrijfsproblemen oplost — overzichtelijk, onderhoudbaar en gebruiksvriendelijk.',
      p2: 'Met praktijkervaring van database-ontwerp tot frontend-implementatie breng ik een pragmatische, resultaatgerichte aanpak naar elk project. Ik hou ervan om complexe vereisten om te zetten in eenvoudige, krachtige oplossingen.',
      p3: 'Mijn doel is om bij te dragen aan een vooruitstrevend bedrijf waar ik impactvolle projecten kan bouwen en kan groeien als engineer.',
      skillsTitle: 'Technische Vaardigheden',
      stats: {
        projectsBuilt: 'Projecten Gebouwd',
        languagesMastered: 'Talen Beheerst',
        fullStack: 'Full-Stack',
      },
    },
    blog: {
      title: 'Blog',
      subtitle: 'Gedachten, lessen en inzichten uit mijn ontwikkeltraject',
      readMore: 'Lees Meer',
      posts: {
        1: {
          title: 'Waarom ik koos voor Java + React als stack',
          date: '15 Augustus 2026',
          excerpt:
            'Na het verkennen van diverse technologieën ontdekte ik dat Java en React de perfecte balans bieden tussen backend robuustheid en frontend dynamiek...',
          category: 'Tech Stack',
        },
        2: {
          title: 'Het bouwen van mijn eerste real-time chat app',
          date: '28 Juli 2026',
          excerpt:
            'GioChat leerde me meer over WebSockets, state management en real-time datastromen dan welke tutorial dan ook...',
          category: 'Projectverhaal',
        },
        3: {
          title: 'Van tutorials naar echte projecten: Mijn reis',
          date: '10 Juli 2026',
          excerpt:
            'De grootste stap in mijn carrière was het overstappen van tutorials naar het zelfstandig bouwen van complete applicaties...',
          category: 'Carrière',
        },
      },
    },
    contact: {
      title: 'Neem Contact Op',
      subtitle: 'Heeft u een project in gedachten of wilt u mogelijkheden bespreken? Ik hoor graag van u.',
      infoTitle: 'Contactgegevens',
      infoDesc:
        'Neem gerust contact op via onderstaande platforms of stuur een direct bericht via het formulier.',
      emailLabel: 'E-mail',
      linkedinLabel: 'LinkedIn',
      githubLabel: 'GitHub',
      locationLabel: 'Locatie & Beschikbaarheid',
      locationValue: 'Beschikbaar Remote & Op Locatie',
      form: {
        name: 'Naam',
        namePlaceholder: 'Uw volledige naam',
        email: 'E-mail',
        emailPlaceholder: 'u@voorbeeld.nl',
        subject: 'Onderwerp',
        subjectPlaceholder: 'Projectaanvraag / Mogelijkheid',
        message: 'Bericht',
        messagePlaceholder: 'Vertel over uw project, tijdlijn of vereisten...',
        send: 'Bericht Verzenden',
        successAlert: 'Bedankt! Uw bericht is succesvol verzonden.',
      },
    },
    footer: {
      role: 'Java + React Full-Stack Ontwikkelaar',
      description: 'Bouwt strakke, bedrijfgerichte webapplicaties.',
      quickLinks: 'Snelle Links',
      connect: 'Verbinden',
      rights: 'Alle rechten voorbehouden.',
      builtWith: 'Gebouwd met React + Vite',
      backToTop: 'Naar Boven',
    },
    cookies: {
      title: 'Wij gebruiken cookies',
      description: 'Wij gebruiken essentiële cookies en lokale opslag om uw thema- en taalvoorkeuren te onthouden.',
      accept: 'Alles Accepteren',
      decline: 'Weigeren',
    },
  },

  pt: {
    nav: {
      home: 'Início',
      projects: 'Projetos',
      about: 'Sobre',
      blog: 'Blog',
      contact: 'Contato',
      resume: 'Currículo',
    },
    hero: {
      status: 'Disponível para novos projetos — 2026',
      titleStart: 'Construo aplicações empresariais',
      titleMuted: 'que as empresas realmente usam.',
      lead: 'UI Limpa • Caixas + Setas • Lógica de Negócios • Projetos Reais.',
      description:
        'Desenvolvedor full-stack Java + React focado em ferramentas internas prontas para produção. Especializado em arquiteturas Spring Boot, React e PostgreSQL.',
      nameLabel: 'NOME',
      nameValue: 'Stephen Karikari',
      roleLabel: 'FUNÇÃO',
      roleValue: 'Full-Stack • Java / React',
      locationLabel: 'LOCALIZAÇÃO',
      locationValue: 'Aberto a Remoto & Presencial',
      viewProjects: 'Ver Projetos',
      github: 'GitHub',
      linkedin: 'LinkedIn',
      resume: 'Currículo',
      diagram: {
        reactTitle: 'React UI — Quiosque & Web',
        reactDesc: 'Componentes • Estado • UI Limpa • Caixas',
        actionTitle: 'Ação',
        actionDesc: 'Intenção do usuário',
        javaTitle: 'Java API — Spring Boot',
        javaDesc: 'REST • Auth • Lógica de Negócios • RBAC',
        validateTitle: 'Validar',
        validateDesc: 'Motor de regras',
        dbTitle: 'PostgreSQL / MySQL',
        dbDesc: 'Pedidos • Membros • Estoque • Logs',
        dockerTitle: 'Docker',
        dockerDesc: 'Render • Produção',
        flowCaption: 'FLUXO DE SISTEMA — REQ → REGRAS → ESTADO → DEPLOY',
        flowLive: 'Ao vivo • Prod',
      },
    },
    projects: {
      title: 'Projetos em Destaque',
      subtitle: 'Aplicações reais construídas do conceito à implantação',
      businessValueLabel: 'Valor de negócio:',
      liveDemo: 'Demo ao Vivo',
      sourceCode: 'Código Fonte',
      clickToExpand: 'Clique para expandir',
      lightboxPreview: 'Pré-visualização da Captura',
      items: {
        1: {
          title: 'GioChat',
          description:
            'Plataforma de mensagens em tempo real para equipes. Indicadores de digitação, salas e compartilhamento de arquivos.',
          businessValue: 'Reduz o e-mail interno em 40% — desenhado para comunicação rápida de equipes.',
        },
        2: {
          title: 'Budget App',
          description:
            'Rastreador de finanças pessoais com gestão de receitas/despesas, gráficos e relatórios mensais.',
          businessValue: 'Ajuda usuários a economizarem 25% a mais por mês com insights claros.',
        },
        3: {
          title: 'Portal da Associação',
          description:
            'Sistema de gestão de associados com controle de acesso por funções, eventos e comunicados.',
          businessValue: 'Otimiza a gestão de 500+ membros — substitui planilhas e correntes de e-mail.',
        },
        4: {
          title: 'Painel da Máquina de Café',
          description:
            'Painel inspirado em IoT para monitorar e controlar operações de máquinas de café em tempo real.',
          businessValue: 'Diminui paralisações em 60% com alertas preditivos antes de manutenções.',
        },
        5: {
          title: 'App de E-Commerce',
          description:
            'Plataforma de comércio eletrônico com catálogo de produtos, carrinho, checkout e gestão de pedidos.',
          businessValue: 'Fluxo completo de compra — gerencia estoque, pagamentos e rastreio de entregas.',
        },
        6: {
          title: 'Work Control',
          description:
            'Ferramenta de gestão de projetos para rastrear tarefas, prazos e carga de trabalho em quadros visuais.',
          businessValue: 'Aumenta a produtividade em 30% com distribuição clara de tarefas.',
        },
      },
    },
    about: {
      title: 'Sobre Mim',
      subtitle: 'Um engenheiro dedicado a criar aplicações web limpas e de alto desempenho de ponta a ponta.',
      journeyTitle: 'Minha Trajetória',
      p1: 'Sou Stephen Karikari, desenvolvedor full-stack focado em Java e React. Acredito na criação de softwares que resolvem problemas reais de empresas — limpos, sustentáveis e centrados no usuário.',
      p2: 'Com experiência prática que vai da modelagem de bancos de dados ao deploy frontend, levo uma abordagem prática a cada projeto. Gosto de traduzir requisitos complexos em soluções elegantes e eficientes.',
      p3: 'Meu objetivo é me juntar a uma empresa inovadora onde possa contribuir em projetos de grande impacto e continuar evoluindo como engenheiro.',
      skillsTitle: 'Habilidades Técnicas',
      stats: {
        projectsBuilt: 'Projetos Criados',
        languagesMastered: 'Linguagens Dominadas',
        fullStack: 'Full-Stack',
      },
    },
    blog: {
      title: 'Blog',
      subtitle: 'Reflexões, aprendizados e percepções da minha jornada no desenvolvimento',
      readMore: 'Ler Mais',
      posts: {
        1: {
          title: 'Por que escolhi Java + React como minha stack',
          date: '15 de Agosto de 2026',
          excerpt:
            'Após explorar várias tecnologias, descobri que Java e React juntos oferecem o equilíbrio ideal entre robustez no backend e dinamismo no frontend...',
          category: 'Stack Técnica',
        },
        2: {
          title: 'Construindo meu primeiro app de chat em tempo real',
          date: '28 de Julho de 2026',
          excerpt:
            'O GioChat me ensinou mais sobre WebSockets, gerenciamento de estado e fluxo de dados do que qualquer tutorial...',
          category: 'História do Projeto',
        },
        3: {
          title: 'De tutoriais a projetos reais: Minha evolução',
          date: '10 de Julho de 2026',
          excerpt:
            'O maior salto na minha carreira foi deixar de apenas assistir tutoriais para construir aplicações completas por conta própria...',
          category: 'Carreira',
        },
      },
    },
    contact: {
      title: 'Entre em Contato',
      subtitle: 'Tem um projeto em mente ou deseja discutir oportunidades? Terei prazer em conversar.',
      infoTitle: 'Informações de Contato',
      infoDesc:
        'Sinta-se à vontade para entrar em contato através das plataformas abaixo ou enviar uma mensagem pelo formulário.',
      emailLabel: 'E-mail',
      linkedinLabel: 'LinkedIn',
      githubLabel: 'GitHub',
      locationLabel: 'Localização & Disponibilidade',
      locationValue: 'Disponível Remoto & Presencial',
      form: {
        name: 'Nome',
        namePlaceholder: 'Seu nome completo',
        email: 'E-mail',
        emailPlaceholder: 'voce@exemplo.com',
        subject: 'Assunto',
        subjectPlaceholder: 'Consulta sobre projeto / Oportunidade',
        message: 'Mensagem',
        messagePlaceholder: 'Conte-me sobre seu projeto, prazos ou requisitos...',
        send: 'Enviar Mensagem',
        successAlert: 'Obrigado! Sua mensagem foi enviada com sucesso.',
      },
    },
    footer: {
      role: 'Desenvolvedor Full-Stack Java + React',
      description: 'Desenvolvendo aplicações web limpas e focadas em negócios.',
      quickLinks: 'Links Rápidos',
      connect: 'Conectar',
      rights: 'Todos os direitos reservados.',
      builtWith: 'Desenvolvido com React + Vite',
      backToTop: 'Voltar ao Topo',
    },
    cookies: {
      title: 'Usamos cookies',
      description: 'Utilizamos cookies essenciais e armazenamento local para lembrar suas preferências de tema e idioma.',
      accept: 'Aceitar Todos',
      decline: 'Recusar',
    },
  },

  de: {
    nav: {
      home: 'Startseite',
      projects: 'Projekte',
      about: 'Über Mich',
      blog: 'Blog',
      contact: 'Kontakt',
      resume: 'Lebenslauf',
    },
    hero: {
      status: 'Verfügbar für neue Projekte — 2026',
      titleStart: 'Ich baue Business-Apps,',
      titleMuted: 'die Unternehmen wirklich nutzen.',
      lead: 'Klare UI • Boxen + Pfeile • Geschäftslogik • Echte Projekte.',
      description:
        'Java + React Full-Stack Entwickler mit Fokus auf produktionsreife interne Tools. Spezialisiert auf Spring Boot, React und PostgreSQL Architekturen.',
      nameLabel: 'NAME',
      nameValue: 'Stephen Karikari',
      roleLabel: 'ROLLE',
      roleValue: 'Full-Stack • Java / React',
      locationLabel: 'STANDORT',
      locationValue: 'Offen für Remote & Vor Ort',
      viewProjects: 'Projekte ansehen',
      github: 'GitHub',
      linkedin: 'LinkedIn',
      resume: 'Lebenslauf',
      diagram: {
        reactTitle: 'React UI — Kiosk & Web',
        reactDesc: 'Komponenten • State • Klare UI • Boxen',
        actionTitle: 'Aktion',
        actionDesc: 'Benutzerabsicht',
        javaTitle: 'Java API — Spring Boot',
        javaDesc: 'REST • Auth • Geschäftslogik • RBAC',
        validateTitle: 'Validieren',
        validateDesc: 'Regelwerk-Engine',
        dbTitle: 'PostgreSQL / MySQL',
        dbDesc: 'Bestellungen • Mitglieder • Inventar • Logs',
        dockerTitle: 'Docker',
        dockerDesc: 'Render • Produktion',
        flowCaption: 'SYSTEMABLAUF — ANFRAGE → REGELN → STATUS → DEPLOY',
        flowLive: 'Live • Prod',
      },
    },
    projects: {
      title: 'Ausgewählte Projekte',
      subtitle: 'Praxisnahe Anwendungen, entwickelt vom Konzept bis zum Deployment',
      businessValueLabel: 'Geschäftswert:',
      liveDemo: 'Live-Demo',
      sourceCode: 'Quellcode',
      clickToExpand: 'Klicken zum Vergrößern',
      lightboxPreview: 'Screenshot-Vorschau',
      items: {
        1: {
          title: 'GioChat',
          description:
            'Echtzeit-Chat-Plattform für interne Teams. Tippanzeigen, Anwesenheit, Räume und Dateifreigabe.',
          businessValue: 'Reduziert interne E-Mails um 40% — konzipiert für direkte Teamkommunikation.',
        },
        2: {
          title: 'Budget App',
          description:
            'Finanz-Tracker mit Einnahmen-/Ausgabenverwaltung, anschaulichen Diagrammen und Monatsberichten.',
          businessValue: 'Hilft Nutzern, durch klare Ausgabenübersichten 25% mehr pro Monat zu sparen.',
        },
        3: {
          title: 'Vereinsportal',
          description:
            'Mitgliederverwaltung für Organisationen mit rollenbasierter Zugriffskontrolle, Events und Ankündigungen.',
          businessValue: 'Optimiert die Verwaltung von 500+ Mitgliedern — ersetzt Tabellen und E-Mail-Ketten.',
        },
        4: {
          title: 'Kaffeemaschinen-Dashboard',
          description:
            'IoT-Dashboard zur Überwachung und Steuerung von Kaffeemaschinen mit Echtzeit-Statusanzeigen.',
          businessValue: 'Senkt Ausfallzeiten um 60% durch vorausschauende Wartungsbenachrichtigungen.',
        },
        5: {
          title: 'Shopping App',
          description:
            'Komplette E-Commerce-Plattform mit Produktkatalog, Warenkorb, Checkout-Prozess und Bestellverwaltung.',
          businessValue: 'Kompletter Kaufprozess — steuert Warenbestand, Zahlungen und Versandabwicklung.',
        },
        6: {
          title: 'Work Control',
          description:
            'Projektmanagement-Tool zur Verfolgung von Aufgaben, Fristen und Arbeitslast mit visuellen Boards.',
          businessValue: 'Steigert die Produktivität um 30% durch klare Aufgabenverteilung.',
        },
      },
    },
    about: {
      title: 'Über Mich',
      subtitle: 'Ein engagierter Entwickler, der saubere und performante Webanwendungen von Grund auf entwickelt.',
      journeyTitle: 'Mein Weg',
      p1: 'Ich bin Stephen Karikari, leidenschaftlicher Full-Stack Entwickler mit Schwerpunkt auf Java und React. Ich entwickle Software, die reale geschäftliche Herausforderungen löst — sauber, wartbar und anwenderorientiert.',
      p2: 'Mit Praxiserfahrung vom Datenbankdesign bis zum Frontend-Deployment bringe ich einen pragmatischen Ansatz in jedes Projekt ein. Ich liebe es, komplexe Anforderungen in elegante Lösungen zu verwandeln.',
      p3: 'Mein Ziel ist es, in einem zukunftsorientierten Unternehmen an wirkungsvollen Projekten mitzuwirken und mich als Ingenieur kontinuierlich weiterzuentwickeln.',
      skillsTitle: 'Technische Fähigkeiten',
      stats: {
        projectsBuilt: 'Gebaute Projekte',
        languagesMastered: 'Beherrschte Sprachen',
        fullStack: 'Full-Stack',
      },
    },
    blog: {
      title: 'Blog',
      subtitle: 'Gedanken, Erfahrungen und Erkenntnisse aus meiner Entwicklungslaufbahn',
      readMore: 'Weiterlesen',
      posts: {
        1: {
          title: 'Warum ich mich für Java + React entschieden habe',
          date: '15. August 2026',
          excerpt:
            'Nachdem ich viele Technologien ausprobiert hatte, fand ich in Java und React die perfekte Balance aus robuster Backend-Stabilität und dynamischer Frontend-Erfahrung...',
          category: 'Tech Stack',
        },
        2: {
          title: 'Der Bau meiner ersten Echtzeit-Chat-App',
          date: '28. Juli 2026',
          excerpt:
            'GioChat hat mir mehr über WebSockets, State-Management und Echtzeitdatenströme beigebracht als jedes Tutorial...',
          category: 'Projektbericht',
        },
        3: {
          title: 'Von Tutorials zu echten Projekten: Mein Weg',
          date: '10. Juli 2026',
          excerpt:
            'Der größte Schritt in meiner Karriere war der Übergang vom passiven Nachbauen von Tutorials zur eigenständigen Entwicklung kompletter Apps...',
          category: 'Karriere',
        },
      },
    },
    contact: {
      title: 'Kontakt aufnehmen',
      subtitle: 'Haben Sie ein Projekt im Kopf oder möchten Sie Möglichkeiten besprechen? Ich freue mich auf den Austausch.',
      infoTitle: 'Kontaktinformationen',
      infoDesc:
        'Kontaktieren Sie mich gerne über die untenstehenden Plattformen oder senden Sie eine direkte Nachricht über das Formular.',
      emailLabel: 'E-Mail',
      linkedinLabel: 'LinkedIn',
      githubLabel: 'GitHub',
      locationLabel: 'Standort & Verfügbarkeit',
      locationValue: 'Verfügbar Remote & Vor Ort',
      form: {
        name: 'Name',
        namePlaceholder: 'Ihr vollständiger Name',
        email: 'E-Mail',
        emailPlaceholder: 'sie@beispiel.de',
        subject: 'Betreff',
        subjectPlaceholder: 'Projektanfrage / Jobmöglichkeit',
        message: 'Nachricht',
        messagePlaceholder: 'Erzählen Sie mir von Ihrem Projekt, Zeitplan oder Ihren Anforderungen...',
        send: 'Nachricht senden',
        successAlert: 'Vielen Dank! Ihre Nachricht wurde erfolgreich übermittelt.',
      },
    },
    footer: {
      role: 'Java + React Full-Stack Entwickler',
      description: 'Entwicklung sauberer, geschäftsorientierter Webanwendungen.',
      quickLinks: 'Direktlinks',
      connect: 'Verbinden',
      rights: 'Alle Rechte vorbehalten.',
      builtWith: 'Erstellt mit React + Vite',
      backToTop: 'Nach oben',
    },
    cookies: {
      title: 'Wir verwenden Cookies',
      description: 'Wir verwenden essenzielle Cookies und lokalen Speicher, um Ihre Design- und Spracheinstellungen zu speichern.',
      accept: 'Alle Akzeptieren',
      decline: 'Ablehnen',
    },
  },
};

