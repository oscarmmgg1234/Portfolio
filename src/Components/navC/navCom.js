import React from 'react';
import {Navbar,Nav} from 'react-bootstrap';
import '../../ComponentsCSS/navbar.css';
import {Link} from "react-router-dom";

const Navs = ({toggle}) => {
    return (
            <div className={'navDiv'}>
                <Navbar  expand={"md"} id={"navContainer"} >
                    <div className={"navNameBrand"}>OscarLand</div>
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
                    <Nav.Link id ={"NavItemName"} href={'#donate'}>
                        Donate
                    </Nav.Link>
                    <Nav.Link id ={"NavItemName"} href={'admin'}>
                        ADMIN<Link to={'/admin'}/>
                    </Nav.Link>
                    <button className={"DrawerContainer"} onClick={toggle}>
                        <div className={"line"} />
                        <div className={"line"}/>
                        <div className={"line"}/>

                    </button>
                </Navbar>
            </div>
    )//end of return
}//end of component

export default Navs;