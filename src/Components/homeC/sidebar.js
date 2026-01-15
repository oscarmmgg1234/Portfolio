import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import '../../ComponentsCSS/home.css'
import {Sidebar,Menu,Icon} from "semantic-ui-react";
import {Link} from "react-router-dom";

const SideB = ({toggles,visible}) => {
    return(
            <Sidebar
                as={Menu}
                animation='overlay'
                direction={'right'}
                icon='labeled'
                inverted
                vertical
                visible={visible}
                width={'thin'}
                style={{transition: "1s"}}
            >
                <Menu.Item as='a' onClick={toggles}>
                    <Icon name={'remove'} size='large'/> Close
                </Menu.Item>
                <Menu.Item as='a' href={"#home"} onClick={toggles}>
                    <Icon name='home'  />
                    Home
                </Menu.Item>
                <Menu.Item as='a' href={"#about"}  onClick={toggles}>
                    <Icon name='address book' />
                    About
                </Menu.Item>
                <Menu.Item as='a' href={"#port"} onClick={toggles}>
                    <Icon name='briefcase' />
                    Portfolio
                </Menu.Item>
                <Menu.Item as='a' href={"#contact"} onClick={toggles}>
                    <Icon name='phone' />
                    Contact
                </Menu.Item>
            </Sidebar>
    )//end of return
}//end of component

export default SideB