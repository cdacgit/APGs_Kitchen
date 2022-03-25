import React,{useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../Navbar/Navbar';
import { HashLink as Link } from "react-router-hash-link";
import Sidebar from '../Sidebar';
import { HeroContainer,HeroContent,HeroItems,HeroH1,HeroP,HeroBtn } from './HeroElements';
import Feature from '../Feature';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


const Hero = () => {

  const [isOpen,setIsOpen] = useState(false)
  
  const toggle = () => {
      setIsOpen(!isOpen)
  }

  return (
       <HeroContainer id='home'>
           <Router>
            <Navbar />
            {/* <Navbar toggle={toggle} /> */}
            <Switch>
                    <Route path='/Feature' component={Feature} />
            </Switch>
           </Router>
           <Sidebar isOpen={isOpen} toggle={toggle} />
           <HeroContent>
               <HeroItems>
                   <HeroH1>Hungry ?</HeroH1>
                   <HeroP>Order food online from the restaurants.
                    </HeroP>
                   <HeroBtn><Link smooth to="#menulist">Place Order</Link></HeroBtn>
               </HeroItems>
           </HeroContent>
       </HeroContainer>
  );
};

export default Hero;
