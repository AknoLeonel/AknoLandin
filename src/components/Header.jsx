import React, { useState } from 'react';
import { motion, useScroll, useSpring, useMotionValueEvent } from 'framer-motion';
import { Code2, MessageCircle } from 'lucide-react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  // Otimização de Performance: Usando os hooks nativos do Framer Motion 
  // O hook useScroll gerencia isso sem sobrecarregar o DOM
  const { scrollYProgress, scrollY } = useScroll();
  
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Substitui o antigo useEffect com window.addEventListener para máxima fluidez
  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 50);
  });

  // CRO: Mensagem pré-pronta reduz a fricção do cliente
  const whatsappNumber = "5561999133322"; 
  const whatsappMessage = encodeURIComponent("Olá! Estava no site da AKNOTECH e gostaria de falar com um especialista sobre o meu projeto.");
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
        scrolled ? 'bg-akno-dark/85 backdrop-blur-xl border-b border-white/10 py-4 shadow-2xl shadow-black/50' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-12 flex justify-between items-center">
        
        {/* Logo Otimizada com Hover State */}
        <div 
          className="flex items-center gap-3 cursor-pointer group" 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-akno-primary to-akno-glow flex items-center justify-center shadow-lg shadow-akno-primary/20 group-hover:scale-105 transition-transform duration-300">
            <Code2 size={24} className="text-white" />
          </div>
          <span className="text-xl font-extrabold tracking-wide text-white group-hover:text-akno-primary transition-colors duration-300">
            AKNOTECH
          </span>
        </div>

        {/* Navegação (Escondida no Mobile, mas animada no Desktop) */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-gray-300">
          <a href="#metodo" className="hover:text-white hover:scale-105 transition-all duration-200">O Método</a>
          <a href="#portfolio" className="hover:text-white hover:scale-105 transition-all duration-200">Portfólio</a>
          <a href="#saas" className="hover:text-white hover:scale-105 transition-all duration-200">Tecnologia</a>
        </nav>

        {/* Botão de Contato Header - OTIMIZADO PARA CONVERSÃO (CRO) */}
        <a 
          href={whatsappLink}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 sm:gap-3 px-4 py-2 sm:px-5 sm:py-2.5 bg-akno-primary/10 hover:bg-akno-primary border border-akno-primary/30 hover:border-akno-primary text-white rounded-xl font-semibold transition-all duration-300 backdrop-blur-md shadow-[0_0_15px_rgba(99,102,241,0.15)] hover:shadow-[0_0_25px_rgba(99,102,241,0.4)] group will-change-transform"
        >
          {/* Indicador de "Online Agora" (Gatilho de Urgência/Disponibilidade) */}
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
          </span>
          
          {/* Texto adaptativo para não quebrar o layout no Mobile */}
          <span className="hidden sm:block">Falar com Especialista</span>
          <span className="block sm:hidden text-sm">Consultoria</span>
          
          <MessageCircle size={18} className="text-akno-primary group-hover:text-white transition-colors" />
        </a>

      </div>

      {/* BARRA DE PROGRESSO DO SCROLL */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-akno-primary to-akno-glow origin-left"
        style={{ scaleX }}
      />
    </motion.header>
  );
}