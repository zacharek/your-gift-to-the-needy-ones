import React, {Component} from 'react';
import Header from "./Home/Header";
import {NavLink} from "react-router-dom";

class SignUp extends Component {
    state = {
        email: '',
        password: '',
        password2: '',
        emailError: false,
        passwordError: false,
        password2Error: false,
        formValidated: false
    };
    handleChange=(e)=>{
        this.setState({[e.target.name]: e.target.value})
    };
    handleSubmit=()=>{
        let {email, password, password2,emailError, passwordError, password2Error} = this.state;
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
        if(passwordError===true){
            password2Error= true;
        }else if (password !== password2) {
            password2Error= true;
            errorCounter++;
        } else {
            password2Error= false;
        }
        if (errorCounter === 0) {
            this.setState({
                email: '',
                password: '',
                password2: '',
                passwordError:passwordError,
                emailError:emailError,
                password2Error: password2Error,
                formValidated: true
            })
        }else {
            this.setState({password2Error:password2Error, passwordError:passwordError, emailError:emailError, formValidated: false});
        }
    };
    render() {
        return (
            <>
                <Header />
                <section className='register__screen'>
                    <div className='register__content'>
                            <h2>Załóż konto</h2>
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
                                <div className='password'>
                                    <h3>Powtórz hasło</h3>
                                    <input type="password" name='password2' placeholder='' value={this.state.password2} onChange={this.handleChange} style={{borderColor: this.state.password2Error&&'red'}}/>
                                    <p style={{display: !this.state.password2Error&&'none'}}>
                                        Podane hasło jest nieprawidłowe!
                                    </p>
                                </div>
                            </form>
                        </div>
                        <div className='buttons'>
                            <button><NavLink to='logowanie'>Zaloguj się</NavLink></button>
                            <button onClick={this.handleSubmit}>Załóż konto</button>
                        </div>
                </section>

            </>
        )
    }
}

export default SignUp