import React from 'react';
import ReactDOM from 'react-dom/client';
import { initializeApp } from "firebase/app";
import App from './App';

const firebaseConfig = {
  apiKey: "AIzaSyAf4qTV0J-R8SeyiJkxbh8VN74c0PZmwEk",
  authDomain: "romerotech-199c5.firebaseapp.com",
  projectId: "romerotech-199c5",
  storageBucket: "romerotech-199c5.appspot.com",
  messagingSenderId: "559752508460",
  appId: "1:559752508460:web:afd9e74c1d322ae1ab4d89"
};

initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
