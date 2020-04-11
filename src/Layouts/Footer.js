import React from "react";
import {Paper, Tabs } from '@material-ui/core'
import {Tab} from '@material-ui/core'

const Footer = ({muscles, handleChange, category}) => {
  const index = category 
  ? muscles.findIndex( group => group === category ) + 1
  : 0 ;
  
  const indexSelect = (event, index) => handleChange(index === 0 ? '' : muscles[index-1]) ;

  const musclees = muscles.map((muscle, index) => {
        return (
          <Tab key ={index} label ={muscle} />
        )
  })
  return (
    <Paper >
    <Tabs value={index}
      onChange={indexSelect}
      indicatorColor="secondary"
      textColor="primary"
      scrollable
      >
        <Tab label = "All" />
        { musclees }
    </Tabs>
  </Paper>
    )
};

export default Footer;
