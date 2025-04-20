import styles from "../../CharacterSheetViewer.module.css"

type Props = {
  customStyles?: React.CSSProperties
}

export default function PCArmorClass({ customStyles }: Props) {
  return (
    <div className={`${styles.vignette} col-start-1 row-start-1 row-end-2`} style={customStyles}>
      <h2 className={styles.title}>
        Armor Class
      </h2>
    </div>
  )
}