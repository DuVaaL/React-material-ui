import React, {Fragment} from "react";
import { Grid, Paper, Typography, List, ListItemSecondaryAction, IconButton } from "@material-ui/core";
import {ListItem, ListItemText} from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import Form from './Form';
import {withStyles} from '@material-ui/core/styles'


const styles = (theme) => ({
  Paper: {
    padding: 20,
    margin: 10,
    height: 500,
    overflow: 'auto', 
  }
});


export default withStyles(styles)(
({exercices,
   classes,
   exercice,
   category, 
   onSelect,
   onDelete,
   onEdit,
   onSelectEdit,
   muscles,
   editMode,
   exercice:  { 
      id, 
      title= 'Welcome !',
       description= 'Please Select the exercise' ,
      },
    }) => {

  return (
    <Grid container>
      <Grid item xs={12} sm={6}>
        <Paper className={classes.Paper}>
          {exercices.map(([group, exercices]) => (
            !category || category === group 
                ? <Fragment>
                        <Typography color="secondary"
                          variant="h5"
                          style={{ textTransform: "capitalize" }} >
                            {group}
                        </Typography>
 
                        <List component="ul">
                              {exercices.map(({title, id}) => 
                                <ListItem button
                                    key={id}
                                   onClick={() => {onSelect(id)}}
                                   >
                                    <ListItemText primary={title} />
                                      <ListItemSecondaryAction>
                                          <IconButton color="primary" onClick={ () => onSelectEdit(id) } >
                                           <EditIcon />
                                          </IconButton> 
                                         <IconButton color="primary" onClick={ () => onDelete(id) } >
                                           <DeleteIcon />
                                          </IconButton> 
                                      </ListItemSecondaryAction>
                                </ListItem>
                              )}
                        </List>
                    </Fragment> 
               : null
          ))}
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Paper className={classes.Paper}>
          { editMode 
          ? <Form 
            exercice={exercice}
            muscles={muscles} 
            onSubmit={onEdit}
               />
          :  
            <Fragment>
              <Typography variant="h5" color="secondary" >
                {title}
              </Typography>
              <Typography>
                {description}
              </Typography>
            </Fragment>
          }
        </Paper>
      </Grid>
    </Grid>
  );
});

// export default withStyles(styles){(Exercices)};
