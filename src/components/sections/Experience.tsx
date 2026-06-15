import { motion } from "framer-motion";
import SectionHeading from "../SectionHeading";

const ROLES = [
  {
    company: "Bullion",
    role: "Software Developer",
    period: "Aug 2025 — Present",
    location: "USA · Remote",
    points: [
      "Led development of high-availability financial platform services in production.",
      "Architected scalable backend systems optimized for performance and reliability.",
      "Improved deployment stability via structured CI/CD and release controls.",
    ],
  },
  {
    company: "TeflonHub",
    role: "Lead Platform Engineer",
    period: "Aug 2023 — Feb 2025",
    location: "Lagos, Nigeria · Remote",
    points: [
      "Led design and development of core application components across the full SDLC.",
      "Ensured service stability, scalability, and performance across front- and back-end stacks.",
      "Mentored the engineering team on architectural best practices and distributed system design.",
    ],
  },
  {
    company: "Payfrontier LTD",
    role: "Senior Developer / CTO",
    period: "Jan 2019 — 2023",
    location: "Abuja, Nigeria · Remote & Onsite",
    points: [
      "Architected a full-stack fintech platform serving 20,000+ active customers.",
      "Designed a microservices ecosystem across web, mobile, and administrative systems.",
      "Led engineering vision, aligning business growth with technical architecture.",
    ],
  },
  {
    company: "Thrive Agric LTD",
    role: "Software Developer",
    period: "Feb 2018 — 2022",
    location: "Abuja, Nigeria · Remote & Onsite",
    points: [
      "Built distributed APIs powering crowdfunding and payment platforms for 500,000+ monthly users.",
      "Designed microservices for capital allocation, user onboarding, and transaction processing.",
      "Managed, monitored, and trained engineers across technology teams.",
    ],
  },
  {
    company: "UNESCO",
    role: "Software Engineer / Program Manager",
    period: "May 2016 — Oct 2019",
    location: "Abuja, Nigeria · Onsite",
    points: [
      "Delivered structured software architecture training to 400+ youths with Microsoft & UNESCO.",
      "Designed curriculum integrating scalable backend design principles.",
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
