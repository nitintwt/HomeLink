import { useState } from 'react';

export default function FabCard() {
  const [speed, setSpeed] = useState(0)

  const increaseSpeed = () => {
    setSpeed(speed + 1)
  };

  return (
    <div className="w-full max-w-sm rounded-lg border text-white bg-black">
      <div className="p-6 grid gap-4">
        <div className="flex flex-col items-center gap-2">
          <div className="text-lg font-semibold">Fan</div>
          <div className="text-sm">Click the button to switch on the Fan</div>
        </div>
        <div className="flex items-center justify-center">
          <img
            alt="Light Bulb"
            className="rounded-full"
            height={150}
            src="/placeholder.svg"
            style={{
              aspectRatio: '150/150',
              objectFit: 'cover',
            }}
            width={150}
          />
        </div>
        <div className="flex w-full justify-center">
          <button className="text-white bg-gray-600 hover:bg-gray-700 px-4 py-2 rounded-md mr-2 focus:outline-none">OFF</button>
          <button onClick={increaseSpeed} className="text-white bg-gray-600 hover:bg-gray-700 px-4 py-2 rounded-md focus:outline-none">Increase Speed: {speed}</button>
        </div>
      </div>
    </div>
  );
}

