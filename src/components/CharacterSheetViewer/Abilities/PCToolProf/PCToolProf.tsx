import styles from "../../CharacterSheetViewer.module.css"

type Props = {
  customStyles?: React.CSSProperties
}

export default function PCToolProf({ customStyles }: Props) {
  return (
    <div className={`${styles.vignette} col-start-2 row-start-3 row-end-4`} style={customStyles}>
      Tool/Language proficiency
    </div>
  )
}