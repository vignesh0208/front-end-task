import React, { Component } from "react";
import SliderImages from './insideCadeDrag/slider-images';
import ImageGrid from './insideCadeDrag/image-grid';
import BannerArray from './insideCadeDrag/banner-array';
import Products from './insideCadeDrag/products';
import InstagramImages from './insideCadeDrag/instagram-images';
import dataJson from '../data/demo.json'

class InsideCard extends Component {
    constructor() {
        super();
        this.someFunction = this.someFunction.bind(this);
    }
    someFunction(param) {
        console.log(param);
    }
    render() {
        const project = () => {
            switch(this.props.data) {
                case 'slider_images': return <SliderImages data={dataJson.slider_images} someFunction={this.someFunction} />
                case 'image_grid' : return <ImageGrid data={dataJson.image_grid} someFunction={this.someFunction} />
                case 'banner_array': return <BannerArray data={dataJson.banner_array} someFunction={this.someFunction} />
                case 'products': return <Products data={dataJson.products} someFunction={this.someFunction} />
                case 'instagram_images': return <InstagramImages data={dataJson.instagram_images} someFunction={this.someFunction} />
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