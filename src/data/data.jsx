import chatImg from '../assets/chat.png';
import budgetImg from '../assets/budget.png';
import portalImg from '../assets/portal.png';
import cafeImg from '../assets/cafe.png';
import finishImg from '../assets/sample.png';
import workImg from '../assets/work.png';
import shopImg from '../assets/shop.png';

export const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Projects', href: '#projects' },
  { name: 'About', href: '#about' },
  { name: 'Blog', href: '#blog' },
  { name: 'Contact', href: '#contact' },
];


export const projects = [
  {
    id: 7,
    title: 'color detector',
    image: finishImg,
    description:
      'Building ColorDetector taught me that making a feature work and designing it so that it remains maintainable are two different problems. I learned to separate UI logic from domain logic, validate API inputs, and test color calculations against known values',
    businessValue:
      'Build me an industrial color matching quality control app for textile production.',
    categories: ['Management', 'CRUD'],
    tags: ['Java', 'Spring Boot', 'React', 'REST API'],
    codeUrl: 'https://github.com/stevekari/colorDetector.git',
    liveUrl: '#',
    gradient: 'linear-gradient(135deg, #0b83cd 0%, #d61919 100%)',
    mockup: {
      url: 'color.stephen.local',
      icon: 'C',
      label: 'Color Matcher',
      accentColor: '#0EA5E9',
    },
  },
  {
    id: 1,
    title: 'GioChat',
    image: chatImg,
    description:
      'Real-time chat platform for internal teams. Typing indicators, presence, rooms, and file sharing.',
    businessValue:
      'Reduces internal email by 40% — designed for small business team comms.',
    categories: ['CRUD', 'WebSocket'],
    tags: ['Java', 'Spring Boot', 'React', 'WebSocket'],
    codeUrl: 'https://github.com/stevekari/MeToU',
    liveUrl: 'https://metou-yyau.onrender.com',
    gradient: 'linear-gradient(135deg, #2563EB 0%, #60A5FA 100%)',
    mockup: {
      url: 'giochat.stephen.local',
      icon: 'G',
      label: 'GioChat UI',
      accentColor: '#2563EB',
    },
  },
  {
    id: 2,
    title: 'Budget App',
    image: budgetImg,
    description:
      'Personal finance tracker with income/expense management, visual charts, and monthly budget reports.',
    businessValue:
      'Helps users save 25% more monthly — clear spending insights at a glance.',
    categories: ['CRUD', 'Charts'],
    tags: ['Java', 'Spring Boot', 'React', 'REST API'],
    codeUrl: 'https://github.com/stevekari/Full-Budget',
    liveUrl: 'https://dailybudget.onrender.com',
    gradient: 'linear-gradient(135deg, #059669 0%, #34D399 100%)',
    mockup: {
      url: 'budget.stephen.local',
      icon: 'B',
      label: 'Budget Dashboard',
      accentColor: '#059669',
    },
  },
  {
    id: 3,
    title: 'Association Portal',
    image: portalImg,
    description:
      'Member management system for organizations with role-based access, event tracking, and announcements.',
    businessValue:
      'Streamlines org management for 500+ members — replaces spreadsheets and email chains.',
    categories: ['Auth', 'RBAC'],
    tags: ['Java', 'Spring Boot', 'React', 'Spring Security'],
    codeUrl: 'https://github.com/stevekari/adrobaapeaceAndLove',
    liveUrl: 'https://adrobaapeaceandlove.onrender.com/',
    gradient: 'linear-gradient(135deg, #0c074d 0%, #A78BFA 100%)',
    mockup: {
      url: 'portal.stephen.local',
      icon: 'A',
      label: 'Portal Dashboard',
      accentColor: '#7C3AED',
    },
  },
  {
    id: 4,
    title: 'Coffee Machine Dashboard',
    image: cafeImg,
    description:
      'IoT-inspired dashboard for monitoring and controlling coffee machine operations with real-time status.',
    businessValue:
      'Cuts downtime by 60% — predictive alerts before machines need servicing.',
    categories: ['IoT', 'Dashboard'],
    tags: ['Java', 'Spring Boot', 'React', 'REST API'],
    codeUrl: 'https://github.com/stevekari/coffee-machine',
    liveUrl: '#',
    gradient: 'linear-gradient(135deg, #D97706 0%, #FBBF24 100%)',
    mockup: {
      url: 'coffee.stephen.local',
      icon: 'C',
      label: 'Machine Status',
      accentColor: '#D97706',
    },
  },
  {
    id: 5,
    title: 'Shopping App',
    image: shopImg,
    description:
      'Full e-commerce platform with product catalog, shopping cart, checkout flow, and order management.',
    businessValue:
      'End-to-end purchase flow — handles inventory, payments, and order tracking.',
    categories: ['E-Commerce', 'CRUD'],
    tags: ['Java', 'Spring Boot', 'React', 'REST API'],
    codeUrl: 'https://github.com/stevekari/s-shop',
    liveUrl: '#',
    gradient: 'linear-gradient(135deg, #DC2626 0%, #F87171 100%)',
    mockup: {
      url: 'shop.stephen.local',
      icon: 'S',
      label: 'Product Catalog',
      accentColor: '#DC2626',
    },
  },
  {
    id: 6,
    title: 'Work Control',
    image: workImg,
    description:
      'Project management tool for tracking tasks, deadlines, and team workload with visual boards.',
    businessValue:
      'Boosts team productivity by 30% — clear task ownership and progress tracking.',
    categories: ['Management', 'CRUD'],
    tags: ['Java', 'Spring Boot', 'React', 'REST API'],
    codeUrl: 'https://github.com/stevekari/workcontrol.git',
    liveUrl: '#',
    gradient: 'linear-gradient(135deg, #0b83cd 0%, #d61919 100%)',
    mockup: {
      url: 'work.stephen.local',
      icon: 'W',
      label: 'Task Board',
      accentColor: '#0EA5E9',
    },
  },
  
];

