import { useContext } from "react"
import { CharacterContext } from "../../CharacterSheetViewer"
import styles from "../../CharacterSheetViewer.module.css"
import Image from "next/image"



type Props = {
  customStyles?: React.CSSProperties
}


export default function PCPicture({ customStyles }: Props) {
  const characterData = useContext(CharacterContext)

  return (
    <div className={`${styles.vignette} col-start-1 row-start-1 row-end-4`} style={customStyles}>
      <h2 className={styles.title}>
        {characterData.characterInfo.name}
      </h2>
      <div>
      <Image 
      src={characterData.characterInfo.img}
      alt="Character Portrait"
      fill={true}
      objectFit="cover"
      />
      </div>
    </div>
  )
}
