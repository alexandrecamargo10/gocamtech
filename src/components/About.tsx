
import React from 'react';
import { CheckCircle, Users, Clock, Award } from 'lucide-react';

const About = () => {
  const benefits = [
    {
      icon: CheckCircle,
      title: 'Experiência Comprovada',
      description: 'Anos de mercado oferecendo soluções tecnológicas confiáveis e inovadoras.',
    },
    {
      icon: Users,
      title: 'Equipe Especializada',
      description: 'Profissionais certificados e em constante atualização tecnológica.',
    },
    {
      icon: Clock,
      title: 'Suporte Rápido',
      description: 'Atendimento ágil e suporte técnico quando você mais precisa.',
    },
    {
      icon: Award,
      title: 'Qualidade Garantida',
      description: 'Utilizamos apenas equipamentos de primeira linha e melhores práticas.',
    },
  ];

  const stats = [
    { number: '500+', label: 'Projetos Realizados' },
    { number: '10+', label: 'Anos de Experiência' },
    { number: '24h', label: 'Suporte Disponível' },
    { number: '98%', label: 'Clientes Satisfeitos' },
  ];

  return (
    <section id="about" className="section-padding">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Content */}
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Por Que Escolher a Gocam Tech?
              </h2>
              <p className="text-lg text-muted-foreground">
                Somos uma empresa especializada em soluções tecnológicas integradas, comprometida 
                em oferecer serviços de excelência que impulsionam o crescimento do seu negócio.
              </p>
            </div>

            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-primary mb-2">{benefit.title}</h3>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual */}
          <div className="bg-gradient-to-br from-primary to-secondary rounded-3xl p-8 text-white">
            <div className="space-y-8">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-4">Nossa Missão</h3>
                <p className="text-blue-100">
                  Prover soluções tecnológicas inovadoras e confiáveis que transformem 
                  a forma como nossos clientes operam, garantindo segurança, eficiência 
                  e crescimento sustentável.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl md:text-3xl font-bold text-accent mb-1">
                      {stat.number}
                    </div>
                    <div className="text-sm text-blue-100">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="bg-gray-50 rounded-3xl p-8 md:p-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4">Nossos Valores</h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Princípios que guiam nossa atuação e garantem a qualidade dos nossos serviços.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl font-bold text-primary">I</span>
              </div>
              <h4 className="text-xl font-semibold text-primary">Inovação</h4>
              <p className="text-muted-foreground">
                Sempre buscamos as melhores e mais modernas soluções tecnológicas.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl font-bold text-white">C</span>
              </div>
              <h4 className="text-xl font-semibold text-primary">Confiabilidade</h4>
              <p className="text-muted-foreground">
                Nossos clientes podem contar com soluções estáveis e duradouras.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl font-bold text-white">E</span>
              </div>
              <h4 className="text-xl font-semibold text-primary">Excelência</h4>
              <p className="text-muted-foreground">
                Comprometimento com a qualidade em cada projeto que realizamos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
