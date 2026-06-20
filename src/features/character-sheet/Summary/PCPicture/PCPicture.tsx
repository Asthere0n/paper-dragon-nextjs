import { useContext } from "react"
import { CharacterContext } from "../../character-context"
import styles from "../../CharacterSheetViewer.module.css"
import Image from "next/image"



type Props = {
  customStyles?: React.CSSProperties
}


export default function PCPicture({ customStyles }: Props) {
  const characterData = useContext(CharacterContext)

  return (
    <div className={`${styles.vignette} ${styles.portrait} col-start-1 row-start-1 row-end-4`} style={customStyles}>
      <h2 className={styles.title}>
        {characterData.characterInfo.name}
      </h2>
      <div className="absolute inset-0 z-0">
        <Image
          src={characterData.characterInfo.img}
          alt="Character Portrait"
          fill
          sizes="(max-width: 900px) 100vw, 33vw"
          preload
          style={{ objectFit: "cover" }}
          className="saturate-125 contrast-110"
        />
      </div>
    </div>
  )
}
