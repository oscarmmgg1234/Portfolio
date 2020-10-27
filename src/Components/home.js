import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import '../ComponentsCSS/home.css'
import {Sidebar,Menu,Icon} from "semantic-ui-react";
import {Link} from "react-router-dom";


export default class Home extends React.Component {

    constructor(props) {
        super(props);
    }
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
                    <Menu.Item as='a' href={"#home"} onClick={this.props.onClicked}>
                        <Icon name='home'  />
                        Home
                    </Menu.Item>
                    <Menu.Item as='a' href={"#about"}  onClick={this.props.onClicked}>
                        <Icon name='address book' />
                        About
                    </Menu.Item>
                    <Menu.Item as='a' href={"#port"} onClick={this.props.onClicked}>
                        <Icon name='briefcase' />
                        Portfolio
                    </Menu.Item>
                    <Menu.Item as='a' href={"#contact"} onClick={this.props.onClicked}>
                        <Icon name='phone' />
                        Contact
                    </Menu.Item>
                    <Menu.Item as='a' href={"#donate"} onClick={this.props.onClicked}>
                        <Icon name='dollar sign icon' />
                        Donate :)
                    </Menu.Item>
                    <Menu.Item as='a' href={"admin"} onClick={this.props.onClicked}>
                        <Icon name='id badge icon' />
                        Admin<Link to={'/admin'}/>
                    </Menu.Item>
                </Sidebar>

<div className={'Homediv'}>
<img src={require('../ASSETS/IMAGES/darker2.png')} className={'HomeImage'}/>
<div className={'WelcomeHeader'}>
    Hey,

</div>
    <div className={'WelcomeText'}>
    Im Oscar,
    </div>
        <div className={'WelcomeEnd'}>
        a
        </div>
    <div className={'welcomeM0'}>@</div>
    <div className={'welcomeM1'}>SoftWare</div>
    <div className={'WelcomeTitle'}>
        Software Engineer
    </div>
    <div className={'welcomeM2'}>Engineer</div>
</div>


        </>


)
}
}