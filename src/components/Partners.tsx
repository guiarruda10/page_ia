import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Star, CheckCircle } from "lucide-react";

const Partners = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-b from-secondary/5 to-white backdrop-blur-sm">
      {/* Cabeçalho da seção */}
      <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/50 bg-primary/10 backdrop-blur-sm mb-6 animate-glow-pulse">
          <Shield className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium text-primary">
            Parceria Estratégica
          </span>
        </div>

        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
          Parceiro Oficial
        </h2>
        <p className="text-xl text-muted-foreground">
          Trabalhamos com os melhores para entregar soluções de IA de alta
          qualidade
        </p>
      </div>

      {/* Card do parceiro */}
      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto">
          <Card className="relative overflow-hidden bg-gradient-to-br from-card/90 via-card/80 to-card/90 backdrop-blur-xl border-primary/30 shadow-2xl shadow-primary/10 animate-scale-in">
            <CardContent className="p-12 md:p-16">
              <div className="text-center space-y-8">
                {/* Logo e Badge */}
                <div className="space-y-6">
                  <div className="flex justify-center">
                    <div className="relative">
                      <img
                        src="/logos/zerotrusted.png"
                        alt="ZeroTrusted Logo"
                        className="h-20 w-auto object-contain"
                      />
                    </div>
                  </div>

                  <div className="space-y-4">
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                      Parceiro oficial em soluções de segurança e compliance
                      para projetos de IA
                    </p>
                  </div>
                </div>

                {/* Benefícios da parceria */}
                <div className="grid md:grid-cols-3 gap-6 pt-8">
                  <div className="group text-center space-y-3 p-6 rounded-xl hover:bg-primary/5 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/20 cursor-pointer">
                    <div className="inline-flex p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                      <Shield className="w-6 h-6 text-primary group-hover:text-primary/80 transition-colors" />
                    </div>
                    <h4 className="font-semibold text-lg group-hover:text-primary transition-colors">
                      Segurança
                    </h4>
                    <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                      Compliance e segurança em todos os projetos
                    </p>
                  </div>

                  <div className="group text-center space-y-3 p-6 rounded-xl hover:bg-secondary/5 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-secondary/20 cursor-pointer">
                    <div className="inline-flex p-3 rounded-xl bg-secondary/10 group-hover:bg-secondary/20 group-hover:scale-110 transition-all duration-300">
                      <CheckCircle className="w-6 h-6 text-secondary group-hover:text-secondary/80 transition-colors" />
                    </div>
                    <h4 className="font-semibold text-lg group-hover:text-secondary transition-colors">
                      Qualidade
                    </h4>
                    <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                      Padrões internacionais de qualidade
                    </p>
                  </div>

                  <div className="group text-center space-y-3 p-6 rounded-xl hover:bg-primary/5 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/20 cursor-pointer">
                    <div className="inline-flex p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                      <Star className="w-6 h-6 text-primary group-hover:text-primary/80 transition-colors" />
                    </div>
                    <h4 className="font-semibold text-lg group-hover:text-primary transition-colors">
                      Excelência
                    </h4>
                    <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                      Soluções certificadas e validadas
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Elementos decorativos */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-3xl animate-float"></div>
      <div
        className="absolute bottom-20 right-10 w-32 h-32 bg-secondary/10 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "1s" }}
      ></div>
    </section>
  );
};

export default Partners;
