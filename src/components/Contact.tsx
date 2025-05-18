
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import { Phone, Mail } from 'lucide-react';
import { useForm, ValidationError } from '@formspree/react';

const Contact = () => {
  const { toast } = useToast();
  const [formSpreeState, handleSubmit] = useForm("xzzroqwd");
  
  if (formSpreeState.succeeded) {
    return (
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-xl shadow-xl p-8 md:p-12 text-center">
            <h3 className="text-2xl font-bold mb-6 text-kais-blue">Message envoyé !</h3>
            <p className="text-gray-700 mb-8">
              Merci pour votre message. Nous vous contacterons dans les plus brefs délais.
            </p>
            <Button 
              onClick={() => window.location.reload()}
              className="bg-kais-blue hover:bg-kais-dark-blue text-white px-8 py-6"
            >
              Envoyer un nouveau message
            </Button>
          </div>
        </div>
      </section>
    );
  }

  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6 text-kais-blue" />,
      title: "Téléphone",
      info: "06 68 87 19 99",
      link: "tel:+33668871999"
    },
    {
      icon: <Mail className="h-6 w-6 text-kais-blue" />,
      title: "Email",
      info: "kaistajert3@gmail.com",
      link: "mailto:kaistajert3@gmail.com"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-kais-blue font-semibold mb-2">CONTACTEZ-NOUS</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-6">Discutons de votre projet</h3>
          <p className="text-gray-700">
            Vous avez un projet en tête ? N'hésitez pas à nous contacter pour en discuter.
            Nous sommes là pour répondre à toutes vos questions et vous accompagner dans la réalisation de votre site web.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {contactInfo.map((item, index) => (
            <a 
              href={item.link}
              key={index}
              className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="p-4 rounded-full bg-kais-blue/10 mb-4">
                {item.icon}
              </div>
              <h4 className="font-bold text-lg mb-2">{item.title}</h4>
              <p className="text-gray-700 text-center">{item.info}</p>
            </a>
          ))}
        </div>
        
        <div className="bg-white rounded-xl shadow-xl overflow-hidden">
          <div className="grid md:grid-cols-5">
            <div className="md:col-span-2 bg-gradient-to-br from-kais-blue to-kais-dark-blue p-8 md:p-12 text-white">
              <h3 className="text-2xl font-bold mb-6">Parlons de votre projet</h3>
              <p className="mb-8">
                Remplissez le formulaire et nous vous contacterons dans les plus brefs délais pour discuter 
                de vos besoins et vous proposer une solution adaptée.
              </p>
              <div className="space-y-6">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm opacity-80">Téléphone</p>
                    <p>06 68 87 19 99</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm opacity-80">Email</p>
                    <p>kaistajert3@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="md:col-span-3 p-8 md:p-12">
              <form onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Nom complet
                    </label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Votre nom"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Votre email"
                      required
                    />
                    <ValidationError 
                      prefix="Email" 
                      field="email"
                      errors={formSpreeState.errors}
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Téléphone
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      placeholder="Votre téléphone"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                      Sujet
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder="Sujet de votre message"
                      required
                    />
                  </div>
                </div>
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Votre message"
                    rows={5}
                    required
                  />
                  <ValidationError 
                    prefix="Message" 
                    field="message"
                    errors={formSpreeState.errors}
                    className="text-red-500 text-sm mt-1"
                  />
                </div>
                <Button 
                  type="submit"
                  className="bg-kais-blue hover:bg-kais-dark-blue text-white px-8 py-6"
                  disabled={formSpreeState.submitting}
                >
                  {formSpreeState.submitting ? 'Envoi en cours...' : 'Envoyer le message'}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
