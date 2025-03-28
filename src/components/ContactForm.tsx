
import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useToast } from '@/components/ui/use-toast';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { X } from 'lucide-react';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';

interface ContactFormProps {
  floating?: boolean;
}

const ContactForm = ({ floating = false }: ContactFormProps) => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Mock form submission
    setTimeout(() => {
      setLoading(false);
      setFormData({
        name: '',
        email: '',
        company: '',
        message: '',
      });
      toast({
        title: t('contact.success'),
        description: t('contact.successMessage'),
      });
      if (floating) setIsOpen(false);
    }, 1000);
  };

  const formContent = (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Input
          type="text"
          name="name"
          placeholder={t('contact.name')}
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full bg-white/90 border-gray-200"
        />
      </div>
      <div>
        <Input
          type="email"
          name="email"
          placeholder={t('contact.email')}
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full bg-white/90 border-gray-200"
        />
      </div>
      <div>
        <Input
          type="text"
          name="company"
          placeholder={t('contact.company')}
          value={formData.company}
          onChange={handleChange}
          required
          className="w-full bg-white/90 border-gray-200"
        />
      </div>
      <div>
        <Textarea
          name="message"
          placeholder={t('contact.message')}
          value={formData.message}
          onChange={handleChange}
          required
          className="w-full min-h-[100px] bg-white/90 border-gray-200"
        />
      </div>
      <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white font-medium py-2" disabled={loading}>
        {loading ? t('contact.sending') : t('contact.submit')}
      </Button>
    </form>
  );

  if (floating) {
    return (
      <div className="fixed top-1/4 right-4 z-50 transition-all duration-300">
        {!isOpen ? (
          <Button 
            onClick={() => setIsOpen(true)}
            className="bg-primary hover:bg-primary/90 text-white font-semibold px-4 py-2 rounded-md shadow-lg flex items-center gap-2"
          >
            {t('contact.float')}
          </Button>
        ) : (
          <div className="bg-white p-6 rounded-lg shadow-xl w-80 animate-fade-in">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">{t('contact.float')}</h3>
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={() => setIsOpen(false)}
                className="h-8 w-8"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
            {formContent}
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
      {formContent}
    </div>
  );
};

export default ContactForm;
