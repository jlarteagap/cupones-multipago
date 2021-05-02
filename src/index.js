import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import ScanQr from './component/Scan1/Scan'
import './css/bootstrap.css';
import './css/style.scss';

ReactDOM.render(
  <React.StrictMode>
    <ScanQr />
  </React.StrictMode>,
  document.getElementById('root')
);

