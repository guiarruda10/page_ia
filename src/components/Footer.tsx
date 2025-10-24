import { Linkedin, Mail, Phone, Sparkles } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-b from-secondary/10 to-white backdrop-blur-sm overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-secondary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container px-4 mx-auto py-16 relative z-10">
        {/* Brand Section */}
        <div className="max-w-3xl mx-auto text-center space-y-6 mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">
              Transformando o Futuro
            </span>
          </div>

          <h3 className="text-3xl md:text-4xl font-bold">
            <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
              IA na Prática
            </span>
          </h3>

          <p className="text-base text-muted-foreground leading-relaxed max-w-xl mx-auto">
            Transformando tecnologia em resultados reais para o seu negócio
            desde 2025.
          </p>
        </div>

        {/* Divider */}
        <div className="flex justify-center mb-10">
          <div className="h-px w-32 bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
        </div>

        {/* Copyright */}
        <div className="text-center space-y-2">
          <p className="text-sm text-muted-foreground/80">
            © 2025 IA na Prática. Todos os direitos reservados.
          </p>
        </div>
      </div>

      {/* Bottom Gradient Line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
    </footer>
  );
};

export default Footer;
