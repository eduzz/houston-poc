import * as React from 'react';
import { TextField as MaterialTextField } from './index';
import { storiesOf } from '@storybook/react';
import TextField from './TextField';

storiesOf('Design System/TextField', module)
.add('Types', () => (
    <>
      <MaterialTextField label='Teste' variant="outlined" InputLabelProps={{ shrink: true }}/>
      <TextField id='teste2' label='Teste2'/>
      <TextField id='teste3' label='Teste3' variant="filled"/>
      <TextField id='teste4' label='Teste2' variant="filled" InputLabelProps={{ shrink: false }}/>
    </>
  ));




