import React from 'react';
import Person from './Person'

const getCards = (cards) => {
  return cards.map((card, index) => {
    return <Person {...card} />
  })
}

const Favorites = ({cards}) => {
  return (
    <div>
    { getCards(cards) }
    </div>
  )
}

export default Favorites
