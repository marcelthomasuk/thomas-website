import { useParams } from 'react-router';
import { CloudImage } from '~/cloudinary/components';
import { BackButton } from '~/components';

const appFeatures = [
  {
    title: 'Tickets',
    description:
      'Buy match tickets easily and access them digitally on matchdays.',
  },
  {
    title: 'Shop',
    description:
      'Browse and purchase official club merchandise straight from the app.',
  },
  {
    title: 'Latest News',
    description:
      'Get real-time updates on matches, transfers, and club announcements.',
  },
  {
    title: 'Fixtures',
    description:
      'View upcoming matches, kick-off times, and past results in one place.',
  },
  {
    title: 'Gallery',
    description:
      'Explore matchday photos and behind-the-scenes content from the club.',
  },
  {
    title: 'Videos',
    description:
      'Watch highlights, interviews, and exclusive club content anytime.',
  },
];

const storeFeatures = [
  {
    title: 'Official Merchandise',
    description:
      'Shop for club kits, scarves, and accessories straight from the app.',
  },
  {
    title: 'Secure Payments',
    description:
      'Fast and secure checkout with multiple payment options for fans.',
  },
  {
    title: 'Exclusive Offers',
    description:
      'Access special discounts and limited-edition items only available online.',
  },
  {
    title: 'Easy Navigation',
    description:
      'A simple and user-friendly shopping experience for all devices.',
  },
  {
    title: 'Order Tracking',
    description:
      'Track your purchases from checkout to delivery with real-time updates.',
  },
];

