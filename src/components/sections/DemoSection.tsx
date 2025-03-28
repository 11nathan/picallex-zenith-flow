
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { ArrowRight, PresentationIcon } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const DemoSection = () => {
  const { t } = useLanguage();

  const clientLogos = [
    { name: "Acme Corp", logo: "https://placehold.co/150x60/f5f5f5/333?text=ACME" },
    { name: "TechGiant", logo: "https://placehold.co/150x60/f5f5f5/333?text=TechGiant" },
    { name: "Innovate Inc", logo: "https://placehold.co/150x60/f5f5f5/333?text=Innovate" },
    { name: "GlobalSoft", logo: "https://placehold.co/150x60/f5f5f5/333?text=GlobalSoft" },
    { name: "DataFlow", logo: "https://placehold.co/150x60/f5f5f5/333?text=DataFlow" },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="inline-flex items-center justify-center p-2 bg-primary/10 rounded-full mb-6">
                <PresentationIcon className="w-5 h-5 text-primary mr-2" />
                <span className="text-sm font-medium text-primary">{t('demo.exclusive')}</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold mb-6">{t('demo.title') || 'Get a Personalized Demo'}</h2>
              
              <p className="text-xl text-gray-600 mb-10">
                {t('demo.description') || 'See how Picallex CRM can transform your business operations with a customized demonstration tailored to your specific needs.'}
              </p>
              
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 text-left mb-8">
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
                
                <Button 
                  className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-2 w-full justify-center"
                >
                  {t('demo.cta') || 'Request Your Demo Now'}
                  <ArrowRight className="h-5 w-5" />
                </Button>
                <p className="text-gray-500 mt-4 text-sm text-center">
                  {t('demo.noCreditCard') || 'No credit card required. No obligation to purchase.'}
                </p>
              </div>
              
              {/* Client Logos */}
              <div className="mt-12">
                <p className="text-sm text-gray-500 mb-4 text-center">{t('demo.trustedBy') || 'Trusted by growing businesses everywhere'}</p>
                <div className="flex flex-wrap justify-center gap-8 items-center">
                  {clientLogos.map((client, index) => (
                    <div key={index} className="grayscale hover:grayscale-0 transition-all opacity-70 hover:opacity-100">
                      <img src={client.logo} alt={client.name} className="h-8 object-contain" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="order-1 md:order-2 flex justify-center">
              <div className="relative rounded-xl overflow-hidden shadow-2xl border-8 border-white max-w-md">
                <img 
                  src="https://www.picallex.com/wp-content/uploads/2024/08/webphone.png.webp" 
                  alt="Picallex WebPhone Demo" 
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;
