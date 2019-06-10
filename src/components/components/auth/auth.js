import React, { Component } from 'react';
import './auth.css';

class Auth extends Component {
    constructor(props){
        super(props);

        this.state = {
            username: '',
            password: ''
        }

        this.updatePassword = this.updatePassword.bind( this );
        this.updateUsername = this.updateUsername.bind( this );
    };

    updateUsername(val){
        this.setState({
            username: val
        });
    };

    updatePassword(val){
        this.setState({
            password: ''
        });
    };

    render(){
        return(
            <div className='authParent'>
                <div className='pageTitleCont'>
                    <div className='thanksCont'><h1 className='thanks'>Thank you for choosing reviewMe</h1></div>
                    <h4 className='powered'>Powered by King Security Group</h4>
                </div>
                <div className='loginDiv'>
                    <div className='loginReq'>
                        <p className='loginReqP'>Please login to your account</p>
                        <div></div>
                    </div>
                    <div className='inputs'>
                        <div className='usernameDiv inputDiv'>
                            <p>Username:</p><input className='usernameInputBox inputBox' onChange={ e => this.updateUsername( e.target.value ) } />
                        </div>
                        <div className='passwordDiv inputDiv'>
                            <p>Password:</p><input className='passwordInputBox inputBox' type='password' onChange={ e => this.updatePassword( e.target.value ) } />
                        </div>
                        <div className='forgotPassCont'>
                            <div></div>
                            <p className='forgotPassLink'>Forgot your password?</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Auth;