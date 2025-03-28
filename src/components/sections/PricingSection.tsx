
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

interface PricingTier {
  name: string;
  price: number;
  users: number;
  features: string[];
  recommended?: boolean;
}

const PricingSection = () => {
  const { t } = useLanguage();

  const pricingTiers: PricingTier[] = [
    {
      name: t('pricing.basic'),
      price: 19,
      users: 3,
      features: [t('pricing.feature1'), t('pricing.feature2')],
    },
    {
      name: t('pricing.advanced'),
      price: 49,
      users: 10,
      features: [t('pricing.feature1'), t('pricing.feature2'), t('pricing.feature3'), t('pricing.feature4')],
      recommended: true,
    },
    {
      name: t('pricing.enterprise'),
      price: 99,
      users: 25,
      features: [t('pricing.feature1'), t('pricing.feature2'), t('pricing.feature3'), t('pricing.feature4'), t('pricing.feature5'), t('pricing.feature6')],
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-16 text-center">{t('pricing.title')}</h2>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {pricingTiers.map((tier, index) => (
            <div 
              key={index} 
              className={`
                bg-white rounded-lg shadow-lg overflow-hidden
                ${tier.recommended ? 'ring-2 ring-primary relative' : ''}
              `}
            >
              {tier.recommended && (
                <div className="absolute top-0 left-0 right-0 bg-primary text-white text-center text-xs py-1">
                  Most Popular
                </div>
              )}
              <div className={`p-6 ${tier.recommended ? 'pt-8' : ''}`}>
                <h3 className="text-xl font-bold mb-4">{tier.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold">${tier.price}</span>
                  <span className="text-gray-500">/{t('pricing.monthly')}</span>
                </div>
                <p className="text-gray-500 mb-6">
                  {tier.users} {t('pricing.users')}
                </p>
                <Button className="w-full bg-primary hover:bg-primary/90">
                  {t('pricing.cta')}
                </Button>
              </div>
              <div className="border-t border-gray-200 p-6">
                <h4 className="font-semibold mb-4">{t('pricing.features')}</h4>
                <ul className="space-y-3">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="mr-2 h-5 w-5 text-primary flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
