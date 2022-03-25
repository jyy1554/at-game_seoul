import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './css/index.css';
import ShowScore from './components/ShowScore';
import HomeIcon from '@mui/icons-material/Home';
import SentimentSatisfiedOutlinedIcon from '@mui/icons-material/SentimentSatisfiedOutlined';
import SentimentDissatisfiedOutlinedIcon from '@mui/icons-material/SentimentDissatisfiedOutlined';
import { useDispatch, useSelector } from 'react-redux';
import data from './data/seoul.json';
import Map from './components/Map/Map';


function Game() {
  const navigate = useNavigate();
  const dispatch = useDispatch(); //점수를 Result 컴포넌트에 넘겨주기 위해
  const input = useSelector(state => state.input);
  const numOfProbs = 10;

  // const [text, setText] = useState('');
  const [showResult, setShowResult] = useState(false);
  const [correctAnswer, setCorrectAnswer] = useState(true);
  const [display, setDisplay] = useState({}); //문제에서 보여지는 객체
  const [gus, setGus] = useState([]); // 그 다음 문제들의 배열

  const items = [
    {
      name: '63빌딩',
      src: "assets/game/63빌딩.jpeg",
      answer: '영등포구'
    },
    {
      name: '가로수길',
      src: "assets/game/가로수길.jpeg",
      answer: '강남구'
    },
    {
      name: '가산디지털단지',
      src: "assets/game/가산디지털단지.jpeg",
      answer: '금천구'
    },
    {
      name: '강변 테크노마트',
      src: "assets/game/강변테크노마트.jpeg",
      answer: '광진구'
    },
    {
      name: '갤러리아 포레',
      src: "assets/game/갤러리아포레.jpeg",
      answer: '성동구'
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
      name: '광진동양파라곤',
      src: "assets/game/광진동양파라곤.jpeg",
      answer: '광진구'
    },
    {
      name: '국립중앙박물관',
      src: "assets/game/국립중앙박물관.jpeg",
      answer: '용산구'
    },
    {
      name: '김포공항',
      src: "assets/game/김포공항.jpeg",
      answer: '강서구'
    },
    {
      name: '낙산공원',
      src: "assets/game/낙산공원.jpeg",
      answer: '종로구'
    },
    {
      name: '노량진 수산시장',
      src: "assets/game/노량진수산시장.jpeg",
      answer: '동작구'
    },
    {
      name: '더현대서울',
      src: "assets/game/더현대서울.jpeg",
      answer: '영등포구'
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
      name: '마장동 축산시장',
      src: "assets/game/마장동.jpeg",
      answer: '성동구'
    },
    {
      name: '명동',
      src: "assets/game/명동.jpeg",
      answer: '중구'
    },
    {
      name: '미아삼거리',
      src: "assets/game/미아삼거리.jpeg",
      answer: '강북구'
    },
    {
      name: '보라매공원',
      src: "assets/game/보라매공원.jpeg",
      answer: '동작구'
    },
    {
      name: '북서울 꿈의숲',
      src: "assets/game/북서울꿈의숲.jpeg",
      answer: '강북구'
    },
    {
      name: '북촌 한옥마을',
      src: "assets/game/북촌한옥마을.jpeg",
      answer: '종로구'
    },
    {
      name: '불광동',
      src: "assets/game/불광동.jpeg",
      answer: '은평구'
    },
    {
      name: '상암 월드컵경기장',
      src: "assets/game/상암월드컵경기장.jpeg",
      answer: '마포구'
    },
    {
      name: '서울대(관악캠퍼스)',
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
      name: '성북동 비둘기',
      src: "assets/game/성북동비둘기.jpeg",
      answer: '성북구'
    },
    {
      name: '신도림 디큐브시티',
      src: "assets/game/신도림디큐브시티.jpeg",
      answer: '구로구'
    },
    {
      name: '여의도',
      src: "assets/game/여의도.jpeg",
      answer: '영등포구'
    },
    {
      name: '연남동',
      src: "assets/game/연남동.jpeg",
      answer: '마포구'
    },
    {
      name: '연세대',
      src: "assets/game/연세대.jpeg",
      answer: '서대문구'
    },
    {
      name: '올림픽공원',
      src: "assets/game/올림픽공원.jpeg",
      answer: '송파구'
    },
    {
      name: '왕십리역',
      src: "assets/game/왕십리역.jpeg",
      answer: '성동구'
    },
    {
      name: '육군사관학교',
      src: "assets/game/육군사관학교.jpeg",
      answer: '노원구'
    },
    {
      name: '은평뉴타운',
      src: "assets/game/은평뉴타운.jpeg",
      answer: '은평구'
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
      name: '천호동 현대백화점',
      src: "assets/game/천호동현대백화점.jpeg",
      answer: '강동구'
    },
    {
      name: '청량리역',
      src: "assets/game/청량리역.jpeg",
      answer: '동대문구'
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
      name: '태릉선수촌',
      src: "assets/game/태릉선수촌.jpeg",
      answer: '노원구'
    },
    {
      name: '동대문 DDP',
      src: "assets/game/DDP.jpeg",
      answer: '중구'
    },
    {
      name: '평창동 단독주택',
      src: "assets/game/평창동.jpeg",
      answer: '종로구'
    },
    {
      name: 'N서울타워(남산서울타워)',
      src: "assets/game/N서울타워.jpeg",
      answer: '용산구'
    },
    {
      name: 'SBS 목동 사옥',
      src: "assets/game/SBS목동사옥.jpeg",
      answer: '양천구'
    },
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

  const __goHome = useCallback(
    () => {
      navigate('/');
    },
    [navigate],
  )

  const __goResult = useCallback(
    () => {
      navigate('/result');
    },
    [navigate],
  )

  const __doSubmit = useCallback(
    (e) => {
      e.preventDefault(); //새로고침되지 않기 위해

      console.log(input);

      if (input === display.answer) {
        setCorrectAnswer(true);
        dispatch({
          type : 'CORRECT'
        });
      } else {
        setCorrectAnswer(false);
      }
      setShowResult(true); // 결과 표현

      setTimeout(() => {
        setShowResult(false); // 결과 안보이게 하기
        // setText('');  //입력된 글자 지우기

        if(gus.length) {
          const _gus = gus.slice(1,numOfProbs + 1);
          setDisplay(gus[0]);
          setGus(_gus); 
        } else {
          __goResult();
        }
      }, 1000);
      console.log(`gus length: ${gus.length}`);
    }, [input, display, gus, dispatch, __goResult]
  );


  return (
    <div className='game'>
      <div className='wrapper'>
        <img className='gu-img' src={display.src} alt='사진' />
        <div className="score-container">
          <ShowScore />
        </div>
        <span className="map-icon" onClick={__goHome}>
          <HomeIcon sx={{ fontSize: '2.5rem' }} />
        </span>
        <div className='quiz-container'>
          {showResult ? (
            <div className='gu-name'>정답 : {display.answer}</div>
          ): (
            <div className='gu-name'>{display.name}</div>
          )}
          {gus.length ? (
            <div className='hidden-hint'>총 {gus.length}문제 남았습니다.</div>
          ):(
            <div className='hidden-hint'>마지막 문제입니다.</div>
          )
          }
          <div className='input-and-result'>
            {showResult ? ((correctAnswer ? (
                <div className="o-icon">
                  <audio src='assets/music/correct.mp3' volume="0.01" autoPlay></audio>
                  <SentimentSatisfiedOutlinedIcon color="success" sx={{ fontSize: 100}} />
                </div>
              ):(
                <div className="x-icon">
                  <audio src='assets/music/wrong.mp3' volume="0.01" autoPlay></audio>
                  <SentimentDissatisfiedOutlinedIcon sx={{ color:'red', fontSize: 100}} />
                </div>
              )
            )):(
              <div className="map-container" onClick={__doSubmit} >
                <Map data={data} />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Game;