import { motion } from 'motion/react';
import { cn } from '~/style';

const colors = {
  primary: '#52F0BB',
  secondary: '#fff',
};

export const ExternalButton = ({
  label,
  href,
  variation,
  className,
}: {
  label: string;
  href: string;
  variation?: 'primary' | 'secondary';
  className?: string;
}) => {
  const color = colors[variation || 'secondary'];

  return (
    <motion.a
      className={cn(
        'relative inline-block h-16 w-52 cursor-pointer select-none',
        className,
      )}
      whileHover="hover"
      whileTap="tap"
      href={href}
      target="_blank"
    >
      <motion.div
        className="absolute bottom-0 left-0 right-0 top-0 rounded-full"
        style={{
          backgroundColor: color,
        }}
        variants={{
          hover: {
            scale: 1.05,
          },
          tap: {
            scale: 0.9,
          },
        }}
      />

      <motion.div
        className="absolute bottom-0 left-0 right-0 top-0 flex items-center pl-8 text-center text-sm font-medium uppercase text-black"
        variants={{
          hover: {
            translateX: -2,
          },
          tap: {
            translateX: 2,
          },
        }}
      >
        {label}
      </motion.div>

      <motion.div
        className="absolute right-2 top-2 flex h-12 w-12 items-center justify-center rounded-full bg-black"
        variants={{
          hover: {
            translateX: 4,
          },
          tap: {
            translateX: -4,
          },
        }}
      >
        <svg
          className="size-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke={color}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
          />
        </svg>
      </motion.div>
    </motion.a>
  );
};
