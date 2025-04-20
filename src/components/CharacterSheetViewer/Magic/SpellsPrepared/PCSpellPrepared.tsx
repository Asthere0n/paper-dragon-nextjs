import styles from "../../CharacterSheetViewer.module.css"

type Props = {
  customStyles?: React.CSSProperties
}

export default function PCSpellPrepared({ customStyles }: Props) {
  return (
    <div className={`${styles.vignette} col-start-2 row-start-1 row-end-4`} style={customStyles}>
      PCSpellPrepared
    </div>
  )
}