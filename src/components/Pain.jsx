import React from 'react';
import { motion } from 'framer-motion';
// Ícones trocados para representar melhor a "confusão" e a "fuga" de clientes
import { Frown, ArrowRightLeft, MousePointerClick, TrendingDown } from 'lucide-react';

export default function Pain() {
  const painPoints = [
    {
      icon: <MousePointerClick size={24} className="text-rose-400" />,
      title: "Cliques vazios",
      desc: "Você paga pelo tráfego. O cliente entra, não entende, e sai. O dinheiro vai pro ralo.",
      colSpan: "md:col-span-2",
      align: "items-start text-left",
      delay: 0.1
    },
    {
      icon: <Frown size={24} className="text-amber-400" />,
      title: "Visual Amador",
      desc: "Seu site parece de 2010. A confiança do cliente morre nos primeiros 3 segundos.",
      colSpan: "md:col-span-1",
      align: "items-start text-left",
      delay: 0.3
    },
    {
      icon: <ArrowRightLeft size={24} className="text-orange-400" />,
      title: "Jogo de Culpa",
      desc: "O gestor de tráfego culpa o site. O designer culpa o anúncio. E você fica no prejuízo.",
      colSpan: "md:col-span-3",
      align: "items-center text-center sm:flex-row sm:text-left",
      delay: 0.5
    }
  ];

  return (
    <section id="dor" className="py-28 bg-akno-dark px-6 sm:px-12 lg:px-24 border-t border-white/5 relative overflow-hidden">
      
      {/* Fundo otimizado (sem blur) */}
      <div 
        className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20"
        style={{ background: 'radial-gradient(circle at 20% 30%, rgba(225,29,72,0.1) 0%, transparent 50%)' }} 
      />

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Header da Seção mais direto e agressivo */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          className="mb-16 transform-gpu"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-400 font-semibold text-xs mb-6 uppercase tracking-widest shadow-[0_0_15px_rgba(225,29,72,0.1)]">
            O Cenário Atual
          </div>
          
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight text-white leading-[1.1]">
            Você está comprando tráfego <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-orange-300">
              para uma máquina quebrada.
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-xl font-light leading-relaxed">
            Se você não tem controle total do funil, está apenas financiando o Google e o Meta sem retorno. Veja se isso soa familiar:
          </p>
        </motion.div>

        {/* Grid Dinâmico (Bento Box Style) para quebrar o padrão visual clássico */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {painPoints.map((pain, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: pain.delay, duration: 0.5, type: "spring", stiffness: 60 }}
              className={`group relative bg-white/[0.02] hover:bg-white/[0.04] border border-white/5 hover:border-white/10 p-8 rounded-3xl transition-all duration-300 transform-gpu flex flex-col ${pain.colSpan} ${pain.align} gap-5`}
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:bg-white/[0.08] transition-all duration-300">
                {pain.icon}
              </div>

              <div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                  {pain.title}
                </h3>
                <p className="text-gray-400 text-sm md:text-base font-light leading-relaxed">
                  {pain.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}