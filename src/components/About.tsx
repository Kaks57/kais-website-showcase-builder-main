
import { Button } from '@/components/ui/button';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="w-full h-[450px] rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600" 
                alt="KaisWebsite Team" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-kais-blue rounded-lg"></div>
            <div className="absolute -bottom-12 -right-12 p-6 bg-white shadow-xl rounded-lg">
              <p className="text-5xl font-bold text-kais-blue">5+</p>
              <p className="text-gray-600">Années d'expérience</p>
            </div>
          </div>
          
          <div className="space-y-6">
            <div>
              <h2 className="text-kais-blue font-semibold mb-2">À PROPOS DE NOUS</h2>
              <h3 className="text-3xl md:text-4xl font-bold mb-6">Des sites web qui dépassent vos attentes</h3>
            </div>
            
            <p className="text-gray-700">
              KaisWebsite est une agence de création de sites web spécialisée dans le développement de solutions digitales 
              sur mesure pour les entreprises de toutes tailles. Depuis plus de 5 ans, nous travaillons en étroite 
              collaboration avec nos clients pour créer des sites web modernes, efficaces et optimisés.
            </p>
            
            <div className="grid grid-cols-2 gap-6 py-4">
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 rounded-full bg-kais-blue/10 flex items-center justify-center text-kais-blue">
                  ✓
                </div>
                <div>
                  <h4 className="font-semibold">Design moderne</h4>
                  <p className="text-gray-600 text-sm">Interfaces élégantes et actuelles</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 rounded-full bg-kais-blue/10 flex items-center justify-center text-kais-blue">
                  ✓
                </div>
                <div>
                  <h4 className="font-semibold">100% responsive</h4>
                  <p className="text-gray-600 text-sm">Parfait sur tous les appareils</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 rounded-full bg-kais-blue/10 flex items-center justify-center text-kais-blue">
                  ✓
                </div>
                <div>
                  <h4 className="font-semibold">SEO optimisé</h4>
                  <p className="text-gray-600 text-sm">Visibilité maximale sur Google</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 rounded-full bg-kais-blue/10 flex items-center justify-center text-kais-blue">
                  ✓
                </div>
                <div>
                  <h4 className="font-semibold">Support inclus</h4>
                  <p className="text-gray-600 text-sm">Assistance technique continue</p>
                </div>
              </div>
            </div>
            
            <Button className="mt-4 bg-kais-blue hover:bg-kais-dark-blue text-white">
              En savoir plus
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
