import React from 'react';
import { Slide, Heading, Image } from 'spectacle';

import flow from '../assets/redux-flow.png';

export default (
  <Slide bgColor="primary" padding="100px">
    <Heading size={3} textColor="tertiary">
      Comment ça marche ?
    </Heading>
    <Image src={flow}/>
  </Slide>
);
