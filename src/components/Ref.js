import React from 'react';
import PropTypes from 'prop-types';

class Ref extends React.Component {
  constructor(props) {
    super(props);
    this.inputElement = React.createRef(); //tham chieu den input

    // setTimeout(() => this.inputElement.current.focus(), 5000)
    

  }

  componentDidMount() {
    this.inputElement.current.focus()
  }

  render () {
    return (
    <div className="Ref">
        <input type="text" ref={this.inputElement} />
    </div>
    );
  }
}

export default Ref;
