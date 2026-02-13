import { useState, useEffect } from 'react';
import Hero from './components/Hero';
import MemorySection from './components/MemorySection';
import VisualDivider from './components/VisualDivider';
import FinalMessage from './components/FinalMessage';
import FloatingHearts from './components/FloatingHearts';
import { INITIAL_MEMORIES } from './constants';

export default function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  if (!isLoaded) {
    return (
      <div className="h-screen flex items-center justify-center bg-gradient-to-b from-rose-50 to-rose-100">
        <div className="animate-pulse">
          <svg
            className="w-16 h-16 text-rose-500 animate-bounce"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-rose-50 via-pink-50 to-rose-50 relative">
      <FloatingHearts />
      
      <main className="relative z-10">
        <Hero />

        {INITIAL_MEMORIES.map((memory, index) => (
          <div key={memory.id}>
            <MemorySection memory={memory} index={index} />
            {index < INITIAL_MEMORIES.length - 1 && <VisualDivider />}
          </div>
        ))}

        <FinalMessage />
      </main>
    </div>
  );
}
