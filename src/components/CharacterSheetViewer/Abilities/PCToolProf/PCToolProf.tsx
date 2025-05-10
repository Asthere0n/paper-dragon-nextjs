import styles from "../../CharacterSheetViewer.module.css"
import { useContext } from "react"
import { CharacterContext } from "../../CharacterSheetViewer"
import ToolProficiencyLine from "../ProficiencyLine/ToolProficiencyLine"

type skill = {
  title: string,
  proficiency: number,
  ability: string
}

type Props = {
  customStyles?: React.CSSProperties
}

export default function PCToolProf({ customStyles }: Props) {
  const characterData = useContext(CharacterContext)
  return (
    <div className={`${styles.vignette} col-start-2 row-start-3 row-end-4 flex flex-col`} style={customStyles}>
      <h2 className={styles.title}>
      Tool & Language proficiency
      </h2>
      {characterData.toolProf.map((tool: skill) => (
              <ToolProficiencyLine key={tool.title} title={tool.title} stat={tool.ability} />
            ))}
    </div>
  )
}