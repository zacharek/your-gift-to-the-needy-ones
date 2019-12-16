import React, {Component} from "react";
import {HashRouter, Route} from 'react-router-dom';
import Home from "./components/Home/Home";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import SignOut from "./components/SignOut";

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
              <Route path="/logowanie" component={SignIn}/>
              <Route path="/rejestracja" component={SignUp}/>
              <Route path="/wylogowano" component={SignOut}/>
          </>
        </HashRouter>);
    }
}

export default App;

