import React, { Component } from "react";
import { Modal, Button } from 'react-bootstrap';

class PopUpModel extends Component {
    render() {
        return (
            <Modal
                show={this.props.show}
                dialogClassName="modal-50w"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Body className="d-flex flex-column p-4 justify-content-center">
                    <h4>Are you sure?</h4>
                    <p>You're about to delete an item from this widget. Are you sure you want to delete it?</p>
                    <div class="d-flex justify-content-around">
                        <Button variant="primary" onClick={this.props.onDelete}>Yes, delete it!</Button>
                        <Button variant="danger" onClick={this.props.onHide}>Cancel</Button>
                    </div>
                </Modal.Body>
          </Modal>
        )
    }
}

export default PopUpModel;