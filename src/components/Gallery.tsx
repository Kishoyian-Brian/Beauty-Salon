const galleryImages = [
  {
    url: '/hair-color.jpg',
    title: 'Hair Styling',
    category: 'Hair',
  },
  {
    url: '/nails1.jpg',
    title: 'Nail Art',
    category: 'Nails',
  },
  {
    url: '/facial.jpg',
    title: 'Facial Treatment',
    category: 'Skincare',
  },
  {
    url: '/manicure.jpg',
    title: 'Manicure',
    category: 'Nails',
  },
  {
    url: '/pic1.jpg',
    title: 'Hair Color',
    category: 'Hair',
  },
  {
    url: '/massage.jpg',
    title: 'Spa Treatment',
    category: 'Spa',
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-4">Our Gallery</h2>
          <p className="text-lg text-gray-400">
            See our stunning transformations and artistry
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group relative aspect-square rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 cursor-pointer"
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs text-white mb-2">
                    {image.category}
                  </span>
                  <h3 className="text-xl font-semibold text-white">{image.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

