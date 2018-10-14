import React from 'react';

import { storiesOf } from '@storybook/react';
import { Button } from './Button';
import { wInfo } from './utils';

storiesOf('Button', module)
  .addWithJSX('with background',
    wInfo(`
      description

      ~~~js
      <Button>slkdjslkdj</Button>
      ~~~
      `)
  (() => <Button bg='gold'>Hello World!</Button>))
  .addWithJSX('with another background', () => <Button bg='red'>Hello red world!</Button>)