import React, {Fragment} from "react";
import { AppBar, Toolbar, Typography } from '@material-ui/core'
import CreateDialog from '../components/CreateDialog' ;

const Header = ({muscles, onCreateExercice}) => {
 return (
   <Fragment>
     <AppBar style={{ position:"relative" }} >
      <Toolbar>
          <Typography variant="h4" >
            Exercices Database 
          </Typography>
          <CreateDialog 
          onCreateExercice={onCreateExercice}
          muscles={muscles} />
        </Toolbar>
      </AppBar>
   </Fragment>
    
 )
};

export default Header;
