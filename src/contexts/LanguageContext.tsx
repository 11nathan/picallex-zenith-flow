
import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'es';

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    "hero.title": "The CRM That Grows With Your Business",
    "hero.subtitle": "Automate sales, manage leads, and boost productivity with Picallex.",
    "hero.cta": "Try for Free",
    "feature1.title": "Omnichannel Sales Pipeline",
    "feature1.description": "Track and manage leads effortlessly in one place.",
    "feature2.title": "WhatsApp CRM Integration",
    "feature2.description": "Unify all customer conversations from WhatsApp and other channels.",
    "feature3.title": "AI Chatbots & Automation",
    "feature3.description": "Automate responses, collect leads, and save time.",
    "feature4.title": "IP Telephony Integration",
    "feature4.description": "Cloud-based calling directly from your CRM.",
    "testimonials.title": "What Our Clients Say",
    "pricing.title": "Simple, Transparent Plans",
    "pricing.basic": "Basic",
    "pricing.advanced": "Advanced",
    "pricing.enterprise": "Enterprise",
    "pricing.cta": "Try for Free",
    "pricing.monthly": "Monthly",
    "pricing.users": "users",
    "pricing.features": "Features",
    "pricing.feature1": "CRM Basic Features",
    "pricing.feature2": "WhatsApp Integration",
    "pricing.feature3": "Email Integration",
    "pricing.feature4": "AI Automation",
    "pricing.feature5": "Advanced Analytics",
    "pricing.feature6": "Priority Support",
    "final.title": "Boost Your Business with Picallex Today!",
    "contact.name": "Name",
    "contact.email": "Email",
    "contact.company": "Company",
    "contact.message": "Message",
    "contact.submit": "Submit",
    "contact.float": "Contact Us",
  },
  es: {
    "hero.title": "El CRM Que Crece Con Tu Negocio",
    "hero.subtitle": "Automatiza ventas, gestiona leads y aumenta la productividad con Picallex.",
    "hero.cta": "Prueba Gratis",
    "feature1.title": "Pipeline de Ventas Omnicanal",
    "feature1.description": "Rastrea y gestiona leads sin esfuerzo en un solo lugar.",
    "feature2.title": "Integración de WhatsApp CRM",
    "feature2.description": "Unifica todas las conversaciones de clientes desde WhatsApp y otros canales.",
    "feature3.title": "Chatbots de IA y Automatización",
    "feature3.description": "Automatiza respuestas, captura leads y ahorra tiempo.",
    "feature4.title": "Integración de Telefonía IP",
    "feature4.description": "Llamadas basadas en la nube directamente desde tu CRM.",
    "testimonials.title": "Lo Que Dicen Nuestros Clientes",
    "pricing.title": "Planes Simples y Transparentes",
    "pricing.basic": "Básico",
    "pricing.advanced": "Avanzado",
    "pricing.enterprise": "Empresarial",
    "pricing.cta": "Prueba Gratis",
    "pricing.monthly": "Mensual",
    "pricing.users": "usuarios",
    "pricing.features": "Características",
    "pricing.feature1": "Funciones Básicas de CRM",
    "pricing.feature2": "Integración con WhatsApp",
    "pricing.feature3": "Integración de Email",
    "pricing.feature4": "Automatización con IA",
    "pricing.feature5": "Análisis Avanzados",
    "pricing.feature6": "Soporte Prioritario",
    "final.title": "¡Impulsa Tu Negocio con Picallex Hoy!",
    "contact.name": "Nombre",
    "contact.email": "Correo",
    "contact.company": "Empresa",
    "contact.message": "Mensaje",
    "contact.submit": "Enviar",
    "contact.float": "Contáctanos",
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
