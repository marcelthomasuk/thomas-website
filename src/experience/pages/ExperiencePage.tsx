import { motion } from 'motion/react';
import { Brands } from '~/brand/components';
import { CloudImage } from '~/cloudinary/components';
import { Next } from '~/next/components';
import { usePage } from '~/page/hooks';

export const ExperiencePage = () => {
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
            <p className="max-w-3xl text-muted-foreground">
              Over the years, I've had the pleasure of working with some of the
              world's most amazing brands.
            </p>
          </motion.div>
        </section>
      </div>

      <section>
        <Brands />
      </section>

      <section className="px-6">
        <div className="mx-auto max-w-7xl xl:flex xl:items-center xl:gap-20">
          <div className="max-w-2xl px-6 md:px-20">
            <div className="pb-1 text-xs font-semibold uppercase text-work md:text-sm">
              13 Nov 19
            </div>

            <h2 className="mb-4 text-balance text-2xl font-semibold uppercase leading-normal md:text-3xl lg:text-4xl lg:leading-tight">
              Financial Times:
              <br />
              Top 100 Most Influential Leaders In Tech
            </h2>

            <p className="text-balance text-muted-foreground md:text-lg lg:text-xl lg:leading-relaxed xl:mx-0">
              On the 13<sup>th</sup> of November 2019 I was officially named by
              Financial Times and Inclusive Boards as one of the UK's: Top 100
              Most Influential BAME Leaders In Tech. It was an honour to be
              recognised for my work in field of technology.
            </p>
          </div>

          <div className="mx-auto hidden p-20 xl:block xl:w-1/2">
            <svg
              className="text-gray-800/60"
              viewBox="0 0 224 224"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M223.675 223.663H-0.000198364V8.7738e-05H223.675V223.663Z"
                fill="currentColor"
              />
              <path
                d="M57.2189 116.725C57.2189 127.275 60.0363 128.463 72.0714 128.913L72.0716 132.775H24.2354V128.913C34.1866 128.463 37.0091 127.275 37.0091 116.725V47.8002C37.0091 37.2377 34.1866 36.0502 24.5329 35.6127V31.7377H108.913L109.514 54.0251H105.353C101.784 42.7376 97.9216 39.1751 78.1616 39.1751H62.8529C58.2591 39.1751 57.2191 40.2126 57.2191 44.3751V76.3251H64.7581C80.5093 76.3251 83.9281 73.4877 85.8569 62.9377H89.7191V98.6002H85.8569C83.7769 86.7127 77.8343 83.7501 64.7581 83.7501H57.2191L57.2189 116.725ZM204.469 31.7377H115.916L113.86 54.0377H118.939C122.18 43.1252 126.946 39.1751 137.605 39.1751H150.086V116.725C150.086 127.275 147.264 128.463 135.823 128.913V132.775H184.559V128.913C173.118 128.463 170.296 127.275 170.296 116.725V39.1751H182.771C193.43 39.1751 198.206 43.1252 201.444 54.0377H206.519L204.469 31.7377Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
      </section>

      <div className="divider-horizontal" />

      <section>
        <div className="mx-auto max-w-7xl md:mt-20 lg:mt-40">
          <div className="max-w-3xl px-6 md:px-20">
            <div className="pb-1 text-xs font-semibold uppercase text-work md:text-sm">
              12 Oct 23
            </div>

            <h2 className="mb-4 text-balance text-2xl font-semibold uppercase leading-normal md:text-3xl lg:text-4xl lg:leading-tight">
              Microsoft's Invitation
            </h2>

            <p className="text-muted-foreground md:text-lg lg:text-xl lg:leading-relaxed xl:mx-0">
              In October 2023, I received an email from the Director of Cloud
              Architecture at Microsoft Azure, with whom I had served on a
              committee.
              <br />
              <br />
              He personally invited me to speak at Black Tech Fest, as Microsoft
              was the offical AI sponsor of the event.
            </p>
          </div>
        </div>

        <div className="relative mx-auto mt-10">
          <CloudImage id="drtfxrntmbm77vk5llqz" />

          <div className="absolute -bottom-14 left-0 w-full lg:bottom-0">
            <div className="mx-auto flex max-w-7xl gap-8 px-6 md:gap-14 md:px-20">
              <div className="space-y-1 md:space-y-2">
                <div className="text-xs font-bold uppercase text-work md:text-sm lg:text-base">
                  Attendees
                </div>

                <div className="text-3xl font-bold uppercase md:text-5xl lg:text-7xl">
                  20K
                </div>
              </div>

              <div className="space-y-1 md:space-y-2">
                <div className="text-xs font-bold uppercase text-work md:text-sm lg:text-base">
                  Location
                </div>

                <div className="text-3xl font-bold uppercase md:text-5xl lg:text-7xl">
                  London
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-20 max-w-7xl px-6 md:px-20 lg:mt-10">
          <p className="mb-10 max-w-xl text-lg text-muted-foreground">
            I got to share my story about how I first got started in tech, and
            how I built a career and business over the past 20+ years.
            <br />
            <br />
            It was a great opportunity to network with the community, and meet
            amazing people who are doing great things in the tech industry.
          </p>

          <div className="my-20 grid gap-6 md:grid-cols-2 lg:my-40">
            <CloudImage id="dd9g5fmk8a0go5a8rpyq" />
            <CloudImage id="bsxk8tcb8b3ovqoyixup" />
          </div>
        </div>
      </section>

      <div className="divider-horizontal" />

      <section className="space-y-8 px-6 py-6 md:px-8 md:py-12 xl:space-y-12 xl:px-0">
        <motion.h2
          className="text-center text-lg font-semibold text-secondary sm:text-2xl sm:leading-relaxed md:text-4xl md:leading-snug lg:text-5xl lg:leading-snug xl:text-6xl xl:leading-snug"
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
            translateY: -40,
          }}
        >
          &ldquo;Good design is beautiful.
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;Great design is functional.&rdquo;
        </motion.h2>
      </section>

      <div className="divider-horizontal" />

      <section className="px-6">
        <div className="mx-auto max-w-7xl xl:flex xl:items-center xl:gap-20">
          <div className="max-w-2xl px-6 md:px-20">
            <div className="pb-1 text-xs font-semibold uppercase text-experience md:text-sm">
              Design
            </div>

            <h2 className="mb-4 text-balance text-2xl font-semibold uppercase leading-normal md:text-3xl lg:text-4xl lg:leading-tight">
              Make it look good &amp; functional
            </h2>

            <p className="text-balance text-muted-foreground md:text-lg lg:text-xl lg:leading-relaxed xl:mx-0">
              The first design tool I used was Fireworks, back when it was still
              owned by Macromedia.
              <br />
              <br />
              Nowadays, I rely on Figma for design and Framer for prototyping.
              This combination enables me to create designs that are not only
              visually appealing, but are also functional and effectively solve
              problems through hands-on prototyping.
            </p>
          </div>

          <div className="mx-auto max-w-md p-20 xl:w-1/2 xl:max-w-none">
            <FigmaFramer />
          </div>
        </div>
      </section>

      <div className="divider-horizontal" />

      <section className="px-6">
        <div className="mx-auto max-w-7xl xl:flex xl:items-center xl:gap-20">
          <div className="max-w-2xl px-6 md:px-20">
            <div className="pb-1 text-xs font-semibold uppercase text-experience md:text-sm">
              Development
            </div>

            <h2 className="mb-4 text-balance text-2xl font-semibold uppercase leading-normal md:text-3xl lg:text-4xl lg:leading-tight">
              Make it work
            </h2>

            <p className="text-muted-foreground md:text-lg lg:text-xl lg:leading-relaxed xl:mx-0">
              The first time I wrote code was when I was 16. I learned how to
              build websites with PHP, MySQL, JavaScript, HTML, and CSS, as well
              as how the web works.
              <br />
              <br />
              What I've learned over the years is that having a deep
              understanding of the web, and its technologies, has allowed me to
              build systems that are functional, secure, and scalable, all
              whilst being used by users from all over the world.
            </p>
          </div>
        </div>
      </section>

      <div className="divider-horizontal" />

      <Next />
    </motion.div>
  );
};

