import { useState } from "react";
import bulb from '../images/bulb.svg'

export default function BulbCard() {
  const [bulbOn , setBulbOn]= useState(false)

  const light = ()=>{
    
    setBulbOn(!bulbOn)
    let data = {
      "teamid": "HeS01Nv",
      "device": "bulb",
      "value":  bulbOn? "0": "1"// Remove the comma here if it's the last property
  };
  //DEVICE CONTROL
  const api = async (data) => {
      const api2 = await fetch('https://kodessphere-api.vercel.app/devices', {
          method: "POST",
          headers: {
              "Content-Type": "application/json"
          },
          body: JSON.stringify(data)
      });
      let data2 = await api2.json();
      console.log(data2);
  };
  
  api(data);
  }
return (
<div className="w-full max-w-sm rounded-lg border text-white bg-black">
  <div className="p-6 grid gap-4">
    <div className="flex flex-col items-center gap-2">
      <div className="text-lg font-semibold">Light Bulb</div> 
      <div className="text-sm">Click the button to toggle the light</div> 
    </div>
    <div className="flex items-center justify-center">
      <img
        alt="Light Bulb"
        className="rounded-full"
        height={150}
        src={bulb}
        style={{
          aspectRatio: "150/150",
          objectFit: "cover",
        }}
        width={150}
      />
    </div>
    <div className="flex w-full justify-center">
      <button className="text-white bg-gray-600 hover:bg-gray-700 px-4 py-2 rounded-md focus:outline-none" onClick={light}>{bulbOn? "On" : "Off"}</button>
    </div>
  </div>
</div>

  )
}

