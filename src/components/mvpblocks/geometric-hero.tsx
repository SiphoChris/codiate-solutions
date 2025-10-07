'use client';

import { easeInOut, motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Pacifico } from 'next/font/google';
import { cn } from '@/lib/utils';

const pacifico = Pacifico({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-pacifico',
});

export default function HeroSection({
  title1 = 'Take Your Business Online',
  title2 = 'With Ease',
}: {
  title1?: string;
  title2?: string;
}) {
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: 0.5 + i * 0.2,
        ease: easeInOut,
      },
    }),
  };

  return (
    <div className="bg-background relative flex pt-42 pb-20 w-full items-center justify-center overflow-hidden dark:bg-black">
      <div className="relative z-10 container mx-auto max-w-6xl px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            custom={1}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
          >
            <h1 className="mx-4 mb-6 text-4xl font-bold tracking-tight sm:text-6xl md:mb-8 md:text-8xl">
              <span className="from-foreground to-foreground/80 bg-gradient-to-b bg-clip-text text-transparent">
                {title1}
              </span>
              <br />
              <span
                className={cn(
                  'secondary-gradient bg-clip-text p-4 text-transparent',
                  pacifico.className,
                  'font-bold',
                )}
              >
                {title2}
              </span>
            </h1>
          </motion.div>

          <motion.div
            custom={2}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
          >
            <p className="text-muted-foreground mx-auto mb-10 max-w-xl px-4 text-base leading-relaxed sm:text-lg md:text-xl">
              Whether you want a new website, or need maintenance on your existing
              one, we got you covered. We deliver a complete website solution
              from start to finish.
            </p>
          </motion.div>

          <motion.div
            custom={3}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col justify-center gap-4 sm:flex-row"
          >
            <Button
              size="lg"
              className="from-primary shadow-primary/10 hover:from-primary/90 rounded-full border-none bg-gradient-to-r to-primary shadow-md hover:to-primary/90"
            >
              Get in Touch
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary/30 hover:bg-primary/5 rounded-full shadow-sm"
            >
              View Our Portfolio
            </Button>
          </motion.div>
        </div>
      </div>

      <div className="from-background to-background/80 pointer-events-none absolute inset-0 bg-gradient-to-t via-transparent dark:from-black dark:to-black/80" />
    </div>
  );
}
