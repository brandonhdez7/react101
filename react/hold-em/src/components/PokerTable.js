import React, {Component} from 'react';
import Deck from '../utilityClasses/Deck';
import GameButtons from './GameButtons';
import PokerHand from './PokerHand'

class PokerTable extends Component {
    constructor(){
        super();
        this.cards = new Deck();
        this.cards.createDeck();
        this.cards.shuffleDeck();
        console.log(this.cards)
        this.state = {
            playersHand: ['gray_back','gray_back'],
            dealersHand: ['gray_back','gray_back']

        }
        this.prepDeck = this.prepDeck.bind(this);
    }

    // this is a coustom method not coming from react
    // we cant put this in our deck class, because
    // its specified to our hold em
    prepDeck(){
        this.cards.deck.shift();
        const card1 = this.cards.deck.shift();
        const card2 = this.cards.deck.shift();
        const card3 = this.cards.deck.shift();
        const card4 = this.cards.deck.shift();
        // deck is now only 48, becuase we mutated this.deck 
        // when we ran shift
        this.setState({
            playersHand: [card1,card3],
            dealersHand: [card2,card4],
        })
    }

    render(){
        return(
            <div className="col-sm-12 the-table">
            <PokerHand cards={this.state.dealersHand} />
            <PokerHand cards={this.state.playersHand} />
            <GameButtons dealFunction={this.prepDeck}/>
            </div>
        )

    }
}


export default PokerTable