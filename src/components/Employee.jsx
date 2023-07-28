import React, { useContext } from "react";
import { AppContext } from "../contexts/app_context";

function Employee() {
let {current} = useContext(AppContext)

return (
  <div className="employee">
    <div className="currentEmployee">
      <img src={current.employee.img} alt="" className="CurrentImg" />

      <div className="currentEmploInfo">
        <div className="currentEmploName">{current.employee.name}</div>
        <div className="currentEmploTitle">{current.employee.title}</div>
      </div>
    </div>
    <div className="office">
        Office Phone: <hr/>
          {current.contact.office} 
      </div>   
      <div className="mobile">
          Cell Phone:<hr/>
          {current.contact.mobile} 
      </div> 
      <div className="sms">
          Sms:<hr/>
            {current.contact.sms} 
      </div> 
      <div className="Email">
          Email:<hr/>
          {current.contact.email} 
      </div> 
      <div className="Website">
          Email:<hr/>
          {current.contact.website} 
      </div> 
    </div>
  );
}

export default Employee;
