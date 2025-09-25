import { useState } from "react"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Home from "./pages/Home"
import { Route, Routes } from "react-router-dom"
import Fakedata from "./pages/Fakedata"
import Signin from "./pages/Signin"
import Signup from "./pages/Signup"

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/fakedata" element={<Fakedata />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <Footer />
    </>

  )
}

export default App
