import React, { Component } from "react";
import DragHandleIcon from "../image/dots-menu.svg";
import Button from "../components/button";
import ScrollArea from 'react-scrollbar';
import Copy from "../image/copy.svg";
import Delete from "../image/delete.svg";
import InsideCard from "../components/inside-card"
// import dataJson from '../data/demo.json';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
  
    return result;
};

class DragDrop extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: this.props.data,
            targetId: "slider_images",
        };
        this.onDragEnd = this.onDragEnd.bind(this);
    }
    onDragEnd = (result) => {
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
            items
        })
    }
    onDelete = (result) => {
        const reducedArr = [...this.state.items];
        reducedArr.splice(result, 1);
        this.setState({ items: reducedArr });
    }
    onDuplicate = (result, index) => {
        const reducedArr = [...this.state.items];
        reducedArr.splice(index, 0, result);
        this.setState({ items: reducedArr });
    }
    onDisplayData = (result) => {
        const reducedArr = [...this.state.items];
        if(reducedArr[result].className === "hide") {
            reducedArr[result].className = "visible";
        }
        else {
            reducedArr[result].className = "hide";
        }
        this.setState({ items: reducedArr, targetId: reducedArr[result].id });
    }
    render() {
        return (
            <DragDropContext onDragEnd={this.onDragEnd}>
                <div className="drag-drop">
                    <Droppable droppableId="droppable-1">
                        {(provided, snapshot) => (
                            <div ref={provided.innerRef} {...provided.droppableProps}>
                                {this.state.items.map((item, i) => (
                                    <Draggable key={item.id} draggableId={item.id} index={i}>
                                        {(provided, snapshot) => (
                                            <div ref={provided.innerRef} {...provided.draggableProps} className="drag-area">
                                                <div className="d-flex justify-content-between">
                                                    <div className="drag-icon">
                                                        <img src={DragHandleIcon} alt="drag icon" {...provided.dragHandleProps} />
                                                        <p>{item.content}</p>
                                                    </div>
                                                    <div className="customise-button">
                                                        <Button type="submit" className={"button-submit button-img " + item.className} buttonClassName="w-100" imageView={Copy} onPress={() => this.onDuplicate(item, i)} />
                                                        <Button type="submit" className={"button-submit button-img " + item.className} buttonClassName="w-100" imageView={Delete} onPress={() => this.onDelete(i)} />
                                                        <Button type="submit" className={"button-submit hide-show " + item.className} buttonClassName="w-100" label="Hide" />
                                                        <Button type="submit" className="button-submit" buttonClassName="w-100" label="Customise" onPress={() => this.onDisplayData(i)} />
                                                    </div>
                                                </div>
                                                <ScrollArea speed={0.8} className={"drag-scroll " + item.className}  horizontal={false}>
                                                    <InsideCard className="row" />
                                                </ScrollArea>
                                            </div>
                                        )}
                                    </Draggable>
                                ))}
                                {provided.placeholder}
                            </div>
                        )}
                    </Droppable>
                </div>
            </DragDropContext>
        )
    }
}
 
export default DragDrop;