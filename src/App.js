import React, { Component, Fragment } from "react";
import {CssBaseline} from '@material-ui/core' ;
import Header from "./Layouts/Header";
import Footer from './Layouts/Footer';
import Exercices from './components/Exercices';
import { muscles, exercices } from "./store";
import { Provider } from './Context' ;
import 'typeface-roboto'

class App extends Component {
  state = {
    exercices,
    category: '',
    exercice: {}
  };

  getMuscles() {
    const reducer = (exercices, exe) => {
      const { muscles } = exe;

      exercices[muscles] = exercices[muscles]
        ? [...exercices[muscles],exe]
        : [exe];

      return exercices;
    };

    return Object.entries(this.state.exercices.reduce(reducer, {}));
  }

  
  onCreateExercice = (param) => 
      this.setState(({exercices}) => ({
        exercices: [...exercices, param]
        }
      ))


  handleExerciceSelect = (id) => 
    this.setState(({ exercices }) =>({
      exercice: exercices.find(ex => ex.id === id),
      editMode: false
    }))

  handleChangeSelect = (category) => 
    this.setState({
      category
    })

  handleOnDelete = (param) => 
   this.setState(({exercices, exercice}) => ({
      exercices: exercices.filter(ex => ex.id !== param),
     editMode: false,
     exercice: exercice.id === param ? {} : exercice
   }))
  

  handleExerciceEdit = (id) => 
  this.setState(({ exercices }) =>({
    exercice: exercices.find(ex => ex.id === id),
    editMode: true 
  }))

  exerciceEdit = exercice => 
     this.setState(({ exercices }) => ({
    exercices: [
      ...exercices.filter(ex => ex.id !== exercice.id),
      exercice
    ], exercice
  }))

  getContext = () => ({
    muscles,
    ...this.state
  })

  render() {
    const exercices = this.getMuscles() 
    const {category,exercice, editMode} = this.state  ;

    return (
      <Provider value={this.getContext()} >

            <Fragment>
              <CssBaseline />

              <Header 
              onCreateExercice={this.onCreateExercice}
                  />

            <Exercices exercices={exercices}
                category={category}
                exercice={exercice}
                muscles={muscles}
                onSelect={this.handleExerciceSelect}
                editMode={editMode}
                onSelectEdit={this.handleExerciceEdit}
                onDelete={this.handleOnDelete}
                onEdit={this.exerciceEdit}
                />

              <Footer 
                muscles={muscles}
                handleChange={this.handleChangeSelect} 
                category={category}
              />
            </Fragment>
      </Provider>
    );
  }
}

export default App;
