import React from 'react';
import './BouncingBalls.scss';

export default function BouncingBalls(props) {
    return (
        <div className="ballContainer" >
            <div className="ball" id="ball_1"/>
            <div className="ball" id="ball_2"/>
            <div className="ball" id="ball_3"/>
        </div>
    )
}