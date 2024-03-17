import React from 'react'
import DeviceCard from '../ui/DeviceCard'
import BulbCard from '../ui/BulbCard'
import FanCard from '../ui/FanCard'

function Devices() {
  return (
<div className='flex justify-center items-center bg-black w-full h-screen'>
  <div className='bg-black flex justify-center items-center'>
    <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 justify-center'>
      <div>
        <BulbCard/>
      </div>
      <div>
        <FanCard/>
      </div>
    </div>
  </div>
</div>

  )
}

export default Devices
