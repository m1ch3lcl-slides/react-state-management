import React from 'react';
import { Slide, Heading } from 'spectacle';
import { FitList, SpacedListItem } from '../tags';

const getColor = (activeIndex, i) =>
  activeIndex && activeIndex !== i ? '#ccc' : null;

export default activeIndex => (
  <Slide bgColor="primary">
    <Heading size={2} textColor="tertiary">
      Sommaire
    </Heading>
    <div style={{ height: '50px' }} />
    <FitList ordered start={1}>
      <SpacedListItem textSize="4rem" textColor={getColor(activeIndex, 1)}>
        <strong>Impératif VS déclaratif</strong>
      </SpacedListItem>
      <SpacedListItem textSize="4rem" textColor={getColor(activeIndex, 2)}>
        <strong>Limitations</strong>
      </SpacedListItem>
      <SpacedListItem textSize="4rem" textColor={getColor(activeIndex, 3)}>
        Un <strong>contexte</strong> pour les contrôler tous
      </SpacedListItem>
      <SpacedListItem textSize="4rem" textColor={getColor(activeIndex, 4)}>
        <strong>Redux</strong>...
      </SpacedListItem>
      <SpacedListItem textSize="4rem" textColor={getColor(activeIndex, 5)}>
        <strong>Et plus simplement ?</strong>
      </SpacedListItem>
    </FitList>
  </Slide>
);
