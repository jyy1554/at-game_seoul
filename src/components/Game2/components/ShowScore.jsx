import React from "react";

export default function ShowScore(props) {
    return (
        <div>
            <div className='ur-score-is'>현재 점수</div>
            <div className='score'>{props.score}/10</div>
        </div>
    );
}