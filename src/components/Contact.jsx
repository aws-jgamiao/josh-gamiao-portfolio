import { useState } from "react";

import Section, { Reveal } from "./Section";
import { RESUME_URL, socials } from "../constants";

const fieldClass =
  "w-full rounded-2xl border border-ink-700 bg-ink-950 px-5 py-4 text-[15px] text-fog-100 placeholder:text-fog-500 transition-colors focus:border-accent focus:outline-none";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const response = await fetch("https://formspree.io/f/mgegnekj", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(form),
      });
      if (!response.ok) throw new Error(`Formspree responded ${response.status}`);
      setForm({ name: "", email: "", message: "" });
      setStatus("sent");
    } catch (error) {
      console.error("Form submission error:", error);
      setStatus("error");
    }
  };

  return (
    <Section id='contact'>
      <Reveal className='card relative overflow-hidden p-6 sm:p-12'>
        <div
          className='hero-glow pointer-events-none absolute -right-40 -top-40 h-[480px] w-[480px]'
          aria-hidden
        />
        <div className='relative grid gap-12 lg:grid-cols-2'>
          <div>
            <p className='eyebrow mb-4'>Contact</p>
            <h2 className='section-title'>Let's build something that holds up.</h2>
            <p className='mt-5 max-w-md text-[17px] leading-relaxed text-fog-300'>
              Hiring, or have a project in mind? Send a message and I'll get back to you as soon
              as I can.
            </p>

            <div className='mt-10 flex flex-wrap gap-3'>
              {socials.map((s) => (
                <a key={s.label} href={s.href} target='_blank' rel='noreferrer' className='btn-ghost'>
                  {s.label} ↗
                </a>
              ))}
              <a href={RESUME_URL} download='Joshua_Gamiao_Resume.pdf' className='btn-ghost'>
                Resume ↓
              </a>
            </div>
          </div>

          <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
            <label className='flex flex-col gap-2'>
              <span className='text-[14px] font-medium text-fog-300'>Name</span>
              <input
                required
                type='text'
                name='name'
                autoComplete='name'
                value={form.name}
                onChange={handleChange}
                placeholder='Your name'
                className={fieldClass}
              />
            </label>
            <label className='flex flex-col gap-2'>
              <span className='text-[14px] font-medium text-fog-300'>Email</span>
              <input
                required
                type='email'
                name='email'
                autoComplete='email'
                value={form.email}
                onChange={handleChange}
                placeholder='you@company.com'
                className={fieldClass}
              />
            </label>
            <label className='flex flex-col gap-2'>
              <span className='text-[14px] font-medium text-fog-300'>Message</span>
              <textarea
                required
                rows={5}
                name='message'
                value={form.message}
                onChange={handleChange}
                placeholder='What are you working on?'
                className={`${fieldClass} resize-y`}
              />
            </label>

            <div className='mt-2 flex flex-wrap items-center gap-4'>
              <button type='submit' disabled={status === "sending"} className='btn-primary disabled:opacity-60'>
                {status === "sending" ? "Sending…" : "Send message"}
              </button>
              <p role='status' aria-live='polite' className='text-[14px]'>
                {status === "sent" && (
                  <span className='text-accent'>Thanks! I'll be in touch soon.</span>
                )}
                {status === "error" && (
                  <span className='text-red-400'>Something went wrong. Please try again.</span>
                )}
              </p>
            </div>
          </form>
        </div>
      </Reveal>

      <footer className='mt-16 flex flex-col justify-between gap-4 border-t border-ink-800 pt-8 text-[13px] text-fog-500 sm:flex-row'>
        <p>© {new Date().getFullYear()} Joshua Gamiao</p>
        <a href='#top' className='hover:text-fog-100'>
          Back to top ↑
        </a>
      </footer>
    </Section>
  );
};

export default Contact;
