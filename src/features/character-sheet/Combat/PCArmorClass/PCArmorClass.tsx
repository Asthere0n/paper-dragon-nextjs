import styles from "../../CharacterSheetViewer.module.css"
import { useContext, useEffect, useState } from "react"
import { CharacterContext } from "../../character-context"

// Components
import Armor from "./Armor/Armor"
import Shield from "./Shield/Shield"


type Props = {
  customStyles?: React.CSSProperties
}

export default function PCArmorClass({ customStyles }: Props) {
  const characterData = useContext(CharacterContext)
  const characterAC = characterData.combat.AC

  const [selectedAC, setSelectedAC] = useState(10)
  const [shieldEquiped, setShieldEquiped] = useState(false)

  useEffect(()=>{
    if (!selectedAC.AllowsShield){
      setShieldEquiped(false)
    }
  },[selectedAC])

  return (
    <div className={`${styles.vignette} col-start-1 row-start-1 row-end-2 flex flex-col`} style={customStyles}>
      <h2 className={styles.title}>
        Armor Class
      </h2>
      <div className="flex flex-grow-1 w-full flex-col items-center justify-around gap-5 py-4 sm:flex-row sm:gap-3 sm:py-0">
        <Armor 
        armorOptions={characterAC} 
        selectedArmorClass={selectedAC}
        onArmorClassChange={setSelectedAC}
        isShieldEquiped={shieldEquiped}
        
        />
        <Shield isShieldEquiped={shieldEquiped} equipeShield={setShieldEquiped} allowsShield={selectedAC.AllowsShield}/> 
      </div>
    </div>
  )
}
