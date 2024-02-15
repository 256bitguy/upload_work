import React, { useEffect, useState } from 'react'
import { Button,   Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from '@mui/material'

function Lists() {
  const [data,setData]=useState();
  const Daa=[
    {"date":"6/02/2024",
     "react":"Updated Work",
       "node":"No progress",
       "apply":"Link click here",
       "others":"Nothing"
    },
    {"date":"7/02/2024",
     "react":"Updated Work",
       "node":"No progress",
       "apply":"Link click here",
       "others":"Nothing"
    },
    {"date":"8/02/2024",
     "react":"Updated Work",
       "node":"No progress",
       "apply":"Link click here",
       "others":"Nothing"
    },
    {"date":"9/02/2024",
     "react":"Updated Work",
       "node":"No progress",
       "apply":"Link click here",
       "others":"Nothing"
    },
    {"date":"10/02/2024",
     "react":"Updated Work",
       "node":"No progress",
       "apply":"Link click here",
       "others":"Nothing"
    },
    {"date":"11/02/2024",
     "react":"Updated Work",
       "node":"No progress",
       "apply":"Link click here",
       "others":"Nothing"
    },
    {"date":"12/02/2024",
     "react":"Updated Work",
       "node":"No progress",
       "apply":"Link click here",
       "others":"Nothing"
    },
    {"date":"13/02/2024",
     "react":"Updated Work",
       "node":"No progress",
       "apply":"Link click here",
       "others":"Nothing"
    }
 ]
  useEffect(()=>{
   const  result=async ()=>{
      try{
        const response = await fetch('https://256bitguy.github.io/my_work/dailywork.json');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        console.log(result);
        setData(result);
    }catch (error){
      console.log(error)
    }
    }
    result();
  },[])
  console.log(Daa);
  const row=["Date","ReactJs","NodeJS","Apply","Others"];
  return (
    <div><div style={{
        width:"100vw",
        marginTop:"30px"
      }}>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                {
                  row.map((item)=>{
                    return(
                      <TableCell style={{fontSize:"20px",textAlign:"center",border:"1px solid black",margin:'2px'}}>{item}</TableCell>
                    )
                  })
                }
                
                 
              </TableRow>
            </TableHead>
            <TableBody>
             {
              Daa.map((item)=>{
                return(
                  <TableRow  >
                      <TableCell style={{fontSize:"20px",textAlign:"center",border:"1px solid black",margin:'2px'}}>{item.date}</TableCell>
                      <TableCell style={{fontSize:"20px",textAlign:"center",border:"1px solid black",margin:'2px'}}>{item.react}</TableCell>
                      <TableCell style={{fontSize:"20px",textAlign:"center",border:"1px solid black",margin:'2px'}}>{item.node}</TableCell>
                      <TableCell style={{fontSize:"20px",textAlign:"center",border:"1px solid black",margin:'2px'}}> {item.apply}</TableCell>
                      <TableCell style={{fontSize:"20px",textAlign:"center",border:"1px solid black",margin:'2px'}}> {item.others}</TableCell>
                      </TableRow>
                      
                      )
                    })
                  }
                  </TableBody>
          </Table>
        </TableContainer>
      </div></div>
  )
}

export default Lists