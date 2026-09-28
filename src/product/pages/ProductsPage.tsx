import { motion } from 'motion/react';
import { ExternalButton } from '~/components';
import { Next } from '~/next/components';
import { usePage } from '~/page/hooks';

export const ProductsPage = () => {
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
            className="mb-1 text-xs font-semibold uppercase text-work xl:mb-0 xl:text-sm"
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
            <p className="max-w-4xl text-muted-foreground">
              Here are some products I'm building that you can use to create
              rich, interactive experiences.
            </p>
          </motion.div>
        </section>
      </div>

      <div className="divider-horizontal" />

      <section>
        <div className="mx-auto max-w-7xl md:mt-20 lg:mt-40">
          <div className="max-w-4xl space-y-4 px-6 md:px-20">
            <h2 className="mb-4 text-balance text-2xl font-semibold uppercase leading-normal md:text-3xl lg:text-4xl lg:leading-tight">
              StarterKit
            </h2>

            <p className="text-muted-foreground md:text-lg lg:text-xl lg:leading-relaxed xl:mx-0">
              StarterKit lets you choose a starter kit based on Astro or
              Next.js, with built-in auth, Stripe payments, and support for
              multiple databases and frameworks, enabling you to launch quickly
              with your favourite tech.
            </p>

            <div className="pt-10">
              <ExternalButton
                label="Visit Website"
                href="https://understated.dev?ref=marcelthomasuk"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="divider-horizontal" />

      <section>
        <div className="mx-auto max-w-7xl md:mt-20 lg:mt-40">
          <div className="max-w-4xl space-y-4 px-6 md:px-20">
            <h2 className="mb-4 text-balance text-2xl font-semibold uppercase leading-normal md:text-3xl lg:text-4xl lg:leading-tight">
              AIKit
            </h2>

            <p className="text-muted-foreground md:text-lg lg:text-xl lg:leading-relaxed xl:mx-0">
              AIKit is a set of tools to help you build AI-powered apps. It
              includes UI components for modern frameworks such as React, Vue,
              and Svelte, meaning you can build rich, interactive AI experiences
              with ease.
            </p>

            <div className="pt-10 text-muted-foreground">Coming Soon</div>
          </div>
        </div>
      </section>

      <div className="divider-horizontal" />

      <section>
        <div className="mx-auto max-w-7xl md:mt-20 lg:mt-40">
          <div className="max-w-4xl space-y-4 px-6 md:px-20">
            <h2 className="mb-4 text-balance text-2xl font-semibold uppercase leading-normal md:text-3xl lg:text-4xl lg:leading-tight">
              IoTKit
            </h2>

            <p className="text-muted-foreground md:text-lg lg:text-xl lg:leading-relaxed xl:mx-0">
              IoTKit lets you create innovative IoT applications with ease. It
              provides ready-to-use modules, libraries, and integrations for
              popular IoT platforms, enabling seamless device connectivity and
              real-time data processing. Whether you're building for smart
              homes, industrial automation, or wearables, IoTKit simplifies the
              journey from concept to deployment.
            </p>

            <div className="pt-10 text-muted-foreground">Coming Soon</div>
          </div>
        </div>
      </section>

      <div className="divider-horizontal" />

      <Next />
    </motion.div>
  );
};
