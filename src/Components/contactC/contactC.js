import React, {useState} from "react";
import { SocialIcon } from 'react-social-icons';
import '../../ComponentsCSS/contact.css'
import Selected from "./handleSelectC";

const ContactC = () => {
    const [FN, setFN] = useState('');
    const [LN, setLN] = useState('');
    const [email, setEmail] = useState('');
    const [selected, setSelected] = useState('');
    const [data, setData] = useState('');
    const [submit, setSubmit] = useState(false);
    function onSubmit(){
        setSubmit(true)
    }

    return (
        <div className={"contactContainer"}>
            <div className={'contactTitle'}>Contact Me</div>
            <div className={'socialHandle'} >
                <SocialIcon url={'https://github.com/oscarmmgg1234'} network={'github'} style={{marginRight: 20}}/>
                <SocialIcon url={'https://www.instagram.com/oscarmmgg/'} network={'instagram'} style={{marginRight: 20}}/>
                <SocialIcon url={'https://www.linkedin.com/in/oscar-maldonado-597761153/'} network={'linkedin'} style={{marginRight: 20}}/>
                <SocialIcon url={'https://oscarmmgg1234.github.io/blog/'} network={'bandsintown'}/>
            </div>
            <form className="ui form" id={'form'}>
                <div className="field">
                    <label id={'label'}>First Name</label>
                    <input type="text" name="first-name" placeholder="First Name" value={FN} onChange={event => {setFN(event.target.value)}}/>
                </div>
                <div className="field">
                    <label id={'label'}>Last Name</label>
                    <input type="text" name="last-name" placeholder="Last Name" value={LN} onChange={event => {setLN(event.target.value)}}/>
                </div>
                <Selected select={selected} setSelect={setSelected}/>
                <div className="field">
                    <label id={'label'}>E-mail</label>
                    <input type="email" placeholder="example@gmail.com" value={email} onChange={event => {setEmail(event.target.value)}}/>
                </div>
                <div className="field">
                    <label id={'label'} >Message</label>
                    <textarea rows="2" value={data} onChange={event => {setData(event.target.value)}}></textarea>
                </div>
                <button className="ui button" type='button' id={'submit'} onClick={()=>onSubmit()}>Submit</button>
                {submit === true ? (<div style={{color: 'white', fontSize: 20, marginTop: 10}}>Thank you {FN}, {LN} for your inquiry , I will get back to you as soon as I can, have a nice day!</div>) : null}
            </form>
        </div>

    )//end of return
}//end of component

export default ContactC
