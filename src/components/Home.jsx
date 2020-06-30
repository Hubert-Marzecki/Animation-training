import React from "react";
import "./home.scss"
import Sushi1 from '../assets/sushi.svg'
import Sushi2 from '../assets/sushi(1).svg'
import Sushi3 from '../assets/sushi(2).svg'
import Sushi4 from '../assets/sushi(3).svg'
import Sushi5 from '../assets/sushi(4).svg'
import {useSpring, useTrail, animated} from 'react-spring'

import { css, cx } from 'emotion';
const dur = 7000;

export function Home() {

    const bgImages = [Sushi1, Sushi2, Sushi3, Sushi4, Sushi5]
    function randomNum(amount) {
        return Math.floor(Math.random() * amount)
    }

    const motion = useSpring({
        from: {left: `-400px`, opacity: "0.3"
    },
        to: async next => {
            while(1) {
                await next({left:  `2000`, opacity:`0`})
                await next({left:  `-400`})
            }
        },
        config: {duration: dur},
        reset: true,
    })
    const motionBack = useSpring({
        from: {left: `2000px`, opacity: "0.3"
    },
        to: async next => {
            while(1) {
                await next({left:  `-400`, opacity:`0`})
                await next({left:  `2000`})
            }
        },
        config: {duration: dur},
        reset: true,
    })
    const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
    const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`
    const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 1, tension: 350, friction: 40 } }))


return (
    <div className="home">
        <div className="bg__element">

            {/* {bgImages.slice(0,2).sort(() => Math.random() - 0.5).map((item, index) => {
                return (
                    <animated.img className={css`
                        position: absolute;
                        opacity: 0.3;
                        height: ${randomNum(30) * randomNum(7) + 50}px;
                        top: ${index*200*randomNum(3)}px ;
                        z-index: -1;
                    `} src={item}
                        style={motion}
                    />
                )
            })}

            {bgImages.slice(2,5).sort(() => Math.random() - 0.5).map((item, index) => {
                return (
                    <animated.img className={css`
                        position: absolute;
                        height: ${randomNum(30) * randomNum(7) + 50}px;
                        top: ${index*200*randomNum(3)}px ;
                        z-index: -1;
                    `} src={item} 
                    style={motionBack}
                    />
                )
            })}  */}

        </div>
        <h1 className="hero__header"> THE BEST YOU CAN FIND </h1>
        <div className="hero">
      
        </div>
    </div>
)
}