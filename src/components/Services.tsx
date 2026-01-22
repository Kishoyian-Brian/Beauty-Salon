import { Scissors, Hand, Sparkles, Heart } from 'lucide-react';

const services = [
  {
    icon: Scissors,
    title: 'Hair Styling',
    description: 'Expert cuts, coloring, and treatments to bring out your best look',
    color: 'from-rose-500 to-pink-600',
  },
  {
    icon: Hand,
    title: 'Nail Care',
    description: 'Manicures, pedicures, and nail art by certified technicians',
    color: 'from-amber-500 to-orange-600',
  },
  {
    icon: Sparkles,
    title: 'Skincare',
    description: 'Rejuvenating facials and treatments for glowing skin',
    color: 'from-rose-600 to-rose-700',
  },
  {
    icon: Heart,
    title: 'Spa & Massage',
    description: 'Relaxing massages and spa treatments for total wellness',
    color: 'from-amber-600 to-amber-700',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-4">Our Services</h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Discover our comprehensive range of beauty and wellness services tailored just for you
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group bg-[#1a1a1a] rounded-3xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 cursor-pointer border border-gray-800 hover:border-gray-700"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-gray-400 leading-relaxed">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
