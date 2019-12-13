import React, {Component} from "react";

class Contact extends Component{
    render() {
        return (
            <>
                <section className={"contact"}>
                    <div className="contact__content">
                        <h2>Skontaktuj się z nami</h2>
                        <div className="decoration"/>
                        <form>
                            <div className='name'>
                                <h3>Wpisz swoje imię:</h3>
                                <input type="text" name='name' placeholder='Krzysztof'/>
                            </div>
                            <div className='email'>
                                <h3>Wpisz swój email:</h3>
                                <input type="text" name='email' placeholder='abc@xyz.pl'/>
                            </div>
                            <h3>Wpisz swoją wiadomość:</h3>
                            <textarea name="message" rows='4' placeholder='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'/>
                            <input type="submit" value='Wyślij'/>
                        </form>
                    </div>
                    <footer>
                        <p>Copyright by Coders Lab
                            <div className="icon facebook"/>
                            <div className="icon instagram"/>
                        </p>
                    </footer>
                </section>

            </>
        )
    }
}

export default Contact;