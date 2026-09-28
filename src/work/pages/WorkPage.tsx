import { motion } from 'motion/react';
import { useNavigate } from 'react-router';
import { CloudImage } from '~/cloudinary/components';
import { Button, ExternalButton } from '~/components';
import { Next } from '~/next/components';
import { usePage } from '~/page/hooks';
import { useSize } from '~/window/hooks';

export const WorkPage = () => {
  const page = usePage();
  const { isMd } = useSize();
  const navigate = useNavigate();

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
            <p className="max-w-3xl text-muted-foreground">
              I help brands succeed online by building and designing beautiful
              and functional websites.
            </p>
          </motion.div>
        </section>
      </div>

      <div className="divider-horizontal" />

      <section className="px-6">
        <div className="mx-auto max-w-7xl xl:flex xl:items-center xl:gap-20">
          <div className="max-w-2xl px-6 md:px-20">
            <div className="pb-1 text-xs font-semibold uppercase text-work md:text-sm">
              Sports
            </div>

            <h2 className="mb-4 text-balance text-2xl font-semibold uppercase leading-normal md:text-3xl lg:text-4xl lg:leading-tight">
              FollowAthletics
            </h2>

            <p className="text-balance text-muted-foreground md:text-lg lg:text-xl lg:leading-relaxed xl:mx-0">
              I realised that there was no simple way to track my weightlifting
              workouts without having to log everything manually.
              <br />
              <br />I therefore built and launched Base: A fitness app for
              iPhone that allows you to track your gym workouts using just your
              voice. It logs everything about your workout, and shows how you're
              progressing over time.
            </p>

            <div className="pt-10 lg:pt-16">
              <ExternalButton
                label="Visit Website"
                href="https://followathletics.com?ref=marcelthomasuk"
              />
            </div>
          </div>

          <div className="mx-auto max-w-md p-20 xl:w-1/2 xl:max-w-none">
            <CloudImage id="h6wblhunrbu2pkp18wvt" />
          </div>
        </div>
      </section>

      <div className="divider-horizontal" />

      <section className="px-6">
        <div className="mx-auto max-w-7xl xl:flex xl:items-center xl:gap-20">
          <div className="max-w-2xl px-6 md:px-20">
            <div className="pb-1 text-xs font-semibold uppercase text-work md:text-sm">
              Schools
            </div>

            <h2 className="mb-4 text-balance text-2xl font-semibold uppercase leading-normal md:text-3xl lg:text-4xl lg:leading-tight">
              EmergencyReport
            </h2>

            <p className="text-balance text-muted-foreground md:text-lg lg:text-xl lg:leading-relaxed xl:mx-0">
              EmergencyReport.org.uk helps schools manage critical incidents
              with real-time reporting, live video, audio summaries, and
              multilingual support. It ensures staff, parents, and responders
              can communicate quickly and effectively. With features like a
              virtual assistant for insights and post-incident analytics, it
              improves preparedness and response.
            </p>

            <div className="pt-10 lg:pt-16">
              <ExternalButton
                label="Visit Website"
                href="https://emergencyreport.org.uk?ref=marcelthomasuk"
              />
            </div>
          </div>

          <div className="mx-auto max-w-md xl:w-1/2 xl:max-w-none">
            <div className="overflow-hidden rounded-lg md:rounded-xl">
              <CloudImage id="vl1bh7hyzf6rq6cqcb0h" />
            </div>
          </div>
        </div>
      </section>

      <div className="divider-horizontal" />

      <section className="px-6">
        <div className="mx-auto max-w-7xl xl:flex xl:items-center xl:gap-20">
          <div className="max-w-2xl px-6 md:px-20">
            <div className="pb-1 text-xs font-semibold uppercase text-work md:text-sm">
              Shopify
            </div>

            <h2 className="mb-4 text-balance text-2xl font-semibold uppercase leading-normal md:text-3xl lg:text-4xl lg:leading-tight">
              Organic Shopify Store
            </h2>

            <p className="text-balance text-muted-foreground md:text-lg lg:text-xl lg:leading-relaxed xl:mx-0">
              Concept of a shopify store that sells organic products. The store
              is built with a modern and clean design, featuring a minimalist
              and simple interface.
            </p>

            <div className="pt-10 lg:pt-16">
              <Button
                label="View Concept"
                path="/concepts/organic"
                variation="secondary"
              />
            </div>
          </div>

          <div className="mx-auto max-w-md xl:w-1/2 xl:max-w-none">
            <div
              className="cursor-pointer overflow-hidden rounded-lg md:rounded-xl"
              onClick={() => navigate('/concepts/organic')}
            >
              <CloudImage id="r9xjkzydkrjevnpk819n" />
            </div>
          </div>
        </div>
      </section>

      <div className="divider-horizontal" />

      <section>
        <div className="px-6">
          <div className="mx-auto max-w-7xl xl:flex xl:items-center xl:gap-20">
            <div className="max-w-2xl px-6 md:px-20">
              <div className="pb-1 text-xs font-semibold uppercase text-work md:text-sm">
                Advertising
              </div>

              <h2 className="mb-4 text-balance text-2xl font-semibold uppercase leading-normal md:text-3xl lg:text-4xl lg:leading-tight">
                Amazon
              </h2>

              <p className="text-balance text-muted-foreground md:text-lg lg:text-xl lg:leading-relaxed xl:mx-0">
                At Amazon I got to design and build ad campaigns for brands such
                as Disney, Warner Bros, Sony, Samsung, and Google.
              </p>
            </div>

            <div className="mx-auto hidden p-20 xl:block xl:w-1/2" />
          </div>
        </div>

        <div className="mt-10 md:mt-20">
          <img
            className="mx-auto"
            src="https://res.cloudinary.com/djefzgdzi/image/upload/v1735743109/ewmmvyqnokgy72ywablv.png"
            alt="Amazon - Marcel Thomas"
          />
        </div>
      </section>

      <div className="divider-horizontal" />

      <section className="px-6">
        <div className="mx-auto max-w-8xl xl:flex xl:items-center xl:gap-20">
          <div className="max-w-2xl px-6 md:px-20">
            <div className="pb-1 text-xs font-semibold uppercase text-work md:text-sm">
              Development
            </div>

            <h2 className="mb-4 text-balance text-2xl font-semibold uppercase leading-normal md:text-3xl lg:text-4xl lg:leading-tight">
              Puma Energy
            </h2>

            <p className="text-balance text-muted-foreground md:text-lg lg:text-xl lg:leading-relaxed xl:mx-0">
              The brief was simple:
              <br />
              <i>"Build an amazing website!"</i>
              <br />
              <br />
              The task was challenging:
              <br />
              <i>"We need it in 3 weeks"</i>
              <br />
              <br />I was given a design which was unlike any other website I'd
              built before. However, with lots of hard work, I built the entire
              site by myself in less than 3 weeks (12 business days to be
              precise).
              <br />
              <br />
              We were able to launch the site early, and the client was very
              happy with the result.
            </p>
          </div>

          <div className="mx-auto mt-14 max-w-xl xl:mt-0 xl:max-w-none">
            {isMd && (
              <video
                className="w-full"
                src="https://player.vimeo.com/external/307056112.hd.mp4?s=b05f21892effdfaf8a206d3d562bc50a2eab61dc&profile_id=174"
                autoPlay
                muted
                loop
              />
            )}
          </div>
        </div>
      </section>

      <div className="divider-horizontal" />

      <Next />
    </motion.div>
  );
};
