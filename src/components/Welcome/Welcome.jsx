import React, { useCallback } from "react";
import { useNavigate } from 'react-router-dom';
import MouseOverPopover from './components/MouseOverPopover';
import './css/index.css';

function Welcome() {
  const navigate = useNavigate();

  const __gameStart1 = useCallback(
    () => {
      navigate('/game1');
    },
    [navigate],
  )
  
  const __gameStart2 = useCallback(
    () => {
      navigate('/game2');
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
          <div className="main-title">구 이름 맞추기</div>
          <div className="sub-title">누가누가 찐 서울 고수인가?!</div>
          <div className="start-btn" onClick={__gameStart1}>
            <button className='game-start'>게임시작1</button>
          </div>
          <div className="start-btn" onClick={__gameStart2}>
            <button className='game-start'>게임시작2</button>
          </div>
        </div>
      </div>
    </div>
  );

}

export default Welcome;

