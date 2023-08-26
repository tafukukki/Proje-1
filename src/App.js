import * as React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemPage from "./components/ItemPage";

function App() {
  return (
   
    <BrowserRouter>
      <div className="App">
        <Header />
        <MainContent />
        
        <Routes>
        <Route path="/item/:id" element={<ItemPage />} />
          
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  
  );
}

export default App;
