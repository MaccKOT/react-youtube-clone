import React, { useState } from 'react';
import './App.css';
import Button from '@material-ui/core/Button';
import Chip from '@material-ui/core/Chip';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          Edit <Chip label="src/App.jsx" /> and SAVE to reload.
        </div>
        <br />
        <Button variant="contained" color="primary">
          Material UI is working fine!
        </Button>
      </header>
    </div>
  );
}

export default App;
