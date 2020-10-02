import React from 'react'
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

function Gallary(setimages, Gal, Ca, setCa, Type, setType) {

      function handlcick(image) {
            setimages({ link: image.largeImageURL, width: image.webformatWidth, height: image.webformatWidth })
      }
      const catigoies = ['backgrounds', 'fashion', 'nature', 'science', 'education', 'feelings', 'health', 'people', 'religion', 'places', 'animals', 'industry', 'computer', 'food', 'sports', 'transportation', 'travel', 'buildings', 'business', 'music']
      const image_type = ["all", "photo", "illustration", "vector"]
      return (
            <div >
                  <div>
                        <Select
                              labelId="demo-simple-select-filled-label"
                              id="demo-simple-select-filled"
                              value={Ca}
                              onChange={event => {
                                    setCa(event.target.value)
                              }}
                        >
                              <MenuItem value="category">
                                    <em>category</em>
                              </MenuItem>
                              {catigoies.map(ca => (
                                    <MenuItem value={ca}>{ca}</MenuItem>
                              ))}

                        </Select>

                        <Select
                              labelId="demo-simple-select-filled-label"
                              id="demo-simple-select-filled"
                              value={Type}
                              onChange={event => {
                                    setType(event.target.value)
                              }}
                        >
                              <MenuItem value="">
                                    <em>image_type</em>
                              </MenuItem>
                              {image_type.map(ca => (
                                    <MenuItem value={ca}>{ca}</MenuItem>
                              ))}

                        </Select>
                  </div>
                  {
                        Gal.map(image => (
                              <Button
                                    onClick={e => handlcick(image)}>
                                    <img
                                          role='button'
                                          style={{ height: '200px', gridColumn: '10', gridRow: '1' }}
                                          src={image.largeImageURL}
                                    />
                              </Button>

                        ))
                  }
            </div >
      )
}

export default Gallary
