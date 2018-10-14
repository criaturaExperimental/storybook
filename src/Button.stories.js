import React from 'react';

import { storiesOf } from '@storybook/react';
import { Button } from './Button';
import { wInfo } from './utils';
import { text, color } from '@storybook/addon-knobs/react';

storiesOf('Button', module)
  .addWithJSX('with background',
    wInfo(`
      description

      ~~~js
      <Button>slkdjslkdj</Button>
      ~~~
      `)
  (() => <Button bg='gold'>Hello World!</Button>))
  .addWithJSX('with another background', () => <Button bg={text('bg', `green`)}>Hello green world!</Button>)
  .addWithJSX('with selectable colour', () => <Button bg={color('bg', 'green', 'group1')}>Hello select world!</Button>)