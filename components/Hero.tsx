import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeftIcon, ChevronRightIcon } from './icons';

const slidesData = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=1920',
    title: 'Your Premier Source for',
    highlight: 'Quality Materials & Services.',
    subtitle: 'Delivering excellence and reliability for all your project needs in Agra and beyond.',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=1920',
    title: 'Over 3000+ Happy Customers',
    highlight: 'A Legacy of Trust.',
    subtitle: 'We build long-lasting relationships by focusing on your satisfaction and needs.',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=1920',
    title: 'Unmatched Product Availability',
    highlight: 'Everything You Need, In One Place.',
    subtitle: 'From industrial components to building materials, we have you covered.',
  }
];

const Hero: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slidesData.length);
  }, []);

  const goToPrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slidesData.length) % slidesData.length);
  };
  
  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  }

  useEffect(() => {
    const timer = setTimeout(goToNext, 7000);
    return () => clearTimeout(timer);
  }, [currentIndex, goToNext]);

  const activeSlide = slidesData[currentIndex];

  return (
    <section className="relative bg-slate-900 text-white h-[600px] md:h-[80vh] flex items-center justify-center overflow-hidden z-10">
      {/* Background Images */}
      {slidesData.map((slide, index) => (
        <div 
          key={slide.id} 
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentIndex ? 'opacity-40' : 'opacity-0'}`}
        >
          <img 
            src={slide.image} 
            alt={`Slide ${slide.id}`} 
            className="w-full h-full object-cover"
          />
        </div>
      ))}
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Slide Content */}
      <div className="relative container mx-auto px-4 z-20 text-center">
        <div key={activeSlide.id} className="animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4 max-w-4xl mx-auto [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]">
              {activeSlide.title}
              <span className="block text-blue-400">{activeSlide.highlight}</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-200 max-w-2xl mx-auto mb-8 [text-shadow:0_1px_3px_rgba(0,0,0,0.5)]">
              {activeSlide.subtitle}
            </p>
            <div className="flex flex-wrap justify-center items-center gap-4">
                <Link to="/contact" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-md transition-transform duration-300 hover:-translate-y-1 text-lg shadow-lg">
                  Get a Quote
                </Link>
                <Link to="/products" className="bg-transparent border-2 border-white hover:bg-white hover:text-slate-900 text-white font-bold py-3 px-8 rounded-md transition-all duration-300 text-lg shadow-lg">
                  Our Products
                </Link>
            </div>
        </div>
      </div>
      
      {/* Navigation Arrows */}
      <button onClick={goToPrev} className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-2 bg-white/20 hover:bg-white/40 rounded-full transition-colors duration-300" aria-label="Previous Slide">
        <ChevronLeftIcon className="w-6 h-6 text-white"/>
      </button>
      <button onClick={goToNext} className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-2 bg-white/20 hover:bg-white/40 rounded-full transition-colors duration-300" aria-label="Next Slide">
        <ChevronRightIcon className="w-6 h-6 text-white"/>
      </button>

      {/* Navigation Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-3">
        {slidesData.map((_, index) => (
            <button key={index} onClick={() => goToSlide(index)} className={`w-3 h-3 rounded-full transition-all duration-300 ${currentIndex === index ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/75'}`} aria-label={`Go to slide ${index + 1}`}></button>
        ))}
      </div>

      <style>{`
        @keyframes fade-in-up {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default Hero;