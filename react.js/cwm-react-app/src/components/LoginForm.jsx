import React, { Component } from 'react'

export default class LoginForm extends Component {
      User_Email;
      User_Password;
    componentMethods = {
        handleChange: event => this.User_Email = event.target.value,
        handleChange1: event => this.User_Password = event.target.value
    }
    globalStyle = {
        container_style: {
            textAlign: 'center',
            fontFamily: 'monospace',
            fontWeight: 'bold'
        },
        submitButton_style: {
            display: 'block',
        },
        formPlaceholders: {
            placeholder1: `Example@gmail.com`,
            placeholder2: `Example@1234`
        }
    }
    getInfo = () => {
        alert(`The Email is ${this.User_Email} and password is ${this.User_Password}`);
    }
    render() {
        return (
            <>
                <div className="container" style={this.globalStyle.container_style}>
                    <h3 className="my-3">Login Form Demo</h3>
                    <h5>Enter Your Email</h5>
                    <input type="email" name="" id="input_1" placeholder={this.componentInlineStyles.formPlaceholders.placeholder1} onChange={this.componentMethods.handleChange} />
                    <h5 className="my-3">Enter Your Password</h5>
                    <input type="password" name="" id="input_2" placeholder={this.componentInlineStyles.formPlaceholders.placeholder2} onChange={this.componentMethods.handleChange1} />
                    <div className="sub" style={this.componentInlineStyles.submitButton_style}>
                        <button type="submit" className="btn btn-outline-primary my-3" onClick={this.getInfo}>Submit</button>
                    </div>
                </div>
            </>
        )
    }
}
