import { createTypes } from 'reduxsauce';

import HearthstoneService from '../../services/HearthstoneService';
import { createThunkAction } from '../utils';

export const actions = createTypes(
  ` GET_CARDS
    GET_CARDS_SUCCESS
    GET_CARDS_FAILURE
    OTHER_ACTION
  `,
  { prefix: '@@HEARTHSTONE/' }
);

const actionCreators = {
  getHearthstoneCards: () =>
    createThunkAction(actions.GET_CARDS, HearthstoneService.getCards, 'cards'),
  otherAction: () => ({ type: actions.OTHER_ACTION })
};

export default actionCreators;
