import React from 'react';
import { Camera, Network, Cable, Monitor, Wrench, ArrowRight, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

// Import service images
import serviceCftv from '@/assets/service-cftv-cameras.jpg';
import serviceAlarm from '@/assets/service-alarm-intelbras.jpg';
import serviceNetwork from '@/assets/service-network.jpg';
import serviceCabling from '@/assets/service-structured-cabling.jpg';
import serviceIt from '@/assets/service-it-infrastructure.jpg';
import serviceAccessControl from '@/assets/service-access-control.jpg';

const Services = () => {
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

  const services = [
    {
      icon: Camera,
      title: 'CFTV e Câmeras de Segurança',
      description: 'Instalação, configuração e manutenção de sistemas de monitoramento profissional.',
      features: ['Câmeras IP e analógicas', 'Monitoramento remoto', 'Gravação em nuvem', 'Manutenção preventiva'],
      color: 'bg-blue-50 text-blue-600',
      image: serviceCftv,
    },
    {
      icon: Shield,
      title: 'Instalação de Sistemas de Alarme',
      description: 'Sistemas de alarme completos para proteção residencial e empresarial.',
      features: ['Alarmes residenciais e comerciais', 'Sensores de movimento', 'Central de monitoramento', 'Controle por aplicativo'],
      color: 'bg-amber-50 text-amber-600',
      image: serviceAlarm,
    },
    {
      icon: Network,
      title: 'Infraestrutura de TI',
      description: 'Projetos completos de rede, servidores e soluções de conectividade empresarial.',
      features: ['Redes locais (LAN)', 'Wi-Fi empresarial', 'Servidores', 'Firewall e VPN'],
      color: 'bg-green-50 text-green-600',
      image: serviceNetwork,
    },
    {
      icon: Cable,
      title: 'Cabeamento Estruturado',
      description: 'Organização e instalação de cabeamento para máxima eficiência e performance.',
      features: ['Cabeamento UTP', 'Fibra óptica', 'Organização de racks', 'Certificação'],
      color: 'bg-purple-50 text-purple-600',
      image: serviceCabling,
    },
    {
      icon: Monitor,
      title: 'Serviços de Informática',
      description: 'Manutenção completa de computadores, sistemas e suporte técnico especializado.',
      features: ['Manutenção hardware', 'Instalação de software', 'Suporte remoto', 'Consultoria TI'],
      color: 'bg-orange-50 text-orange-600',
      image: serviceIt,
    },
    {
      icon: Wrench,
      title: 'Controles de Acesso e Fechaduras',
      description: 'Instalação e manutenção de sistemas de controle de acesso.',
      features: ['Controles de acesso por senha, cartão ou biometrica', 'Fechaduras elétricas e eletroímãs para portas', 'Fechaduras inteligentes'],
      color: 'bg-red-50 text-red-600',
      image: serviceAccessControl,
    },
  ];

  return (
    <section id="services" className="section-padding bg-gray-50">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">Nossos Serviços</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Oferecemos soluções completas em tecnologia para empresas de todos os tamanhos, 
            com qualidade, agilidade e suporte especializado.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <Card key={index} className="card-hover border-0 shadow-lg overflow-hidden">
              {/* Service Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              
              <CardHeader className="text-center">
                <div className={`w-16 h-16 ${service.color} rounded-full flex items-center justify-center mx-auto mb-4 -mt-8 relative z-10 shadow-lg`}>
                  <service.icon className="w-8 h-8" />
                </div>
                <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                <CardDescription className="text-base">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  variant="outline" 
                  className="w-full mt-6 group"
                  onClick={() => handleNavClick('#contact')}
                >
                  Solicitar Orçamento
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-primary rounded-3xl p-8 md:p-12 text-center text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Precisa de uma Solução Específica?
          </h3>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Nossos especialistas estão prontos para desenvolver a solução perfeita para seu negócio. 
            Entre em contato e descubra como podemos ajudar.
          </p>
          <Button 
            size="lg" 
            className="bg-accent text-primary hover:bg-accent/90 btn-glow"
            onClick={() => handleNavClick('#contact')}
          >
            Fale com um Especialista
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
