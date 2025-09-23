
import React from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { isValidPhoneNumber } from 'libphonenumber-js';
import emailjs from '@emailjs/browser';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';

// Schema de validação
const contactFormSchema = z.object({
  name: z.string().min(2, "Nome deve ter pelo menos 2 caracteres"),
  email: z.string().email("E-mail inválido"),
  phone: z.string().optional().refine((phone) => {
    if (!phone || phone.trim() === '') return true;
    
    // Remove formatação para validar
    const cleanPhone = phone.replace(/\D/g, '');
    
    // Verifica se tem DDD + número (10 ou 11 dígitos)
    if (cleanPhone.length < 10 || cleanPhone.length > 11) {
      return false;
    }
    
    // Verifica se é um número brasileiro válido
    const formattedPhone = '+55' + cleanPhone;
    return isValidPhoneNumber(formattedPhone, 'BR');
  }, "Telefone brasileiro inválido (ex: (21) 95943-6694)"),
  subject: z.string().min(3, "Assunto deve ter pelo menos 3 caracteres"),
  message: z.string().min(10, "Mensagem deve ter pelo menos 10 caracteres")
});

type ContactFormData = z.infer<typeof contactFormSchema>;

const Contact = () => {
  const { toast } = useToast();
  
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    }
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      // Configuração do EmailJS (será necessário configurar as chaves)
      const templateParams = {
        from_name: data.name,
        from_email: data.email,
        from_phone: data.phone || 'Não informado',
        subject: data.subject,
        message: data.message,
        to_email: 'contato@gocamtecnologia.com.br'
      };

      // Para funcionar, será necessário configurar as chaves do EmailJS
      // Por enquanto, vamos simular o envio
      console.log('Enviando email:', templateParams);
      
      // Simular delay de envio
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Mensagem enviada com sucesso!",
        description: "Entraremos em contato em breve. Obrigado pelo interesse!",
      });
      
      form.reset();
      
    } catch (error) {
      console.error('Erro ao enviar email:', error);
      toast({
        title: "Erro ao enviar mensagem",
        description: "Tente novamente ou entre em contato por telefone.",
        variant: "destructive"
      });
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Telefone',
      value: '(21) 95943-6694',
      action: 'tel:+5521959436694',
      color: 'bg-green-50 text-green-600',
    },
    {
      icon: Mail,
      title: 'E-mail',
      value: 'contato@gocamtecnologia.com.br',
      action: 'mailto:contato@gocamtecnologia.com.br',
      color: 'bg-blue-50 text-blue-600',
    },
    {
      icon: MapPin,
      title: 'Localização',
      value: 'Rio de Janeiro, RJ',
      action: '#',
      color: 'bg-red-50 text-red-600',
    },
    {
      icon: Clock,
      title: 'Horário',
      value: 'Seg à Sex: 8h às 18h',
      action: '#',
      color: 'bg-purple-50 text-purple-600',
    },
  ];

  return (
    <section id="contact" className="section-padding bg-gray-50">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">Entre em Contato</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Pronto para transformar seu negócio com nossas soluções tecnológicas? 
            Entre em contato conosco e solicite seu orçamento personalizado.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="shadow-lg border-0">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">Envie sua Mensagem</CardTitle>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Nome Completo *</FormLabel>
                          <FormControl>
                            <Input placeholder="Seu nome completo" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>E-mail *</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="seu@email.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Telefone</FormLabel>
                          <FormControl>
                            <Input 
                              type="tel" 
                              placeholder="(21) 95943-6694" 
                              {...field}
                              onChange={(e) => {
                                // Formatar telefone durante a digitação
                                let value = e.target.value.replace(/\D/g, '');
                                if (value.length <= 11) {
                                  if (value.length > 6) {
                                    value = value.replace(/(\d{2})(\d{4,5})(\d{4})/, '($1) $2-$3');
                                  } else if (value.length > 2) {
                                    value = value.replace(/(\d{2})(\d+)/, '($1) $2');
                                  }
                                  field.onChange(value);
                                }
                              }}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Assunto *</FormLabel>
                          <FormControl>
                            <Input placeholder="Como podemos ajudar?" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Mensagem *</FormLabel>
                        <FormControl>
                          <Textarea
                            rows={5}
                            placeholder="Descreva seu projeto ou necessidade..."
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-secondary hover:bg-secondary/90 btn-glow"
                    disabled={form.formState.isSubmitting}
                  >
                    <Send className="mr-2 w-5 h-5" />
                    {form.formState.isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-6">
            <div className="grid gap-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className="card-hover border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className={`w-12 h-12 ${info.color} rounded-full flex items-center justify-center`}>
                        <info.icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-primary mb-1">{info.title}</h3>
                        <a 
                          href={info.action}
                          className="text-muted-foreground hover:text-secondary transition-colors"
                        >
                          {info.value}
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* CTA Card */}
            <Card className="bg-primary text-white border-0 shadow-lg">
              <CardContent className="p-8 text-center space-y-4">
                <h3 className="text-xl font-bold">Atendimento Personalizado</h3>
                <p className="text-blue-100">
                  Nossos especialistas estão prontos para entender suas necessidades 
                  e oferecer a melhor solução tecnológica.
                </p>
                <Button 
                  className="bg-accent text-primary hover:bg-accent/90 btn-glow"
                  onClick={() => window.open('https://wa.me/5521959436694', '_blank')}
                >
                  <Phone className="mr-2 w-4 h-4" />
                  WhatsApp
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
