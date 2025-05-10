import styles from "../../CharacterSheetViewer.module.css"
import ProficiencyLine from "../ProficiencyLine/ProficiencyLine"

type Props = {
  customStyles?: React.CSSProperties
}

export default function PCSavingThrows({ customStyles }: Props) {
  return (
    <div className={`${styles.vignette} col-start-2 row-start-1 row-end-3`} style={customStyles}>
      <h2 className={styles.title}>
        Saves
      </h2>
      <ProficiencyLine title="Strength" stat="Strength"/>
      <ProficiencyLine title="Dexterity" stat="Dexterity"/>
      <ProficiencyLine title="Constitution" stat="Constitution"/>
      <ProficiencyLine title="Intelligence" stat="Intelligence"/>
      <ProficiencyLine title="Wisdom" stat="Wisdom"/>
      <ProficiencyLine title="Charisma" stat="Charisma"/>
    </div>
  )
}