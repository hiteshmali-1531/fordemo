"use client"
import { color } from '@mui/system';
import { useState } from 'react';
import { Sidebar, Menu, MenuItem, SubMenu,sidebarClasses } from 'react-pro-sidebar'
// import 'react-pro-sidebar/dist/styles'

const page = () => {
   

    const [isExpanded, setIsExpanded] = useState(true);
    function handleToggle() {
     
        
        setIsExpanded(!isExpanded);
      
    }
  return (
    <div>
      <Sidebar collapsedWidth='80px'   collapsed={isExpanded}  rootStyles={{
          [`.${sidebarClasses.container}`]: {
              backgroundColor: '#1A1D2A',
              height:'100vh'
            },
        }}>
      <button className='text-white' onClick={handleToggle}>X</button>

        <Menu   menuItemStyles={{
      button: ({ level, active, disabled }) => {
        // only apply styles on first level elements of the tree
        if (level === 0)
          return {
        color: '#fff',
            color: disabled ? '#fff' : '#fff',
            backgroundColor: active ? '#1A1D2A' : undefined,
            color: active? 'red' :'#fff',
            "&:hover": {
                     backgroundColor: "#335B8C !important",
                     color: "white !important",
                   
                    
                   },
          };
      },
    }}
  >
            <SubMenu label="Charts" rootStyles={{backgroundColor:'#1A1D2A'}}   menuItemStyles={{
      button: ({ level, active, disabled }) => {
        // only apply styles on first level elements of the tree
       if(level === 1)
          return {
            
       
            "&:hover": {
                     backgroundColor: "black !important",
                     color: "black !important",
                   
                    
                   },
          };
      },
    }} >
            <MenuItem > Admission </MenuItem>
            <MenuItem> Line charts </MenuItem>
            </SubMenu>
            <MenuItem> Student </MenuItem>
            <MenuItem> Faculty </MenuItem>
        </Menu>
        </Sidebar>;
    </div>
  )
}

export default page
