// App.js
import { Routes, Route } from 'react-router-dom';
import Form from './Component/UserForm';
import Navbar from './Component/Navbar';
import ListForm from './Component/ListTable';


const App = () => {
 return (
    <>
       <Navbar/>
       <Routes>
          <Route path="/" element={<Form />} />
          <Route path="/list" element={<ListForm />} />
       </Routes>
    </>
 );
};

export default App;