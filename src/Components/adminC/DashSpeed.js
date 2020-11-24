import React from "react";
import {Link} from "react-router-dom";
import '../../ComponentsCSS/dashboard.css'
import axios from 'axios'
import List from "./list";


export default class Dash extends React.Component{

    constructor(props) {
        super(props);
        this.axios = require('axios');

    }//end of constructor

    render() {
        if(this.props.IsAuth == true) {
            return (
               <List/>
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