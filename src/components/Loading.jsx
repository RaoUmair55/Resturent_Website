import { motion } from 'framer-motion';

const Loading = () => {
  return (
    <div className="fixed inset-0 bg-white bg-opacity-80 flex items-center justify-center z-50">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          duration: 0.5,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
        className="w-16 h-16 border-4 border-red-600 border-t-transparent rounded-full"
      />
    </div>
  );
};

export default Loading; 