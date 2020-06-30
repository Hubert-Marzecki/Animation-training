import React from 'react';
import './nav.scss';
import Sushi1 from '../assets/sushi.svg'
import {
    Link
} from "react-router-dom";
import {useSpring,  animated} from 'react-spring'



const calc = (x, y) => [(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

export function Navigation () {
    const [props, set] = useSpring(() =>
        ({ xys: [0, 0, 1], config: { mass: 1, tension: 500, friction: 10 } }))

    return (
       <ul className="nav">
           <li className="nav__link"><Link to="/about"> About </Link> </li>
           <li className="nav__link"
             >
               <Link to="/" >
               <animated.img className="nav__link nav__link--img" src={Sushi1}
                    onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
                    onMouseLeave={() => set({ xys: [0, 0, 1] })}
                    style={{ transform: props.xys.interpolate(trans) }}
                />
           </Link> </li>
           <li className="nav__link">       <Link to="/menu">Menu</Link> </li>
       </ul>

    )
}