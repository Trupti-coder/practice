
import './App.css';
//import Category from './Components/Category';
//import Bootstrap from './Components/Bootstrap';
//import Clock from './Components/Clock';
import SignIn from './Components/SignIn';
import Cookie from './Components/Cookie';
import LoginBtn from './Components/LoginBtn';
import SignUpNavigation from './Components/SignUpNavigation';
import { Route, Router, Routes } from 'react-router-dom';
import Array from './Components/Array';


function App() {
  
  return (
    <div className="App">

     {/* <Bootstrap/>
     <hr></hr>
      <Category/> 
      <hr></hr>
      <Clock/>
      <hr></hr> */}
      
      <Cookie/>
      <hr></hr>
      <SignUpNavigation/>
    <Routes>
        <Route path='/signup' element={<SignIn/>}></Route>
        <Route path='/login' element={<LoginBtn/>}></Route>
     </Routes>
     <hr></hr>
     <Array />
     


      
    </div>
  );
}

export default App;
