import React from "react";
import dataJson from '../../data/demo.json'

class ImageGrid extends React.Component {
    render() {
        const details = this.props.dataforMobile;
        let imageGridView;
        if(details) {
            imageGridView = 
                <div className="d-flex">
                    {
                        details.image_grid.map((contact, index) => (
                            <a href={contact.url} key={index} className="image-card" rel="noreferrer" target="_blank">
                                <img src={contact.image} alt={contact.name} />
                                <div className="name">{contact.name}</div>
                            </a>
                        ))
                    }
                </div>
        }
        else {
            imageGridView = 
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
        }
        return (
            <div className={"imageGrid " + this.props.dataFromChild}>
                {imageGridView}
            </div>
        )
    }
}
 
export default ImageGrid;