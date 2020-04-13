import React, {Fragment} from "react";
import { AppBar, Toolbar, Typography } from '@material-ui/core'
import CreateDialog from '../components/CreateDialog' ;

const Header = ({onCreateExercice}) => {
 return (
   <Fragment>
     <AppBar style={{ position:"relative" }} >
      <Toolbar>
          <Typography variant="h4" >
            Exercices Database 
          </Typography>
          <CreateDialog 
          onCreateExercice={onCreateExercice}
             />
        </Toolbar>
      </AppBar>
   </Fragment>
    
 )
};

export default Header;
