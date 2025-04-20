import styles from "../../CharacterSheetViewer.module.css"

type Props = {
    customStyles?: React.CSSProperties
  }
  
  export default function Backpack({ customStyles }: Props) {
    return (
      <div className={`${styles.vignette} col-start-3 col-end-4 row-start-1 row-end-4`} style={customStyles}>
        Backpack
      </div>
    )
  }