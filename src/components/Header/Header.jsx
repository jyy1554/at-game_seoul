import React, { Component } from 'react';
import './css/index.css';

class Header extends Component {
  componentDidMount() {
    let ins = document.createElement('ins');
    let scr = document.createElement('script');

    ins.className = 'kakao_ad_area';
    ins.style = "display:none; width:100%;";
    scr.async = "true";
    scr.type = "text/javascript";
    scr.src = "//t1.daumcdn.net/kas/static/ba.min.js";
    ins.setAttribute('data-ad-width', '728');
    ins.setAttribute('data-ad-height', '90');
    ins.setAttribute('data-ad-unit', 'DAN-ung39rVOVBZPiqNc');

    document.querySelector('.ad').appendChild(ins);
    document.querySelector('.ad').appendChild(scr);
  }

  render() {
    return (
      <div className='header'>
        <div className='container'>
          {/* <div className="left"></div>
          <div className="right"></div> */}

          <div className="ad"></div>
        </div>
      </div>
    );
  }
}

export default Header;