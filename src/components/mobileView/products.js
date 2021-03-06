import React from "react";
import dataJson from '../../data/demo.json'

class products extends React.Component {
    render() {
        const details = this.props.dataforMobile;
        let productsView;
        if(details) {
            productsView = 
                <div className="d-flex">
                    {
                        details.products.map((contact, index) => (
                            <a href={contact.url} key={index} className="image-card" rel="noreferrer" target="_blank">
                                <img src={contact.image_url} alt={contact.title} />
                                <div className="name">{contact.title}</div>
                                <div className="d-flex price"><div className="">{dataJson.currency}</div><div className="">{contact.selling_price}</div></div>
                            </a>
                        ))
                    }
                </div>
        }
        else {
            productsView = 
                <div className="d-flex">
                    {
                        dataJson.products.map((contact, index) => (
                            <a href={contact.url} key={index} className="image-card" rel="noreferrer" target="_blank">
                                <img src={contact.image_url} alt={contact.title} />
                                <div className="name">{contact.title}</div>
                                <div className="d-flex price"><div className="">{dataJson.currency}</div><div className="">{contact.selling_price}</div></div>
                            </a>
                        ))
                    }
                </div>
        }
        return (
            <div className={"products " + this.props.dataFromChild}>
                <p className="text-center title">New Arrivals</p>
                {productsView}
            </div>
        )
    }
}
 
export default products;