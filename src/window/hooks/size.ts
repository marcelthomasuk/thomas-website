import { useMediaQuery } from 'react-responsive';

export function useSize() {
  const isXs = useMediaQuery({ query: '(max-width: 639px)' });

  const isSm = useMediaQuery({
    query: '(min-width: 640px)',
  });

  const isMd = useMediaQuery({
    query: '(min-width: 768px)',
  });

  const isLg = useMediaQuery({
    query: '(min-width: 1024px)',
  });

  const isXl = useMediaQuery({
    query: '(min-width: 1280px)',
  });

  const is2Xl = useMediaQuery({ query: '(min-width: 1536px)' });

  const isXsOnly = useMediaQuery({
    query: '(max-width: 639px)',
  });

  const isSmOnly = useMediaQuery({
    query: '(min-width: 640px) and (max-width: 767px)',
  });

  const isMdOnly = useMediaQuery({
    query: '(min-width: 768px) and (max-width: 1023px)',
  });

  const isLgOnly = useMediaQuery({
    query: '(min-width: 1024px) and (max-width: 1279px)',
  });

  const isXlOnly = useMediaQuery({
    query: '(min-width: 1280px) and (max-width: 1535px)',
  });

  const is2XlOnly = useMediaQuery({ query: '(min-width: 1536px)' });

  const key = isXsOnly
    ? 'xs'
    : isSmOnly
      ? 'sm'
      : isMdOnly
        ? 'md'
        : isLgOnly
          ? 'lg'
          : isXlOnly
            ? 'xl'
            : is2XlOnly
              ? '2xl'
              : 'lg';

  return {
    key,
    isXs,
    isSm,
    isMd,
    isLg,
    isXl,
    is2Xl,
    isSmOnly,
    isMdOnly,
    isLgOnly,
    isXlOnly,
    is2XlOnly,
  };
}
