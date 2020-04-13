import React, {Fragment, Component} from 'react' ;
import {Dialog, Button } from '@material-ui/core'
import {DialogTitle, DialogContent, DialogContentText} from '@material-ui/core' ;
import AddIcon from '@material-ui/icons/Add';
import Form from './Form';
import {Consumer} from '../Context';


class CreateDialog extends Component {
    state = {
        open: false
    }

    handleToggle = () => {
        this.setState({
            open: !this.state.open
        })
    }

    handleFormSubmit= (exercice) => {
        this.handleToggle()

        this.props.onCreateExercice(exercice)
    }

   
    render(){
        const { open } = this.state;
             
        return (
            <Consumer>
                {
                    ({ muscles }) => <Fragment>
                        <Button variant="fab" color="secondary"
                        onClick={this.handleToggle} 
                        style={{ position: "absolute", right: 10 }} >
                            <AddIcon />
                        </Button>
                    <Dialog open={open} onClose={this.handleToggle} >
                        <DialogTitle >
                            Create New Exercice
                        </DialogTitle>
                        <DialogContent>
                                <DialogContentText>
                                Please fill out the form below 
                                </DialogContentText>

                                <Form 
                                    muscles={muscles}
                                    onSubmit={this.handleFormSubmit}
                                />

                            </DialogContent>
                        </Dialog>
                    </Fragment>
                }
                    
            </Consumer>
        )
    }
}

export default CreateDialog ; 
