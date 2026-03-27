import React from "react";
import Image from "next/image";
import SeerLogo from "../../assets/images/client_glassons.png";

const ClientCard = () => {
  return (
    <div className="md:h-[500px] p-10">
      <div className="flex items-center justify-center">
        <Image src={SeerLogo} alt="Glassons logo" className="h-8 w-auto" />
      </div>
      <div className="ClientCardContent mt-2">
        <p
          style={{ fontFamily: "Roboto, sans-serif" }}
          className="text-center text-[#000000] leading-2"
        >
          "Our stores were swamped with web returns. Stock Seer swiftly and
          elegantly enabled us to re-distribute the returns to locations with
          the greatest sales potential. Furthermore, Sapiens v2's algorithms
          forecast sales with a high degree of confidence, thereby enabling us
          to automate our Minimum Stock Levels (MSLs), re-grouping, and initial
          order quantity and size allocation processes."
        </p>

        <h5
          className="text-center pt-2 text-[#000000]"
          style={{ fontFamily: "AllroundGothic, sans-serif" }}
        >
          <span style={{ fontFamily: "roboto" }}>-</span>
          CHRIS REID, C.I.O., GLASSONS
        </h5>
      </div>
    </div>
  );
};

export default ClientCard;
