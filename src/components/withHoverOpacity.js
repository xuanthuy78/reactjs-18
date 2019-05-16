import React, { Component } from "react";
import { writeFileSync } from "fs";

export default function(WrappedComponent, Opacity) {
  return class extends Component {
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
                    opacity: this.state.isHovered ? Opacity : 1
                }}

                onMouseEnter = {this.onMouseEnter.bind(this)}
                onMouseLeave = {this.onMouseLeave.bind(this)}
            >
                {this.props.children}
                <WrappedComponent {...this.props} />
            </div>
        )
    }
  }
}