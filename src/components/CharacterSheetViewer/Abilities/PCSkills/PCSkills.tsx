import styles from "../../CharacterSheetViewer.module.css"
import SkillScroll from "./SkillScroll/SkillScroll"

type Props = {
  customStyles?: React.CSSProperties
}

export default function PCSkills({ customStyles }: Props) {
  return (
    <div className={`${styles.vignette} col-start-3 row-start-1 row-end-4`} style={customStyles}>
      <h2 className={styles.title}>
        Skills
      </h2>
      <SkillScroll/>
    </div>
  )
}