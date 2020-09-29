import React, { useState } from 'react'
import DragResizeContainer from 'react-drag-resize';

function Title(ref) {
      const [isOver, setOver] = useState(false)
      // console.log(isOver)
      return (
            <div onMouseOver={e => setOver(true)} onMouseLeave={e => setOver(false)}
                  className='title-containter'>
                  <div
                        ref={ref}
                        placeholder='add text here'
                        className='title'
                        dir='rtl'
                        contentEditable />
            </div>
      )
}

export default Title
