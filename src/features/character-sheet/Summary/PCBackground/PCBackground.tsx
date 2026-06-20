import styles from "../../CharacterSheetViewer.module.css"
import { useContext } from "react"
import { CharacterContext } from "../../character-context"


type Props = {
  customStyles?: React.CSSProperties
}

export default function PCBackground({ customStyles }: Props) {
  const characterData = useContext(CharacterContext)
  const background = characterData.characterInfo.background
  
  return (
    <div className={`${styles.vignette} row-start-1 row-end-2 flex flex-col items-center text-center`} style={customStyles}>
      <h2 className={styles.title}>
        Background
      </h2>
      <h2 className="py-4 text-4xl uppercase tracking-wider text-[#f52a2a] drop-shadow-[2px_2px_0_#111] sm:py-5 sm:text-5xl sm:drop-shadow-[3px_3px_0_#111]">{background.title}</h2>
      <ul className="flex flex-wrap justify-center gap-2 px-3 pb-4 sm:gap-3 sm:px-4">{background.abilityScores.map((ability)=>(
        <li className="border-[3px] border-black bg-[#ffd600] px-3 py-1 text-xs uppercase shadow-[2px_2px_0_#111] sm:text-sm sm:shadow-[3px_3px_0_#111]" key={ability}>{ability}</li>
      ))}</ul>
    </div>
  )
}
