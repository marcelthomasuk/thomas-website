import { motion } from 'motion/react';
import { Fragment } from 'react';
import { Button } from '~/components';
import { Next } from '~/next/components';
import { usePage } from '~/page/hooks';
import { courses } from '../course';

export const CoursesPage = () => {
  const page = usePage();

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
            {page.tagline}
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
            {page.title}
          </motion.h1>
        </section>
      </div>

      {courses.map((course) => (
        <Fragment key={course.id}>
          <div className="divider-horizontal" />

          <section>
            <div className="mx-auto max-w-7xl md:mt-20 lg:mt-40">
              <div className="max-w-4xl px-6 md:px-20">
                <div className="pb-1 text-xs font-semibold uppercase text-work md:text-sm">
                  {course.date}
                </div>

                <h2 className="mb-4 text-2xl font-semibold uppercase leading-normal md:text-3xl lg:text-4xl lg:leading-tight">
                  {course.title}
                </h2>

                <p
                  className="text-muted-foreground md:text-lg lg:text-xl lg:leading-relaxed xl:mx-0"
                  dangerouslySetInnerHTML={{ __html: course.overview }}
                />

                <Button
                  className="mt-12 lg:mt-14"
                  label="View Course"
                  path={`/courses/${course.id}`}
                  variation="secondary"
                />
              </div>
            </div>
          </section>
        </Fragment>
      ))}

      <div className="divider-horizontal" />

      <Next />
    </motion.div>
  );
};
