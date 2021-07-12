import React from 'react';
import './App.css';

function App() {

  const ref = React.useRef();

  const focus = () => ref.current.focus();

  return (
    <div className="App">
      <input ref={ref} placeholder="my input" type="text"/>
      <button onClick={focus}>Click me</button>
    </div>
  );
}

export default App;
