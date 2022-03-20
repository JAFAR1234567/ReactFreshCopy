import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Menubar } from './Components/Shared/Menubar/Menubar';
import { useState } from 'react';

function App() {
  const [add, setAdd] = useState(0)
 const addFunc = () =>{
    setAdd(add + 1);
 }
  return (
    <div>
      <Menubar add = {add} addFunc={addFunc}></Menubar>
      
    </div>
  );
}

export default App;
