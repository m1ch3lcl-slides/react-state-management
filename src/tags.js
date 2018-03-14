import {
  ListItem,
  List,
  Quote
} from 'spectacle';

import styled from 'react-emotion';

export const SpacedListItem = styled(ListItem)`
  margin-bottom: 15px;
`;

export const FitList = styled(List)`
  width: fit-content;
  margin: 1em auto;
`;

export const LightQuote = styled(Quote)`
  border-left-color: gray;
`;