export const ConceptPage = () => {
  const { conceptId } = useParams<{ conceptId: string }>();

  if (conceptId === 'kettering') {
    return (
      <div className="fixed left-0 top-0 h-screen w-screen overflow-auto pb-40 pt-28 md:pb-40 md:pt-40">
        <div className="space-y-16 lg:space-y-20">
          <div className="mx-auto max-w-8xl space-y-10 lg:pb-20">
            <h1 className="px-6 text-center text-lg font-bold uppercase sm:text-xl md:text-2xl lg:text-4xl">
              Kettering Town FC
            </h1>

            <p className="mx-auto max-w-xl text-balance px-6 text-center text-muted-foreground md:text-lg lg:max-w-3xl lg:text-xl lg:leading-relaxed">
              This initial proposal outlines a custom mobile app and e-commerce
              store for Kettering Town FC. Fans can access tickets, news,
              fixtures, galleries, videos, and official merchandise—all in one
              place.
            </p>
          </div>

          <div className="divider-horizontal -ml-1" />

          <section>
            <div className="mx-auto max-w-8xl space-y-10">
              <h1 className="px-6 text-center text-lg font-bold uppercase sm:text-xl md:text-2xl lg:text-4xl">
                Mobile App
              </h1>
            </div>

            <div>
              <div className="mx-auto max-w-8xl [&>:not([hidden])~:not([hidden])]:mt-6">
                <div className="overflow-hidden rounded-lg max-lg:hidden lg:rounded-xl">
                  <CloudImage id="z47vkgyrdevl04b1hcsb" />
                </div>

                <div className="overflow-hidden rounded-lg lg:hidden lg:rounded-xl">
                  <CloudImage id="trycgfph9fzmltdrl9wu" />
                </div>

                <div className="overflow-hidden rounded-lg lg:hidden lg:rounded-xl">
                  <CloudImage id="uvtrza6ypnqgyrld6aiv" />
                </div>

                <div className="overflow-hidden rounded-lg lg:hidden lg:rounded-xl">
                  <CloudImage id="dokmvo15azaijh9yymfq" />
                </div>
              </div>
            </div>

            <div className="mx-auto max-w-5xl px-6">
              <div className="py-10 text-2xl font-bold md:text-3xl lg:py-16 lg:text-4xl">
                App Features
              </div>

              <div className="divider-horizontal" />

              {appFeatures.map((feature) => (
                <div className="pt-4" key={feature.title}>
                  <div className="flex flex-col gap-4 pt-4 md:pt-6 lg:flex-row lg:items-center lg:space-y-0">
                    <div className="text-lg md:text-xl">{feature.title}</div>

                    <div className="max-w-lg text-muted-foreground md:text-lg lg:ml-auto lg:text-xl">
                      {feature.description}
                    </div>
                  </div>

                  <div className="-ml-5 pt-8">
                    <div className="divider-horizontal" />
                  </div>
                </div>
              ))}

              <div className="flex flex-col gap-2 pt-10 md:flex-row md:items-center md:pt-14 lg:pt-20">
                <div className="text-lg font-semibold md:text-xl">Total</div>
                <div className="md:ml-auto md:space-y-1 md:text-right">
                  <div className="flex items-center gap-6">
                    <div className="text-muted-foreground">From</div>

                    <div className="text-xl font-bold md:text-2xl lg:text-3xl xl:text-4xl">
                      £15,000
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <div className="divider-horizontal -ml-1" />

          <section>
            <div className="mx-auto max-w-8xl space-y-10">
              <h1 className="px-6 text-center text-lg font-bold uppercase sm:text-xl md:text-2xl lg:text-4xl">
                Online Store
              </h1>
            </div>

            <div>
              <div className="mx-auto max-w-8xl space-y-6">
                <div className="overflow-hidden rounded-lg lg:rounded-xl">
                  <CloudImage id="tfmcdoz54wyqstsfnl2x" />
                </div>
              </div>
            </div>

            <div className="mx-auto max-w-5xl px-6">
              <div className="py-10 text-2xl font-bold md:text-3xl lg:py-16 lg:text-4xl">
                Store Features
              </div>

              <div className="divider-horizontal" />

              {storeFeatures.map((feature) => (
                <div className="pt-4" key={feature.title}>
                  <div className="flex flex-col gap-4 pt-4 md:pt-6 lg:flex-row lg:items-center lg:space-y-0">
                    <div className="text-lg md:text-xl">{feature.title}</div>

                    <div className="max-w-lg text-muted-foreground md:text-lg lg:ml-auto lg:text-xl">
                      {feature.description}
                    </div>
                  </div>

                  <div className="-ml-5 pt-8">
                    <div className="divider-horizontal" />
                  </div>
                </div>
              ))}

              <div className="flex flex-col gap-2 pt-10 md:flex-row md:items-center md:pt-14 lg:pt-20">
                <div className="text-lg font-semibold md:text-xl">Total</div>
                <div className="md:ml-auto md:space-y-1 md:text-right">
                  <div className="flex items-center gap-6">
                    <div className="text-muted-foreground">From</div>

                    <div className="text-xl font-bold md:text-2xl lg:text-3xl xl:text-4xl">
                      £17,500
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <div className="divider-horizontal -ml-1" />

          <section>
            <div className="mx-auto max-w-7xl md:mt-20 lg:mt-40">
              <div className="max-w-4xl px-6 md:px-20">
                <h2 className="mb-4 text-balance text-2xl font-semibold uppercase leading-normal md:text-3xl lg:text-4xl lg:leading-tight">
                  Technical Approach
                </h2>

                <p className="text-muted-foreground md:text-lg lg:text-xl lg:leading-relaxed xl:mx-0">
                  The app will be developed for both iOS and Android, ensuring
                  accessibility for all fans. It will integrate seamlessly with
                  Kettering Town FC's existing ticketing system and online
                  store, allowing for smooth transactions and real-time updates.
                  Secure authentication will protect user data, and multiple
                  payment options will be supported for ticket and merchandise
                  purchases. The app will be built with a focus on speed,
                  reliability, and scalability, ensuring a seamless experience
                  on matchdays and beyond.
                </p>
              </div>
            </div>
          </section>

          <div className="divider-horizontal -ml-1" />

          <section>
            <div className="mx-auto max-w-7xl md:mt-20 lg:mt-40">
              <div className="max-w-4xl px-6 md:px-20">
                <h2 className="mb-4 text-balance text-2xl font-semibold uppercase leading-normal md:text-3xl lg:text-4xl lg:leading-tight">
                  Design & User Experience
                </h2>

                <p className="text-muted-foreground md:text-lg lg:text-xl lg:leading-relaxed xl:mx-0">
                  The app will feature a clean, modern design with a
                  mobile-first approach, ensuring smooth navigation and ease of
                  use. Fans will be able to access key features—tickets, shop,
                  news, and media—with just a few taps. A consistent
                  club-branded look will create a strong visual identity, while
                  fast-loading screens and intuitive layouts will enhance the
                  overall experience. The focus will be on simplicity,
                  accessibility, and ensuring fans can quickly find what they
                  need.
                </p>
              </div>
            </div>
          </section>

          <div className="divider-horizontal -ml-1" />

          <section>
            <div className="mx-auto max-w-7xl md:mt-20 lg:mt-40">
              <div className="max-w-4xl px-6 md:px-20">
                <h2 className="mb-4 text-balance text-2xl font-semibold uppercase leading-normal md:text-3xl lg:text-4xl lg:leading-tight">
                  Benefits for Kettering Town FC
                </h2>

                <p className="text-muted-foreground md:text-lg lg:text-xl lg:leading-relaxed xl:mx-0">
                  A dedicated mobile app and online store will strengthen the
                  club's connection with fans while creating new revenue
                  opportunities. Supporters will have easy access to tickets,
                  fixtures, news, and exclusive content, keeping them engaged
                  throughout the season. The integrated e-commerce store will
                  drive merchandise sales, while digital ticketing will simplify
                  matchday entry. By providing a central hub for all things
                  Kettering Town FC, the app will enhance the fan experience and
                  help grow the club's reach.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }

  if (conceptId === 'organic') {
    return (
      <div className="fixed left-0 top-0 h-screen w-screen overflow-auto px-8 pb-24 pt-28 md:pb-40 md:pt-40">
        <div className="mx-auto max-w-8xl">
          <div className="overflow-hidden rounded-lg lg:rounded-xl">
            <CloudImage id="og7ehwsir0w1djvpm9wd" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed left-0 top-0 flex h-screen w-screen items-center justify-center">
      <div className="space-y-20">
        <h1 className="text-center text-xl font-semibold md:text-2xl lg:text-3xl">
          Not Found
        </h1>

        <BackButton label="View Work" path="/work" variation="secondary" />
      </div>
    </div>
  );
};
