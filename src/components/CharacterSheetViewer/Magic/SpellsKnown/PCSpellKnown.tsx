import styles from "../../CharacterSheetViewer.module.css"

type Props = {
  customStyles?: React.CSSProperties
}

export default function PCSpellKnown({ customStyles }: Props) {
  return (
    <div className={`${styles.vignette} col-start-3 row-start-1 row-end-4`} style={customStyles}>
      SpellsKnown
    </div>
  )
}
