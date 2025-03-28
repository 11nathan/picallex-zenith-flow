
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden animate-fade-in">
      {/* Blurred Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0 blur-sm opacity-20"
        style={{ backgroundImage: "url('/lovable-uploads/62e87cea-7733-4884-9d39-1559e37186b7.png')" }}
      />
      
      {/* Content */}
      <div className="container relative z-10 px-4 mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-black max-w-4xl mx-auto leading-tight">
          {t('hero.title')}
        </h1>
        <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-700">
          {t('hero.subtitle')}
        </p>
        <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg rounded-lg">
          {t('hero.cta')}
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
