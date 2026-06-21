import { calcAbilityMod } from "@/lib/character/calcAbilityMod";

export type ArmorClassOption = {
    title: string
    base: number
    modifier?: string[]
    DisadvantageStealth: boolean
    AllowsShield: boolean
    Equiped: boolean
}

function calculateAC(
    armorClass: ArmorClassOption,
    shield: boolean,
    abilityScores: Record<string, number>,
    shieldBase: number
) {
    let finalAC = armorClass.base

    armorClass.modifier?.forEach((ability) => {
        const abilityScore = abilityScores[ability]

        if (typeof abilityScore === "number") {
            finalAC += calcAbilityMod(abilityScore)
        }
    });

    if(shield && armorClass.AllowsShield){
        finalAC += shieldBase
    }

    return finalAC
}

export default calculateAC
