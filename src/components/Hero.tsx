import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-ai.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary/5 via-background to-secondary/5 pt-16 md:pt-0">
      {/* Imagem de fundo */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/90 to-background/95"></div>
      </div>

      {/* Grid animado */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--primary))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--primary))_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_110%)]"></div>
      </div>

      {/* Conteúdo principal */}
      <div className="container relative z-10 px-4 mx-auto text-center">
        <div className="max-w-5xl mx-auto space-y-8 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/50 bg-primary/10 backdrop-blur-sm animate-glow-pulse">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">
              Inovação em IA Generativa
            </span>
          </div>

          <h1 className="text-7xl sm:text-8xl md:text-8xl lg:text-8xl font-bold leading-tight">
            <span className="text-gradient animate-float">
              Vamos por a IA na prática no seu negócio
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Tecnologia não é só teoria, mas resultado aplicado
          </p>

          {/* Indicadores de confiança */}
          <div className="pt-12 grid grid-cols-2 gap-8 max-w-xl mx-auto">
            <div className="space-y-2">
              <div className="text-4xl font-bold text-gradient">+20</div>
              <div className="text-sm text-muted-foreground">
                Anos de Experiência
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-gradient">100%</div>
              <div className="text-sm text-muted-foreground">
                Foco em Resultados
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Elementos flutuantes */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full blur-3xl animate-float"></div>
      <div
        className="absolute bottom-20 right-10 w-32 h-32 bg-secondary/20 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "1s" }}
      ></div>
    </section>
  );
};

export default Hero;
