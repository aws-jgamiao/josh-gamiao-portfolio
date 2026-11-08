import { useEffect, useState } from "react";

import { navLinks, RESUME_URL } from "../constants";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open
          ? "border-b border-ink-800 bg-ink-950/80 backdrop-blur-xl"
          : "border-b border-transparent"
      }`}
    >
      <nav className='page flex h-[72px] items-center justify-between'>
        <a
          href='#top'
          className='flex items-center gap-3'
          onClick={() => setOpen(false)}
        >
          <span className='grid h-9 w-9 place-items-center rounded-xl bg-accent font-display text-[15px] font-extrabold text-accent-ink'>
            JG
          </span>
          <span className='font-display text-[17px] font-semibold tracking-tight'>
            Joshua Gamiao
          </span>
        </a>

        <ul className='hidden items-center gap-8 md:flex'>
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className='text-[15px] text-fog-300 transition-colors hover:text-fog-100'
              >
                {link.title}
              </a>
            </li>
          ))}
          <li>
            <a href={RESUME_URL} download='Joshua_Gamiao_Resume.pdf' className='btn-ghost !py-2'>
              Resume
            </a>
          </li>
        </ul>

        <button
          type='button'
          className='grid h-10 w-10 place-items-center rounded-full border border-ink-700 md:hidden'
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className='relative block h-3 w-4'>
            <span
              className={`absolute left-0 h-[2px] w-4 bg-fog-100 transition-all ${
                open ? "top-[5px] rotate-45" : "top-0"
              }`}
            />
            <span
              className={`absolute left-0 h-[2px] w-4 bg-fog-100 transition-all ${
                open ? "top-[5px] -rotate-45" : "top-[10px]"
              }`}
            />
          </span>
        </button>
      </nav>

      {open && (
        <div className='page pb-6 md:hidden'>
          <ul className='flex flex-col gap-1'>
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={() => setOpen(false)}
                  className='block rounded-xl px-3 py-3 text-[17px] text-fog-300 hover:bg-ink-850 hover:text-fog-100'
                >
                  {link.title}
                </a>
              </li>
            ))}
            <li className='mt-2'>
              <a href={RESUME_URL} download='Joshua_Gamiao_Resume.pdf' className='btn-primary w-full'>
                Download resume
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
