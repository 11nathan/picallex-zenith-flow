
import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Check, Info } from 'lucide-react';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';

interface PricingTier {
  name: string;
  price: number;
  users: number;
  features: string[];
  recommended?: boolean;
}

const PricingSection = () => {
  const { t } = useLanguage();
  const [isAnnual, setIsAnnual] = useState(true);

  const pricingTiers: PricingTier[] = [
    {
      name: t('pricing.basic'),
      price: isAnnual ? 19 : 24,
      users: 3,
      features: [
        t('pricing.feature1'), 
        t('pricing.feature2'), 
        "Email Support", 
        "5GB Storage"
      ],
    },
    {
      name: t('pricing.advanced'),
      price: isAnnual ? 49 : 59,
      users: 10,
      features: [
        t('pricing.feature1'), 
        t('pricing.feature2'), 
        t('pricing.feature3'), 
        t('pricing.feature4'),
        "Priority Support",
        "25GB Storage",
        "Advanced Analytics"
      ],
      recommended: true,
    },
    {
      name: t('pricing.enterprise'),
      price: isAnnual ? 99 : 119,
      users: 25,
      features: [
        t('pricing.feature1'), 
        t('pricing.feature2'), 
        t('pricing.feature3'), 
        t('pricing.feature4'), 
        t('pricing.feature5'), 
        t('pricing.feature6'),
        "Dedicated Account Manager",
        "100GB Storage",
        "Custom Integrations",
        "Advanced Security Features"
      ],
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">{t('pricing.title')}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10">
            Choose the perfect plan for your business needs. All plans include a 14-day free trial.
          </p>
          
          <div className="inline-flex items-center bg-white p-1 rounded-full border mb-8">
            <button
              onClick={() => setIsAnnual(true)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                isAnnual 
                  ? 'bg-primary text-white shadow-md' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Annual <span className="text-xs opacity-80">(Save 20%)</span>
            </button>
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                !isAnnual 
                  ? 'bg-primary text-white shadow-md' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Monthly
            </button>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingTiers.map((tier, index) => (
            <div 
              key={index} 
              className={`
                bg-white rounded-2xl overflow-hidden transition-all duration-300 transform hover:scale-[1.03] hover:shadow-xl
                ${tier.recommended ? 'ring-2 ring-primary relative shadow-lg' : 'shadow-md'}
              `}
            >
              {tier.recommended && (
                <div className="absolute top-0 left-0 right-0 bg-primary text-white text-center text-sm py-1.5 font-medium">
                  Most Popular
                </div>
              )}
              <div className={`p-8 ${tier.recommended ? 'pt-12' : ''}`}>
                <h3 className="text-2xl font-bold mb-4">{tier.name}</h3>
                <div className="mb-6 flex items-baseline">
                  <span className="text-5xl font-bold">${tier.price}</span>
                  <span className="text-gray-500 ml-2">/{isAnnual ? t('pricing.annual') : t('pricing.monthly')}</span>
                </div>
                <p className="text-gray-600 mb-8">
                  {t('pricing.upTo')} {tier.users} {t('pricing.users')}
                </p>
                <Button 
                  className={`w-full py-6 font-medium text-base ${tier.recommended 
                    ? 'bg-primary hover:bg-primary/90 text-white' 
                    : 'bg-white hover:bg-gray-50 text-primary border-2 border-primary hover:border-primary/80'
                  }`}
                >
                  {t('pricing.cta')}
                </Button>
              </div>
              <div className="border-t border-gray-100 p-8">
                <h4 className="font-semibold mb-6 flex items-center gap-2">
                  {t('pricing.features')}
                  <Dialog>
                    <DialogTrigger>
                      <Info className="h-4 w-4 text-gray-400 cursor-pointer hover:text-gray-600" />
                    </DialogTrigger>
                    <DialogContent className="max-w-md">
                      <h3 className="text-xl font-bold mb-4">Plan Features</h3>
                      <p className="text-gray-600 mb-4">Detailed explanation of what's included in each plan.</p>
                    </DialogContent>
                  </Dialog>
                </h4>
                <ul className="space-y-4">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="mr-3 h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-4">Need a custom solution for your business?</p>
          <Button className="bg-white hover:bg-gray-50 text-primary border-2 border-primary hover:border-primary/80 font-medium">
            Contact Us for Custom Pricing
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
