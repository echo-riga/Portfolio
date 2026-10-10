// Replace these sample values with your own details before publishing.
export const portfolio = {
  name: "Jericho Riga",
  nickname: "echo",
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
    "summary": "University training requests, approvals, and reporting.",
    "category": "Training requisition system",
    "year": "2026",
    "theme": "leaprs",
    "images": [
    {
        "src": "/projects/leaprs-dashboard.svg",
        "alt": "LEAPRS dashboard placeholder preview"
    },
    {
        "src": "/projects/leaprs-requests.svg",
        "alt": "LEAPRS requests placeholder preview"
    },
    {
        "src": "/projects/leaprs-reports.svg",
        "alt": "LEAPRS reports placeholder preview"
    }
],
    "description": "A university training requisition system that digitizes PPMP and AIP-based institutional training workflows.",
    "brief": "Employees submit training requests, while authorized staff manage training plans, track request status, and review institutional reports.",
    "tools": [
      "Next.js",
      "TypeScript",
      "MUI",
      "PostgreSQL",
      "Drizzle ORM",
      "Neon Auth",
      "Google APIs",
      "MCP"
    ],
    "features": [
      "Role-based access for employees and administrators",
      "Training plans, requisitions, and request status timelines",
      "Dashboards, analytics, reports, and Excel exports",
      "Audit logs and email notifications",
      "Google Drive attachments and Google Forms evaluations",
      "MCP tools for AI app integration"
    ],
    "approach": "Built with Next.js and a PostgreSQL database accessed through Drizzle ORM. Neon Auth provides application sessions, while role-based checks control access to requests and tools. Google API access uses OAuth 2.0. A custom TypeScript upload queue persists tasks in IndexedDB and supports resumable Google Drive uploads with retries and exponential backoff. The MCP integration implements consent, authorization codes with PKCE, access tokens, and refresh tokens.",
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
        "src": "/projects/loxon-home.png",
        "alt": "Loxon public website homepage"
    },
    {
        "src": "/projects/loxon-projects-content.png",
        "alt": "Loxon project listings"
    },
    {
        "src": "/projects/loxon-services-content.png",
        "alt": "Loxon products and services"
    },
    {
        "src": "/projects/loxon-careers-content.png",
        "alt": "Loxon careers and job listings"
    },
    {
        "src": "/projects/loxon-company-content.png",
        "alt": "Loxon company overview"
    },
    {
        "src": "/projects/loxon-membership-content.png",
        "alt": "Loxon company memberships"
    },
    {
        "src": "/projects/loxon-contact-content.png",
        "alt": "Loxon contact page"
    },
    {
        "src": "/projects/loxon-admin.svg",
        "alt": "Loxon admin dashboard placeholder preview"
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
}
];
