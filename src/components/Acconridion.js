import React, {Component} from 'react';

class Acconridion extends Component {
  constructor() {
    super();
    this.state = {
      isCollapsed : true //đóng
    };
    // this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({
      isCollapsed : !this.state.isCollapsed
    })
  }

  render () {
    const {heading, children} = this.props;
    const {isCollapsed} = this.state;
    return (
      <div className="Acconridion">
        <div onClick={() => this.onClick()} className="Heading">
          <h1>{heading}</h1>
        </div>
        { !isCollapsed && <div className="Content">{children}</div> }
      </div>
    );
  }
}

export default Acconridion;
