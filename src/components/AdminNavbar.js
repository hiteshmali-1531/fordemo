"use client"
import { color } from '@mui/system';
import { useState } from 'react';
import { Sidebar, Menu, MenuItem, SubMenu,sidebarClasses ,} from 'react-pro-sidebar'

const AdminNavbar = () => {
    
    const [isExpanded, setIsExpanded] = useState(true);
    function handleToggle() {
     
        
        setIsExpanded(!isExpanded);
      
    }
  return (
    (
        <div>
          <Sidebar collapsedWidth='80px'   collapsed={!isExpanded}  rootStyles={{
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
                <SubMenu label="Students" rootStyles={{backgroundColor:'#1A1D2A'}}   menuItemStyles={{
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
                <MenuItem > Manage Students </MenuItem>
                <MenuItem> Attendence</MenuItem>
                <MenuItem>Marks & Results</MenuItem>
                <MenuItem>Fee & Finance</MenuItem>
                </SubMenu>
                <SubMenu label="Faculty">
    
                  <MenuItem> Manage Faculties </MenuItem>
                  <MenuItem> Assign Classes </MenuItem>
                  <MenuItem>Assign Mentoring</MenuItem>
                    <MenuItem>Attendence</MenuItem>
                </SubMenu>
                <SubMenu label="Examination">
                    <MenuItem>Create Shedule</MenuItem>
                    <MenuItem>Manage Result</MenuItem>
                    <MenuItem>Generate Marksheet</MenuItem>
                    {/* <MenuItem>Exam Form</MenuItem> */}
                </SubMenu>
                <SubMenu label="Admission">
    
                  <MenuItem> Student </MenuItem>
                  <MenuItem> Faculty </MenuItem>
                  </SubMenu>
                  <SubMenu label="Result">
    
                  <MenuItem> Student </MenuItem>
                  <MenuItem> Faculty </MenuItem>
                  </SubMenu>
            </Menu>
            </Sidebar>;
        </div>
      )
  )
}

export default AdminNavbar
