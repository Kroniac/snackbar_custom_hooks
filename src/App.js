import React from 'react';
import { Snackbar } from './snackbar';
import { useSnackbar } from './useSnackbar';
import './App.css';

function App() {
  const { isActive, message, openSnackBar } = useSnackbar();

  const _showSnackbarHandler = () => {
    openSnackBar("Did you click the button?");
  }

  return (
    <div className="App">
        <button onClick = {_showSnackbarHandler}>Click To Open To Snackbar</button>
        <Snackbar isActive = {isActive} message = {message}  />
    </div>
  );
}

export default App;
