import React from 'react';
import './App.css';
import Button  from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavScroll from './components/NavScroll';

function App() {
  return (
    <div className="App">
      <NavScroll>
        <Button>Teste</Button>
      </NavScroll>
    </div>
  );
}

export default App;
