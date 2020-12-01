import React from "react";
import {Link} from "react-router-dom";
import '../../ComponentsCSS/dashboard.css'
import List from "./list";


export default class Dash extends React.Component{

    constructor(props) {
        super(props);


    }//end of constructor

    render() {
        if(this.props.IsAuth == true) {
            return (
                <div id={'dashboard'}>
                    <p style={{marginTop: "4vh", fontSize: 50}}>Email Entries</p>
                <div id={'emailContainer'}>
               <List/>
               </div>
                </div>
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