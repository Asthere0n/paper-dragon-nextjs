import React from 'react'

export default function Shield({ isShieldEquiped, equipeShield, allowsShield }) {

  return (
    <div className='flex flex-col'>
      <input 
      type="checkbox" 
      name="shield" 
      id="shield" 
      checked={isShieldEquiped && allowsShield} 
      onChange={(e) => equipeShield(e.target.checked)}
      disabled={!allowsShield}
      />
      <label htmlFor="shield">Shield</label>
    </div>
  )
}
