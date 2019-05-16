import React from 'react';

class Login extends React.Component {
    state = {
        credentials: {
            username: '' ,
            password: ''
        }
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