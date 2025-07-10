
import React from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    'CFTV e Câmeras de Segurança',
    'Infraestrutura de TI',
    'Cabeamento Estruturado',
    'Serviços de Informática',
    'Soluções Personalizadas',
  ];

  return (
    <footer className="bg-primary text-white">
      <div className="container-custom section-padding">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-primary font-bold text-lg">G</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">GoCam tech</h3>
                <p className="text-sm text-blue-100">Soluções em Tecnologia</p>
              </div>
            </div>
            <p className="text-blue-100">
              Transformando negócios através de soluções tecnológicas integradas, 
              seguras e eficientes.
            </p>
            
            {/* Social Media */}
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent hover:text-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent hover:text-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent hover:text-primary transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Nossos Serviços</h4>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <a 
                    href="#services" 
                    className="text-blue-100 hover:text-accent transition-colors text-sm"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-blue-100 hover:text-accent transition-colors text-sm">
                  Início
                </a>
              </li>
              <li>
                <a href="#services" className="text-blue-100 hover:text-accent transition-colors text-sm">
                  Serviços
                </a>
              </li>
              <li>
                <a href="#about" className="text-blue-100 hover:text-accent transition-colors text-sm">
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="#contact" className="text-blue-100 hover:text-accent transition-colors text-sm">
                  Contato
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-100 hover:text-accent transition-colors text-sm">
                  Política de Privacidade
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contato</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-accent" />
                <span className="text-blue-100 text-sm">(11) 9999-9999</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-accent" />
                <span className="text-blue-100 text-sm">contato@gocamtech.com.br</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-accent" />
                <span className="text-blue-100 text-sm">São Paulo, SP</span>
              </div>
            </div>
            
            <div className="bg-white/10 rounded-lg p-4">
              <p className="text-sm text-blue-100 mb-2">Horário de Atendimento:</p>
              <p className="text-sm font-semibold">Segunda à Sexta: 8h às 18h</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-blue-100">
              © {currentYear} GoCam tech. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6 text-sm text-blue-100">
              <a href="#" className="hover:text-accent transition-colors">Termos de Uso</a>
              <a href="#" className="hover:text-accent transition-colors">Política de Privacidade</a>
              <a href="#" className="hover:text-accent transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
