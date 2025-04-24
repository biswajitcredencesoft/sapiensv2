import React from "react";
import "./index.css";
import SeerLogo from "../../assets/images/client_animates.png";

const ClientCard = () => {
  return (
    <div
      className={`${ClientCard}  md:h-[400px]     p-10`}
    >
      <div className="flex items-center justify-center">
        <img src={SeerLogo} alt="Logo" className="h-8 " />
      </div>

      <div className="ClientCardContent mt-8  ">
        
        <p style={{fontFamily:'Roboto, sans-serif'}} className="text-center text-[#000000]  ">
         "Out teams are spending days a week managing the parameters which drive
          our vendor re-order calculation. Sapiens V2 Forecasts will help us
          automate the process, eliminate manual effort, and improve order
          accuracy."
        </p>
       
        <h5 className="text-center pt-2 text-[#000000] "  style={{fontFamily:'gothic-book, sans-serif', mt:"10px"}}>
          <span style={{fontFamily:"roboto"}}>-</span>
         
          PHILLIP CHRISTOPHER, C.I.O., ANIMATES NZ
        </h5>
      </div>
      
    </div>
  );
};

export default ClientCard;



