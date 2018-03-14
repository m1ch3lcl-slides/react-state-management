import React from 'react';
import { Slide, Heading, Appear, Text } from 'spectacle';
import { FitList, SpacedListItem } from '../tags';

export default (
  <Slide bgColor="primary" padding="100px">
    <Heading size={3} textColor="tertiary">
      Impératif VS déclaratif<br/>JQuery VS React
    </Heading>
    <FitList margin="50px auto 0 !important">
      <Appear>
        <div><SpacedListItem>
          <strong>Jquery</strong> propose une approche <strong>impérative</strong>
        </SpacedListItem>
        <SpacedListItem>
          <strong>React</strong> fonctionne de manière <strong>déclarative</strong>
        </SpacedListItem></div>
      </Appear>
    </FitList>
    <Appear>
      <Text margin="1em auto">Exemple : implémentation d'une todo-list</Text>
    </Appear>
  </Slide>
);
