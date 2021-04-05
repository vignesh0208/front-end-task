import React from "react";
import dataJson from '../data/demo.json'

const BannerImage = (props) => {
    return (
        <div className={"banner-image " + props.class}>
            <img src={dataJson.banner_array[1].image} alt="banner" />
        </div>
    )
}
 
export default BannerImage;