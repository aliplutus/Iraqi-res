import React, { useRef, useState, useEffect } from 'react';
import TheTitleField from './SVGs/TheTitleField.svg'
import './App.css';
import Title from './Components/Title';
import posterLogo from './SVGs/posterLogo.png'
import Postion from './Components/Postion'
import Input from './Components/Input'
import Gallary from './Components/Gallary'

const link = 'https://arbordayblog.org/wp-content/uploads/2018/06/oak-tree-sunset-iStock-477164218.jpg'

function App() {
  const [Ca, setCa] = React.useState('');
  const [Type, setType] = React.useState('');
  const box = useRef()
  const ref = useRef()
  const image = useRef()
  const [Gal, setGal] = useState([])
  const [images, setimages] = useState({ link: link })
  const [styles, setStyles] = useState({ height: '500px', width: 'auto' })
  const [isOver, setOver] = useState(false)
  const [tooLong, setLong] = useState(false)
  const [lineH, setLineH] = useState(100)

  useEffect(() => {
    if (image.current.height < image.current.width) setStyles(pre => {
      return { height: '500px', width: 'auto' }
    })
    else if (image.current.height > image.current.width) setStyles(pre => {
      return { height: 'auto', width: '500px' }
    })

  }, [images])
  function handlDrag(e) {
    if (image.current.height < image.current.width) setStyles(pre => {
      return { left: e.pageX - image.current.width / 2, height: '500px', width: 'auto' }
    })
    else if (image.current.height > image.current.width) setStyles(pre => {
      return { top: e.pageY - image.current.height / 2, height: 'auto', width: '500px' }
    })
  }
  return (

    <div >

      <div
        onMouseLeave={() => setOver(false)} onMouseOverCapture={() => setOver(true)}
        onMouseOver={() => ref.current.focus()}
        className="App">
        <div className='outline'></div>
        <div ref={box} className='container'>
          {Title(lineH, ref, setOver, setLong, tooLong, setimages, setGal, Ca, Type)}
          {Postion(handlDrag, isOver)}
          {!tooLong && <img className='field' src={TheTitleField} alt={TheTitleField} />}
          {tooLong && <img className='iraq-res-logo' src={posterLogo} alt={posterLogo} />}
          <img ref={image} style={{ ...styles }} className='image' src={images.link} alt={link} />
        </div>
      </div>
      {Input(setLineH, setimages, Gal, setimages, link, box)}
      <div className='Gallary'>
        {Gallary(setimages, Gal, Ca, setCa, Type, setType)}
      </div>
    </div>

  );
}

export default App;
