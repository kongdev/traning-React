import React, { Component } from 'react'
import { connect } from 'react-redux'
import {loginSuccess,logout} from '../actions/auth'
import { withRouter } from 'react-router'
class LoginForm extends Component {

    state = {
        username: '',
        password: '',
    }

    onUsernameChange = (e) => {
        this.setState({
            username: e.target.value
        })
    }

    onPasswordChange = (e) => {
        this.setState({
            password: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault()

        fetch('http://localhost:3000/login', {
            method: 'POST',
            body: JSON.stringify({
                username: this.state.username,
                password: this.state.password
            }),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        }).then((res) => {
            return res.json()
        }).then((json) => {
            //console.log(json)
            this.props.onLoginSuccess(json.token)

        }).catch(e => {
            console.error(e)
        })
    }
    render() {
        if(this.props.isLoggedIn){
            return (
                <div>
                    <p>LoggedIn </p>
                    <button onClick={this.props.onLogout}>logout</button>
                </div>

            )
        }
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <div>
                        <input
                            placeholder="username"
                            type="text"
                            onChange={this.onUsernameChange} />
                    </div>

                    <div>
                        <input
                            placeholder="password"
                            type="password"
                            onChange={this.onPasswordChange} />
                    </div>

                    <button type="submit">login</button>
                </form>

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isLoggedIn : state.auth.token != null
        //isLoggedIn :typeof state.auth.token !== 'undefined'
    }
}

const mapDispatchToProps = (dispatch,ownProps) => {
    console.log(ownProps)
    return {
        onLoginSuccess:(token)=>{
            dispatch(loginSuccess(token))
            ownProps.history.replace('/')
        },
        onLogout : ()=>{
            dispatch(logout())
        }
    }
}
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(LoginForm))