import { motion } from 'framer-motion';
import { HeartIcon } from '../constants';

export default function VisualDivider() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: false }}
      transition={{ duration: 0.6 }}
      className="py-16 flex items-center justify-center gap-4"
    >
      <motion.div
        animate={{ scaleX: [0.5, 1, 0.5] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="h-1 w-16 bg-gradient-to-r from-rose-200 to-transparent"
      />
      <motion.div
        animate={{ rotate: 360, scale: [1, 1.2, 1] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        <HeartIcon size={24} color="#f43f5e" />
      </motion.div>
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <HeartIcon size={32} color="#fb7185" />
      </motion.div>
      <motion.div
        animate={{ rotate: -360, scale: [1, 1.2, 1] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        <HeartIcon size={24} color="#f43f5e" />
      </motion.div>
      <motion.div
        animate={{ scaleX: [0.5, 1, 0.5] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="h-1 w-16 bg-gradient-to-l from-rose-200 to-transparent"
      />
    </motion.div>
  );
}
