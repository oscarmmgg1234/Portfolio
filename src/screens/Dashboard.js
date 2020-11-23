import React from "react";

import Dash from "../Components/adminC/DashSpeed";

export default class Dashboard extends React.Component{
render() {
    return(
    <Dash IsAuth={this.props.signedStatus} fconfig={this.props.config}/>
    )
}
}