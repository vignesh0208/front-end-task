import React, { Component } from "react";
import dataJson from '../data/demo.json'

class ImageGrid extends Component {
    render() {
        return (
            <div className="imageGrid">
                {
                    dataJson.image_grid.map((contact, index) => (
                        <a href={contact.url} key={index} className="image-card" rel="noreferrer" target="_blank">
                            <img src={contact.image} alt={contact.name} />
                            <div className="name">{contact.name}</div>
                        </a>
                    ))
                }
            </div>
        )
    }
}
 
export default ImageGrid;