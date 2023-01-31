import React from "react";
import { BsSuitHeart } from "react-icons/bs";
import pic from "../img/ambulance.png";

export const DrEmergency = () => {
  return (
    <div className="drEmergency">
      <div className="mt-20">
        <h1 className="text-lg font-normal mt-20 ml-96">
          Dr+ - Emergency Ambulance Control Center
          <button className=" bg-gray-200 text-black rounded-xl px-2 py-2 font-mono text-lg ml-56">
            save
          </button>
          <button className=" bg-pink-400 text-white rounded-xl px-2 py-2 font-mono text-lg ml-2">
            <BsSuitHeart className="inline mr-2" />
            like
          </button>
        </h1>
        <h3 className="text-sm font-normal ml-96">RD Web for RonDesignLab</h3>
      </div>
      <div className="mx-80 mt-10 ">
        <img src={pic} alt="ambulance" />
        <p className="pt-5 font-serif font-medium">
          EHR system – (electronic health record) is a software that allows
          doctors to view patients’ data in digital form – website or app. His
          or her medical history, personal information, previous visits, test
          results and other medical indicators and health conditions.
        </p>
        <p className="pt-5 pb-10 font-serif font-medium">
          This industry has its origins in the 1970s when The United States
          Department of Veterans Affairs has launched the Decentralized Hospital
          Computer Program (DHCP). Prototypes of similar systems were developed
          earlier. Still, only this system has received access to federal
          resources, which allowed it to grow and evolve. It was a massive step
          for EHR system development and healthcare software.
        </p>
      </div>
    </div>
  );
};
