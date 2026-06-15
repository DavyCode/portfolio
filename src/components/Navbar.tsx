import { motion } from "framer-motion";

const LINKS = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Work", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
      className="fixed top-0 inset-x-0 z-50"
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <a
          href="#home"
          className="font-display text-lg font-semibold tracking-tight"
        >
          paul<span className="text-muted-foreground">.azemoh</span>
        </a>
        <div className="hidden items-center gap-1 rounded-full border border-border bg-background/60 px-2 py-1 backdrop-blur sm:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-full px-4 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </div>
        <a
          href="#contact"
          className="rounded-full bg-foreground px-4 py-1.5 text-sm font-medium text-background transition-transform hover:scale-[1.03]"
        >
          Let's talk
        </a>
      </nav>
    </motion.header>
  );
}
