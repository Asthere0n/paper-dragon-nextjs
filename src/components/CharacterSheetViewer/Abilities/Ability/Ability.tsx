import styles from "../../CharacterSheetViewer.module.css"
import { Progress } from "@/components/ui/progress"
import { useContext } from "react"
import { CharacterContext } from "../../CharacterSheetViewer"
import { calcAbilityMod } from "@/components/utils/calcAbilityMod"

type AbilityProps = {
  stat: string
}

export default function Ability({ stat }: AbilityProps) {
  const characterData = useContext(CharacterContext)
  const ability = characterData.proficiencies.abilityScores[stat]
  const abilityMod = calcAbilityMod(ability)
  
  return (<>
    <div className={`${styles.vignette} flex flex-col`} >
      <div className="flex-grow-1 flex justify-around items-center w-full">
        <h2 className="w-[80%] flex h-full items-center text-white bg-black text-4xl" >
          <span className="px-10">{ability}</span>{stat}</h2>
        <p className="flex-grow-1 text-3xl text-center">{abilityMod}</p>
      </div>
      <Progress value={50 + 10*abilityMod} className="h-5 rounded-none" />
    </div>
  </>
  )
}