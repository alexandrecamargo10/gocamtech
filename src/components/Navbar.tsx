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
  return <nav className="bg-white shadow-lg fixed w-full top-0 z-50">
      <div className="container-custom">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            
            <div>
              <h1 className="text-xl font-bold text-primary">Gocam Tech</h1>
              <p className="text-xs text-muted-foreground">Soluções em Tecnologia</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map(item => <a key={item.label} href={item.href} className="text-foreground hover:text-secondary transition-colors duration-300">
                {item.label}
              </a>)}
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
              {navItems.map(item => <a key={item.label} href={item.href} className="text-foreground hover:text-secondary transition-colors duration-300" onClick={() => setIsMenuOpen(false)}>
                  {item.label}
                </a>)}
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