import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Star, TrendingUp, Shield, Zap, Users, Target } from "lucide-react";
import { useState, useEffect } from "react";

const Clients = () => {
  const [api, setApi] = useState<any>(null);

  const clients = [
    {
      name: "Honda",
      category: "Automotivo",
      tier: "Enterprise",
      logo: "/logos/honda.png",
      fallback: "🏍️",
    },
    {
      name: "Banco BV",
      category: "Financeiro",
      tier: "Enterprise",
      logo: "/logos/banco-bv-logo.png",
      fallback: "🏦",
    },
    {
      name: "Siemens",
      category: "Industrial",
      tier: "Enterprise",
      logo: "/logos/siemens-Logo.png",
      fallback: "⚡",
    },
    {
      name: "+Pet",
      category: "Pet Shop",
      tier: "Growth",
      logo: "/logos/maispet.png",
      fallback: "🐕",
    },
    {
      name: "Vertem",
      category: "Marketing",
      tier: "Growth",
      logo: "/logos/Vertem.png",
      fallback: "🏠",
    },
    {
      name: "F5 Estratégia",
      category: "Consultoria",
      tier: "Growth",
      logo: "/logos/F5-logo-.png",
      fallback: "📊",
    },
    {
      name: "LSL",
      category: "Logisticas",
      tier: "Growth",
      logo: "/logos/LSL.png",
      fallback: "📞",
    },
    {
      name: "Duo",
      category: "Marketing",
      tier: "Startup",
      logo: "/logos/duo.png",
      fallback: "👥",
    },
    {
      name: "Velocity",
      category: "Saúde e Bem-estar",
      tier: "Startup",
      logo: "/logos/velocity.png",
      fallback: "🚀",
    },
  ];

  const getTierColor = (tier: string) => {
    switch (tier) {
      case "Enterprise":
        return "bg-gradient-to-r from-primary to-primary/80";
      case "Growth":
        return "bg-gradient-to-r from-secondary to-secondary/80";
      case "Startup":
        return "bg-gradient-to-r from-accent to-accent/80";
      default:
        return "bg-gradient-to-r from-muted to-muted/80";
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Saúde":
        return <Shield className="w-4 h-4" />;
      case "Tecnologia":
        return <Zap className="w-4 h-4" />;
      case "Financeiro":
        return <TrendingUp className="w-4 h-4" />;
      case "Governo":
        return <Target className="w-4 h-4" />;
      default:
        return <Users className="w-4 h-4" />;
    }
  };

  // Efeito de reprodução automática
  useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      api.scrollNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [api]);

  return (
    <section className="py-16 relative overflow-hidden bg-gradient-to-b from-primary/5 to-white backdrop-blur-sm">
      <div className="container relative z-10 px-4 mx-auto">
        {/* Cabeçalho da seção aprimorado */}
        <div className="text-center max-w-4xl mx-auto mb-12 md:mb-20 animate-fade-in">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Star className="w-5 h-5 md:w-6 md:h-6 text-primary" />
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 backdrop-blur-sm relative z-10">
              <span className="text-xs md:text-sm font-medium text-primary">
                +30 Clientes Atendidos
              </span>
            </div>
            <Star className="w-5 h-5 md:w-6 md:h-6 text-primary" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-4 md:mb-6">
            <span className="text-gradient">
              Clientes que já aceleraram conosco
            </span>
          </h2>
          <p className="text-base md:text-xl text-gradient max-w-2xl mx-auto">
            Empresas de diversos setores que transformaram seus negócios com
            nossas soluções de IA
          </p>
        </div>

        {/* Carrossel de clientes aprimorado */}
        <div className="max-w-7xl mx-auto">
          <Card className="bg-white/90 backdrop-blur-xl border-gray-200/50 animate-scale-in mb-12 md:mb-20 shadow-2xl">
            <CardContent className="p-4 md:p-8 lg:p-12">
              {/* Cabeçalho do carrossel */}
              <div className="flex items-center justify-center mb-6 md:mb-8">
                <div className="text-center">
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-gradient mb-2">
                    Alguns de Nossos Clientes
                  </h3>
                  <p className="text-xs md:text-sm text-muted-foreground max-w-md mx-auto px-4">
                    Empresas que confiam em nossas soluções de IA para
                    transformar seus negócios
                  </p>
                </div>
              </div>

              <Carousel
                setApi={setApi}
                opts={{
                  align: "start",
                  loop: true,
                  skipSnaps: false,
                  dragFree: true,
                }}
                className="w-full"
              >
                <CarouselContent className="-ml-2 md:-ml-4">
                  {clients.map((client, index) => (
                    <CarouselItem
                      key={index}
                      className="pl-2 md:pl-4 basis-[90%] sm:basis-1/2 lg:basis-1/3 xl:basis-1/4"
                    >
                      <div className="p-1 md:p-2">
                        <div className="group/card relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/90 to-gray-50/80 backdrop-blur-sm border border-gray-200/50 hover:border-primary/50 transition-all duration-500 hover:shadow-xl hover:shadow-primary/20 h-full min-h-[160px]">
                          <div className="p-5 md:p-6 h-full flex flex-col">
                            {/* Logo da empresa */}
                            <div className="flex items-center justify-between mb-4 md:mb-6">
                              <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center bg-white rounded-2xl border border-gray-200 group-hover/card:bg-gray-50 group-hover/card:border-gray-300 transition-all duration-500 shadow-lg group-hover/card:shadow-xl">
                                <img
                                  src={client.logo}
                                  alt={`${client.name} logo`}
                                  className="w-10 h-10 md:w-12 md:h-12 object-contain filter drop-shadow-sm group-hover/card:drop-shadow-md transition-all duration-300"
                                  onError={(e) => {
                                    e.currentTarget.style.display = "none";
                                    const fallback = e.currentTarget
                                      .nextElementSibling as HTMLElement;
                                    if (fallback)
                                      fallback.style.display = "block";
                                  }}
                                />
                                <div className="text-3xl md:text-4xl hidden">
                                  {client.fallback}
                                </div>
                              </div>
                              <div className="flex items-center gap-1 text-muted-foreground group-hover/card:text-primary transition-colors">
                                {getCategoryIcon(client.category)}
                              </div>
                            </div>

                            {/* Nome do cliente */}
                            <h3 className="text-base md:text-lg font-bold text-black mb-2 group-hover/card:text-primary transition-colors flex-grow">
                              {client.name}
                            </h3>

                            {/* Categoria */}
                            <p className="text-xs md:text-sm text-muted-foreground mb-2 md:mb-3">
                              {client.category}
                            </p>

                            {/* Efeito de hover */}
                            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300"></div>
                          </div>
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>

                {/* Botões de navegação aprimorados - Visíveis apenas em telas maiores */}
                <div className="hidden lg:block">
                  <CarouselPrevious className="-left-16 bg-background/80 backdrop-blur-sm border-2 border-primary/20 hover:border-primary/40 hover:bg-primary/5 transition-all duration-300 shadow-lg" />
                  <CarouselNext className="-right-16 bg-background/80 backdrop-blur-sm border-2 border-primary/20 hover:border-primary/40 hover:bg-primary/5 transition-all duration-300 shadow-lg" />
                </div>
              </Carousel>

              {/* Indicador de deslize para mobile */}
              <div className="flex justify-center mt-4 lg:hidden">
                <p className="text-xs text-muted-foreground">
                  ← Deslize para ver mais →
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Seção de benefícios aprimorada */}
          <div className="text-center mb-8 animate-fade-in">
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-8">
              <span className="text-gradient">Benefícios para sua Empresa</span>
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
              <Card className="group relative overflow-hidden p-6 md:p-8 backdrop-blur-sm bg-gradient-to-br from-primary/5 to-primary/20 border border-primary/20 hover:border-primary/40 hover:scale-105 transition-all duration-500 hover:shadow-xl hover:shadow-primary/20">
                <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                  </div>
                  <h4 className="text-lg md:text-xl font-bold text-primary group-hover:text-primary/80 transition-colors">
                    Redução de Custos
                  </h4>
                </div>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  A automação com IA generativa reduz custos operacionais ao
                  otimizar processos de rotina de forma eficiente.
                </p>
              </Card>

              <Card className="group relative overflow-hidden p-6 md:p-8 backdrop-blur-sm bg-gradient-to-br from-secondary/5 to-secondary/20 border border-secondary/20 hover:border-secondary/40 hover:scale-105 transition-all duration-500 hover:shadow-xl hover:shadow-secondary/20">
                <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-secondary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Zap className="w-5 h-5 md:w-6 md:h-6 text-secondary" />
                  </div>
                  <h4 className="text-lg md:text-xl font-bold text-secondary group-hover:text-secondary/80 transition-colors">
                    Aumento da Produtividade
                  </h4>
                </div>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  Soluções de IA personalizadas aumentam a eficiência e
                  produtividade da empresa por meio de inovação.
                </p>
              </Card>

              <Card className="group relative overflow-hidden p-6 md:p-8 backdrop-blur-sm bg-gradient-to-br from-accent/5 to-accent/20 border border-accent/20 hover:border-accent/40 hover:scale-105 transition-all duration-500 hover:shadow-xl hover:shadow-accent/20">
                <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Target className="w-5 h-5 md:w-6 md:h-6 text-accent" />
                  </div>
                  <h4 className="text-lg md:text-xl font-bold text-accent group-hover:text-accent/80 transition-colors">
                    Vantagem Competitiva
                  </h4>
                </div>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  A adoção de tecnologias emergentes impulsionada por IA cria
                  uma vantagem estratégica no mercado.
                </p>
              </Card>

              <Card className="group relative overflow-hidden p-6 md:p-8 backdrop-blur-sm bg-gradient-to-br from-primary/5 to-accent/20 border border-primary/20 hover:border-primary/40 hover:scale-105 transition-all duration-500 hover:shadow-xl hover:shadow-primary/20">
                <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Users className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                  </div>
                  <h4 className="text-lg md:text-xl font-bold text-primary group-hover:text-primary/80 transition-colors">
                    Cultura de Inovação
                  </h4>
                </div>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  A cultura de inovação contínua envolve equipes na resolução
                  criativa de problemas e colaboração.
                </p>
              </Card>

              <Card className="group relative overflow-hidden p-6 md:p-8 backdrop-blur-sm bg-gradient-to-br from-secondary/5 to-primary/20 border border-secondary/20 hover:border-secondary/40 hover:scale-105 transition-all duration-500 hover:shadow-xl hover:shadow-secondary/20">
                <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-secondary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Shield className="w-5 h-5 md:w-6 md:h-6 text-secondary" />
                  </div>
                  <h4 className="text-lg md:text-xl font-bold text-secondary group-hover:text-secondary/80 transition-colors">
                    IA Segura
                  </h4>
                </div>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  Conformidade com a LGPD 2.0 e redução de riscos cibernéticos
                  com IA segura e confiável.
                </p>
              </Card>

              <Card className="group relative overflow-hidden p-6 md:p-8 backdrop-blur-sm bg-gradient-to-br from-accent/5 to-secondary/20 border border-accent/20 hover:border-accent/40 hover:scale-105 transition-all duration-500 hover:shadow-xl hover:shadow-accent/20">
                <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Star className="w-5 h-5 md:w-6 md:h-6 text-accent" />
                  </div>
                  <h4 className="text-lg md:text-xl font-bold text-accent group-hover:text-accent/80 transition-colors">
                    Da Teoria à Prática
                  </h4>
                </div>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  Sai do discurso e vira resultado - valor imediato com impacto
                  visível em processos e decisões.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
