import { motion } from "framer-motion";

export const Reveal = ({ children, delay = 0, className = "", as = "div" }) => {
  const Comp = motion[as];
  return (
    <Comp
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </Comp>
  );
};

const Section = ({ id, eyebrow, title, intro, children, className = "" }) => (
  <section id={id} className={`page py-20 sm:py-28 ${className}`}>
    {(eyebrow || title) && (
      <Reveal className='mb-12 max-w-3xl sm:mb-16'>
        {eyebrow && <p className='eyebrow mb-4'>{eyebrow}</p>}
        {title && <h2 className='section-title'>{title}</h2>}
        {intro && (
          <p className='mt-5 text-[17px] leading-relaxed text-fog-300'>{intro}</p>
        )}
      </Reveal>
    )}
    {children}
  </section>
);

export default Section;
