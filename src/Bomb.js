import React, { Component } from 'react';
// import Cell from './Cell'

export default class Bomb extends Component {

    constructor(props) {
        super(props)
        this.state = {
          secondsLeft: props.initialCount
        }
      }
  
    render() {
        
        if (this.state.secondsLeft === 0 ){
            return (
                <div>
                    Boom!
                </div>
            )
        } else {
            return (
                <div id="">
                    {this.state.secondsLeft} seconds left before I go boom!
                </div>
            )
        }
        
    }
  
}