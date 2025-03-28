
import React from 'react';
import { LanguageProvider } from '@/contexts/LanguageContext';
import Logo from '@/components/Logo';
import LanguageToggle from '@/components/LanguageToggle';
import ContactForm from '@/components/ContactForm';
import HeroSection from '@/components/sections/HeroSection';
import FeaturesSection from '@/components/sections/FeaturesSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import PricingSection from '@/components/sections/PricingSection';
import FinalCTASection from '@/components/sections/FinalCTASection';

const Index = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen">
        {/* Header - Just logo and language toggle */}
        <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
          <div className="container mx-auto flex justify-between items-center py-4 px-4">
            <Logo />
            <LanguageToggle />
          </div>
        </header>

        {/* Floating Contact Form */}
        <div className="hidden md:block">
          <ContactForm floating />
        </div>

        {/* Main Content */}
        <main>
          <HeroSection />
          <FeaturesSection />
          <TestimonialsSection />
          <PricingSection />
          <FinalCTASection />
        </main>

        {/* Footer */}
        <footer className="bg-gray-100 py-8">
          <div className="container mx-auto px-4 text-center text-gray-500 text-sm">
            <p>© 2023 Picallex. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </LanguageProvider>
  );
};

export default Index;
