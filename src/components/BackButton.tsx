import { motion } from 'motion/react';
import { useNavigate } from 'react-router';
import { cn } from '~/style';

const colors = {
  primary: '#52F0BB',
  secondary: '#fff',
};

export const BackButton = ({
  label,
  path,
  variation,
  className,
}: {
  label: string;
  path: string;
  variation?: 'primary' | 'secondary';
  className?: string;
}) => {
  const navigate = useNavigate();
  const color = colors[variation || 'primary'];

  return (
    <motion.div
      className={cn(
        'relative mt-12 h-16 w-52 cursor-pointer select-none lg:mt-14',
        className,
      )}
      whileHover="hover"
      whileTap="tap"
      onClick={() => navigate(path)}
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
        className="absolute left-2 top-2 flex h-12 w-12 items-center justify-center rounded-full bg-black"
        variants={{
          hover: {
            translateX: -2,
          },
          tap: {
            translateX: 4,
          },
        }}
      >
        <svg
          className="size-6 rotate-180"
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

      <motion.div
        className="absolute bottom-0 left-12 top-0 flex items-center pl-8 text-center text-sm font-medium uppercase text-black"
        variants={{
          hover: {
            translateX: 2,
          },
          tap: {
            translateX: -2,
          },
        }}
      >
        {label}
      </motion.div>
    </motion.div>
  );
};
