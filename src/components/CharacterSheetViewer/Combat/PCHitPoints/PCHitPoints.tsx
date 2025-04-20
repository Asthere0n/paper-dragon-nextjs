import styles from "../../CharacterSheetViewer.module.css"

type Props = {
  customStyles?: React.CSSProperties
}

export default function PCHitPoints({ customStyles }: Props) {
  return (
    <div className={`${styles.vignette} col-start-2 row-start-2 row-end-3`} style={customStyles}>
      <h2 className={styles.title}>
      Hit Points
      </h2>
    </div>
  )
}