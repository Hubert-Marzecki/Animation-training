import React, {useEffect, useState} from 'react';
import './App.css';
import {useSpring, useTrail, animated} from 'react-spring'

function App() {
    const fast = { tension: 1000, friction: 40 }
    const slow = { mass: 1, tension: 100, friction:10 }
    const trans = (x, y) => `translate3d(${x}px,${y}px,0) translate3d(-50%,-50%,0)`

    // useTrail multiple springs with a single dataset, one spring follows or trails behind the other
    const [trail, set] = useTrail(3, () => {
        return ({xy: [0, 0], config: i => (i === 0 ? fast : slow)});
    })

    // touble - setCard modify card
    // useSpring a single spring, moves data from a -> b
    const [card, setCard] = useSpring(() => {
        return ({xys: [0, 0, 1], config: {mass: 1, tension: 100, friction: 40}});
    })


    // calc is value of proporion on image - x- x , y-y, s- scale img
    const calc = (x, y) => [(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
    // style confugurate position of element
    const transPos = (x, y, s) => `perspective(500px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`


    return (
      <div
      className="App"
     >
          <>
              <svg style={{ position: 'absolute', width: 0, height: 0 }}>
                  {/* filter elements - add styles to elements */}
                  <filter id="goo">
                      <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="30" />
                      <feColorMatrix in="blur"  values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 10 -7" />
                  </filter>
              </svg>
              {/* add elements based on trail, and change position via "set"*/}
              {/* TOTO check what intepolate is */}
              <div className="hooks-main" onMouseMove={e => set({ xy: [e.clientX, e.clientY] })}  >
                  {trail.map((props, index) => (
                      <animated.div key={index} style={{ transform: props.xy.interpolate(trans) }} />
                  ))}
              </div>


          </>
          <div className="card__container">
              <animated.div className="card"
                   {/* add new property based on mouse position*/}
                   onMouseMove={({ clientX: x, clientY: y }) => setCard({ xys: calc(x, y) })}
                   {/* reset info about projects */}
                   onMouseLeave={() => setCard({ xys: [0, 0, 1] })}
                   {/* TOTO check what intepolate is */}
                   style={{ transform: card.xys.interpolate(transPos) }}
                  >
                  <img src={"https://i.picsum.photos/id/1002/4312/2868.jpg?hmac=5LlLE-NY9oMnmIQp7ms6IfdvSUQOzP_O3DPMWmyNxwo"} />
                  <h1> CAPTION </h1>
                  </animated.div>
          </div>
      </div>
  )
}
// img to use
//https://image.flaticon.com/icons/svg/119/119597.svg
// https://image.flaticon.com/icons/svg/119/119595.svg
// https://image.flaticon.com/icons/svg/119/119587.svg
// https://image.flaticon.com/icons/svg/119/119587.svg
export default App;
