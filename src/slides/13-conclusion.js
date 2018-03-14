import React from 'react';
import { Slide, Heading, Appear } from 'spectacle';
import { FitList, SpacedListItem } from '../tags';

export default (
  <Slide bgColor="primary" padding="100px">
    <Heading size={3} textColor="tertiary">
      Conclusion : comment choisir ?
    </Heading>
    <FitList>
      <Appear>
        <SpacedListItem>
          Données contextuelles ?
        </SpacedListItem>
      </Appear>
      <Appear>
        <SpacedListItem>
          State global ou state partagé ?
        </SpacedListItem>
      </Appear>
      <Appear>
        <SpacedListItem>
          Facilité à mettre en œuvre des tests
        </SpacedListItem>
      </Appear>
    </FitList>
  </Slide>
);
