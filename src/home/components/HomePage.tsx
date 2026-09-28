import { motion } from 'motion/react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router';
import { CloudImage } from '~/cloudinary/components';
import { Headline } from '~/home/components/Headline';
import { getFirstPage, pages } from '~/page';
import { useSize } from '~/window/hooks';

const images = ['mfzaric14on08ns8p7bm'];

export const HomePage = () => {
  const { isXl } = useSize();
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    document.title = 'Marcel Thomas';
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((currentImage) =>
        currentImage === images.length - 1 ? 0 : currentImage + 1,
      );
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      id="page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <>
        <div className="px-6 pt-32 lg:pt-40 xl:flex xl:items-center">
          <Headline />

          <Link
            className="mx-auto block max-w-sm xl:max-w-xl"
            to={getFirstPage().path}
          >
            <motion.div
              className="p-14"
              whileHover="hover"
              whileTap="tap"
              initial={{
                scale: 0.5,
              }}
              animate={{
                scale: 1,
                transition: {
                  duration: 0.75,
                  type: 'spring',
                },
              }}
              exit={{
                opacity: 0,
                scale: 0.8,
              }}
            >
              <div className="relative">
                <img
                  className="w-full"
                  src="https://res.cloudinary.com/djefzgdzi/image/upload/v1735743484/hkepnv6q573erfmvfs45.png"
                  alt="Empty"
                />

                {images.map((image, imageIndex) => {
                  const isCurrent = currentImage === imageIndex;

                  return (
                    <motion.div
                      className="absolute left-0 top-0 w-full"
                      key={image}
                      initial={{
                        opacity: 0,
                      }}
                      animate={{
                        opacity: isCurrent ? 1 : 0,
                        transition: {
                          duration: 1,
                        },
                      }}
                      variants={{
                        hover: {
                          translateX: -2,
                          translateY: 2,
                        },
                        tap: {
                          scale: 0.95,
                          translateY: -2,
                        },
                      }}
                    >
                      <CloudImage id={image} />
                    </motion.div>
                  );
                })}

                <motion.div
                  className="absolute left-6 top-6 h-full w-full border-4 border-white"
                  variants={{
                    hover: {
                      translateX: 2,
                      translateY: 2,
                    },
                    tap: {
                      scale: 0.95,
                      translateY: 4,
                    },
                  }}
                />
              </div>
            </motion.div>
          </Link>
        </div>

        <motion.div
          className="relative bottom-0 left-0 right-0 z-20 flex flex-col bg-black/80 backdrop-blur-md xl:fixed xl:h-48 xl:flex-row"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="divider-horizontal absolute left-0 top-0" />

          {pages.map((page, pageIndex) => {
            return (
              <Link
                className="relative flex h-40 w-full items-center justify-center xl:h-48 xl:w-1/2"
                to={page.path}
                key={page.path}
              >
                <motion.div
                  animate="idle"
                  whileHover="hover"
                  whileTap="tap"
                  exit="exit"
                >
                  {pageIndex !== 0 && <Line />}

                  <motion.div
                    className="absolute left-0 top-0 h-40 w-full bg-gray-800/40 xl:h-48"
                    initial={{ opacity: 0 }}
                    variants={{
                      hover: { opacity: 1 },
                    }}
                  />

                  <motion.div
                    className="absolute left-0 top-0 flex h-40 w-full items-center justify-center xl:h-48"
                    initial={{
                      ...(isXl && {
                        translateY: isXl
                          ? '100%'
                          : pageIndex === 1
                            ? '-100%'
                            : '100%',
                      }),
                      ...(!isXl && {
                        translateX: isXl
                          ? '100%'
                          : pageIndex === 1
                            ? '-100%'
                            : '100%',
                      }),
                    }}
                    animate={{
                      ...(isXl && { translateY: 0 }),
                      ...(!isXl && { translateX: 0 }),
                      transition: {
                        delay: pageIndex * 0.1,
                        duration: 1,
                        type: 'spring',
                      },
                    }}
                    variants={{
                      hover: {
                        scale: 1.05,
                      },
                      tap: {
                        scale: 0.95,
                      },
                      exit: {
                        opacity: 0,
                        translateY: 100,
                        transition: {
                          duration: 0.5,
                          delay: pageIndex * 0.05,
                        },
                      },
                    }}
                  >
                    <div className="flex gap-2 md:gap-3 2xl:gap-4">
                      <motion.div
                        className="text-xl font-bold text-primary md:text-2xl 2xl:text-4xl"
                        initial={{
                          color: '#52F0BB',
                        }}
                        variants={{
                          hover: {
                            translateX: -1,
                            color: page.color,
                          },
                        }}
                      >
                        0{pageIndex + 1}
                      </motion.div>

                      <div className="space-y-1 md:space-y-2 2xl:space-y-4">
                        <div className="text-xl font-bold uppercase md:text-2xl 2xl:text-4xl">
                          {page.title}
                        </div>

                        <motion.div
                          className="text-muted-foreground md:text-lg md:font-semibold"
                          variants={{
                            hover: { translateX: 4 },
                          }}
                        >
                          {page.tagline}
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              </Link>
            );
          })}

          <div className="divider-horizontal absolute bottom-0 left-0 xl:hidden" />
        </motion.div>
      </>
    </motion.div>
  );
};

const Line = () => {
  return (
    <div className="dashed-divider absolute left-0 top-0 h-[1px] w-full xl:h-48 xl:w-[1px]" />
  );
};
