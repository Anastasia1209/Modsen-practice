import React, { Component } from "react";

class ToggleButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShown: false,
    };
  }

  toggleButton = () => {
    this.setState((prevState) => ({
      isShown: !prevState.isShown,
    }));
  };
  render() {
    const { isShown } = this.state;
    const buttonText = isShown ? "Hide" : "Show";

    return (
      <div>
        <button onClick={this.toggleButton}>{buttonText}</button>
      </div>
    );
  }
}

export default ToggleButton;
