import { motion } from "framer-motion";

import { RESUME_URL, stats, YEARS_EXPERIENCE } from "../constants";


const rise = (delay) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
});

const Hero = () => (
  <section id='top' className='relative overflow-hidden pt-[72px]'>
    <div className='hero-grid pointer-events-none absolute inset-0' aria-hidden />
    <div
      className='hero-glow pointer-events-none absolute left-1/2 top-[-200px] h-[640px] w-[900px] -translate-x-1/2'
      aria-hidden
    />

    <div className='page relative pb-6 pt-16 sm:pb-10 sm:pt-28'>
      <motion.div {...rise(0)} className='mb-8 inline-flex items-center gap-2 rounded-full border border-ink-700 bg-ink-900/70 px-4 py-1.5 text-[13px] text-fog-300'>
        <span className='relative flex h-2 w-2'>
          <span className='absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60' />
          <span className='relative inline-flex h-2 w-2 rounded-full bg-accent' />
        </span>
        Open to full-stack roles · Remote
      </motion.div>

      <motion.h1
        {...rise(0.08)}
        className='max-w-[15ch] font-display text-[44px] font-extrabold leading-[0.98] tracking-[-0.035em] xs:text-[56px] sm:text-[76px] lg:text-[92px]'
      >
        Full-stack apps, <span className='text-accent'>secure</span> by design.
      </motion.h1>

      <motion.p
        {...rise(0.16)}
        className='mt-8 max-w-2xl text-[18px] leading-relaxed text-fog-300 sm:text-[20px]'
      >
        I'm Joshua, a full-stack developer with{" "}
        <strong className='font-semibold text-fog-100'>{YEARS_EXPERIENCE} years of experience</strong>{" "}
        shipping React, Next.js, Vue and Node applications for teams in Australia, Japan and
        Germany. Lately I build on Next.js and Supabase, with row-level security and real
        test coverage. I've used AI in my work since 2022, have been fully AI-first for the
        past 2 years, and{" "}
        <strong className='font-semibold text-fog-100'>
          the last year I've worked as an AI engineer
        </strong>{" "}
        too.
      </motion.p>

      <motion.div {...rise(0.24)} className='mt-10 flex flex-wrap gap-3'>
        <a href='#projects' className='btn-primary'>
          Try the live demos
          <span aria-hidden>→</span>
        </a>
        <a href={RESUME_URL} download='Joshua_Gamiao_Resume.pdf' className='btn-ghost'>
          Download resume
        </a>
      </motion.div>

      <motion.dl
        {...rise(0.32)}
        className='mt-20 grid max-w-4xl grid-cols-1 gap-px overflow-hidden rounded-3xl border border-ink-800 bg-ink-800 xs:grid-cols-2 lg:grid-cols-4'
      >
        {stats.map((s) => (
          <div key={s.label} className='bg-ink-950 px-6 py-6'>
            <dt className='sr-only'>{s.label}</dt>
            <dd className='font-display text-[40px] font-bold leading-none tracking-tight'>
              {s.value}
            </dd>
            <dd className='mt-2 text-[14px] text-fog-500'>{s.label}</dd>
          </div>
        ))}
      </motion.dl>
    </div>
  </section>
);

export default Hero;
