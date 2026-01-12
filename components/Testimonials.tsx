
import React, { useState, useEffect, useCallback } from 'react';
import SectionTitle from './SectionTitle';
import { ChevronLeftIcon, ChevronRightIcon } from './icons';

const testimonialsData = [
  {
    quote: "Their delivery is always on time, and the customer service is outstanding. They truly understand our needs and help us meet our deadlines without fail.",
    name: "Priya Sharma",
    company: "Innovative Designs Ltd.",
    avatar: "https://picsum.photos/seed/avatar2/100/100",
  },
  {
    quote: "The quality of materials and the professionalism of the team at Dwarikadheesh Materials are second to none. They are our go-to supplier for every project.",
    name: "Rajesh Kumar",
    company: "BuildWell Constructions",
    avatar: "https://picsum.photos/seed/avatar1/100/100",
  },
  {
    quote: "A reliable partner for any construction or industrial need. Their wide range of products and expert advice have been invaluable to our operations.",
    name: "Amit Singh",
    company: "Agra Infrastructure",
    avatar: "https://picsum.photos/seed/avatar3/100/100",
  },
];

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialsData.length);
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonialsData.length) % testimonialsData.length);
  };

  useEffect(() => {
    const slideInterval = setInterval(nextSlide, 7000); // Auto-scroll every 7 seconds
    return () => clearInterval(slideInterval);
  }, [nextSlide]);

  return (
    <section className="py-20 bg-slate-100">
      <div className="container mx-auto px-4">
        <SectionTitle>What Our Clients Say</SectionTitle>
        <div className="relative max-w-3xl mx-auto">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonialsData.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 text-center px-8 flex flex-col items-center">
                  <div className="relative mb-6">
                    <img src={testimonial.avatar} alt={testimonial.name} className="w-28 h-28 rounded-full mx-auto ring-8 ring-white/50 shadow-lg" />
                    <div className="absolute inset-0 rounded-full ring-4 ring-blue-300 ring-opacity-50 animate-pulse-slow"></div>
                  </div>
                  <p className="text-xl italic text-slate-700 mb-6 max-w-2xl">"{testimonial.quote}"</p>
                  <h4 className="font-bold text-slate-900 text-lg">{testimonial.name}</h4>
                  <p className="text-sm text-slate-500">{testimonial.company}</p>
                </div>
              ))}
            </div>
          </div>
          <button
            onClick={prevSlide}
            className="absolute top-1/2 -left-4 md:-left-16 transform -translate-y-1/2 bg-white w-12 h-12 flex items-center justify-center rounded-full shadow-md hover:bg-slate-100 transition-transform duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Previous testimonial"
          >
            <ChevronLeftIcon className="w-6 h-6 text-slate-600" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 -right-4 md:-right-16 transform -translate-y-1/2 bg-white w-12 h-12 flex items-center justify-center rounded-full shadow-md hover:bg-slate-100 transition-transform duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Next testimonial"
          >
            <ChevronRightIcon className="w-6 h-6 text-slate-600" />
          </button>
          <div className="flex justify-center mt-8 space-x-3">
            {testimonialsData.map((_, index) => (
                <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full ${currentIndex === index ? 'bg-blue-600 scale-125' : 'bg-slate-300 hover:bg-slate-400'} transition-all duration-300 focus:outline-none`}
                    aria-label={`Go to slide ${index + 1}`}
                />
            ))}
          </div>
        </div>
      </div>
      <style>{`
        @keyframes pulse-slow {
          0%, 100% {
            transform: scale(1);
            opacity: 0.5;
          }
          50% {
            transform: scale(1.05);
            opacity: 0.8;
          }
        }
        .animate-pulse-slow {
          animation: pulse-slow 4s infinite ease-in-out;
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
