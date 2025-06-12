import { motion } from 'framer-motion';
import { FaAward, FaUtensils, FaUsers } from 'react-icons/fa';

const teamMembers = [
  {
    id: 1,
    name: 'John Smith',
    position: 'Head Chef',
    image: 'https://images.unsplash.com/photo-1581299894007-aaa50297cf16?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    bio: 'With over 20 years of experience in fine dining, John brings creativity and passion to every dish.',
  },
  {
    id: 2,
    name: 'Sarah Johnson',
    position: 'Pastry Chef',
    image: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    bio: 'Sarah specializes in creating beautiful and delicious desserts that are both traditional and innovative.',
  },
  {
    id: 3,
    name: 'Michael Chen',
    position: 'Sous Chef',
    image: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    bio: 'Michael brings his expertise in Asian fusion cuisine to create unique flavor combinations.',
  },
];

const milestones = [
  {
    year: '1990',
    title: 'Restaurant Founded',
    description: 'Our journey began with a small family restaurant in the heart of the city.',
  },
  {
    year: '2000',
    title: 'First Award',
    description: 'Received our first "Best Fine Dining" award from the local food critics association.',
  },
  {
    year: '2010',
    title: 'Expansion',
    description: 'Expanded our restaurant to include a private dining room and outdoor terrace.',
  },
  {
    year: '2020',
    title: '30th Anniversary',
    description: 'Celebrated 30 years of serving exceptional food and creating memorable experiences.',
  },
];

const About = () => {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Story</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Since 1990, we have been serving exceptional food and creating
              memorable dining experiences for our guests. Our commitment to
              quality, innovation, and hospitality has made us a beloved
              destination for food lovers.
            </p>
          </motion.div>
        </section>

        {/* Stats Section */}
        <section className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center p-6 bg-white rounded-lg shadow-lg"
            >
              <FaAward className="w-12 h-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">15+ Awards</h3>
              <p className="text-gray-600">Recognized for excellence</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center p-6 bg-white rounded-lg shadow-lg"
            >
              <FaUtensils className="w-12 h-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">100+ Dishes</h3>
              <p className="text-gray-600">Unique culinary creations</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center p-6 bg-white rounded-lg shadow-lg"
            >
              <FaUsers className="w-12 h-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">50k+ Guests</h3>
              <p className="text-gray-600">Happy customers served</p>
            </motion.div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="mb-20">
          <h2 className="section-title">Our Journey</h2>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200" />
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'justify-start' : 'justify-end'
                  }`}
                >
                  <div
                    className={`w-1/2 p-6 bg-white rounded-lg shadow-lg ${
                      index % 2 === 0 ? 'mr-8' : 'ml-8'
                    }`}
                  >
                    <span className="text-red-600 font-bold">{milestone.year}</span>
                    <h3 className="text-xl font-bold mt-2">{milestone.title}</h3>
                    <p className="text-gray-600 mt-2">{milestone.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section>
          <h2 className="section-title">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold">{member.name}</h3>
                  <p className="text-red-600 mb-4">{member.position}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default About; 