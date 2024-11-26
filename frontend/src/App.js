import './App.css';
import { Route, Routes} from 'react-router-dom'
import Home from './Pages/Home/Home';
import Report from './Pages/Report/Report';
import Permission from './Pages/Permission/Permission';
import Login from './Pages/Login/Login';
import Record from './Pages/Record/Record';
import BottomNavBar from './Components/BottomNavBar/BottomNavBar';
import { useState } from 'react';
function App() {
  const[auth,setAuth]=useState(true)
  return (
    <>
    <Routes>
          <Route path='/home' element={<Home/>}/>
          <Route path='/record' element={<Record/>}/>
          <Route path='/' element={<Login/>}/>
          <Route path='/permission' element={<Permission/>}/>
          <Route path='/report' element={<Report/>}/>
    </Routes>
    {auth&&<BottomNavBar/>}
    </>
  );
}

export default App;
