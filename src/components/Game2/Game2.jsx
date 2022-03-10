import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './css/index.css';
import MouseOverPopover from './components/MouseOverPopover';
import ShowScore from './containers/ShowScore';
import SentimentSatisfiedOutlinedIcon from '@mui/icons-material/SentimentSatisfiedOutlined';
import SentimentDissatisfiedOutlinedIcon from '@mui/icons-material/SentimentDissatisfiedOutlined';
import { useDispatch, useSelector } from 'react-redux';
import data from './data/seoul.json';
import Map from './components/Map/Map';


function Game2() {
  const navigate = useNavigate();
  const dispatch = useDispatch(); //점수를 Result 컴포넌트에 넘겨주기 위해
  const numOfProbs = 10;

  const [text, setText] = useState('');
  const [showResult, setShowResult] = useState(false);
  const [correctAnswer, setCorrectAnswer] = useState(true);
  const [display, setDisplay] = useState({}); //문제에서 보여지는 객체
  const [gus, setGus] = useState([]); // 그 다음 문제들의 배열
  const inputRef = useRef();

  const items = [
    {
      name: '63빌딩',
      src: "assets/game/63빌딩.jpeg",
      answer: '영등포구'
    },
    {
      name: '가산디지털단지',
      src: "assets/game/가산디지털단지.jpeg",
      answer: '금천구'
    },
    {
      name: '경복궁',
      src: "assets/game/경복궁.jpeg",
      answer: '종로구'
    },
    {
      name: '경희대(서울캠퍼스)',
      src: "assets/game/경희대.jpeg",
      answer: '동대문구'
    },
    {
      name: '광장시장',
      src: "assets/game/광장시장.jpeg",
      answer: '종로구'
    },
    {
      name: '국립중앙박물관',
      src: "assets/game/국립중앙박물관.jpeg",
      answer: '용산구'
    },
    {
      name: '도봉산',
      src: "assets/game/도봉산.jpeg",
      answer: '도봉구'
    },
    {
      name: '롯데월드타워',
      src: "assets/game/롯데월드타워.jpeg",
      answer: '송파구'
    },
    {
      name: '마곡 LG사이언스파크',
      src: "assets/game/마곡LG사이언스파크.jpeg",
      answer: '강서구'
    },
    {
      name: '명동',
      src: "assets/game/명동.jpeg",
      answer: '중구'
    },
    {
      name: '북촌한옥마을',
      src: "assets/game/북촌한옥마을.jpeg",
      answer: '종로구'
    },
    {
      name: '불광동',
      src: "assets/game/불광동.jpeg",
      answer: '은평구'
    },
    {
      name: '상암MBC',
      src: "assets/game/상암MBC.jpeg",
      answer: '마포구'
    },
    {
      name: '서울대(가장 큰 캠퍼스)',
      src: "assets/game/서울대.jpeg",
      answer: '관악구'
    },
    {
      name: '서울숲',
      src: "assets/game/서울숲.jpeg",
      answer: '성동구'
    },
    {
      name: '서울어린이대공원',
      src: "assets/game/서울어린이대공원.jpeg",
      answer: '광진구'
    },
    {
      name: '선유도공원',
      src: "assets/game/선유도공원.jpeg",
      answer: '영등포구'
    },
    {
      name: '올림픽공원',
      src: "assets/game/올림픽공원.jpeg",
      answer: '송파구'
    },
    {
      name: '육군사관학교',
      src: "assets/game/육군사관학교.jpeg",
      answer: '노원구'
    },
    {
      name: '이태원',
      src: "assets/game/이태원.jpeg",
      answer: '용산구'
    },
    {
      name: '이화여대',
      src: "assets/game/이화여대.jpeg",
      answer: '서대문구'
    },
    {
      name: '청와대',
      src: "assets/game/청와대.jpeg",
      answer: '종로구'
    },
    {
      name: '코엑스',
      src: "assets/game/코엑스.jpeg",
      answer: '강남구'
    },
    {
      name: 'DDP(동대문디자인플라자)',
      src: "assets/game/DDP.jpeg",
      answer: '중구'
    },
    {
      name: 'N서울타워(남산서울타워)',
      src: "assets/game/N서울타워.jpeg",
      answer: '용산구'
    },
    // 홍대입구, 코엑스, 익선동, 광화문, 고려대, 
  ]

  /* useEffect에서 설정한 함수가 가장 처음 렌더링될때만 실행되고 이후 실행할 필요가 없는 경우엔,
  두번째 파라미터에 빈 배열을 넣어주면 됨
  */
  useEffect(() => {
    //자동으로 랜덤하게 섞어주기
    items.sort(() => Math.random() - 0.5);
    setDisplay(items[0]);
    setGus(items.slice(1, numOfProbs));
    dispatch({
      type : 'START'
    });
  }, [])

  const __goResult = useCallback(
    () => {
      navigate('/result');
    },
    [navigate],
  )

  const __doSubmit = useCallback(
    (e) => {
      e.preventDefault(); //새로고침되지 않기 위해

      if (text === display.answer) {
        setCorrectAnswer(true);
        dispatch({
          type : 'CORRECT'
        });
      } else {
        setCorrectAnswer(false);
      }
      setShowResult(true); // 결과 표

      setTimeout(() => {
        setShowResult(false); // 결과 안보이게 하기
        setText('');  //입력된 글자 지우기
        inputRef.current.focus();

        if(gus.length) {
          const _gus = gus.slice(1,numOfProbs + 1);
          setDisplay(gus[0]);
          setGus(_gus); 
        } else {
          __goResult();
        }
      }, 1000);
      console.log(`gus length: ${gus.length}`);
    }, [text, display, gus, dispatch, __goResult]
  );


  return (
    <div className='game2'>
      <div className='wrapper'>
        <img className='gu-img' src={display.src} alt='사진' />
        <div className="score-container">
          <ShowScore />
        </div>
        <span className="map-icon">
          <MouseOverPopover />
        </span>
        <div className='quiz-container'>
          <div className='gu-name'>{display.name}</div>
          {gus.length ? (
            <div className='hidden-hint'>총 {gus.length}문제 남았습니다.</div>
          ):(
            <div className='hidden-hint'>마지막 문제입니다.</div>
          )
          }
          <div className='input-and-result'>
            {showResult ? ((correctAnswer ? (
                <div className="o-icon">
                  <audio src='assets/music/correct.mp3' autoPlay></audio>
                  <SentimentSatisfiedOutlinedIcon color="success" sx={{ fontSize: 100}} />
                </div>
              ):(
                <div className="x-icon">
                  <audio src='assets/music/wrong.mp3' autoPlay></audio>
                  <SentimentDissatisfiedOutlinedIcon sx={{ color:'red', fontSize: 100}} />
                </div>
              )
            )):(
              <div className="map-container">
                <Map data={data} />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Game2;