const FigmaFramer = () => {
  return (
    <svg
      className="w-full"
      viewBox="0 0 420 532"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="6.5"
        y="6.5"
        width="407"
        height="493"
        fill="black"
        stroke="#3E8AE2"
      />
      <rect
        x="1"
        y="1"
        width="11"
        height="11"
        fill="white"
        stroke="#3E8AE2"
        strokeWidth="2"
      />
      <rect
        x="1"
        y="494"
        width="11"
        height="11"
        fill="white"
        stroke="#3E8AE2"
        strokeWidth="2"
      />
      <rect
        x="408"
        y="1"
        width="11"
        height="11"
        fill="white"
        stroke="#3E8AE2"
        strokeWidth="2"
      />
      <rect
        x="408"
        y="494"
        width="11"
        height="11"
        fill="white"
        stroke="#3E8AE2"
        strokeWidth="2"
      />
      <rect x="158" y="508" width="105" height="24" rx="3" fill="#3E8AE2" />
      <path
        d="M168.173 515.66V516.776H164.633V519.236H167.393V520.352H164.633V524H163.265V515.66H168.173ZM170.137 516.512C169.889 516.512 169.681 516.428 169.513 516.26C169.345 516.092 169.261 515.884 169.261 515.636C169.261 515.388 169.345 515.18 169.513 515.012C169.681 514.844 169.889 514.76 170.137 514.76C170.377 514.76 170.581 514.844 170.749 515.012C170.917 515.18 171.001 515.388 171.001 515.636C171.001 515.884 170.917 516.092 170.749 516.26C170.581 516.428 170.377 516.512 170.137 516.512ZM170.809 517.388V524H169.441V517.388H170.809ZM175.269 517.28C175.781 517.28 176.233 517.384 176.625 517.592C177.025 517.792 177.337 518.044 177.561 518.348V517.388H178.941V524.108C178.941 524.716 178.813 525.256 178.557 525.728C178.301 526.208 177.929 526.584 177.441 526.856C176.961 527.128 176.385 527.264 175.713 527.264C174.817 527.264 174.073 527.052 173.481 526.628C172.889 526.212 172.553 525.644 172.473 524.924H173.829C173.933 525.268 174.153 525.544 174.489 525.752C174.833 525.968 175.241 526.076 175.713 526.076C176.265 526.076 176.709 525.908 177.045 525.572C177.389 525.236 177.561 524.748 177.561 524.108V523.004C177.329 523.316 177.013 523.58 176.613 523.796C176.221 524.004 175.773 524.108 175.269 524.108C174.693 524.108 174.165 523.964 173.685 523.676C173.213 523.38 172.837 522.972 172.557 522.452C172.285 521.924 172.149 521.328 172.149 520.664C172.149 520 172.285 519.412 172.557 518.9C172.837 518.388 173.213 517.992 173.685 517.712C174.165 517.424 174.693 517.28 175.269 517.28ZM177.561 520.688C177.561 520.232 177.465 519.836 177.273 519.5C177.089 519.164 176.845 518.908 176.541 518.732C176.237 518.556 175.909 518.468 175.557 518.468C175.205 518.468 174.877 518.556 174.573 518.732C174.269 518.9 174.021 519.152 173.829 519.488C173.645 519.816 173.553 520.208 173.553 520.664C173.553 521.12 173.645 521.52 173.829 521.864C174.021 522.208 174.269 522.472 174.573 522.656C174.885 522.832 175.213 522.92 175.557 522.92C175.909 522.92 176.237 522.832 176.541 522.656C176.845 522.48 177.089 522.224 177.273 521.888C177.465 521.544 177.561 521.144 177.561 520.688ZM188.742 517.28C189.262 517.28 189.726 517.388 190.134 517.604C190.55 517.82 190.874 518.14 191.106 518.564C191.346 518.988 191.466 519.5 191.466 520.1V524H190.11V520.304C190.11 519.712 189.962 519.26 189.666 518.948C189.37 518.628 188.966 518.468 188.454 518.468C187.942 518.468 187.534 518.628 187.23 518.948C186.934 519.26 186.786 519.712 186.786 520.304V524H185.43V520.304C185.43 519.712 185.282 519.26 184.986 518.948C184.69 518.628 184.286 518.468 183.774 518.468C183.262 518.468 182.854 518.628 182.55 518.948C182.254 519.26 182.106 519.712 182.106 520.304V524H180.738V517.388H182.106V518.144C182.33 517.872 182.614 517.66 182.958 517.508C183.302 517.356 183.67 517.28 184.062 517.28C184.59 517.28 185.062 517.392 185.478 517.616C185.894 517.84 186.214 518.164 186.438 518.588C186.638 518.188 186.95 517.872 187.374 517.64C187.798 517.4 188.254 517.28 188.742 517.28ZM192.751 520.664C192.751 520 192.887 519.412 193.159 518.9C193.439 518.388 193.815 517.992 194.287 517.712C194.767 517.424 195.295 517.28 195.871 517.28C196.391 517.28 196.843 517.384 197.227 517.592C197.619 517.792 197.931 518.044 198.163 518.348V517.388H199.543V524H198.163V523.016C197.931 523.328 197.615 523.588 197.215 523.796C196.815 524.004 196.359 524.108 195.847 524.108C195.279 524.108 194.759 523.964 194.287 523.676C193.815 523.38 193.439 522.972 193.159 522.452C192.887 521.924 192.751 521.328 192.751 520.664ZM198.163 520.688C198.163 520.232 198.067 519.836 197.875 519.5C197.691 519.164 197.447 518.908 197.143 518.732C196.839 518.556 196.511 518.468 196.159 518.468C195.807 518.468 195.479 518.556 195.175 518.732C194.871 518.9 194.623 519.152 194.431 519.488C194.247 519.816 194.155 520.208 194.155 520.664C194.155 521.12 194.247 521.52 194.431 521.864C194.623 522.208 194.871 522.472 195.175 522.656C195.487 522.832 195.815 522.92 196.159 522.92C196.511 522.92 196.839 522.832 197.143 522.656C197.447 522.48 197.691 522.224 197.875 521.888C198.067 521.544 198.163 521.144 198.163 520.688ZM210.901 520.244H208.477V522.728H207.205V520.244H204.781V519.092H207.205V516.608H208.477V519.092H210.901V520.244ZM221.048 515.66V516.776H217.508V519.236H220.268V520.352H217.508V524H216.14V515.66H221.048ZM223.684 518.348C223.884 518.012 224.148 517.752 224.476 517.568C224.812 517.376 225.208 517.28 225.664 517.28V518.696H225.316C224.78 518.696 224.372 518.832 224.092 519.104C223.82 519.376 223.684 519.848 223.684 520.52V524H222.316V517.388H223.684V518.348ZM226.465 520.664C226.465 520 226.601 519.412 226.873 518.9C227.153 518.388 227.529 517.992 228.001 517.712C228.481 517.424 229.009 517.28 229.585 517.28C230.105 517.28 230.557 517.384 230.941 517.592C231.333 517.792 231.645 518.044 231.877 518.348V517.388H233.257V524H231.877V523.016C231.645 523.328 231.329 523.588 230.929 523.796C230.529 524.004 230.073 524.108 229.561 524.108C228.993 524.108 228.473 523.964 228.001 523.676C227.529 523.38 227.153 522.972 226.873 522.452C226.601 521.924 226.465 521.328 226.465 520.664ZM231.877 520.688C231.877 520.232 231.781 519.836 231.589 519.5C231.405 519.164 231.161 518.908 230.857 518.732C230.553 518.556 230.225 518.468 229.873 518.468C229.521 518.468 229.193 518.556 228.889 518.732C228.585 518.9 228.337 519.152 228.145 519.488C227.961 519.816 227.869 520.208 227.869 520.664C227.869 521.12 227.961 521.52 228.145 521.864C228.337 522.208 228.585 522.472 228.889 522.656C229.201 522.832 229.529 522.92 229.873 522.92C230.225 522.92 230.553 522.832 230.857 522.656C231.161 522.48 231.405 522.224 231.589 521.888C231.781 521.544 231.877 521.144 231.877 520.688ZM243.058 517.28C243.578 517.28 244.042 517.388 244.45 517.604C244.866 517.82 245.19 518.14 245.422 518.564C245.662 518.988 245.782 519.5 245.782 520.1V524H244.426V520.304C244.426 519.712 244.278 519.26 243.982 518.948C243.686 518.628 243.282 518.468 242.77 518.468C242.258 518.468 241.85 518.628 241.546 518.948C241.25 519.26 241.102 519.712 241.102 520.304V524H239.746V520.304C239.746 519.712 239.598 519.26 239.302 518.948C239.006 518.628 238.602 518.468 238.09 518.468C237.578 518.468 237.17 518.628 236.866 518.948C236.57 519.26 236.422 519.712 236.422 520.304V524H235.054V517.388H236.422V518.144C236.646 517.872 236.93 517.66 237.274 517.508C237.618 517.356 237.986 517.28 238.378 517.28C238.906 517.28 239.378 517.392 239.794 517.616C240.21 517.84 240.53 518.164 240.754 518.588C240.954 518.188 241.266 517.872 241.69 517.64C242.114 517.4 242.57 517.28 243.058 517.28ZM253.583 520.532C253.583 520.78 253.567 521.004 253.535 521.204H248.483C248.523 521.732 248.719 522.156 249.071 522.476C249.423 522.796 249.855 522.956 250.367 522.956C251.103 522.956 251.623 522.648 251.927 522.032H253.403C253.203 522.64 252.839 523.14 252.311 523.532C251.791 523.916 251.143 524.108 250.367 524.108C249.735 524.108 249.167 523.968 248.663 523.688C248.167 523.4 247.775 523 247.487 522.488C247.207 521.968 247.067 521.368 247.067 520.688C247.067 520.008 247.203 519.412 247.475 518.9C247.755 518.38 248.143 517.98 248.639 517.7C249.143 517.42 249.719 517.28 250.367 517.28C250.991 517.28 251.547 517.416 252.035 517.688C252.523 517.96 252.903 518.344 253.175 518.84C253.447 519.328 253.583 519.892 253.583 520.532ZM252.155 520.1C252.147 519.596 251.967 519.192 251.615 518.888C251.263 518.584 250.827 518.432 250.307 518.432C249.835 518.432 249.431 518.584 249.095 518.888C248.759 519.184 248.559 519.588 248.495 520.1H252.155ZM256.297 518.348C256.497 518.012 256.761 517.752 257.089 517.568C257.425 517.376 257.821 517.28 258.277 517.28V518.696H257.929C257.393 518.696 256.985 518.832 256.705 519.104C256.433 519.376 256.297 519.848 256.297 520.52V524H254.929V517.388H256.297V518.348Z"
        fill="white"
      />
      <path
        d="M126.333 154.5C126.333 133.974 142.973 117.333 163.5 117.333C184.026 117.333 200.667 133.974 200.667 154.5C200.667 175.027 184.026 191.667 163.5 191.667C142.973 191.667 126.333 175.027 126.333 154.5Z"
        fill="#1ABCFE"
      />
      <path
        d="M52 228.833C52 208.307 68.6399 191.667 89.1667 191.667H126.333V228.833C126.333 249.36 109.693 266 89.1667 266C68.6399 266 52 249.36 52 228.833Z"
        fill="#0ACF83"
      />
      <path
        d="M126.333 43.0005V117.333H163.5C184.027 117.333 200.667 100.693 200.667 80.1666C200.667 59.6399 184.027 43.0005 163.5 43.0005H126.333Z"
        fill="#FF7262"
      />
      <path
        d="M52 80.1667C52 100.693 68.6399 117.333 89.1667 117.333H126.333V43H89.1667C68.6399 43 52 59.6404 52 80.1667Z"
        fill="#F24E1E"
      />
      <path
        d="M52 154.5C52 175.027 68.6399 191.667 89.1667 191.667H126.333V117.333H89.1667C68.6399 117.333 52 133.974 52 154.5Z"
        fill="#A259FF"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M237 406.004H310.501V476.005L237 406.004Z"
        fill="#0055FF"
      />
      <path
        d="M310.501 335.999H237V406.001H384.002L310.501 335.999Z"
        fill="#00AAFF"
      />
      <path d="M237 266L310.501 336.001H384.002V266H237Z" fill="#88DDFF" />
    </svg>
  );
};
