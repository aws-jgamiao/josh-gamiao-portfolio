import Section, { Reveal } from "./Section";
import { experiences, YEARS_EXPERIENCE } from "../constants";

const Experience = () => (
  <Section
    id='experience'
    eyebrow='Experience'
    title={`${YEARS_EXPERIENCE} years of shipping production software.`}
    intro='Working remotely with teams in Australia, Japan and Germany, across agencies, product companies and freelance builds.'
  >
    <ol className='relative'>
      {experiences.map((exp, i) => (
        <Reveal
          as='li'
          key={`${exp.company}-${exp.title}`}
          delay={i * 0.05}
          className='grid gap-4 border-t border-ink-800 py-10 md:grid-cols-[220px_1fr] md:gap-10'
        >
          <div>
            <p className='font-mono text-[13px] text-fog-300'>{exp.date}</p>
            <p className='mt-1 text-[13px] text-fog-500'>{exp.location}</p>
          </div>

          <div>
            <div className='flex items-center gap-4'>
              <span className='grid h-12 w-12 shrink-0 place-items-center overflow-hidden rounded-xl bg-fog-100'>
                <img src={exp.icon} alt='' className='h-8 w-8 object-contain' />
              </span>
              <div>
                <h3 className='font-display text-[22px] font-semibold leading-tight tracking-tight'>
                  {exp.title}
                </h3>
                <p className='flex flex-wrap items-center gap-2 text-[15px] text-fog-500'>
                  {exp.company}
                  {exp.current && (
                    <span className='rounded-full bg-accent-soft px-2.5 py-0.5 font-mono text-[11px] uppercase tracking-wider text-accent'>
                      Current role
                    </span>
                  )}
                </p>
              </div>
            </div>

            <ul className='mt-5 max-w-3xl space-y-2'>
              {exp.points.map((point) => (
                <li key={point} className='flex gap-3 text-[15px] leading-relaxed text-fog-300'>
                  <span className='mt-[10px] h-px w-3 shrink-0 bg-fog-500' aria-hidden />
                  {point}
                </li>
              ))}
            </ul>

            <div className='mt-5 flex flex-wrap gap-2'>
              {exp.stack.map((s) => (
                <span key={s} className='chip'>
                  {s}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      ))}
    </ol>
  </Section>
);

export default Experience;
