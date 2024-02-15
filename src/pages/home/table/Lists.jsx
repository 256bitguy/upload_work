import React, { useEffect, useState } from 'react'
import { Button,   Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from '@mui/material'

function Lists() {
  const [data,setData]=useState();
  useEffect(()=>{
   const  result=async ()=>{
      try{
        const response = await fetch('https://256bitguy.github.io/my_work/dailywork.json');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        setData(result);
    }catch (error){
      console.log(error)
    }
    }
    result();
  },[])
  console.log(data);
  return (
    <div><div style={{
        width:"100vw",
        marginTop:"30px"
      }}>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell style={{fontSize:"20px",textAlign:"center",border:"1px solid black",margin:'2px'}}>Date</TableCell>
                <TableCell style={{fontSize:"20px",textAlign:"center",border:"1px solid black",margin:'2px'}}>ReactJs</TableCell>
                <TableCell style={{fontSize:"20px",textAlign:"center",border:"1px solid black",margin:'2px'}}>NodeJS</TableCell>
                <TableCell style={{fontSize:"20px",textAlign:"center",border:"1px solid black",margin:'2px'}}>Apply</TableCell>
                <TableCell style={{fontSize:"20px",textAlign:"center",border:"1px solid black",margin:'2px'}}>Others</TableCell>
                 
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow  >
                <TableCell style={{fontSize:"20px",textAlign:"center",border:"1px solid black",margin:'2px'}}>12/02/2024</TableCell>
                <TableCell style={{fontSize:"20px",textAlign:"center",border:"1px solid black",margin:'2px'}}>Updated last project</TableCell>
                <TableCell style={{fontSize:"20px",textAlign:"center",border:"1px solid black",margin:'2px'}}>No Progress</TableCell>
                <TableCell style={{fontSize:"20px",textAlign:"center",border:"1px solid black",margin:'2px'}}><a>click here!!</a></TableCell>
                <TableCell style={{fontSize:"20px",textAlign:"center",border:"1px solid black",margin:'2px'}}>interview tha</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </div></div>
  )
}

export default Lists