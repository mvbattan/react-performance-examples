import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

import hearthstoneActions from '../../../redux/hearthstone/actions';

import HearthstoneCard from './components/HearthstoneCard';
import './styles.css';

class HearthStoneCardList extends Component {
  componentWillMount() {
    this.props.dispatch(hearthstoneActions.getHearthstoneCards());
  }

  render() {
    if (this.props.loading) {
      return <h1>Loading...</h1>
    }

    return (
      <div className="hs-list">
        {this.props.cardList.map(HearthstoneCard)}
      </div>
    );
  }
}

// const cardSelector = createSelector(
//   store => store.hearthstone.cards,
//   cards => cards.filter(card => card.mana < 4)
// );

const mapStateToProps = store => ({
  cardList: store.hearthstone.cards,
  loading: store.hearthstone.cardsLoading
});

export default connect(mapStateToProps)(HearthStoneCardList);
