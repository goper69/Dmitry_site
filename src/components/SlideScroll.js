import React,{Component} from 'react';

export default class SlideScroll extends Component
{
  can_i_move = false;
  where_i_go = 0;
  _this = null;

  slider_scroll = (y) => //
  {
    if(y !== this.where_i_go && !this._this.state.popUp)
    {
      this.where_i_go = y;
      this.can_i_move = !this.can_i_move;
      let move_check = this.can_i_move;
      let offset = window.pageYOffset;
      let count = 0;
      let difference = (y - offset) / 100;
      let off = offset;
      const _this_ = this;
      this.y_check(y);
      let int = setTimeout(function tick() {      
        switch(count)
        {
          case 0: difference = difference * 1.85; break;
          case 30: difference = difference / 1.5; break; 
          case 40: difference = difference / 1.4; break;
          case 50: difference = difference / 1.4; break; 
          case 60: difference = difference / 1.4; break; 
          case 70: difference = difference / 1.4; break; 
          case 80: difference = difference / 1.4; break;
          case 90: difference = difference / 1.4; break;
          case 100: difference = difference / 1.4; break;    
          case 110: difference = difference / 1.32; break;
          case 120: difference = difference / 1.2; break; 
          case 130: difference = difference / 1.2; break; 
          case 140: difference = difference / 1.3; break; 
          case 150: difference = difference / 1.3; break; 
          case 160: difference = difference / 1.2; break; 
          case 170: difference = difference / 1.2; break; 
          case 180: difference = difference / 1.2; break; 
          case 190: difference = difference / 1.2; break; 
          case 205: difference = difference / 1.15; break; 
          case 215: difference = difference / 1.1; break; 
          case 225: difference = difference / 1.15; break; 
          case 230: difference = difference / 1.25; break;
        }
        if(window.pageYOffset != y &&  move_check === _this_.can_i_move)
        {
          off += difference;
          window.scrollTo(0, off);
          ++count;
          int = setTimeout(tick, 1); 
        }
      }, 1);
    }
  };
  
  y_check = (y) => // змінює state  ОПАСНА ШТУКА
  {
    let where_i_am = Math.floor(y / window.innerHeight);
    this._this.setState(({which_checked}) => {return { which_checked : where_i_am};});
  }

  riseUp = () => // розрахований на 3 слайда , викликає slider_scroll()
  {
    let innerHeight = window.innerHeight; 
    let my_scrollY = window.scrollY;

    let scrollHeight = Math.max( // це якийсь странний костиль щоб ми могли на 100% дізнатися правильну висоту документа лол
      document.body.scrollHeight, document.documentElement.scrollHeight,
      document.body.offsetHeight, document.documentElement.offsetHeight,
      document.body.clientHeight, document.documentElement.clientHeight
    );
    let slider_count = (scrollHeight / innerHeight); // 3
    let where_i_am = Math.floor(my_scrollY / innerHeight); // 0
    let where_scrollY = innerHeight * where_i_am; // 0

    if(my_scrollY >= (where_scrollY + innerHeight/2) ) 
    {
      this.slider_scroll(where_scrollY);
    } 
    else if (where_i_am !== 0 ) this.slider_scroll(where_scrollY - innerHeight);
    else this.slider_scroll(0);
  };

  fallDown = () =>// розрахований на 3 слайда , викликає slider_scroll()
  {
    let innerHeight = window.innerHeight; 
    let my_scrollY = window.scrollY;

    let scrollHeight = Math.max( // це якийсь странний костиль щоб ми могли на 100% дізнатися правильну висоту документа лол
      document.body.scrollHeight, document.documentElement.scrollHeight,
      document.body.offsetHeight, document.documentElement.offsetHeight,
      document.body.clientHeight, document.documentElement.clientHeight
    );
    let slider_count = (scrollHeight / innerHeight); // 3
    let where_i_am = Math.floor(my_scrollY / innerHeight); // 0
    let where_scrollY = innerHeight * where_i_am; // 0

    if(where_i_am !== (slider_count -1) && (my_scrollY >= (where_scrollY - innerHeight/2)) && (my_scrollY <= ((where_scrollY) + innerHeight/2)))
    {
      this.slider_scroll(where_scrollY + innerHeight);
    } 
    else if (where_i_am < (slider_count -2) ) this.slider_scroll(where_scrollY + innerHeight*2); 
    else this.slider_scroll(scrollHeight - innerHeight);
  };

