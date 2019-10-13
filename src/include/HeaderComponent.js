import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Redirect } from 'react-router-dom'
 class HeaderComponent extends React.Component {
   	constructor(props) {
	    super(props);
	    
  }

_refreshPage(e) {
  e.preventDefault()
  localStorage.clear();

   window.location.assign('http://localhost:3000/login');
  }


 render () {
  return (
  	<nav className="navbar navbar-expand-sm bottom-border">
        <div className="container">
            <a className="navbar-brand link-float-left" href=' '>
            <img className="img-style" src="https://www.goodhand.ae/public/images/logo.svg" />
            </a>
            <ul className="navbar-nav">
                <li className="nav-item header-link">
                    <a className="nav-link" href='#' onClick={this.props.modalShow.bind(this,true)}>Add New </a>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link link-logout" href='' onClick = {this._refreshPage}>
					Logout
				</a>
                </li>
            </ul>
        </div>
    </nav>
  );
}
}

export default HeaderComponent
