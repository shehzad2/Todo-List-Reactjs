import React, { Component } from 'react'
import axios from 'axios'
/*import ReactDOM from 'react-dom'*/
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Login from './components/LoginComponent';
import Header from './include/HeaderComponent'
import TaskList from './components/TaskList'
import ModalComponent from './components/ModalComponent'
import './css/App.css';
import './css/bootstrap.min.css';

class App extends Component {
       constructor(props) {
        super(props);
        this.state = {
          TaskListData:[],
          toggle:false,
          getForm:''
        }; 
}
ajaxCallFunction(){
        var config = {
            headers: {'x-access-token': localStorage.getItem('user-id')}
        
        };
        axios.get('https://engine-staging.viame.ae/assessment/user/list',config).then(dataresponse => {
        this.setState({
            TaskListData: dataresponse.data
        })
      })
    }
saveHandleChange(value,data_id,title,description){
     var current = this;
     if(value !='' ){
        var config = {
            headers: {'x-access-token': localStorage.getItem('user-id')}
        };
        if(value == 0){
          axios.delete('https://engine-staging.viame.ae/assessment/user/task/'+data_id,config).then(response => {
            this.ajaxCallFunction();
          })
        }else{
           axios.put('https://engine-staging.viame.ae/assessment/user/task/'+data_id,
            {
              todolist: {
              title: title,
              description:description,
              status:value
              }
            }
            ,config).then(response => {
              this.ajaxCallFunction();
          })
        }
      }
}
toggleClose = (status,event) =>{
    var current = this
       current.setState({
        toggle:status
    }) 
  }
modalShow = (status,e) => {
    this.setState({
      toggle: status
    });
}
getData(getForm){
   getForm.preventDefault();
     this.setState({
    getForm:getForm,
     toggle:false
  })
     var current = this;
    const form = getForm.target;
    const title = form.elements['title'].value;
    const description =form.elements['description'].value;
    const token =form.elements['token'].value;
    const data = {todolist:{
        'title':title,
        'description':description,
         'status':1
      }};
   axios({
      method: 'post',
      url: 'https://engine-staging.viame.ae/assessment/user/task',
      headers: {'x-access-token': localStorage.getItem('user-id')},
      data: data
    }).then(function (response) {
      if(response){
        var config = {
            headers: {'x-access-token': localStorage.getItem('user-id')}
        };
        axios.get('https://engine-staging.viame.ae/assessment/user/list',config).then(response => {
        current.setState({
            TaskListData: response.data
          })
        
    })
      }
  });
}
render () {
 if(localStorage.getItem('user-email')){
  return (
   <BrowserRouter>
    
     <Header modalShow = {this.modalShow}/>
     <ModalComponent dataModal = {
    {toggleStatus:this.state.toggle,
      getData:this.getData.bind(this),
      toggleClose:this.toggleClose.bind(this)
    }
    }/>
     <TaskList showTaskList = {
     { 
      Tasks:this.state.TaskListData,
      saveHandleChange:this.saveHandleChange.bind(this)
     }
    } />
   </BrowserRouter>
  );
  }else{
     return (
          <BrowserRouter>
            <div>
              <Login/>
            </div>
          </BrowserRouter>
        )
      }
    }
  }
export default App;
