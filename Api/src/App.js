// import logo from './logo.svg';
import { Routes,Route } from 'react-router-dom';
import './App.css';
import ApiCom from './Component/ApiCom';


function App() {
  return (
    <div className="App">
    
      <h2>Api Calling...</h2>
      <ApiCom/>
     <Routes>
      {/* <Route path="/" to="/user" element={<ApiCom />} /> */}
      </Routes> 

    </div>
  );
}

export default App;
