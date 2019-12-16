import React, {Component} from "react";

class Contact extends Component{
    state = {
        name: '',
        email: '',
        message: '',
        nameError: false,
        emailError: false,
        messageError: false,
        formValidated: false,
    };
    handleSubmit=(e)=>{
        e.preventDefault();
        let {name, email, message, nameError, emailError, messageError}=this.state;
        let errorCounter = 0;

        function validateEmail(input){
            let check = /\S+@\S+\.\S+/;
            return check.test(input);
        }
        if (name.length === 0){
            nameError = true;
            errorCounter++
        }else {
            nameError= false;
        }
        if (validateEmail(email)===false) {
            emailError=true;
            errorCounter++
        }else {
            emailError= false;
        }
        if (message.length<120) {
            messageError= true;
            errorCounter++
        }else {
            messageError= false;
        }
        if (errorCounter===0){
            this.setState({
                formValidated: true,
                name:'',
                email:'',
                message:'',
                nameError:nameError,
                emailError:emailError,
                messageError:messageError
            });
            const newMessage={
                name: name,
                email: email,
                message: message
            };
            fetch('https://fer-api.coderslab.pl/v1/portfolio/contact',{
                headers:{
                    "Content-Type": "application/json"
                },
                method:"POST",
                body:JSON.stringify(newMessage)
            }).then(result=>{
                console.log(result)
            }).catch(error=>{
                console.warn(error)
            })
        } else {
            this.setState({nameError:nameError, emailError:emailError, messageError:messageError, formValidated: false});
        }
    };
    handleChange=(e)=>{
        this.setState({[e.target.name]: e.target.value})
    };
    render() {
        return (<section className={"contact"}>
                    <div className="contact__content">
                        <h2>Skontaktuj się z nami</h2>
                        <div className="decoration"/>
                        <h3 className={"succes"} style={{display: !this.state.formValidated&&'none'}}>
                            Wiadomość została wysłana!<br/>Wkrótce się skontaktujemy.
                        </h3>
                        <form>
                            <div className='name'>
                                <h3>Wpisz swoje imię:</h3>
                                <input type="text" name='name' placeholder='Krzysztof' value={this.state.name} onChange={this.handleChange} style={{borderColor: this.state.nameError&&'red'}}/>
                                <p style={{display: !this.state.nameError&&'none'}}>
                                    Podane imię jest nieprawidłowe!
                                </p>
                            </div>
                            <div className='email'>
                                <h3>Wpisz swój email:</h3>
                                <input type="text" name='email' placeholder='abc@xyz.pl' value={this.state.email} onChange={this.handleChange} style={{borderColor: this.state.emailError&&'red'}}/>
                                <p style={{display: !this.state.emailError&&'none'}}>
                                    Podany email jest nieprawidłowy!
                                </p>
                            </div>
                            <h3>Wpisz swoją wiadomość:</h3>
                            <textarea style={{borderColor: this.state.messageError&&'red'}} name="message" rows='4' value={this.state.message} onChange={this.handleChange} placeholder='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'/>
                            <p style={{display: !this.state.messageError&&'none'}}>
                                Wiadomość musi mieć conajmniej 120 znaków!
                            </p>
                            <input type="submit" onClick={this.handleSubmit} value='Wyślij'/>
                        </form>
                    </div>
                    <footer>
                        <p>Copyright by Coders Lab</p>
                        <div className="icon facebook"/>
                        <div className="icon instagram"/>
                    </footer>
                </section>)
    }
}

export default Contact;