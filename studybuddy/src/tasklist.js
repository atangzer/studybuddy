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



const ListofTasks = () => {



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

const TaskList = () => {
  // constructor = (props) => {
  //   super(props)
    
  // }

    const state = {
      tasks: ["What", "the", "fuck"]
    }

    const updateTaskList = newtask => {
      var newlist = this.state.tasks
      newlist.push(newtask)
      this.setState({newlist})
    }

    return (
      <div><header className="TaskListComponent">{this.props.title}</header> 
        <Stack>
          <NewTaskForm tasks = {this.state.tasks} onNewTask={this.updateTaskList}/>
          <ListofTasks tasks = {this.state.tasks} />
        </Stack>
      </div>
    )

}
  
export default TaskList