import React, {Component, useState} from 'react'
import { Button, List, ListItem, ListItemText, Stack, TextField } from '@mui/material';
import { FormControl } from '@mui/material';
import { OutlinedInput } from '@mui/material';

const defaultValues = {newtask: ""}


class NewTaskForm extends Component {
// const NewTaskForm = () => {

    constructor(props) {
        super()
        this.state = {
            [formValues, setFormValues] : useState(defaultValues)
        }
    }

  handleInput = event => {
    const { name, value } = event.target
    console.log(event.target)
    setFormValues({
      ...formValues,
      [name]: value,
    })
    this.props.onNewTask(event)
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(event);
    var i = this.formValues.newtask
    this.props.onNewTask(i)
  };

  addTaskToList =(newtask) => {
    // TaskList.state.tasks.push(newtask) 
    console.log("TASK COULDNT BE ADDED TO LIST")
    this.handleInput(newtask)
  }

  render() {
    return(
    <div>
      <form onSubmit={handleSubmit}>
      <TextField id="next-task-input" name="newtask" label="New Task" type="text" value={formValues.newtask} onChange={handleInput}/>
      <Button variant="contained" color="primary" type="submit">Submit</Button>
      </form>
    </div>)
  }
 
}

export default NewTaskForm