import { useEffect, useRef, useState } from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Jane Thuo',
    rating: 5,
    text: 'Absolutely love my new hairstyle! The stylists here are true artists. The ambiance is so relaxing and luxurious.',
    image: '/pic2.jpg',
  },
  {
    name: 'Rachel Nyangoso',
    rating: 5,
    text: 'Best facial I\'ve ever had! My skin is glowing. The staff is professional and the products they use are top-notch.',
    image: '/pic3.jpg',
  },
  {
    name: 'Beatrice Achieng',
    rating: 5,
    text: 'The nail art here is incredible! I always get compliments. They really take their time to make everything perfect.',
    image: '/massage.jpg',
  },
  {
    name: 'Wanjiku Kamau',
    rating: 5,
    text: 'Amazing spa experience! The massage was so relaxing and the atmosphere is wonderful. Highly recommend!',
    image: '/pic1.jpg',
  },
  {
    name: 'Janet Sanaipei',
    rating: 5,
    text: 'I always leave feeling like a new person. The team here truly cares about their clients and delivers exceptional service.',
    image: '/massage2.png',
  },
];

export default function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollAmount = 0;
    const scrollSpeed = 1;
    let animationId: number;

    const scroll = () => {
      if (!isPaused && scrollContainer) {
        scrollAmount += scrollSpeed;
        if (scrollAmount >= scrollContainer.scrollWidth / 2) {
          scrollAmount = 0;
        }
        scrollContainer.scrollLeft = scrollAmount;
      }
      animationId = requestAnimationFrame(scroll);
    };

    scroll();

    return () => cancelAnimationFrame(animationId);
  }, [isPaused]);

  // Duplicate the testimonials for seamless infinite scroll
  const scrollItems = [...testimonials, ...testimonials];

  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#1a1a1a] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-4">Client Reviews</h2>
          <p className="text-lg text-gray-400">
            Hear what our clients have to say about their experience
          </p>
        </div>

        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide pb-4"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {scrollItems.map((testimonial, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[320px] md:w-[350px] bg-[#0f0f0f] rounded-3xl p-8 shadow-lg border border-gray-800 hover:shadow-2xl transition-shadow duration-300"
            >
              <Quote className="w-10 h-10 text-rose-500 mb-4" />

              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-500 text-amber-500" />
                ))}
              </div>

              <p className="text-gray-300 leading-relaxed mb-6">
                {testimonial.text}
              </p>

              <div className="flex items-center space-x-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-white">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">Verified Client</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

