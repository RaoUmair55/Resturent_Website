import React, { useState } from 'react';
import { FaUtensils, FaGlassMartiniAlt, FaIceCream, FaPepperHot } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { MENU_CATEGORIES } from '../utils/constants';

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const menuItems = [
    {
      id: 1,
      name: 'Classic Margherita',
      description: 'Fresh tomatoes, mozzarella, basil, and olive oil',
      price: 12.99,
      category: 'pizza',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
      spicy: true,
      vegetarian: true,
    },
    {
      id: 2,
      name: 'Spicy Arrabbiata',
      description: 'Penne pasta in a spicy tomato sauce with garlic and chili',
      price: 14.99,
      category: 'pasta',
      image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      spicy: true,
      vegetarian: true,
    },
    {
      id: 1,
      name: 'Classic Margherita',
      description: 'Fresh tomatoes, mozzarella, basil, and olive oil',
      price: 12.99,
      category: 'pizza',
      image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      spicy: false,
      vegetarian: true,
    },
    {
      id: 2,
      name: 'Spicy Arrabbiata',
      description: 'Penne pasta in a spicy tomato sauce with garlic and chili',
      price: 14.99,
      category: 'pasta',
      image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      spicy: true,
      vegetarian: true,
    },
    // Add more menu items here
  ];

  const filteredItems = activeCategory === 'all' 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory);

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-serif font-bold text-gray-900 mb-4">Our Menu</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our carefully crafted dishes, made with the finest ingredients and prepared with passion.
          </p>
        </motion.div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {MENU_CATEGORIES.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-primary-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div className="relative h-48">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
                {item.spicy && (
                  <div className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full">
                    <FaPepperHot className="w-4 h-4" />
                  </div>
                )}
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold text-gray-900">{item.name}</h3>
                  <span className="text-lg font-bold text-primary-600">${item.price}</span>
                </div>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <div className="flex justify-between items-center">
                  <div className="flex gap-2">
                    {item.vegetarian && (
                      <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                        Vegetarian
                      </span>
                    )}
                  </div>
                  <button className="btn-primary">
                    Order Now
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu; 