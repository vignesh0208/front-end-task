import React, { Component } from "react";
import dataJson from '../data/demo.json'

class BannerImage extends Component {
    componentDidMount() {
        console.log("+++ dataJson: ", dataJson.banner_array[0]);
    }
    render() {
        return (
            <div className="banner-image">
                <img src={dataJson.banner_array[1].image} alt="banner" />
            </div>
        )
    }
}
 
export default BannerImage;