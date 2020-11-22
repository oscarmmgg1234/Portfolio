import React from "react"
import SingOnC from "../Components/adminC/googleSignC";

const Admin = ({onSigned}) =>{
    return (
        <SingOnC Auth={onSigned}/>
    )//end of return
}//end of component

export default Admin