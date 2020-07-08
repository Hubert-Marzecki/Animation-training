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
import { Howler, Howl } from 'howler'
import {useSpring, useTrail, animated as a} from 'react-spring';
import useMeasure from 'react-use-measure'

import { css, cx } from 'emotion';
import { useState } from "react";
import { useEffect } from "react";
const dur = 7000;


export function Home() {
    const bg = "https://cdn.statically.io/img/free4kwallpapers.com/uploads/originals/2019/10/29/city-of-japan-wallpaper.jpg"
    const mainFont = `'Krona One', sans-serif`;

    // used with first menu item
    const [animationTrigger, setAnimationTrigger] = useState({
        menuItem: true,
        contactItem: false,
        orderItem: false,
        soundOne: false,
    })
    const { transform, opacity } = useSpring({
      opacity: animationTrigger.menuItem ? 1 : 0,
      transform: `perspective(600px) rotateX(${animationTrigger.menuItem ? 180 : 0}deg)`,
      config: { mass: 5, tension: 500, friction: 80 }
    })


    // Audio added
    const audioClip = [
      {sound: `https://raw.githubusercontent.com/goldfire/howler.js/master/examples/player/audio/80s_vibe.mp3`, label: "Future Asia"},
      {sound: "https://www.youtube.com/watch?v=pBOKeVsiJho", label: "Old Asia"}
  ]

      const sound = new Howl ({
          src: ["https://raw.githubusercontent.com/goldfire/howler.js/master/examples/player/audio/80s_vibe.mp3"],
          html5: true,
          volume: 1,
      })
      
    useEffect(() => {
          sound.play()
       
    },[])

    
    function soundTriggerHolder (soundObj) {
      setAnimationTrigger((s) => ({...s, soundOne: !s.soundOne}));
      if(animationTrigger.soundOne) {
        sound.play()
      } else{ Howler.stop();}
    }

    const RenderButtonSound = () => {
      return audioClip.map((soundObj, index) => {
        return (
          <button 
          className={css`font-size: 300px`}
          key={index}
          onClick={() => soundTriggerHolder(soundObj)}>
          {soundObj.label}
          
          </button>
        )
      })
    }


    //  styles 
    const linkHome = css`
    margin: 1em; 
    font-size: 40px ; 
    color: white ;
    font-family: ${mainFont};
    cursor: pointer; 
    text-decoration: overline;
     `;

     const animatedImg=css`
     background-size: cover;
     background-attachment: fixed;
     position: fixed;
     width: 400px;
     height: 500px;
     cursor: pointer;
     `
    


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
      `} style={{ opacity: opacity.interpolate(o => 1 - o), transform }} />
      <a.div className={css``} style={{ opacity, transform: transform.interpolate(t => `${t} rotateX(180deg)`) }} />
    </>

    {/* IMG KONTAKT */}
    <a.div className={css` 
      background-image: url(${edo});
      ${animatedImg}
      left:40%;
      ${animationTrigger.contactItem ? `top:50%;` : `top: 100%;`}
      transition: top 1s;
      will-change: transform, opacity;
      `} />

      {/* IMG ZAMÓW */}
      <a.div className={css` 
      background-image: url(${edoTwo});
      ${animatedImg}
      left:70%;
      top:30%;
      ${animationTrigger.orderItem ? `opacity:1;` : `opacity:0;`}
      transition: opacity 0.5s;
      will-change: transform, opacity;
      `} />

    {/*  MOTO ONE */}
    <a.div className={css` 
      background-image: url(${motoOne});
      ${animatedImg}
      width: 100px;
      height: 100px;
      left:50%;
      top:90%;
      transition: opacity 0.5s;
      cursor: none;
      will-change: transform, opacity;
      `}  />


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
                {/*  ADRRESS  */}
                <h2 className={css`
                width: 100%; 
                text-align:center;   
                font-family: ${mainFont};
                font-size: 10px;
                color:white;
                `}>123 Fake Street — Seattle, WA — 206-555-7890
                </h2> 
        

            {/*  MENU LINK */}
            <h2 className={linkHome} 
                onMouseEnter={() => setAnimationTrigger((s) => {return {...s, menuItem: !s.menuItem}})}
                onMouseLeave={() => setAnimationTrigger((s) => {return {...s, menuItem: !s.menuItem}})} 
                >
                    MENU
            </h2>  

        {/*  KOTNAKT LINK */}
        <h2 className={linkHome}  
        onMouseEnter={() => setAnimationTrigger((s) => {return {...s, contactItem: true}})}
        onMouseLeave={() => setAnimationTrigger((s) => {return {...s, contactItem: false}})} 
         >KONTAKT</h2>  
          {/* ZAMÓW LINK */}
        <h2 className={linkHome}
         onMouseEnter={() => setAnimationTrigger((s) => {return {...s, orderItem: true}})}
         onMouseLeave={() => setAnimationTrigger((s) => {return {...s, orderItem: false}})} 
        >ZAMÓW</h2>  
               
        </div>
        {RenderButtonSound()}
   
    </div>
    </div >
)
}