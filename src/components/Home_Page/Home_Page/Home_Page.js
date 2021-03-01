import React,{Component} from 'react';
import Greeting from '../Greeting/Greeting';
import Header from '../../Header/Header';
import Slider from '../../Slider/Slider';
import './Home_Page.css';
import Second_Slide from '../Second_Slide/Second_Slide';
import Third_Slide from '../Third_Slide/Third_Slide';
import Languages from '../../Languages/Languages';
import SlideScroll from '../../SlideScroll';

export default class Home_Page extends Component
{
  state = 
  {
    which_checked : 0,
    language : "ua"
  };

  scroll = React.createRef(); // создаем ссылку на наш скролл компонент

  onNavClick = (who_active) => { this.scroll.current.onNavClick(who_active); }
  slider_scroll = (y) => { this.scroll.current.slider_scroll(y); }

  render() 
  {  
    return(
      <div className = "home_container">
        <SlideScroll ref = {this.scroll} _this = {this}/>
        <Languages onNavClick = {this.onNavClick}/>
        <Header/>
        <Greeting slider_scroll = {this.slider_scroll} />
        <Slider  slider_scroll = {this.slider_scroll} which_checked = {this.state.which_checked} count = {3}/>
        <Second_Slide slider_scroll = {this.slider_scroll}/>
        <Third_Slide slider_scroll = {this.slider_scroll}/>
      </div>
    );  
  };
  
};