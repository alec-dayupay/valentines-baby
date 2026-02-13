import { motion } from 'framer-motion';
import { HeartIcon, FINAL_LETTER } from '../constants';

export default function FinalMessage() {
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
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      variants={container}
      className="min-h-screen flex flex-col items-center justify-center px-4 py-20 bg-gradient-to-b from-rose-50 to-rose-100 relative overflow-hidden"
    >
      {/* Background Decorative Hearts */}
      <motion.div className="absolute top-10 left-10 opacity-5">
        <HeartIcon size={300} color="#fda4af" />
      </motion.div>
      <motion.div className="absolute bottom-10 right-10 opacity-5">
        <HeartIcon size={300} color="#fda4af" />
      </motion.div>

      <motion.h2
        variants={item}
        className="text-6xl mb-8 font-romantic text-rose-600 text-center"
      >
        {FINAL_LETTER.greeting}
      </motion.h2>

      <motion.div
        variants={item}
        animate={{ scale: [1, 1.2, 1], rotate: [0, 5, -5, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="mb-12"
      >
        <HeartIcon size={60} color="#f43f5e" />
      </motion.div>

      <motion.div
        variants={item}
        className="bg-white rounded-3xl shadow-2xl p-12 max-w-2xl border-2 border-rose-100 backdrop-blur-sm"
      >
        <p className="text-2xl font-elegant text-rose-600 text-center italic leading-relaxed mb-8">
          "{FINAL_LETTER.body}"
        </p>

        <p className="text-rose-400 font-semibold tracking-widest text-center uppercase text-lg">
          {FINAL_LETTER.signature}
        </p>
      </motion.div>

      <motion.p
        variants={item}
        className="text-rose-300 mt-12 text-sm font-bold tracking-widest uppercase text-center"
      >
        {FINAL_LETTER.footer}
      </motion.p>

      {/* Confetti-like hearts falling at the end */}
      <motion.div className="absolute inset-0 pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ y: '-100vh', x: `${Math.random() * 100}%` }}
            animate={{ y: '100vh' }}
            transition={{
              duration: 8 + Math.random() * 4,
              delay: i * 0.2,
              repeat: Infinity,
            }}
            className="absolute"
          >
            <HeartIcon size={30 + Math.random() * 20} color="#f9a8d4" />
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}
