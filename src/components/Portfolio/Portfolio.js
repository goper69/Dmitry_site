import React,{Component} from 'react';
import Header from '../Header/Header';
import SlideScroll from '../SlideScroll';
import Arrow_down from '../Arrow_Down/Arrow_Down';
import './Portfolio.css';
import Languages from '../Languages/Languages';
import razodeto_logo from './bg_and_images/razodeto_logo.png';
import PopUp_Gallery from '../PopUp_Gallery/PopUp_Gallery';

export default class Portfolio extends Component
{  
  state = 
  {
    which_checked : 0,
    language : "ua",
    header_logo_color : "white",
    header_color : "white",
    popUp : false
  };

  lang_label =
  {
    ua : 
    {
      portfolio : "портфоліо",
      view : "переглянути",
      Product : "Предметна фотографія"
    },
    ru : 
    {
      portfolio : "портфолио",
      view : "посмотреть",
      Product : "Предметная фотография"
    },
    en : 
    {
      portfolio : "portfolio",
      view : "view",
      Product : "Product Photography"
    }
  }

  scroll2 = React.createRef(); // создаем ссылку на наш скролл компонент
  popUp_ref = React.createRef(); // создаем ссылку на наш pop-up

  onNavClick = (who_active) => { this.scroll2.current.onNavClick(who_active); }
  slider_scroll = (y) => 
  {
    this.scroll2.current.slider_scroll(y); 
  }
  
  onButtonClick = () => // будет служить как функция для закрывания pop-up окна
  {
    this.setState(({popUp}) => {return {popUp : !popUp}});
  }

  onButtonClick2 = () => // будет служить для открывания pop-up окна и старта загрузки изображений в pop-up
  {
    this.setState(({popUp}) => {return {popUp : !popUp}});
    this.popUp_ref.current.loadImages();
  }

  render() 
  {  
    let language = window.localStorage.language;
    let langLab = this.lang_label[language];
    let height = window.innerHeight;
    switch(this.state.which_checked)
    {
      case 0 : {this.state.header_logo_color = "white"; this.state.header_color = "black";break}
      case 7 : {this.state.header_logo_color = "black";this.state.header_color = "white";break}
      default : {this.state.header_logo_color = "white"; this.state.header_color = "white";}
    }
    let openClass = this.state.popUp === true ? "hidden" : "";
    return(
      <div className = "portfolio_container">
        <SlideScroll ref = {this.scroll2} _this = {this}/>
        <Languages onNavClick = {this.onNavClick}/>
        <Header header_logo_color = {this.state.header_logo_color} header_color = {this.state.header_color}/>
        <PopUp_Gallery isOpen = {this.state.popUp} onButtonClick = {this.onButtonClick} which_checked = {this.state.which_checked} ref = {this.popUp_ref}/>
        <div className="portfolio_main">
          <h2 className = {language}>{langLab.portfolio}</h2>
          <Arrow_down slider_scroll = {this.slider_scroll} y = {height} />
        </div>

        <div className="portfolio_sheremeta">
          <h2>Sheremeta</h2>
          <button className = {"portfolio_view_btn " + openClass} onClick = {this.onButtonClick2} >{langLab.view}</button>
          <Arrow_down slider_scroll = {this.slider_scroll} y = {height*2} />
        </div>

        <div className="portfolio_BW">
          <div className="portfolio_BW_inner_block">
            <h2>BW collection</h2>
            <button className = {"portfolio_view_btn " + openClass} onClick = {this.onButtonClick2}>{langLab.view}</button>
          </div>
          <Arrow_down slider_scroll = {this.slider_scroll} y = {height*3} />
        </div>

        <div className="portfolio_haircuts">
          <button className = {openClass + " portfolio_view_btn " + language} onClick = {this.onButtonClick2}>{langLab.view}</button>
          <Arrow_down slider_scroll = {this.slider_scroll} y = {height*4} />
        </div>

        <div className="portfolio_razodeto">
          <div className="portfolio_razodeto_inner_block">
            <img src= {razodeto_logo} alt=""/>
            <button className = {"portfolio_view_btn " + openClass} onClick = {this.onButtonClick2}>{langLab.view}</button> 
          </div>
          <Arrow_down slider_scroll = {this.slider_scroll} y = {height*5} />
        </div>

        <div className="portfolio_girls">
          <h2>girls</h2>
          <button className = {"portfolio_view_btn " + openClass} onClick = {this.onButtonClick2}>{langLab.view}</button> 
          <Arrow_down slider_scroll = {this.slider_scroll} y = {height*6} />
        </div>

        <div className="portfolio_boys">
          <div className="portfolio_boys_inner_block">
            <h2>boys</h2>
            <button className = {"portfolio_view_btn " + openClass} onClick = {this.onButtonClick2}>{langLab.view}</button> 
          </div>
          <Arrow_down slider_scroll = {this.slider_scroll} y = {height*7} />
        </div>

        <div className="portfolio_folklore">
          <h2>{"Folklore & Fashion"}</h2>
          <button className = {"portfolio_view_btn " + openClass} onClick = {this.onButtonClick2}>{langLab.view}</button> 
          <Arrow_down slider_scroll = {this.slider_scroll} y = {height*8} isBlack = "black"/>
        </div>

        <div className="portfolio_product">
          <div className="portfolio_product_inner_wrapper">
            <h2>product</h2>
            <button className = {"portfolio_view_btn " + openClass} onClick = {this.onButtonClick2}>{langLab.view}</button>
          </div>
        </div>

      </div>
    );  
  };
  
};

