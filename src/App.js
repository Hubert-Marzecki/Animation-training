import React, {useEffect, useState} from 'react';
import './App.css';
import {useSpring, useTrail, animated} from 'react-spring'

function App() {
    const fast = { tension: 1000, friction: 40 }
    const slow = { mass: 1, tension: 100, friction:10 }
    const trans = (x, y) => `translate3d(${x}px,${y}px,0) translate3d(-50%,-50%,0)`
    const [trail, set] = useTrail(3, () => {
        return ({xy: [0, 0], config: i => (i === 0 ? fast : slow)});
    })

    const [card, setCard] = useSpring(() => {
        return ({xys: [0, 0, 1], config: {mass: 1, tension: 1000, friction: 40}});
    })

    const calc = (x, y) => [(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
    const transPos = (x, y, s) => `perspective(500px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`


    return (
      <div
      className="App"
     >
          <>
              <svg style={{ position: 'absolute', width: 0, height: 0 }}>
                  <filter id="goo">
                      <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="30" />
                      <feColorMatrix in="blur"  values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 10 -7" />
                  </filter>
              </svg>
              <div className="hooks-main" onMouseMove={e => set({ xy: [e.clientX, e.clientY] })}  >
                  {trail.map((props, index) => (
                      <animated.div key={index} style={{ transform: props.xy.interpolate(trans) }} />
                  ))}
              </div>


          </>
          <div className="card__container">
              <animated.div className="card"
                   onMouseMove={({ clientX: x, clientY: y }) => setCard({ xys: calc(x, y) })}
                   onMouseLeave={() => setCard({ xys: [0, 0, 1] })}
                   style={{ transform: card.xys.interpolate(transPos) }}
                  />
              <animated.div className="card"
                            onMouseMove={({ clientX: x, clientY: y }) => setCard({ xys: calc(x, y) })}
                            onMouseLeave={() => setCard({ xys: [0, 0, 1] })}
                            style={{ transform: card.xys.interpolate(transPos) }}
              />
              <animated.div className="card"
                            onMouseMove={({ clientX: x, clientY: y }) => setCard({ xys: calc(x, y) })}
                            onMouseLeave={() => setCard({ xys: [0, 0, 1] })}
                            style={{ transform: card.xys.interpolate(transPos) }}
              />
              <animated.div className="card"
                            onMouseMove={({ clientX: x, clientY: y }) => setCard({ xys: calc(x, y) })}
                            onMouseLeave={() => setCard({ xys: [0, 0, 1] })}
                            style={{ transform: card.xys.interpolate(transPos) }}
              />
              <animated.div className="card"
                            onMouseMove={({ clientX: x, clientY: y }) => setCard({ xys: calc(x, y) })}
                            onMouseLeave={() => setCard({ xys: [0, 0, 1] })}
                            style={{ transform: card.xys.interpolate(transPos) }}
              />
              <animated.div className="card"
                            onMouseMove={({ clientX: x, clientY: y }) => setCard({ xys: calc(x, y) })}
                            onMouseLeave={() => setCard({ xys: [0, 0, 1] })}
                            style={{ transform: card.xys.interpolate(transPos) }}
              />
              <animated.div className="card"
                            onMouseMove={({ clientX: x, clientY: y }) => setCard({ xys: calc(x, y) })}
                            onMouseLeave={() => setCard({ xys: [0, 0, 1] })}
                            style={{ transform: card.xys.interpolate(transPos) }}
              />
              <animated.div className="card"
                            onMouseMove={({ clientX: x, clientY: y }) => setCard({ xys: calc(x, y) })}
                            onMouseLeave={() => setCard({ xys: [0, 0, 1] })}
                            style={{ transform: card.xys.interpolate(transPos) }}
              />
              <animated.div className="card"
                            onMouseMove={({ clientX: x, clientY: y }) => setCard({ xys: calc(x, y) })}
                            onMouseLeave={() => setCard({ xys: [0, 0, 1] })}
                            style={{ transform: card.xys.interpolate(transPos) }}
              />
              <animated.div className="card"
                            onMouseMove={({ clientX: x, clientY: y }) => setCard({ xys: calc(x, y) })}
                            onMouseLeave={() => setCard({ xys: [0, 0, 1] })}
                            style={{ transform: card.xys.interpolate(transPos) }}
              />
              <animated.div className="card"
                            onMouseMove={({ clientX: x, clientY: y }) => setCard({ xys: calc(x, y) })}
                            onMouseLeave={() => setCard({ xys: [0, 0, 1] })}
                            style={{ transform: card.xys.interpolate(transPos) }}
              />


          </div>
      </div>
  )
}
//https://image.flaticon.com/icons/svg/119/119597.svg
// https://image.flaticon.com/icons/svg/119/119595.svg
// https://image.flaticon.com/icons/svg/119/119587.svg
// https://image.flaticon.com/icons/svg/119/119587.svg
export default App;
