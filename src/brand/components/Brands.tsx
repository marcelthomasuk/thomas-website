import { motion } from 'motion/react';
import { brands } from './brand-logos';

export const Brands = () => {
  return (
    <div>
      <div className="grid grid-cols-4 border-b border-dashed border-gray-800 md:grid-cols-4 lg:grid-cols-6">
        {brands.map((Brand, brandIndex) => {
          return (
            <motion.div
              className="h-24 border-t border-dashed border-gray-800 text-gray-600 sm:h-32 xl:h-44"
              key={brandIndex}
              initial={{
                opacity: 0,
                scale: 0,
                translateY: -25,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                translateY: 0,
                transition: {
                  delay: brandIndex * 0.075,
                  duration: 0.5,
                  type: 'spring',
                },
              }}
              exit={{
                opacity: 0,
                scale: 0,
                translateY: -25,
              }}
            >
              <div className="flex h-full items-center justify-center">
                <div className="aspect-square w-20 p-2 xl:w-24">
                  <Brand />
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
