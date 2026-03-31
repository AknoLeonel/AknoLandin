import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Rocket, ShieldCheck, Star } from 'lucide-react';

export default function CTA() {
  const whatsappNumber = "5561999133322"; 
  const whatsappMessage = encodeURIComponent("Olá! Estava no site da AKNOTECH e quero agendar uma Consultoria de Escala para a minha empresa.");
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <footer className="relative bg-akno-dark border-t border-white/5 pt-24 overflow-hidden">
      
      {/* Background Glows contidos (Performance Otimizada) */}
      <div 
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] pointer-events-none opacity-30"
        style={{ background: 'radial-gradient(ellipse at bottom, rgba(99,102,241,0.15) 0%, transparent 70%)' }}
      />

      <div className="max-w-6xl mx-auto px-6 relative z-10 mb-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, type: "spring", stiffness: 50 }}
          className="relative group transform-gpu"
        >
          {/* O Retângulo Premium - Glassmorphism Horizontal */}
          <div className="relative bg-white/[0.02] backdrop-blur-xl border border-white/10 hover:border-white/20 rounded-[2.5rem] p-8 md:p-12 lg:p-16 shadow-2xl overflow-hidden transition-colors duration-500 flex flex-col lg:flex-row items-center justify-between gap-12">
            
            {/* Efeito de Luz Interno que acompanha o mouse/hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-akno-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

            {/* Lado Esquerdo: Promessa e Prova Social */}
            <div className="relative z-10 text-center lg:text-left flex-1 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-akno-primary font-semibold text-xs mb-6 uppercase tracking-widest shadow-[0_0_15px_rgba(99,102,241,0.1)]">
                <Rocket size={14} />
                O Próximo Passo
              </div>
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-4 tracking-tight">
                Pronto para assumir o controle <br className="hidden xl:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-akno-primary to-akno-glow">
                  do seu faturamento?
                </span>
              </h2>
              
              <p className="text-lg text-gray-400 mb-8 font-light leading-relaxed">
                Pare de perder dinheiro com estratégias isoladas. Agende uma consultoria gratuita e descubra como um ecossistema completo pode escalar sua operação.
              </p>

              {/* Prova Social Integrada de forma elegante */}
              <div className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4">
                <div className="flex -space-x-3">
                  <img loading="lazy" className="w-10 h-10 rounded-full border-2 border-[#121214] object-cover relative z-30" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=60" alt="Cliente" />
                  <img loading="lazy" className="w-10 h-10 rounded-full border-2 border-[#121214] object-cover relative z-20" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&auto=format&fit=crop&q=60" alt="Cliente" />
                  <img loading="lazy" className="w-10 h-10 rounded-full border-2 border-[#121214] object-cover relative z-10" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=60" alt="Cliente" />
                </div>
                <div className="flex flex-col items-center sm:items-start">
                  <div className="flex text-yellow-500 mb-1">
                    <Star size={14} fill="currentColor" />
                    <Star size={14} fill="currentColor" />
                    <Star size={14} fill="currentColor" />
                    <Star size={14} fill="currentColor" />
                    <Star size={14} fill="currentColor" />
                  </div>
                  <span className="text-xs font-medium text-gray-400">Junte-se a dezenas de clientes escalados</span>
                </div>
              </div>
            </div>

            {/* Lado Direito: Call to Action (Ação) */}
            <div className="relative z-10 flex flex-col items-center lg:items-end w-full lg:w-auto shrink-0">
              <a 
                href={whatsappLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center gap-3 w-full sm:w-auto px-10 py-5 bg-white text-akno-dark hover:bg-gray-100 rounded-2xl font-extrabold text-lg transition-transform duration-300 hover:scale-105 will-change-transform"
              >
                {/* Efeito de sombra sutil no botão que cresce no hover */}
                <div className="absolute inset-0 rounded-2xl shadow-[0_0_30px_rgba(255,255,255,0.15)] group-hover:shadow-[0_0_50px_rgba(255,255,255,0.3)] transition-shadow duration-300 pointer-events-none" />
                
                <MessageCircle size={24} className="text-akno-primary" />
                Agendar Consultoria
              </a>

              <div className="mt-5 flex items-center gap-2 text-sm text-gray-500">
                <ShieldCheck size={16} className="text-green-500" />
                <span>100% Gratuito e sem compromisso.</span>
              </div>
            </div>

          </div>
        </motion.div>
      </div>

      {/* Rodapé Ultra Clean */}
      <div className="border-t border-white/5 bg-black/20 relative z-10">
        <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col items-center md:items-start gap-1">
            <span className="text-xl font-extrabold tracking-widest text-white">AKNOTECH</span>
            <p className="text-gray-500 text-xs tracking-wide">ECOSSISTEMAS DIGITAIS DE ALTA PERFORMANCE</p>
          </div>

          <div className="flex items-center gap-6 text-sm text-gray-500">
            <a href="#" className="hover:text-white transition-colors">Instagram</a>
            <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 py-6 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-600">
          <p>© {new Date().getFullYear()} AKNOTECH. Todos os direitos reservados.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-gray-400 transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-gray-400 transition-colors">Políticas de Privacidade</a>
          </div>
        </div>
      </div>
    </footer>
  );
}