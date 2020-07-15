import React from "react";
import { css, cx } from 'emotion';
import menu from './menu.scss'
import {useSpring, useTrail, animated as a} from 'react-spring';


const caption = css`
font-size: .9em;
color: #777;
margin-bottom: 1.5em;
font-style: italic;
`;
const name = css` position: relative;
font-weight: 700;
margin: .7em 0 1em 0;
color:white
`
const price = css`
float:right; padding-left:1em
`


export function Menu (props) {
  console.log(props.style);
    return(
      <a.div
      className={
        css`
        position:absolute;
        width:100%;
        background-color:black;
        height: 100vh;
        ${props.style};
        will-change: opacity, z-index;
        transition: opacity 0.3s;
        `
      }
      
      >

        <div className={css`
        position: relative;
        width: 50%;
        top: 20%;
        margin: auto;
        border: 1px solid #ddd;
        padding: .3em .6em;
        `}>
     
        <h3 className={name}> 
          <span>Fancy Food Item</span>
          <span className={price}>25</span>
        </h3>
        <p className={caption}> A well-written, appetite inspiring description that aims to inform the information and food deprived consumer</p>
        <h3 className={name}>
          <span>Fancy Food Item</span>
          <span className={price}>25</span>
        </h3>
        <p className={caption}>A well-written, appetite inspiring description that aims to inform the information and food deprived consumer</p>
        <h3 className={name}>
          <span>Fancy Food Item</span>
          <span className={price}>25</span>
        </h3>
        <p className={caption}>A well-written, appetite inspiring description that aims to inform the information and food deprived consumer</p>
      </div>
      </a.div>
    )
}
export default Menu;