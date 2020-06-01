import * as React from 'react';
import { Button } from '../../index';
import { storiesOf } from '@storybook/react';
// import {muiTheme} from 'storybook-addon-material-ui';
// import { listThemes } from '../../components/shared/styles';

storiesOf('Core Components/Button', module)
.add('Types', () => (
    <>
      <Button variant='contained' color='primary'>Primary</Button>
      <Button color='primary'>Primary 2</Button>

      <Button variant='contained' color='secondary'>Secondary</Button>
      <Button color='secondary'>Secondary 2</Button>
    </>
  ));




