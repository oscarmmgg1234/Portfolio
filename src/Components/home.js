import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import '../ComponentsCSS/home.css'
import {Sidebar,Menu,Icon} from "semantic-ui-react";


export default class Home extends React.Component {
    render(){

        return (<>

                <Sidebar
                    as={Menu}
                    animation='overlay'

                    direction={'right'}
                    icon='labeled'
                    inverted
                    vertical
                    visible={this.props.toggled}
                    width={'thin'}
                    style={{transition: "1s"}}


                >
                    <Menu.Item as='a' onClick={this.props.onClicked}>
                        <Icon name={'remove'} size='large'/> Close

                    </Menu.Item>
                    <Menu.Item as='a' href={"#home"}>
                        <Icon name='home'  />
                        Home
                    </Menu.Item>
                    <Menu.Item as='a' href={"#about"}>
                        <Icon name='address book' />
                        About
                    </Menu.Item>
                    <Menu.Item as='a' href={"#port"}>
                        <Icon name='briefcase' />
                        Portfolio
                    </Menu.Item>
                    <Menu.Item as='a' href={"#contact"}>
                        <Icon name='phone' />
                        Contact
                    </Menu.Item>
                </Sidebar>
<div className={"homeContainer"}>

<img src={require('../ASSETS/IMAGES/jason-leung-Xaanw0s0pMk-unsplash.jpg')} className={'HomeImage'}/>
<h1>Welcome to my web Portfolio(in progress)</h1>
    <p>Scroll down to look around</p>

</div>
</>
)
}
}