import React from 'react';
import MaterialTextField, { TextFieldProps } from '@material-ui/core/TextField';

const TextField = (props: TextFieldProps & { id: any }) => (
  <MaterialTextField
    {...props}
    InputLabelProps={{ shrink: true }}
    variant="outlined"
    id={props.id}
  />
);

export default TextField;
