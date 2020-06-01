import React from 'react';
import { ThemeProvider as ThemeProviderMaterial } from '@material-ui/core/styles';
import { getTheme, ThemeName } from '.';

interface IProps {
  theme: ThemeName;
  children: React.ReactElement
}

const ThemeProvider: React.FC<IProps> = ({ theme, children }) => {
  return (
    <ThemeProviderMaterial theme={getTheme(theme)}>
      {children}
    </ThemeProviderMaterial>
  );
}

export default ThemeProvider;
