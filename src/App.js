import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import {Home,NotFound, Products,ProductDetail} from './Components';
import logo from './Components/images/unnamed.png';
import title from './Components/images/download.png';

function App() {
  return (<>
        <div className="logo">
            <img className="logo-dog" src={logo} alt="logo" ></img>
            <img className="logo-title" src={title} alt="logo" ></img>
        </div>
        <Router>

            
            <nav>
              <Link className="link" to="/">Home</Link>
              <Link className="link" to="Products">Products</Link>
            </nav>
            
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="Products" element={<Products />}/>
              <Route path="Products/:slug" element={<ProductDetail />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
      </>
  );
}

export default App;
