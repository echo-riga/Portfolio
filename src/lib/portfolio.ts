// Replace these sample values with your own details before publishing.
export const portfolio = {
  name: "Jericho Riga",
  initials: "JR",
  role: "Full Stack Developer",
  location: "Pasig, Philippines",
  email: "hello@example.com",
  githubUsername: "echo-riga",
  linkedinUrl: "https://www.linkedin.com/in/jericho-riga-800160395/",
  headline: "Thoughtful design.\nPurposeful code.",
  introduction: "Full Stack Developer portfolio — projects, experience, and technical skills.",
  about: "I’m a designer and developer who enjoys making the complex feel simple. I work at the intersection of thoughtful interfaces and well-crafted code, building things that are useful, approachable, and a pleasure to use.",
  aboutMore: "Outside of the screen, you’ll usually find me exploring new places, collecting inspiration, or working on a small side project. This is a starter portfolio — make this story your own.",
  socialLinks: [] as { label: string; href: string }[],
};

// Keep unavailable certificate links empty until the matching image is added.
export const credentials = [
  { name: "Google Cloud Fundamentals: Core Infrastructure", issuer: "Google Cloud", year: "2026", kind: "Completion badge", url: "https://www.skills.google/public_profiles/88a235af-3d70-4267-a8e1-aaa445af2722/badges/27722229" },
  { name: "Certificate of Internship", issuer: "UnQue Cloudbook", year: "2026", kind: "Certificate", url: "/credentials/unque-cert.png" },
  { name: "Responsive Web Design", issuer: "freeCodeCamp", year: "2025", kind: "Certificate", url: "" },
  { name: "Cybersecurity Champion", issuer: "CCS Academic Competition", year: "2025", kind: "Achievement", url: "" },
  { name: "Java Champion", issuer: "CCS Academic Competition", year: "2025", kind: "Achievement", url: "" },
  { name: "Java Programming Representative", issuer: "ISITE National IT Skills Competition", year: "2025", kind: "Achievement", url: "/credentials/java-isite.png" },
  { name: "Java Programming Representative", issuer: "13th IT Skills Olympics", year: "2024", kind: "Achievement", url: "" },
  { name: "Java Programming — 2nd Place", issuer: "CCS Academic Competition", year: "2024", kind: "Achievement", url: "/credentials/java-2nd.png" },
  { name: "Java (Basic)", issuer: "HackerRank", year: "2024", kind: "Certificate", url: "/credentials/java-basic.png" },
];

export const experiences = [
  { role: "Software Engineer Intern", company: "UnQue", period: "2026" },
  { role: "Web Developer (Contract)", company: "Loxon Philippines Inc.", period: "2026" },
  { role: "Freelance Software Developer", company: "", period: "2024 — 2025" },
];

export const education = { role: "Student", school: "Pamantasan ng Lungsod ng Pasig", period: "2023 — Present" };

export const techGroups = [
  { name: "Languages", skills: ["TypeScript", "JavaScript", "Python", "Java", "SQL"] },
  { name: "Frontend & Apps", skills: ["Next.js", "React", "React Native", "Expo", "Redux", "Tailwind CSS", "MUI", "Electron", "WinForms"] },
  { name: "Backend & APIs", skills: ["Node.js", "Express.js", "Flask", ".NET Framework", "Socket.io", "REST APIs"] },
  { name: "Databases & Storage", skills: ["PostgreSQL", "MongoDB", "MySQL", "SQLite", "Redis", "Neon", "IndexedDB"] },
  { name: "AI & Integrations", skills: ["Gemini API", "Groq API", "MCP", "Google Drive API", "Google Maps API", "Google Forms", "Cloudinary", "Resend"] },
  { name: "Data & Machine Learning", skills: ["pandas", "NumPy", "scikit-learn", "TensorFlow", "joblib"] },
  { name: "Authentication", skills: ["JWT", "OAuth 2.0", "Better Auth", "Neon Auth"] },
  { name: "Development Tools", skills: ["Git", "GitHub", "Docker", "Playwright", "Postman"] },
  { name: "Cloud & Deployment", skills: ["AWS", "Microsoft Azure", "Vercel", "Railway"] },
];

