import React from 'react'
import Button from '@material-ui/core/Button';

function Gallary(setimages, Gal, handleChange) {
      function handlcick(image) {
            handleChange()
            setimages({ link: image.urls.regular, width: image.width, height: image.height })
      }
      return (
            <div >
                  {Gal.map(image => (
                        <Button onClick={e => handlcick(image)}><img role='button' style={{ height: '200px', gridColumn: '10', gridRow: '1' }} src={image.urls.regular} /></Button>

                  ))}
            </div>
      )
}

export default Gallary
