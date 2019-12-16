import React, {Component} from "react";

const foundations = {name:"foundations",
    description:"W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pommagają i czego potrzebują.",
    list:[
        {name:'Fundacja "Dbam o zdrowie"',
            goal:'Pomoc osobom znajdującym się w trudnej sytuacji życiowej',
            needs: "ubrania, jedzenie, sprzęt AGD, meble, zabawki"},
        {name:'Fundacja "Dla dzieci"',
            goal:'Pomoc dzieciom z ubogich rodzin',
            needs:"ubrania, meble, zabawki"},
        {name:'Fundacja "Bez domu"',
            goal:'Pomoc dla osób nie posiadających miejsca zamieszkania',
            needs:'ubrania, jedzenie, ciepłe koce'},
        {name:'Fundacja "Lorem ipsum 4"',
            goal:'Lorem ipsum quam quisqe id diam vel quam',
            needs:'dolor, sit, amet, quis'},
        {name:'Fundacja "Lorem ipsum 5"',
            goal:'Lorem ipsum quam quisqe id diam vel quam',
            needs:'dolor, sit, amet, quis'},
        {name:'Fundacja "Lorem ipsum 6"',
            goal:'Lorem ipsum quam quisqe id diam vel quam',
            needs:'dolor, sit, amet, quis'},
        {name:'Fundacja "Lorem ipsum 7"',
            goal:'Lorem ipsum quam quisqe id diam vel quam',
            needs:'dolor, sit, amet, quis'},
        {name:'Fundacja "Lorem ipsum 8"',
            goal:'Lorem ipsum quam quisqe id diam vel quam',
            needs:'dolor, sit, amet, quis'},
        {name:'Fundacja "Lorem ipsum 9"',
            goal:'Lorem ipsum quam quisqe id diam vel quam',
            needs:'dolor, sit, amet, quis'}]};

const organizations = {name:"organizations",
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
    list:[
        {name:'Organizacja "Lorem ipsum 1"',
            goal:"Ut enim ad minim veniam, quis nostrud exercitation",
            needs:"Egestas, sed, tempus"},
        {name:'Organizacja "Lorem ipsum 2"',
            goal:"Ut enim ad minim veniam, quis nostrud exercitation",
            needs:"Egestas, sed, tempus"},
        {name:'Organizacja "Lorem ipsum 3"',
            goal:"Ut enim ad minim veniam, quis nostrud exercitation",
            needs:"Egestas, sed, tempus"},
        {name:'Organizacja "Lorem ipsum 4"',
            goal:"Ut enim ad minim veniam, quis nostrud exercitation",
            needs:"Egestas, sed, tempus"},
        {name:'Organizacja "Lorem ipsum 5"',
            goal:"Ut enim ad minim veniam, quis nostrud exercitation",
            needs:"Egestas, sed, tempus"},
        {name:'Organizacja "Lorem ipsum 6"',
            goal:"Ut enim ad minim veniam, quis nostrud exercitation",
            needs:"Egestas, sed, tempus"}]};
const localCampaigns = {name:"localCampaigns",
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
    list:[
        {name:'Zbiórka "Lorem ipsum 1"',
            goal:"Ut enim ad minim veniam, quis nostrud exercitation",
            needs:"Egestas, sed, tempus"},
        {name:'Zbiórka "Lorem ipsum 2"',
            goal:"Ut enim ad minim veniam, quis nostrud exercitation",
            needs:"Egestas, sed, tempus"},
        {name:'Zbiórka "Lorem ipsum 3"',
            goal:"Ut enim ad minim veniam, quis nostrud exercitation",
            needs:"Egestas, sed, tempus"}]};

class WhomWeHelp extends Component{
    state={
        currentContent:foundations,
        currentPage: 1,
        elementsOnPage: 3
    };
    handleClick=(object)=>{
        this.setState({currentContent:object, currentPage:1})
    };
    setPage=(page)=>{
        this.setState({currentPage:page})
    };
    render(){
        let pageNumbers=[];
        for(let i=1;i<=Math.ceil(this.state.currentContent.list.length/this.state.elementsOnPage);i++){
            pageNumbers.push(i)
        }
        let pageContent=[];
        for(let j=(this.state.currentPage-1)*(this.state.elementsOnPage);j<(this.state.currentPage)*(this.state.elementsOnPage);j++){
            pageContent.push(<>
                    <div>
                        <p>{this.state.currentContent.list[j].name}</p>
                        <p>{this.state.currentContent.list[j].goal}</p>
                    </div>
                    <p>{this.state.currentContent.list[j].needs}</p>
                </>)
        }
        return (
            <section className="whom__we__help">
                <h2>Komu pomagamy?</h2>
                <div className="decoration"/>
                <div className={"content__selector"}>
                    <h3 onClick={()=>this.handleClick(foundations)} style={{border: this.state.currentContent.name==="foundations" ? "1px solid #3C3C3C": null}}>Fundacjom</h3>
                    <h3 onClick={()=>this.handleClick(organizations)} style={{border: this.state.currentContent.name==="organizations" ? "1px solid #3C3C3C": null}}>Organizacjom<br/>pozarządowym</h3>
                    <h3 onClick={()=>this.handleClick(localCampaigns)} style={{border: this.state.currentContent.name==="localCampaigns" ? "1px solid #3C3C3C": null}}>Lokalnym<br/>zbiórkom</h3>
                </div>
                <div className="content__viewer">
                    <div className="description">{this.state.currentContent.description}</div>
                    <ul className="content__list">
                        {pageContent.map((element,index)=><li key={index}>{element}</li>)}
                    </ul>
                    <ul className="content__pagination" style={{display: pageNumbers.length===1&&'none'}}>
                        {pageNumbers.map((element,index)=><li onClick={()=>this.setPage(element)} key={index} style={{border: this.state.currentPage===element ? "1px solid #3C3C3C": null}}>{element}</li>)}
                    </ul>
                </div>
            </section>
        )
    }
}

export default WhomWeHelp;