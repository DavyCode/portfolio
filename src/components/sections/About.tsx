import { motion } from "framer-motion";
import SectionHeading from "../SectionHeading";

const SKILLS = [
  "Kotlin",
  "Coroutines",
  "Ktor",
  "Spring Boot",
  "PHP 8",
  "Laravel",
  "Java",
  "TypeScript",
  "Python",
  "Rust",
  "REST",
  "GraphQL",
  "Kafka",
  "PostgreSQL",
  "MySQL",
  "Redis",
  "JUnit",
  "MockK",
  "PHPUnit",
  "AWS",
  "GCP",
  "Docker",
  "Kubernetes",
  "Terraform",
  "CI/CD",
  "Domain-Driven Design",
];

const STATS = [
  { value: "11+", label: "Years experience" },
  { value: "500K+", label: "Monthly users served" },
  { value: "150+", label: "Countries on the Cenne platform" },
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
            I'm a backend engineer with <span className="text-foreground">11+ years</span> building <span className="text-foreground">payment, settlement and financial platforms</span>, now focused on <span className="text-foreground">Kotlin and PHP</span>.
          </p>
          <p>
            I design and run Kotlin services on Spring Boot and Ktor, using coroutines for high-throughput I/O, and build PHP 8 and Laravel APIs for product and back-office systems. At ByteX I build the Kotlin services behind cross-border collections, payouts, FX and settlement across Canada, the United States, India and Africa.
          </p>
          <p>
            I work with PostgreSQL, MySQL, Redis and Kafka, deployed on AWS and GCP through Docker, Kubernetes and CI/CD — and I care about <span className="text-foreground">transaction integrity, reliability and clean service boundaries</span>.
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
