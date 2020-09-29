import React, { useState, useRef } from 'react'
import DragResizeContainer from 'react-drag-resize';

function Title(ref) {
      // const ref = useRef()
      const [isOver, setOver] = useState(false)
      const [font, setFont] = useState(40)
      function handlChange(e) {
            console.log(ref.current.innerText.length)
            ref.current.innerText.length > 13 ? setFont(30) : setFont(40)
            ref.current.innerText.length > 16 ? setFont(20) : setFont(40)
      }

      return (
            <div onMouseOver={e => setOver(true)} onMouseLeave={e => setOver(false)}
                  className='title-containter'>
                  <div
                        style={{ fontSize: `${font}px` }}
                        onKeyUp={handlChange}
                        ref={ref}
                        placeholder='add text here'
                        className='title'
                        dir='rtl'
                        contentEditable />
            </div>
      )
}

export default Title
