import { useState } from 'react';
import ac from '../images/ac.svg'

export default function ACCard() {
  const [temp, setTemp] = useState(16)
  const [state, setState] = useState(0)

  const actemp = ()=>{
    let data = {
      "teamid": "HeS01Nv",
      "device": "ac",
      "value":   {"temp": temp, "state": state}
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

  const increaseTemp = async () => {
    if(temp<30) {
    setTemp(temp + 1)
    }
    await actemp();
  };

  const decreaseTemp = async () => {
    if(temp>16) {
      setTemp(temp - 1)
      }
      await actemp();
  };

  const onof = async ()=>{
    if(state===0) {
    setState(1)
    } else if (state===1) {
      setState(0)
    }
    await actemp();
  }

  return (
    <div className="w-full max-w-sm rounded-lg border text-white bg-black">
      <div className="p-6 grid gap-4">
        <div className="flex flex-col items-center gap-2">
          <div className="text-lg font-semibold">AC</div>
          <div className="text-sm">Click the button to switch on the AC</div>
        </div>
        <div className="flex items-center justify-center">
          <img
            alt="AC image"
            className="rounded-full"
            height={150}
            src={ac}
            style={{
              aspectRatio: '150/150',
              objectFit: 'cover',
            }}
            width={150}
          />
        </div>
        <div className="flex w-full justify-center">
          <button className="text-white bg-gray-600 hover:bg-gray-700 px-4 py-2 rounded-md mr-2 focus:outline-none" onClick={onof}>{state ===1 ? "On" : "Off"}</button>
          <div className="flex items-center space-x-4">
            <button className="px-2.5 flex items-center gap-2" shape="round" size="lg" variant="outline" onClick={increaseTemp}>
              <PlusIcon className="h-4 w-4" />
              Plus
            </button>
            <button className="px-2.5 flex items-center gap-2" shape="round" size="lg" variant="outline" onClick={decreaseTemp}>
              <MinusIcon className="h-4 w-4" />
              Minus
            </button>
          </div>
          <div className="text-white bg-gray-600 hover:bg-gray-700 px-4 py-2 rounded-md focus:outline-none">{temp}</div>
        </div>
      </div>
    </div>
  );
}

function MinusIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
    </svg>
  )
}


function PlusIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  )
}
