import React,{Component} from 'react';
import './Header.css';
import {Link} from 'react-router-dom';
export default class  Header extends Component
{

  lang_label =
  {
    ua : 
    {
      home : "головна",
      about : "про мене",
      contact: "контакти",
      works : "портфоліо"
    },
    ru : 
    {
      home : "главная",
      about : "про меня",
      contact: "контакты",
      works : "портфолио"
    },
    en : 
    {
      home : "home",
      about : "about me",
      contact: "contact me",
      works : "portfolio"
    }
  }

  render() 
  {
    let language = window.localStorage.language;
    let langLab = this.lang_label[language];
    let {header_color = "", header_bg = "" , header_logo_color = ""} = this.props;
    return(
        <div className = {"header " + header_bg}>
            <nav className = {"header_nav " + header_color} >
              
                <Link to ="/"><i className="fa fa-home" aria-hidden="true"></i> <span>{langLab.home}</span></Link>
                <Link to = "/aboutme"><i className="fa fa-user" aria-hidden="true"></i> <span>{langLab.about}</span></Link>

                <h2 className = {"header_logo " + header_logo_color }>yatsyna</h2>

                <Link to = "/contactme"><i className="fa fa-paper-plane" aria-hidden="true"></i> <span>{langLab.contact}</span></Link>
                <Link to = "/portfolio"><i className="fa fa-briefcase" aria-hidden="true"></i> <span>{langLab.works}</span></Link>
        
            </nav>
        </div>
    );
  };

};