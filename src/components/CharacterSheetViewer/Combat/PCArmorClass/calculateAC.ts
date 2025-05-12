import { useContext } from "react";
import { CharacterContext } from "@/components/CharacterSheetViewer/CharacterSheetViewer";
import { calcAbilityMod } from "@/components/utils/calcAbilityMod";


function calculateAC(ArmorClass, shield) {
    let finalAC = ArmorClass.base
    const characterData = useContext(CharacterContext)
    const abilityScores = characterData.proficiencies.abilityScores

    if (ArmorClass.modifier) {
        ArmorClass.modifier.forEach((ability) => {
            finalAC += calcAbilityMod(abilityScores[ability])
        });

        if(shield){
            finalAC += characterData.combat.Shield
        }
    }
    return finalAC
}

export default calculateAC