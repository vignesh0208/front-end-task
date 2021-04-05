import React from "react";
import dataJson from '../data/demo.json'

class BannerImage extends React.Component {
    render() {
        return (
            <div className={"banner-image " + this.props.dataFromChild}>
                <img src={dataJson.banner_array[1].image} alt="banner" />
            </div>
        )
    }
}
 
export default BannerImage;