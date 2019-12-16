import React, {Component} from 'react';
import Header from "./Home/Header";
import {NavLink} from "react-router-dom";

class SignOut extends Component {
    render() {
        return (
            <>
                <Header/>
                <section className='logout__screen'>
                    <div className='logout__content'>
                        <h2>Wylogowanie nastąpiło pomyślnie!</h2>
                        <div className="decoration"/>
                    </div>
                    <div className='buttons'>
                        <button><NavLink to='/'>Strona główna</NavLink></button>
                    </div>
                </section>
            </>)
    }
}

export default SignOut