export const projects = [
  {
    "slug": "leaprs",
    "name": "LEAPRS",
    "summary": "Capacity development requests, timelines, and budget monitoring.",
    "category": "Training requisition & monitoring system",
    "year": "2026",
    "theme": "leaprs",
    "images": [
      {
        "src": "/projects/leaprs-capdev-projects.png",
        "alt": "LEAPRS CapDev projects dashboard showing AIP codes and budget balances"
      },
      {
        "src": "/projects/leaprs-requests.png",
        "alt": "LEAPRS requests page showing In-House and External requests with statuses and inactivity reminders"
      },
      {
        "src": "/projects/leaprs-request-timeline.png",
        "alt": "LEAPRS request timeline showing approval milestones and a completed budget deduction"
      },
      {
        "src": "/projects/leaprs-evaluation-summary.png",
        "alt": "LEAPRS evaluation summary showing AI-summarized feedback and rating results"
      },
      {
        "src": "/projects/leaprs-settings.png",
        "alt": "LEAPRS settings dashboard for users, reports, notifications, and configurable forms"
      },
      {
        "src": "/projects/leaprs-form-configuration.png",
        "alt": "LEAPRS In-House activity design form configuration with reorderable custom fields"
      },
      {
        "src": "/projects/leaprs-ai-app-connection.png",
        "alt": "LEAPRS Connect to AI Apps dialog showing MCP setup instructions for ChatGPT"
      }
    ],
    "description": "The Lifelong Education Advancement Program Requisition System (LEAPRS) manages AIP-linked Capacity Development projects, requests, progress, budgets, and institutional reporting.",
    "brief": "Employees submit In-House or External requests, while authorized staff configure forms, manage CapDev projects, track progress and blockers, and review budgets and reports.",
    "tools": [
      "Next.js",
      "TypeScript",
      "MUI",
      "PostgreSQL",
      "Drizzle ORM",
      "Neon Auth",
      "Gemini API",
      "Groq API",
      "Google APIs",
      "MCP"
    ],
    "features": [
      "Role-based workflows for administrators, employees, cross-department staff, and viewers",
      "Configurable fields and layouts for CapDev projects, In-House and External requests, and status updates",
      "Request timelines with milestones, blockers, responses, stop and resume controls, reopening, and inactivity reminders",
      "Budget validation and one-time deductions, with analytics, PDF reports, and Excel monitoring exports",
      "Gemini assistant for general guidance, live request and budget answers, and editable drafts from photos, files, or prompts",
      "Resumable Google Drive attachments and In-House Google Forms evaluations with Groq-powered summaries",
      "In-app and email notifications, audit logs, record archiving, and OAuth-secured MCP access for external AI apps"
    ],
    "approach": "Built with Next.js, TypeScript, MUI, PostgreSQL, and Drizzle ORM. Neon Auth and server-side role checks protect portal actions and MCP tools, while Google Drive and Forms use OAuth 2.0. An IndexedDB-backed queue handles resumable uploads with retry and recovery. Gemini powers grounded assistance and activity-design extraction, while Groq summarizes written evaluation feedback.",
    "liveUrl": "",
    "sourceUrl": "",
    "sourceIsExample": false
  },
  {
    "slug": "loxon",
    "name": "Loxon",
    "summary": "A company website with a separate content management dashboard.",
    "category": "Company website & admin platform",
    "year": "2026",
    "theme": "loxon",
    "images": [
    {
        "src": "/projects/loxon-homepage.png",
        "alt": "Loxon public website homepage"
    },
    {
        "src": "/projects/loxon-project-detail.png",
        "alt": "Loxon public website project details for Marco Polo Hotel"
    },
    {
        "src": "/projects/loxon-admin-projects.png",
        "alt": "Loxon admin project management with search, filters, ordering, and editing controls"
    },
    {
        "src": "/projects/loxon-admin-submissions.png",
        "alt": "Loxon admin contact submissions with private details blurred"
    }
],
    "description": "A public website and separate admin platform for Loxon Philippines, Inc., an engineering and construction company.",
    "brief": "The public website presents the company, projects, services, and careers. Staff manage its content and review submissions through an authenticated admin dashboard.",
    "tools": [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "MUI",
      "PostgreSQL",
      "Cloudinary",
      "Resend",
      "Redis"
    ],
    "features": [
      "Public company, project, service, and client pages",
      "Job listings and applications with CV submission",
      "Contact inquiries and email notifications",
      "Admin management of projects, galleries, services, clients, and jobs",
      "Drag-and-drop content ordering",
      "Authenticated admin access and rate-limited endpoints"
    ],
    "approach": "Built as two Next.js applications: the public website and an admin app backed by PostgreSQL. The website consumes content from the admin API. Signed Cloudinary uploads send images directly from the browser, while Resend delivers inquiry and application notifications. Upstash Redis applies rate limits to forms, login, and uploads. Public content responses use a short CDN cache, and admin requests bypass it to show current edits.",
    "liveUrl": "https://new.loxon.com.ph",
    "sourceUrl": "",
    "sourceIsExample": false
  },
{
  "slug": "skills-mds",
  "name": "Skills MDs",
  "summary": "Reusable guidance for UI design and backend decisions.",
  "category": "Agent skills & documentation",
  "year": "2026",
  "theme": "skills",
  "images": [] as { src: string; alt: string }[],
  "description": "A collection of Markdown skill files that turn my working principles into reusable guidance for coding agents.",
  "brief": "",
  "tools": [
    "Markdown",
    "Agent skills"
  ],
  "features": [],
  "approach": "",
  "liveUrl": "",
  "sourceUrl": "",
  "sourceIsExample": false
},
{
  "slug": "job-recommendation-model",
  "name": "Job Recommendation Model",
  "summary": "Decision tree job recommendations based on skill ratings.",
  "category": "Machine learning",
  "year": "2025",
  "theme": "skills",
  "images": [] as { src: string; alt: string }[],
  "description": "A Python decision tree model that ranks job recommendations based on 15 skill ratings.",
  "brief": "Full project details will be added later.",
  "tools": ["Python", "pandas", "NumPy", "scikit-learn", "joblib"],
  "features": ["Top five job recommendations ranked by model probability"],
  "approach": "",
  "liveUrl": "",
  "sourceUrl": "",
  "sourceIsExample": false
},
{
  "slug": "faculty-consultation-system",
  "name": "Faculty Consultation System",
  "summary": "A faculty consultation system for a college department.",
  "category": "Academic system",
  "year": "2025",
  "theme": "skills",
  "images": [] as { src: string; alt: string }[],
  "description": "A faculty consultation system for a college department.",
  "brief": "Full project details will be added later.",
  "tools": [] as string[],
  "features": [] as string[],
  "approach": "",
  "liveUrl": "",
  "sourceUrl": "",
  "sourceIsExample": false
},
{
  "slug": "compliance-face-recognition",
  "name": "Compliance System Face Recognition",
  "summary": "Face registration and recognition for compliance system users.",
  "category": "Machine learning contribution",
  "year": "2026",
  "theme": "skills",
  "images": [] as { src: string; alt: string }[],
  "description": "Contributed a Python face recognition API for user registration and identification within a compliance system.",
  "brief": "Full contribution details will be added later.",
  "tools": ["Python", "Flask", "DeepFace", "OpenCV", "NumPy", "MySQL"],
  "features": [
    "Face-based user identification",
    "Registration and updates of stored face data",
    "Checks for faces already registered to another account"
  ],
  "approach": "Integrated DeepFace's ArcFace model with MTCNN detection in a Flask API. The API averages face embeddings from multiple image frames, stores them in MySQL, and compares them using cosine similarity to find a matching user.",
  "liveUrl": "",
  "sourceUrl": "",
  "sourceIsExample": false
},
{
  "slug": "printing-services-pos",
  "name": "Printing Services POS",
  "summary": "A tablet-based point-of-sale system for a printing services client.",
  "category": "Freelance project",
  "year": "2026",
  "theme": "skills",
  "images": [] as { src: string; alt: string }[],
  "description": "A tablet-based point-of-sale system built for a freelance client offering printing services.",
  "brief": "Full project details will be added later.",
  "tools": [] as string[],
  "features": [] as string[],
  "approach": "",
  "liveUrl": "",
  "sourceUrl": "",
  "sourceIsExample": false
},
{
  "slug": "clinic-system",
  "name": "Clinic System",
  "summary": "A clinic system.",
  "category": "Healthcare system",
  "year": "2026",
  "theme": "skills",
  "images": [] as { src: string; alt: string }[],
  "description": "A clinic system. Full project details will be added later.",
  "brief": "",
  "tools": [] as string[],
  "features": [] as string[],
  "approach": "",
  "liveUrl": "",
  "sourceUrl": "",
  "sourceIsExample": false
},
{
  "slug": "worktrace",
  "name": "WorkTrace",
  "summary": "Assignment, location, and workflow tracking for engineers and supervisors.",
  "category": "Workforce management system",
  "year": "2026",
  "theme": "skills",
  "images": [] as { src: string; alt: string }[],
  "description": "A system for engineers and supervisors to track assignments and locations and manage workflows.",
  "brief": "Full project details will be added later.",
  "tools": [] as string[],
  "features": [] as string[],
  "approach": "",
  "liveUrl": "",
  "sourceUrl": "",
  "sourceIsExample": false
}
];
