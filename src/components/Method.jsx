import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, MonitorPlay, BarChart3, Zap, CheckCircle2, ArrowRight } from 'lucide-react';

export default function Method() {
  return (
    <section id="metodo" className="py-32 bg-akno-dark px-6 sm:px-12 lg:px-24 relative overflow-hidden border-t border-white/5">
      
      {/* Background Otimizado */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(99,102,241,0.05) 0%, transparent 70%)' }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Cabeçalho de Alto Impacto e Direto */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          className="text-center mb-16 transform-gpu"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-akno-primary/10 border border-akno-primary/20 text-akno-primary font-semibold text-xs mb-6 uppercase tracking-widest shadow-[0_0_15px_rgba(99,102,241,0.1)]">
            O Ecossistema 360°
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight text-white leading-tight">
            Três engrenagens. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-akno-primary to-akno-glow">
              Uma máquina de lucro.
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto font-light leading-relaxed">
            Paramos de consertar peças isoladas. Nós assumimos o controle da sua infraestrutura, dos seus criativos e do seu tráfego simultaneamente.
          </p>
        </motion.div>

        {/* Bento Box Grid - O "Show de Apresentação" Visual */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Box 1: Landing Page (Destaque Técnico) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6, type: "spring" }}
            className="md:col-span-2 group relative bg-white/[0.02] border border-white/5 hover:border-indigo-500/30 rounded-3xl p-8 overflow-hidden transition-all duration-500 transform-gpu hover:shadow-[0_0_40px_rgba(99,102,241,0.1)]"
          >
            {/* UI Fake (Simulando "Mão na Massa" de código e performance) */}
            <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-black/40 to-transparent pointer-events-none flex items-center justify-end pr-8 opacity-50 group-hover:opacity-100 transition-opacity duration-500">
              <div className="w-48 space-y-3 font-mono text-[10px] text-indigo-400/70">
                <motion.div animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 2, repeat: Infinity }}>&gt; init_performance_core();</motion.div>
                <div className="flex justify-between text-green-400"><span>PageSpeed</span> <span>99/100</span></div>
                <div className="flex justify-between"><span>Load_Time</span> <span>0.8s</span></div>
                <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden mt-2">
                  <motion.div className="h-full bg-green-500" initial={{ w: 0 }} whileInView={{ width: "95%" }} transition={{ duration: 1.5, delay: 0.5 }} />
                </div>
              </div>
            </div>

            <div className="relative z-10 w-full md:w-2/3">
              <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center mb-6 text-indigo-400 border border-indigo-500/20">
                <Terminal size={24} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Infraestrutura & Código</h3>
              <p className="text-gray-400 leading-relaxed text-sm">
                Desenvolvemos Landing Pages em React ultrarrápidas. Sem templates pesados. O usuário clica e a página abre instantaneamente, eliminando a perda de clientes na barreira do carregamento.
              </p>
            </div>
          </motion.div>

          {/* Box 2: Criativos (Foco em Atenção) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6, type: "spring" }}
            className="md:col-span-1 group relative bg-white/[0.02] border border-white/5 hover:border-purple-500/30 rounded-3xl p-8 overflow-hidden transition-all duration-500 transform-gpu hover:shadow-[0_0_40px_rgba(168,85,247,0.1)] flex flex-col"
          >
            {/* Elemento Visual: "Gravando/Retenção" */}
            <div className="absolute top-6 right-6 flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
              </span>
              <span className="text-xs font-mono text-red-400/70 uppercase">REC</span>
            </div>

            <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center mb-6 text-purple-400 border border-purple-500/20">
              <MonitorPlay size={24} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">Retenção Visual</h3>
            <p className="text-gray-400 leading-relaxed text-sm flex-1">
              Vídeos dinâmicos e design magnético. Editamos e criamos peças que sequestram a atenção do seu cliente em meio ao mar de anúncios ruins.
            </p>
          </motion.div>

          {/* Box 3: Tráfego e Dados (Full Width Inferior para dar sensação de base/resultado) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6, type: "spring" }}
            className="md:col-span-3 group relative bg-gradient-to-br from-white/[0.03] to-transparent border border-white/5 hover:border-akno-primary/30 rounded-3xl p-8 overflow-hidden transition-all duration-500 transform-gpu flex flex-col md:flex-row items-center gap-8"
          >
            <div className="flex-1">
              <div className="w-12 h-12 rounded-xl bg-akno-primary/10 flex items-center justify-center mb-6 text-akno-primary border border-akno-primary/20">
                <BarChart3 size={24} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Gestão de Tráfego Orientada a ROI</h3>
              <p className="text-gray-400 leading-relaxed text-sm max-w-2xl">
                Cruzamos os dados da Landing Page com as campanhas do Meta e Google Ads. Não buscamos "curtidas" ou "cliques baratos". Nossa métrica principal é o lucro no seu bolso (ROAS). Ajustes diários focados em escalar as vendas.
              </p>
              
              <ul className="mt-6 flex flex-wrap gap-4 text-sm font-medium text-gray-300">
                <li className="flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-lg border border-white/5"><CheckCircle2 size={16} className="text-akno-primary"/> Meta Ads Pro</li>
                <li className="flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-lg border border-white/5"><CheckCircle2 size={16} className="text-akno-primary"/> Google Ads</li>
                <li className="flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-lg border border-white/5"><CheckCircle2 size={16} className="text-akno-primary"/> Tracking Avançado</li>
              </ul>
            </div>

            {/* Elemento Visual Interativo: Gráfico Crescente Animado */}
            <div className="w-full md:w-64 h-32 flex items-end gap-2 justify-center opacity-70 group-hover:opacity-100 transition-opacity duration-500">
              {[40, 55, 30, 70, 60, 90, 100].map((height, i) => (
                <motion.div
                  key={i}
                  initial={{ height: "10%" }}
                  whileInView={{ height: `${height}%` }}
                  transition={{ duration: 1, delay: 0.2 + (i * 0.1), type: "spring" }}
                  className={`w-6 sm:w-8 rounded-t-sm ${i === 6 ? 'bg-gradient-to-t from-akno-primary to-akno-glow' : 'bg-white/10'}`}
                />
              ))}
            </div>
          </motion.div>

        </div>

        {/* CTA Conclusivo da Seção */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 flex justify-center"
        >
          <a 
            href="#portfolio"
            className="inline-flex px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-xl font-bold transition-all duration-300 items-center gap-3 backdrop-blur-md hover:border-akno-primary/50 group will-change-transform"
          >
            <Zap size={20} className="text-yellow-400 group-hover:scale-110 transition-transform" />
            Ver a Máquina Operando
            <ArrowRight size={20} className="text-gray-400 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>

      </div>
    </section>
  );
}