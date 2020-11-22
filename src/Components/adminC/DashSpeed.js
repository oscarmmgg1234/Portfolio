import React from "react";
import {Link} from "react-router-dom";

export default class Dash extends React.Component{
    constructor(props) {
        super(props);
    }//end of constructor
    render() {
        if(this.props.IsAuth == true) {
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
    }//end of render method
}//end of class