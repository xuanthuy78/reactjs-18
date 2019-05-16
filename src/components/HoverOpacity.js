import React, { Component } from 'react';

export default class HoverOpacity extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isHovered : false
        }
    }

    onMouseEnter() {
        console.log('đâfasdfsa');
        this.setState({
            isHovered : true
        })
    }

    onMouseLeave() {
        console.log('đâfasdfsa');
        this.setState({
            isHovered : false
        })
    }

    render() {
        return (
            <div
                style = {{
                    opacity: this.state.isHovered ? 0.5 : 1
                }}

                onMouseEnter = {this.onMouseEnter.bind(this)}
                onMouseLeave = {this.onMouseLeave.bind(this)}
            >
                {this.props.children}
            </div>
        )
    }
}