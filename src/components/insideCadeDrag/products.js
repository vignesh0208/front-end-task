import React, { Component } from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Delete from '../../image/delete.svg'
import { ReactComponent as AddButton  } from '../../image/add.svg'
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import ButtonView from '../button-view';
import {OverlayTrigger, Popover, Button} from 'react-bootstrap';

toast.configure();

const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
  
    return result;
};

const getItemStyle = (isDragging, draggableStyle) => ({
    // some basic styles to make the items look a bit nicer
    userSelect: "none",
    ...draggableStyle
});
  
const getListStyle = (isDraggingOver) => ({
    display: "flex",
});

class Products extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: this.props.data,
            input: '',
        };
        this.onDragEnd = this.onDragEnd.bind(this);
        this.open = false;
    }
    onDragEnd(result) {
        toast.success('Changes Saved Successfully', {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
        // dropped outside the list
        if (!result.destination) {
            return;
        }
    
        const items = reorder(
            this.state.items,
            result.source.index,
            result.destination.index
        );
    
        this.setState({
            items,
        });
        this.props.someFunction(items)
    }
    updateUrl(index) {
        toast.success('Changes Saved Successfully', {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
        const reducedArr = [...this.state.items];
        this.setState({ 
            item: reducedArr,
            input: this.state.input
        });
        if(this.state.input !== '') {
            reducedArr[index].title = this.state.input;
            this.setState({ items: reducedArr });
        }
        this.props.someFunction(reducedArr)
    }
    updateUrlLink = (index) => {
        toast.success('Changes Saved Successfully', {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
        const reducedArr = [...this.state.items];
        this.setState({ 
            item: reducedArr,
            input: this.state.input
        });
        if(this.state.input !== '') {
            reducedArr[index].url = this.state.input;
            this.setState({ items: reducedArr });
        }
        this.props.someFunction(reducedArr)
    }
    handleChange = (e) => {
        e.preventDefault()
        const value = e.target.value 
        this.setState({ 
            input: value
        });
    }
    handleModalShowHide() {
        this.setState({ showHide: !this.state.showHide })
    }
    render() {
        return(
            <DragDropContext onDragEnd={this.onDragEnd}>
                <Droppable droppableId="droppable">
                {(provided, snapshot) => (
                    <div
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                    style={getListStyle(snapshot.isDraggingOver)}
                    className="row"
                    >
                    {this.state.items.map((item, index) => (
                        <Draggable key={index} draggableId={"value-"+ index} index={index}>
                        {(provided, snapshot) => (
                            <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            className="col-4 drag-card-view"
                            style={getItemStyle(
                                snapshot.isDragging,
                                provided.draggableProps.style
                            )}
                            >
                                <div className="image-card">
                                    <div className="image-view">
                                        <img src={item.image_url} alt="sample" />
                                    </div>
                                    <div className="d-flex w-100">
                                        <ButtonView type="submit" className="button-submit" buttonClassName="w-100" label="Upload" />
                                        <div className="button-submit">
                                            <OverlayTrigger
                                                trigger="click" 
                                                placement="top"
                                                overlay={
                                                    <Popover id="popover-positioned-top">
                                                        <Popover.Content>
                                                            <p className="title">Title:</p>
                                                            <div className="input-save">
                                                                <input type="text" defaultValue={item.title} onChange={(e) => this.handleChange(e) } />
                                                                <button type="button" onClick={() => this.updateUrl(index)}>Save</button>
                                                            </div>
                                                            <p className="title">URL:</p>
                                                            <div className="input-save">
                                                                <input type="text" defaultValue={item.url} onChange={(e) => this.handleChange(e) } />
                                                                <button type="button" onClick={() => this.updateUrlLink(index)}>Save</button>
                                                            </div>
                                                        </Popover.Content>
                                                    </Popover>
                                                }
                                                >
                                                <Button variant="secondary" className="w-100">Edit</Button>
                                            </OverlayTrigger>
                                        </div>
                                        <ButtonView type="submit" className="button-submit button-img" buttonClassName="w-100" imageView={Delete} />
                                    </div>
                                </div>
                            </div>
                        )}
                        </Draggable>
                    ))}
                    {provided.placeholder}
                        <div className="col-4 drag-card-view">
                            <div className="image-card background">
                                <AddButton />
                            </div>
                        </div>
                    </div>

                )}
                </Droppable>
            </DragDropContext>
        )
    }
}

export default Products;