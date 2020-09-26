import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import '../ComponentsCSS/home.css'
import {Sidebar,Menu,Icon} from "semantic-ui-react";


export default class Home extends React.Component {
    render(){

        return (<>
                <Sidebar
                    as={Menu}
                    animation={'overlay'}

                    direction={'right'}
                    icon='labeled'
                    inverted
                    vertical
                    visible={this.props.toggled}
                    width={'wide'}
                    style={{transition: "1s"}}


                >
                    <Menu.Item>
                        <button onClick={this.props.onClicked}><Icon name={'remove'} /></button>
                    </Menu.Item>
                    <Menu.Item as='a'>
                        <Icon name='home'  />
                        Home
                    </Menu.Item>
                    <Menu.Item as='a'>
                        <Icon name='address book' />
                        About
                    </Menu.Item>
                    <Menu.Item as='a'>
                        <Icon name='camera' />
                        Channels
                    </Menu.Item>
                </Sidebar>
<div className={"homeContainer"}>


<h1>Welcome to my web Portfolio(in progress)</h1>
    <p>Scroll down to look around</p>

</div>
</>
)
}
}