import React from "react";
import dataJson from '../data/demo.json';
import Carousel from 'react-bootstrap/Carousel'

const SliderView = (props) => {
    return (
        <div className={"silder-view " + props.class}>
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
 
export default SliderView;