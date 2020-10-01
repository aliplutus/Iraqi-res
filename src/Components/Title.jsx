import React, { useState } from 'react'
import { Textfit } from 'react-textfit';
import { Resizable, ResizableBox } from "react-resizable";
import { Rnd } from 'react-rnd';
import axios from "axios";



const unsplash = axios.create({
      baseURL: "https://api.unsplash.com",
      headers: {
            Authorization:
                  "Client-ID ba7a5f05cbacfadc407c3ec3bf480ffacf13db55806dc883b225795b95080d38"
      }
})


function Title(ref, setOver, setLong, tooLong, setimages, setGal) {
      const [state, setstate] = useState({ width: '300px' })
      const [isover, setIsOver] = useState(false)
      const [styles, setStyles] = useState({
            x: -200,
            y: 166,
            width: '344px',
            fontSize: '20px'
      })

      function handlKeyUP(e) {
            unsplash.get("/search/photos", {
                  params: { query: ref.current.innerText },
                  // onDownloadProgress: function (progressEvent) { setLoading(progressEvent.timeStamp) }
            }).then(response => {
                  setimages({ link: response.data.results[0].urls.regular, width: response.data.results[0].width, height: response.data.results[0].height })
                  setGal(response.data.results)
            })
            if (e.target.innerText.length > 69) {
                  setLong(true)
                  setstate({ padding: '5px', paddingRight: '0px', background: 'linear-gradient(90deg, rgba(202,51,39,1) 0%, rgba(11,15,28,1) 100%)', borderRadius: '4px', width: '500px' })
            }
            if (e.target.innerText.length < 69) {
                  setLong(false)
                  setstate({})
            }
      }

      return (
            <div
                  onMouseLeave={() => setOver(true)} onMouseOverCapture={() => setOver(false)}
                  className='title-containter'>
                  <Rnd
                        onMouseOver={e => setIsOver(true)} onMouseLeave={e => setIsOver(false)}
                        style={{ border: isover ? '2px solid #61dafb' : 'none', ...state }}
                        default={styles}
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
