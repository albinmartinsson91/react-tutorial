import React, { Component } from 'react';
import Message from './Message'

class App extends Component {
  render() {
    return (
      <div>
         <Message message="Hej! Jag är en prop." />
      </div>
    );
  }
}

export default App;
