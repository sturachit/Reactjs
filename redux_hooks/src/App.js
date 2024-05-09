import logo from './logo.svg';
import './App.css';
import { FirstCom, SecCom } from './Component/FirstCom';

function App() {
  const Name ="Rachit";
  const Age ="20";

  return (
    <div className="App">
      <FirstCom name ={Name}/>
      <SecCom age={Age } />

      
    </div>
  );
}

export default App;
