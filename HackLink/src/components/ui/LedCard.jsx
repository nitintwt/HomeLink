
import { useState } from "react"
export default function LedCard() {

const [value, setValue] = useState("#000000")

const colorChange = ()=>{
  let data = {
    "teamid": "HeS01Nv",
    "device": "led",
    "value":  value // Remove the comma here if it's the last property
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

const change = (e) => {
  e.target.value;
  setValue(e.target.value);
  console.log(value);
  colorChange();
}


  return (
    <div className="w-full max-w-sm rounded-xl border text-white">
      <div className="p-6 flex flex-col items-center space-y-4">
        <div className="pb-0">
          <div>LED</div>
          <p className="mt-2 text-sm font-medium leading-5 text-gray-500">
            Select LED Color
          </p>
        </div>
        <div className="flex items-center justify-center">
          <img
            alt="LED"
            className="rounded-full"
            height={150}
            src="/placeholder.svg"
            style={{
              aspectRatio: "150/150",
              objectFit: "cover",
            }}
            width={150}
          />
        </div>
        <div className="w-full">
          <input style={{color: "black"}} type = "text" onChange={change} value={value}/>
        </div>
      </div>
    </div>
  )
}
