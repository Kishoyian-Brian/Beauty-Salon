import { Calendar } from 'lucide-react';

export default function Hero() {
  const scrollToBooking = () => {
    const element = document.getElementById('booking');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative pt-20 min-h-screen flex items-center">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-rose-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-white leading-tight">
              Unleash Your
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-amber-400">
                Inner Beauty
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              Experience luxury and transformation at our premier beauty salon.
              Where elegance meets expertise.
            </p>
            <button
              onClick={scrollToBooking}
              className="group inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-rose-500 to-amber-500 text-white rounded-full font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            >
              <Calendar className="w-5 h-5" />
              <span>Book Appointment</span>
            </button>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
              <img
                src="https://images.pexels.com/photos/3992859/pexels-photo-3992859.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Luxury salon interior"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
            <div className="absolute -bottom-6 -right-6 bg-[#1a1a1a] rounded-2xl shadow-xl p-6 transform hover:scale-105 transition-transform duration-300 border border-gray-800">
              <p className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-amber-400">500+</p>
              <p className="text-sm text-gray-400 mt-1">Happy Clients</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
