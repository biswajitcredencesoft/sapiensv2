import React from "react";
import Image from "next/image";
import SeerLogo from "../../assets/images/client_hallensteins.png";

const ClientCard = () => {
  return (
    <div className="md:h-[500px] sm:h-[300px] p-10">
      <div className="flex items-center justify-center">
        <Image src={SeerLogo} alt="Hallensteins logo" className="h-12 w-auto" />
      </div>
      <div className="ClientCardContent mt-8">
        <p
          style={{ fontFamily: "Roboto, sans-serif" }}
          className="text-center text-[#000000]"
        >
          "Our stores were swamped with web returns. Sapiens v2’s swiftly and elegantly enabled us to re-distribute the returns to locations with the greatest sales potential."
        </p>

        <h5
          className="text-center pt-2 text-[#000000]"
          style={{ fontFamily: "AllroundGothic, sans-serif" }}
        >
          <span style={{ fontFamily: "roboto" }}>-</span>
          CHRIS REID, C.I.O., HALLENSTEINS
        </h5>
      </div>
    </div>
  );
};

export default ClientCard;
