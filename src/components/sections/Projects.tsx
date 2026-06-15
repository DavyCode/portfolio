import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import SectionHeading from "../SectionHeading";

/** Real products from the resume. Add live URLs in `href` when available. */
const PROJECTS = [
  {
    title: "Bullion",
    description:
      "Global banking platform for startups — high-availability financial services in production.",
    tags: ["Fintech", "Node.js", "CI/CD"],
    href: "#",
  },
  {
    title: "NRC e-Ticketing",
    description:
      "Nigerian Railway Corporation Warri–Itakpe e-ticketing and payments platform.",
    tags: ["Payments", "Ticketing"],
    href: "#",
  },
  {
    title: "Thrive Agric",
    description:
      "Access to finance and premium markets for farmers — APIs serving 500,000+ monthly users.",
    tags: ["Fintech", "Scale", "Microservices"],
    href: "#",
  },
  {
    title: "Maxim",
    description:
      "Flexible credit cards built for immigrants — onboarding and credit infrastructure.",
    tags: ["Fintech", "Credit"],
    href: "#",
  },
  {
    title: "Crust MFB",
    description: "Personal and business banking for a licensed microfinance bank.",
    tags: ["Banking", "Microservices"],
    href: "#",
  },
  {
    title: "Volla",
    description: "Payment platform ecosystem connecting users and businesses.",
    tags: ["Payments", "Platform"],
    href: "#",
  },
  {
    title: "Awabah",
    description:
      "Financial security for the unbanked and underbanked across emerging markets.",
    tags: ["Fintech", "Inclusion"],
    href: "#",
  },
  {
    title: "Tradr",
    description: "An e-commerce marketplace for agricultural input sales and purchases.",
    tags: ["E-commerce", "Marketplace"],
    href: "#",
  },
  {
    title: "Prizeskout",
    description: "An online shopping assistant and companion for smarter purchases.",
    tags: ["React", "Node.js"],
    href: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-28 md:py-36">
      <SectionHeading
        index="03"
        title="Selected Work"
        subtitle="Things I've built"
      />
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="-mt-8 mb-14 max-w-xl text-muted-foreground"
      >
        Platforms I've architected and shipped across fintech, agritech,
        e-commerce, and public transport.
      </motion.p>

      <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((p, i) => (
          <motion.a
            key={p.title}
            href={p.href}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ delay: (i % 3) * 0.06 }}
            className="group relative flex flex-col bg-background p-7 transition-colors hover:bg-muted/40"
          >
            <div className="mb-5 flex items-center justify-between">
              <span className="font-mono text-xs text-muted-foreground">
                {String(i + 1).padStart(2, "0")}
              </span>
              <ArrowUpRight
                size={18}
                className="text-muted-foreground transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-foreground"
              />
            </div>
            <h3 className="font-display text-2xl font-semibold tracking-tight">
              {p.title}
            </h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
              {p.description}
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-md bg-accent px-2.5 py-1 font-mono text-[11px] text-foreground/70"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
