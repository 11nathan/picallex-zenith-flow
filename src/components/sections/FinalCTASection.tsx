
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import ContactForm from '@/components/ContactForm';

const FinalCTASection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">{t('final.title')}</h2>
        <div className="max-w-lg mx-auto mb-12">
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
