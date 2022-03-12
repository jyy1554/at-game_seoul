import React, { useCallback } from "react";
import { useNavigate } from 'react-router-dom';
import MouseOverPopover from './components/MouseOverPopover';
import './css/index.css';

function Welcome() {
  const navigate = useNavigate();
  
  const __gameStart = useCallback(
    () => {
      navigate('/game');
    },
    [navigate],
  )

  return (
    <div className="welcome">
      <div className="wrapper">
        <span className="info-icon">
          <MouseOverPopover />
        </span>
        <div className="title-container">
          <div className="main-title">at Game - 서울편</div>
          <div className="subtitle-container">
            <div className="subtitle">여기는 서울 어느 지역구에 속할까?</div>
            <div className="subtitle">찐서울고수가 되어보세요! 😎</div>
          </div>
          <div className="start-btn" onClick={__gameStart}>
            <button className='game-start'>게임시작</button>
          </div>
        </div>
      </div>
    </div>
  );

}

export default Welcome;

