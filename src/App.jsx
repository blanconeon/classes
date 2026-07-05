import React from 'react';
import Parent from './Parent';

// TOP LEVEL — owns the data
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { message: 'Hello from App!' };
  }

  changeMessage = () => {
    this.setState({ message: 'Button was clicked!' });
  };

  render() {
    return (
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <h1>Prop Drilling Practice</h1>
        {/* App -> Parent: passing "message" AND the method down as props */}
        <Parent message={this.state.message} onButtonClick={this.changeMessage} />
      </div>
    );
  }
}

export default App;

/* 
App.jsx (top-level — owns the data and the logic)

constructor(props) + super(props) — required boilerplate; super(props) makes this.props available.
this.state = { message: 'Hello from App!' } — state is React's reserved keyword for trackable data. Set directly like this only inside the constructor.
changeMessage = () => { this.setState({...}) } — a method that updates state. Never reassign this.state directly; always go through this.setState(...) so React knows to re-render.
render() returns <Parent message={this.state.message} onButtonClick={this.changeMessage} /> — sends both the data (message) and a reference to the method itself (onButtonClick, no ()) down as props.


Core takeaway:

state lives in exactly one place (App). It's read and updated only where it's declared. To let a child trigger a change, you pass down a method as a prop (a "callback prop") — the child calls it, but the actual state update still only happens inside App.








App sends message. but Parent has no props parameter??
---
Right — that's a class-component quirk. Parent.jsx doesn't even define a constructor, yet this.props.message still works inside render(). Here's why:

Function components need an explicit parameter because props are just the function's first argument:


function Parent(props) {
  return <Child message={props.message} />;
}
Class components don't take props as a parameter to any of their methods. Instead, React's base React.Component class does this internally when it creates the instance:


// (simplified, inside React itself)
class Component {
  constructor(props) {
    this.props = props;
  }
}
So every instance automatically gets this.props set to whatever was passed in JSX (<Parent message={...} />), before render() is ever called. You only need to write your own constructor(props) { super(props); } if you want to touch this.props inside the constructor itself (e.g. to set this.state based on a prop) — like App.jsx does:


constructor(props) {
  super(props);
  this.state = { message: 'Hello from App!' };
}
Parent has no constructor and no need to touch props early, so it skips that boilerplate entirely and just reads this.props.message directly in render() — React already attached it to the instance by the time render() runs.
*/