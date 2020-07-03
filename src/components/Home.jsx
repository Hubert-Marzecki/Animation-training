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
    const bg = "https://img.freepik.com/darmowe-zdjecie/zroznicowany-stol-do-sushi-widziany-z-gory_136960-135.jpg?size=626&ext=jpghttps://a-static.besthdwallpaper.com/sushi-thai-food-tapeta-3554x1999-3589_53.jpg"
    const icons = [[Sushi1, "ONE"], [Sushi2,"TWO"], [Sushi3, "THREE"], [Sushi4, "FOUR"], [Sushi5, "FIVE" ]]
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
 
    const iconDisplay = icons.map(([itemImg, itemName]) => {
        return (
            <div className={css`
            display:flex;
            flex-direction: column;
            `}>
         
            <img src={itemImg} className={css`
            width:100px; 
            margin: 3em;
            `} />
            <p className={css`text-align:center; font-family: ${mainFont}`}> {itemName}</p>
           </div>
        )
       
    })

    const linkHome = css`
    margin: 1em; 
    font-size: 40px ; 
    color: white ;
    font-family: ${mainFont};
    cursor: pointer; 
    text-decoration: overline;
}

     `;

return (
    <>
     <div>
      <a.div className={css` 
      background-image: url(${bg}); 
      position: absolute;
      width: 40ch;
      height: 40ch;
      left:10%;
      top:25%;
      cursor: pointer;
      will-change: transform, opacity;
      `} style={{ opacity: opacity.interpolate(o => 1 - o), transform }} />
      <a.div class={css``} style={{ opacity, transform: transform.interpolate(t => `${t} rotateX(180deg)`) }} />
    </div>


    <div className={css` 
    height: 100vh;
    color: $text-color;
    background-image: url(${bg});
    background-size: cover;
    backdrop-filter: grayscale(0.9) opacity(0.8) 
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
    

        <span className={linkHome} onClick={() => set((s) => {return {...s, one: !s.one}})} >MENU</span>  
        <span className={linkHome}>KONTAKT</span>    
        <span className={linkHome}>ZAMÓW</span>              
        </div>
        <p className={css`
        position: absolute; 
        color:white; 
        left: 50%; 
        top:90%;
        transform:translate(-50%, -50%);
        font-family: ${mainFont};
        font-size: 10px;
`}> 

123 Fake Street — Seattle, WA — 206-555-7890
</p>
    </div>
    </>
)
}