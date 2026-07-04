import React from 'react';

// BOTTOM LEVEL — finally uses the data
class Child extends React.Component {
  render() {
    return (
      <div>
        <h2>Child says: {this.props.message}</h2>
        <button onClick={this.props.onButtonClick}>Change message</button>
      </div>
    );
  }
}

export default Child;

/*

Child.jsx (bottom — consumes everything)

this.props.message — reads the data, displays it in <h2>.
<button onClick={this.props.onButtonClick}> — attaches the parent's method to a click event. No () here — passing the function by reference so React can call it later, only on click.
Clicking the button doesn't change anything in Child itself — it calls App's changeMessage, which updates App's state, which flows back down through props again, causing Child to re-render with the new message.
*/