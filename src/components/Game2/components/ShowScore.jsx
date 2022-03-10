import React, { useEffect } from "react";
import { useSelector } from "react-redux";

export default function ShowScore() {
    const score = useSelector(state => state.score);

    useEffect(() => {
        
    }, [score])

    return (
        <div>
            <div className='ur-score-is'>현재 점수</div>
            <div className='score'>{score}/10</div>
        </div>
    );
}