import { motion } from "framer-motion";
import { ArrowUpRight, Linkedin, Mail, Phone, Plus } from "lucide-react";

const SOCIALS = [
  { label: "Email", href: "mailto:paul.azemoh@gmail.com", Icon: Mail },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/dazemoh",
    Icon: Linkedin,
  },
  { label: "Phone", href: "tel:+2348132078657", Icon: Phone },
];

export default function Contact() {
  return (
    <section id="contact" className="relative mx-auto max-w-5xl px-6 py-28 md:py-40">
      <div className="relative border border-border p-10 text-center md:p-20">
        <Plus className="corner -left-2.5 -top-2.5" strokeWidth={1.5} />
        <Plus className="corner -bottom-2.5 -left-2.5" strokeWidth={1.5} />
        <Plus className="corner -right-2.5 -top-2.5" strokeWidth={1.5} />
        <Plus className="corner -bottom-2.5 -right-2.5" strokeWidth={1.5} />

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-mono text-xs uppercase tracking-[0.2em] text-brand"
        >
          Let's work together
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-5 font-display text-4xl font-semibold tracking-tight md:text-7xl"
        >
          Have a project in mind?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mx-auto mt-5 max-w-md text-muted-foreground"
        >
          I'm open to senior and lead engineering roles, platform builds, and
          architecture consulting. Let's talk.
        </motion.p>

        <motion.a
          href="mailto:paul.azemoh@gmail.com"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="group mt-10 inline-flex items-center gap-2 rounded-full bg-foreground px-7 py-3.5 text-sm font-medium text-background transition-transform hover:scale-[1.03]"
        >
          paul.azemoh@gmail.com
          <ArrowUpRight
            size={16}
            className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </motion.a>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-10 flex items-center justify-center gap-3"
        >
          {SOCIALS.map(({ label, href, Icon }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              target="_blank"
              rel="noreferrer"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-foreground/40 hover:text-foreground"
            >
              <Icon size={17} />
            </a>
          ))}
        </motion.div>
      </div>

      <p className="mt-12 text-center font-mono text-xs text-muted-foreground">
        © 2026 Paul David Azemoh — built with React, Tailwind &amp; Framer Motion.
      </p>
    </section>
  );
}
