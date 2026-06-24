"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export type ContactFormState = {
  success: boolean;
  message: string;
};

const contactFormInitialState: ContactFormState = {
  success: false,
  message: "",
};

const skills = {
  frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  backend: ["Node.js", "Express", "Prisma", "InsightFace"],
  database: ["PostgreSQL", "MongoDB", "MySQL"],
  tools: ["Git", "Docker", "Postman", "AWS", "WordPress", "Nginx"],
};

const services = [
  {
    title: "Website Development",
    description:
      "Professional websites for businesses and organizations that need clarity, speed, and trust.",
  },
  {
    title: "Admin Dashboards",
    description:
      "Custom dashboards to manage users, data, approvals, and internal workflows.",
  },
  {
    title: "Custom Web Applications",
    description:
      "End-to-end software solutions built around specific operational or customer needs.",
  },
  {
    title: "API Development",
    description:
      "Secure backend systems, integrations, and automation layers that keep products reliable.",
  },
];

const projects = [
  {
    name: "SecureInk",
    category: "Document Security Platform",
    tagline: "Secure document workflows for teams that need trust and speed.",
    image: "/Secureink.png",
    github: "https://github.com/Siddharthpo03/SecureInk",
    liveDemo: "https://secure-ink-ivory.vercel.app/",
    problem: "Make document signing faster, safer, and easier to manage.",
    features: [
      "Authentication and role-based access",
      "Document workflows and signature tracking",
      "PDF management and approval flow",
    ],
    stack: ["Next.js", "TypeScript", "Node.js", "PostgreSQL"],
  },
  {
    name: "InClass",
    category: "Smart Attendance System",
    tagline: "Attendance verification designed for modern classrooms.",
    image: "/InClass.png",
    github: "https://github.com/Siddharthpo03/InClass",
    liveDemo: "https://inclass.siddharthp.com",
    problem:
      "Improve attendance accuracy with a smarter verification workflow.",
    features: [
      "AI-powered geofenced attendance",
      "Facial recognition and biometric checks",
      "Real-time class participation tracking",
    ],
    stack: [
      "React",
      "Node.js",
      "AI Services",
      "PostgreSQL",
      "Socket.io",
      "AWS",
      "InsightFace",
    ],
  },
  {
    name: "ControlDesk",
    category: "Remote Access Platform",
    tagline: "Secure remote control built for mobile-first access.",
    image: "/ControlDesk.png",
    github: "https://github.com/Siddharthpo03/ControlDesk",
    liveDemo: "https://controldesk-demo.com",
    problem: "Provide secure remote desktop access from mobile devices.",
    features: [
      "Secure mobile-to-desktop control",
      "Low-friction access management",
      "Remote session orchestration",
    ],
    stack: ["Next.js", "Node.js", "WebSockets", "PostgreSQL"],
  },
  {
    name: "Docsync",
    category: "Hospital Management System",
    tagline: "Smart Hospital Management System for Educational Campuses.",
    image: "/DocSync.png",
    github: "https://github.com/Siddharthpo03/DocSync",
    liveDemo: "https://docsync.siddharthp.com",
    problem:
      "DocSync centralizes campus healthcare workflows so students, healthcare staff, doctors, and administrators can manage care in one secure system.",
    features: [
      "Student health record management",
      "Appointment scheduling and patient status updates",
      "Doctor, staff, and role-based access control",
      "Prescription management and medical history tracking",
      "Emergency contact and health profile management",
      "Administrative dashboard and analytics",
    ],
    stack: ["React", "Node.js", "Express.js", "PostgreSQL", "AWS"],
  },
];

const whyWorkWithMe = [
  {
    title: "End-to-End Development",
    description:
      "From frontend interfaces to backend APIs, databases, authentication, and deployment, I build complete products from concept to production.",
    icon: FullStackIcon,
  },
  {
    title: "Real-World Problem Solving",
    description:
      "Experience building document signing platforms, attendance systems, hospital management software, and remote desktop applications designed around actual user needs.",
    icon: SolutionIcon,
  },
  {
    title: "Security & Scalability",
    description:
      "Strong focus on secure authentication, role-based access control, database design, API architecture, and building systems that can grow with users.",
    icon: SecurityIcon,
  },
];

const itemFade = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0 },
};

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="max-w-2xl">
      <p className="text-sm font-semibold uppercase tracking-[0.24em] text-zinc-500">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl">
        {title}
      </h2>
      <p className="mt-4 text-base leading-7 text-zinc-600 sm:text-lg">
        {description}
      </p>
    </div>
  );
}

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-zinc-200 bg-white px-3 py-1 text-sm font-medium text-zinc-700 shadow-[0_1px_2px_rgba(15,23,42,0.04)]">
      {children}
    </span>
  );
}

function IconShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/70 bg-white/85 text-zinc-950 shadow-[0_14px_35px_rgba(15,23,42,0.08)] backdrop-blur">
      {children}
    </div>
  );
}

function FullStackIcon() {
  return (
    <IconShell>
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="h-6 w-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M4 7.5 12 3l8 4.5-8 4.5L4 7.5Z" />
        <path d="M4 12 12 16.5 20 12" />
        <path d="M4 16.5 12 21l8-4.5" />
      </svg>
    </IconShell>
  );
}

function SolutionIcon() {
  return (
    <IconShell>
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="h-6 w-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M9 18h6" />
        <path d="M10 22h4" />
        <path d="M12 2a6 6 0 0 0-3 11.2V15h6v-1.8A6 6 0 0 0 12 2Z" />
        <path d="M10.5 11.5 12 13l3-3" />
      </svg>
    </IconShell>
  );
}

function SecurityIcon() {
  return (
    <IconShell>
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="h-6 w-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 2 4.5 5.5v6.2c0 4.7 3.1 8.9 7.5 10.3 4.4-1.4 7.5-5.6 7.5-10.3V5.5L12 2Z" />
        <path d="M9.5 12.2 11.2 14l3.7-4" />
      </svg>
    </IconShell>
  );
}

function ProjectCard({
  name,
  category,
  tagline,
  image,
  github,
  liveDemo,
  problem,
  features,
  stack,
  metrics,
  detailsLink,
  sourceLabel = "GitHub",
  detailsLabel = "Live Demo",
}: {
  name: string;
  category: string;
  tagline: string;
  image: string;
  github: string;
  liveDemo: string;
  problem: string;
  features: string[];
  stack: string[];
  metrics?: { label: string; value: string }[];
  detailsLink?: string;
  sourceLabel?: string;
  detailsLabel?: string;
}) {
  const hasImage = image.length > 0;
  const detailsHref = detailsLink ?? liveDemo;
  const isExternalDetails = detailsHref.startsWith("http");

  return (
    <motion.article
      variants={itemFade}
      className="overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.06)]"
    >
      <div className="grid gap-0 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="relative min-h-[260px] overflow-hidden border-b border-zinc-200 bg-zinc-100 lg:border-b-0 lg:border-r">
          {hasImage ? (
            <Image
              src={image}
              alt={`${name} screenshot`}
              fill
              priority={name === "SecureInk"}
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
              style={{
                objectPosition: name === "SecureInk" ? "0% center" : "center",
              }}
            />
          ) : (
            <div className="flex h-full min-h-[260px] flex-col justify-between bg-[radial-gradient(circle_at_top_left,rgba(15,23,42,0.16),transparent_35%),linear-gradient(135deg,#fafafa_0%,#f4f4f5_45%,#e4e4e7_100%)] p-6 sm:p-8">
              <div className="flex items-center justify-between gap-3">
                <span className="rounded-full border border-zinc-300 bg-white/90 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-600">
                  {category}
                </span>
                <span className="rounded-full bg-zinc-950 px-3 py-1 text-xs font-medium text-white">
                  Featured
                </span>
              </div>

              <div>
                <p className="max-w-sm text-sm leading-6 text-zinc-600">
                  {tagline}
                </p>
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {metrics?.map((metric) => (
                    <div
                      key={metric.label}
                      className="rounded-2xl border border-white/70 bg-white/80 p-4 shadow-[0_12px_35px_rgba(15,23,42,0.08)] backdrop-blur"
                    >
                      <p className="text-2xl font-semibold tracking-tight text-zinc-950">
                        {metric.value}
                      </p>
                      <p className="mt-1 text-sm text-zinc-600">
                        {metric.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/10 via-transparent to-transparent" />
        </div>

        <div className="p-6 sm:p-8">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">
                {category}
              </p>
              <h3 className="mt-2 text-2xl font-semibold tracking-tight text-zinc-950">
                {name}
              </h3>
              <p className="mt-2 text-sm leading-6 text-zinc-600">{tagline}</p>
            </div>
            <span className="rounded-full bg-zinc-950 px-3 py-1 text-xs font-medium text-white">
              Live systems
            </span>
          </div>

          <p className="mt-5 text-base leading-7 text-zinc-600">{problem}</p>

          <div className="mt-6">
            <p className="text-sm font-semibold text-zinc-900">Key features</p>
            <ul className="mt-3 space-y-3 text-sm leading-6 text-zinc-600">
              {features.map((feature) => (
                <li key={feature} className="flex gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-zinc-900" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {stack.map((item) => (
              <Badge key={item}>{item}</Badge>
            ))}
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 items-center justify-center rounded-full bg-zinc-950 px-5 text-sm font-medium text-white transition hover:bg-zinc-800"
            >
              {sourceLabel}
            </a>
            <a
              href={detailsHref}
              target={isExternalDetails ? "_blank" : undefined}
              rel={isExternalDetails ? "noopener noreferrer" : undefined}
              className="inline-flex h-11 items-center justify-center rounded-full border border-zinc-300 bg-white px-5 text-sm font-medium text-zinc-900 transition hover:border-zinc-400 hover:bg-zinc-50"
            >
              {detailsLabel}
            </a>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export default function PortfolioPage() {
  const [isPending, setIsPending] = useState(false);
  const [contactState, setContactState] = useState<ContactFormState>(
    contactFormInitialState,
  );

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsPending(true);
    setContactState({ success: false, message: "" });

    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const projectType = String(formData.get("projectType") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();

    if (!name || !email || !projectType || !message) {
      setContactState({
        success: false,
        message: "Please fill in every field before sending.",
      });
      setIsPending(false);
      return;
    }

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setContactState({
          success: true,
          message: "Your message was sent successfully. I will reply soon.",
        });
        event.currentTarget.reset();
      } else {
        setContactState({
          success: false,
          message: data.message || "Something went wrong. Please try again.",
        });
      }
    } catch {
      setContactState({
        success: false,
        message: "An error occurred. Please try again later.",
      });
    } finally {
      setIsPending(false);
    }
  };

  return (
    <main className="relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 -z-10 h-[36rem] bg-[radial-gradient(circle_at_top,rgba(15,23,42,0.08),transparent_60%)]" />

      <header className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-6 sm:px-8 lg:px-10">
        <a
          href="#top"
          className="text-sm font-semibold tracking-tight text-zinc-950"
        >
          Siddharth Pulugujja
        </a>
        <nav className="hidden items-center gap-6 text-sm text-zinc-600 md:flex">
          <a href="#services" className="transition hover:text-zinc-950">
            Services
          </a>
          <a href="#projects" className="transition hover:text-zinc-950">
            Projects
          </a>
          <a href="#contact" className="transition hover:text-zinc-950">
            Contact
          </a>
        </nav>
      </header>

      <section
        id="top"
        className="mx-auto w-full max-w-7xl px-6 pb-20 pt-10 sm:px-8 lg:px-10 lg:pb-28 lg:pt-14"
      >
        <div className="grid items-start gap-16 lg:grid-cols-[1.2fr_0.8fr] lg:gap-12">
          <motion.div
            initial="hidden"
            animate="show"
            variants={{ show: { transition: { staggerChildren: 0.08 } } }}
            className="max-w-3xl"
          >
            <motion.div variants={itemFade} className="flex flex-wrap gap-2">
              <Badge>NIT Warangal</Badge>
              <Badge>React</Badge>
              <Badge>Node.js</Badge>
              <Badge>PostgreSQL</Badge>
              <Badge>TypeScript</Badge>
            </motion.div>

            <motion.p
              variants={itemFade}
              className="mt-8 text-sm font-semibold uppercase tracking-[0.24em] text-zinc-500"
            >
              Freelance Full Stack Developer
            </motion.p>
            <motion.h1
              variants={itemFade}
              className="mt-5 text-5xl font-semibold tracking-tight text-zinc-950 sm:text-6xl lg:text-7xl"
            >
              Full Stack Developer Building Software That Solves Real Problems
            </motion.h1>
            <motion.p
              variants={itemFade}
              className="mt-6 max-w-2xl text-lg leading-8 text-zinc-600 sm:text-xl"
            >
              I help startups, businesses, and organizations build web
              applications, dashboards, automation tools, and secure digital
              platforms.
            </motion.p>

            <motion.div
              variants={itemFade}
              className="mt-8 flex flex-col gap-3 sm:flex-row"
            >
              <a
                href="#projects"
                className="inline-flex h-12 items-center justify-center rounded-full bg-zinc-950 px-6 text-sm font-medium text-white transition hover:bg-zinc-800"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="inline-flex h-12 items-center justify-center rounded-full border border-zinc-300 bg-white px-6 text-sm font-medium text-zinc-900 transition hover:border-zinc-400 hover:bg-zinc-50"
              >
                Hire Me
              </a>
            </motion.div>

            <motion.div
              variants={itemFade}
              className="mt-10 grid gap-4 sm:grid-cols-3"
            >
              {[
                [
                  "Secure systems",
                  "Built for products that need trust and scale.",
                ],
                [
                  "Business focused",
                  "Designed to convert visitors into inquiries.",
                ],
                ["Fast delivery", "Minimal, practical, and easy to maintain."],
              ].map(([title, copy]) => (
                <div
                  key={title}
                  className="rounded-2xl border border-zinc-200 bg-white p-4 shadow-[0_10px_30px_rgba(15,23,42,0.04)]"
                >
                  <p className="text-sm font-semibold text-zinc-950">{title}</p>
                  <p className="mt-2 text-sm leading-6 text-zinc-600">{copy}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.aside
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="rounded-[2rem] border border-zinc-200 bg-white p-6 shadow-[0_24px_80px_rgba(15,23,42,0.08)]"
          >
            <div className="rounded-[1.5rem] border border-zinc-200 bg-zinc-50 p-5">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">
                About
              </p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-zinc-950">
                Siddharth Pulugujja
              </h2>
              <p className="mt-4 text-sm leading-7 text-zinc-600">
                Computer Science student at NIT Warangal with experience
                building full-stack applications, secure authentication systems,
                attendance platforms, remote desktop solutions, and business
                software.
              </p>
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {[
                ["Web apps", "Founder-ready experiences"],
                ["Dashboards", "Clear data operations"],
                ["APIs", "Secure integrations"],
                ["Automation", "Practical workflow tools"],
              ].map(([label, detail]) => (
                <div
                  key={label}
                  className="rounded-2xl border border-zinc-200 p-4"
                >
                  <p className="text-sm font-semibold text-zinc-950">{label}</p>
                  <p className="mt-1 text-sm text-zinc-600">{detail}</p>
                </div>
              ))}
            </div>
          </motion.aside>
        </div>
      </section>

      <section
        id="projects"
        className="mx-auto w-full max-w-7xl px-6 py-20 sm:px-8 lg:px-10"
      >
        <SectionHeading
          eyebrow="Featured Projects"
          title="Selected work that shows product thinking, not just visuals."
          description="Each project below reflects a specific business problem, the system behind it, and the outcome it was designed to support."
        />

        <div className="mt-10 space-y-6">
          {projects.map((project) => (
            <ProjectCard key={project.name} {...project} />
          ))}
        </div>
      </section>

      <section
        id="why-work-with-me"
        className="mx-auto w-full max-w-7xl px-6 py-20 sm:px-8 lg:px-10"
      >
        <SectionHeading
          eyebrow="Why Work With Me"
          title="More than just code. I focus on building reliable, scalable software that solves real-world problems."
          description="A recruiter-friendly snapshot of the engineering strengths I bring to every product, from architecture to delivery."
        />

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={{ show: { transition: { staggerChildren: 0.08 } } }}
          className="mt-10 grid gap-5 lg:grid-cols-3"
        >
          {whyWorkWithMe.map((item) => {
            const Icon = item.icon;

            return (
              <motion.article
                key={item.title}
                variants={itemFade}
                className="group relative overflow-hidden rounded-3xl border border-white/70 bg-white/75 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-zinc-300 hover:shadow-[0_26px_70px_rgba(15,23,42,0.12)]"
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(15,23,42,0.08),transparent_40%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="relative">
                  <div className="flex items-center gap-4">
                    <Icon />
                    <div>
                      <h3 className="text-xl font-semibold tracking-tight text-zinc-950">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-sm uppercase tracking-[0.18em] text-zinc-500">
                        Professional Advantage
                      </p>
                    </div>
                  </div>

                  <p className="mt-5 text-sm leading-7 text-zinc-600 sm:text-[15px]">
                    {item.description}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </section>

      <section
        id="services"
        className="mx-auto w-full max-w-7xl px-6 py-20 sm:px-8 lg:px-10"
      >
        <SectionHeading
          eyebrow="Services"
          title="Built to help founders launch, improve, and scale digital products."
          description="A focused service set for teams that want a clean website, a usable dashboard, or a custom system that removes operational friction."
        />

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={{ show: { transition: { staggerChildren: 0.08 } } }}
          className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4"
        >
          {services.map((service) => (
            <motion.article
              key={service.title}
              variants={itemFade}
              className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.05)]"
            >
              <h3 className="text-xl font-semibold tracking-tight text-zinc-950">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-zinc-600">
                {service.description}
              </p>
            </motion.article>
          ))}
        </motion.div>
      </section>

      <section
        id="contact"
        className="mx-auto w-full max-w-7xl px-6 py-20 sm:px-8 lg:px-10"
      >
        <div className="grid gap-8 rounded-[2rem] border border-zinc-200 bg-white p-6 shadow-[0_24px_80px_rgba(15,23,42,0.08)] lg:grid-cols-[0.95fr_1.05fr] lg:p-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-zinc-500">
              Contact
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl">
              Let&apos;s Build Something Together
            </h2>
            <p className="mt-4 max-w-xl text-base leading-7 text-zinc-600">
              Email me if you need a website, dashboard, admin panel, or custom
              web application that is clean, secure, and ready to support the
              business.
            </p>

            <div className="mt-8 space-y-3 text-sm text-zinc-700">
              <p>
                Email:{" "}
                <a
                  className="font-medium text-zinc-950 hover:underline"
                  href="mailto:contact@siddharthp.com"
                >
                  contact@siddharthp.com
                </a>
              </p>
              <p>Phone: +91 9154750857</p>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="grid gap-4 rounded-[1.5rem] border border-zinc-200 bg-zinc-50 p-5 sm:p-6"
          >
            <input
              type="hidden"
              name="access_key"
              value={process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || "REPLACE_WITH_WEB3FORMS_ACCESS_KEY"}
            />
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="grid gap-2 text-sm font-medium text-zinc-700">
                Name
                <input
                  name="name"
                  autoComplete="name"
                  className="h-12 rounded-2xl border border-zinc-200 bg-white px-4 text-zinc-950 outline-none transition placeholder:text-zinc-400 focus:border-zinc-400"
                  placeholder="Your name"
                />
              </label>
              <label className="grid gap-2 text-sm font-medium text-zinc-700">
                Email
                <input
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="h-12 rounded-2xl border border-zinc-200 bg-white px-4 text-zinc-950 outline-none transition placeholder:text-zinc-400 focus:border-zinc-400"
                  placeholder="you@company.com"
                />
              </label>
            </div>

            <label className="grid gap-2 text-sm font-medium text-zinc-700">
              Project Type
              <input
                name="projectType"
                className="h-12 rounded-2xl border border-zinc-200 bg-white px-4 text-zinc-950 outline-none transition placeholder:text-zinc-400 focus:border-zinc-400"
                placeholder="Website, dashboard, admin panel, app..."
              />
            </label>

            <label className="grid gap-2 text-sm font-medium text-zinc-700">
              Message
              <textarea
                name="message"
                rows={5}
                className="rounded-2xl border border-zinc-200 bg-white px-4 py-3 text-zinc-950 outline-none transition placeholder:text-zinc-400 focus:border-zinc-400"
                placeholder="Tell me about your project, timeline, and goals."
              />
            </label>

            <div className="flex flex-col gap-3 sm:flex-row">
              <button
                type="submit"
                className="inline-flex h-12 items-center justify-center rounded-full bg-zinc-950 px-6 text-sm font-medium text-white transition hover:bg-zinc-800"
              >
                {isPending ? "Sending..." : "Send Inquiry"}
              </button>
              <a
                href="tel:+91 9154750857"
                className="inline-flex h-12 items-center justify-center rounded-full border border-zinc-300 bg-white px-6 text-sm font-medium text-zinc-900 transition hover:border-zinc-400 hover:bg-zinc-50"
              >
                Call Now
              </a>
            </div>

            <p
              className={`text-sm ${contactState.success ? "text-emerald-700" : "text-zinc-600"}`}
            >
              {contactState.message}
            </p>
          </form>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-6 pb-20 sm:px-8 lg:px-10">
        <SectionHeading
          eyebrow="Skills"
          title="The stack I use to build reliable product experiences."
          description="No percentage bars. Just the tools and layers I work with to ship usable, maintainable software."
        />

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {Object.entries(skills).map(([label, items]) => (
            <div
              key={label}
              className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.05)]"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">
                {label}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {items.map((item) => (
                  <Badge key={item}>{item}</Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-zinc-200 bg-white">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-2 px-6 py-8 text-sm text-zinc-500 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-10">
          <p className="font-medium text-zinc-900">Siddharth Pulugujja</p>
          <p>Full Stack Developer · NIT Warangal</p>
        </div>
      </footer>
    </main>
  );
}
