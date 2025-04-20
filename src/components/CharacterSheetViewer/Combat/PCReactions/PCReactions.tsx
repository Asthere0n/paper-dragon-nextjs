import styles from "../../CharacterSheetViewer.module.css"

type Props = {
  customStyles?: React.CSSProperties
}

export default function PCReactions({ customStyles }: Props) {
  return (
    <div className={`${styles.vignette} col-start-3 row-start-3 row-end-4`} style={customStyles}>
      Reactions
    </div>
  )
}