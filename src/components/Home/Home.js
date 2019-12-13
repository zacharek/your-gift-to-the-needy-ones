import React, {Component} from "react";
import Header from "./Header";
import MainMessage from "./MainMessage";
import AppStats from "./AppStats";
import FourSteps from "./FourSteps";
import AboutUS from "./AboutUS";
import WhomWeHelp from "./WhomWeHelp";
import Contact from "./Contact";
import Footer from "./Footer";

class Home extends Component{
    render() {
        return (
            <>
              <Header/>
              <MainMessage isUserLogged={this.props.isUserLogged}/>
              <AppStats/>
              <FourSteps/>
              <AboutUS/>
              <WhomWeHelp/>
              <Contact/>
              <Footer/>
            </>
        )
    }
}

export default Home;