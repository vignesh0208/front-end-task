import React from "react";
import dataJson from '../data/demo.json';

const InstagramImages = (props) => {
    return (
        <div className={"instagram-images " + props.class}>
            <p className="text-center title">#INSTAGRAM</p>
            <div className="d-flex">
                {
                    dataJson.instagram_images.map((contact, index) => (
                        <a href={contact.instagram_images} key={index} rel="noreferrer" target="_blank">
                            <img src={contact.imageUrl} alt={index} />
                        </a>
                    ))
                }
            </div>
        </div>
    )
}

export default InstagramImages;