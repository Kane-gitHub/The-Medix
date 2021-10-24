// LIBRARIES IMPORTS
// USER JS
// ADMIN JS
// BOOTSTRAP

import React from 'react';
import Logo from './Logo';
import Button from 'react-bootstrap/Button';
import User from './User';
import Admin from './Admin';

export default class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            pass: '',
            user: '',
            route: '',
            authUser: '',
            err: ''
        }

        this.handleUser = this.handleUser.bind(this);
        this.handlePass = this.handlePass.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }
    // CAPTURES ENTRY OF PASSWORD AND ASSIGNED TO A STATE

    handlePass(e) {
        this.setState({
            pass: e.target.value
        })
    }
    // CAPTURES USER ENTRY AND ASSIGNED TO A STATE 

    handleUser(e) {
        this.setState({
            user: e.target.value
        })
    }
    // AUTHENTICATION
    handleLogin() {
        fetch(`/login/${this.state.user},${this.state.pass}`)
            .then(res => res.json())
            .then(response => {
                return fetch(`/auth/${response.token}`)
            }).then(res => res.json())
            .then(response => {
                // ERROR IF PASSWORD IS INCORRECT
                if (response.err) {
                    this.setState({
                        err: response.err
                    })
                }
                // IF CORRECT USER IS ASSIGNED 
                
                if (response.admin === false) {
                    console.log(response)
                    this.setState({
                        authUser: response.id,
                        pass: '',
                        user: '',
                        route: '/user',
                        err: ''
                    })
                } else if (response.admin === true) {
                    this.setState({
                        pass: '',
                        user: '',
                        route: '/admin'
                    })
                }
            }).catch(function (err) {
                console.log(err)
            })
    }
    render() {
        return (
            <div id='login-container-div'>
                <Logo />
                <div id='login-div'>
                    {this.state.route === '' ?
                        <div>
                            <label id='username-login'>
                                Username:
                        <input className='inputt' onChange={this.handleUser} type='text' placeholder='enter username' value={this.state.user} />
                            </label>
                            <br />
                            <label id='password-login'>
                                Password:
                        <input className='inputt' id='pass-input' onChange={this.handlePass} type='password' placeholder='enter password' value={this.state.pass} />
                            </label>
                            <br />
                            <Button id='login-button-login' onClick={this.handleLogin} variant='success'>Login</Button>
                        </div> : ''}
                    <div>
                        {this.state.route === '/user' ?
                            <User user={this.state.authUser} /> : ''}
                    </div>
                    <div>
                        {this.state.route === '/admin' && <Admin />}
                    </div>
                    <div>
                        {this.state.err && <h3 id='error-login'>{this.state.err}</h3>}
                    </div>
                </div>
            </div>
        )
    }
}