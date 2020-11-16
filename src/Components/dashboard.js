import React from "react";
import {Link} from "react-router-dom";

export default class Dashboard extends React.Component{
constructor(props) {
    super(props);
}
    render() {
if(this.props.signedStatus == true) {
    return (
        <h1>Admin Page</h1>
    )
}
else {
    return (<>
        <h1>Must be admin</h1>
        <Link to={"/admin"}>Press To Sign in</Link>
    </>)
}
    }
}