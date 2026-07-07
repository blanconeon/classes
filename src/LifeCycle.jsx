import React from 'react';

export class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [] };
  }

  fetchMenuItems(){
    // Menu fetch logic omitted
  }

  cleanUp(){
    // Logic to clean up previous menu items omitted
  }

  // Fetch menu items when the component loads
  componentDidMount() { // runs once, right after the component first renders
    fetchMenuItems();
  }

  // Clean up existing menu items and render the new items when an update occurs
  // If the contents of the component are the same (i.e., props are the same), just return
  componentDidUpdate(prevProps) { // runs after every re-render caused by new props/state; gives access to the previous props for comparison
    if (this.props.cuisine === prevProps.cuisine) {
      return; // skip if cuisine prop hasn't changed
    }

    cleanUp();
    fetchMenuItems();
  }

  // Clean up existing menu items when the component is no longer in use
  componentWillUnmount() { // runs right before the component is removed from the DOM
    cleanUp();
  }

  render() {
    return (
      /* Render elements omitted */
    )
  }
}

/*
 You're not calling these functions yourself; you're telling React "run this function automatically at this specific point in the component's life," and React handles calling them for you, at the right time, the right number of times.
Exactly when/how many times each one runs:

componentDidMount → runs exactly once, right after the component appears on screen for the first time. Never again after that.
componentDidUpdate → runs every single time the component re-renders due to a state or prop change — could be many times over the component's life. (That's why your code has the if (this.props.cuisine === prevProps.cuisine) return; check — to avoid doing unnecessary work on updates where nothing relevant actually changed.)
componentWillUnmount → runs exactly once, right before the component is removed/destroyed (e.g., user navigates away, parent stops rendering it).

The mental model: React manages a component's whole lifespan — birth (mount) → life (updates) → death (unmount) — and these methods are just hooks into that timeline that React calls automatically. You never write componentDidMount() yourself as a function call; you just define what should happen at that moment, and React takes care of invoking it correctly.
*/