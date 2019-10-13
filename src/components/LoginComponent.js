import React, { Component } from 'react'
import SliderComponent from './SliderComponent'
import axios from 'axios'

class LoginComponent extends Component{
	constructor(props) {
	    super(props);
	    this.state = {
	      opened: false
	    };
	 this.toggleBox = this.toggleBox.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
     this.handleSubmitRegister = this.handleSubmitRegister.bind(this);
	}
	toggleBox() {
    const { opened } = this.state;
    this.setState({
      opened: !opened,
    });
  }
  handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
      const email = form.elements['email'].value;
      const password =form.elements['password'].value;
      const data = {users:{
      	'email':email,
      	'password':password
      }};
      axios({
		  method: 'post',
		  url: 'https://engine-staging.viame.ae/assessment/login',
		  data: data,
		  responseType: 'json'
		}).then(function (response) {
   		if(response){
   			localStorage.setItem('user-id',response.data.token);
         	localStorage.setItem('user-email',response.data.email);
         	window.location.assign('/');
   		}
  });
  }
  handleSubmitRegister(event) {
    event.preventDefault();
    const form = event.target;
      const email = form.elements['email'].value;
      const password =form.elements['password'].value;
      const data = {users:{
      	'email':email,
      	'password':password
      }};
	axios({
		  method: 'post',
		  url: 'https://engine-staging.viame.ae/assessment/users',
		  data: data
		}).then(function (response) {
   		 window.location.assign('/');
  });
  }
	 render () {
	 	 const { opened } = this.state;
	 	return (
	 		 <section className="login-block">
	          	<div className="container dv_container">
	              <div className="row" > 
	               		<div className="col-md-8 banner-sec">
	           				<SliderComponent/>
	                	</div>
 { !opened ? (
        <div className="col-md-4 login-sec">
                    <form className="login-form" id="login-form" onSubmit={this.handleSubmit}>
                        <div className="dv_login_form">
              <h2 className="text-center"><img src="https://www.goodhand.ae/public/images/logo.svg" alt=""/> <br/> Login Now </h2>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1" className="text-uppercase">Email ID </label>
                <input type="email" className="form-control dv_input_field" placeholder="" required name="email" id="login-email"/>
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1" className="text-uppercase">Password </label>
                <input type="password" className="form-control  dv_input_field" placeholder="" required name="password" id="login-password"/>
              </div>
              <div className="form-group">
                <button type="submit" className="btn btn-login btn-block btn-primary">Submit</button>
              </div>
              <div className="dv_register">
                Dont have account <a href='javacript:void(0)' onClick={this.toggleBox}>Register</a> here
              </div>
            </div>
            </form>
          
                </div>
         ):(
          <div className="col-md-4 login-sec">
                   <form className="login-form" id="register-form" onSubmit={this.handleSubmitRegister}>
                          <div className="dv_register_form" >
                            <h2 className="text-center"><img src="https://www.goodhand.ae/public/images/logo.svg" alt="" /> <br/> Register Now </h2>
                            <div className="form-group">
                              <label htmlFor="exampleInputEmail1" className="text-uppercase">Email ID </label>
                              <input type="email" className="form-control dv_input_field" placeholder="" required name="email" id="register-email"/>
                            </div>
                            <div className="form-group">
                              <label htmlFor="exampleInputPassword1" className="text-uppercase">Password </label>
                              <input type="password" className="form-control  dv_input_field" placeholder="" required name="password" id="register-password"/>
                            </div>
                            <div className="form-group">
                              <button type="submit" className="btn btn-login btn-block btn-primary float-right">Submit</button>
                            </div>
                            <div className="dv_login">
                              have account <a href='javacript:void(0)' onClick={this.toggleBox}>Login</a> here
                            </div>
                          </div>
                          </form>
                </div>
         )}
	              </div>
	          	</div>

             </section>
	 		)
	 }
}

export default LoginComponent