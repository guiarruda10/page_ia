import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Lightbulb, Briefcase, MessageSquare, Shield, Check } from "lucide-react";

const Portfolio = () => {
  const products = [
    {
      icon: Lightbulb,
      title: "Hub de Inovação Contínua",
      badge: "Assinatura Anual",
      description: "O hub oferece assinatura anual e modelo success fee, garantindo consultoria contínua de especialistas para mapear oportunidades de melhoria e criar MVPs impulsionados pela IA.",
      features: [
        "Alocação full ou compartilhada de recursos",
        "Reuniões semanais ou mensais",
        "Mapeamento de processos",
        "Modelo Success Fee com desconto progressivo"
      ],
      color: "primary",
      gradient: "from-primary/20 to-primary/5"
    },
    {
      icon: Briefcase,
      title: "Projetos sob Demanda",
      badge: "Desafio Único",
      description: "As empresas podem contratar projetos sob demanda para resolver desafios específicos com soluções de IA personalizadas.",
      features: [
        "Investimento único",
        "Profissionais experientes",
        "Mapeamento e revisão detalhada",
        "Proposta com modelo success fee"
      ],
      color: "secondary",
      gradient: "from-secondary/20 to-secondary/5"
    },
    {
      icon: MessageSquare,
      title: "Plataforma IA Atende+",
      badge: "ChatBot 24/7",
      description: "ChatBot 24/7 com IA generativa → Atendimento contínuo, humanizado, inteligente e disponível a qualquer hora.",
      features: [
        "Chat 24/7 com IA generativa",
        "Personalização + Escalabilidade",
        "Métricas e dashboards em tempo real",
        "Integração com WhatsApp e CRM"
      ],
      color: "primary",
      gradient: "from-primary/20 to-accent/10"
    },
    {
      icon: Shield,
      title: "IA Segura",
      badge: "Governança & Segurança",
      description: "Plataforma de Governança de dados e Cybersecurity para IA Generativa. Protegemos seus dados sensíveis com a solução Zerotrusted.AI atendendo a nova regulamentação da LGPD 2.0",
      features: [
        "Governança de Dados agnóstica ao provedor",
        "Cybersecurity com avaliação contínua",
        "Monitoramento 24/7",
        "Conformidade LGPD 2.0"
      ],
      color: "secondary",
      gradient: "from-secondary/20 to-destructive/10"
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--primary)/0.1)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--primary)/0.1)_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      </div>

      <div className="container relative z-10 px-4 mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">Nosso Portfólio</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Soluções completas de IA para transformar cada aspecto do seu negócio
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {products.map((product, index) => {
            const Icon = product.icon;
            return (
              <Card
                key={index}
                className={`group relative overflow-hidden bg-card/50 backdrop-blur-sm border-border/50 hover:border-${product.color}/50 transition-all duration-500 hover:shadow-2xl hover:shadow-${product.color}/10 animate-scale-in`}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${product.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                
                <CardHeader className="relative z-10 pb-4">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-4 rounded-2xl bg-gradient-to-br from-${product.color}/10 to-${product.color}/5 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className={`w-8 h-8 text-${product.color}`} />
                    </div>
                    <Badge variant="outline" className={`border-${product.color}/50 text-${product.color}`}>
                      {product.badge}
                    </Badge>
                  </div>
                  
                  <CardTitle className="text-2xl mb-3 group-hover:text-gradient transition-all duration-300">
                    {product.title}
                  </CardTitle>
                  
                  <CardDescription className="text-base text-muted-foreground leading-relaxed">
                    {product.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="relative z-10">
                  <div className="space-y-3">
                    {product.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3 group/item">
                        <div className={`mt-0.5 p-1 rounded-full bg-${product.color}/10 group-hover/item:bg-${product.color}/20 transition-colors`}>
                          <Check className={`w-4 h-4 text-${product.color}`} />
                        </div>
                        <span className="text-sm text-muted-foreground group-hover/item:text-foreground transition-colors">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Bottom Accent Line */}
                  <div className={`mt-6 h-1 w-0 group-hover:w-full bg-gradient-to-r from-${product.color} to-${product.color === 'primary' ? 'secondary' : 'primary'} rounded-full transition-all duration-500`}></div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Success Fee Highlight */}
        <div className="max-w-4xl mx-auto mt-12 animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <Card className="bg-gradient-to-br from-primary/10 via-card/50 to-secondary/10 backdrop-blur-sm border-primary/30">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">
                <span className="text-gradient">Compromisso com Resultados</span>
              </h3>
              <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                Com o processo mapeado, para desenvolver e suportar esse MVP apresentamos uma proposta de success fee onde dividimos um % desse benefício (redução de custos e/ou geração de novas receitas) e ainda damos um desconto progressivo na assinatura do Hub de inovação. 
                <strong className="text-foreground"> Esse é o nosso compromisso, resultados na Prática e parceria ganha-ganha.</strong>
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
