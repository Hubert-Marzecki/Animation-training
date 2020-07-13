import React from 'react';
import { Howler, Howl } from 'howler'
import {useSpring, useTrail, animated as a} from 'react-spring';
import useMeasure from 'react-use-measure'
import { css, cx } from 'emotion';
import { useState } from "react";
import { useEffect } from "react";
import playIcon from '../assets/pngguru.com.png'

export  function ButtonSound  () {
const mainFont = `'Krona One', sans-serif`;

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

    return (
      <div  className={css`
      position:fixed;
      top:90%;
      left:90%;
      cursor: pointer;
      color:white;
      text-align:center;
      font-family: ${mainFont};
      @media (max-width: 600px) {
        left: 50%;
        transform: translate(-50%)
      }
     

      `}>
      <p
      className={css`padding:10px`}> FEEL THE WIBE </p>
        <img src={playIcon} 
       className={css`width:40px`}
        onClick={() => sound.play()}
          />

        </div>
    )
    }

    export default ButtonSound