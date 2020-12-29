import React, { Component } from 'react';

export default class Bomb extends Component {

    constructor(props) {
        super()
        this.state = {
            secondsLeft: props.initialCount
        }
    }

    render() {
        const SECONDS_LEFT = this.state.secondsLeft
        if (SECONDS_LEFT === 0) {
            return (
                <p>Boom!</p>
            )
        } else {
            return (
                <p>{SECONDS_LEFT} seconds left before I go boom!</p>
            )
        }
    }
}
