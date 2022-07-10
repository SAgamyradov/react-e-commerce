import React from "react";
import Border from "../Border/Border";
import BorderLog from "../BorderLog/BorderLog";
import Input from "../Search/Input";
import Sidebar from '../Sidebar/Sidebar'


const AppLayout = () => {
    return (
           <div className="flex flex-col">
             <Border/>
             <BorderLog/>
             <Input/>
             <Sidebar/>

           </div>
)
}
export default AppLayout