import React from "react";
import "./home.scss"
import Sushi1 from '../assets/sushi.svg'
import Sushi2 from '../assets/sushi(1).svg'
import Sushi3 from '../assets/sushi(2).svg'
import Sushi4 from '../assets/sushi(3).svg'
import Sushi5 from '../assets/sushi(4).svg'
import {useSpring, useTrail, animated as a} from 'react-spring'

import { css, cx } from 'emotion';
import { useState } from "react";
const dur = 7000;

export function Home() {
    const bg = "https://cdn.statically.io/img/free4kwallpapers.com/uploads/originals/2019/10/29/city-of-japan-wallpaper.jpg"
    const mainFont = `'Krona One', sans-serif`;
    const [flipped, set] = useState({
        one: true,
        two: true 
    })

    // zparametryzować
    const { transform, opacity } = useSpring({
      opacity: flipped.one ? 1 : 0,
      transform: `perspective(600px) rotateX(${flipped.one ? 180 : 0}deg)`,
      config: { mass: 5, tension: 500, friction: 80 }
    })
 
    const linkHome = css`
    margin: 1em; 
    font-size: 40px ; 
    color: white ;
    font-family: ${mainFont};
    cursor: pointer; 
    text-decoration: overline;
    }
}

     `;

return (
<div>
    {/* img  */}
     <>
      <a.div className={css` 
      background-image: url("https://pm1.narvii.com/6375/7c1d306ae58f6881abe7b386e70f7c915aaae937_hq.jpg");
      background-size: cover;
      background-attachment: fixed;
      position: absolute;
      width: 20ch;
      height: 30ch;
      left:10%;
      top:35%;
      cursor: pointer;
      will-change: transform, opacity;
      `} style={{ opacity: opacity.interpolate(o => 1 - o), transform }} />
      <a.div class={css``} style={{ opacity, transform: transform.interpolate(t => `${t} rotateX(180deg)`) }} />
    </>


    <div className={css` 
    height: 100vh;
    color: $text-color;
    background-image: url(${bg});
    background-size: cover;
    background-blend-mode: darken;
    `
    }>
      
      
        <div className={
            css`
            position: relative;
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            left:50%;
            top:50%;
            transform:translate(-50%, -50%)
            `
        }>
    

        <span className={linkHome} onMouseEnter={() => set((s) => {return {...s, one: !s.one}})}onMouseLeave={() => set((s) => {return {...s, one: !s.one}})} >MENU</span>  
        <span className={linkHome}>KONTAKT</span>    
        <span className={linkHome}>ZAMÓW</span>              
        </div>
        <p className={css`
        position: absolute; 
        color:white; 
        left: 50%; 
        top:40%;
        transform:translate(-50%, -50%);
        font-family: ${mainFont};
        font-size: 10px;
`}> 

123 Fake Street — Seattle, WA — 206-555-7890
</p>
    </div>
    </div >
)
}