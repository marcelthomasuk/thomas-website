import { usePage } from '~/page/hooks';
import { cn } from '~/style';

export const Feature = ({
  title,
  text,
  image,
  alt,
  label,
  reverse,
}: {
  title: string;
  text: string;
  image?: string;
  alt?: string;
  label?: string;
  reverse?: boolean;
}) => {
  const page = usePage();

  return (
    <section
      id="features"
      className={cn(
        'relative mx-auto flex max-w-7xl flex-col gap-4 text-center xl:flex-row xl:items-center xl:gap-10 xl:text-left',
        { 'flex-col-reverse xl:flex-row-reverse': reverse },
      )}
    >
      <div className="relative mx-auto max-w-xl xl:mx-0 xl:w-3/5 xl:max-w-none">
        {image && (
          <img className="w-full dark:hidden" src={image} alt={alt || title} />
        )}
      </div>

      <div className="mx-auto max-w-sm md:max-w-lg xl:w-2/5">
        <div
          className="pb-1 text-xs font-semibold uppercase md:text-sm"
          style={{
            color: page.color,
          }}
        >
          {label}
        </div>

        <h2
          className="mb-4 text-balance text-2xl font-semibold uppercase leading-normal md:text-3xl lg:text-4xl lg:leading-tight"
          dangerouslySetInnerHTML={{ __html: title }}
        />

        <p
          className="mx-auto max-w-lg text-balance text-muted-foreground md:text-lg lg:text-xl lg:leading-relaxed xl:mx-0"
          dangerouslySetInnerHTML={{ __html: text }}
        />
      </div>
    </section>
  );
};
