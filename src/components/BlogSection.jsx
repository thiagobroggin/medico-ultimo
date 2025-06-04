import React from 'react';
    import { motion } from 'framer-motion';
    import { Button } from '@/components/ui/button';
    import { Newspaper, Edit3 } from 'lucide-react';

    const blogPosts = [
      {
        title: "Dor no calcanhar é sempre esporão?",
        summary: "Entenda as principais causas da dor no calcanhar e descubra que nem sempre o diagnóstico é esporão de calcâneo.",
        link: "#", 
        imageAlt: "Ilustração de um pé com destaque na área do calcanhar dolorido",
        imagePlaceholderText: "Pé com dor no calcanhar"
      },
      {
        title: "Palmilhas resolvem dor no pé?",
        summary: "Saiba quando as palmilhas ortopédicas são indicadas e como elas podem ajudar no tratamento de diversas condições dos pés.",
        link: "#",
        imageAlt: "Par de palmilhas ortopédicas personalizadas em um fundo neutro",
        imagePlaceholderText: "Palmilhas ortopédicas"
      },
      {
        title: "Quando o pé chato da criança precisa de tratamento?",
        summary: "Descubra os sinais de alerta para o pé chato infantil e entenda quando é necessário buscar avaliação e tratamento especializado.",
        link: "#",
        imageAlt: "Comparativo de um pé infantil com arco normal e um pé chato",
        imagePlaceholderText: "Pé chato em criança"
      },
    ];

    const BlogSection = () => {
      return (
        <section id="blog" className="py-16 md:py-24 bg-secondary"> {/* Usando secondary */}
          <div className="container mx-auto px-6 md:px-12">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <Newspaper className="w-12 h-12 md:w-16 md:h-16 text-primary mx-auto mb-6" /> {/* Usando primary */}
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-primary">Informação e Cuidado: Meu Blog</h2> {/* Usando primary */}
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 * (index + 1) }}
                  transition={{ duration: 0.7, delay: index * 0.15 }}
                  className="bg-base rounded-xl shadow-lg overflow-hidden flex flex-col hover:shadow-2xl transition-shadow duration-300" /* Usando base */
                >
                  <div className="h-48 w-full overflow-hidden">
                    <img   
                        className="w-full h-full object-cover" 
                        alt={post.imageAlt}
                      src="https://images.unsplash.com/photo-1595872018818-97555653a011" />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-semibold mb-3 text-primary">{post.title}</h3> {/* Usando primary */}
                    <p className="text-text text-sm leading-relaxed mb-4 flex-grow">{post.summary}</p> {/* Usando text */}
                    <Button 
                      variant="link" 
                      onClick={() => alert('Em breve: Post completo!')} 
                      className="text-accent hover:text-primary self-start px-0" /* Usando accent e primary */
                    >
                      Leia mais <Edit3 className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
             <motion.div
                initial={{ opacity:0, y:20 }}
                whileInView={{ opacity:1, y:0 }}
                transition={{ duration:0.5, delay:0.5}}
                className="text-center mt-12"
             >
                <Button size="lg" className="bg-primary text-base hover:bg-accent hover:text-text"> {/* Usando primary, base, accent, text */}
                    Ver todos os posts
                </Button>
            </motion.div>
          </div>
        </section>
      );
    };

    export default BlogSection;