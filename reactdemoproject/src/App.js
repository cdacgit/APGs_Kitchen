import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Hero from './Components/Hero';
import Products from './Components/Products';
import { GlobalStyle } from './globalstyle';
import { productData, productDataTwo } from './Components/Products/data'
//import Navbar from './Components/Navbar1/Navbar';
import Feature from './Components/Feature';
import Footer from './Components/Footer';
import Menu from './Components/Menu/Menu';
import Register from './Components/LoginRegi/Register/register';
import ScrollToTop from './Components/ScrollToTop';

function App() {

  // const[show, setShow] = useState(true)

  return (
    <Router>
        <GlobalStyle />
        <ScrollToTop />
        <Hero />
        <Menu head='Menu List'/>
        <Products heading='Indian Food' data={productData} />
        <Feature />
        <Products heading='Sweet Treats For You' data={productDataTwo} />
        <Register/>
        <Footer />
    </Router>
  );
}

export default App;
