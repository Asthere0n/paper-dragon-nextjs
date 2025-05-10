import styles from "../../CharacterSheetViewer.module.css"
import { useContext } from "react"
import { CharacterContext } from "../../CharacterSheetViewer"


type Props = {
  customStyles?: React.CSSProperties
}

export default function PCBackground({ customStyles }: Props) {
  const characterData = useContext(CharacterContext)
  const background = characterData.background
  
  return (
    <div className={`${styles.vignette} row-start-1 row-end-2] flex flex-col`} style={customStyles}>
      <h2 className={styles.title}>
        Background
      </h2>
      <h2 className="text-3xl py-3">{background.title}</h2>
      <ul className="flex gap-2">{background.abilityScores.map((ability)=>(
        <li key={ability}>{ability}</li>
      ))}</ul>
    </div>
  )
}
