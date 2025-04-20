import styles from "../../CharacterSheetViewer.module.css"

type Props = {
  customStyles?: React.CSSProperties
}

export default function PCBackstory({ customStyles }: Props) {
  return (
    <div className={`${styles.vignette} row-start-1 row-end-4 col-start-1`} style={customStyles}>
      PCBackstory
    </div>
  )
}
