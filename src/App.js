import React from 'react';
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

function App() {
    const components = [
        {
            id: "slider_images",
            content: "Slider View",
            componentName: SliderView,
            className: "visible"
        }, 
        {
            id: "image_grid",
            content: "Image Grid",
            componentName: ImageGrid,
            className: "hide"
        },
        {
            id: "banner_array",
            content: "Banner Image",
            componentName: BannerImage,
            className: "hide"
        },
        {
            id: "products",
            content: "Products",
            componentName: Products,
            className: "hide"
        },
        {
            id: "instagram_images",
            content: "Instagram Images",
            componentName: InstagramImages,
            className: "hide"
        }
    ];
    const componentsToRender = components.map((cmp, i) => (
        <cmp.componentName key={i} />
    ));
    return (
        <div className="container app">
            <div className="d-flex">
                <div className="drag-and-drop">
                    <h1>Customize Your App</h1>
                    <DragandDrop data={components} />
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
                            {componentsToRender}
                        </ScrollArea>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
