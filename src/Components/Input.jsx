import React from 'react'
import { exportComponentAsJPEG } from "react-component-export-image";
import SaveIcon from '@material-ui/icons/Save';
import Button from '@material-ui/core/Button';
import Slider from '@material-ui/core/Slider';

function Input(setLineH, link, box) {

      return (

            <div className='work'>
                  <div
                        style={{ color: 'white', width: '300px' }}
                  >
                        text line height
                  <Slider
                              valueLabelDisplay="auto"
                              onChange={(e, newValue) => setLineH(newValue)}
                              type='range' />
                  </div>

                  <input placeholder='add image url here.' />
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
