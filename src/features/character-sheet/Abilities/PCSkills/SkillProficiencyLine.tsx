import React from 'react'
import { useContext } from "react"
import { CharacterContext } from "../../character-context"
import { calcAbilityMod } from "@/lib/character/calcAbilityMod"

type ProficiencyLineProps = {
    title: string,
    stat: string
}

export default function SkillProficiencyLine({ title, stat }: ProficiencyLineProps) {
    const characterData = useContext(CharacterContext)
    const characterProficiencies = characterData.proficiencies
    const abilityMod = calcAbilityMod(characterProficiencies.abilityScores[stat])

    // Recovering proficiency with the saving throw
    let proficiency = 0
    characterProficiencies.skillProf.map(ab=>{
        if (ab.title == stat){
            proficiency = ab.proficiency
        }
    })

    // Calculating the bonus to roll
    const profBonus = proficiency * characterProficiencies.profBonus
    const bonusToRoll = profBonus + abilityMod
    return (
        <div className='mx-3 flex flex-grow-1 flex-wrap items-center justify-between gap-2 border-b-[3px] border-black px-2 py-2 odd:bg-white/50'>
            <h3 className='uppercase tracking-wide'>{title}</h3>
            <div className='flex items-center gap-2 sm:gap-3'>
                <p className='rounded-full border-2 border-black bg-white px-2 text-xs uppercase'>{stat}</p>
                <p className='min-w-10 border-[3px] border-black bg-[#ffd600] text-center text-lg shadow-[2px_2px_0_#111] sm:text-xl'>{bonusToRoll}</p>
            </div>
        </div>
    )
}
