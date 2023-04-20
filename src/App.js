import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './Components/Landing'
import MainPage from './Components/MainPage';
import './App.css';
import ForgotPassword from './Components/ForgotPassword';
import CreateAccount from './Components/CreateAccount';


function App() {
  return (
    <>
    {
      <BrowserRouter>
      <Routes>
        <Route path ="/" element={<Landing/>}/>
        <Route path ="mainpage" element={<MainPage/>}/>
        <Route path ="forgotpassword" element={<ForgotPassword/>}/>
        <Route path ="createaccount" element={<CreateAccount/>}/>
      </Routes>
      </BrowserRouter>
    }
  
    </>
  );
}

export default App;
