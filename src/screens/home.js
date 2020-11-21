import React from 'react';
import SideB from "../Components/homeC/sidebar";
import HomeC from "../Components/homeC/homeC";

export default class Home extends React.Component {

    constructor(props) {
        super(props);
    }

    render(){
        return (<>
            <SideB toggles={this.props.onClicked} visible={this.props.toggled}/>
            <HomeC/>
            </>
        )//end of return
}//end of render func
}//end of class