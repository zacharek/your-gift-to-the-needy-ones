import React, {Component} from "react";
import {HashRouter, Route} from 'react-router-dom';
import Home from "./components/Home/Home";

class App extends Component{
    state={
        isUserLogged:false
    };
    render() {
    return (
        <HashRouter>
          <>
            <Route exact path='/' component={props => (
                <Home {...props} isUserLogged={this.state.isUserLogged} />
            )}/>
          </>
        </HashRouter>);
    }
}

export default App;

