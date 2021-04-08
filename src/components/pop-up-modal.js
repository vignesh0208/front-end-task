import React, { Component } from "react";
import { Modal, Button } from 'react-bootstrap';
import  Alart from '../image/alart.svg'

class PopUpModel extends Component {
    constructor() {
        super()
        this.onDelete = this.onDelete.bind(this)
    }
    onDelete = (index) => {
        this.props.popupDelete(index)
    }
    render() {
        return (
            <Modal
                show={this.props.show}
                dialogClassName="modal-15w"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Body className="d-flex flex-column p-5 justify-content-center text-center">
                    <img src={Alart} alt="Alart" />
                    <h4>Are you sure?</h4>
                    <p>You're about to delete an item from this widget. Are you sure you want to delete it?</p>
                    <div class="d-flex justify-content-around">
                        <Button variant="primary" onClick={() => this.onDelete(this.props.indexValue)}>Yes, delete it!</Button>
                        <Button variant="danger" onClick={this.props.onHide}>Cancel</Button>
                    </div>
                </Modal.Body>
          </Modal>
        )
    }
}

export default PopUpModel;