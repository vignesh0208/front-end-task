import React, { Component } from "react";
import dataJson from '../../data/demo.json';
import Carousel from 'react-bootstrap/Carousel';

class SliderView extends Component {
    render() {
        const details = this.props.dataforMobile;
        let carouselView;
        if(details) {
            carouselView = 
                <Carousel>
                    {
                        details.slider_images.map((contact, index) => (
                            <Carousel.Item key={index}>
                                <img src={contact.image} alt={index} />
                            </Carousel.Item>
                        ))
                    }
                </Carousel>
        }
        else {
            carouselView = 
                <Carousel>
                    {
                        dataJson.slider_images.map((contact, index) => (
                            <Carousel.Item key={index}>
                                <img src={contact.image} alt={index} />
                            </Carousel.Item>
                        ))
                    }
                </Carousel>
        }
        return (
            <div className={"silder-view " + this.props.dataFromChild}>
                {carouselView}
            </div>
        )
    }
}
 
export default SliderView;