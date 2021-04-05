import React from "react";
import dataJson from '../data/demo.json'

class ImageGrid extends React.Component {
    render() {
        return (
            <div className={"imageGrid " + this.props.dataFromChild}>
                <div className="d-flex">
                    {
                        dataJson.image_grid.map((contact, index) => (
                            <a href={contact.url} key={index} className="image-card" rel="noreferrer" target="_blank">
                                <img src={contact.image} alt={contact.name} />
                                <div className="name">{contact.name}</div>
                            </a>
                        ))
                    }
                </div>
            </div>
        )
    }
}
 
export default ImageGrid;