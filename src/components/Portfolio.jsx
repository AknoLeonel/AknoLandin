import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function Portfolio() {
  // Seus projetos REAIS extraídos da Vercel
  const projects = [
    {
      title: "Liga Candanga",
      category: "Plataforma Esportiva",
      link: "https://www.ligacandangadefutsal.com.br",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1470&auto=format&fit=crop"
    },
    {
      title: "Nova Geração",
      category: "Clube Esportivo",
      link: "https://www.novageracaodf.com.br",
      image: "https://images.unsplash.com/photo-1518605368461-1ee7c511d530?q=80&w=1470&auto=format&fit=crop"
    },
    {
      title: "Instituto BodyLife",
      category: "Saúde & Bem-estar",
      link: "https://www.institutobodylife.com.br",
      image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1453&auto=format&fit=crop"
    },
    {
      title: "Guincho Guará",
      category: "Serviço 24h",
      link: "https://www.guinchoguaradf.com.br",
      image: "https://images.unsplash.com/photo-1464082354059-27db6ce50048?q=80&w=1470&auto=format&fit=crop"
    },
    {
      title: "Oficina Guará",
      category: "Mecânica Especializada",
      link: "https://www.oficinaguara.com.br",
      image: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=1374&auto=format&fit=crop"
    },
    {
      title: "TG Geradores",
      category: "Energia & Eventos",
      link: "https://www.tggeradores.com.br",
      image: "https://images.unsplash.com/photo-1513828583688-c52646db42da?q=80&w=1470&auto=format&fit=crop"
    },
    {
      title: "LovePod",
      category: "E-commerce Express",
      link: "https://www.lovepod.com.br",
      image: "https://images.unsplash.com/photo-1607083206968-13611e3d76ba?q=80&w=1415&auto=format&fit=crop"
    },
    {
      title: "ABLF",
      category: "Associação Futsal",
      link: "https://www.ablf.com.br",
      image: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?q=80&w=1435&auto=format&fit=crop"
    },
    {
      title: "PS iPhones",
      category: "Tech & E-commerce",
      link: "https://www.psiphones.com.br",
      image: "https://images.unsplash.com/photo-1605236453806-6ff36851218e?q=80&w=1364&auto=format&fit=crop"
    }
  ];

  // Separando os destaques (Premium Showcase) do restante
  const featuredProjects = projects.slice(0, 3);
  const secondaryProjects = projects.slice(3);

  return (
    <section id="portfolio" className="relative py-32 bg-akno-dark px-6 sm:px-12 lg:px-24 border-t border-white/5 overflow-hidden">
      
      {/* Background Otimizado */}
      <div 
        className="absolute top-0 right-0 w-[800px] h-[800px] pointer-events-none opacity-40"
        style={{ background: 'radial-gradient(circle at 80% 20%, rgba(99,102,241,0.08) 0%, transparent 60%)' }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Cabeçalho da Seção */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-6 transform-gpu"
        >
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-gray-300 font-semibold text-xs mb-6 uppercase tracking-widest">
              Estudos de Caso
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 tracking-tight">
              Ecossistemas em <br className="hidden md:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-akno-primary to-akno-glow">
                operação real.
              </span>
            </h2>
            <p className="text-gray-400 max-w-xl text-lg font-light leading-relaxed">
              Não vendemos templates bonitinhos. Construímos infraestruturas validadas que geram caixa todos os dias para nossos clientes.
            </p>
          </div>
          <div className="hidden lg:flex text-akno-primary items-center gap-2 font-semibold bg-akno-primary/10 px-6 py-3 rounded-2xl border border-akno-primary/20 shadow-[0_0_20px_rgba(99,102,241,0.15)]">
            <CheckCircle2 size={20} />
            {projects.length}+ Projetos Escalados
          </div>
        </motion.div>

        {/* PARTE 1: PREMIUM SHOWCASE (Z-Pattern Alternado) */}
        <div className="space-y-32 mb-32">
          {featuredProjects.map((project, index) => {
            const isEven = index % 2 === 0;
            return (
              <div key={index} className={`flex flex-col gap-10 lg:gap-16 items-center ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                
                {/* Imagem do Projeto Destaque */}
                <motion.a 
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.95, x: isEven ? -30 : 30 }}
                  whileInView={{ opacity: 1, scale: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, type: "spring" }}
                  className="w-full lg:w-3/5 group relative rounded-[2rem] overflow-hidden aspect-[4/3] sm:aspect-[16/10] bg-white/5 border border-white/10 transform-gpu shadow-2xl"
                >
                  <div className="absolute inset-0 bg-akno-primary/10 group-hover:bg-transparent transition-colors duration-500 z-10 mix-blend-overlay" />
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    loading={index === 0 ? "eager" : "lazy"}
                    className="w-full h-full object-cover transform transition-transform duration-1000 group-hover:scale-105 will-change-transform"
                  />
                  {/* Badge de Acesso Flutuante */}
                  <div className="absolute top-6 right-6 z-20 bg-black/50 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full flex items-center gap-2 text-sm text-white opacity-0 -translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                    Acessar <ArrowUpRight size={16} className="text-akno-primary" />
                  </div>
                </motion.a>

                {/* Info do Projeto Destaque */}
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="w-full lg:w-2/5 flex flex-col transform-gpu"
                >
                  <span className="text-akno-primary font-semibold tracking-wider uppercase mb-4 flex items-center gap-2">
                    <span className="w-8 h-[1px] bg-akno-primary"></span>
                    {project.category}
                  </span>
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-lg leading-relaxed font-light mb-8">
                    Infraestrutura digital completa construída com foco em retenção de usuários e conversão em alta velocidade. Um ecossistema otimizado para transformar cliques em clientes reais.
                  </p>
                  
                  <a 
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-6 py-3 w-max bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-xl font-medium transition-all group hover:border-white/20"
                  >
                    Explorar Ecossistema
                    <ArrowRight size={18} className="text-gray-400 group-hover:translate-x-1 group-hover:text-akno-primary transition-all" />
                  </a>
                </motion.div>

              </div>
            );
          })}
        </div>

        {/* Separador Elegante */}
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent mb-20" />

        {/* PARTE 2: O ARQUIVO (Grid minimalista para o volume) */}
        <div>
          <div className="flex items-center justify-between mb-10">
            <h3 className="text-2xl font-bold text-white">Mais Projetos Validados</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {secondaryProjects.map((project, index) => (
              <motion.a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group block relative rounded-2xl overflow-hidden bg-white/[0.02] border border-white/5 aspect-[4/3] transform-gpu hover:border-white/10 transition-colors"
              >
                {/* Imagem de Fundo com Zoom no Hover */}
                <div className="absolute inset-0">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-30 group-hover:opacity-40"
                  />
                </div>

                {/* Degradê para leitura da fonte */}
                <div className="absolute inset-0 bg-gradient-to-t from-akno-dark via-akno-dark/80 to-transparent" />

                {/* Conteúdo do Card Menor */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <div className="transform transition-transform duration-500 group-hover:-translate-y-2">
                    <span className="text-gray-400 text-xs font-medium tracking-wider uppercase mb-1 block group-hover:text-akno-primary transition-colors">
                      {project.category}
                    </span>
                    <h4 className="text-xl font-bold text-white flex items-center justify-between">
                      {project.title}
                      <ArrowUpRight 
                        className="opacity-0 -translate-x-2 translate-y-2 text-white transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0" 
                        size={20} 
                      />
                    </h4>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}