import { motion } from "framer-motion";
import SectionHeading from "../SectionHeading";

const SKILLS = [
  "JavaScript",
  "TypeScript",
  "Node.js",
  "Java",
  "Python",
  "Rust",
  "React.js",
  "React Native",
  "Express.js",
  "Spring Boot",
  "REST",
  "GraphQL",
  "PostgreSQL",
  "MongoDB",
  "Redis",
  "Kafka",
  "AWS",
  "GCP",
  "Docker",
  "Kubernetes",
  "Terraform",
  "CI/CD",
  "TDD",
];

const STATS = [
  { value: "11+", label: "Years experience" },
  { value: "500K+", label: "Monthly users served" },
  { value: "200K", label: "Requests in 3.0s on my Rust serving engine" },
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
            I'm a software engineer with <span className="text-foreground">11+ years</span> building and shipping <span className="text-foreground">secure, production software</span> across fintech, agritech and public sector platforms, from web and mobile applications to distributed backend services and AI infrastructure.
          </p>
          <p>
            I'm comfortable across <span className="text-foreground">Node.js, TypeScript, Java, Python and Rust</span>, with hands-on cloud, DevOps and database experience. Most recently I built a Python SDK and a Rust serving engine for private AI, handling 200,000 requests in 3.0 seconds.
          </p>
          <p>
            I deliver in Agile teams, remote or onsite, write maintainable code, and mentor other engineers.
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
