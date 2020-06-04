import React from 'react';
import MaterialTypography, { TypographyProps } from '@material-ui/core/Typography';
import fonts from './shared/fonts';

interface IProps {
  id: any;
  spacing?: typeof fonts.spacings;
  size?: string;
  weight?: string;
}

const Typography = (props: TypographyProps & IProps) => {
  console.log(props);
  const styles: any = {};
  if (props?.size) styles.fontSize = fonts.sizes[props.size];
  if (props?.weight) styles.fontWeight = fonts.weights[props.weight];
  return <MaterialTypography {...props} styles={styles} />;
};

export default Typography;
