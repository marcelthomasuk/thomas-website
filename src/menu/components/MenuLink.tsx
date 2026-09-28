import { motion, type Variants } from 'motion/react';
import { useMenu } from '~/menu/hooks';

export const MenuLink = () => {
  const { isVisible, toggle } = useMenu();
  const line1Variants: Variants = {
    idle: {
      width: 28,
      translateX: 8,
      translateY: 12,
      transition: {
        type: 'spring',
      },
    },
    active: {
      width: 28,
      translateX: 6,
      translateY: 20,
      rotate: '-45deg',
      transition: {
        type: 'spring',
      },
    },
  };
  const line2Variants: Variants = {
    idle: {
      width: 28,
      translateX: 8,
      translateY: 22,
      transition: {
        type: 'spring',
      },
    },
    active: {
      width: 28,
      translateX: 6,
      translateY: 18,
      rotate: '45deg',
      transition: {
        type: 'spring',
      },
    },
  };

  return (
    <motion.div
      className="fixed right-0 top-3 z-40 cursor-pointer select-none p-4 outline-hidden md:right-4 md:top-8 lg:right-8 lg:top-12"
      onClick={() => {
        toggle();
      }}
      initial={{ scale: 0 }}
      animate={{
        scale: 1,
        transition: {
          duration: 1,
          type: 'spring',
        },
      }}
      whileHover={{ scale: 1.15 }}
      whileTap={{ scale: 0.9 }}
    >
      <div className="absolute bottom-1 left-0 right-0 top-0" />

      <div className="h-[40px] w-[40px]">
        <motion.div
          className="h-[2px] rounded-full bg-white"
          initial="idle"
          animate={isVisible ? 'active' : 'idle'}
          variants={line1Variants}
        />

        <motion.div
          className="h-[2px] rounded-full bg-white"
          initial="idle"
          animate={isVisible ? 'active' : 'idle'}
          variants={line2Variants}
        />
      </div>
    </motion.div>
  );
};

export default MenuLink;
