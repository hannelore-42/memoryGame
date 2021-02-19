import MemoryCard from './components/MemoryCard.js'
import './App.css';
import React from 'react';

function generateDeck() {
  const symbols = ['∆', 'ß', '£', '§', '•', '$', '+', 'ø'];
  const deck = [];
  for (let i = 0; i < 16; i++) {
    let card = {
      isFlipped: false,
      symbol: symbols[i % 8]
    };
    deck.push(card);
  }
  return shuffle(deck);
}
function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      deck: generateDeck(),
      pickedCards: []
    }
  }
  pickCard(cardIndex) {
    if (this.state.deck[cardIndex].isFlipped) {
      return
    }
    const cardToFlip = {
      ...this.state.deck[cardIndex],
      isFlipped: true
    }
  }
  render() {
    const cardsJSX = this.state.deck.map(
      (card, index) => {
        return (<MemoryCard key={index} symbol={card.symbol} isFlipped={card.isFlipped} />)
      }
    );
    return (

      <div className="App">
        <header className="App-header">
          <h1>Memory Game</h1>
          <h2 className="Subtitle">Match cards to win</h2>
        </header>
        <div>
          {cardsJSX.slice(0, 4)}
        </div>
        <div>
          {cardsJSX.slice(4, 8)}
        </div>
        <div>
          {cardsJSX.slice(8, 12)}
        </div>
        <div>
          {cardsJSX.slice(12, 16)}
        </div>

      </div>
    )
  }
}

export default App;

