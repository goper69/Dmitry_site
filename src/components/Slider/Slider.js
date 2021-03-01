import React,{Component} from 'react';
import './Slider.css';



export default class  Slider extends Component
{
  
  get_slider_items = () =>
  {
    let slider_class = "slider_item";
    const {slider_scroll,which_checked , count} = this.props;
    let slider_items = [];
    for(let i = 0; i < count; i++)
    {
      slider_items.push(
      <div 
          key = {i + "_slider"} 
          className = {i === which_checked ? slider_class + " checked" : slider_class} 
          onClick= { () => slider_scroll(window.innerHeight * i)}>
      </div>
      );
    }
    return slider_items;
  }
  render() 
  { 
    let slider_items = this.get_slider_items();
    return(
        <ul className = "slider_container" >
          {[...slider_items]}
        </ul>
    );  
  };

};
