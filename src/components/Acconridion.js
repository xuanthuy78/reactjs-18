import React, {Component} from 'react';
import PropTypes from 'prop-types';
class Acconridion extends React.Component {
  constructor() {
    super();
    this.state = {
      isCollapsed : true, //đóng
      title: 'string'
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
    const {isCollapsed, title} = this.state;
    return (
      <div className="Acconridion">
        <div onClick={() => this.onClick()} className="Heading">
          <h1>{heading} {title}</h1>
        </div>
        { !isCollapsed && <div className="Content">{children}</div> }
      </div>
    );
  }
}

Acconridion.propTypes = {
  title : PropTypes.number,
  isCollapsed : PropTypes.bool
};

export default Acconridion;
