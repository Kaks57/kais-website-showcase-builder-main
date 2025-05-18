
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16 bg-gradient-to-r from-gray-50 to-blue-50">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1200')] bg-cover bg-center opacity-10"></div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Création de sites web <span className="text-kais-blue">professionnels</span>
            </h1>
            
            <p className="text-lg text-gray-700 md:pr-10">
              Transformez votre présence en ligne avec des sites web modernes, 
              responsifs et optimisés pour convertir vos visiteurs en clients.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button className="px-8 py-6 bg-kais-blue hover:bg-kais-dark-blue text-white text-lg">
                Découvrir nos services
              </Button>
              <Button variant="outline" className="px-8 py-6 border-kais-blue text-kais-blue hover:bg-kais-light-blue/20 text-lg">
                Voir nos réalisations
              </Button>
            </div>
            
            <div className="flex items-center space-x-6 pt-4">
              <div>
                <p className="text-3xl font-bold text-kais-blue">5</p>
                <p className="text-gray-600">Projets réalisés</p>
              </div>
              <div className="h-12 w-px bg-gray-300"></div>
              <div>
                <p className="text-3xl font-bold text-kais-blue">100%</p>
                <p className="text-gray-600">Clients satisfaits</p>
              </div>
            </div>
          </div>
          
          <div className="hidden md:block relative animate-fade-in">
            <div className="relative w-full h-[500px] rounded-lg overflow-hidden shadow-2xl transform rotate-2">
              <img 
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600" 
                alt="Développement de site web" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-kais-blue/10 rounded-full blur-3xl"></div>
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-kais-accent/10 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
