import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BentoGrid } from './components/BentoGrid';
import { EngineeringTrust } from './components/EngineeringTrust';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#282a36] text-[#f8f8f2] flex flex-col font-sans">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <BentoGrid />
        <EngineeringTrust />
      </main>
      <Footer />
    </div>
  );
};

export default App;
