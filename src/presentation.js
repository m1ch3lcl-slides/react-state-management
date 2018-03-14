import React from 'react';
import { Deck } from 'spectacle';
import createTheme from 'spectacle/lib/themes/default';

import Slides from './slides';

require('normalize.css');

const theme = createTheme(
  {
    primary: 'white',
    secondary: '#1F2022',
    tertiary: '#03A9FC',
    quarternary: '#D8D801'
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica'
  }
);

export default () => (
  <Deck
    transition={['fade', 'slide']}
    transitionDuration={500}
    theme={theme}
    contentWidth="100%"
    contentHeight="100%"
  >
    {Slides}
  </Deck>
);
