import React from "react";
import Weather from "../components/Weather";

const CrsPage = () => {
  return (
    <>
      {/* Navbar */}
      <div className="flex justify-between mb-10 mt-4">
        <div className="flex ml-10">
          <img src="" />
          <h1>Your Dashboard</h1>
        </div>
        <div className="flex mr-10">
          <h1>Hello,Soumik</h1>
          <img src="" alt="" />
        </div>
      </div>

      {/* Weather-app */}
 
      <div className="flex justify-between">
       <div className="w-2/5 Location">
        <h2 className="">Location</h2>
       </div>
       <div className="w-3/5 Season">
       <h2 className="">Season</h2>
       </div>

      </div>

      <div>
        <Weather/>
      </div>
    </>
  );
};

export default CrsPage;
