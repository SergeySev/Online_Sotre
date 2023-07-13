import { Box, Slider } from '@mui/material'
import React, { useState } from 'react'

export default function FilterPriceRange({ max, min, setRequestBody }) {
  // console.log(typeof (min), typeof (max));

  const [value, setValue] = useState([100, 500]);

  const sliderChange = (event, newValue) => {
    setValue(newValue);
    setRequestBody('Price', newValue)
  }

  return (
    <Box sx={{ width: 200 }}>
      <Slider
        value={value}
        onChange={sliderChange}
        valueLabelDisplay="auto"
        min={min} max={max}
      // color='#000'
      />
    </Box>
  )
}
