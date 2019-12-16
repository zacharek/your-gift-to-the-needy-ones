import React, {Component} from 'react';
import Header from "./Home/Header";
import {NavLink} from "react-router-dom";

class SignIn extends Component {
    state = {
        email: '',
        password: '',
        emailError: false,
        passwordError: false,
        formValidated: false
    };
    handleChange=(e)=>{
        this.setState({[e.target.name]: e.target.value})
    };
    handleSubmit=(e)=>{
        e.preventDefault();
        let {email, password, emailError, passwordError} = this.state;
        let errorCounter = 0;
        function validateEmail(input) {
            let check = /\S+@\S+\.\S+/;
            return check.test(input);
        }
        if (validateEmail(email)===false) {
            emailError=true;
            errorCounter++
        }else {
            emailError= false;
        }
        if (password.length < 6) {
            passwordError=true;
            errorCounter++
        }else {
            passwordError= false;
        }
        if (errorCounter === 0) {
            this.setState({
                email: '',
                password: '',
                passwordError:passwordError,
                emailError:emailError,
                formValidated: true
            })
        }else {
            this.setState({passwordError:passwordError, emailError:emailError, formValidated: false});
        }
    };
    render() {
        return (
            <>
                <Header />
                <section className='login__screen'>
                        <div className='login__content'>
                            <h2>Zaloguj się</h2>
                            <div className="decoration"/>
                            <form>
                                <div className='email'>
                                    <h3>Email</h3>
                                    <input type="email" name='email' placeholder='' value={this.state.email} onChange={this.handleChange} style={{borderColor: this.state.emailError&&'red'}}/>
                                    <p style={{display: !this.state.emailError&&'none'}}>
                                        Podany email jest nieprawidłowy!
                                    </p>
                                </div>
                                <div className='password'>
                                    <h3>Hasło</h3>
                                    <input type="password" name='password' placeholder='' value={this.state.password} onChange={this.handleChange} style={{borderColor: this.state.passwordError&&'red'}}/>
                                    <p style={{display: !this.state.passwordError&&'none'}}>
                                        Podane hasło jest nieprawidłowe!
                                    </p>
                                </div>
                            </form>
                        </div>
                        <div className='buttons'>
                            <button><NavLink to='rejestracja'>Załóż konto</NavLink></button>
                            <button onClick={this.handleSubmit}>Zaloguj się</button>
                        </div>
                </section>

            </>
        )
    }
}

export default SignIn