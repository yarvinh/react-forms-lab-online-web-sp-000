import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      maxChars: props.maxChars,
      value: ""
    };
  }
  handleMessage = (e) =>{

        this.setState({
           value: e.target.value,
           maxChars: this.state.maxChars -= 1
        })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" onChange={this.handleMessage}  name="message" id="message" value={this.state.value}/>
        <span>{this.state.maxChars}</span>
      </div>
    );
  }
}

export default TwitterMessage;