  onNavClick = (who_active) => // змінює state language
  {
    this._this.setState(({language}) => {return { language : who_active};});
  }

  wheel_event = (e) => // прослуховувач мишки, викликає або riseUp() або fallDown()
  {
    e.preventDefault();
    if(e.deltaY < 0) this.riseUp();
    else this.fallDown();
  }
  keydown_event = (e) => // прослуховувач клавіатури, викликає або riseUp() або fallDown()
  {
    if(e.code == "ArrowUp") {this.riseUp(); e.preventDefault();} 
    else if (e.code == "ArrowDown") {this.fallDown(); e.preventDefault();} 
  }

  actualResizeHandler = () =>  // скролить в залежності від state whick_checked
  {
    let which = this._this.state.which_checked;
    window.scrollTo(0,window.innerHeight * which);
  }

  resizeThrottler = () => //  прослуховувач зміни ширини екрану, викликає actualResizeHandler()
  {
    let resizeTimeout;
    const _this_ = this;
    if ( !resizeTimeout ) 
    {
      resizeTimeout = setTimeout(function() 
      {
        resizeTimeout = null;
        _this_.can_i_move = !_this_.can_i_move;
        _this_.actualResizeHandler();
      }, 66);
    }
  }

  onPageLoad = (pause) => { setTimeout(this.actualResizeHandler, pause); } // на загрузку сторінки , викликає actualResizeHandler()

  
  componentDidMount()
  {
    this._this = this.props._this;
    if(!window.localStorage.language)
    {
      window.localStorage.language = "ua";
      this.onNavClick("ua");
    }
    if(localStorage.getItem("pathname") !== window.location.pathname)
    {
      setTimeout(() =>
      {
        window.scrollTo(0, 0);
        localStorage.setItem("pathname" , window.location.pathname);
        this.y_check(0);
        this.where_i_go = -1;
      } ,300);
    } 
    else 
    {
      this.where_i_go = window.pageYOffset;
      this.y_check(window.pageYOffset);
    }
    window.addEventListener("wheel",this.wheel_event, {passive: false});
    window.addEventListener("keydown" , this.keydown_event);
    window.addEventListener('load', () => this.onPageLoad(300)); // срабатывает при первой загрузке страницы
    window.addEventListener("touchmove",this.handleMove, { passive: false });
    window.addEventListener("touchstart",this.handleStart,{ passive: false });
    window.addEventListener("touchend",this.handleEnd);
    window.addEventListener("resize", this.resizeThrottler, false);
  }

  componentWillUnmount()
  {
    this.can_i_move = !this.can_i_move;
    window.removeEventListener("wheel",this.wheel_event);
    window.removeEventListener("keydown", this.keydown_event);
    window.removeEventListener("touchmove",this.handleMove);
    window.removeEventListener("touchstart",this.handleStart);
    window.removeEventListener("touchend",this.handleEnd);
    window.removeEventListener("resize", this.resizeThrottler);
  }

  startY = 0;
  moveY = 0; 
  
  handleStart = (e) =>
  {
    this.can_i_move = !this.can_i_move;
    this.startY = window.pageYOffset;
    this.moveY = e.targetTouches[0].pageY;
  }

  handleMove = (e) =>
  {
    e.preventDefault();
    if( e.targetTouches[0].pageY - this.moveY <= -3)
    {
      let yGo = window.pageYOffset + 1;
      this.moveY = e.targetTouches[0].pageY;
      window.scrollTo(0,yGo);
    }
    else if(e.targetTouches[0].pageY - this.moveY >= 3)
    {
      let yGo = window.pageYOffset - 1;
      this.moveY = e.targetTouches[0].pageY;
      window.scrollTo(0,yGo);
    }
  }

  handleEnd = (e) =>
  {
    this.where_i_go = window.pageYOffset;
    if(this.startY > window.pageYOffset) 
    {
      this.riseUp();
    }
    else if (this.startY < window.pageYOffset) this.fallDown();
    else 
    {
      this.slider_scroll(this._this.state.which_checked * window.innerHeight)
    }
  }

  render() 
  { 
    return null;
  };
  
};
