type ShieldProps = {
  isShieldEquiped: boolean
  equipeShield: (isEquiped: boolean) => void
  allowsShield: boolean
}

export default function Shield({ isShieldEquiped, equipeShield, allowsShield }: ShieldProps) {
  const isActive = isShieldEquiped && allowsShield

  return (
    <div className='flex flex-col items-center gap-1.5'>
      <p className='text-lg uppercase tracking-widest sm:text-xl'>Shield</p>
      <input 
      className='peer sr-only'
      type="checkbox" 
      name="shield" 
      id="shield" 
      checked={isActive} 
      onChange={(e) => equipeShield(e.target.checked)}
      disabled={!allowsShield}
      aria-label="Equip shield"
      />
      <label
        className={`relative flex h-9 w-16 cursor-pointer items-center border-[3px] border-black px-1 shadow-[2px_2px_0_#111] transition-colors peer-focus-visible:ring-[3px] peer-focus-visible:ring-[#0975ff]/50 ${isActive ? 'bg-[#0975ff]' : 'bg-white'} ${allowsShield ? '' : 'cursor-not-allowed opacity-40'}`}
        htmlFor="shield"
      >
        <span className={`h-5 w-5 border-[3px] border-black bg-[#ffd600] transition-transform ${isActive ? 'translate-x-7' : 'translate-x-0'}`} />
        <span className={`absolute right-1.5 text-[0.55rem] font-bold uppercase tracking-wider text-black ${isActive ? 'left-1.5 right-auto text-white' : ''}`}>
          {isActive ? 'On' : 'Off'}
        </span>
      </label>
    </div>
  )
}
