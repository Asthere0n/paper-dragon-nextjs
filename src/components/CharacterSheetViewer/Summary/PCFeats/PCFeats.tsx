import styles from "../../CharacterSheetViewer.module.css"
import { Accordion, AccordionTrigger, AccordionItem, AccordionContent } from "@/components/ui/accordion"
import { useContext } from "react"
import { CharacterContext } from "../../CharacterSheetViewer"

type Props = {
  customStyles?: React.CSSProperties
}

export default function PCFeats({ customStyles }: Props) {
  const characterData = useContext(CharacterContext)
  const feats = characterData.feats

  return (
    <div className={`${styles.vignette} col-start-2 row-start-2 row-end-4`} style={customStyles}>
      <h2 className={styles.title}>
      Feats
      </h2>
      <Accordion type="single" collapsible>
      {feats.map(feat => (
        <AccordionItem key={feat.title} value={feat.title}>
          <AccordionTrigger>{feat.title}</AccordionTrigger>
          <AccordionContent>
            <p>{feat.description}</p>
            <p>src: {feat.source}</p>
            <p>ref: {feat.reference}</p>
          </AccordionContent>
        </AccordionItem>
      ))}
      </Accordion>
    </div>
  )
}
