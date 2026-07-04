import React from 'react';
import Child from './Child';

// MIDDLE LEVEL — does NOT use message itself, just relays it
class Parent extends React.Component {
  render() {
    return (
      <div>
        <p>Parent component (just passing it along)</p>
        {/* Parent -> Child: forwarding both props it received */}
        <Child message={this.props.message} onButtonClick={this.props.onButtonClick} />
      </div>
    );
  }
}

export default Parent;


/*
Parent.jsx (middle — pure pass-through, "drilling")

Doesn't use message or onButtonClick for anything of its own.
Just receives both via this.props and forwards them unchanged to <Child />.
Demonstrates prop drilling: data/functions must be manually relayed through every level, even ones that don't need them.
*/