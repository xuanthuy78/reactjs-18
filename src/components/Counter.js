import React, { Component } from 'react';

export default class Counter extends Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            name: "I love ReactJs",
            count: 0
        };
    }

    componentDidMount() {
        console.log("1");
        this.timeId = setInterval( () => {
            this.setState ({
                count: this.state.count + 1
            })
        }, 1000);
    }

    componentWillMount() {
        console.log("2");
        clearInterval(this.timeId);
    }
    render() {
        // return <div>{this.props.render(this.state.count)}</div>
        // return <div>{this.props.children(this.state.count)}</div>
        return <div>{this.props.children(this.state)}</div>
    }
}