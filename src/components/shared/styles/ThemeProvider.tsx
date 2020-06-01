import React from 'react';
import { ThemeProvider as ThemeProviderMaterialUi } from '@material-ui/core/styles';
import { themes } from './index';
import { IThemeType } from '../../../interfaces/Theme';

interface IProps {
  theme: IThemeType;
  children: React.ReactElement
}

const ThemeProvider: React.FC<IProps> = ({ theme, children }) => {
  const currentTheme = themes.find(t => t.themeName === theme);
  return (
    <ThemeProviderMaterialUi theme={currentTheme ? currentTheme :  themes[0]}>
      {children}
    </ThemeProviderMaterialUi>
  );
}

export default ThemeProvider;
