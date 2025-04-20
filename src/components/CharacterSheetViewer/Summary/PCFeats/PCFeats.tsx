import styles from "../../CharacterSheetViewer.module.css"

type Props = {
  customStyles?: React.CSSProperties
}

export default function PCFeats({ customStyles }: Props) {
  return (
    <div className={`${styles.vignette} col-start-2 row-start-2 row-end-4`} style={customStyles}>
      PCFeats
    </div>
  )
}
