import React, { Component } from "react";
import dataJson from '../data/demo.json';

class InstagramImages extends Component {
    render() {
        return (
            <div className="instagram-images">
                <p className="text-center title">#INSTAGRAM</p>
                {
                    dataJson.instagram_images.map((contact, index) => (
                        <a href={contact.instagram_images} key={index} rel="noreferrer" target="_blank">
                            <img src={contact.imageUrl} alt={index} />
                        </a>
                    ))
                }
            </div>
        )
    }
}
 
export default InstagramImages;