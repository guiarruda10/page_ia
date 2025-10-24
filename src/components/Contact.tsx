import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Instagram,
  MessageCircle,
  ArrowRight,
  Linkedin,
  Facebook,
} from "lucide-react";
import techBg from "@/assets/tech-bg.jpg";

const Contact = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-b from-secondary/5 to-white backdrop-blur-sm">
      {/* Background */}
      <div
        className="absolute inset-0 z-0 opacity-20"
        style={{
          backgroundImage: `url(${techBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/90 to-background/70"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl animate-float"></div>
      <div
        className="absolute bottom-20 right-10 w-40 h-40 bg-secondary/20 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "2s" }}
      ></div>

      <div className="container relative z-10 px-4 mx-auto">
        <div className="max-w-5xl mx-auto">
          {/* Main CTA Card */}
          <Card className="bg-gradient-to-br from-card/90 via-card/80 to-card/90 backdrop-blur-xl border-primary/30 shadow-2xl shadow-primary/10 animate-scale-in">
            <CardContent className="p-12 md:p-16">
              <div className="text-center space-y-8">
                {/* Heading */}
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/50 bg-primary/10 backdrop-blur-sm mb-4 animate-glow-pulse">
                    <MessageCircle className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium text-primary">
                      Vamos Conversar
                    </span>
                  </div>

                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                    <span className="text-gradient">Entre em Contato</span>
                  </h2>

                  <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                    IA só faz sentido quando transforma o dia a dia da sua
                    empresa
                  </p>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
                  <Button
                    size="lg"
                    className="group bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-all duration-300 text-lg px-8 py-6 glow-primary"
                    onClick={() =>
                      window.open("https://wa.me/5511930063996", "_blank")
                    }
                  >
                    <span className="flex items-center gap-2">
                      Falar com Especialista
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Button>
                </div>

                {/* Contact Options */}
                <div className="grid md:grid-cols-3 gap-6 pt-8">
                  <a
                    href="https://www.instagram.com/ia.na.praticaa/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group p-6 rounded-xl bg-muted/30 hover:bg-muted/50 transition-all duration-300 hover:scale-105 cursor-pointer"
                  >
                    <div className="inline-flex p-3 rounded-xl bg-secondary/10 group-hover:bg-secondary/20 transition-colors mb-3">
                      <Instagram className="w-6 h-6 text-secondary" />
                    </div>
                    <div className="font-semibold mb-1">Instagram</div>
                    <div className="text-sm text-muted-foreground">
                      @ia.na.praticaa
                    </div>
                  </a>

                  <a
                    href="https://www.linkedin.com/company/ia-na-pr%C3%A1tica/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group p-6 rounded-xl bg-muted/30 hover:bg-muted/50 transition-all duration-300 hover:scale-105 cursor-pointer"
                  >
                    <div className="inline-flex p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors mb-3">
                      <Linkedin className="w-6 h-6 text-primary" />
                    </div>
                    <div className="font-semibold mb-1">LinkedIn</div>
                    <div className="text-sm text-muted-foreground">
                      IA na Prática
                    </div>
                  </a>

                  <a
                    href="https://www.facebook.com/profile.php?id=61582467041566&mibextid=wwXIfr&rdid=rDyueqQ11ckaI0Vq&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F17bEbHYh3D%2F%3Fmibextid%3DwwXIfr#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group p-6 rounded-xl bg-muted/30 hover:bg-muted/50 transition-all duration-300 hover:scale-105 cursor-pointer"
                  >
                    <div className="inline-flex p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors mb-3">
                      <Facebook className="w-6 h-6 text-primary" />
                    </div>
                    <div className="font-semibold mb-1">Facebook</div>
                    <div className="text-sm text-muted-foreground">
                      IA na Prática
                    </div>
                  </a>
                </div>

                {/* Trust Badge */}
                <div className="pt-8 border-t border-border/50">
                  <p className="text-sm text-muted-foreground">
                    IA Segura <br />
                    Conformidade com a LGPD 2.0 e redução de riscos cibernéticos
                    enquanto acelera a inovação com uma IA segura e confiável.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Additional Info */}
          <div
            className="text-center mt-12 space-y-4 animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            <p className="text-muted-foreground">
              Resposta em até 24 horas • Sem compromisso
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
