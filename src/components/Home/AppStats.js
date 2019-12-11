import React, {Component} from "react";

class AppStats extends Component{
    render() {
        return (
            <section className={"app__stats"}>
                <div className={"single__stat"}>
                    <h2>10</h2>
                    <h3>oddanych worków</h3>
                    <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus architecto aspernatur consequatur</p>
                </div>
                <div className={"single__stat"}>
                    <h2>5</h2>
                    <h3>wspartych organizacji</h3>
                    <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus architecto aspernatur consequatur</p>
                </div>
                <div className={"single__stat"}>
                    <h2>7</h2>
                    <h3>zorganizowanych zbiórek</h3>
                    <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus architecto aspernatur consequatur</p>
                </div>
            </section>
        )
    }
}

export default AppStats;