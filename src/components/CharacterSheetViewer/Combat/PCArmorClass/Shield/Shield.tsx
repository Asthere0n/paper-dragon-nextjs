import React from 'react'

export default function Shield({ isShieldEquiped, equipeShield, allowsShield }) {

  return (
    <div className='flex flex-col items-center gap-2 sm:gap-3'>
      <input 
      className='h-10 w-10 accent-[#0975ff] outline outline-[3px] outline-black disabled:opacity-40'
      type="checkbox" 
      name="shield" 
      id="shield" 
      checked={isShieldEquiped && allowsShield} 
      onChange={(e) => equipeShield(e.target.checked)}
      disabled={!allowsShield}
      />
      <label className='border-[3px] border-black bg-white px-3 py-1 text-xl uppercase tracking-widest shadow-[3px_3px_0_#111] sm:text-2xl' htmlFor="shield">Shield</label>
    </div>
  )
}
