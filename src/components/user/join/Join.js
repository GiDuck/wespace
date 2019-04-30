import React, { Component } from 'react';
import '../common/page.css';
import SubmitButton from '../common/submitButton';
import Text from '../common/text';
import PasswordText from '../common/passwordText';
import Profile from './profile';
import './joinPage.css';

class Join extends Component {

  constructor(props){
    super(props);
    this.state={
      username : "",
      email : "",
      password : "",
        errors : {
          username : "",
          email : "",
          password : "",
        },
    }
  }

  handleChange = (event) => {
    event.preventDefault();
    console.log(event.target.value);
    const { name, value } = event.target;
    let errors = this.state.errors;

    const validEmailRegex= RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
    
    // 영문, 숫자 혼합해서 6~10자리
    const validPasswordRegex=RegExp(/^.*(?=.{6,10})(?=.*[0-9])(?=.*[a-zA-Z]).*$/);
  
    switch (name) {
      case "username": 
        errors.username = 
          value.length < 5
            ? "Full Name must be 5 characters long!"
            : "";
        break;
      case "email": 
        errors.email = 
          validEmailRegex.test(value)
            ? ""
            : "Email is not valid!";
        break;
      case "password": 
        errors.password = 
        validPasswordRegex.test(value)
            ? ""
            : "Password is not valid!\n[6~10 digits including letters and number]";
        break;
      default:
        break;
    }
  
    this.setState({errors, [name]: value}, ()=> {
        console.log(errors);
    })
  }

 
  render() {
    const {errors} =this.state;
    return (
    
      <div className="page">
        <label className="title" htmlFor="join">Join Us</label>
        <Profile/>
       <Text text="User Name" name="username" onChange={this.handleChange.bind(this)}/>
       {errors.username.length > 0 && <span className='error'>{errors.username}</span>}
        <Text text="Email" name="email" onChange={this.handleChange.bind(this)}/>
        {errors.email.length > 0 && <span className='error'>{errors.email}</span>}
        <PasswordText text="Password" name="password" value={this.password} onChange={this.handleChange.bind(this)}/>
        {errors.password.length > 0 && <span className='error'>{errors.password}</span>}
         <SubmitButton text = "Sign Up" />
      </div>
 
    );
  }
}

export default Join;

