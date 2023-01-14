import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { AppProvider } from './components/context';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
 // <React.StrictMode> nemoj dodavatti i nece ti ici 2 puta render 
   
   <AppProvider>
    <App />
    </AppProvider>
  ,document.getElementById('root')
);



