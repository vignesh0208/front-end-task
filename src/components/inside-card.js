import React, { Component } from "react";
import SliderImages from './insideCadeDrag/slider-images';
import ImageGrid from './insideCadeDrag/image-grid';
import BannerArray from './insideCadeDrag/banner-array';
import Products from './insideCadeDrag/products'
import InstagramImages from './insideCadeDrag/instagram-images'

class InsideCard extends Component {
    render() {
        const project = () => {
            switch(this.props.data) {
                case 'slider_images': return <SliderImages />
                case 'image_grid' : return <ImageGrid />
                case 'banner_array': return <BannerArray />
                case 'products': return <Products />
                case 'instagram_images': return <InstagramImages />
                default: return ;
            }
        }
        return (
            <div>
                { project() }
            </div>
        )
    }
}

export default InsideCard;