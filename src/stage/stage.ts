export const isProduction = () => {
  return import.meta.env.PROD;
};

export const isNotProduction = () => {
  return !isProduction();
};
