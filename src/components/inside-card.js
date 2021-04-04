import React, { Component } from "react";
import PropTypes from "prop-types";
import dataJson from '../data/demo.json';
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
  
    return result;
};

const grid = 8;

const getItemStyle = (isDragging, draggableStyle) => ({
    // some basic styles to make the items look a bit nicer
    userSelect: "none",
    padding: grid * 2,
    margin: `0 ${grid}px 0 0`,
  
    // change background colour if dragging
    background: isDragging ? "lightgreen" : "grey",
  
    // styles we need to apply on draggables
    ...draggableStyle
});
  
const getListStyle = (isDraggingOver) => ({
    background: isDraggingOver ? "lightblue" : "lightgrey",
    display: "flex",
    padding: grid,
    overflow: "auto"
});

class SliderImages extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: dataJson.slider_images
        };
        this.onDragEnd = this.onDragEnd.bind(this);
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
                            className="col-4"
                            style={getItemStyle(
                                snapshot.isDragging,
                                provided.draggableProps.style
                            )}
                            >
                            <img src={item.image} alt="image drag" />
                            </div>
                        )}
                        </Draggable>
                    ))}
                    {provided.placeholder}
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
    constructor(props) {
        super(props);

        this.state = {
            currentTab: "slider_images"
        };
    }
    static propTypes = {
        className: PropTypes.string,
    };
    
    static defaultProps = {
        className: "",
    };

    render() {
        const {
            className,
        } = this.props;

        console.log(this.state.currentTab)
        const project = () => {
            switch(this.state.currentTab) {
                case 'slider_images': return <SliderImages />
                case 'image_grid' : return <ImageGrid />
                case 'banner_array': return <BannerArray />
                case 'products': return <Products />
                case 'instagram_images': return <InstagramImages />
                default: return '';
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