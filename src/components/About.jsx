import Section, { Reveal } from "./Section";
import { aiJourney, services, stack, YEARS_EXPERIENCE } from "../constants";

const About = () => (
  <Section id='stack' eyebrow='What I do' title='From database rules to the last pixel.'>
    <div className='grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16'>
      <Reveal>
        <p className='text-[17px] leading-relaxed text-fog-300'>
          I'm a full-stack developer with {YEARS_EXPERIENCE} years of experience building modern,
          secure web applications. I've delivered e-commerce platforms, financial apps, client
          portals and internal tools, and I care about the parts users never see: access rules,
          audit trails, tests and clean migrations from legacy systems.
        </p>

        <div className='mt-10'>
          <p className='eyebrow mb-5'>AI journey</p>
          <ol className='grid gap-px overflow-hidden rounded-3xl border border-ink-800 bg-ink-800 sm:grid-cols-3'>
            {aiJourney.map((step, i) => (
              <li key={step.year} className='bg-ink-950 p-6'>
                <p
                  className={`font-mono text-[13px] ${
                    i === aiJourney.length - 1 ? "text-accent" : "text-fog-500"
                  }`}
                >
                  {step.year}
                  {i === aiJourney.length - 1 ? " → now" : ""}
                </p>
                <h3 className='mt-2 font-display text-[18px] font-semibold tracking-tight'>
                  {step.title}
                </h3>
                <p className='mt-2 text-[14px] leading-relaxed text-fog-500'>{step.body}</p>
              </li>
            ))}
          </ol>
        </div>

        <div className='mt-10 grid gap-px overflow-hidden rounded-3xl border border-ink-800 bg-ink-800 sm:grid-cols-2'>
          {services.map((s) => (
            <div key={s.title} className='bg-ink-950 p-6'>
              <h3 className='font-display text-[18px] font-semibold tracking-tight'>{s.title}</h3>
              <p className='mt-2 text-[14px] leading-relaxed text-fog-500'>{s.body}</p>
            </div>
          ))}
        </div>
      </Reveal>

      <div className='flex flex-col gap-8'>
        {stack.map((group, i) => (
          <Reveal key={group.group} delay={i * 0.08}>
            <p className='eyebrow mb-4'>{group.group}</p>
            <div className='flex flex-wrap gap-2'>
              {group.items.map((item) => (
                <span
                  key={item}
                  className={`rounded-xl border px-4 py-2.5 text-[15px] text-fog-100 transition-colors hover:border-accent/50 ${
                    group.highlight ? "border-accent/30 bg-accent-soft" : "border-ink-800 bg-ink-900"
                  }`}
                >
                  {item}
                </span>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </Section>
);

export default About;
