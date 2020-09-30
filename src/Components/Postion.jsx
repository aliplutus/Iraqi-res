import React from 'react'
import { Rnd } from 'react-rnd';
import IconButton from '@material-ui/core/IconButton';
import DragIndicatorIcon from '@material-ui/icons/DragIndicator';

function Postion(handlDrag, isOver) {
      return (
            <div style={{ zIndex: '11', position: 'relative', transform: `scale(${isOver ? 1 : 0})` }} className=''>

                  <Rnd
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
      )
}

export default Postion
