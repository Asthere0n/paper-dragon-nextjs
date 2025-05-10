import styles from "../../CharacterSheetViewer.module.css"
import { useContext } from "react"
import { CharacterContext } from "../../CharacterSheetViewer"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"

type Props = {
  customStyles?: React.CSSProperties
}

export default function PCFeatures({ customStyles }: Props) {
  const characterData = useContext(CharacterContext)
  const featuresArray = characterData.features
  return (
    <div className={`${styles.vignette} col-start-3 row-start-1 row-end-4 `} style={customStyles}>

      <h2 className={styles.title}>Features</h2>

      <Accordion type="multiple">
        {featuresArray.map((feature) => (
          <AccordionItem value={feature.title} key={feature.title} className="bg-gray-400">
            <AccordionTrigger>{feature.title}</AccordionTrigger>
            <AccordionContent>
              <div className="bg-gray-200">
                <p>{feature.description}</p>
                <p>src: {feature.source}</p>
                <p>ref: {feature.reference}</p>
              </div>
            </AccordionContent>
          </AccordionItem>
        )
        )}

      </Accordion>
    </div>
  )
}
