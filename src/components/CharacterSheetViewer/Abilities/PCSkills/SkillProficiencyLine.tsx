import React from 'react'
import { useContext } from "react"
import { CharacterContext } from "../../CharacterSheetViewer"
import { calcAbilityMod } from "@/components/utils/calcAbilityMod"

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
        <div className='flex justify-between px-3  border-b-2 border-gray-500 flex-grow-1 items-center'>
            <h3>{title}</h3>
            <div className='flex gap-8'>
                <p>{stat}</p>
                <p>{bonusToRoll}</p>
            </div>
        </div>
    )
}
