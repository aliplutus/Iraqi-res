import React, { useEffect, useRef } from 'react';
import TheTitleField from './SVGs/TheTitleField.svg'
import './App.css';

function App() {
  const ref = useRef()

  useEffect(() => {

  }, [])
  return (
    <div onMouseOver={() => ref.current.focus()} className="App">
      <div className='outline'></div>
      <div
        className='container'>
        <div
          className='title-containter'>
          <div
            placeholder='add text here'
            className='title'
            dir='rtl'
            ref={ref}
            contentEditable />
        </div>
        <img className='field' src={TheTitleField} alt={TheTitleField} />
        <img className='image' src='https://arbordayblog.org/wp-content/uploads/2018/06/oak-tree-sunset-iStock-477164218.jpg' />
      </div>
    </div>
  );
}

export default App;
