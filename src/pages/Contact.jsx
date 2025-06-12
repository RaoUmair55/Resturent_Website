import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaClock, FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const openingHours = [
  { day: 'Monday - Friday', hours: '11:00 AM - 10:00 PM' },
  { day: 'Saturday', hours: '10:00 AM - 11:00 PM' },
  { day: 'Sunday', hours: '10:00 AM - 9:00 PM' },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    checkOpeningHours();
  }, []);

  const checkOpeningHours = () => {
    const now = new Date();
    const day = now.getDay();
    const hour = now.getHours();
    const minutes = now.getMinutes();
    const currentTime = hour + minutes / 60;

    let isOpenNow = false;

    if (day >= 1 && day <= 5) {
      // Monday - Friday
      isOpenNow = currentTime >= 11 && currentTime < 22;
    } else if (day === 6) {
      // Saturday
      isOpenNow = currentTime >= 10 && currentTime < 23;
    } else {
      // Sunday
      isOpenNow = currentTime >= 10 && currentTime < 21;
    }

    setIsOpen(isOpenNow);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle the form submission
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const mapContainerStyle = {
    width: '100%',
    height: '400px',
  };

  const center = {
    lat: 40.7128, // Replace with your restaurant's latitude
    lng: -74.0060, // Replace with your restaurant's longitude
  };

  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <h1 className="section-title">Contact Us</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
              
              {/* Opening Hours */}
              <div className="mb-8">
                <div className="flex items-center mb-4">
                  <FaClock className="text-red-600 w-6 h-6 mr-4" />
                  <div>
                    <h3 className="font-bold">Opening Hours</h3>
                    <div className="mt-2">
                      {openingHours.map((schedule, index) => (
                        <div key={index} className="flex justify-between text-gray-600">
                          <span>{schedule.day}</span>
                          <span>{schedule.hours}</span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-2">
                      <span
                        className={`inline-block px-3 py-1 rounded-full text-sm ${
                          isOpen
                            ? 'bg-green-100 text-green-800'
                            : 'bg-red-100 text-red-800'
                        }`}
                      >
                        {isOpen ? 'Open Now' : 'Closed'}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Details */}
              <div className="space-y-6">
                <div className="flex items-center">
                  <FaMapMarkerAlt className="text-red-600 w-6 h-6 mr-4" />
                  <div>
                    <h3 className="font-bold">Address</h3>
                    <p className="text-gray-600">123 Restaurant Street, City, State 12345</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <FaPhone className="text-red-600 w-6 h-6 mr-4" />
                  <div>
                    <h3 className="font-bold">Phone</h3>
                    <p className="text-gray-600">(123) 456-7890</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <FaEnvelope className="text-red-600 w-6 h-6 mr-4" />
                  <div>
                    <h3 className="font-bold">Email</h3>
                    <p className="text-gray-600">info@restaurant.com</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <FaWhatsapp className="text-red-600 w-6 h-6 mr-4" />
                  <div>
                    <h3 className="font-bold">WhatsApp</h3>
                    <a
                      href="https://wa.me/1234567890"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-red-600 hover:text-red-700"
                    >
                      Chat with us
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full btn btn-primary"
                >
                  Send Message
                </button>
              </form>
            </div>
          </motion.div>
        </div>

        {/* Google Map */}
        <div className="mt-12">
          <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
            <GoogleMap
              mapContainerStyle={mapContainerStyle}
              center={center}
              zoom={15}
            >
              <Marker position={center} />
            </GoogleMap>
          </LoadScript>
        </div>
      </div>
    </div>
  );
};

export default Contact; 