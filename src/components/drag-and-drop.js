import React, { Component } from "react";
import DragHandleIcon from "../image/dots-menu.svg";
import ButtonView from "../components/button-view";
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
            data: "",
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
        this.props.someFunctionHere(items)
    }
    onDelete = (result) => {
        const reducedArr = [...this.state.items];
        reducedArr.splice(result, 1);
        this.setState({ items: reducedArr });
        this.props.someFunctionHere(reducedArr)
    }
    onDuplicate = (result, index) => {
        const reducedArr = [...this.state.items];
        const newArr = reducedArr.map(e => Object.assign({}, e));
        newArr.splice(index, 0, result);
        newArr.forEach((e, i) => e.id = i + 1);
        newArr[index].className = "hide"
        this.setState({ items: newArr });
        this.props.someFunctionHere(newArr)
    }
    onHideShowView = (index) => {
        const reducedArr = [...this.state.items];
        if(reducedArr[index].showHide === "Hide") {
            reducedArr[index].showHide = "Show"
        }
        else {
            reducedArr[index].showHide = "Hide"
        }
        this.setState({ items: reducedArr });
        this.props.someFunctionHere(reducedArr)
    }
    onDisplayData = (index) => {
        const reducedArr = [...this.state.items];
        console.log(reducedArr[index].className, index);
        if(reducedArr[index].className === "visible") {
            reducedArr[index].className = "hide";
            console.log("hide");
        }
        else {
            for(var i=0; i < reducedArr.length; i++) {
                reducedArr[i].className = "hide";
            }
            reducedArr[index].className = "visible"
            console.log("visible");
        }
        console.log(reducedArr, index)
        this.setState({ items: reducedArr, data: reducedArr[index].dataJson });
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
                                                        <p className={item.showHide}>{item.content}</p>
                                                    </div>
                                                    <div className="customise-button">
                                                        <ButtonView type="submit" className={"button-submit button-img " + item.className} buttonClassName="w-100" imageView={Copy} onPress={() => this.onDuplicate(item, i)} />
                                                        <ButtonView type="submit" className={"button-submit button-img " + item.className} buttonClassName="w-100" imageView={Delete} onPress={() => this.onDelete(i)} />
                                                        <ButtonView type="submit" className={"button-submit hide-show " + item.className} buttonClassName="w-100" label={item.showHide} onPress={() => this.onHideShowView(i)} />
                                                        <ButtonView type="submit" className="button-submit" buttonClassName="w-100" label="Customise" onPress={() => this.onDisplayData(i)} />
                                                    </div>
                                                </div>
                                                <ScrollArea speed={0.8} className={"drag-scroll " + item.className}  horizontal={false}>
                                                    <InsideCard data={this.state.data} />
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