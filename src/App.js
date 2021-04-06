import React, { Component } from "react";
import iphoneMock from './image/iphone-mock.png';
import { ReactComponent as Menu } from './image/menu.svg';
import { ReactComponent as ShoppingCard } from './image/shopping-cart.svg';
import ImageGrid from './components/image-grid';
import BannerImage from './components/banner-image';
import Products from './components/products';
import InstagramImages from './components/instagram-images';
import SliderView from './components/slider-view';
import './App.scss';
import ScrollArea from 'react-scrollbar';
import DragandDrop from './components/drag-and-drop'

class App extends Component {
    constructor() {
        super();
        this.state = {
            components : [
                {
                    id: "1",
                    dataJson: "slider_images",
                    content: "Slider View",
                    componentName: SliderView,
                    className: "hide",
                    showHide: "Hide"
                }, 
                {
                    id: "2",
                    dataJson: "image_grid",
                    content: "Image Grid",
                    componentName: ImageGrid,
                    className: "hide",
                    showHide: "Hide"
                },
                {
                    id: "3",
                    dataJson: "banner_array",
                    content: "Banner Image",
                    componentName: BannerImage,
                    className: "hide",
                    showHide: "Hide"
                },
                {
                    id: "4",
                    dataJson: "products",
                    content: "Products",
                    componentName: Products,
                    className: "hide",
                    showHide: "Hide"
                },
                {
                    id: "5",
                    dataJson: "instagram_images",
                    content: "Instagram Images",
                    componentName: InstagramImages,
                    className: "hide",
                    showHide: "Hide"
                }
            ],
            componentsToRender: ''
        };
        this.someFunctionHere = this.someFunctionHere.bind(this);
    }
    someFunctionHere(param) {
        this.setState({
            componentsToRender: param.map((cmp, i) => (
                <cmp.componentName key={i} dataFromChild={cmp.showHide} />
            ))
        })
    }
    componentDidMount() {
        this.setState({
            componentsToRender: this.state.components.map((cmp, i) => (
                <cmp.componentName key={i} dataFromChild={cmp.showHide} />
            ))
        })
    }
    render() {
        return (
            <div className="container app">
                <div className="d-flex">
                    <div className="drag-and-drop">
                        <h1>Customize Your App</h1>
                        <DragandDrop data={this.state.components} someFunctionHere={this.someFunctionHere} />
                    </div>
                    <div className="iphone-view">
                        <img className="iphone-mock" src={iphoneMock} alt="iphone mock" />
                        <div className="view-details">
                            <div className="menuBar d-flex justify-content-around">
                                <Menu />
                                Vajro Test Store
                                <ShoppingCard />
                            </div>
                            <ScrollArea speed={0.8} className="scroll" horizontal={false}>
                                {this.state.componentsToRender}
                            </ScrollArea>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
