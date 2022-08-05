import React from 'react';
import  Button  from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
  <>
    <div className="App">
      <Button variant="link" style={{ color: 'purple' }}>Link</Button>
      <Button variant="link" style={{ color: 'red' }}>Link</Button>
      <Button variant="link" style={{ color: 'green' }}>Link</Button>
      <Button variant="link" style={{ color: 'brown' }}>Link</Button>  
    </div>
  </>
  );
}

export default App;
