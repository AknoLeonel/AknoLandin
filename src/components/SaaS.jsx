import React from 'react';
import { motion } from 'framer-motion';
// Adicionados ícones extras para as micro-interações
import { Bot, Trophy, ArrowRight, CheckCircle2, Zap, MessageSquare, BarChart2 } from 'lucide-react';

export default function SaaS() {
  const saasProducts = [
    {
      id: "autolead",
      icon: <Bot size={32} className="text-indigo-400" />,
      title: "AKNO AutoLead",
      badge: "Validação de Tráfego",
      status: "Em Produção",
      statusColor: "text-green-400 bg-green-500/10 border-green-500/20",
      dotColor: "bg-green-500",
      description: "Chega de leads frios. Nossa automação faz a triagem inicial via WhatsApp, qualificando instantaneamente quem vem do tráfego pago antes de chegar no seu time comercial.",
      features: ["Filtro inteligente de curiosos", "Integração direta com Meta Ads", "Aumento de ROI imediato"],
      glow: "hover:shadow-[0_0_40px_rgba(99,102,241,0.15)] hover:border-indigo-500/30",
      buttonText: "Solicitar Demonstração"
    },
    {
      id: "sports",
      icon: <Trophy size={32} className="text-purple-400" />,
      title: "AKNO Sports Manager",
      badge: "Gestão Esportiva",
      status: "Em Desenvolvimento",
      statusColor: "text-amber-400 bg-amber-500/10 border-amber-500/20",
      dotColor: "bg-amber-500",
      description: "A revolução para ligas e campeonatos. Gestão completa de torneios com tabelas dinâmicas, súmulas automatizadas e controle financeiro de inscrições totalmente integrado.",
      features: ["Inscrições automáticas via Pix", "Geração de chaves e tabelas", "Estatísticas em tempo real"],
      glow: "hover:shadow-[0_0_40px_rgba(168,85,247,0.15)] hover:border-purple-500/30",
      buttonText: "Entrar na Lista de Espera"
    }
  ];

  return (
    <section className="py-32 bg-akno-dark px-6 sm:px-12 lg:px-24 relative overflow-hidden border-t border-white/5">
      
      {/* OTIMIZAÇÃO: Background Gradient (Zero custo GPU) */}
      <div 
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] pointer-events-none opacity-50"
        style={{ background: 'radial-gradient(circle, rgba(99,102,241,0.05) 0%, transparent 60%)' }}
      />
      {/* Grid Tech Sutil no Fundo */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.02] pointer-events-none mix-blend-overlay" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Cabeçalho */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          className="text-center mb-20 transform-gpu"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-akno-primary/10 border border-akno-primary/20 text-akno-primary font-semibold text-xs mb-6 uppercase tracking-widest shadow-[0_0_15px_rgba(99,102,241,0.1)]">
            <Zap size={14} className="animate-pulse" />
            Tecnologia Proprietária
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight text-white leading-tight">
            Softwares que trabalham <br className="hidden sm:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-akno-primary via-indigo-400 to-akno-glow">
              no piloto automático.
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto font-light leading-relaxed">
            Além da nossa agência, desenvolvemos microssoluções em formato SaaS para resolver gargalos específicos do mercado e blindar as suas operações.
          </p>
        </motion.div>

        {/* Grid de Produtos SaaS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {saasProducts.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.15, duration: 0.6, type: "spring" }}
              className={`group relative bg-white/[0.02] border border-white/5 rounded-[2rem] p-8 md:p-10 transition-all duration-500 transform-gpu overflow-hidden flex flex-col ${product.glow}`}
            >
              
              {/* Efeito Visual Interno (O "Cérebro" do SaaS) */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-white/[0.03] to-transparent pointer-events-none rounded-bl-full transition-opacity duration-500 opacity-50 group-hover:opacity-100" />
              
              {/* Header do Card com Status "Vivo" */}
              <div className="flex justify-between items-start mb-10 relative z-10">
                <div className="w-16 h-16 bg-white/[0.05] rounded-2xl border border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:bg-white/[0.08] transition-all duration-300 shadow-lg">
                  {product.icon}
                </div>
                
                <div className="flex flex-col items-end gap-2">
                  <span className="text-[10px] font-bold tracking-widest px-3 py-1.5 bg-white/5 border border-white/10 text-gray-300 rounded-full uppercase">
                    {product.badge}
                  </span>
                  {/* Status Indicator com LED Pulsante */}
                  <div className={`flex items-center gap-2 text-[10px] font-bold tracking-widest px-3 py-1.5 border rounded-full uppercase ${product.statusColor}`}>
                    <span className="relative flex h-2 w-2">
                      <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${product.dotColor}`}></span>
                      <span className={`relative inline-flex rounded-full h-2 w-2 ${product.dotColor}`}></span>
                    </span>
                    {product.status}
                  </div>
                </div>
              </div>

              {/* Corpo do Card */}
              <div className="relative z-10 flex-1">
                <h3 className="text-3xl font-bold text-white mb-4 tracking-tight">{product.title}</h3>
                <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-8 font-light">
                  {product.description}
                </p>

                {/* Animação Abstrata Específica por Produto (Visual Feedback) */}
                <div className="h-16 w-full mb-8 flex items-center opacity-60 group-hover:opacity-100 transition-opacity duration-500">
                  {product.id === "autolead" ? (
                    <div className="flex items-center gap-3 text-indigo-400/50">
                      <motion.div animate={{ y: [0, -5, 0] }} transition={{ duration: 2, repeat: Infinity, delay: 0 }}><MessageSquare size={20} /></motion.div>
                      <motion.div animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 1.5, repeat: Infinity }} className="h-[1px] w-8 bg-indigo-500/50" />
                      <motion.div animate={{ y: [0, -5, 0] }} transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}><Bot size={24} className="text-indigo-400" /></motion.div>
                      <motion.div animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }} className="h-[1px] w-8 bg-indigo-500/50" />
                      <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}><CheckCircle2 size={20} className="text-green-400" /></motion.div>
                    </div>
                  ) : (
                    <div className="flex items-end gap-2 h-full py-2 text-purple-400/50">
                      <BarChart2 size={20} className="mb-2 mr-2" />
                      {[30, 60, 40, 80, 50, 90].map((h, i) => (
                        <motion.div 
                          key={i}
                          initial={{ height: "20%" }}
                          whileInView={{ height: `${h}%` }}
                          transition={{ duration: 1, delay: i * 0.1, type: "spring" }}
                          className="w-3 rounded-t-sm bg-purple-500/40 group-hover:bg-purple-500/80 transition-colors"
                        />
                      ))}
                    </div>
                  )}
                </div>

                <div className="space-y-4 mb-10">
                  {product.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="p-1 rounded-md bg-white/5 border border-white/10">
                        <CheckCircle2 size={14} className="text-akno-primary" />
                      </div>
                      <span className="text-gray-300 text-sm font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Botão de SaaS Orientado a Conversão */}
              <button className="relative z-10 w-full py-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-white font-bold transition-all duration-300 flex items-center justify-center gap-3 group-hover:border-white/20 group-hover:shadow-[0_0_20px_rgba(255,255,255,0.05)]">
                {product.buttonText}
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}