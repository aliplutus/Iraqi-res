import React from 'react'
import { exportComponentAsJPEG } from "react-component-export-image";
import SaveIcon from '@material-ui/icons/Save';
import Button from '@material-ui/core/Button';
function Input(setimages, link, box) {
      return (

            <div className='work'>
                  <input onKeyUp={e => setimages({ link: e.target.value.startsWith('http') ? e.target.value : link })} placeholder='add image url here.' />
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
      )
}

export default Input
