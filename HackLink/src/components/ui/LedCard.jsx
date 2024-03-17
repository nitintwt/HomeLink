

export default function LedCard() {
  return (
    <div className="w-full max-w-sm rounded-xl border text-white">
      <div className="p-6 flex flex-col items-center space-y-4">
        <div className="pb-0">
          <div>LED</div>
          <p className="mt-2 text-sm font-medium leading-5 text-gray-500">
            Adjust the LED brightness
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
          <input 
          type ='range'
          className="my-4 h-2 rounded-full"
          />
        </div>
      </div>
    </div>
  )
}
