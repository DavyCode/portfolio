import { useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Download, Plus } from "lucide-react";
import { renderCanvas } from "../../lib/canvas";
import RotatingText from "../RotatingText";

export default function Hero() {
  useEffect(() => {
    renderCanvas();
  }, []);

  return (
    <section
      id="home"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 text-center"
    >
      {/* status pill */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="z-10 mb-8 flex items-center gap-2 rounded-full border border-border bg-background/60 px-4 py-1.5 text-xs text-muted-foreground backdrop-blur"
      >
        <span className="relative flex h-2 w-2 items-center justify-center">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-75" />
          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-brand" />
        </span>
        Available for new opportunities · Senior Software Engineer
      </motion.div>

      {/* framed headline with + corners + radial mask */}
      <div className="z-10 px-2">
        <div className="relative mx-auto max-w-5xl border border-border p-6 [mask-image:radial-gradient(60rem_30rem_at_center,white,transparent)] md:px-12 md:py-16">
          <Plus className="corner -left-2.5 -top-2.5" strokeWidth={1.5} />
          <Plus className="corner -bottom-2.5 -left-2.5" strokeWidth={1.5} />
          <Plus className="corner -right-2.5 -top-2.5" strokeWidth={1.5} />
          <Plus className="corner -bottom-2.5 -right-2.5" strokeWidth={1.5} />

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="select-none font-display text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl"
          >
            Distributed systems,
            <br />
            engineered to scale.
          </motion.h1>
        </div>
      </div>

      {/* name + rotating descriptor */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="z-10 mt-8 flex flex-wrap items-center justify-center gap-x-2 font-display text-xl md:text-2xl"
      >
        <span className="text-muted-foreground">Hi, I'm Paul David Azemoh —</span>
        <span className="inline-flex items-center font-semibold text-foreground">
          <RotatingText
            words={[
              "backend architect",
              "systems engineer",
              "platform builder",
              "team lead",
            ]}
          />
        </span>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="z-10 mx-auto mt-4 max-w-2xl px-6 text-sm text-muted-foreground md:text-base"
      >
        7+ years architecting distributed microservices and platforms that have
        served 5M+ monthly active users — across fintech, agritech, e-commerce,
        and public transport.
      </motion.p>

      {/* CTAs */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="z-10 mt-10 flex flex-wrap items-center justify-center gap-3"
      >
        <a
          href="#projects"
          className="group inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-transform hover:scale-[1.03]"
        >
          View my work
          <ArrowUpRight
            size={16}
            className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </a>
        <a
          href="#contact"
          className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium transition-colors hover:bg-accent"
        >
          Get in touch
        </a>
        <a
          href="/Paul-Azemoh-Resume.pdf"
          download
          className="group inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium transition-colors hover:bg-accent"
        >
          Download Resume
          <Download
            size={16}
            className="transition-transform group-hover:translate-y-0.5"
          />
        </a>
      </motion.div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 z-10 flex flex-col items-center gap-2 text-muted-foreground"
      >
        <span className="text-[10px] uppercase tracking-[0.2em]">Scroll</span>
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.6 }}
        >
          <ArrowDown size={16} />
        </motion.span>
      </motion.a>

      <canvas
        id="canvas"
        className="pointer-events-none absolute inset-0 z-0 mx-auto"
      />
    </section>
  );
}
