import styles from "../../CharacterSheetViewer.module.css"
import { useContext, useState } from "react"
import { CharacterContext } from "../../CharacterSheetViewer"

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

  return (
    <div className={`${styles.vignette} col-start-1 row-start-1 row-end-2 flex flex-col`} style={customStyles}>
      <h2 className={styles.title}>
        Armor Class
      </h2>
      <div className="flex w-full justify-around items-center flex-grow-1">
        <Armor 
        armorOptions={characterAC} 
        selectedArmorClass={selectedAC}
        onArmorClassChange={setSelectedAC}
        />
        <Shield/>
      </div>
    </div>
  )
}