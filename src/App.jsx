import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/common/Navbar';
import { Footer } from './components/common/Footer';
import { CVModal } from './components/common/CVModal';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Education } from './components/sections/Education';
import { Skills } from './components/sections/Skills';
import { Projects } from './components/sections/Projects';
import { Experience } from './components/sections/Experience';
import { Certifications } from './components/sections/Certifications';
import { Contact } from './components/sections/Contact';

function App() {
  const [isCVModalOpen, setIsCVModalOpen] = useState(false);

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-slate-50 dark:bg-dark-bg text-slate-800 dark:text-slate-100 flex flex-col font-sans transition-colors duration-300">
        {/* Navigation Bar */}
        <Navbar onOpenCV={() => setIsCVModalOpen(true)} />

        {/* Main Content Sections */}
        <main className="flex-grow">
          {/* 1. Home Section */}
          <Hero onOpenCV={() => setIsCVModalOpen(true)} />

          {/* 2. About Me Section */}
          <About />

          {/* 3. Education Section */}
          <Education />

          {/* 4. Skills Section */}
          <Skills />

          {/* 5. Projects Section */}
          <Projects />

          {/* 6. Experience Section */}
          <Experience />

          {/* 7. Certifications & Achievements Section */}
          <Certifications />

          {/* 8. Contact Section */}
          <Contact />
        </main>

        {/* Footer */}
        <Footer />

        {/* Interactive Curriculum Vitae Modal */}
        <CVModal
          isOpen={isCVModalOpen}
          onClose={() => setIsCVModalOpen(false)}
        />
      </div>
    </ThemeProvider>
  );
}

export default App;
