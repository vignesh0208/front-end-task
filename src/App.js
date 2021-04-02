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

function App() {
    const components = [SliderView, ImageGrid, BannerImage, Products, InstagramImages];
    const componentsToRender = components.map((Component, i) => (
        <Component key={i} />
    ));
    return (
        <div className="container app">
            <div className="d-flex">
                <div className="drag-and-drop">
                    <h1>Customize Your App</h1>
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
