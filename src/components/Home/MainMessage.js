import React, {Component} from "react";

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
                            <div className={"action"}>oddaj rzeczy</div>
                            <div className={"action"}>zorganizuj zbiórkę</div>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}

export default MainMessage;