import { motion } from 'motion/react';
import { useNavigate } from 'react-router';
import { getPageById } from '~/page';
import { usePage } from '~/page/hooks';
import { cn } from '~/style';

export const Next = () => {
  const page = usePage();
  const nextPage = getPageById(page.next.pageId);
  const navigate = useNavigate();

  return (
    <div
      className={cn(
        'mx-auto max-w-lg px-6 pt-8 md:px-8 md:pt-16 xl:max-w-2xl',
        {
          'xl:max-w-3xl': page.id === 'work',
        },
      )}
    >
      <div
        className="mb-2 text-center text-xs font-semibold uppercase md:mb-3 xl:text-sm"
        style={{ color: nextPage.color }}
      >
        What's next?
      </div>

      <div
        className="text-balance text-center leading-relaxed text-muted-foreground md:text-xl md:leading-relaxed lg:text-2xl lg:leading-relaxed xl:text-3xl xl:leading-relaxed"
        dangerouslySetInnerHTML={{ __html: page.next.text }}
      />

      <motion.div
        className={cn(
          'relative mx-auto mt-12 h-16 w-52 cursor-pointer select-none lg:mt-14',
          {
            'w-60': nextPage.id === 'experience',
          },
        )}
        whileHover="hover"
        whileTap="tap"
        onClick={() => navigate(nextPage.path)}
      >
        <motion.div
          className="absolute bottom-0 left-0 right-0 top-0 rounded-full"
          style={{
            backgroundColor: nextPage.color,
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
          {nextPage.title}
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
            stroke={nextPage.color}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
            />
          </svg>
        </motion.div>
      </motion.div>
    </div>
  );
};
