import React, { useState } from 'react'
import { Textfit } from 'react-textfit';
import { Resizable, ResizableBox } from "react-resizable";
import { Rnd } from 'react-rnd';


function Title(ref, setOver, setLong, tooLong) {
      const [state, setstate] = useState({})
      const [isover, setIsOver] = useState(false)
      function handlKeyUP(e) {
            if (e.target.innerText.length > 69) {
                  setLong(true)
                  setstate({ right: '0px', width: '500px !important', background: 'linear-gradient(90deg, rgba(202,51,39,1) 0%, rgba(11,15,28,1) 100%)', borderRadius: '10px', width: ' 100 %' })
            }
      }
      return (
            <div
                  style={{ ...state }}
                  onMouseLeave={() => setOver(true)} onMouseOverCapture={() => setOver(false)}
                  className='title-containter'>
                  <Rnd
                        onMouseOver={e => setIsOver(true)} onMouseLeave={e => setIsOver(false)}
                        style={{ border: isover ? '2px solid #61dafb' : 'none' }}
                        default={{
                              x: -177,
                              y: 155,
                              width: 320,
                        }}
                  >
                        <Textfit
                              mode="single">
                              <div

                                    onKeyUp={handlKeyUP}
                                    ref={ref}
                                    placeholder='add text here'
                                    className='title'
                                    dir='rtl'
                                    contentEditable />
                        </Textfit>
                  </Rnd>
            </div>
      )
}

export default Title
