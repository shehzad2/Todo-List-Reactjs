import axios from 'axios'
    import React, { Component } from 'react'
    import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem ,Form, FormGroup, Label, Input, FormText} from 'reactstrap';
    class TaskList extends Component {
      constructor (props) {
        super(props)
        this.state = {
          Tasks: []
        }
      }
      
  
      componentDidMount () {
       var current = this
         var config = {
            headers: {'x-access-token': localStorage.getItem('user-id')}
        };
        axios.get('https://engine-staging.viame.ae/assessment/user/list',config).then(response => {
        current.setState({
            Tasks: response.data
          })
    })
      }
      render () {
         let  Tasks = [];

        if(this.props.showTaskList.Tasks!= '' ){
            Tasks = this.props.showTaskList.Tasks
        }else if(this.state.Tasks){
            Tasks = this.state.Tasks
        }
    return (
    <div className="dv_table_wrapper">
        <div className="container">
            <div className="table-responsive">
                <table className="table table-bordered dv_task_table">
                    <thead>
                        <tr>
                            <th>Task</th>
                            <th>Description </th>
                            <th>Status </th>
                            <th>Action </th>
                        </tr>
                    </thead>
                    <tbody id="add-table">
                         { (Tasks !='') ? (
                            Tasks.map(task => (
                        <tr >
                            <td key={task._id+'_title'}>{task.title}</td>
                            <td key={task._id+'_description'}>{task.description}</td>
                            <td key={task._id+'_status'} id={task._id}>
                            {
                               (task.status == 1) ? (
                                    <span className="dv_working_task" >  Created </span>
                                ):''
                            }
                             {
                            (task.status == 2) ? (
                                <span className="dv_finish_task" > Finish </span>
                            ):''}
                              {(task.status == 3) ? (
                                <span className="dv_working_task" >Working</span>
                             ):''}
                            {(task.status == 4) ? (
                            <span className="dv_cancel_task" >Cancel</span>
                            ):''}
                            {(task.status == 0) ? (
                            <span className="dv_delete_task" >Delete</span>  
                            ):''}
                           </td>
                            <td key={task._id+'_status_select'}>
                             <FormGroup>
                              <Input type="select" onChange={(e)=>this.props.showTaskList.saveHandleChange(e.target.value,task._id,task.title,task.description)}>
                                <option value="">Select Status</option>
                                <option value="2">Finish</option>
                                <option value="3">Working</option>
                                <option value="4">Cancel</option>
                                <option value="0">Delete</option>
                              </Input>
                            </FormGroup>
                            </td>
                        </tr>
                        ))):(
                          <tr >
                          <td className="text-center center-block" colSpan="4">Empty Data</td>
                          </tr>
                         )}

                    </tbody>
                </table>
            </div>
        </div>
    </div>
        )
      }
    }

    export default TaskList