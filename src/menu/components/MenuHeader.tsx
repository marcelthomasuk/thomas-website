import { motion } from 'motion/react';
import { Logo } from '~/header/components';

export const MenuHeader = () => {
  return (
    <motion.div
      className="ml-8 mt-7 space-y-1"
      initial={{ opacity: 0, x: -200 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -200 }}
    >
      <Logo />
    </motion.div>
  );
};
