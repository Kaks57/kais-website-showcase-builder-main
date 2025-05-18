
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const projectCategories = [
    { id: 'all', name: 'Tous' },
    { id: 'location', name: 'Location de Voiture' },
    { id: 'vente', name: 'Vente de Voiture' },
    { id: 'boubou', name: 'Vente de Boubou' },
    { id: 'Taxi', name: 'Taxi-VTC' },
  ];
  
  const projects = [
    {
      id: 1,
      title: "Site de Location de Voitures",
      category: "location",
      image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=600",
      description: "Plateforme permettant de réserver des véhicules en ligne avec système de paiement sécurisé.",
      link: "https://luxuryrentalword.com/"
    },
    {
      id: 2,
      title: "Site de Vente de Voitures",
      category: "vente",
      image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=600",
      description: "Site web pour une concession automobile permettant de présenter et vendre des véhicules.",
      link: "https://luxurysaleworld.com/"
    },
    {
      id: 3,
      title: "Boutique de Boubous en Ligne",
      category: "boubou",
      image: "/boubou.jpeg",
      description: "E-commerce spécialisé dans la vente de boubous traditionnels et modernes.",
      link: "https://edk-empire.com/"
    },
    {
      id: 4,
      title: "Site Taxi-VTC",
      category: "Taxi",
      image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=600",
      description: "Site vitrine pour une agence de Taxi.",
      link: "https://taxiecotransport.netlify.app/"
    },
  ];
  
  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-kais-blue font-semibold mb-2">NOTRE PORTFOLIO</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-6">Nos Réalisations</h3>
          <p className="text-gray-700">
            Découvrez une sélection de nos projets qui démontrent notre expertise 
            et notre capacité à créer des solutions web percutantes.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {projectCategories.map(category => (
            <Button
              key={category.id}
              variant={activeFilter === category.id ? "default" : "outline"}
              onClick={() => setActiveFilter(category.id)}
              className={activeFilter === category.id 
                ? "bg-kais-blue hover:bg-kais-dark-blue" 
                : "border-kais-blue text-kais-blue hover:bg-kais-light-blue/20"
              }
            >
              {category.name}
            </Button>
          ))}
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Card key={project.id} className="overflow-hidden group border-none shadow-lg hover:shadow-xl transition-all">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-start p-6">
                  <Button 
                    className="bg-kais-blue hover:bg-kais-dark-blue text-white"
                    onClick={() => window.open(project.link, '_blank')}
                  >
                    Voir le projet
                  </Button>
                </div>
              </div>
              <CardContent className="p-6">
                <h4 className="text-xl font-bold mb-2">{project.title}</h4>
                <p className="text-gray-700">{project.description}</p>
                <div className="mt-4">
                  <span className="inline-block px-3 py-1 text-xs font-medium bg-kais-blue/10 text-kais-blue rounded-full">
                    {projectCategories.find(cat => cat.id === project.category)?.name}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button className="bg-kais-blue hover:bg-kais-dark-blue text-white px-8">
            Voir tous les projets
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
