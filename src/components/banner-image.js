import React, { Component } from "react";
import dataJson from '../data/demo.json'

class BannerImage extends Component {
    render() {
        return (
            <div className="banner-image">
                <img src={dataJson.banner_array[1].image} alt="banner" />
            </div>
        )
    }
}
 
export default BannerImage;