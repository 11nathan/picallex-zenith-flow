
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { ArrowRight, PresentationIcon } from 'lucide-react';

const DemoSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center p-2 bg-primary/10 rounded-full mb-6">
            <PresentationIcon className="w-5 h-5 text-primary mr-2" />
            <span className="text-sm font-medium text-primary">{t('demo.exclusive')}</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">{t('demo.title') || 'Get a Personalized Demo'}</h2>
          
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            {t('demo.description') || 'See how Picallex CRM can transform your business operations with a customized demonstration tailored to your specific needs.'}
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 text-left">
              <h3 className="text-2xl font-bold mb-4">{t('demo.feature1') || 'Guided Tour'}</h3>
              <p className="text-gray-600 mb-6">
                {t('demo.feature1desc') || 'Our experts will walk you through all features and demonstrate how they can be customized for your business workflow.'}
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <div className="rounded-full bg-green-50 p-1 mr-3">
                    <svg className="h-4 w-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700">{t('demo.bullet1') || 'Personalized setup suggestions'}</span>
                </li>
                <li className="flex items-start">
                  <div className="rounded-full bg-green-50 p-1 mr-3">
                    <svg className="h-4 w-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700">{t('demo.bullet2') || 'Integration possibilities'}</span>
                </li>
                <li className="flex items-start">
                  <div className="rounded-full bg-green-50 p-1 mr-3">
                    <svg className="h-4 w-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700">{t('demo.bullet3') || 'ROI calculation'}</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-8 shadow-lg border border-primary/20 text-left">
              <h3 className="text-2xl font-bold mb-4">{t('demo.feature2') || 'Try Before You Buy'}</h3>
              <p className="text-gray-600 mb-6">
                {t('demo.feature2desc') || 'Get access to a fully functional trial environment with sample data to explore at your own pace.'}
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <div className="rounded-full bg-primary/20 p-1 mr-3">
                    <svg className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700">{t('demo.bullet4') || '14-day full access'}</span>
                </li>
                <li className="flex items-start">
                  <div className="rounded-full bg-primary/20 p-1 mr-3">
                    <svg className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700">{t('demo.bullet5') || 'Sample data templates'}</span>
                </li>
                <li className="flex items-start">
                  <div className="rounded-full bg-primary/20 p-1 mr-3">
                    <svg className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700">{t('demo.bullet6') || 'Premium support included'}</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-14">
            <Button 
              className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
            >
              {t('demo.cta') || 'Request Your Demo Now'}
              <ArrowRight className="h-5 w-5" />
            </Button>
            <p className="text-gray-500 mt-4 text-sm">
              {t('demo.noCreditCard') || 'No credit card required. No obligation to purchase.'}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;
