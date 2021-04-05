import React, { Component } from "react";
import PropTypes from "prop-types";

class ButtonView extends Component {
    static propTypes = {
        className: PropTypes.string,
        buttonClassName: PropTypes.string,
        type: PropTypes.string,
        label: PropTypes.string,
        imageView: PropTypes.string,
        onPress: PropTypes.func
    };
    
    static defaultProps = {
        className: "",
        buttonClassName: "",
        type: "",
        label: "",
        onPress: "",
        imageView: ""
    };

    render() {
        const {
            className,
            buttonClassName,
            type,
            label,
            onPress,
            imageView
        } = this.props;

        let buttonChange;
        if(imageView) {
            buttonChange = <button type={type} className={buttonClassName} onClick={onPress}>                   
                                <img src={imageView} alt={buttonClassName} />
                            </button>
        }
        else {
            buttonChange = <button type={type} className={buttonClassName} onClick={onPress}>{label}</button>
        }

        return (
            <div className={className}>{buttonChange}</div>
        )
    }
}
 
export default ButtonView;