import * as React from 'react';
import { Button } from './index';
import { storiesOf } from '@storybook/react';

storiesOf('Design System/Button', module)
.add('Types', () => (
    <>
      <Button variant='contained' color='primary'>Primary</Button>
      <Button color='primary'>Primary 2</Button>

      <Button variant='contained' color='secondary'>Secondary</Button>
      <Button color='secondary'>Secondary 2</Button>
    </>
  ));




