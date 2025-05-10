import styles from "../../CharacterSheetViewer.module.css"
import SaveProficiencyLine from "../ProficiencyLine/SaveProficiencyLine"

type Props = {
  customStyles?: React.CSSProperties
}

export default function PCSavingThrows({ customStyles }: Props) {
  return (
    <div className={`${styles.vignette} col-start-2 row-start-1 row-end-3`} style={customStyles}>
      <h2 className={styles.title}>
        Saves
      </h2>
      <SaveProficiencyLine title="Strength" stat="Strength"/>
      <SaveProficiencyLine title="Dexterity" stat="Dexterity"/>
      <SaveProficiencyLine title="Constitution" stat="Constitution"/>
      <SaveProficiencyLine title="Intelligence" stat="Intelligence"/>
      <SaveProficiencyLine title="Wisdom" stat="Wisdom"/>
      <SaveProficiencyLine title="Charisma" stat="Charisma"/>
    </div>
  )
}