import React, { useContext, useEffect} from 'react';
import { useSpring, animated } from 'react-spring';
import { Context  } from '../Game';
import useWindowDimensions from '../hooks/useWindowDimensions';

export default function CutLine(props) {

    const {postion: { index, orientation }} = useContext (Context);
    const { width: sizing } = useWindowDimensions ();
    const style = cutLineStyle (orientation, sizing, index);

    function cutLineStyle (orientation, length, index) {
        let sizing;
        if (length > 480)
            sizing = 200;
        else
            sizing = 100;
        const border = 10;
        if (orientation === "vertical") {
            let newLeft = "50%";
            if (index % 3 === 0)
            newLeft = "50% - " + (sizing ) + "px";
            if (index % 3 === 2)
            newLeft = "50% + " + (sizing ) + "px";
            return ({
                left: "-webkit-calc(" + newLeft + ")",
                top: "0px",
                transformOrigin: "0% 50%",
                transform: "rotate(90deg)"
            });
        }
        if (orientation === "orizontal") {
            let newTop;
            if (index < 3) 
                newTop = (sizing / 2) - border + "px";
            if (index > 2 && index < 6)
                newTop = "50% - " +  border + "px";
            if (index > 5 && index < 9)
                newTop = "50% + " + (sizing - border) + "px";
            
            return ({
                left: "-webkit-calc(50% - " + (3 * (sizing / 2)) + "px)",
                top: "-webkit-calc(" + newTop + ")",
            });
        }
        if (orientation === "oblic-primary") {
            return ({
                left: "-webkit-calc(50% - " + (3 * (sizing / 2.5)) + "px",
                top: "-webkit-calc(50% - " + (3 * (sizing / 2.5)) + "px",
                transformOrigin: "0% 50%",
                transform: "rotate(45deg)"
            });
        }
        if (orientation === "oblic-secondary") {
            return ({
                left: "-webkit-calc(50% + " + (3 * (sizing / 2.5)) + "px",
                top: "-webkit-calc(50% - " + (3 * (sizing / 2.5)) + "px",
                transformOrigin: "0% 0%",
                transform: "rotate(135deg)"
            });
        }
    }

    const prop = useSpring ({
        from: {width: 0},
        to: {width: (sizing > 480) ? 590 : 300},
        config: { duration: 1000},
    });

    return (
        <animated.div className= "board-cutline" style = {{...prop, ...style}}>
        </animated.div>
    )
}
