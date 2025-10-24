import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { GraduationCap, Target, Rocket } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: GraduationCap,
      title: "Workshops de IA Generativa",
      description:
        "Programas de treinamento imersivos para líderes e equipes desenvolverem habilidades em tecnologias de IA generativa.",
      color: "primary",
      delay: "0s",
    },
    {
      icon: Target,
      title: "Consultoria Estratégica e Governança",
      description:
        "Oferecendo orientação estratégica sobre roteiros de inovação e estruturas de governança ética de IA.",
      color: "secondary",
      delay: "0.2s",
    },
    {
      icon: Rocket,
      title: "Desenvolvimento de MVP com IA",
      description:
        "Criação de produtos mínimos viáveis usando IA generativa para acelerar inovação e testes.",
      color: "primary",
      delay: "0.4s",
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-b from-white to-primary/5 backdrop-blur-sm">
      {/* Decorative Elements */}
      <div className="absolute top-1/4 -left-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float"></div>
      <div
        className="absolute bottom-1/4 -right-20 w-64 h-64 bg-secondary/10 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "2s" }}
      ></div>

      <div className="container relative z-10 px-4 mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">Como Atuamos</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Soluções completas de IA que transformam seu negócio da estratégia à
            implementação
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="group relative overflow-hidden bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 animate-fade-in-up"
                style={{ animationDelay: service.delay }}
              >
                {/* Gradient Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:via-primary/0 group-hover:to-secondary/5 transition-all duration-500"></div>

                <CardHeader className="relative z-10">
                  <div className="mb-4 inline-flex p-4 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 group-hover:from-primary/20 group-hover:to-secondary/20 transition-all duration-300 group-hover:scale-110 glow-primary">
                    <Icon
                      className={`w-8 h-8 ${
                        service.color === "primary"
                          ? "text-primary"
                          : "text-secondary"
                      }`}
                    />
                  </div>
                  <CardTitle className="text-2xl mb-3 group-hover:text-gradient transition-all duration-300">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-base text-muted-foreground leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="relative z-10">
                  <div className="h-1 w-0 group-hover:w-full bg-gradient-to-r from-primary to-secondary rounded-full transition-all duration-500"></div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div
          className="text-center mt-16 animate-fade-in"
          style={{ animationDelay: "0.6s" }}
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            <span className="text-gradient">
              Pronto para transformar sua operação com IA?
            </span>
          </h3>
        </div>
      </div>
    </section>
  );
};

export default Services;
