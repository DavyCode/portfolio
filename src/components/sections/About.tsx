import { motion } from "framer-motion";
import SectionHeading from "../SectionHeading";

const SKILLS = [
  "JavaScript",
  "TypeScript",
  "Java",
  "Node.js",
  "Express.js",
  "React.js",
  "Redux",
  "React Native",
  "GraphQL",
  "PostgreSQL",
  "MongoDB",
  "Redis",
  "AWS",
  "GCP",
  "Docker",
  "Kubernetes",
  "Terraform",
  "CI/CD",
  "Microservices",
  "Domain-Driven Design",
];

const STATS = [
  { value: "7+", label: "Years experience" },
  { value: "5M+", label: "Monthly active users served" },
  { value: "$100M+", label: "Financing enabled at Thrive Agric" },
];

export default function About() {
  return (
    <section id="about" className="relative mx-auto max-w-5xl px-6 py-28 md:py-36">
      <SectionHeading index="01" title="About" subtitle="A bit about me" />

      <div className="grid gap-10 md:grid-cols-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-6 text-lg leading-relaxed text-muted-foreground md:col-span-3"
        >
          <p>
            I've spent the last{" "}
            <span className="text-foreground">7 years</span> building financial
            platforms across{" "}
            <span className="text-foreground">
              payments, banking, lending, pensions, and crowdfunding
            </span>{" "}
            — and the systems behind commerce, agriculture, and public transport.
            I've held the technical lead, from{" "}
            <span className="text-foreground">CTO and VP of Engineering</span> to
            Engineering Manager and Platform Lead.
          </p>
          <p>
            I architect distributed microservices and the infrastructure that
            keeps money moving. At Thrive Agric I led the payments and
            crowdfunding platform that helped{" "}
            <span className="text-foreground">100,000+ farmers</span> access
            $100M+ in financing; at Payfrontier I built payment infrastructure
            from the ground up to 20,000+ customers.
          </p>
          <p>
            I care about backend discipline: enforcing API contracts, defining
            clean domain boundaries, and preventing architectural drift through
            structured design governance — while leading and mentoring
            cross-functional teams across distributed settings.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-3 gap-4 md:col-span-2 md:grid-cols-1"
        >
          {STATS.map((s) => (
            <div
              key={s.label}
              className="rounded-xl border border-border bg-muted/30 p-5"
            >
              <div className="font-display text-3xl font-semibold tracking-tight md:text-4xl">
                {s.value}
              </div>
              <div className="mt-1 text-xs text-muted-foreground md:text-sm">
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="mt-14"
      >
        <div className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
          Toolbox
        </div>
        <ul className="flex flex-wrap gap-2.5">
          {SKILLS.map((s) => (
            <li
              key={s}
              className="rounded-md border border-border px-3 py-1.5 text-sm text-foreground/80 transition-colors hover:border-foreground/40 hover:text-foreground"
            >
              {s}
            </li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
}
