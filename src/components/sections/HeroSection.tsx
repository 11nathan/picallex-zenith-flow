
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Blurred Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0 opacity-10"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070')" }}
      />
      
      {/* Abstract Shapes */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      
      {/* Content */}
      <div className="container relative z-10 px-4 mx-auto text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-black max-w-4xl mx-auto leading-tight animate-fade-in">
          {t('hero.title')}
        </h1>
        <p className="text-xl md:text-2xl mb-10 max-w-2xl mx-auto text-gray-700 animate-fade-in">
          {t('hero.subtitle')}
        </p>
        <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-2 animate-fade-in">
          {t('hero.cta')}
          <ArrowRight className="h-5 w-5" />
        </Button>
        
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 justify-items-center items-center opacity-70">
          <img src="https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?q=80&w=1974" alt="Company logo" className="h-8 grayscale" />
          <img src="https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?q=80&w=1974" alt="Company logo" className="h-8 grayscale" />
          <img src="https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?q=80&w=1974" alt="Company logo" className="h-8 grayscale" />
          <img src="https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?q=80&w=1974" alt="Company logo" className="h-8 grayscale" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
