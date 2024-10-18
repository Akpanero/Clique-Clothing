import React from 'react'
import Home from './Home'
import Register from './Register'
import Fill from './Fill'
import Login from './Login'
import "./App.css";
import { BrowserRouter, Form, Route, Routes } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

function App () {
    const helmetContext = {};
  return (
    <div>
        <HelmetProvider context={helmetContext}>
          <React.Suspense>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/register" element={<Register />} />
                <Route path="/fill" element={<Fill />} />
                <Route path="/login" element={<Login />} />
              </Routes>
            </BrowserRouter>
            </React.Suspense>
        </HelmetProvider>
    </div>

  )        

}

export default App