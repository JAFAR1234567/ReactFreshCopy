import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Menubar } from './Components/Shared/Menubar/Menubar';
function App() {
  const func = () => {
    console.log('hello from app.js');
  }
  return (
    <div>
      <Menubar func={func}></Menubar>
    </div>
  );
}

export default App;
