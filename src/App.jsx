import { About, Contact, Experience, Hero, Navbar, Projects } from "./components";

const App = () => (
  <div className='relative min-h-screen overflow-x-hidden bg-ink-950'>
    <a
      href='#projects'
      className='sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-accent focus:px-4 focus:py-2 focus:text-accent-ink'
    >
      Skip to projects
    </a>
    <Navbar />
    <main>
      <Hero />
      <Projects />
      <Experience />
      <About />
      <Contact />
    </main>
  </div>
);

export default App;
