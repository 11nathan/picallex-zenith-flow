
import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Miguel Urrego",
    role: "Commercial Leader",
    company: "Poctlab",
    content: "We increased sales by 100%. The support from the Picallex team has been fundamental.",
    avatar: "/lovable-uploads/c7faa959-9a20-4736-8e86-b22ace718af7.png"
  },
  {
    id: 2,
    name: "Miller Romero",
    role: "Communications Leader",
    company: "Taller Cinco",
    content: "Picallex has been a great ally to improve our commercial operation, automate tasks and optimize our marketing investment.",
    avatar: "/lovable-uploads/c7faa959-9a20-4736-8e86-b22ace718af7.png"
  },
  {
    id: 3,
    name: "Catalina González",
    role: "CEO",
    company: "KataGoGo",
    content: "Picallex not only offers robust and friendly software, but also exceptional service that ensures we make the most of the tool.",
    avatar: "/lovable-uploads/c7faa959-9a20-4736-8e86-b22ace718af7.png"
  }
];

const TestimonialsSection = () => {
  const { t } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-black text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">{t('testimonials.title')}</h2>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="flex flex-col items-center text-center px-6 md:px-0">
            <div className="w-20 h-20 rounded-full overflow-hidden mb-6">
              <img 
                src={testimonials[activeIndex].avatar} 
                alt={testimonials[activeIndex].name} 
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-lg mb-6 italic">"{testimonials[activeIndex].content}"</p>
            <div className="mb-2 font-semibold">{testimonials[activeIndex].name}</div>
            <div className="text-sm text-gray-400">{testimonials[activeIndex].role}, {testimonials[activeIndex].company}</div>
          </div>
          
          <div className="flex justify-center mt-10 gap-4">
            <Button 
              variant="outline" 
              size="icon" 
              onClick={prevTestimonial}
              className="rounded-full border-white/20 text-white hover:bg-white/10"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button 
              variant="outline" 
              size="icon" 
              onClick={nextTestimonial}
              className="rounded-full border-white/20 text-white hover:bg-white/10"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
          
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full ${index === activeIndex ? 'bg-primary' : 'bg-white/30'}`}
                onClick={() => setActiveIndex(index)}
              />
            ))}
          </div>
        </div>
        
        {/* Logos Container */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-5 gap-8 justify-items-center items-center">
          <div className="bg-white/10 h-12 w-full max-w-[140px] rounded-md"></div>
          <div className="bg-white/10 h-12 w-full max-w-[140px] rounded-md"></div>
          <div className="bg-white/10 h-12 w-full max-w-[140px] rounded-md"></div>
          <div className="bg-white/10 h-12 w-full max-w-[140px] rounded-md"></div>
          <div className="bg-white/10 h-12 w-full max-w-[140px] rounded-md"></div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
