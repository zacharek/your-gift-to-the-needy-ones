import React, {Component} from "react";
import HomeHeader from "./HomeHeader";
import HomeMainMessage from "./HomeMainMessage";
import HomeOrganizationStats from "./HomeOrganizationStats";
import HomeFourSteps from "./HomeFourSteps";
import HomeAboutUS from "./HomeAboutUS";
import HomeWhoWeHelp from "./HomeWhoWeHelp";
import HomeContact from "./HomeContact";
import HomeFooter from "./HomeFooter";

class Home extends Component{
    render() {
        return (
            <>
              <HomeHeader/>
              <HomeMainMessage/>
              <HomeOrganizationStats/>
              <HomeFourSteps/>
              <HomeAboutUS/>
              <HomeWhoWeHelp/>
              <HomeContact/>
              <HomeFooter/>
            </>
        )
    }
}

export default Home;