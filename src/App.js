import React from 'react';
import HeaderComponent from './header/HeaderComponent';
import TodoContentComponent from './todos/TodoContentComponent';

function App() {
  return (
    <div className="App">
      <HeaderComponent />
      <TodoContentComponent />
    </div>
  );
}

export default App;
