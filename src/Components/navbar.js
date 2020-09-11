import React from 'react';
import {Navbar,Nav,NavbarBrand} from 'react-bootstrap';
import '../ComponentsCSS/navbar.css';


export default class NAVBAR extends React.Component {

    render(){
   return (

<div>
           <Navbar bg={"dark"} expand={"md"} className={"navContainer"} >
               <div className={"navNameBrand"}>OscarLand</div>
               <Nav className={"mr-auto"} >
                <Nav.Link className={"NavItemName1"} onClick={()=>{alert("oscar")}}>
                    Home
                </Nav.Link>
                   <Nav.Link className={"NavItemName"}>
                       About
                   </Nav.Link>
                   <Nav.Link className={"NavItemName"}>
                       Portfolio
                   </Nav.Link>
                   <Nav.Link className={"NavItemName"}>
                       Contact
                   </Nav.Link>



               </Nav>
           </Navbar>
</div>


   )
    }



}