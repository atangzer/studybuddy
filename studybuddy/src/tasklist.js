/**
 * 
 * Task List Component
 */
import React, {Component, useState} from 'react'
import { Button, List, ListItem, ListItemText, Stack, TextField } from '@mui/material';
import { FormControl } from '@mui/material';
import { OutlinedInput } from '@mui/material';
import NewTaskForm from './NewTaskForm'

const defaultValues = {newtask: ""}



class ListofTasks extends Component {

  render(){

    var list =  this.props.tasklist ? this.props.tasklist.map(x => {
              return(
                 <ListItem><ListItemText>
                  {x}
                 </ListItemText></ListItem>
              
            )}) : <ListItem><ListItemText></ListItemText></ListItem>

    return(
      <div>
        <Stack>
          <List>
            {list}
          </List>
        
        </Stack>
      </div>
    )
  }
}

export class TaskList extends Component {
  constructor(props) {
    super(props)
    
  }

    state = {
      tasks: ["What", "the", "fuck"]
    }

    updateTaskList = newtask => {
      var newlist = this.state.tasks
      newlist.push(newtask)
      this.setState({newlist})
    }

  render() {
    return (
      <div><header className="TaskListComponent">{this.props.title}</header> 
        <Stack>
          <NewTaskForm tasks = {this.state.tasks} onNewTask={this.updateTaskList}/>
          <ListofTasks tasks = {this.state.tasks} />
        </Stack>
      </div>
    )
  }
}
  
export default TaskList