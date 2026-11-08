import Section, { Reveal } from "./Section";
import { featuredProjects, projects } from "../constants";

const ExternalIcon = () => (
  <svg width='14' height='14' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2.2' aria-hidden>
    <path d='M7 17L17 7M9 7h8v8' strokeLinecap='round' strokeLinejoin='round' />
  </svg>
);

const GithubIcon = () => (
  <svg width='16' height='16' viewBox='0 0 24 24' fill='currentColor' aria-hidden>
    <path d='M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2c-3.2.7-3.87-1.37-3.87-1.37-.53-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.71 1.26 3.37.96.1-.75.4-1.26.73-1.55-2.56-.29-5.25-1.28-5.25-5.69 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.42-2.7 5.4-5.27 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5Z' />
  </svg>
);

const BrowserFrame = ({ src, alt, url }) => (
  <div className='overflow-hidden rounded-2xl border border-ink-700 bg-ink-850 shadow-[0_40px_80px_-30px_rgba(0,0,0,0.8)]'>
    <div className='flex min-w-0 items-center gap-3 border-b border-ink-700 px-4 py-3'>
      <div className='flex gap-1.5' aria-hidden>
        <span className='h-2.5 w-2.5 rounded-full bg-ink-600' />
        <span className='h-2.5 w-2.5 rounded-full bg-ink-600' />
        <span className='h-2.5 w-2.5 rounded-full bg-ink-600' />
      </div>
      <span className='min-w-0 truncate rounded-md bg-ink-900 px-3 py-1 font-mono text-[11px] text-fog-500'>
        {url.replace("https://", "")}
      </span>
    </div>
    <div className='aspect-[16/10] overflow-hidden bg-white'>
      <img
        src={src}
        alt={alt}
        loading='lazy'
        className='h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]'
      />
    </div>
  </div>
);

const FeaturedProject = ({ project, flip }) => (
  <Reveal className='group card grid grid-cols-1 items-center gap-10 p-5 sm:p-8 lg:grid-cols-2 lg:gap-14 lg:p-12'>
    <div className={`min-w-0 ${flip ? "lg:order-2" : ""}`}>
      <a href={project.live} target='_blank' rel='noreferrer' aria-label={`Open ${project.name} live demo`}>
        <BrowserFrame src={project.image} alt={`${project.name} dashboard`} url={project.live} />
      </a>
    </div>

    <div className='min-w-0'>
      <div className='flex items-center gap-3'>
        <span className='font-mono text-[13px] text-accent'>{project.index}</span>
        <span className='h-px flex-1 bg-ink-700' />
        <span className='rounded-full bg-accent-soft px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-accent'>
          Demo accounts included
        </span>
      </div>

      <h3 className='mt-6 font-display text-[30px] font-bold leading-tight tracking-tight sm:text-[36px]'>
        {project.name}
      </h3>
      <p className='mt-1 text-[15px] text-fog-500'>{project.tagline}</p>
      <p className='mt-5 text-[16px] leading-relaxed text-fog-300'>{project.description}</p>

      <ul className='mt-6 space-y-3'>
        {project.highlights.map((h) => (
          <li key={h} className='flex gap-3 text-[15px] leading-snug text-fog-100'>
            <span className='mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-accent' aria-hidden />
            {h}
          </li>
        ))}
      </ul>

      <div className='mt-6 flex flex-wrap gap-2'>
        {project.tags.map((t) => (
          <span key={t} className='chip'>
            {t}
          </span>
        ))}
      </div>

      <div className='mt-8 flex flex-wrap gap-3'>
        <a href={project.live} target='_blank' rel='noreferrer' className='btn-primary'>
          Live demo <ExternalIcon />
        </a>
        <a href={project.github} target='_blank' rel='noreferrer' className='btn-ghost'>
          <GithubIcon /> Source & docs
        </a>
      </div>
    </div>
  </Reveal>
);

const SmallProject = ({ project, delay }) => (
  <Reveal delay={delay}>
    <a
      href={project.link}
      target='_blank'
      rel='noreferrer'
      className='group card flex h-full flex-col overflow-hidden transition-colors hover:border-ink-600'
    >
      <div className='aspect-[16/10] overflow-hidden border-b border-ink-800'>
        <img
          src={project.image}
          alt={project.name}
          loading='lazy'
          className='h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]'
        />
      </div>
      <div className='flex flex-1 flex-col p-6'>
        <div className='flex items-center justify-between gap-4'>
          <h4 className='font-display text-[20px] font-semibold tracking-tight'>{project.name}</h4>
          <span className='text-fog-500 transition-colors group-hover:text-accent'>
            <ExternalIcon />
          </span>
        </div>
        <p className='mt-2 flex-1 text-[14px] leading-relaxed text-fog-500'>{project.description}</p>
        <p className='mt-4 font-mono text-[12px] text-fog-500'>{project.tags.join(" · ")}</p>
      </div>
    </a>
  </Reveal>
);

const Projects = () => (
  <Section
    id='projects'
    eyebrow='Selected work'
    title={<>Built to be tested, not just described.</>}
    intro="Two new full-stack applications built on Next.js and Supabase to show how I approach real product work. Both have one-click demo accounts, so you can explore them without setting anything up. Source code and documentation are on GitHub. These are portfolio projects, separate from my client work."
  >
    <div className='flex flex-col gap-8'>
      {featuredProjects.map((p, i) => (
        <FeaturedProject key={p.id} project={p} flip={i % 2 === 1} />
      ))}
    </div>

    <Reveal className='mb-8 mt-24 flex items-end justify-between gap-6'>
      <div>
        <p className='eyebrow mb-3'>More projects</p>
        <h3 className='font-display text-[26px] font-bold tracking-tight sm:text-[30px]'>
          Smaller builds & experiments
        </h3>
      </div>
    </Reveal>

    <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
      {projects.map((p, i) => (
        <SmallProject key={p.name} project={p} delay={i * 0.08} />
      ))}
    </div>
  </Section>
);

export default Projects;
