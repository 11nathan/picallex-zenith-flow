
import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'es';

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    "hero.title": "Transform Your Customer Relationships with Picallex CRM",
    "hero.subtitle": "The all-in-one platform that helps businesses automate sales, nurture leads, and deliver exceptional customer experiences.",
    "hero.cta": "Start Your Free Trial",
    "feature1.title": "Powerful Omnichannel Sales Pipeline",
    "feature1.description": "Manage your entire sales process from lead to close with a customizable, visual pipeline that gives you full visibility of your sales activities.",
    "feature2.title": "Seamless WhatsApp Integration",
    "feature2.description": "Connect with customers where they already are. Our native WhatsApp integration lets you send messages, track conversations, and close deals—all from one platform.",
    "feature3.title": "AI-Powered Automation & Chatbots",
    "feature3.description": "Let our intelligent AI handle routine inquiries, qualify leads, and schedule follow-ups. Free your team to focus on what matters most: closing deals.",
    "feature4.title": "Enterprise-Grade IP Telephony",
    "feature4.description": "Make and receive calls directly from your CRM. Record conversations, set up intelligent routing, and analyze call data to optimize your sales approach.",
    "testimonials.title": "Trusted by Growing Businesses Everywhere",
    "pricing.title": "Simple, Transparent Pricing for Every Business",
    "pricing.basic": "Essential",
    "pricing.advanced": "Professional",
    "pricing.enterprise": "Enterprise",
    "pricing.cta": "Start Free Trial",
    "pricing.monthly": "month",
    "pricing.annual": "year",
    "pricing.upTo": "For up to",
    "pricing.users": "team members",
    "pricing.features": "What's Included",
    "pricing.feature1": "Core CRM Functionality",
    "pricing.feature2": "WhatsApp Integration",
    "pricing.feature3": "Email Marketing Suite",
    "pricing.feature4": "AI Automation Tools",
    "pricing.feature5": "Advanced Analytics Dashboard",
    "pricing.feature6": "Dedicated Success Manager",
    "final.title": "Ready to Transform Your Business with Picallex?",
    "contact.name": "Your Name",
    "contact.email": "Business Email",
    "contact.company": "Company Name",
    "contact.message": "How can we help you?",
    "contact.submit": "Submit Request",
    "contact.sending": "Sending...",
    "contact.float": "Contact Us",
    "contact.success": "Message Sent",
    "contact.successMessage": "We'll get back to you as soon as possible.",
  },
  es: {
    "hero.title": "Transforma Tus Relaciones con Clientes usando Picallex CRM",
    "hero.subtitle": "La plataforma todo-en-uno que ayuda a las empresas a automatizar ventas, nutrir leads y ofrecer experiencias excepcionales.",
    "hero.cta": "Comienza Tu Prueba Gratis",
    "feature1.title": "Potente Pipeline de Ventas Omnicanal",
    "feature1.description": "Gestiona todo tu proceso de ventas desde el lead hasta el cierre con un pipeline visual personalizable que te da visibilidad completa de tus actividades.",
    "feature2.title": "Integración Perfecta con WhatsApp",
    "feature2.description": "Conéctate con clientes donde ya están. Nuestra integración nativa con WhatsApp te permite enviar mensajes, seguir conversaciones y cerrar acuerdos—todo desde una plataforma.",
    "feature3.title": "Automatización e IA Avanzada",
    "feature3.description": "Deja que nuestra IA inteligente maneje consultas rutinarias, califique leads y programe seguimientos. Libera a tu equipo para que se enfoque en lo más importante: cerrar acuerdos.",
    "feature4.title": "Telefonía IP de Nivel Empresarial",
    "feature4.description": "Realiza y recibe llamadas directamente desde tu CRM. Graba conversaciones, configura enrutamiento inteligente y analiza datos de llamadas para optimizar tu enfoque de ventas.",
    "testimonials.title": "Confiado por Empresas en Crecimiento en Todas Partes",
    "pricing.title": "Precios Simples y Transparentes para Cada Negocio",
    "pricing.basic": "Esencial",
    "pricing.advanced": "Profesional",
    "pricing.enterprise": "Empresarial",
    "pricing.cta": "Iniciar Prueba Gratis",
    "pricing.monthly": "mes",
    "pricing.annual": "año",
    "pricing.upTo": "Para hasta",
    "pricing.users": "miembros del equipo",
    "pricing.features": "Lo que Incluye",
    "pricing.feature1": "Funcionalidad Central de CRM",
    "pricing.feature2": "Integración con WhatsApp",
    "pricing.feature3": "Suite de Email Marketing",
    "pricing.feature4": "Herramientas de Automatización IA",
    "pricing.feature5": "Panel de Análisis Avanzado",
    "pricing.feature6": "Gerente de Éxito Dedicado",
    "final.title": "¿Listo para Transformar tu Negocio con Picallex?",
    "contact.name": "Tu Nombre",
    "contact.email": "Email de Negocio",
    "contact.company": "Nombre de la Empresa",
    "contact.message": "¿Cómo podemos ayudarte?",
    "contact.submit": "Enviar Solicitud",
    "contact.sending": "Enviando...",
    "contact.float": "Contáctanos",
    "contact.success": "Mensaje Enviado",
    "contact.successMessage": "Nos pondremos en contacto contigo lo antes posible.",
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
