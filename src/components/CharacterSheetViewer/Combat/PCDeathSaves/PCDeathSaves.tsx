import styles from "../../CharacterSheetViewer.module.css"

type Props = {
  customStyles?: React.CSSProperties
}

export default function PCDeathSaves({ customStyles }: Props) {
  return (
    <div className={`${styles.vignette} col-start-2 row-start-3 row-end-4`} style={customStyles}>
      <h2 className={styles.title}>
        Death
      </h2>
    </div>
  )
}