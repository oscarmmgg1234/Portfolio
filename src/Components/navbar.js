import React from 'react';
import {Navbar,Nav,NavbarBrand} from 'react-bootstrap';
import '../ComponentsCSS/navbar.css';
import withFirebaseAuth from 'react-with-firebase-auth'
import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from './firebaseConfig';


export default class NAVBAR extends React.Component {

    constructor(props) {

        super(props);

    }


    render(){
let navbar = JSON.stringify(this.props.nav);
   return (

<div className={'navDiv'}>

           <Navbar  expand={"md"} id={"navContainer"} >
               <div className={"navNameBrand"}>{JSON.parse(navbar)}</div>


               <Nav className={"mr-auto"} >
                <Nav.Link id={"NavItemName1"} href={"#home"} >
                    Home
                </Nav.Link>
                   <Nav.Link id={"NavItemName"} href={"#about"}>
                       About
                   </Nav.Link>
                   <Nav.Link id={"NavItemName"} href={"#port"}>
                       Portfolio
                   </Nav.Link>
                   <Nav.Link id={"NavItemName"} href={"#contact"}>
                       Contact
                   </Nav.Link>



               </Nav>
               <button className={"DrawerContainer"} onClick={this.props.onToggle}>
                   <div className={"line"} />
                   <div className={"line"}/>
                   <div className={"line"}/>

               </button>
           </Navbar>

</div>


   )
    }



}