import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider, Routes, Route } from "react-router-dom";
import MyTodoApp from './components/mytodoapp.jsx';
import MyAccount from './components/myaccount.jsx';
import AboutMe from './components/aboutme.jsx';
import MainNavBar from './components/MainNavBar.jsx';
import MyLoginPage from './components/MyLoginPage.jsx';

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/mytodoapp", element: <><MainNavBar/><MyTodoApp/></> },
  { path: "/myaccount", element: <><MainNavBar/><MyAccount/></> },
  { path: "/aboutme", element: <><MainNavBar/><AboutMe/></> },
  { path: "/MyLoginPage", element: <><MyLoginPage/></> }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="./mytodoapp" element={<MyTodoApp />} />
        <Route path="./aboutme" element={<AboutMe />} />
        <Route path="./myaccount" element={<MyAccount />} />
        <Route path="./MyLoginPage" element={<MyLoginPage />} />

      </Routes>
    </RouterProvider>
  </React.StrictMode>,
)