
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-2 text-sm">
      <button 
        className={`p-1 px-2 rounded-md ${language === 'en' ? 'bg-primary text-white' : 'bg-gray-200'}`}
        onClick={() => setLanguage('en')}
      >
        EN
      </button>
      <button 
        className={`p-1 px-2 rounded-md ${language === 'es' ? 'bg-primary text-white' : 'bg-gray-200'}`}
        onClick={() => setLanguage('es')}
      >
        ES
      </button>
    </div>
  );
};

export default LanguageToggle;
