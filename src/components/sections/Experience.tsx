import { motion } from "framer-motion";
import SectionHeading from "../SectionHeading";

const ROLES = [
  {
    company: "Oragonlabs",
    role: "Chief Engineer & AI Researcher",
    period: "Jan 2026 – Present",
    location: "Nigeria & USA",
    points: [
      "Lead engineering and AI research at Oragonlabs, the infrastructure layer for private, sovereign AI that you own rather than rent.",
      "Built and published the product: a Python SDK and a Rust serving engine with continuous batching, chunked prefill and a shared prefix cache, handling 200,000 requests in 3.0 seconds, backed by 313 automated tests.",
      "Designed the licensing layer: Ed25519 signed licences, XChaCha20-Poly1305 sealed model weights that open only in memory, and a hash chained, tamper evident usage ledger, all working fully offline.",
    ],
  },
  {
    company: "ByteX Financial (formerly Cenne Financial)",
    role: "Senior Software Engineer, ByteX; VP of Engineering, Cenne Financial",
    period: "Apr 2026 – Present",
    location: "Canada · Remote",
    points: [
      "Builds services for ByteX's global payment and settlement infrastructure: cross-border collections, payouts, FX, payment routing and settlement across Canada, the United States, India and Africa.",
      "Previously led engineering at Cenne, the AI powered financial platform for SMBs in Canada and Africa, covering accounts, cross-border payments, cards and bookkeeping across 150+ countries.",
      "Carried the Cenne platform through its merger into ByteX, integrating it with ByteX's shared technology, compliance and liquidity foundation.",
    ],
  },
  {
    company: "Bullion",
    role: "Senior Software Engineer & VP of Engineering",
    period: "Aug 2025 – Mar 2026",
    location: "USA · Remote",
    points: [
      "Led development and architecture of high availability financial platform services, optimised for performance and reliability in production.",
      "Improved deployment stability through structured CI/CD and release controls, and implemented monitoring to enhance incident response.",
      "Provided technical leadership and mentorship, supporting engineers across distributed teams.",
    ],
  },
  {
    company: "TeflonHub",
    role: "Lead Platform Engineer",
    period: "Aug 2023 – Jul 2025",
    location: "Lagos, Nigeria · Remote",
    points: [
      "Led design and development of core application components across the full software development lifecycle, from design through deployment.",
      "Collaborated within an Agile Scrum team, working with the Scrum Master to estimate effort for new features.",
      "Ensured service stability, availability and scalability, managing releases, upgrades and performance across frontend and backend stacks.",
      "Mentored the engineering team on architectural best practices and distributed system design.",
    ],
  },
  {
    company: "Payfrontier LTD",
    role: "Senior Developer / CTO",
    period: "Jan 2020 – Jul 2023",
    location: "Abuja, Nigeria · Remote & Onsite",
    points: [
      "Architected a full stack fintech platform serving 20,000+ active customers across web and mobile channels.",
      "Designed a microservices ecosystem spanning web, mobile and administrative systems for the platform.",
      "Directed system wide performance optimisation and horizontal scalability planning across engineering teams.",
      "Led engineering vision, aligning business growth strategy with technical architecture decisions.",
    ],
  },
  {
    company: "Thrive Agric LTD",
    role: "Software Developer",
    period: "Feb 2018 – Dec 2019",
    location: "Abuja, Nigeria · Remote & Onsite",
    points: [
      "Built distributed APIs powering crowdfunding and payment platforms servicing 500,000+ monthly users.",
      "Architected backend modules and microservices supporting finance, operations, growth, capital allocation and user onboarding.",
      "Enforced system stability and high availability release cycles across national agricultural infrastructure.",
      "Managed, monitored and trained engineers across technology teams.",
    ],
  },
  {
    company: "UNESCO",
    role: "Software Engineer / Program Manager",
    period: "May 2016 – Jan 2018",
    location: "Abuja, Nigeria · Onsite",
    points: [
      "Delivered structured software architecture training to 400+ youths in partnership with Microsoft and UNESCO.",
      "Designed curriculum integrating scalable backend design principles and coordinated institutional level technology program implementation.",
    ],
  },
  {
    company: "Freelance",
    role: "Web Developer",
    period: "Nov 2014 – Apr 2016",
    location: "Remote",
    points: [
      "Developed custom web solutions for business clients based on specifications.",
      "Built and maintained a portfolio of applications consolidating data from multiple services.",
      "Managed all aspects of web application delivery, including design, testing, debugging and deployment.",
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative mx-auto max-w-4xl px-6 py-28 md:py-36"
    >
      <SectionHeading index="02" title="Experience" subtitle="Where I've worked" />

      <div className="space-y-4">
        {ROLES.map((r, i) => (
          <motion.div
            key={r.company}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: i * 0.05 }}
            className="group rounded-2xl border border-border bg-muted/20 p-6 transition-colors hover:border-foreground/30 md:p-8"
          >
            <div className="flex flex-col gap-1 md:flex-row md:items-center md:justify-between">
              <div>
                <h3 className="font-display text-xl font-semibold tracking-tight md:text-2xl">
                  {r.role}
                </h3>
                <div className="text-foreground/60">{r.company}</div>
              </div>
              <div className="font-mono text-xs text-muted-foreground md:text-right">
                <div>{r.period}</div>
                <div className="mt-0.5">{r.location}</div>
              </div>
            </div>
            <ul className="mt-4 space-y-2 text-sm leading-relaxed text-muted-foreground">
              {r.points.map((p, j) => (
                <li key={j} className="flex gap-3">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brand" />
                  {p}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
