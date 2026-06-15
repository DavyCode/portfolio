import { motion } from "framer-motion";

interface Props {
  index: string;
  title: string;
  subtitle?: string;
}

/** Monospace "01 / Title" eyebrow + large display heading. */
export default function SectionHeading({ index, title, subtitle }: Props) {
  return (
    <div className="mb-14">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="mb-4 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground"
      >
        <span className="text-brand">{index}</span>
        <span className="h-px w-8 bg-border" />
        <span>{title}</span>
      </motion.div>
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ delay: 0.05 }}
        className="font-display text-4xl font-semibold tracking-tight md:text-6xl"
      >
        {subtitle ?? title}
      </motion.h2>
    </div>
  );
}
