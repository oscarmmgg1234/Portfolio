import React from "react";
import { SocialIcon } from 'react-social-icons';
import '../../ComponentsCSS/contact.css'
import Selected from "./handleSelectC";

const ContactC = () => {
    return (
        <div className={"contactContainer"}>
            <div className={'contactTitle'}>Contact Me</div>
            <div className={'socialHandle'} >
                <SocialIcon url={'https://github.com/oscarmmgg1234'} network={'github'} />
                <SocialIcon url={'https://www.instagram.com/oscarmmgg/'} network={'instagram'}/>
                <SocialIcon url={'https://www.linkedin.com/in/oscar-maldonado-597761153/'} network={'linkedin'}/>
            </div>

            <form className="ui form" id={'form'}>
                <div className="field">
                    <label id={'label'}>First Name</label>
                    <input type="text" name="first-name" placeholder="First Name" />
                </div>
                <div className="field">
                    <label id={'label'}>Last Name</label>
                    <input type="text" name="last-name" placeholder="Last Name"/>
                </div>
                <Selected/>
                <div className="field">
                    <label id={'label'}>E-mail</label>
                    <input type="email" placeholder="example@gmail.com"/>
                </div>
                <div className="field">
                    <label id={'label'} >Message</label>
                    <textarea rows="2"></textarea>
                </div>
                <button className="ui button" type="submit" id={'submit'}>Submit</button>
            </form>
        </div>

    )//end of return
}//end of component

export default ContactC