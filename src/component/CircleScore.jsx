import React from 'react'

export default function CircleScore({score}) {

    const getColor = ()=> {
        if (score >= 80) return '#03fc52';
        if (score >= 60) return 'yellow';
        if (score >= 40) return 'orange';
        return 'red';
    }
    
    const circleStyle = {
        fill: getColor(score),
        stroke: getColor(score),
        strokeWidth: '1'
      };
    

    return (
        <>
            <label></label>
            <svg width="90" height="90" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="40" style={circleStyle} />
            <text x="50" y="50" textAnchor="middle" stroke="black" strokeWidth="1.5px" dy=".3em" fontSize='1.7em'>{score}</text>
            </svg>
        </>
    )
    }
