import styles from "../../CharacterSheetViewer.module.css"

type Props = {
  customStyles?: React.CSSProperties
}

export default function PCExperience({ customStyles }: Props) {
  return (
    <div className={`${styles.vignette} col-start-3 row-start-3 row-end-4`} style={customStyles}>
      <h2 className={styles.title}>
        PCExperience
        </h2>
    </div>
  )
}
