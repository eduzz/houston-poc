import React from 'react';
import { TextField as MaterialTextField, TextFieldProps } from './index';

const TextField = (props: TextFieldProps & { id: any }) => {
 return (
   <MaterialTextField {...props} InputLabelProps={{ shrink: true }} variant="outlined" id={props.id} />
 )
};

export default TextField;
