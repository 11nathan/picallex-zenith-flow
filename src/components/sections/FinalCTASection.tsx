
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import ContactForm from '@/components/ContactForm';

const FinalCTASection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Abstract Shapes */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/5 rounded-full"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-500/5 rounded-full"></div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 max-w-2xl mx-auto">
          {t('final.title')}
        </h2>
        <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
          Join thousands of businesses that are growing faster and serving customers better with Picallex CRM.
        </p>
        
        <div className="flex flex-col md:flex-row gap-8 justify-center items-center mb-16">
          <Button 
            className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
          >
            {t('hero.cta')}
            <ArrowRight className="h-5 w-5" />
          </Button>
          
          <Button 
            className="bg-white hover:bg-gray-50 text-primary border-2 border-primary hover:border-primary/80 px-8 py-6 text-lg rounded-lg transition-all duration-300"
          >
            Schedule a Demo
          </Button>
        </div>
        
        <div className="max-w-lg mx-auto">
          <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
            <h3 className="text-2xl font-bold mb-6">Contact Us</h3>
            <ContactForm />
          </div>
        </div>
        
        <div className="mt-20 pt-10 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-primary">Picallex</span>
              <span className="text-xs text-gray-500">CRM</span>
            </div>
            
            <div className="flex flex-wrap justify-center gap-6">
              <a href="#" className="text-gray-600 hover:text-primary transition-colors">Terms</a>
              <a href="#" className="text-gray-600 hover:text-primary transition-colors">Privacy</a>
              <a href="#" className="text-gray-600 hover:text-primary transition-colors">Security</a>
              <a href="#" className="text-gray-600 hover:text-primary transition-colors">Contact</a>
            </div>
            
            <div className="text-gray-500 text-sm">
              © 2023 Picallex. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
