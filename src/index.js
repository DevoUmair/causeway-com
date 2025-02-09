import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import CauswayContextProvider from "./context/CauswayContextProvider";
import {AnimatePresence } from "framer-motion"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <CauswayContextProvider>
          <AnimatePresence>
               <App />
          </AnimatePresence>
     </CauswayContextProvider>
  </React.StrictMode>
);