export const techStack = [
  {
    name: 'Java',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M17 8h1a4 4 0 1 1 0 8h-1" />
        <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z" />
        <line x1="6" y1="2" x2="6" y2="4" />
        <line x1="10" y1="2" x2="10" y2="4" />
        <line x1="14" y1="2" x2="14" y2="4" />
      </svg>
    ),
  },
  {
    name: 'React',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(0 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(120 12 12)" />
        <circle cx="12" cy="12" r="2" fill="currentColor" />
      </svg>
    ),
  },
  {
    name: 'Spring Boot',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
        <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
      </svg>
    ),
  },
  {
    name: 'PostgreSQL',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5" />
        <path d="M3 12c0 1.66 4.03 3 9 3s9-1.34 9-3" />
      </svg>
    ),
  },
  {
    name: 'CSS',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polygon points="4 2 20 2 18 19 12 22 6 19" />
        <path d="M8 7h8l-.5 5H9.5l.2 3 2.3.7 2.3-.7.2-2" />
      </svg>
    ),
  },
];

export const blogPosts = [
  {
    id: 1,
    title: 'Why I Chose Java + React as My Stack',
    date: 'August 15, 2026',
    excerpt:
      'After exploring many technologies, I found that Java and React together give me the perfect balance of robust backend capabilities and dynamic frontend experiences...',
    category: 'Tech Stack',
  },
  {
    id: 2,
    title: 'Building My First Real-Time Chat App',
    date: 'July 28, 2026',
    excerpt:
      "GioChat taught me more about WebSockets, state management, and real-time data flow than any tutorial ever could. Here's what I learned...",
    category: 'Project Story',
  },
  {
    id: 3,
    title: 'From Tutorials to Real Projects: My Journey',
    date: 'July 10, 2026',
    excerpt:
      "The biggest leap in my development career was moving from following tutorials to building my own applications from scratch. Here's how I made that transition...",
    category: 'Career',
  },
];

export const skillCategories = [
  {
    category: 'Frontend',
    skills: ['React', 'TypeScript', 'JavaScript', 'Flutter'],
  },
  {
    category: 'Backend',
    skills: ['Spring Boot', 'Java', 'REST APIs'],
  },
  {
    category: 'Database',
    skills: ['PostgreSQL', 'MySQL'],
  },
  {
    category: 'Tools',
    skills: ['Git', 'GitHub', 'Docker'],
  },
];

export const stats = [
  {
    value: '7+',
    label: 'Projects Built',
  },
  {
    value: '3+',
    label: 'Languages Mastered',
  },
  {
    value: '100%',
    label: 'Full-Stack',
  },
];