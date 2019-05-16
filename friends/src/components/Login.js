import React from 'react';
import { login } from '../actions'

class Login extends React.Component {
    state = {
        credentials: {
            username: '' ,
            password: ''
        }
    }

    changeHandler = e => {
        e.preventDefault();
        this.setState({
            credentials: {
                ...this.state.credentials,
                [e.target.name]: e.target.value
            }
        })
    }

    login = e => {
        e.preventDefault(); 
        this.props.login(this.state.credentials)
    .then(() => {this.props.history.push("/protected")
   })
}

    render() {
        return (
            <form>
                <input
                  placeholder="Username"
                  name="username"
                  value=""
                />
                <input 
                  placeholder="Password"
                  name="password"
                  value=""
                />
                <button>Login</button>
            </form>
        )
    }
}
export default Login;