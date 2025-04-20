import styles from "../../CharacterSheetViewer.module.css"

type Props = {
  customStyles?: React.CSSProperties
}

export default function PCPicture({ customStyles }: Props) {
  return (
    <div className={`${styles.vignette} col-start-1 row-start-1 row-end-4`} style={customStyles}>
      <h2 className={styles.title}>
        Img
      </h2>
    </div>
  )
}
