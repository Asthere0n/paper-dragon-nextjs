import styles from "../../CharacterSheetViewer.module.css"
import { Progress } from "@/components/ui/progress"
import { useContext } from "react"
import { CharacterContext } from "../../character-context"
import { calcAbilityMod } from "@/lib/character/calcAbilityMod"

type AbilityProps = {
  stat: string
}

export default function Ability({ stat }: AbilityProps) {
  const characterData = useContext(CharacterContext)
  const ability = characterData.proficiencies.abilityScores[stat]
  const abilityMod = calcAbilityMod(ability)
  
  return (<>
    <div className={`${styles.vignette} flex flex-col`} >
      <div className="flex-grow-1 flex w-full items-stretch justify-around">
        <h2 className="flex min-h-16 w-[76%] items-center border-r-[3px] border-black bg-[#111] text-2xl uppercase tracking-wider text-white sm:min-h-20 sm:border-r-4 sm:text-4xl" >
          <span className="mx-2 inline-flex h-11 min-w-11 rotate-[-5deg] items-center justify-center border-[3px] border-black bg-[#ffd600] px-2 text-black shadow-[3px_3px_0_#0975ff] sm:mx-6 sm:h-14 sm:min-w-14 sm:border-4 sm:px-3 sm:shadow-[4px_4px_0_#0975ff]">{ability}</span>{stat}</h2>
        <p className="flex flex-grow-1 items-center justify-center bg-[#f52a2a] text-3xl text-white drop-shadow-[2px_2px_0_#111] sm:text-4xl sm:drop-shadow-[3px_3px_0_#111]">{abilityMod}</p>
      </div>
      <Progress value={50 + 10*abilityMod} className="h-4 rounded-none border-t-[3px] border-black sm:h-5 sm:border-t-4" />
    </div>
  </>
  )
}
