
import React from 'react';
import { LanguageProvider } from '@/contexts/LanguageContext';
import Logo from '@/components/Logo';
import LanguageToggle from '@/components/LanguageToggle';
import ContactForm from '@/components/ContactForm';
import HeroSection from '@/components/sections/HeroSection';
import FeaturesSection from '@/components/sections/FeaturesSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import DemoSection from '@/components/sections/DemoSection';
import FinalCTASection from '@/components/sections/FinalCTASection';

const Index = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen">
        {/* Header - Just logo and language toggle with shadow effect */}
        <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
          <div className="container mx-auto flex justify-between items-center py-5 px-4">
            <Logo />
            <LanguageToggle />
          </div>
        </header>

        {/* Floating Contact Form */}
        <div className="hidden md:block">
          <ContactForm floating />
        </div>

        {/* Main Content */}
        <main className="pt-16">
          <HeroSection />
          <div id="features-section">
            <FeaturesSection />
          </div>
          <TestimonialsSection />
          <DemoSection />
          <FinalCTASection />
        </main>
      </div>
    </LanguageProvider>
  );
};

export default Index;
