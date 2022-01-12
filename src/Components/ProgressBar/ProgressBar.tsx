import React, {useEffect, useRef} from 'react';
import {pure} from 'recompose';
import {useSpring, animated} from "react-spring";
import './ProgressBar.css';

type Props = {
    topImg: string,
    barImg: string,
    minValue: number,
    MaxValue: number,
    stopValue: number,
    processingTime: number,
    repeatable: boolean,
    repeatTimes: number,
}

const ProgressBar = (props: Props) => {
    const percent = ((props?.stopValue - props?.minValue) * 100) / (props?.MaxValue - props?.minValue);
    const loopRef = useRef(0);
    const [topBarStyles, animation] = useSpring(() => ({
        loop: () => {
            if (props?.repeatable) {
                return props?.repeatTimes > loopRef.current++
            }
        },
        from: {width: '0%'},
        to: {width: `${percent}%`},
        config: {duration: props?.processingTime * 1000}
    }))
    useEffect(() => {
        animation.start({width: `${percent}%`})
    }, [props?.stopValue])
    return (
        <div className="progressContainer">
            <img src={props?.barImg} alt="" className="background"/>
            <animated.img src={props?.topImg} style={topBarStyles} alt="" className="cover"/>
        </div>
    );
}

export default pure(ProgressBar);
