import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';

const galleryImages = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    alt: 'Restaurant Interior',
    category: 'interior',
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    alt: 'Grilled Salmon',
    category: 'food',
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    alt: 'Beef Tenderloin',
    category: 'food',
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    alt: 'Restaurant Bar',
    category: 'interior',
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    alt: 'Tiramisu',
    category: 'food',
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    alt: 'Outdoor Seating',
    category: 'interior',
  },
  {
    id: 7,
    src: 'https://images.unsplash.com/photo-1563379926898-05f4575a45d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    alt: 'Pasta Dish',
    category: 'food',
  },
  {
    id: 8,
    src: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    alt: 'Cocktail',
    category: 'drinks',
  },
  {
    id: 9,
    src: 'https://images.unsplash.com/photo-1621263764928-df1444c5e859?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    alt: 'Fresh Lemonade',
    category: 'drinks',
  },
];

const categories = [
  { id: 'all', name: 'All' },
  { id: 'food', name: 'Food' },
  { id: 'interior', name: 'Interior' },
  { id: 'drinks', name: 'Drinks' },
];

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredImages = selectedCategory === 'all'
    ? galleryImages
    : galleryImages.filter((image) => image.category === selectedCategory);

  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <h1 className="section-title">Our Gallery</h1>

        {/* Category Filter */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-lg border border-gray-200 p-1">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-2 rounded-lg transition-colors ${
                  selectedCategory === category.id
                    ? 'bg-red-600 text-white'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="wait">
            {filteredImages.map((image) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="relative group cursor-pointer"
                onClick={() => setSelectedImage(image)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                  <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Click to enlarge
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
                onClick={() => setSelectedImage(null)}
              >
                <FaTimes className="w-6 h-6" />
              </button>
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="w-full h-auto rounded-lg"
              />
              <p className="text-white text-center mt-4">{selectedImage.alt}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery; 