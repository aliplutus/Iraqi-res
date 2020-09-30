import React, { useRef, useState } from 'react';
import TheTitleField from './SVGs/TheTitleField.svg'
import './App.css';
import Title from './Components/Title';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import { exportComponentAsJPEG } from "react-component-export-image";
import posterLogo from './SVGs/posterLogo.png'
import Postion from './Components/Postion'
import Gallary from './Components/Gallary';



function App() {
  const box = useRef()
  const ref = useRef()
  const image = useRef()
  const [Gal, setGal] = useState([])
  const [images, setimages] = useState('https://arbordayblog.org/wp-content/uploads/2018/06/oak-tree-sunset-iStock-477164218.jpg')
  const [styles, setStyles] = useState({})
  const [isOver, setOver] = useState(false)
  const [tooLong, setLong] = useState(false)
  const [h, setH] = useState(true)
  function handleChange(e) {
    // console.log(styles)
    if (h) { setStyles({ height: `${image.current.width}px`, width: `${image.current.height}px` }) }
    if (!h) { setStyles({ height: '500px' }) }
    setH(image.current.height > image.current.width)
    // console.log(h)
  }
  function handlDrag(e) {
    if (h) setStyles({ left: e.pageX - image.current.width / 2 })
    if (!h) setStyles(pre => {
      return { ...pre, top: e.pageY - image.current.height / 2 }
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
          {Title(ref, setOver, setLong, tooLong, setimages, handleChange, setGal)}
          {Postion(handlDrag, isOver)}
          {!tooLong && <img className='field' src={TheTitleField} alt={TheTitleField} />}
          {tooLong && <img className='iraq-res-logo' src={posterLogo} alt={posterLogo} />}
          <img ref={image} style={styles} className='image' src={images} alt='https://arbordayblog.org/wp-content/uploads/2018/06/oak-tree-sunset-iStock-477164218.jpg' />
        </div>
      </div>
      {Gallary(setimages, Gal, handleChange)}
      <input onChange={handleChange} placeholder='add image url here.' />
      <Button
        onClick={() => exportComponentAsJPEG(box)}
        variant="contained"
        color="primary"
        size="large"
        startIcon={<SaveIcon />}
      >
        Export as JPEG
      </Button>

    </div>

  );
}

export default App;
