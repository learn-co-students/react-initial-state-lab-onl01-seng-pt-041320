// your Bomb code here!
import React from 'react'

class Bomb extends React.Component {
    state = {
        secondsLeft: this.props.initialCount
    }
    render() {
        if (this.props.initialCount != 0) {
        return (
            <text>120 seconds left before I go boom!</text>
        )
        }else {
            return (
                <text>Boom!</text>
            )
        }
    }
}

export default Bomb