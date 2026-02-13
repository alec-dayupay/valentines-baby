import { motion } from 'framer-motion';
import { Memory } from '../constants';

interface MemorySectionProps {
  memory: Memory;
  index: number;
}

export default function MemorySection({ memory, index }: MemorySectionProps) {
  index;
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const imageVariant = {
    hidden: { opacity: 0, scale: 0.8, rotate: -5 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: (Math.random() - 0.5) * 6,
      transition: { duration: 0.6 },
    },
  };

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
      variants={container}
      className="py-20 px-4"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          variants={imageVariant}
          className="text-center mb-12"
        >
          {memory.date && (
            <p className="text-rose-400 font-bold uppercase tracking-widest text-sm mb-2">
              {memory.date}
            </p>
          )}
          <h2 className="text-5xl mb-4 font-romantic text-rose-600">
            {memory.title}
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-rose-200 via-rose-400 to-rose-200 mx-auto" />
        </motion.div>

        {/* Images Grid */}
        <motion.div
          variants={container}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8"
        >
          {memory.images.map((image, i) => (
            <motion.div
              key={i}
              variants={imageVariant}
              className={`relative group ${
                image.orientation === 'landscape'
                  ? 'md:col-span-2 lg:col-span-2'
                  : ''
              }`}
            >
              <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:shadow-2xl transition-shadow">
                <img
                  src={image.url}
                  alt={`${memory.title} ${i + 1}`}
                  className={`w-full object-cover ${
                    image.orientation === 'landscape'
                      ? 'aspect-video'
                      : 'aspect-[3/4]'
                  }`}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Caption */}
        {memory.caption && (
          <motion.p
            variants={imageVariant}
            className="text-center text-xl text-rose-600 italic font-elegant max-w-2xl mx-auto leading-relaxed"
          >
            "{memory.caption}"
          </motion.p>
        )}
      </div>
    </motion.section>
  );
}
