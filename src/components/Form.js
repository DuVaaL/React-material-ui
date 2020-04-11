import React, {Component} from 'react'
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import {TextField, MenuItem, Button } from '@material-ui/core'


class Form extends Component {
    
    state = this.getInitialState() 
           
    getInitialState(){
        const { exercice } = this.props

        return exercice ? exercice : { 
            title: '',
            description: '',
            muscles: ''
        }
    }

   static getDerivedStateFromProps({exercice}) {
       return exercice
    }

    handleChange = (name) => (event) => 
        this.setState({
            [name]: event.target.value
        })
    

    handleSubmit = () => {   

        this.props.onSubmit({ 
            id: this.state.title.toLocaleLowerCase().replace(/ /g, '-'),
                ...this.state  
        })
            
        this.setState(this.getInitialState())
    }

    render(){

        const { title, description, muscles } = this.state,
              { muscles: categories} = this.props ;

        return(
            <form>
                <TextField value={title}
                    label="title" 
                    onChange={this.handleChange('title')}
                    style={{width:500}}
                    />
                    <br />

                <FormControl style={{width:500}} >
                     <InputLabel>
                        muscles
                    </InputLabel>
                    <Select value={muscles}
                        onChange={this.handleChange('muscles')} >
                         {
                              categories.map((category, index) => {
                              return <MenuItem  key={index} value={category}> {category} </MenuItem>
                               })
                         }
                    </Select>
                    </FormControl>
                    <br />
                    <TextField  value={description}
                     multiline
                     rows="4"
                     label="description" 
                     onChange={this.handleChange('description')}
                     style={{width:500}}
                    /> 
                    <br />
                            <Button 
                              variant="contained"
                              onClick={this.handleSubmit}
                              color="primary">
                                {this.props.exercice ? 'Edit' : 'Create'}
                            </Button>
            </form>
        )
    }

}

export default Form ;