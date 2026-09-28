import { motion } from 'motion/react';
import { useParams } from 'react-router';
import { analytics } from '~/analytics';
import { BackButton, ExternalButton } from '~/components';
import { Course, getCourseById } from '~/course';

export const CoursePage = () => {
  const { courseId } = useParams<{ courseId: string }>();
  const course = getCourseById(courseId || '');

  return (
    <motion.div
      id="page"
      className="space-y-16 py-32 md:space-y-20 md:py-52 lg:space-y-32"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="px-6 md:px-20">
        <section className="mx-auto max-w-7xl">
          <motion.div
            className="mb-1 text-xs font-semibold uppercase text-experience xl:mb-0 xl:text-sm"
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
            Course
          </motion.div>

          <motion.h1
            className="text-balance text-3xl font-bold uppercase leading-tight sm:text-4xl sm:leading-tight lg:text-5xl lg:leading-tight xl:text-6xl xl:leading-tight"
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
            {course.title}
          </motion.h1>

          <motion.div
            className="mx-auto mt-10 max-w-7xl text-balance text-xl leading-relaxed md:text-2xl md:leading-relaxed lg:text-3xl lg:leading-relaxed"
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
            <p
              className="max-w-3xl text-muted-foreground"
              dangerouslySetInnerHTML={{ __html: course.overview }}
            />
          </motion.div>

          <div className="grid max-w-3xl grid-cols-1 lg:mt-10 lg:grid-cols-2">
            <motion.div
              className="mt-10"
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
                  delay: 0.25,
                },
              }}
              exit={{
                translateY: -30,
              }}
            >
              <div className="space-y-2">
                <div className="text-sm font-semibold uppercase text-muted-foreground">
                  Duration
                </div>

                <div className="text-lg md:text-xl lg:text-2xl">
                  {course.duration}
                </div>
              </div>
            </motion.div>

            <motion.div
              className="mt-10"
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
                  delay: 0.35,
                },
              }}
              exit={{
                translateY: -30,
              }}
            >
              <div className="space-y-2">
                <div className="text-sm font-semibold uppercase text-muted-foreground">
                  Date
                </div>

                <div className="text-lg md:text-xl lg:text-2xl">
                  {course.date}
                </div>
              </div>
            </motion.div>

            <motion.div
              className="mt-10"
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
                  delay: 0.45,
                },
              }}
              exit={{
                translateY: -30,
              }}
            >
              <div className="space-y-2">
                <div className="text-sm font-semibold uppercase text-muted-foreground">
                  Location
                </div>

                <div className="text-lg md:text-xl lg:text-2xl">
                  {course.location}
                </div>
              </div>
            </motion.div>

            <motion.div
              className="mt-10"
              initial={{
                translateY: -40,
                opacity: 0,
              }}
              animate={{
                translateY: 0,
                opacity: 1,
                transition: {
                  duration: 0.85,
                  type: 'spring',
                  delay: 0.45,
                },
              }}
              exit={{
                translateY: -30,
              }}
            >
              <div className="space-y-2">
                <div className="text-sm font-semibold uppercase text-muted-foreground">
                  Registration Fee
                </div>

                <div className="text-lg md:text-xl lg:text-2xl">
                  {course.fee}
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>

      <div className="divider-horizontal" />

      <div className="space-y-10 md:space-y-16 lg:space-y-20">
        {course.texts.map((text) => (
          <div key={text.title}>
            <div className="mx-auto max-w-7xl">
              <div className="max-w-4xl px-6 md:px-20">
                <h3 className="mb-4 text-balance text-xl font-semibold uppercase leading-normal md:text-2xl lg:text-3xl lg:leading-tight">
                  {text.title}
                </h3>

                <p
                  className="text-muted-foreground md:text-lg lg:text-xl lg:leading-relaxed xl:mx-0"
                  dangerouslySetInnerHTML={{ __html: text.content }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="divider-horizontal" />

      <section>
        <BackButton
          className="mx-auto"
          label="All Courses"
          path="/courses"
          variation="secondary"
        />
      </section>
    </motion.div>
  );
};

export const Book = ({ course }: { course: Course }) => {
  const color = '#52F0BB';

  if (!course.bookUrl) {
    return (
      <div className="relative mt-12 block h-16 w-52 cursor-pointer select-none lg:mt-14">
        <ExternalButton
          label="Book Meeting"
          href="https://calendly.com/marcelthomasuk/15"
          variation="primary"
        />
      </div>
    );
  }

  return (
    <motion.a
      className="relative mt-12 block h-16 w-52 cursor-pointer select-none lg:mt-14"
      whileHover="hover"
      whileTap="tap"
      href={course.bookUrl}
      target="_blank"
      onClick={() =>
        analytics.track('book_course', { id: course.id, title: course.title })
      }
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
        Enroll Now
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
