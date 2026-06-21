import styles from "../../CharacterSheetViewer.module.css"
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
  const progressValue = Math.min(100, Math.max(0, 50 + 10 * abilityMod))
  const activeSegments = Math.round((progressValue / 100) * 8)
  const meterSegments = Array.from({ length: 8 })
  const modifierLabel = `${abilityMod >= 0 ? "+" : ""}${abilityMod}`
  
  return (
    <div className={`${styles.vignette} flex h-60 flex-col justify-between !p-2.5 sm:!p-3`}>
      <div className="flex items-start gap-2">
        <h2 className="max-w-[8.5rem] text-lg leading-none uppercase tracking-wider sm:text-2xl">
          {stat}
        </h2>
      </div>

      <div className="mt-2 grid flex-1 grid-cols-[0.65rem_1fr_0.65rem] items-stretch gap-2 sm:grid-cols-[0.8rem_1fr_0.8rem]">
        <div className="flex flex-col-reverse gap-1 opacity-75" aria-hidden="true">
          {meterSegments.map((_, index) => (
            <span
              key={`left-${index}`}
              className={`min-h-1 flex-1 ${index < activeSegments ? "bg-[#31ff45]/70 shadow-[0_0_4px_#31ff45]" : "bg-[#0975ff]/10"}`}
            />
          ))}
        </div>

        <div className="flex min-w-0 flex-col items-center justify-between gap-2">
          <div className="relative flex flex-1 flex-col items-center justify-center">
            <span className="relative mb-1 border-2 border-black bg-white px-2 text-[0.65rem] uppercase tracking-[0.2em] shadow-[2px_2px_0_#111] sm:text-xs">
              Bonus
            </span>
            <p className="relative px-4 py-1 text-4xl leading-none sm:px-5 sm:text-5xl">
              {modifierLabel}
            </p>
          </div>

          <div>
            <p className="text-[0.65rem] uppercase tracking-[0.18em] text-black/70 sm:text-xs">Score</p>
            <p className="inline-flex min-h-12 min-w-14 rotate-[-4deg] items-center justify-center border-[3px] border-black bg-[#ffd600] px-3 text-3xl leading-none shadow-[4px_4px_0_#0975ff] sm:min-h-14 sm:min-w-16 sm:text-4xl">
              {ability}
            </p>
          </div>
        </div>

        <div className="flex flex-col-reverse gap-1 opacity-75" aria-hidden="true">
          {meterSegments.map((_, index) => (
            <span
              key={`right-${index}`}
              className={`min-h-1 flex-1 ${index < activeSegments ? "bg-[#ffd600]/75 shadow-[0_0_4px_#ffd600]" : "bg-[#f52a2a]/10"}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
