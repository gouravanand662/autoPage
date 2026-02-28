"use client";

import { DataContext } from "../context/DataContext";
import { useData } from "../context/DataContext";
import { supabase } from "../lib/supabase";
import { businesses } from "../lib/data";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { createClient } from "@supabase/supabase-js";
import {
  Menu,
  X,
  MapPin,
  Phone,
  Mail,
  Instagram,
  Facebook,
  Twitter,
  ArrowRight,
  Play,
  Flower,
  Star,
  Plus,
  Minus,
  ChevronRight,
} from "lucide-react";

type Business = {
  slug: string;
  name: string;
  city: string;
  phone: string;
  description: string;
};

// const data = useData();

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const data = useData();

  return (
    <nav className="fixed w-full z-50 bg-[#FAF9F6]/90 backdrop-blur-md border-b border-[#5A7D7C]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center gap-2">
            <Flower className="w-8 h-8 text-[#5A7D7C]" />
            <span className="font-serif text-3xl font-bold text-[#5A7D7C]">
              YoGuys{data.name}
            </span>
          </div>
          <div className="hidden md:flex space-x-8 items-center">
            <a
              href="#home"
              className="text-gray-700 hover:text-[#5A7D7C] transition-colors"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-gray-700 hover:text-[#5A7D7C] transition-colors"
            >
              About
            </a>
            <a
              href="#classes"
              className="text-gray-700 hover:text-[#5A7D7C] transition-colors"
            >
              Classes
            </a>
            <a
              href="#experts"
              className="text-gray-700 hover:text-[#5A7D7C] transition-colors"
            >
              Experts
            </a>
            <a
              href="#contact"
              className="text-gray-700 hover:text-[#5A7D7C] transition-colors"
            >
              Contact
            </a>
            <button className="bg-[#5A7D7C] text-white px-6 py-2.5 rounded-full hover:bg-[#4A6A69] transition-colors font-medium">
              Book a Session
            </button>
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-[#FAF9F6] border-b border-[#5A7D7C]/10">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="#home"
              className="block px-3 py-2 text-gray-700 hover:text-[#5A7D7C]"
              onClick={() => setIsOpen(false)}
            >
              Home
            </a>
            <a
              href="#about"
              className="block px-3 py-2 text-gray-700 hover:text-[#5A7D7C]"
              onClick={() => setIsOpen(false)}
            >
              About
            </a>
            <a
              href="#classes"
              className="block px-3 py-2 text-gray-700 hover:text-[#5A7D7C]"
              onClick={() => setIsOpen(false)}
            >
              Classes
            </a>
            <a
              href="#experts"
              className="block px-3 py-2 text-gray-700 hover:text-[#5A7D7C]"
              onClick={() => setIsOpen(false)}
            >
              Experts
            </a>
            <a
              href="#contact"
              className="block px-3 py-2 text-gray-700 hover:text-[#5A7D7C]"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </a>
            <button className="w-full text-left px-3 py-2 text-[#5A7D7C] font-medium">
              Book a Session
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

const Hero = () => {
  return (
    <section
      id="home"
      className="relative pt-24 pb-12 lg:pt-40 lg:pb-32 overflow-hidden bg-[#F5F5F0]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-[#EAEAE5] rounded-[2rem] lg:rounded-[3rem] p-0 lg:p-0 grid lg:grid-cols-2 gap-0 items-center relative overflow-hidden min-h-[600px] lg:min-h-[700px]">
          {/* Background decorative circles */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none z-10"></div>
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#5A7D7C]/5 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3 pointer-events-none z-10"></div>

          {/* Unified Image Background with Fade */}
          <div className="absolute inset-0 w-full h-full">
            <img
              src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1200&auto=format&fit=crop"
              alt="Yoga pose"
              className="w-full h-full object-cover object-center lg:object-right"
              referrerPolicy="no-referrer"
            />
            {/* Gradient Overlay - Fades image into background color */}
            <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-[#EAEAE5] via-[#EAEAE5]/80 to-transparent lg:via-[#EAEAE5]/60 lg:to-transparent"></div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-20 p-8 lg:p-16 mt-auto lg:mt-0 lg:col-span-1"
          >
            <h1 className="text-4xl lg:text-7xl font-serif text-gray-900 leading-[1.1] mb-6">
              {"You're Not Alone"} <br />
              <span className="text-[#E07A5F]">Healing</span> Starts Here
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-md leading-relaxed">
              YoGuys provides care & professional yoga support for your journey.
              Find balance, strength, and tranquility.
            </p>

            <button className="bg-[#8D7B68] text-white px-8 py-4 rounded-full hover:bg-[#7D6B58] transition-colors font-medium flex items-center group mb-12">
              Book A Session
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-3xl shadow-sm inline-block max-w-sm border border-white/50">
              <div className="flex items-center gap-2 mb-3">
                <div className="flex -space-x-3">
                  {[1, 2, 3].map((i) => (
                    <img
                      key={i}
                      src={`https://i.pravatar.cc/100?img=${i + 20}`}
                      alt="User"
                      className="w-10 h-10 rounded-full border-2 border-white"
                    />
                  ))}
                </div>
                <div className="flex text-[#E07A5F]">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
              </div>
              <p className="text-sm text-gray-600 leading-snug">
                Over 300 individuals who have confidently trusted YoGuys for
                their overall well-being.
              </p>
            </div>
          </motion.div>

          {/* Empty div for grid spacing on desktop */}
          <div className="hidden lg:block lg:col-span-1"></div>
        </div>
      </div>
    </section>
  );
};

const Experts = () => {
  const experts = [
    {
      name: "Sarah Jenkins",
      role: "Senior Yoga Teacher",
      image:
        "https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=800&auto=format&fit=crop",
    },
    {
      name: "David Chen",
      role: "Meditation Guide",
      image:
        "https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&w=800&auto=format&fit=crop",
    },
    {
      name: "Elena Rodriguez",
      role: "Vinyasa Specialist",
      image:
        "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=800&auto=format&fit=crop",
    },
    {
      name: "Michael Chang",
      role: "Hatha Instructor",
      image:
        "https://images.unsplash.com/photo-1566577739112-5180d4bf9390?q=80&w=800&auto=format&fit=crop",
    },
  ];

  return (
    <section id="experts" className="py-24 bg-[#FAF9F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl font-serif text-gray-900 mb-6">
            Meet Our <span className="text-[#E07A5F] italic">Instructors</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Our instructors have diverse specialties and share a mission — to
            support you with care throughout your yoga journey.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {experts.map((expert, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group"
            >
              <div className="bg-[#EAEAE5] rounded-[1.5rem] lg:rounded-[2rem] overflow-hidden mb-4 lg:mb-6 aspect-[4/5]">
                <img
                  src={expert.image}
                  alt={expert.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>
              <h3 className="text-lg lg:text-xl font-bold text-gray-900 mb-1">
                {expert.name}
              </h3>
              <p className="text-gray-500 text-xs lg:text-sm">{expert.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What exactly is yoga therapy?",
      answer:
        "Yoga therapy is a personalized approach to health that uses yoga postures, breathing exercises, and meditation to address specific physical or mental health needs.",
    },
    {
      question: "How do I book a class?",
      answer:
        "Booking is simple! Just click the 'Book a Session' button, choose your preferred class and time slot, and complete the registration process.",
    },
    {
      question: "Do I need prior experience?",
      answer:
        "Not at all! We offer classes for all levels, from complete beginners to advanced practitioners. Our instructors will guide you through every step.",
    },
    {
      question: "What should I bring?",
      answer:
        "We recommend bringing a water bottle and comfortable clothing. We provide high-quality mats and props, but you are welcome to bring your own if you prefer.",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-serif text-gray-900 mb-4">
            FAQs
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Common questions about our studio, classes, and what to expect on
            your first visit.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-200 pb-4">
                <button
                  className="w-full flex justify-between items-center py-4 text-left focus:outline-none"
                  onClick={() =>
                    setActiveIndex(activeIndex === index ? null : index)
                  }
                >
                  <span
                    className={`text-lg font-medium ${
                      activeIndex === index ? "text-[#E07A5F]" : "text-gray-900"
                    }`}
                  >
                    {faq.question}
                  </span>
                  <span className="ml-4 text-gray-400">
                    {activeIndex === index ? (
                      <Minus size={20} />
                    ) : (
                      <ChevronRight size={20} />
                    )}
                  </span>
                </button>
                <AnimatePresence>
                  {activeIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="text-gray-600 pb-4 leading-relaxed">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          <div className="relative rounded-[2rem] overflow-hidden h-[500px]">
            <img
              src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1200&auto=format&fit=crop"
              alt="Yoga session"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?q=80&w=800&auto=format&fit=crop"
              alt="Yoga pose"
              className="rounded-3xl w-full h-64 object-cover mt-8"
              referrerPolicy="no-referrer"
            />
            <img
              src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=800&auto=format&fit=crop"
              alt="Meditation"
              className="rounded-3xl w-full h-64 object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div>
            <span className="text-[#D4A373] font-medium tracking-wider uppercase text-sm mb-4 block">
              About YoGuys
            </span>
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-gray-900 mb-6">
              A Community Dedicated to{" "}
              <span className="italic text-[#5A7D7C] font-normal">
                Holistic Wellness
              </span>
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              {"At YoGuys, we believe that yoga is more than just physical
              exercise; it's a journey of self-discovery and inner peace. Our
              studio provides a welcoming, inclusive environment where
              practitioners of all levels can explore the transformative power
              of yoga."}
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              {"Whether you're looking to build strength, increase flexibility, or
              simply find a moment of calm in your busy day, our experienced
              instructors are here to guide you every step of the way."}
            </p>
            <ul className="space-y-4 mb-8">
              {[
                "Certified & Experienced Instructors",
                "Peaceful & Calming Environment",
                "Classes for All Experience Levels",
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex items-center text-gray-800 font-medium"
                >
                  <div className="w-6 h-6 rounded-full bg-[#E8E4D9] flex items-center justify-center mr-3 text-[#5A7D7C]">
                    ✓
                  </div>
                  {item}
                </li>
              ))}
            </ul>
            <button className="bg-gray-900 text-white px-8 py-4 rounded-full hover:bg-gray-800 transition-colors font-medium">
              Learn More About Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const Classes = () => {
  const classes = [
    {
      title: "Vinyasa Flow",
      image:
        "https://images.unsplash.com/photo-1552286450-37699686dd3b?q=80&w=800&auto=format&fit=crop",
      level: "All Levels",
      duration: "60 Min",
    },
    {
      title: "Hatha Yoga",
      image:
        "https://images.unsplash.com/photo-1510894347713-fc3ed6fdf539?q=80&w=800&auto=format&fit=crop",
      level: "Beginner",
      duration: "45 Min",
    },
    {
      title: "Ashtanga Series",
      image:
        "https://images.unsplash.com/photo-1593810450967-f9c427ce3722?q=80&w=800&auto=format&fit=crop",
      level: "Advanced",
      duration: "90 Min",
    },
    {
      title: "Restorative",
      image:
        "https://images.unsplash.com/photo-1522845015757-50bce044e5da?q=80&w=800&auto=format&fit=crop",
      level: "All Levels",
      duration: "60 Min",
    },
  ];

  return (
    <section id="classes" className="py-20 bg-[#FAF9F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[#D4A373] font-medium tracking-wider uppercase text-sm mb-4 block">
            Our Classes
          </span>
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-gray-900 mb-6">
            Find the Perfect{" "}
            <span className="italic text-[#5A7D7C] font-normal">Practice</span>
          </h2>
          <p className="text-gray-600">
            Explore our diverse range of classes designed to nurture your body,
            mind, and spirit.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {classes.map((cls, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="bg-white rounded-2xl md:rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-40 md:h-64">
                <img
                  src={cls.image}
                  alt={cls.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-2 right-2 md:top-4 md:right-4 bg-white/90 backdrop-blur-sm px-2 py-1 md:px-3 md:py-1 rounded-full text-[10px] md:text-xs font-bold text-gray-900">
                  {cls.level}
                </div>
              </div>
              <div className="p-4 md:p-6">
                <h3 className="font-serif text-lg md:text-2xl font-bold text-gray-900 mb-1 md:mb-2">
                  {cls.title}
                </h3>
                <div className="flex items-center text-gray-500 text-xs md:text-sm mb-3 md:mb-4">
                  <span className="flex items-center">
                    <Play className="w-3 h-3 md:w-4 md:h-4 mr-1" />{" "}
                    {cls.duration}
                  </span>
                </div>
                <button className="w-full py-2 md:py-3 rounded-xl border border-gray-200 text-gray-900 font-medium text-sm md:text-base hover:bg-[#5A7D7C] hover:text-white hover:border-[#5A7D7C] transition-colors">
                  Book Class
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Location = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-[#D4A373] font-medium tracking-wider uppercase text-sm mb-4 block">
              Visit Us
            </span>
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-gray-900 mb-6">
              Our{" "}
              <span className="italic text-[#5A7D7C] font-normal">
                Sanctuary
              </span>
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Step into our peaceful oasis designed to help you leave the stress
              of the city behind. Our studio features natural light,
              eco-friendly props, and a calming atmosphere.
            </p>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-[#E8E4D9] rounded-full flex items-center justify-center text-[#5A7D7C] flex-shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div className="ml-4">
                  <h4 className="font-bold text-gray-900 text-lg">Location</h4>
                  <p className="text-gray-600">
                    123 Zen Avenue, Wellness District
                    <br />
                    New York, NY 10001
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-[#E8E4D9] rounded-full flex items-center justify-center text-[#5A7D7C] flex-shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div className="ml-4">
                  <h4 className="font-bold text-gray-900 text-lg">Contact</h4>
                  <p className="text-gray-600">
                    +1 (555) 123-4567
                    <br />
                    hello@yoguys.com
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="h-[500px] rounded-3xl overflow-hidden shadow-lg relative">
            {/* Modern embedded map using an iframe */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.617540828236!2d-73.98785308459418!3d40.74844047932847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1629790000000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              className="grayscale contrast-125 opacity-90 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
            ></iframe>
            <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-lg">
              <h4 className="font-serif font-bold text-gray-900">
                YoGuys Studio
              </h4>
              <p className="text-sm text-gray-600">Open Today: 6am - 9pm</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Stats = () => {
  const stats = [
    { number: "10+", label: "Caring for your mental health is vital." },
    {
      number: "1,500+",
      label: "Helping clients to live their best lives every day!",
    },
    { number: "25+", label: "Therapists licensed and compassionate" },
    {
      number: "95%",
      label: "Satisfaction clients feel improved significantly",
    },
  ];

  return (
    <section className="py-16 bg-[#A0A06D] text-white">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="grid grid-cols-4 gap-2 md:gap-8 text-center">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <h3 className="text-2xl md:text-5xl font-serif font-bold mb-2">
                {stat.number}
              </h3>
              <p className="text-white/90 text-[10px] md:text-base max-w-[200px] mx-auto leading-relaxed">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Pricing = () => {
  const plans = [
    {
      name: "SILVER PACKAGE",
      price: "30",
      features: [
        "Free T-Shirt & swags",
        "Free of all message treatments",
        "Access Club Facilities",
        "Out Door activities",
      ],
    },
    {
      name: "GOLD PACKAGE",
      price: "50",
      features: [
        "Free T-Shirt & swags",
        "Free of all message treatments",
        "Access Club Facilities",
        "Out Door activities",
      ],
    },
    {
      name: "PLATINUM PACKAGE",
      price: "70",
      features: [
        "Free T-Shirt & swags",
        "Free of all message treatments",
        "Access Club Facilities",
        "Out Door activities",
      ],
    },
  ];

  return (
    <section id="pricing" className="py-24 bg-[#FAF9F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-gray-900 mb-4">
            Pricing Table
          </h2>
          <div className="w-24 h-1 bg-gray-300 mx-auto rounded-full mb-6 relative">
            <div className="w-3 h-3 bg-[#5A7D7C] rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-2 border-white"></div>
          </div>
          <p className="text-gray-500 max-w-2xl mx-auto text-sm leading-relaxed">
            Choose the perfect plan for your journey. Flexible options designed
            to meet your needs and help you achieve your wellness goals.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-none shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="p-8 text-center border-b border-gray-100 bg-gray-50/50">
                <h3 className="text-gray-500 font-medium tracking-widest text-sm mb-6 uppercase">
                  {plan.name}
                </h3>
                <div className="flex justify-center items-baseline text-gray-800">
                  <span className="text-3xl font-light">$</span>
                  <span className="text-6xl font-light">{plan.price}</span>
                  <span className="text-xs font-bold text-gray-400 ml-1 uppercase">
                    /Month
                  </span>
                </div>
              </div>
              <div className="p-8">
                <ul className="space-y-4 mb-8 text-center">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="text-gray-500 text-sm">
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="text-center">
                  <button className="px-8 py-3 rounded-full border border-gray-200 text-[#5A7D7C] font-bold text-xs tracking-widest hover:bg-[#5A7D7C] hover:text-white hover:border-[#5A7D7C] transition-colors uppercase">
                    Get Started
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      name: "Emily Thompson",
      role: "Yoga Enthusiast",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&auto=format&fit=crop",
      quote:
        "YoGuys has completely transformed my approach to wellness. The instructors are incredibly supportive and knowledgeable.",
    },
    {
      name: "Marcus Chen",
      role: "Beginner Yogi",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150&auto=format&fit=crop",
      quote:
        "I was nervous about starting yoga, but the welcoming atmosphere here made me feel right at home from day one.",
    },
    {
      name: "Sarah Williams",
      role: "Mindfulness Practitioner",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=150&auto=format&fit=crop",
      quote:
        "The combination of physical practice and mental clarity I've gained through these classes is invaluable.",
    },
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute top-10 left-10 w-64 h-64 bg-[#5A7D7C] rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#E07A5F] rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="text-[#D4A373] font-medium tracking-wider uppercase text-sm mb-4 block">
            Testimonials
          </span>
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-gray-900 mb-6">
            What Our{" "}
            <span className="italic text-[#5A7D7C] font-normal">Community</span>{" "}
            Says
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`bg-[#FAF9F6] p-6 md:p-8 rounded-2xl md:rounded-[2rem] relative ${
                i === 2
                  ? "col-span-2 lg:col-span-1 mx-auto w-full lg:w-auto"
                  : "col-span-1"
              }`}
            >
              <div className="absolute -top-4 md:-top-6 left-4 md:left-8 bg-[#5A7D7C] text-white w-8 h-8 md:w-12 md:h-12 flex items-center justify-center rounded-full text-lg md:text-2xl font-serif">
                {"""}
              </div>
              <p className="text-gray-600 mb-4 md:mb-6 italic leading-relaxed pt-2 md:pt-4 text-sm md:text-base">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover mr-3 md:mr-4"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="font-bold text-gray-900 text-sm md:text-base">
                    {testimonial.name}
                  </h4>
                  <p className="text-xs md:text-sm text-[#E07A5F]">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-16">
          <div className="col-span-2 md:col-span-1 lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <Flower className="w-8 h-8 text-[#5A7D7C]" />
              <span className="font-serif text-3xl font-bold text-white">
                YoGuys
              </span>
            </div>
            <p className="text-gray-400 mb-6">
              A sanctuary for your mind, body, and soul. Join our community and
              transform your life through yoga.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#5A7D7C] transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#5A7D7C] transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#5A7D7C] transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="col-span-1">
            <h4 className="font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3 text-gray-400">
              <li>
                <a href="#home" className="hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#classes"
                  className="hover:text-white transition-colors"
                >
                  Classes
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-white transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="col-span-1">
            <h4 className="font-bold text-lg mb-6">Classes</h4>
            <ul className="text-gray-400 grid grid-cols-1 gap-2 md:gap-3">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Vinyasa Flow
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Hatha Yoga
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Ashtanga Series
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Restorative
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Meditation
                </a>
              </li>
            </ul>
          </div>

          <div className="col-span-2 md:col-span-1 lg:col-span-1">
            <h4 className="font-bold text-lg mb-6">Newsletter</h4>
            <p className="text-gray-400 mb-4">
              Subscribe to get the latest news and updates.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="bg-gray-800 text-white px-4 py-3 rounded-l-xl focus:outline-none focus:ring-1 focus:ring-[#5A7D7C] w-full"
              />
              <button className="bg-[#5A7D7C] px-4 py-3 rounded-r-xl hover:bg-[#4A6A69] transition-colors">
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
          <p>
            &copy; {new Date().getFullYear()} YoGuys Studio. All rights
            reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function PageUI({ data }: { data: Business }) {
  return (
    <div className="min-h-screen bg-[#FAF9F6] selection:bg-[#5A7D7C] selection:text-white">
      <DataContext.Provider value={data}>
        <Navbar />
        <main>
          <Hero />
          <Stats />
          <About />
          <Classes />
          <Pricing />
          <Experts />
          <Testimonials />
          <FAQ />
          <Location />
        </main>
        <Footer />
      </DataContext.Provider>
    </div>
  );
}
