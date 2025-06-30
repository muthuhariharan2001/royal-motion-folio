
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import DraggableCard from './DraggableCard';
import { MapPin, Mail, User, Send, Phone, Clock } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  return (
    <section className="py-20 px-4" id="contact">
      <div className="max-w-6xl mx-auto">
        <DraggableCard id="contact-title" className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">Get In Touch</h2>
          <p className="text-xl text-gray-400">Let's discuss your next project</p>
        </DraggableCard>

        <div className="grid lg:grid-cols-2 gap-12">
          <DraggableCard id="contact-info" className="premium-card">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
              <User className="mr-3 text-royal-400" size={24} />
              Contact Information
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4 interactive-hover p-4 rounded-lg hover:bg-white/5">
                <div className="w-12 h-12 bg-royal-600 rounded-full flex items-center justify-center">
                  <Mail className="text-white" size={20} />
                </div>
                <div>
                  <p className="text-gray-400">Email</p>
                  <p className="text-white font-semibold">your.email@example.com</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 interactive-hover p-4 rounded-lg hover:bg-white/5">
                <div className="w-12 h-12 bg-gold-600 rounded-full flex items-center justify-center">
                  <Phone className="text-white" size={20} />
                </div>
                <div>
                  <p className="text-gray-400">Phone</p>
                  <p className="text-white font-semibold">+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 interactive-hover p-4 rounded-lg hover:bg-white/5">
                <div className="w-12 h-12 bg-royal-600 rounded-full flex items-center justify-center">
                  <MapPin className="text-white" size={20} />
                </div>
                <div>
                  <p className="text-gray-400">Location</p>
                  <p className="text-white font-semibold">Your City, Country</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 interactive-hover p-4 rounded-lg hover:bg-white/5">
                <div className="w-12 h-12 bg-gold-600 rounded-full flex items-center justify-center">
                  <Clock className="text-white" size={20} />
                </div>
                <div>
                  <p className="text-gray-400">Available for</p>
                  <p className="text-white font-semibold">Freelance Projects</p>
                </div>
              </div>
            </div>

            {/* Embedded Map */}
            <div className="mt-8 rounded-lg overflow-hidden interactive-hover">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1841!2d-73.9857!3d40.7484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1634567890123!5m2!1sen!2sus"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg"
              ></iframe>
            </div>
          </DraggableCard>

          <DraggableCard id="contact-form" className="premium-card">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
              <Send className="mr-3 text-gold-400" size={24} />
              Send Message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Your Name
                </label>
                <Input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={handleChange}
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-royal-500 focus:ring-royal-500"
                  required
                  style={{ userSelect: 'text' }}
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Your Email
                </label>
                <Input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Enter your email address"
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-royal-500 focus:ring-royal-500"
                  required
                  style={{ userSelect: 'text' }}
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Your Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell me about your project..."
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 resize-none focus:border-royal-500 focus:ring-royal-500"
                  required
                  style={{ userSelect: 'text' }}
                />
              </div>
              
              <Button
                type="submit"
                className="w-full bg-royal-600 hover:bg-royal-700 text-white py-3 text-lg rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl animate-pulse-glow"
              >
                <Send className="mr-2" size={20} />
                Send Message
              </Button>
            </form>
          </DraggableCard>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
