import React from 'react';
import { motion } from 'framer-motion';
// NOTA: Adicionei o ShieldCheck na importação dos ícones
import { ArrowRight, Code, PenTool, TrendingUp, Sparkles, PlayCircle, ShieldCheck } from 'lucide-react';

export default function Hero() {
  // CRO: Mensagem pré-pronta focada na dor do cliente
  const whatsappNumber = "5561999133322";
  const whatsappMessage = encodeURIComponent("Olá! Estou no site da AKNOTECH e quero parar de queimar dinheiro com campanhas ruins. Podemos conversar sobre a minha empresa?");
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  // Variáveis de animação em cascata (Stagger)
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50 } }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-akno-dark px-6 pt-32 pb-24 sm:px-12 lg:px-24">
      
      {/* OTIMIZAÇÃO 1: Luzes de Fundo (Glow 3D) sem blur (zero custo GPU) */}
      <div 
        className="absolute top-[-10%] left-[-10%] w-[800px] h-[800px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(99,102,241,0.15) 0%, transparent 60%)' }} 
      />
      <div 
        className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(168,85,247,0.1) 0%, transparent 60%)' }} 
      />
      
      {/* Grid sutil no fundo */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto w-full text-center">
        
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col items-center transform-gpu"
        >
          {/* Badge Premium */}
          <motion.div variants={item} className="mb-6 relative group will-change-transform">
            <div className="absolute inset-0 bg-gradient-to-r from-akno-primary to-akno-glow rounded-full opacity-40 group-hover:opacity-70 transition-opacity duration-500 blur-md" />
            <span className="relative flex items-center gap-2 py-2 px-5 rounded-full bg-akno-dark/90 backdrop-blur-sm border border-white/10 text-gray-300 text-sm font-medium tracking-wide">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              Agência AKNOTECH • Vagas Abertas
              <Sparkles size={14} className="text-akno-primary ml-1" />
            </span>
          </motion.div>
          
          {/* Headline Monumental */}
          <motion.h1 variants={item} className="text-5xl md:text-7xl lg:text-[5.5rem] font-extrabold tracking-tight mb-8 leading-[1.1] will-change-transform">
            O fim das campanhas que <br className="hidden lg:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-akno-primary via-indigo-400 to-akno-glow">
              só gastam dinheiro.
            </span>
          </motion.h1>
          
          <motion.p variants={item} className="text-lg md:text-xl text-gray-400 mb-10 max-w-3xl mx-auto font-light leading-relaxed will-change-transform">
            Unimos Design de alta conversão, Código impecável e Tráfego de Elite para escalar o faturamento da sua empresa. Não entregamos sites, <strong className="text-white font-medium">entregamos lucro real.</strong>
          </motion.p>

          {/* Botões Duplos e Micro-copy de conversão */}
          <motion.div variants={item} className="flex flex-col items-center w-full will-change-transform">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-5 w-full sm:w-auto">
              <a 
                href={whatsappLink} 
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto px-8 py-4 bg-white text-akno-dark hover:bg-gray-100 rounded-xl font-extrabold text-lg transition-transform duration-300 flex items-center justify-center gap-3 shadow-[0_0_40px_rgba(255,255,255,0.2)] hover:scale-105"
              >
                Iniciar Escala
                <ArrowRight size={20} />
              </a>
              
              <a 
                href="#portfolio"
                className="w-full sm:w-auto px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-xl font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-3 backdrop-blur-md hover:border-white/20 hover:scale-105"
              >
                <PlayCircle size={20} className="text-gray-400" />
                Ver Ecossistemas
              </a>
            </div>
            
            {/* OTIMIZAÇÃO DE CRO: Quebra de objeção instantânea */}
            <div className="mt-6 flex items-center gap-2 text-sm text-gray-500 font-medium">
              <ShieldCheck size={16} className="text-green-500" />
              <span>Análise gratuita do cenário atual. Sem compromisso.</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Cards de Autoridade - Com micro-interações melhoradas */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8, type: "spring" }}
          className="mt-24 grid grid-cols-1 sm:grid-cols-3 gap-6 transform-gpu will-change-transform"
        >
          {/* Card 1 */}
          <div className="group bg-white/[0.02] border border-white/5 hover:border-akno-primary/30 p-8 rounded-3xl backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:bg-white/[0.04] hover:shadow-[0_10px_30px_rgba(99,102,241,0.1)]">
            <div className="w-12 h-12 rounded-2xl bg-akno-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-akno-primary/20 transition-all duration-300">
              <TrendingUp className="text-akno-primary" size={24} />
            </div>
            <h3 className="text-xl font-bold text-white mb-2 text-left">Tráfego de Elite</h3>
            <p className="text-gray-400 text-sm text-left leading-relaxed">Campanhas estruturadas no Meta e Google focadas 100% em ROI e aquisição.</p>
          </div>

          {/* Card 2 */}
          <div className="group bg-white/[0.02] border border-white/5 hover:border-akno-glow/30 p-8 rounded-3xl backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:bg-white/[0.04] hover:shadow-[0_10px_30px_rgba(168,85,247,0.1)]">
            <div className="w-12 h-12 rounded-2xl bg-akno-glow/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-akno-glow/20 transition-all duration-300">
              <Code className="text-akno-glow" size={24} />
            </div>
            <h3 className="text-xl font-bold text-white mb-2 text-left">Código Impecável</h3>
            <p className="text-gray-400 text-sm text-left leading-relaxed">Landing Pages em React ultrarrápidas. O Google ama, seu cliente compra.</p>
          </div>

          {/* Card 3 */}
          <div className="group bg-white/[0.02] border border-white/5 hover:border-indigo-400/30 p-8 rounded-3xl backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:bg-white/[0.04] hover:shadow-[0_10px_30px_rgba(129,140,248,0.1)]">
            <div className="w-12 h-12 rounded-2xl bg-indigo-400/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-indigo-400/20 transition-all duration-300">
              <PenTool className="text-indigo-400" size={24} />
            </div>
            <h3 className="text-xl font-bold text-white mb-2 text-left">Design Magnético</h3>
            <p className="text-gray-400 text-sm text-left leading-relaxed">Criativos e edição de vídeo que retêm a atenção e dominam o scroll.</p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}