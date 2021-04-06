import React from "react";
import dataJson from '../../data/demo.json';

class InstagramImages extends React.Component {
    render() {
        const details = this.props.dataforMobile;
        let instagramView;
        if(details) {
            instagramView = 
                <div className="d-flex">
                    {
                        dataJson.instagram_images.map((contact, index) => (
                            <a href={contact.instagram_images} key={index} rel="noreferrer" target="_blank">
                                <img src={contact.imageUrl} alt={index} />
                            </a>
                        ))
                    }
                </div>
        }
        else {
            instagramView = 
                <div className="d-flex">
                    {
                        dataJson.instagram_images.map((contact, index) => (
                            <a href={contact.instagram_images} key={index} rel="noreferrer" target="_blank">
                                <img src={contact.imageUrl} alt={index} />
                            </a>
                        ))
                    }
                </div>
        }
        return (
            <div className={"instagram-images " + this.props.dataFromChild}>
                <p className="text-center title">#{dataJson.instagram_name}</p>
                {instagramView}
            </div>
        )
    }
}

export default InstagramImages;