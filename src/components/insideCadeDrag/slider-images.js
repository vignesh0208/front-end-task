import React, { Component } from "react";
import Delete from '../../image/delete.svg'
import { ReactComponent as AddButton  } from '../../image/add.svg'
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import ButtonView from '../button-view';
import {OverlayTrigger, Popover, Button} from 'react-bootstrap';


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

class SliderImages extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: this.props.data,
            input: ''
        };
        this.onDragEnd = this.onDragEnd.bind(this);
        this.open = false;
    }
    onDragEnd(result) {
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
        const reducedArr = [...this.state.items];
        if(this.state.input !== '') {
            reducedArr[index].collections = this.state.input;
            this.setState({ items: reducedArr });
        }
        this.props.someFunction(reducedArr);
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
                                        <img src={item.image} alt="sample" />
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
                                                            <p className="title">Collections:</p>
                                                            <div className="input-save">
                                                                <input type="text" value={item.collections} onChange={(e) => this.handleChange.bind(e) } />
                                                                <button type="button" onClick={() => this.updateUrl(index)}>Save</button>
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

export default SliderImages;