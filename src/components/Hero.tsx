import { motion } from 'framer-motion';
import { HeartIcon } from '../constants';

export default function Hero() {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={container}
      className="min-h-screen flex flex-col items-center justify-center px-4 py-20 relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute top-10 left-10 opacity-10">
        <HeartIcon size={200} color="#f43f5e" />
      </div>
      <div className="absolute bottom-10 right-10 opacity-10">
        <HeartIcon size={200} color="#f43f5e" />
      </div>

      <motion.div
        variants={item}
        className="mb-8"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <HeartIcon size={100} color="#f43f5e" />
      </motion.div>

      <motion.h1
        variants={item}
        className="text-7xl mb-6 text-center font-romantic text-rose-600"
      >
        Happy Valentine's Day!
      </motion.h1>

      <motion.p
        variants={item}
        className="text-2xl text-center text-rose-500 font-elegant italic max-w-2xl mb-12"
      >
        Reminiscing on the Moments We Spent Together...
      </motion.p>

      <motion.div
        variants={item}
        className="flex flex-col items-center gap-3"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <p className="text-sm tracking-widest uppercase text-rose-400 font-semibold">
          Scroll Down
        </p>
        <svg
          className="w-6 h-6 text-rose-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </motion.div>
    </motion.section>
  );
}
