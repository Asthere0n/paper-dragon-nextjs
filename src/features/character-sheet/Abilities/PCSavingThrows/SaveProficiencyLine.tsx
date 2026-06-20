import React from 'react'
import { useContext } from "react"
import { CharacterContext } from "../../character-context"
import { calcAbilityMod } from "@/lib/character/calcAbilityMod"

type ProficiencyLineProps = {
    title: string,
    stat: string
}

export default function SaveProficiencyLine({ title, stat }: ProficiencyLineProps) {
    const characterData = useContext(CharacterContext)
    const characterProficiencies = characterData.proficiencies
    const abilityMod = calcAbilityMod(characterProficiencies.abilityScores[stat])

    // Recovering proficiency with the saving throw
    let proficiency = 0
    characterProficiencies.savingProf.map(ab=>{
        if (ab.title == stat){
            proficiency = ab.proficiency
        }
    })

    // Calculating the bonus to roll
    const profBonus = proficiency * characterProficiencies.profBonus
    const bonusToRoll = profBonus + abilityMod
    return (
        <div className='mx-3 flex items-center justify-between gap-2 border-b-[3px] border-black px-2 py-2'>
            <h3 className='uppercase tracking-wide'>{title}</h3>
            <div>
                <p className='min-w-10 border-[3px] border-black bg-[#ffd600] text-center text-lg shadow-[2px_2px_0_#111] sm:text-xl'>{bonusToRoll}</p>
            </div>
        </div>
    )
}
