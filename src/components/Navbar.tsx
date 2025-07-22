import React, { useState } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navItems = [{
    label: 'Início',
    href: '#home'
  }, {
    label: 'Serviços',
    href: '#services'
  }, {
    label: 'Sobre',
    href: '#about'
  }, {
    label: 'Contato',
    href: '#contact'
  }];
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
    setIsMenuOpen(false);
  };
  return <nav className="bg-white shadow-lg fixed w-full top-0 z-50">
      <div className="container-custom">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/201bdb78-e68e-4722-86ca-2534593ef0ae.png" 
              alt="GoCam - Segurança Eletrônica & Tecnologia" 
              className="h-12 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map(item => <button key={item.label} onClick={() => handleNavClick(item.href)} className="text-foreground hover:text-secondary transition-colors duration-300">
                {item.label}
              </button>)}
          </div>

          {/* Contact Info & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Phone className="w-4 h-4" />
              <span>(11) 9999-9999</span>
            </div>
            <Button className="bg-secondary hover:bg-secondary/90 btn-glow">
              Solicitar Orçamento
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              {navItems.map(item => <button key={item.label} onClick={() => handleNavClick(item.href)} className="text-foreground hover:text-secondary transition-colors duration-300 text-left">
                  {item.label}
                </button>)}
              <div className="flex items-center space-x-2 text-sm text-muted-foreground pt-4">
                <Phone className="w-4 h-4" />
                <span>(11) 9999-9999</span>
              </div>
              <Button className="bg-secondary hover:bg-secondary/90 w-full">
                Solicitar Orçamento
              </Button>
            </div>
          </div>}
      </div>
    </nav>;
};
export default Navbar;