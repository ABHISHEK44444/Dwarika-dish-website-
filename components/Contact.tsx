
import React from 'react';
import { LocationIcon, PhoneIcon, EmailIcon, WhatsAppIcon } from './icons';
import SectionTitle from './SectionTitle';

const Contact: React.FC = () => {
  return (
    <section className="bg-slate-50 text-slate-800">
        <div className="container mx-auto px-4 py-20">
            <SectionTitle>Contact Us</SectionTitle>
            <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                {/* Left side: Info */}
                <div className="bg-white p-8 rounded-lg shadow-md">
                    <h3 className="text-2xl font-bold mb-2">Get in Touch</h3>
                    <p className="text-slate-600 mb-6">
                        We love hearing from our customers. Feel free to visit, call, or send us a message with any questions you may have.
                    </p>
                    
                    <ul className="space-y-4 text-slate-700 mb-8">
                        <li className="flex items-start gap-4">
                            <LocationIcon className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                            <span>Plot No 8, Mauja Manghatai, Icon City, Manghatai, Agra, Uttar Pradesh-283105</span>
                        </li>
                        <li className="flex items-start gap-4">
                            <PhoneIcon className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                            <a href="tel:+917018284011" className="hover:text-blue-600 transition-colors duration-300">+91-7018284011</a>
                        </li>
                         <li className="flex items-start gap-4">
                            <EmailIcon className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                            <a href="mailto:info@dwarikadheesh.com" className="hover:text-blue-600 transition-colors duration-300">info@dwarikadheesh.com</a>
                        </li>
                    </ul>

                    <a 
                        href="https://wa.me/917018284011" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-full transition duration-300 shadow-md"
                    >
                        <WhatsAppIcon className="w-6 h-6" />
                        <span>Message us on WhatsApp</span>
                    </a>
                </div>

                {/* Right side: Form */}
                <div className="bg-white p-8 rounded-lg shadow-md">
                     <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
                     <form className="space-y-4">
                        <div>
                          <label htmlFor="contact-name" className="sr-only">Name</label>
                          <input type="text" id="contact-name" placeholder="Name" className="w-full bg-slate-100 text-slate-800 placeholder-slate-500 px-4 py-3 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        </div>
                        <div>
                          <label htmlFor="contact-email" className="sr-only">Email</label>
                          <input type="email" id="contact-email" placeholder="Email" className="w-full bg-slate-100 text-slate-800 placeholder-slate-500 px-4 py-3 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        </div>
                        <div>
                          <label htmlFor="contact-phone" className="sr-only">Phone</label>
                          <input type="tel" id="contact-phone" placeholder="Phone" className="w-full bg-slate-100 text-slate-800 placeholder-slate-500 px-4 py-3 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        </div>
                        <div>
                          <label htmlFor="contact-company" className="sr-only">Company</label>
                          <input type="text" id="contact-company" placeholder="Company" className="w-full bg-slate-100 text-slate-800 placeholder-slate-500 px-4 py-3 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        </div>
                        <div>
                          <label htmlFor="contact-message" className="sr-only">Message</label>
                          <textarea id="contact-message" placeholder="Message" rows={4} className="w-full bg-slate-100 text-slate-800 placeholder-slate-500 px-4 py-3 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
                        </div>
                        <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-md transition-transform duration-300 hover:-translate-y-1 text-lg">
                          Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
        <div className="w-full h-[400px] md:h-[500px]">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d227132.8306968994!2d77.8485292026847!3d27.176229986348613!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39744d87ea23f253%3A0x6ce35a65365e9999!2sAgra%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1687876933441!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Company Location in Agra"
            ></iframe>
        </div>
    </section>
  );
};

export default Contact;