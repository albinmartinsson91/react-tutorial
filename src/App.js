import React, { Component } from 'react';
import Message from './Message';
import Counter from './Counter';

class App extends Component {
  render() {
    return (
      <div>
         <Message message="Hej! Jag är en prop." />
         <Counter label="Click me" />
      </div>
    );
  }
}

export default App;
