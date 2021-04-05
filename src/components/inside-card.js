import React, { Component } from "react";
import dataJson from '../data/demo.json';
import Delete from '../image/delete.svg'
import { ReactComponent as AddButton  } from '../image/add.svg'
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import ButtonView from '../components/button-view';
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
    // styles we need to apply on draggables
    ...draggableStyle
});
  
const getListStyle = (isDraggingOver) => ({
    display: "flex",
});

class SliderImages extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: dataJson.slider_images,
            showHide : false
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
                                                        <Popover.Title as="h3">Popover Top</Popover.Title>
                                                        <Popover.Content>
                                                        <strong>Holy guacamole!</strong> Check this info.
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

const ImageGrid = (props) => {
    return(
        <div>
            ImageGrid
        </div>
    )
}

const BannerArray = (props) => {
    return(
        <div>
            BannerArray
        </div>
    )
}

const Products = (props) => {
    return(
        <div>
            Products
        </div>
    )
}

const InstagramImages = (props) => {
    return(
        <div>
            InstagramImages
        </div>
    )
}

class InsideCard extends Component {
    render() {
        const project = () => {
            switch(this.props.data) {
                case 'slider_images': return <SliderImages />
                case 'image_grid' : return <ImageGrid />
                case 'banner_array': return <BannerArray />
                case 'products': return <Products />
                case 'instagram_images': return <InstagramImages />
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