import React, {Component} from "react";
import {NavLink} from "react-router-dom";

class MainMessage extends Component{
    render() {
        return (
            <>
                <section className="main__message__mobile">
                    <p>Masz w domu rzeczy, z którymi nie wiesz co zrobić?</p>
                    <p>oddaj je potrzebującym</p>
                    <p> - szybko i w zaufane ręce</p>
                    <button>załóż konto</button>
                </section>
                <section className="main__message">
                    <div className={"main__message__image"}/>
                    <div className={"main__message__content"}>
                        <p>Zacznij pomagać!</p>
                        <p>Oddaj niechciane rzeczy w zaufane ręce</p>
                        <div className={"decoration"}/>
                        <div className={"take__actions"}>
                            <div className={"action"}><NavLink to="/logowanie">oddaj<br/>rzeczy</NavLink></div>
                            <div className={"action"}><NavLink to="/logowanie">zorganizuj<br/>zbiórkę</NavLink></div>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}

export default MainMessage;