import React from 'react'
import { useContext } from "react"
import { CharacterContext } from "../../CharacterSheetViewer"
import { calcAbilityMod } from "@/components/utils/calcAbilityMod"

type ProficiencyLineProps = {
    title: string,
    stat: string
}

export default function ProficiencyLine({ title, stat }: ProficiencyLineProps) {
    const characterData = useContext(CharacterContext)
    const ability = characterData.abilityScores[stat]
    const abilityMod = calcAbilityMod(ability)

    // Recovering proficiency with the saving throw
    let proficiency = 0
    characterData.savingProf.map(ab=>{
        if (ab.title == stat){
            proficiency = ab.proficiency
        }
    })

    // Calculating the bonus to roll
    const profBonus = proficiency * characterData.profBonus
    const bonusToRoll = profBonus + abilityMod
    return (
        <div className='flex justify-around'>
            <h3>{title}</h3>
            <div>
                <p>{bonusToRoll}</p>
            </div>
        </div>
    )
}
