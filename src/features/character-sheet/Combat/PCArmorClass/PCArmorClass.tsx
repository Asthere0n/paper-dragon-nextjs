import styles from "../../CharacterSheetViewer.module.css"
import { useContext, useState } from "react"
import { CharacterContext } from "../../character-context"
import type { ArmorClassOption } from "./calculateAC"

// Components
import Armor from "./Armor/Armor"


type Props = {
  customStyles?: React.CSSProperties
}

export default function PCArmorClass({ customStyles }: Props) {
  const characterData = useContext(CharacterContext)
  const characterAC = characterData.combat.AC as ArmorClassOption[]
  const equippedArmor = characterAC.find((armorClass) => armorClass.Equiped) ?? characterAC[0]

  const [selectedAC, setSelectedAC] = useState<ArmorClassOption>(equippedArmor)
  const [shieldEquiped, setShieldEquiped] = useState(Boolean(characterData.combat.shield.Equiped && equippedArmor.AllowsShield))

  const handleArmorClassChange = (armorClass: ArmorClassOption) => {
    setSelectedAC(armorClass)

    if (!armorClass.AllowsShield){
      setShieldEquiped(false)
    }
  }

  const isShieldEquiped = shieldEquiped && selectedAC.AllowsShield

  return (
    <div className={`${styles.vignette} col-start-1 row-start-1 row-end-2 flex flex-col`} style={customStyles}>
      <h2 className={styles.title}>
        Armor Class
      </h2>
      <div className="flex min-h-0 flex-grow-1 w-full items-center justify-center py-1 sm:py-0">
        <Armor 
        armorOptions={characterAC} 
        selectedArmorClass={selectedAC}
        onArmorClassChange={handleArmorClassChange}
        isShieldEquiped={isShieldEquiped}
        onShieldEquipedChange={setShieldEquiped}
        
        />
      </div>
    </div>
  )
}
