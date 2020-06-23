import React from "react";
import "./home.scss"
import Sushi1 from '../assets/sushi.svg'
import Sushi2 from '../assets/sushi(1).svg'
import Sushi3 from '../assets/sushi(2).svg'
import Sushi4 from '../assets/sushi(3).svg'
import Sushi5 from '../assets/sushi(4).svg'
import {useSpring, useTrail, animated} from 'react-spring'

import { css, cx } from 'emotion';

export function Home() {

    const bgImages = [Sushi1, Sushi2, Sushi3, Sushi4, Sushi5]
    function randomNum(amount) {
        return Math.floor(Math.random() * amount)
    }
    const interp = i => r => `translate3d(0, ${15 * Math.sin(r + (i * 2 * Math.PI) / 1.6)}px, 0)`
    const { radians } = useSpring({
        to: async next => {
            while (1) await next({ radians: 2 * Math.PI })
        },
        from: { radians: 0 },
        config: { duration: 3500 },
        reset: true,
    })
return (
    <div className="home">
        <div className="bg__element">

            {bgImages.slice(0,2).sort(() => Math.random() - 0.5).map((item) => {
                return (
                    <img className={css`
                        position: absolute;
                        height: ${randomNum(30) * randomNum(7) + 50}px;
                        left: ${randomNum(300)}px;
                        top: ${randomNum(40) * randomNum(2)}vh;
                        z-index: -1;
                    `} src={item}

                    />
                )
            })}

            {bgImages.slice(1,4).sort(() => Math.random() - 0.5).map((item, index) => {
                return (
                    <img className={css`
                        position: absolute;
                        height: ${randomNum(30) * randomNum(7) + 50}px;
                        top: ${randomNum(40) * randomNum(2)}vh;
                        right: ${randomNum(300)}px ;
                        z-index: -1;
                    `} src={item} />
                )
            })}

        </div>

        <div className="hero">
        <h1 className="hero__header"> THE BEST YOU CAN FIND </h1>
        <img className="hero__img" src="https://img.freepik.com/darmowe-zdjecie/lososiowy-sushi-z-zielonym-wasabi-na-czarnym-talerzu-lub-danie-i-sosem-shoyu-na-czarnym-tle_85778-94.jpg?size=626&ext=jpg" />
        <img className="hero__img" src="https://img.freepik.com/darmowe-zdjecie/japonskie-jedzenie-maki-i-nigiri-suszi-ustawiajacy-na-czarnej-tlo-odgornego-widoku-kopii-przestrzeni_123827-2338.jpg?size=626&ext=jpg" />
        <img className="hero__img" src="https://www.hashisushi.pl/wp-content/uploads/futomaki-18.png" />
        </div>
    </div>
)
}