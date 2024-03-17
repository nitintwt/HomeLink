export default function BulbCard() {
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
        src="/placeholder.svg"
        style={{
          aspectRatio: "150/150",
          objectFit: "cover",
        }}
        width={150}
      />
    </div>
    <div className="flex w-full justify-center">
      <button className="text-white bg-gray-600 hover:bg-gray-700 px-4 py-2 rounded-md focus:outline-none">OFF</button>
    </div>
  </div>
</div>

  )
}

