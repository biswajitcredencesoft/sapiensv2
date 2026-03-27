import React from "react";
import Image from "next/image";
import SeerLogo from "../../assets/images/client_animates.png";

const ClientCard = () => {
  return (
    <div className="md:h-[500px] p-10">
      <div className="flex items-center justify-center">
        <Image src={SeerLogo} alt="Animates logo" className="h-8 w-auto" />
      </div>

      <div className="ClientCardContent mt-8">
        <p
          style={{ fontFamily: "Roboto, sans-serif" }}
          className="text-center text-[#000000]"
        >
          "Our teams are spending days a week managing the parameters which
          drive our vendor re-order calculation. Sapiens v2's forecasts will
          help us automate the process, eliminate manual effort, and improve
          order accuracy."
        </p>

        <h5
          className="text-center pt-2 text-[#000000]"
          style={{ fontFamily: "AllroundGothic, sans-serif", mt: "10px" }}
        >
          <span style={{ fontFamily: "roboto" }}>-</span>
          PHILLIP CHRISTOPHER, C.I.O., ANIMATES NZ
        </h5>
      </div>
    </div>
  );
};

export default ClientCard;
