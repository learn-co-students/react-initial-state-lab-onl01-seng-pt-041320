// your ImageSlider code here!
import React from 'react';

class ImageSlider extends React.Component {
    state = {
        currentSlideIndex: 0
    };
    render() {
        return (
        <text>I am on slide {this.state.currentSlideIndex}</text>
        )
    } 
}
export default ImageSlider