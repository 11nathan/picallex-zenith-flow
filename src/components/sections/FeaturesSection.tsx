
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';

interface FeatureProps {
  imageUrl: string;
  title: string;
  description: string;
  reverse?: boolean;
  benefits?: string[];
}

const Feature = ({ imageUrl, title, description, reverse = false, benefits = [] }: FeatureProps) => {
  return (
    <div className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 items-center mb-32 animate-fade-in`}>
      <div className="md:w-1/2">
        <img 
          src={imageUrl} 
          alt={title} 
          className="rounded-2xl shadow-2xl w-full object-cover transform hover:scale-[1.02] transition-all duration-500 hover:shadow-xl"
          style={{ maxHeight: '400px' }}
        />
      </div>
      <div className="md:w-1/2">
        <h3 className="text-3xl font-bold mb-4">{title}</h3>
        <p className="text-gray-700 text-lg mb-6">{description}</p>
        
        {benefits.length > 0 && (
          <ul className="space-y-3 mb-8">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-start">
                <CheckCircle className="mr-2 h-5 w-5 text-primary flex-shrink-0 mt-1" />
                <span className="text-gray-700">{benefit}</span>
              </li>
            ))}
          </ul>
        )}
        
        <Button className="bg-white hover:bg-gray-50 text-primary border-2 border-primary hover:border-primary/80 font-medium">
          Learn More
        </Button>
      </div>
    </div>
  );
};

const FeaturesSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold mb-4">Powerful Features to Grow Your Business</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Discover how Picallex CRM can help streamline your workflows, improve customer relationships, and drive more revenue.</p>
        </div>
        
        <Feature 
          imageUrl="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070"
          title={t('feature1.title')}
          description={t('feature1.description')}
          benefits={[
            "360° view of your customer journey",
            "Visual pipeline management",
            "Custom deal stages and workflows"
          ]}
        />
        <Feature 
          imageUrl="https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=2070"
          title={t('feature2.title')}
          description={t('feature2.description')}
          reverse
          benefits={[
            "Send and receive WhatsApp messages directly from CRM",
            "Automatic contact syncing across channels",
            "Template messaging for quick responses"
          ]}
        />
        <Feature 
          imageUrl="https://images.unsplash.com/photo-1557838923-2985c318be48?q=80&w=2070"
          title={t('feature3.title')}
          description={t('feature3.description')}
          benefits={[
            "24/7 AI-powered responses to common questions",
            "Lead qualification automation",
            "Smart workflow triggers based on customer actions"
          ]}
        />
        <Feature 
          imageUrl="https://images.unsplash.com/photo-1596524430615-b46475ddff6e?q=80&w=2070"
          title={t('feature4.title')}
          description={t('feature4.description')}
          reverse
          benefits={[
            "Click-to-call functionality",
            "Call recording and analytics",
            "Voicemail and call routing features"
          ]}
        />
      </div>
    </section>
  );
};

export default FeaturesSection;
