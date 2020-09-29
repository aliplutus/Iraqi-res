import React, { useEffect, useRef, useState } from 'react';
import TheTitleField from './SVGs/TheTitleField.svg'
import './App.css';
import Title from './Components/Title';

function App() {
  const ref = useRef()
  const image = useRef()
  const [state, setstate] = useState('https://arbordayblog.org/wp-content/uploads/2018/06/oak-tree-sunset-iStock-477164218.jpg')
  const [styles, setStyles] = useState()

  function handleChange(e) {
    setstate(e.target.value)
    image.current.offsetWidth > image.current.offsetHeight ? setStyles({ height: `${image.current.width}px`, width: `${image.current.height}px` }) : setStyles({ height: '500px' })
  }
  return (
    <div
      onMouseOver={() => ref.current.focus()}
      className="App">

      <div className='outline'></div>
      <div
        className='container'>

        {Title(ref)}
        <img className='field' src={TheTitleField} alt={TheTitleField} />
        <input onChange={handleChange} placeholder='add image url here.' />
        <img ref={image} style={styles} className='image' src={state} alt='https://arbordayblog.org/wp-content/uploads/2018/06/oak-tree-sunset-iStock-477164218.jpg' />
      </div>
    </div>
  );
}

export default App;
