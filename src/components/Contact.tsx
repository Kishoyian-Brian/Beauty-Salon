import { MapPin, Phone, Mail, Facebook, Instagram, Twitter } from 'lucide-react';

// Custom TikTok Icon Component
const Tiktok = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
  >
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
  </svg>
);

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-4">Get In Touch</h2>
          <p className="text-lg text-gray-400">
            Visit us or reach out for any inquiries
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex items-start space-x-4 group">
              <div className="w-12 h-12 bg-gradient-to-br from-rose-500 to-amber-500 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-white mb-1">Visit Us</h3>
                <p className="text-gray-400">123 Beauty Lane, Luxury District</p>
                <p className="text-gray-400">New York, NY 10001</p>
              </div>
            </div>

            <div className="flex items-start space-x-4 group">
              <div className="w-12 h-12 bg-gradient-to-br from-rose-500 to-amber-500 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-white mb-1">Call Us</h3>
                <p className="text-gray-400">+254 7000000</p>
                <p className="text-sm text-gray-500">Mon - Sat: 9:00 AM - 7:00 PM</p>
              </div>
            </div>

            <div className="flex items-start space-x-4 group">
              <div className="w-12 h-12 bg-gradient-to-br from-rose-500 to-amber-500 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-white mb-1">Email Us</h3>
                <p className="text-gray-400">hello@luxebeauty.com</p>
                <p className="text-gray-400">info@luxebeauty.com</p>
              </div>
            </div>

            <div className="pt-6">
              <h3 className="font-semibold text-white mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                {[
                  { icon: Facebook, link: '#' },
                  { icon: Instagram, link: '#' },
                  { icon: Twitter, link: '#' },
                  { icon: Tiktok, link: '#' },
                ].map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.link}
                      className="w-12 h-12 bg-gradient-to-br from-rose-500 to-amber-500 rounded-xl flex items-center justify-center hover:scale-110 transform transition-all duration-300 shadow-md hover:shadow-lg"
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

         <div className="rounded-3xl overflow-hidden shadow-2xl h-[400px] border border-gray-800">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.3502049693445!2d37.07628!3d-1.04148!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1780d4593e98a0c7%3A0xa246784c3d526cd8!2sThika%20Level%205%20Hospital%2C%20General%20Kago%20Rd%2C%20Thika!5e0!3m2!1sen!2ske!4v1700000000000!5m2!1sen!2ske"
    width="100%"
    height="100%"
    style={{ border: 0 }}
    allowFullScreen
    loading="lazy"
    title="Thika Level 5 Hospital Location"
  ></iframe>
</div>

        </div>
      </div>

      <div className="mt-20 text-center pb-8">
        <p className="text-gray-500 text-sm">
          © 2024 Luxe Beauty. All rights reserved.
        </p>
      </div>
    </section>
  );
}
