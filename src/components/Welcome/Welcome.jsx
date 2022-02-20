import React, { useCallback } from "react";
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
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
          <div className="main-title">구 이름 맞추기</div>
          <div className="sub-title">누가누가 서울 고수인가?!</div>
          <div className="start-btn" onClick={__gameStart}>
            <button className='game-start'>게임시작</button>
          </div>
        </div>
      </div>
    </div>
  );

}

export default Welcome;

