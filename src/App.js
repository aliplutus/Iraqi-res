import React, { useRef, useState } from 'react';
import TheTitleField from './SVGs/TheTitleField.svg'
import './App.css';
import Title from './Components/Title';
import DragIndicatorIcon from '@material-ui/icons/DragIndicator';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import { exportComponentAsJPEG, exportComponentAsPDF, exportComponentAsPNG } from "react-component-export-image";
import { Rnd } from 'react-rnd';



function App() {
  const box = useRef()
  const ref = useRef()
  const image = useRef()
  const [state, setstate] = useState('https://arbordayblog.org/wp-content/uploads/2018/06/oak-tree-sunset-iStock-477164218.jpg')
  const [styles, setStyles] = useState()
  const [isOver, setOver] = useState(false)
  const [tooLong, setLong] = useState(false)
  const [h, setH] = useState(true)
  function handleChange(e) {
    setstate(e.target.value)
    image.current.offsetWidth > image.current.offsetHeight ? setStyles({ height: `${image.current.width}px`, width: `${image.current.height}px` }) : setStyles({ height: '500px' })
    setH(image.current.height > image.current.width)
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
          {Title(ref, setOver, setLong, tooLong)}
          {!tooLong && <img className='field' src={TheTitleField} alt={TheTitleField} />}
          <div style={{ zIndex: '11', position: 'relative', transform: `scale(${isOver ? 1 : 0})` }} className=''>
            <Rnd
              // default={{ resizeHandleWrapperStyle: false }}
              handle=".handle"
              position={null}
              grid={[25, 25]}
              scale={1}
              onDrag={handlDrag}
            >
              <IconButton style={{ backgroundColor: 'white', color: 'tomato' }} variant="contained" color="default" className='handle' >
                <DragIndicatorIcon />
              </IconButton>
            </Rnd>
          </div>
          <img ref={image} style={styles} className='image handle' src={state} alt='https://arbordayblog.org/wp-content/uploads/2018/06/oak-tree-sunset-iStock-477164218.jpg' />

        </div>
      </div>
      <input onChange={handleChange} placeholder='add image url here.' />
      <Button
        style={{ zIndex: '13' }}
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
