import React, { Component } from 'react';
/*import axios from 'axios'*/
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
const inputParsers = {
  date(input) {
    const [month, day, year] = input.split('/');
    return `${year}-${month}-${day}`;
  },
  uppercase(input) {
    return input.toUpperCase();
  },
  number(input) {
    return parseFloat(input);
  },
};
class ModalComponent extends Component {
   constructor(props) {
        super(props);
          this.state = {
          modalIsOpen : false,
        };  
 }
  render(){
  return (
    <div>
      <Modal isOpen={this.props.dataModal.toggleStatus}  className="">
        <ModalHeader onClick = {this.toggleClose}>Add Task</ModalHeader>
        <ModalBody>
         <form className="add-task-form"  onSubmit={this.props.dataModal.getData.bind(this)}>
              <div className="form-group">
                  <label htmlFor="exampleInputEmail1" className="text-uppercase">Task Name </label>
                  <input type="hidden" name="token" value={localStorage.getItem('user-id')}/>
                  <input type="text" className="form-control dv_input_field" placeholder="" name="title"  required /> 
              </div>
    <div className="form-group">
                  <label htmlFor="exampleInputEmail1" className="text-uppercase">Task Description </label>
                  <textarea className="form-control dv_input_field" cols="30" rows="10"  name="description"  required></textarea>
              </div> 
              <div className="form-group">
                  <button type="submit" className="btn btn-login btn-block btn-primary float-right">Submit</button>
              </div>
              </form>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick = {this.props.dataModal.toggleClose.bind(this,false)}>Close</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}
}
export default ModalComponent;