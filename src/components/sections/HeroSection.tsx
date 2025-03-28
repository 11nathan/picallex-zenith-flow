
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  const { t } = useLanguage();

  const scrollToNext = () => {
    const featuresSection = document.getElementById('features-section');
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute w-full h-full overflow-hidden z-0">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-primary/5 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 rounded-full bg-blue-500/5 blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/3 left-1/4 w-72 h-72 rounded-full bg-purple-500/5 blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
      
      {/* Main Content */}
      <div className="container relative z-10 px-4 mx-auto">
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
          {/* Animated Subtitle */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm border border-gray-100/20 rounded-full shadow-sm"
          >
            <span className="px-2 py-1 bg-primary text-white text-xs font-medium rounded-full mr-2">NEW</span>
            <span className="text-sm font-medium text-gray-700">Introducing next-gen CRM features</span>
          </motion.div>
          
          {/* Animated Heading */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent leading-tight"
          >
            {t('hero.title')}
          </motion.h1>
          
          {/* Animated Description */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto text-gray-600 leading-relaxed"
          >
            {t('hero.subtitle')}
          </motion.p>
          
          {/* Animated CTA Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 mb-20"
          >
            <Button 
              className="bg-primary hover:bg-primary/90 text-white px-8 py-7 text-lg rounded-xl shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-2 font-medium"
              size="lg"
            >
              {t('hero.cta')}
              <ArrowRight className="h-5 w-5" />
            </Button>
            
            <Button 
              variant="outline" 
              className="border-gray-300 hover:border-primary hover:bg-gray-50 px-8 py-7 text-lg rounded-xl transition-all duration-300 flex items-center gap-2 font-medium"
              size="lg"
            >
              Watch Demo
            </Button>
          </motion.div>
        </div>
        
        {/* Client Logos */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-8 grid grid-cols-2 md:grid-cols-5 gap-8 justify-items-center items-center"
        >
          <img src="https://dummyimage.com/150x50/f5f5f5/333?text=Client+1" alt="Company logo" className="h-8 grayscale hover:grayscale-0 transition-all opacity-70 hover:opacity-100" />
          <img src="https://dummyimage.com/150x50/f5f5f5/333?text=Client+2" alt="Company logo" className="h-8 grayscale hover:grayscale-0 transition-all opacity-70 hover:opacity-100" />
          <img src="https://dummyimage.com/150x50/f5f5f5/333?text=Client+3" alt="Company logo" className="h-8 grayscale hover:grayscale-0 transition-all opacity-70 hover:opacity-100" />
          <img src="https://dummyimage.com/150x50/f5f5f5/333?text=Client+4" alt="Company logo" className="h-8 grayscale hover:grayscale-0 transition-all opacity-70 hover:opacity-100" />
          <img src="https://dummyimage.com/150x50/f5f5f5/333?text=Client+5" alt="Company logo" className="h-8 grayscale hover:grayscale-0 transition-all opacity-70 hover:opacity-100" />
        </motion.div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1, repeat: Infinity, repeatType: "reverse" }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        onClick={scrollToNext}
      >
        <ChevronDown className="h-8 w-8 text-gray-400" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
