import React, { useState, useEffect } from 'react'
import { Textfit } from 'react-textfit';
import { Rnd } from 'react-rnd';
import axios from "axios";


function Title(lineH, ref, setOver, setLong, tooLong, setimages, setGal, Ca, Type) {
      const [text, setText] = useState('')
      const [state, setstate] = useState({ width: '300px' })
      const [isover, setIsOver] = useState(false)

      useEffect(() => {
            // axios.get(
            //       `https://pixabay.com/api/?key=13742120-5155f19dfb2dafd25deee41f9&image_type=photo&lang=ar&category=${Ca}&image_type=${Type}&q=${text.length > 0 && text.replace(/ /gi, '+')}`

            // ).then(response => {
            //       setimages({ link: response.data.hits[0].largeImageURL, width: response.data.hits[0].webformatWidth, height: response.data.hits[0].webformatHeight })
            //       setGal(response.data.hits)
            // })
            if (text > 69) {
                  setLong(true)
                  setstate({ padding: '5px', paddingRight: '0px', background: 'linear-gradient(90deg, rgba(202,51,39,1) 0%, rgba(11,15,28,1) 100%)', borderRadius: '4px', width: '500px' })
            }
            if (text < 69) {
                  setLong(false)
                  setstate({})
            }
      }, [Ca, Type, text])



      return (
            <div
                  style={{ lineHeight: `${lineH * 4}%` }}
                  onMouseLeave={() => setOver(true)} onMouseOverCapture={() => setOver(false)}
                  className='title-containter'>

                  <Rnd
                        onMouseOver={e => setIsOver(true)} onMouseLeave={e => setIsOver(false)}
                        style={{ borderLeft: isover ? '6px solid #61dafb' : 'none', borderRight: isover ? '6px solid #61dafb' : 'none', ...state }}
                        default={{
                              x: -200,
                              y: 166,
                              width: '344px',
                              fontSize: '20px'
                        }}
                  >
                        <Textfit

                              mode="single">
                              <div
                                    style={{ alignSelf: 'center' }}
                                    onKeyUp={e => setText(e.target.innerText)}
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
