import React, { Component } from "react";
import dataJson from '../data/demo.json';
import Carousel from 'react-bootstrap/Carousel'

class SliderView extends Component {
    render() {
        return (
            <div className="silder-view">
                <Carousel>
                {
                    dataJson.slider_images.map((contact, index) => (
                        <Carousel.Item key={index}>
                            <img src={contact.image} alt={index} />
                        </Carousel.Item>
                    ))
                }
                </Carousel>
            </div>
        )
    }
}
 
export default SliderView;