import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Homepage} from './HomePage';
import './Landingpage.css'
import {Question} from './preguntas'
import  {Navbar} from './Navbar'
import App from './App';


createRoot(document.getElementById("root")).render(
  <>
  <Navbar />
  <App />
   
  </>
);
