import React, { Component } from 'react';
import Message from './Message';
import Counter from './Counter';
import Input from './Input';
import StopWatch from './StopWatch';
import Form from './Form';

class App extends Component {
  render() {
    return (
        <div>
            <div className="container">
                <div className="border-b p-8 items-center justify-center">
                    <Message message="Hej! Jag är en prop." />
                </div>
                <div className="border-b p-8 items-center justify-center">
                    <Counter label="Click me" />
                </div>
                <div className="border-b p-8 items-center justify-center">
                    <Input />
                </div>
                <div className="border-b p-8 items-center justify-center">
                    <StopWatch />
                </div>
                 <div className="border-b p-8 items-center justify-center">
                    <Form />
                </div>
            </div>
        </div>
    );
  }
}

export default App;
