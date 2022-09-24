import { lightTheme, darkTheme } from '~/renderer/constants/themes';

export const getTheme = (name: string) => {
  if (name === 'nuon-light') return lightTheme;
  else if (name === 'nuon-dark') return darkTheme;
  return lightTheme;
};
