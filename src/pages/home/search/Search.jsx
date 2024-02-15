import React from 'react'
import { Button, TextField } from '@mui/material'

function Search() {
  return (
    <div style={{
        display:'flex',

      }}>
        <TextField fullWidth label={"Search any"} id={"fullwidth"}/>
        <Button>Submit</Button>
      </div>
  )
}

export default Search