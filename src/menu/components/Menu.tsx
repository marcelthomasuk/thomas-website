import { AnimatePresence, motion } from 'motion/react';
import { useEffect } from 'react';
import { Link, useLocation } from 'react-router';
import { MenuBack, MenuLink } from '~/menu/components';
import { useMenu } from '~/menu/hooks';
import { pages } from '~/page';
import { useSize } from '~/window/hooks';

export const Menu = () => {
  const { isVisible, toggle, hide } = useMenu();
  const { isMd, isXl } = useSize();
  const location = useLocation();

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'm') {
        toggle();
      }

      if (event.key === 'Escape') {
        toggle();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [toggle, hide]);

  useEffect(() => {
    hide();
  }, [location, hide]);

  return (
    <>
      <AnimatePresence>
        {isVisible && (
          <>
            <MenuBack />

            <motion.div
              className="fixed bottom-0 left-0 right-0 top-20 z-40 flex flex-col sm:top-0 xl:flex-row"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {pages.map((page, pageIndex) => {
                return (
                  <Link
                    className="relative flex h-1/2 w-full items-center justify-center xl:h-full xl:w-1/2"
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
                        className="absolute left-0 top-0 h-full w-full bg-gray-800/40"
                        initial={{ opacity: 0 }}
                        variants={{
                          hover: { opacity: 1 },
                        }}
                      />

                      <motion.div
                        className="absolute left-0 top-0 flex h-full w-full items-center justify-center"
                        initial={{
                          ...(isXl && {
                            translateY: pageIndex === 1 ? '-100%' : '100%',
                          }),
                          ...(!isXl && {
                            translateX: pageIndex === 1 ? '-100%' : '100%',
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
                            ...(isXl && {
                              translateY: pageIndex === 1 ? '-100%' : '100%',
                            }),
                            ...(!isXl && {
                              translateX: pageIndex === 1 ? '-100%' : '100%',
                            }),
                            transition: {
                              duration: 1,
                              type: 'spring',
                            },
                          },
                        }}
                      >
                        <motion.div
                          className="flex gap-2 md:gap-3 2xl:gap-4"
                          variants={{
                            hover: {
                              rotate: pageIndex === 1 ? -1 : 1,
                            },
                          }}
                        >
                          <motion.div
                            className="text-xl font-bold md:text-3xl 2xl:text-4xl"
                            initial={{
                              color: isMd ? '#53616E' : page.color,
                            }}
                            variants={{
                              hover: {
                                translateX: -5,
                                color: page.color,
                              },
                            }}
                          >
                            0{pageIndex + 1}
                          </motion.div>

                          <div className="space-y-1 md:space-y-3 2xl:space-y-4">
                            <motion.div
                              className="text-xl font-bold uppercase md:text-3xl 2xl:text-4xl"
                              variants={{
                                hover: { translateY: -5 },
                              }}
                            >
                              {page.title}
                            </motion.div>

                            <motion.div
                              className="text-muted-foreground md:text-lg md:font-semibold"
                              variants={{
                                hover: { translateX: 8 },
                              }}
                            >
                              {page.tagline}
                            </motion.div>
                          </div>
                        </motion.div>
                      </motion.div>
                    </motion.div>
                  </Link>
                );
              })}
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <MenuLink />
    </>
  );
};

const Line = () => {
  return (
    <div className="dashed-divider absolute left-0 top-0 h-[1px] w-full xl:h-full xl:w-[1px]" />
  );
};
