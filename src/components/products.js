import React from "react";
import dataJson from '../data/demo.json'

class products extends React.Component {
    render() {
        return (
            <div className={"products " + this.props.dataFromChild}>
                <p className="text-center title">New Arrivals</p>
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
            </div>
        )
    }
}
 
export default products;