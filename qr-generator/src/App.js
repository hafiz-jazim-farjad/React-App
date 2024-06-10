import logo from './logo.svg';
import './App.css';
import React from "react";
import ReactDOM from "react-dom";
import QRCode from "react-qr-code";

function App() {
  return (
    <div className='mainDIV'>
      <h1> Go to Jazim's Site </h1>
      <QRCode value="https://jazim.netlify.app/" level='H' size={'150'} bgColor='transparent' className='qrCode' />
    </div>
  );
}

export default App;
