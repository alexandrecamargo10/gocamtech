
import React from 'react';
import { Shield, Zap, Award, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const offset = 30; // Espaçamento antes do conteúdo
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="hero-gradient text-white min-h-[85vh] flex items-center pt-20 px-4 sm:px-6 lg:px-8">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <div className="space-y-6 lg:space-y-8">
            <div className="space-y-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                GoCam tech
                <span className="block text-accent">Soluções Integradas</span>
                em Tecnologia
              </h1>
              <p className="text-lg sm:text-xl text-blue-100 max-w-2xl">
                Transforme seu negócio com nossas soluções completas em CFTV, infraestrutura de TI, 
                cabeamento estruturado e serviços de informática personalizados.
              </p>
            </div>

            {/* Features */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                  <Shield className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold">Segurança</p>
                  <p className="text-sm text-blue-100">CFTV Profissional</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                  <Zap className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold">Performance</p>
                  <p className="text-sm text-blue-100">Infraestrutura TI</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 sm:col-span-2 lg:col-span-1">
                <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                  <Award className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold">Qualidade</p>
                  <p className="text-sm text-blue-100">Suporte Especializado</p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-accent text-primary hover:bg-accent/90 btn-glow"
                onClick={() => handleNavClick('#contact')}
              >
                Solicitar Orçamento
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                size="lg" 
                className="bg-accent text-primary hover:bg-accent/90"
                onClick={() => handleNavClick('#services')}
              >
                Nossos Serviços
              </Button>
            </div>
          </div>

          {/* Image/Visual */}
          <div className="lg:flex justify-center items-center hidden">
            <div className="relative">
              <div className="w-80 h-80 xl:w-96 xl:h-96 bg-white/10 rounded-3xl backdrop-blur-sm border border-white/20 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-20 h-20 xl:w-24 xl:h-24 bg-accent rounded-full flex items-center justify-center mx-auto">
                    <Shield className="w-10 h-10 xl:w-12 xl:h-12 text-primary" />
                  </div>
                  <p className="text-lg font-semibold">Tecnologia Avançada</p>
                  <p className="text-blue-100">Soluções que fazem a diferença</p>
                </div>
              </div>
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 xl:w-20 xl:h-20 bg-accent/20 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 xl:w-16 xl:h-16 bg-white/10 rounded-full animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
