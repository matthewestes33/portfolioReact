import React, {Component} from 'react';
import {Route, Redirect, HashRouter} from "react-router-dom";
import Navigation from '../../components/Navigation';
import About from '../../components/About';
import Contact from '../../components/Contact';
import Portfolio from '../../components/Portfolio';
import Resume from '../../components/Resume';
import Traveler from '../../assets/images/icons8-traveler-64.png'

class Header extends Component {   
    render() {
    return (
        <HashRouter>
            <div className="row Header" id="header">
            <a href="https://matthewestes33.github.io/portfolioReact/"><img src={Traveler} alt="Matthew Estes" class="icon" id="me" /></a>
                <Navigation/>
            </div>
    

    <div className="content">
        Matthew Estes |
          <Route exact path="/" render={() => (<Redirect to="/about"/>)}/>
          <Route path="/portfolio" component={Portfolio}/>
          <Route path="/about" component={About}/>
          <Route path="/contact" component={Contact}/>
          <Route path="/resume" component={Resume}/>
        </div>
    </HashRouter>
    )
}
}

export default Header;

