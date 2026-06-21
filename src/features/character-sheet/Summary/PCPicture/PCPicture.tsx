import { useContext } from "react"
import { CharacterContext } from "../../character-context"
import styles from "../../CharacterSheetViewer.module.css"
import Image from "next/image"



type Props = {
  customStyles?: React.CSSProperties
}

type CharacterClass = {
  level: number
  subclass: string
} & Record<string, boolean | number | string>


export default function PCPicture({ customStyles }: Props) {
  const characterData = useContext(CharacterContext)
  const ancestry = characterData.characterInfo.ancestry
  const ancestryLabel = ancestry.variant ? `${ancestry.title} (${ancestry.variant})` : ancestry.title
  const classLabel = characterData.class
    .map((classOption: CharacterClass) => {
      const className = Object.entries(classOption).find(
        ([key, value]) => key !== "level" && key !== "subclass" && value === true
      )?.[0]

      if (!className || classOption.level <= 0) {
        return null
      }

      return `${className} ${classOption.level}${classOption.subclass ? ` (${classOption.subclass})` : ""}`
    })
    .filter((classEntry: string | null): classEntry is string => classEntry !== null)
    .join(" / ")

  return (
    <div className={`${styles.vignette} ${styles.portrait} col-start-1 row-start-1 row-end-4`} style={customStyles}>
      <h2 className={styles.title}>
        {characterData.characterInfo.name}
      </h2>
      <div className={styles.portraitImage}>
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
      <aside className={styles.portraitCaption} aria-label="Character ancestry and classes">
        <p>{ancestryLabel}</p>
        <p>{classLabel}</p>
      </aside>
    </div>
  )
}
