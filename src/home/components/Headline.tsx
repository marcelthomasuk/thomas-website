import { motion } from 'motion/react';
import { useEffect, useState } from 'react';
import { useSize } from '~/window/hooks';

const titles = [
  'Developer',
  'Designer',
  'Consultant',
  'Mobile Dev',
  'Tech Lead',
];

export const Headline = () => {
  const { key } = useSize();
  const [currentTitle, setCurrentTitle] = useState(0);

  const lefts: Record<string, number> = {
    xs: 42,
    sm: 42,
    md: 42,
    lg: 45,
    xl: 60,
    '2xl': 75,
  };
  const left = lefts[key];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitle((currentTitle) =>
        currentTitle === titles.length - 1 ? 0 : currentTitle + 1,
      );
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative mx-auto h-24 w-full max-w-sm md:max-w-4xl lg:h-32 xl:h-44">
      <motion.div
        className="absolute left-0 top-0 mb-1 text-xs font-semibold uppercase text-primary xl:text-sm"
        initial={{
          translateY: -80,
        }}
        animate={{
          translateY: 0,
          transition: {
            duration: 0.75,
            type: 'spring',
          },
        }}
        exit={{
          translateY: -50,
        }}
      >
        Welcome
      </motion.div>

      <motion.div
        className="absolute left-0 top-4 z-30 mt-1 text-3xl font-bold uppercase leading-tight sm:text-4xl lg:top-6 lg:text-5xl xl:text-6xl xl:leading-tight 2xl:text-7xl 2xl:leading-tight"
        initial={{
          translateY: -40,
        }}
        animate={{
          translateY: 0,
          transition: {
            duration: 0.75,
            type: 'spring',
          },
        }}
        exit={{
          translateY: -40,
        }}
      >
        I'm a
      </motion.div>

      <div className="absolute bottom-0 left-10 right-0 top-4 mt-1 overflow-hidden text-3xl font-bold uppercase leading-tight sm:left-14 sm:text-4xl lg:left-20 lg:top-6 lg:text-5xl xl:left-24 xl:text-6xl xl:leading-tight 2xl:left-28 2xl:text-7xl 2xl:leading-tight">
        {titles.map((title, titleIndex) => {
          const isCurrent = titleIndex === currentTitle;

          return (
            <motion.div
              className="absolute top-0"
              key={title}
              initial={{
                left: '-100%',
              }}
              animate={{
                left: isCurrent ? left : '-100%',
                transition: {
                  duration: 1.5,
                  type: 'spring',
                  delay: isCurrent ? 0.3 : 0,
                },
              }}
              exit={{
                left: '-100%',
                translateY: -40,
              }}
            >
              {title}
            </motion.div>
          );
        })}

        <div className="absolute bottom-0 left-0 top-0 w-12 bg-linear-to-r from-black sm:w-14 lg:w-16 xl:w-24 2xl:w-28" />
      </div>

      <motion.div
        className="absolute left-0 top-14 mt-1 text-3xl font-bold uppercase leading-tight sm:text-4xl lg:top-20 lg:text-5xl xl:top-24 xl:text-6xl xl:leading-tight 2xl:top-28 2xl:text-7xl 2xl:leading-tight"
        initial={{
          translateY: -40,
        }}
        animate={{
          translateY: 0,
          transition: {
            duration: 0.75,
            type: 'spring',
            delay: 0.05,
          },
        }}
        exit={{
          translateY: -40,
        }}
      >
        based in London
      </motion.div>
    </div>
  );
};
