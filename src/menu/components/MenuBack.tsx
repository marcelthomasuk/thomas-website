import { AnimatePresence, motion } from 'motion/react';
import { useMenu } from '~/menu/hooks';

export const MenuBack = () => {
  const { isVisible } = useMenu();

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed bottom-0 left-0 right-0 top-0 z-30 bg-black"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: {
              delay: 0.5,
            },
          }}
        />
      )}
    </AnimatePresence>
  );
};
