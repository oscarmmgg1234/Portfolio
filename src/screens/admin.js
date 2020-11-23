import React from "react"
import SingOnC from "../Components/adminC/googleSignC";

const Admin = ({onSigned,config}) =>{
    return (
        <SingOnC Auth={onSigned} fConfig={config}/>
    )//end of return
}//end of component

export default Admin