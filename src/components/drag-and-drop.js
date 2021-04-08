import React, { Component } from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DragHandleIcon from "../image/dots-menu.svg";
import ButtonView from "../components/button-view";
import ScrollArea from 'react-scrollbar';
import Copy from "../image/copy.svg";
import Delete from "../image/delete.svg";
import InsideCard from "../components/inside-card"
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

toast.configure();

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
        this.insideCard = this.insideCard.bind(this);
    }
    insideCard = (param) => {
        this.props.getInnerCardData(param)
    }
    onDragEnd = (result) => {
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
            items
        })
        this.props.someFunctionHere(items)
    }
    onDelete = (result) => {
        toast.error('Deleted Successfully', {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
        const reducedArr = [...this.state.items];
        reducedArr.splice(result, 1);
        this.setState({ items: reducedArr });
        this.props.someFunctionHere(reducedArr)
    }
    onDuplicate = (result, index) => {
        toast.success('Successfully Duplicated', {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
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
        if(reducedArr[index].className === "visible") {
            reducedArr[index].className = "hide";
        }
        else {
            for(var i=0; i < reducedArr.length; i++) {
                reducedArr[i].className = "hide";
            }
            reducedArr[index].className = "visible"
        }
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
                                    <Draggable key={i} draggableId={item.dataJson} index={i}>
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
                                                    <InsideCard data={this.state.data} indexValue={i} insideCard={this.insideCard} />
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