import React, {Component} from "react";
import {NavLink} from "react-router-dom";

class FourSteps extends Component{
    render() {
        return (
            <section className="four__steps">
                <h2>Wystarczą 4 proste kroki</h2>
                <div className="decoration"/>
                <div className={"four__steps__content"}>
                    <div className={"first step"}>
                        <div className={"icon"}/>
                        <h3>Wybierz rzeczy</h3>
                        <div className="line"/>
                        <p>ubrania, zabawki, sprzęt i inne</p>
                    </div>
                    <div className={"second step"}>
                        <div className={"icon"}/>
                        <h3>Spakuj je</h3>
                        <div className="line"/>
                        <p>skorzystaj z worków na śmieci</p>
                    </div>
                    <div className={"third step"}>
                        <div className={"icon"}/>
                        <h3>Zdecyduj komu chcesz pomóc</h3>
                        <div className="line"/>
                        <p>wybierz zaufane miejsce</p>
                    </div>
                    <div className={"fourth step"}>
                        <div className={"icon"}/>
                        <h3>Zamów kuriera</h3>
                        <div className="line"/>
                        <p>kurier przyjedzie w dogodnym terminie</p>
                    </div>
                </div>
                <div className={"action"}><NavLink to="/logowanie">oddaj<br/>rzeczy</NavLink></div>
            </section>
        )
    }
}

export default FourSteps;