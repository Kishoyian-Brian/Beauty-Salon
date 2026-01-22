import { Calendar, Clock, User, Check } from 'lucide-react';
import { useState } from 'react';

export default function Booking() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    stylist: '',
    date: '',
    time: '',
  });
  const [submitted, setSubmitted] = useState(false);

const services = [
  'Hair Styling',
  'Braiding & Weaving',
  'Nail Care',
  'Facial & Skincare',
  'Massage Therapy'
];

const stylists = [
  'Wanjiku Mwangi',
  'Achieng Odhiambo',
  'Mercy Njeri',
  'Faith Atieno'
];

const timeSlots = [
  '09:00 AM',
  '10:00 AM',
  '11:00 AM',
  '01:00 PM',
  '02:00 PM',
  '03:00 PM',
  '04:00 PM'
];
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        stylist: '',
        date: '',
        time: '',
      });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="booking" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#1a1a1a]">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-4">Book Your Appointment</h2>
          <p className="text-lg text-gray-400">
            Schedule your transformation today
          </p>
        </div>

        {submitted ? (
          <div className="bg-[#1a1a1a] rounded-3xl p-12 text-center shadow-xl border border-gray-800">
            <div className="w-20 h-20 bg-gradient-to-br from-rose-500 to-amber-500 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce">
              <Check className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl font-semibold text-white mb-3">Booking Confirmed!</h3>
            <p className="text-gray-400">We'll send you a confirmation email shortly.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-[#1a1a1a] rounded-3xl p-8 md:p-12 shadow-xl border border-gray-800">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Full Name</label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full pl-12 pr-4 py-3 rounded-xl bg-[#2a2a2a] border border-gray-700 focus:border-rose-500 focus:ring-2 focus:ring-rose-500/20 transition-all outline-none text-white placeholder-gray-500"
                    placeholder="Your Name"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-[#2a2a2a] border border-gray-700 focus:border-rose-500 focus:ring-2 focus:ring-rose-500/20 transition-all outline-none text-white placeholder-gray-500"
                  placeholder="youremail@gmail.com"
                />
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-300 mb-2">Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl bg-[#2a2a2a] border border-gray-700 focus:border-rose-500 focus:ring-2 focus:ring-rose-500/20 transition-all outline-none text-white placeholder-gray-500"
                placeholder="+254 712 345 678"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Service</label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-[#2a2a2a] border border-gray-700 focus:border-rose-500 focus:ring-2 focus:ring-rose-500/20 transition-all outline-none text-white"
                >
                  <option value="">Select a service</option>
                  {services.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Stylist</label>
                <select
                  name="stylist"
                  value={formData.stylist}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-[#2a2a2a] border border-gray-700 focus:border-rose-500 focus:ring-2 focus:ring-rose-500/20 transition-all outline-none text-white"
                >
                  <option value="">Select a stylist</option>
                  {stylists.map((stylist) => (
                    <option key={stylist} value={stylist}>
                      {stylist}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Date</label>
                <div className="relative">
                  <Calendar className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full pl-12 pr-4 py-3 rounded-xl bg-[#2a2a2a] border border-gray-700 focus:border-rose-500 focus:ring-2 focus:ring-rose-500/20 transition-all outline-none text-white"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Time</label>
                <div className="relative">
                  <Clock className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
                  <select
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    required
                    className="w-full pl-12 pr-4 py-3 rounded-xl bg-[#2a2a2a] border border-gray-700 focus:border-rose-500 focus:ring-2 focus:ring-rose-500/20 transition-all outline-none text-white appearance-none"
                  >
                    <option value="">Select a time</option>
                    {timeSlots.map((time) => (
                      <option key={time} value={time}>
                        {time}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-gradient-to-r from-rose-500 to-amber-500 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            >
              Confirm Booking
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
