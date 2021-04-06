import React, { Component } from "react";
import dataJson from '../data/demo.json';
import Carousel from 'react-bootstrap/Carousel';
import dataHolding from './data-holding';

class SliderView extends Component {
    constructor() {
        super();
        this.state = {
            items: ''
        }
        this.dataHolding = this.dataHolding.bind(this);
    }
    dataHolding = () => {
        this.setState({
            items: dataHolding.setData()
        })
    }
    render() {
        const details = this.state.items;
        let carouselView;
        if(details) {
            carouselView = 
                <Carousel>
                    {
                        details.map((contact, index) => (
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