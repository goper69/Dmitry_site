import React,{Component} from 'react';
import Home_Page from './Home_Page/Home_Page/Home_Page';
import Contact_Me from './Contact_Me/Contact_Me';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Portfolio from './Portfolio/Portfolio';
import PopUp_Gallery from './PopUp_Gallery/PopUp_Gallery';

export default class  App extends Component
{
  render() 
  { 
    return(
      <Router>
        <div className = "container">
          <Switch>
            <Route path= "/" exact component = {Home_Page}/>
            <Route path= "/contactme" component = {Contact_Me}/>
            <Route path= "/portfolio" component = {Portfolio}/>
            {/* <Route path= "/portfolio/sheremeta" component = {PopUp_Gallery}/> */}
          </Switch> 
        </div>
      </Router>
    );  
  };
  
};
