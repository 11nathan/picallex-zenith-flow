
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

interface FeatureProps {
  imageUrl: string;
  title: string;
  description: string;
  reverse?: boolean;
}

const Feature = ({ imageUrl, title, description, reverse = false }: FeatureProps) => {
  return (
    <div className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 items-center mb-20`}>
      <div className="md:w-1/2">
        <img 
          src={imageUrl} 
          alt={title} 
          className="rounded-lg shadow-lg w-full object-cover"
          style={{ maxHeight: '300px' }}
        />
      </div>
      <div className="md:w-1/2">
        <h3 className="text-2xl font-bold mb-4">{title}</h3>
        <p className="text-gray-700">{description}</p>
      </div>
    </div>
  );
};

const FeaturesSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <Feature 
          imageUrl="/lovable-uploads/f9f729a0-2039-487c-b17f-656759fb9f5a.png"
          title={t('feature1.title')}
          description={t('feature1.description')}
        />
        <Feature 
          imageUrl="/lovable-uploads/2f5933e8-26f6-4496-b92c-5956146556b8.png"
          title={t('feature2.title')}
          description={t('feature2.description')}
          reverse
        />
        <Feature 
          imageUrl="/lovable-uploads/6ea9761b-e52e-4cd7-b124-27163f7866d3.png"
          title={t('feature3.title')}
          description={t('feature3.description')}
        />
        <Feature 
          imageUrl="/lovable-uploads/057e9611-147e-44f5-b5c1-6a903fe17fbe.png"
          title={t('feature4.title')}
          description={t('feature4.description')}
          reverse
        />
      </div>
    </section>
  );
};

export default FeaturesSection;
