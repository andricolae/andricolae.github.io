window.PROJECT_GROUPS = {
  research: "Research tools",
  fullstack: "Full-stack apps",
  angular: "Angular apps",
  ai: "AI and vision",
  web: "Early web projects"
};

window.PROJECTS = [
  {
    id: "vampirul",
    title: "Vampirul novel analysis pipeline",
    year: 2026,
    group: "research",
    team: "Built for Undead Networks, co-founded with Anca-Simina Martin",
    summary: "A six-stage pipeline that turns a Romanian novel into a validated dialogue dataset and a character network.",
    description: "The tool behind the Undead Networks analyses. It extracts every line of dialogue from a novel in .docx format, lets a researcher check and correct each one in the browser, assigns speakers and listeners, and then builds a character interaction network enriched with vocabulary profiles. Automated extraction does the heavy lifting; human validation keeps the data trustworthy enough to publish.",
    highlights: [
      "Handles both Romanian dialogue conventions: em-dash lines and „…” quotations, filtering out bare attributions like “— zise el”",
      "Browser-based validation and character-assignment interfaces served by small Flask apps, with keyboard shortcuts and autosave",
      "Network built with NetworkX; vocabulary analysis with the Stanza Romanian language model",
      "Used for the published analyses on horrordigitalhumanities.org"
    ],
    stack: ["Python", "Jupyter", "Stanza", "NetworkX", "Flask", "pandas", "JavaScript"],
    live: "https://horrordigitalhumanities.org/",
    repo: "https://github.com/andricolae/vampirul-network-analysis",
    featured: true
  },
  {
    id: "angular-school-mngr",
    title: "School Manager",
    year: 2026,
    group: "fullstack",
    summary: "A role-based school platform where admins run the school, teachers run their courses and students run their schedule.",
    description: "A full single-page application for courses, enrollments, schedules, grades and attendance across three roles: admin, teacher and student. It ships with its own Express API in front of Firestore, renders on the server, and records an audit log of everything that happens in the system.",
    highlights: [
      "Admins manage users and courses, approve schedules and set recurring sessions with room assignments",
      "Teachers record attendance and grades; students request enrollment and see a weekly timetable",
      "NgRx store split into auth, courses, users, assignments and logs slices",
      "Role-based route guards, server-side rendering and AG Grid tables",
      "Searchable audit log covering sign-ins, navigation, course, grade, attendance and admin actions"
    ],
    stack: ["Angular 19", "NgRx", "TypeScript", "Firebase", "Express", "Tailwind CSS", "AG Grid"],
    live: "",
    repo: "https://github.com/andricolae/angular-school-mngr",
    featured: true
  },
  {
    id: "next-js-school-mngr",
    title: "School Manager in Next.js",
    year: 2025,
    group: "fullstack",
    summary: "The school management idea rebuilt on Next.js with a relational database, authentication and file uploads.",
    description: "A second take on school management, this time on the Next.js App Router with a PostgreSQL schema covering admins, teachers, students, parents, classes, subjects, lessons, exams, assignments, results, attendance, events and announcements. Authentication runs through Clerk, documents upload to Cloudinary, and the whole app is containerised with Docker.",
    highlights: [
      "Prisma schema with fourteen related models",
      "Forms validated with React Hook Form and Zod",
      "Calendar views with React Big Calendar and charts with Recharts",
      "PDF attachments uploaded through Cloudinary",
      "Docker Compose setup for local and cloud deployment"
    ],
    stack: ["Next.js 14", "React", "TypeScript", "Prisma", "PostgreSQL", "Clerk", "Cloudinary", "Docker", "Tailwind CSS"],
    live: "",
    repo: "https://github.com/andricolae/next-js-school-mngr",
    featured: true
  },
  {
    id: "expense-tracker",
    title: "Expense Tracker",
    year: 2025,
    group: "angular",
    team: "Team project",
    summary: "An internal tool for submitting and tracking business expenses, including adding an expense by scanning its receipt.",
    description: "Built to simplify expense reporting for company employees. Expenses can be entered by hand or by photographing a receipt, which is read with Google Cloud Vision and Gemini before the details are filled in.",
    highlights: [
      "Receipt scanning with Google Cloud Vision and Gemini",
      "Expense categories for clearer spending overviews",
      "Firebase Authentication, Firestore, Realtime Database and Storage"
    ],
    stack: ["Angular 19", "TypeScript", "Firebase", "Google Cloud Vision", "Gemini API"],
    live: "https://expense-tracker-ntt.vercel.app/",
    repo: "https://github.com/andricolae/expense-tracker",
    featured: true
  },
  {
    id: "polling-system",
    title: "Polling System",
    year: 2025,
    group: "angular",
    team: "Team project",
    summary: "Create polls, share them, vote and watch the results update live.",
    description: "A polling application where users create polls with custom questions and options, share them, and follow vote counts and charts as they come in. Admins can manage polls, review analytics and remove entries.",
    highlights: [
      "Live results with graphical summaries",
      "Role-based access for administrators",
      "Express API layer and a data seeder for testing",
      "Mobile-first layout with Tailwind CSS"
    ],
    stack: ["Angular 19", "TypeScript", "Firebase", "Express", "Tailwind CSS"],
    live: "https://polling-system-flax.vercel.app/",
    repo: "https://github.com/andricolae/polling-system",
    featured: false
  },
  {
    id: "course-scheduler",
    title: "Course Scheduler",
    year: 2025,
    group: "angular",
    team: "Team project",
    summary: "An admin tool that receives new courses from School Manager, schedules every session and sends the timetable back.",
    description: "Works alongside School Manager through an API. When a course is added there, the request arrives here; an administrator plans its sessions on a calendar, checks for conflicts and returns the finished schedule to School Manager.",
    highlights: [
      "Calendar-based planning with conflict checks",
      "Two-way API exchange with School Manager",
      "Admin-only access with role-based authentication"
    ],
    stack: ["Angular 19", "TypeScript", "Firebase", "Tailwind CSS"],
    live: "https://course-scheduler-cyan.vercel.app/home",
    repo: "https://github.com/andricolae/course-scheduler",
    featured: false
  },
  {
    id: "school-mngr",
    title: "School Manager, first version",
    year: 2025,
    group: "angular",
    summary: "The original deployment of School Manager for teachers, students and school administrators.",
    description: "The first version of School Manager. Teachers grade students and mark attendance, students enroll in classes and see their grades, and administrators get an overview of the whole school. The source code for this version is private.",
    stack: ["Angular", "TypeScript", "Firebase", "Tailwind CSS"],
    live: "https://school-mngr.vercel.app/home",
    repo: "",
    featured: false
  },
  {
    id: "eventlink",
    title: "EventLink",
    year: 2025,
    group: "angular",
    summary: "Create a private event and send each guest a personal invitation link.",
    description: "A streamlined app for private gatherings such as birthdays, family reunions or small business meetups. Hosts create an event and generate personalised invitation links for their guests, without the overhead of a full event platform.",
    stack: ["Angular 20", "TypeScript", "Angular Material", "Firebase", "SCSS"],
    live: "https://eventlink-delta.vercel.app/",
    repo: "https://github.com/andricolae/e-vites",
    featured: false
  },
  {
    id: "loan-calculator",
    title: "Loan Calculator",
    year: 2025,
    group: "angular",
    summary: "Estimate monthly payments, total interest and the full amortisation schedule, and keep every simulation.",
    description: "A loan calculator that saves each simulation in the browser so it can be revisited, edited or deleted later. It is a progressive web app, so it can be installed on a phone or computer and used like a native application.",
    highlights: [
      "Monthly payment, total interest and amortisation schedule",
      "Simulations stored locally and editable",
      "Installable as a PWA, with offline support through a service worker"
    ],
    stack: ["Angular 19", "TypeScript", "Tailwind CSS", "PWA"],
    live: "https://loan-calculator-blond.vercel.app/",
    repo: "https://github.com/andricolae/loan-calculator",
    featured: false
  },
  {
    id: "task-mgmt-api",
    title: "Task Management API",
    year: 2025,
    group: "fullstack",
    summary: "A RESTful API with JWT authentication for creating, filtering and sorting tasks, plus a small front end.",
    description: "A Node.js and Express back end that demonstrates a complete REST design: users register and sign in, then create, update and delete tasks, filtering and sorting them by status, priority and date. Passwords are hashed with bcrypt and sessions use JSON Web Tokens.",
    stack: ["Node.js", "Express 5", "MongoDB", "Mongoose", "JWT", "bcrypt"],
    live: "",
    repo: "https://github.com/andricolae/task-mgmt-api",
    featured: false
  },
  {
    id: "ojet-shop",
    title: "Oracle JET Shop",
    year: 2025,
    group: "fullstack",
    summary: "An online shop built with Oracle JavaScript Extension Toolkit and a small Express server.",
    description: "A shop front built with Oracle JET, Oracle's toolkit for enterprise web applications, with product views and drag-and-drop interactions, served by an Express back end.",
    stack: ["Oracle JET 17", "JavaScript", "Knockout", "Express"],
    live: "",
    repo: "https://github.com/andricolae/ojet-shop",
    featured: false
  },
  {
    id: "angular-template-page",
    title: "Configurable Angular starter",
    year: 2025,
    group: "angular",
    summary: "A starter app whose menus, sidebars and footer are all defined in JSON, with authentication and translations built in.",
    description: "A reusable starting point for Angular projects. Navigation, sidebars, footers and other interface elements come from JSON configuration, so the layout changes without touching the code. Authentication, route guards and multi-language support are already wired up.",
    stack: ["Angular 19", "Angular Material", "TypeScript", "ngx-translate", "Firebase"],
    live: "https://angular-template-page.vercel.app/auth",
    repo: "https://github.com/andricolae/angular-template-page",
    featured: false
  },
  {
    id: "investment-tracker",
    title: "Investment Calculator",
    year: 2025,
    group: "angular",
    summary: "Project how an investment grows from an initial amount, yearly contributions, a return rate and a time span.",
    description: "Enter an initial investment, annual contributions, an expected interest rate and a duration, and the app shows year by year how the value could grow, to help with planning.",
    stack: ["Angular 18", "TypeScript"],
    live: "https://investment-tracker-andrei.vercel.app/",
    repo: "https://github.com/andricolae/investment-tracker",
    featured: false
  },
  {
    id: "sports-tracker",
    title: "Sports Tracker",
    year: 2024,
    group: "angular",
    summary: "A responsive scoreboard for keeping score across different sports.",
    description: "A small responsive Angular app for tracking the score of a game in several sports.",
    stack: ["Angular 19", "TypeScript"],
    live: "https://andricolae.github.io/sports-tracker/",
    repo: "https://github.com/andricolae/sports-tracker",
    featured: false
  },
  {
    id: "face-rec",
    title: "Live face detection",
    year: 2024,
    group: "ai",
    summary: "Detects faces in a webcam stream and draws landmarks and expressions in real time.",
    description: "A browser experiment with face-api.js: it reads the webcam, detects every face in the frame, and overlays the bounding box, 68 facial landmarks and the expression it recognises, refreshing ten times a second.",
    stack: ["JavaScript", "face-api.js", "TensorFlow.js", "HTML5 Canvas"],
    live: "",
    repo: "https://github.com/andricolae/face_rec",
    featured: false
  },
  {
    id: "8puzzle",
    title: "8-puzzle solver",
    year: 2023,
    group: "ai",
    summary: "Solves the sliding 8-puzzle with an informed search algorithm.",
    description: "A Python implementation of heuristic search for the classic 8-puzzle: each board state becomes a node scored by its depth and a heuristic estimate, and the solver expands the most promising states first until it reaches the goal. The repository includes the presentation that accompanied the project.",
    stack: ["Python", "A* search"],
    live: "",
    repo: "https://github.com/andricolae/8puzzleAI",
    featured: false
  },
  {
    id: "crm",
    title: "CRM",
    year: 2023,
    group: "fullstack",
    summary: "A customer relationship manager for contacts, products, inquiries and invoices.",
    description: "A Java web application on Spring and Vaadin that manages contacts and products, generates inquiries and produces invoices, with MySQL for storage and a Docker setup.",
    stack: ["Java", "Spring", "Vaadin", "MySQL", "Docker"],
    live: "",
    repo: "https://github.com/andricolae/CRM",
    featured: false
  },
  {
    id: "lego-store",
    title: "LEGO collectibles store",
    year: 2023,
    group: "fullstack",
    summary: "An online shop for LEGO Star Wars sets, with a cart, customer accounts and an admin area.",
    description: "A PHP and MySQL shop for LEGO Star Wars collectibles. Customers sign in, manage their details and delivery address and fill a cart; an administrator adds, edits and removes products.",
    stack: ["PHP", "MySQL", "HTML", "CSS"],
    live: "",
    repo: "https://github.com/andricolae/lego_store",
    featured: false
  },
  {
    id: "personal-dashboard",
    title: "Personal Dashboard",
    year: 2024,
    group: "web",
    team: "Team project",
    summary: "Weather, exchange rates, public holidays and news on one page.",
    description: "A dashboard that pulls together the weather, live exchange rates, a calendar with public holidays and the latest news. I designed and built the currency converter module and its exchange-rate integration.",
    stack: ["HTML", "CSS", "JavaScript", "REST APIs"],
    live: "https://andricolae.github.io/personal-dashboard/",
    repo: "https://github.com/andricolae/personal-dashboard",
    featured: false
  },
  {
    id: "pontajhr",
    title: "Pontaj HR",
    year: 2024,
    group: "web",
    summary: "A Romanian-language product site for an HR and timekeeping application.",
    description: "A presentation site, in Romanian, for an HR and timekeeping product: tracking hours and attendance, managing leave requests and keeping employee records in one place.",
    stack: ["HTML", "CSS"],
    live: "https://andricolae.github.io/pontajhr/",
    repo: "https://github.com/andricolae/pontajhr",
    featured: false
  },
  {
    id: "currency",
    title: "Currency Converter",
    year: 2024,
    group: "web",
    summary: "Converts between currencies using live exchange rates.",
    description: "A converter that fetches current rates from ExchangeRate-API, with options to swap the two currencies and reset the form.",
    stack: ["HTML", "CSS", "JavaScript", "ExchangeRate-API"],
    live: "https://andricolae.github.io/currency/",
    repo: "https://github.com/andricolae/currency",
    featured: false
  },
  {
    id: "tips",
    title: "Tip Calculator",
    year: 2024,
    group: "web",
    summary: "Works out the tip and the total, then picks which friend pays.",
    description: "Enter the bill and a service percentage to get the tip and total, split it between friends by name, or let the random picker decide who pays.",
    stack: ["HTML", "CSS", "JavaScript"],
    live: "https://andricolae.github.io/tips/",
    repo: "https://github.com/andricolae/tips",
    featured: false
  }
];
