import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as userActions from '../../store/modules/user';
import Login from '../../components/user/login/Login';
class LoginContainer extends Component {
   
    login=(email,password)=>{
        const {UserActions}=this.props;
        UserActions.login(email,password);
        console.log('fffff',email,password);
    }

    render() {
      const {login} = this;
      return (
        <div>
         <Login action={login}/>
        </div>
      );
    }
  }
   
  export default connect(
    (state) => ({
        name: state.user.get('name'),
        profile: state.user.get('profile')
      }),
    (dispatch) => ({
      UserActions: bindActionCreators(userActions, dispatch)
    })
  )(LoginContainer);