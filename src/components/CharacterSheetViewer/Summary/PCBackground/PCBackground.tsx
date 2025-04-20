import styles from "../../CharacterSheetViewer.module.css"

type Props = {
  customStyles?: React.CSSProperties
}

export default function PCBackground({ customStyles }: Props) {
  return (
    <div className={`${styles.vignette} row-start-1 row-end-2]`} style={customStyles}>
      <h2 className={styles.title}>
        Background
      </h2>
    </div>
  )
}
