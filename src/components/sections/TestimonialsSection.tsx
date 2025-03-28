
import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Miguel Urrego",
    role: "Commercial Leader",
    company: "Poctlab",
    content: "We increased sales by 100% within the first quarter of implementing Picallex. The intuitive interface made it easy for our entire sales team to adapt quickly, and the integrated WhatsApp feature has revolutionized how we communicate with clients.",
    avatar: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=2070",
    rating: 5
  },
  {
    id: 2,
    name: "Miller Romero",
    role: "Communications Leader",
    company: "Taller Cinco",
    content: "Picallex has been a game-changer for our company. The AI automation alone has saved us countless hours on routine tasks, allowing our team to focus on high-value activities that drive real business growth.",
    avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2074",
    rating: 5
  },
  {
    id: 3,
    name: "Catalina González",
    role: "CEO",
    company: "KataGoGo",
    content: "After trying several CRM solutions, Picallex stands out for its exceptional balance of powerful features and user-friendly design. Their customer support team has been incredibly responsive, making the onboarding process smooth and efficient.",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2076",
    rating: 5
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
    <section className="py-20 bg-black text-white relative overflow-hidden">
      {/* Abstract gradient background */}
      <div className="absolute top-0 left-0 w-full h-full opacity-20">
        <div className="absolute top-20 right-20 w-80 h-80 bg-purple-600 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-primary rounded-full blur-[100px]"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl font-bold mb-16 text-center">{t('testimonials.title')}</h2>
        
        <div className="relative max-w-4xl mx-auto bg-gray-900/30 rounded-2xl p-10 backdrop-blur-sm border border-white/10">
          <div className="flex flex-col items-center text-center mb-6">
            <div className="mb-8 flex">
              {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                <Star key={i} className="h-6 w-6 text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            
            <p className="text-xl mb-10 italic leading-relaxed">"{testimonials[activeIndex].content}"</p>
            
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full overflow-hidden">
                <img 
                  src={testimonials[activeIndex].avatar} 
                  alt={testimonials[activeIndex].name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-left">
                <div className="font-semibold text-lg">{testimonials[activeIndex].name}</div>
                <div className="text-gray-400">{testimonials[activeIndex].role}, {testimonials[activeIndex].company}</div>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center mt-10 gap-4">
            <Button 
              variant="outline" 
              size="icon" 
              onClick={prevTestimonial}
              className="rounded-full border-white/20 text-white hover:bg-white/10 h-12 w-12"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="icon" 
              onClick={nextTestimonial}
              className="rounded-full border-white/20 text-white hover:bg-white/10 h-12 w-12"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
          
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${index === activeIndex ? 'bg-primary w-8' : 'bg-white/30'}`}
                onClick={() => setActiveIndex(index)}
              />
            ))}
          </div>
        </div>
        
        {/* Logos Container */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-5 gap-8 justify-items-center items-center">
          <img src="https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?q=80&w=1974" alt="Client logo" className="h-10 grayscale opacity-70 hover:opacity-100 transition-opacity duration-300" />
          <img src="https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?q=80&w=1974" alt="Client logo" className="h-10 grayscale opacity-70 hover:opacity-100 transition-opacity duration-300" />
          <img src="https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?q=80&w=1974" alt="Client logo" className="h-10 grayscale opacity-70 hover:opacity-100 transition-opacity duration-300" />
          <img src="https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?q=80&w=1974" alt="Client logo" className="h-10 grayscale opacity-70 hover:opacity-100 transition-opacity duration-300" />
          <img src="https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?q=80&w=1974" alt="Client logo" className="h-10 grayscale opacity-70 hover:opacity-100 transition-opacity duration-300" />
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
