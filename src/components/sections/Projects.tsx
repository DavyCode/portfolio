import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import SectionHeading from "../SectionHeading";

/** Real products, roles, and live links from the resume + notes. */
const PROJECTS: {
  title: string;
  role: string;
  description: string;
  tags: string[];
  href?: string;
}[] = [
  {
    title: "GradientFi",
    role: "Lead Software Engineer",
    description:
      "Cross-border liquidity infrastructure for commerce. Built CentryOS — programmable financial infrastructure for marketplaces.",
    tags: ["Infrastructure", "Cross-border", "Fintech"],
    href: "https://www.gradientfi.com/",
  },
  {
    title: "Prizeskout",
    role: "CTO",
    description:
      "AI shopping assistant comparing prices across 100+ stores, tracking price drops, and converting to 90+ currencies. Led architecture and the engineering team.",
    tags: ["AI", "E-commerce", "Architecture"],
    href: "https://www.prizeskout.com/",
  },
  {
    title: "Thrive Agric",
    role: "VP of Engineering",
    description:
      "Payments & crowdfunding platform that helped 100,000+ farmers access $100M+ in financing — serving 500,000+ monthly users.",
    tags: ["Agritech", "Crowdfunding", "Scale"],
    href: "https://thriveagric.com/",
  },
  {
    title: "Payfrontier · Volla",
    role: "CTO",
    description:
      "Built the company's payment infrastructure from the ground up to 20,000+ customers. Spun out Fybapay (agency banking & wallets), which grew into Volla.",
    tags: ["Payments", "Agency Banking", "Wallets"],
  },
  {
    title: "NRC Ticketing",
    role: "VP of Engineering",
    description:
      "The Nigerian Railway Corporation's e-ticketing platform for the Warri–Itakpe line — a national government project.",
    tags: ["GovTech", "Ticketing", "Payments"],
    href: "https://nrc-fane.ng/",
  },
  {
    title: "Bullion",
    role: "Software Engineer",
    description:
      "Global banking platform for startups. Led production financial services and kept the platform stable as it scaled.",
    tags: ["Banking", "Reliability", "Ops"],
    href: "https://getbullion.io/",
  },
  {
    title: "Awabah",
    role: "Platform Lead",
    description:
      "Micropensions for the unbanked and underbanked across emerging markets.",
    tags: ["Pensions", "Inclusion"],
    href: "https://awabah.com/",
  },
  {
    title: "Maxim",
    role: "Engineering Manager",
    description: "Credit cards for income earners and immigrants.",
    tags: ["Lending", "Credit"],
    href: "https://www.trymaxim.com/",
  },
  {
    title: "Crust MFB",
    role: "Software Engineer",
    description:
      "Personal and business digital banking for a licensed microfinance bank.",
    tags: ["Banking", "Microservices"],
    href: "https://www.crustmfb.com/",
  },
  {
    title: "Tradr",
    role: "Lead Software Engineer",
    description: "An online marketplace for agricultural inputs.",
    tags: ["Agritech", "Marketplace"],
    href: "https://mytradr.com/",
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
        Platforms I've led and shipped across payments, banking, lending,
        pensions, crowdfunding, commerce, and public transport.
      </motion.p>

      <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((p, i) => {
          const anim = {
            initial: { opacity: 0, y: 24 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true, margin: "-60px" },
            transition: { delay: (i % 3) * 0.06 },
          } as const;

          const inner = (
            <>
              <div className="mb-5 flex items-center justify-between">
                <span className="font-mono text-xs text-muted-foreground">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {p.href && (
                  <ArrowUpRight
                    size={18}
                    className="text-muted-foreground transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-foreground"
                  />
                )}
              </div>
              <h3 className="font-display text-2xl font-semibold tracking-tight">
                {p.title}
              </h3>
              <div className="mt-1 font-mono text-xs text-brand">{p.role}</div>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
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
            </>
          );

          const className =
            "group relative flex flex-col bg-background p-7 transition-colors hover:bg-muted/40";

          return p.href ? (
            <motion.a
              key={p.title}
              href={p.href}
              target="_blank"
              rel="noreferrer"
              className={className}
              {...anim}
            >
              {inner}
            </motion.a>
          ) : (
            <motion.div key={p.title} className={className} {...anim}>
              {inner}
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
