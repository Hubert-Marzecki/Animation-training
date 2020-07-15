import React from "react";
import "./home.scss"
import Sushi1 from '../assets/sushi.svg'
import Sushi2 from '../assets/sushi(1).svg'
import Sushi3 from '../assets/sushi(2).svg'
import Sushi4 from '../assets/sushi(3).svg'
import Sushi5 from '../assets/sushi(4).svg'
import edo from '../assets/edo.jpg';
import edoTwo from '../assets/sushi-menu.jpg';
import motoOne from '../assets/moto1.png'
import waterDrop from '../assets/water-drop.mp3'
import playIcon from '../assets/pngguru.com.png'
import { Howler, Howl } from 'howler'
import {useSpring, useTrail, animated as a} from 'react-spring';
import useMeasure from 'react-use-measure'
import { css, cx } from 'emotion';
import { useState } from "react";
import { useEffect } from "react";
import Menu from './Menu'
import ButtonSound from './ButtonSound';


export function Home() {
  const [animationTrigger, setAnimationTrigger] = useState({
    menuItem: true,
    contactItem: false,
    orderItem: false,
    menuVisible: false
})

    const bg = "https://cdn.statically.io/img/free4kwallpapers.com/uploads/originals/2019/10/29/city-of-japan-wallpaper.jpg"
    const mainFont = `'Krona One', sans-serif`;
    const dur = 7000;

  
    const { transform, opacity } = useSpring({
      opacity: animationTrigger.menuItem ? 1 : 0,
      transform: `perspective(600px) rotateX(${animationTrigger.menuItem ? 180 : 0}deg)`,
      config: { mass: 5, tension: 500, friction: 80 }
    })

    //  styles 
    const linkHome = css`
    margin: 1em; 
    font-size: 40px ; 
    color: white ;
    font-family: ${mainFont};
    cursor: pointer; 
    text-decoration: overline;
    z-index:100;

     `;

     const animatedImg=css`
     background-size: cover;
     background-attachment: fixed;
     position: fixed;
     width: 400px;
     height: 500px;
     cursor: pointer;
     `
    
    //  MENU BUTTON DISPALY MENU
const menuDisplayAnimation = `opacity:1; z-index:1; width: 100%`

  const menuStatic = `opacity:0; z-index:-1; width: 0%`

  // MENU ACTION MOVE MENUHOLDER
  const menuHolderMove = `top:90%;`;

  const menuHolderStatic = `top:50%;`

return (
<div>
     <>
         {/* IMG MENU */}
      <a.div className={css` 
      background-image: url("https://pm1.narvii.com/6375/7c1d306ae58f6881abe7b386e70f7c915aaae937_hq.jpg");
      ${animatedImg}
      left:20%;
      top:35%;
      will-change: transform, opacity;
      `} style={{ opacity: opacity.interpolate(o => 1 - o)}} />
      <a.div className={css``} style={{ opacity }} />
    </>

    {/* IMG KONTAKT */}
    <a.div className={css` 
      background-image: url(${edo});
      ${animatedImg}
      left:40%;
      ${animationTrigger.contactItem ? `top:50%;` : `top: 100%;`};
      transition: top 1s;
      will-change: transform, opacity;
      `} />

      {/* IMG ZAMÓW */}
      <a.div className={css` 
      background-image: url(${edoTwo});
      ${animatedImg}
      left:70%;
      top:30%;
      ${animationTrigger.orderItem ? `opacity:1;` : `opacity:0;`};
      transition: opacity 0.5s;
      will-change: transform, opacity;
      `} />

      {/* MENU */}
     <Menu 
      style={animationTrigger.menuVisible ?  menuDisplayAnimation : menuStatic}
     />



    {/* APP */}
    <div className={css` 
    height: 100vh;
    color: $text-color;
    background-image: url(${bg});
    background-size: cover;
    background-blend-mode: darken;
    `
    }>
      
        {/* MENU HOLDER */}
        <a.div className={
            css`
            position: relative;
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            left:50%;
            transform:translate(-50%, -50%);
            ${animationTrigger.menuVisible ? menuHolderMove : menuHolderStatic}
            will-change: top;
            transition: top 0.5s;
            z-index:100;
            `
        }
        // style={animationTrigger.menuVisible ? menuHolderMove : menuHolderStatic}
        >
        {/*  ADRRESS  */}
            <h2 className={css`
            width: 100%; 
            text-align:center;   
            font-family: ${mainFont};
            font-size: 10px;
            color:white;
            `}> 123 Fake Street — Seattle, WA — 206-555-7890
            </h2> 


        {/*  ZPARAMETRYZOWAĆ  */}
        {/*  MENU LINK */}
        <h2 className={linkHome} 
            onMouseEnter={() => setAnimationTrigger((s) => {return {...s, menuItem: !s.menuItem}})}
            onMouseLeave={() => setAnimationTrigger((s) => {return {...s, menuItem: !s.menuItem}})} 
            onClick={(e) => setAnimationTrigger((s) => ({...s, menuVisible: !s.menuVisible}) )} 
            > MENU
        </h2>  
        {/*  KOTNAKT LINK */}
        <h2 className={linkHome}  
        onMouseEnter={() => setAnimationTrigger((s) => {return {...s, contactItem: true}})}
        onMouseLeave={() => setAnimationTrigger((s) => {return {...s, contactItem: false}})} 
         >KONTAKT
         </h2>  
          {/* ZAMÓW LINK */}
        <h2 className={linkHome}
         onMouseEnter={() => setAnimationTrigger((s) => {return {...s, orderItem: true}})}
         onMouseLeave={() => setAnimationTrigger((s) => {return {...s, orderItem: false}})} 
        >ZAMÓW
        </h2>  
              
        </a.div>
        {ButtonSound()}
   
    </div>
    </div >
)
}