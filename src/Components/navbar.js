import React from 'react';
import {Navbar,Nav,NavbarBrand} from 'react-bootstrap';
import '../ComponentsCSS/navbar.css';


export default class NAVBAR extends React.Component {

    constructor(props) {

        super(props);

    }


    render(){
let navbar = JSON.stringify(this.props.nav);
   return (

<div>
           <Navbar bg={"dark"} expand={"md"} className={"navContainer"} >
               <div className={"navNameBrand"}>{JSON.parse(navbar)}</div>


               <Nav className={"mr-auto"} >
                <Nav.Link id={"NavItemName1"} >
                    Home
                </Nav.Link>
                   <Nav.Link id={"NavItemName"}>
                       About
                   </Nav.Link>
                   <Nav.Link id={"NavItemName"}>
                       Portfolio
                   </Nav.Link>
                   <Nav.Link id={"NavItemName"}>
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