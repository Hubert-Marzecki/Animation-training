import React, {useEffect, useState} from 'react';
import './App.css';
import {useSpring, useTrail, animated} from 'react-spring'

function App() {
    const fast = { tension: 1000, friction: 40 }
    const slow = { mass: 1, tension: 100, friction:10 }
    const trans = (x, y) => `translate3d(${x}px,${y}px,0) translate3d(-50%,-50%,0)`
    const [trail, set] = useTrail(3, () => ({ xy: [0, 0], config: i => (i === 0 ? fast : slow) }))
    const [mousePosition, setMousePosition] = useState( {x:0 , y:0, entered:false})
    const [elementPosition, setElementPosition] = useState({
        bottom: 618,
        height: 300,
        left: 355.5,
        right: 655.5,
        top: 318,
        width: 300,
        x: 355.5,
        y: 318
    })
    const selector = React.createRef();

    function onMouseMove(e) {
       setMousePosition({x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY})
    }
    useEffect(() => {
       const elemOne = selector.current.getBoundingClientRect()
       setElementPosition(elemOne)
    },[])

    function handleHover(element) {
  
        if(mousePosition.x > element.x
            && mousePosition.x <= element.x + element.width
            && mousePosition.y > element.y
            && mousePosition.y <= element.y + element.height
        ) {
            setMousePosition((s) => ({
                ...s, entered: true
            }))
        }
    }
        // useEffect((elementPosition) => {
        //     handleHover(elementPosition)
        // },[mousePosition.entered])

    return (
      <div
      className="App"
      onMouseMove={onMouseMove}>
          <>
              <svg style={{ position: 'absolute', width: 0, height: 0 }}>
                  <filter id="goo">
                      <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="30" />
                      <feColorMatrix in="blur"  values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 10 -7" />
                  </filter>
              </svg>
              <div className="hooks-main" onMouseMove={e => set({ xy: [e.clientX, e.clientY] })}>
                  {trail.map((props, index) => (
                      <animated.div key={index} style={{ transform: props.xy.interpolate(trans) }} />
                  ))}
              </div>

              <div className="card__container "
              >
                    <div className="card" ref={selector} onMouseEnter={handleHover(elementPosition)}
                    >
                        <img src={"https://i.picsum.photos/id/664/2513/1669.jpg?hmac=kCNHyzqlPqyt6OXPxiX_fY-LJkh_iZUPW0AM5TyzXfA"} />
                        <p> CARD NAME  </p>
                    </div>

              </div>
          </>

      </div>
  )
}
//https://image.flaticon.com/icons/svg/119/119597.svg
// https://image.flaticon.com/icons/svg/119/119595.svg
// https://image.flaticon.com/icons/svg/119/119587.svg
// https://image.flaticon.com/icons/svg/119/119587.svg
export default App;
