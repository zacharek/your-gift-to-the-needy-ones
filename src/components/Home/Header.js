import React, {Component} from "react";
import {NavLink} from 'react-router-dom';
import {Link} from 'react-scroll'

class Header extends Component{
    state={
      menuTriggered:false
    };
    handleClick=()=>{
        this.setState({menuTriggered:!this.state.menuTriggered})
    };
    render() {
        return (
            <>
            <header>
                <div className="sign__menu">
                    <div className="sign__in"><NavLink to="/logowanie">Zaloguj</NavLink></div>
                    <div className="sign__up"><NavLink to="/rejestracja">Załóż konto</NavLink></div>
                </div>
                <button onClick={this.handleClick} className={`hamburger--squeeze ${this.state.menuTriggered&&"is-active"}`} type="button">
                        <span className="hamburger-box">
                            <span className="hamburger-inner"/>
                        </span>
                </button>
                <nav>
                    <ul>
                        <li>Start</li>
                        <li><Link to='four__steps' spy={true} smooth={true} duration={1000}>O co chodzi?</Link></li>
                        <li><Link to='about__us' spy={true} smooth={true} duration={1000}>O nas</Link></li>
                        <li><Link to='whom__we__help' spy={true} smooth={true} duration={1000}>Fundacja i organizacje</Link></li>
                        <li><Link to='contact' spy={true} smooth={true} duration={1000}>Kontakt</Link></li>
                    </ul>
                </nav>
            </header>
                <ul className={`trigger__menu ${this.state.menuTriggered&&"visible"}`}>
                    <li>Start</li>
                    <li>O co chodzi?</li>
                    <li>O nas</li>
                    <li>Fundacje i organizacje</li>
                    <li>Kontakt</li>
                </ul>
            </>
        )
    }
}

export default Header;