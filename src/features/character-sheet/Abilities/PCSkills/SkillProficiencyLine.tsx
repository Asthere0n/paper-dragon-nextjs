import { useContext } from "react"
import { CharacterContext } from "../../character-context"
import { calcAbilityMod } from "@/lib/character/calcAbilityMod"
import { abilityLabels, abilityPillClassName, abilityPillColors } from "../../ability-pill"
import type { AbilityName } from "../../ability-pill"

const formatSigned = (value: number) => `${value >= 0 ? "+" : ""}${value}`

type ProficiencyLineProps = {
    title: string,
    stat: AbilityName
}

export default function SkillProficiencyLine({ title, stat }: ProficiencyLineProps) {
    const characterData = useContext(CharacterContext)
    const characterProficiencies = characterData.proficiencies
    const abilityMod = calcAbilityMod(characterProficiencies.abilityScores[stat])

    const proficiency = characterProficiencies.skillProf.find(
        (skill: { title: string; proficiency: number }) => skill.title === title
    )?.proficiency ?? 0

    const profBonus = proficiency * characterProficiencies.profBonus
    const bonusToRoll = profBonus + abilityMod
    const abilityLabel = abilityLabels[stat]
    const calculationLabel = `prof(${formatSigned(profBonus)}) + ${abilityLabel.toLowerCase()}(${formatSigned(abilityMod)}) = ${formatSigned(bonusToRoll)}`
    const calculationId = `${title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}-skill-calculation`

    return (
        <div className='mx-3 flex flex-grow-1 flex-col gap-1 border-b-[3px] border-black px-2 py-2 md:flex-row md:items-center md:justify-between md:gap-2'>
            <h3 className='uppercase tracking-wide'>{title}</h3>
            <div className='flex items-center justify-end gap-2 md:gap-3'>
                <div className='group relative'>
                    <p
                        className='min-w-10 cursor-help border-[3px] border-black bg-[#ffd600] text-center text-lg shadow-[2px_2px_0_#111] transition-transform group-hover:-translate-y-0.5 group-focus-within:-translate-y-0.5 sm:text-xl'
                        tabIndex={0}
                        aria-describedby={calculationId}
                    >
                        {formatSigned(bonusToRoll)}
                    </p>
                    <span
                        id={calculationId}
                        role="tooltip"
                        className='pointer-events-none absolute right-0 top-[calc(100%+0.45rem)] z-20 w-max max-w-[14rem] border-[3px] border-black bg-white px-3 py-2 [font-family:Verdana,Geneva,sans-serif] text-xs font-bold normal-case leading-snug tracking-normal opacity-0 shadow-[4px_4px_0_#111] transition-opacity duration-150 group-hover:opacity-100 group-focus-within:opacity-100'
                    >
                        {calculationLabel}
                    </span>
                </div>
                <p className={`${abilityPillColors[stat]} ${abilityPillClassName}`}>
                    {abilityLabel}
                </p>
            </div>
        </div>
    )
}
