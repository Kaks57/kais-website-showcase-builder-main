
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Globe, Laptop, Palette, Code } from "lucide-react";

const Services = () => {
  const serviceItems = [
    {
      icon: <Globe className="h-10 w-10 text-kais-blue" />,
      title: "Sites Vitrines",
      description: "Présentez votre entreprise avec un site web professionnel qui reflète votre image de marque et vos valeurs."
    },
    {
      icon: <Laptop className="h-10 w-10 text-kais-blue" />,
      title: "Sites E-commerce",
      description: "Vendez vos produits en ligne avec une boutique e-commerce performante, sécurisée et facile à utiliser."
    },
    {
      icon: <Palette className="h-10 w-10 text-kais-blue" />,
      title: "Refonte de Site",
      description: "Modernisez votre site web existant pour améliorer son apparence, ses performances et son taux de conversion."
    },
    {
      icon: <Code className="h-10 w-10 text-kais-blue" />,
      title: "Applications Web",
      description: "Créez des applications web sur mesure pour optimiser vos processus internes et externes."
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-kais-blue font-semibold mb-2">NOS SERVICES</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-6">Solutions Web Complètes</h3>
          <p className="text-gray-700">
            Nous proposons une gamme complète de services de conception et développement 
            web adaptés à vos besoins spécifiques et à votre budget.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {serviceItems.map((service, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow group">
              <CardHeader>
                <div className="mb-4 inline-block p-3 rounded-lg bg-kais-blue/10 group-hover:bg-kais-blue/20 transition-colors">
                  {service.icon}
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-700">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-20 p-8 md:p-12 bg-gradient-to-r from-kais-blue to-kais-dark-blue rounded-xl text-white shadow-xl">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Besoin d'un projet web sur mesure?</h3>
              <p className="mb-6">
                Contactez-nous pour discuter de vos idées et obtenir un devis personnalisé pour votre projet.
              </p>
            </div>
            <div className="flex justify-center md:justify-end">
              <a 
                href="#contact" 
                className="px-8 py-3 bg-white text-kais-blue font-medium rounded-lg hover:bg-gray-100 transition-colors"
              >
                Contactez-nous
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
