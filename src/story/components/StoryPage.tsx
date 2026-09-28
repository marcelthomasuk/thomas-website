import { motion } from 'motion/react';
import { useEffect } from 'react';
import { Footer } from '~/footer/components';
import { Next } from '~/next/components';
import { stories } from '~/story';

export const StoryPage = () => {
  useEffect(() => {
    document.title = 'My Story | Marcel Thomas';
  }, []);

  return (
    <motion.div
      id="page"
      className="space-y-16 pt-32 md:space-y-20 md:pt-52 lg:space-y-32"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="px-6 md:px-20">
        <section className="mx-auto max-w-7xl">
          <motion.div
            className="mb-1 text-xs font-semibold uppercase text-story xl:mb-0 xl:text-sm"
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
            Why I do it
          </motion.div>

          <motion.h1
            className="text-3xl font-bold uppercase leading-tight sm:text-4xl lg:text-5xl xl:text-6xl xl:leading-tight 2xl:text-8xl 2xl:leading-tight"
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
            My Story
          </motion.h1>

          <motion.div
            className="mx-auto mt-10 max-w-7xl text-balance text-xl leading-relaxed md:text-2xl md:leading-relaxed"
            initial={{
              translateY: -40,
              opacity: 0,
            }}
            animate={{
              translateY: 0,
              opacity: 1,
              transition: {
                duration: 0.75,
                type: 'spring',
                delay: 0.15,
              },
            }}
            exit={{
              translateY: -30,
            }}
          >
            <p className="max-w-3xl text-muted-foreground">
              I started my journey in tech from a young age. Every moment has
              been a key step along the way.
            </p>
          </motion.div>
        </section>
      </div>

      <div className="lg:h-6" />

      <div className="relative mx-auto max-w-6xl px-10 md:px-20">
        <div className="space-y-14 md:space-y-20 lg:space-y-28 xl:space-y-32">
          {stories.map((story, storyIndex) => (
            <div className="relative w-full" key={story.year}>
              <div className="max-w-lg lg:max-w-2xl">
                <motion.div
                  className="absolute -left-[27px] top-2 h-[1px] w-2 bg-[#4e4733] opacity-80 md:-left-[40px] lg:hidden"
                  initial={{
                    scale: 0,
                    opacity: 0,
                  }}
                  animate={{
                    scale: 1,
                    opacity: 1,
                    transition: {
                      duration: 1,
                      type: 'spring',
                      delay: storyIndex * 0.3 + 0.3,
                    },
                  }}
                />

                <div className="mb-1 text-sm font-semibold text-story lg:absolute lg:left-0 lg:top-0 lg:mb-0 lg:-translate-x-1/2 lg:bg-black lg:px-2 lg:py-1 lg:text-lg">
                  <motion.div
                    initial={{
                      scale: 0,
                      opacity: 0,
                    }}
                    animate={{
                      scale: 1,
                      opacity: 1,
                      transition: {
                        duration: 1,
                        type: 'spring',
                        delay: storyIndex * 0.3 + 0.3,
                      },
                    }}
                  >
                    {story.year}
                  </motion.div>
                </div>

                <motion.div
                  className="space-y-2 md:space-y-3 lg:pl-20 xl:space-y-6 xl:pl-40"
                  initial={{
                    translateX: -40,
                    opacity: 0,
                  }}
                  animate={{
                    translateX: 0,
                    opacity: 1,
                    transition: {
                      duration: 1,
                      type: 'spring',
                      delay: storyIndex * 0.3 + 0.3,
                    },
                  }}
                >
                  <h2
                    className="text-lg font-bold uppercase md:text-2xl lg:text-3xl xl:text-4xl xl:leading-tight"
                    dangerouslySetInnerHTML={{ __html: story.title }}
                  />

                  {story.text && (
                    <p
                      className="text-muted-foreground lg:text-lg lg:leading-relaxed"
                      dangerouslySetInnerHTML={{ __html: story.text }}
                    />
                  )}
                </motion.div>
              </div>

              {story.image && (
                <div
                  className="relative mx-auto mt-8 w-full max-w-4xl text-center lg:mt-20"
                  style={story.style}
                >
                  <img
                    className="w-full"
                    src="https://res.cloudinary.com/djefzgdzi/image/upload/v1735743448/skc4o8ei3gukwa97qt24.png"
                    alt="Empty"
                  />

                  <img
                    className="absolute left-0 top-0 -z-10 w-full"
                    src={story.image}
                  />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="absolute left-3 top-0 h-full md:left-10 lg:left-20 lg:block">
          <div className="time-line absolute -z-20 -mt-60 h-[calc(100%+30rem)] w-[1px] bg-story opacity-20" />

          <div className="absolute -top-60 left-0 -z-10 h-60 w-12 bg-linear-to-b from-black" />

          <div className="absolute -bottom-60 left-0 -z-10 h-60 w-12 bg-linear-to-t from-black" />
        </div>
      </div>

      <div className="h-10 md:h-32 lg:block lg:h-60" />

      <div className="divider-horizontal" />

      <Next />

      <div className="divider-horizontal" />

      <Footer />
    </motion.div>
  );
};
