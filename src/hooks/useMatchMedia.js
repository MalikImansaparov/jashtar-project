import { useState, useLayoutEffect } from 'react';

const queries = [
  '(min-width : 360px)',
  '(min-width 540px)',
  '(min-width: 767px)',
  '(min-width: 1289px)',
];

export const useMatchMedia = () => {
  const mediaQueryLists = queries.map((query) => matchMedia(query));

  const getValues = () => mediaQueryLists.map((list) => list.matches);

  const [values, setValues] = useState(getValues);

  useLayoutEffect(() => {
    const handler = () => setValues(getValues);

    mediaQueryLists.forEach((list) => list.addEventListener('change', handler));

    return () =>
      mediaQueryLists.forEach((list) =>
        list.removeEventListener('change', handler)
      );
  }, []);

  return ['isExtra', 'isMobile', 'isTablet', 'isDesktop'].reduce(
    (acc, screen, index) => ({
      ...acc,
      [screen]: values[index],
    }),
    {}
  );
};
