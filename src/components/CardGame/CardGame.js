import React, { Component } from 'react'
import {shuffle} from 'lodash';

import Card from './../Card/Card';

import './CardGame.scss';

import cat from './../../assets/cat.png';
import chicken from './../../assets/chicken.png';
import ladybug from './../../assets/ladybug.png';
import panda from './../../assets/panda.png';
import parrot from './../../assets/parrot.png';
import pig from './../../assets/pig.png';
import platypus from './../../assets/platypus.png';
import turtle from './../../assets/turtle.png';

class CardGame extends Component {
    constructor(props){
        super(props);
        this.state = {
            cards: [
                {name: 'cat', open: false, id: 1, image: cat, isCompleted: false }, 
                {name: 'chicken', open: false, id: 2, image: chicken, isCompleted: false  },
                {name: 'ladybug', open: false, id: 3, image: ladybug, isCompleted: false },
                {name: 'panda', open: false, id: 4, image: panda, isCompleted: false },
                {name: 'parrot', open: false, id: 5, image: parrot, isCompleted: false },
                {name: 'pig', open: false, id: 6, image: pig, isCompleted: false },
                {name: 'platypus', open: false, id: 7, image: platypus, isCompleted: false },
                {name: 'turtle', open: false, id: 8, image: turtle, isCompleted: false },
                {name: 'cat', open: false, id: 9, image: cat, isCompleted: false }, 
                {name: 'chicken', open: false, id: 10, image: chicken , isCompleted: false },
                {name: 'ladybug', open: false, id: 11, image: ladybug, isCompleted: false },
                {name: 'panda', open: false, id: 12, image: panda, isCompleted: false },
                {name: 'parrot', open: false, id: 13, image: parrot, isCompleted: false },
                {name: 'pig', open: false, id: 14, image: pig, isCompleted: false },
                {name: 'platypus', open: false, id: 15, image: platypus, isCompleted: false },
                {name: 'turtle', open: false, id: 16, image: turtle, isCompleted: false },
            ],
            flippedCards: [],
            matchedCards: [],
            shuffledCards: [],
            isOpen: false,
            score: 0
        }
    }

    componentDidMount(){
        this.setState({ shuffledCards: shuffle(this.state.cards) })
    }

    onClickHandler = (pokemon, index) => {
        if(this.state.flippedCards.length === 2){
            setTimeout(() => {
                this.check()
              },500)
        } else {
            let flippedCards =  this.state.flippedCards;
            let shuffledCards = this.state.shuffledCards;
            shuffledCards[index].open = true;
            flippedCards.push(pokemon);
            this.setState({ 
                flippedCards,
                shuffledCards
            })
            if(this.state.flippedCards.length === 2){
                setTimeout(() => {
                    this.check()
                  },500)
            }        
        }
    }

    check = () => {
        console.warn('isCheck');
        let shuffledCards = this.state.shuffledCards;
        let matchedCards = this.state.matchedCards;


        if((this.state.flippedCards[0].name === this.state.flippedCards[1].name)){
            shuffledCards.find(card => card.id === this.state.flippedCards[0].id).isCompleted = true;
            shuffledCards.find(card => card.id === this.state.flippedCards[1].id).isCompleted = true;
            matchedCards.push(this.state.flippedCards[0], this.state.flippedCards[1]) 
        }else {
            shuffledCards.find(card => card.id === this.state.flippedCards[0].id).open = false;
            shuffledCards.find(card => card.id === this.state.flippedCards[1].id).open = false;
        }

        this.setState({
          matchedCards,
          flippedCards: []
        })
    }

    render() {
        return (
            <div className="card-container">
                { this.state.shuffledCards.map(
                    (pokemon, index) => 
                    <Card 
                        open={pokemon.open}
                        pokemon={pokemon}
                        onClickHandler={() => this.state.flippedCards.length ===  2 ? null : this.onClickHandler(pokemon,index)} 
                    />
                )}
            </div>
        )
    }
}

export default CardGame;