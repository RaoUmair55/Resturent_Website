import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';

const featuredDishes = [
  {
    id: 1,
    name: 'Grilled Salmon',
    description: 'Fresh Atlantic salmon with herbs and lemon',
    price: '$24.99',
    image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
  },
  {
    id: 2,
    name: 'Beef Tenderloin',
    description: 'Premium cut with red wine reduction',
    price: '$29.99',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
  },
  {
    id: 3,
    name: 'Vegetable Pasta',
    description: 'Fresh vegetables with homemade pasta',
    price: '$19.99',
    image: 'https://images.unsplash.com/photo-1563379926898-05f4575a45d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
  },
];

const testimonials = [
  {
    id: 1,
    name: 'John Doe',
    rating: 5,
    comment: 'Amazing food and service! The atmosphere is perfect for a romantic dinner.',
    image: 'https://randomuser.me/api/portraits/men/1.jpg',
  },
  {
    id: 2,
    name: 'Jane Smith',
    rating: 5,
    comment: 'Best restaurant in town! Their seafood is always fresh and delicious.',
    image: 'https://randomuser.me/api/portraits/women/1.jpg',
  },
  {
    id: 3,
    name: 'Mike Johnson',
    rating: 4,
    comment: 'Great place for family gatherings. The staff is very friendly and attentive.',
    image: 'https://randomuser.me/api/portraits/men/2.jpg',
  },
];

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80)',
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50" />
        </div>
        <div className="relative h-full flex items-center">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center text-white"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                Welcome to Our Restaurant
              </h1>
              <p className="text-xl md:text-2xl mb-8">
                Experience the finest dining in town
              </p>
              <div className="space-x-4">
                <Link
                  to="/menu"
                  className="btn btn-primary inline-block"
                >
                  View Menu
                </Link>
                <Link
                  to="/contact"
                  className="btn bg-white text-gray-900 hover:bg-gray-100 inline-block"
                >
                  Book a Table
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Dishes Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="section-title">Featured Dishes</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredDishes.map((dish) => (
              <motion.div
                key={dish.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{dish.name}</h3>
                  <p className="text-gray-600 mb-4">{dish.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-red-600 font-bold">{dish.price}</span>
                    <button className="btn btn-primary">Order Now</button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="section-title">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-lg"
              >
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h3 className="font-bold">{testimonial.name}</h3>
                    <div className="flex text-yellow-400">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <FaStar key={i} />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600">{testimonial.comment}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 