import React, {Component} from 'react';

class Counter extends Component {
  constructor(props) {
    console.log("constructor");
    super(props);
    this.state = {
        count: 0
    };
  }

  increase() {
    this.setState({
        count: this.state.count + 1
    });
  }

  decrease() {
    this.setState({
        count: this.state.count - 1
    });
  }



  render () {
    console.log('counter render')
    return (
    <div className="Counter">
       <button onClick={()=>this.increase()}>+</button>
       <span>{this.state.count}</span>
       <button onClick={()=>this.decrease()}>-</button>
    </div>
    );
  }

  componentDidMount() { //được gọi 1 lần duy nhất, render lần đầu tiên
      console.log("componentDidMount");
  }

  componentDidUpdate() {//sẻ được goi khi render chay xong, nhung ko duoc goi o lan dau tien
    console.log("componentDidUpdate");
  }

  componentWillUnmount() { //bi gỡ ra khỏi dom
    console.log("componentWillUnmount");
  }

  shouldComponentUpdate(nextProps, nextState) { //thua ke cac class
    // return false ;// ko render nua
    console.log('adsdf', nextState);
    if(this.state.count === nextState.count) {
      return false;
    }
    return true;
  }

}

export default Counter;
