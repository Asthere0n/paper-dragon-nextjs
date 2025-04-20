import styles from "../../CharacterSheetViewer.module.css"

type Props = {
  customStyles?: React.CSSProperties
}

export default function PCNotes({ customStyles }: Props) {
  return (
    <div className={`${styles.vignette} col-start-3 row-start-1 row-end-3`} style={customStyles}>
      PCNotes
    </div>
  )
}
