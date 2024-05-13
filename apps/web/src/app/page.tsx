"use client";
import { buttonVariants } from "@/components/ui/button";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Homepage() {
  return (
    <div className="flex flex-col items-center gap-12 h-screen w-full">
      <HeroHighlight className="flex flex-col items-center gap-12">
        <motion.h1
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: [20, -5, 0],
          }}
          transition={{
            duration: 0.5,
            ease: [0.4, 0.0, 0.2, 1],
          }}
          className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto "
        >
          Without <Highlight className="text-black dark:text-white">
            snapify
          </Highlight>, nothing&apos;s real. Everything is far away.
        </motion.h1>

        <Link href="/about" className={cn(buttonVariants())}>
          View Documentation
        </Link>
      </HeroHighlight>
    </div>
  );
}
