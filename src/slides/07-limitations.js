import React from 'react';
import { Slide, Heading, Appear, Text } from 'spectacle';
import { FitList, SpacedListItem } from '../tags';

export default (
  <Slide bgColor="primary" padding="100px">
    <Heading size={3} textColor="tertiary">
      Limitations
    </Heading>
    <FitList margin="50px auto 0 !important">
      <Appear>
        <SpacedListItem>
          Synchronisation des données entre plusieurs composants<br/>
          <em>Exemple : une todolist à un endroit de la page, le nombre de tâches s'affichant ailleurs</em><br/>
          <span style={{marginLeft: '15px', lineHeight: '50px' }}>- Données stockées dans le state du premier parent commun </span>
        </SpacedListItem>
      </Appear>
      <Appear>
        <SpacedListItem>
          Informations globales à l'application : <em>Utilisateur connecté, langue de l'interface</em><br/>
          <span style={{ marginLeft: '15px', lineHeight: '50px' }}>- Tous les composants en ont besoin !</span>
        </SpacedListItem>
      </Appear>
    </FitList>
    <Appear>
      <Text margin="1em auto"><strong>Des solutions existent !</strong></Text>
    </Appear>
  </Slide>
);
