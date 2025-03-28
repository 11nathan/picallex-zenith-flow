
import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useToast } from '@/components/ui/use-toast';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

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
        title: "Message sent",
        description: "We'll get back to you as soon as possible.",
      });
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit} className={`bg-white p-6 rounded-lg shadow-lg ${floating ? 'fixed top-1/4 right-4 z-50 w-80' : 'w-full max-w-md'}`}>
      {floating && (
        <div className="text-lg font-bold mb-4">{t('contact.float')}</div>
      )}
      <div className="space-y-4">
        <div>
          <Input
            type="text"
            name="name"
            placeholder={t('contact.name')}
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full"
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
            className="w-full"
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
            className="w-full"
          />
        </div>
        <div>
          <Textarea
            name="message"
            placeholder={t('contact.message')}
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full min-h-[100px]"
          />
        </div>
        <Button type="submit" className="w-full bg-primary hover:bg-primary/90" disabled={loading}>
          {loading ? 'Sending...' : t('contact.submit')}
        </Button>
      </div>
    </form>
  );
};

export default ContactForm;
