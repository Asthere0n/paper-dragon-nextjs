import { useContext } from "react";
import { CharacterContext } from "@/components/CharacterSheetViewer/CharacterSheetViewer";

// Components
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { calcAbilityMod } from "@/components/utils/calcAbilityMod";

export default function Armor({armorOptions, selectedArmorClass, onArmorClassChange}) {
    const characterData = useContext(CharacterContext)
    const abilityScores = characterData.proficiencies.abilityScores

    function calculateAC(ArmorClass){
        let finalAC = ArmorClass.base

        if(ArmorClass.modifier !== undefined){
            ArmorClass.modifier.forEach((ability) => {
                finalAC += calcAbilityMod(abilityScores[ability])
                // console.log(ability)
            });
        }

        return finalAC
    }

    return (
        <div>
            <h3>
                Armor
            </h3>

            <p>
                {selectedArmorClass}
            </p>

            <Select onValueChange={(value) => onArmorClassChange(value)}>
                <SelectTrigger>
                    <SelectValue placeholder="AC" />
                </SelectTrigger>
                <SelectContent>
                    {armorOptions.map(AC => (
                        <SelectItem key={AC.title} value={calculateAC(AC)}>
                            {AC.title}
                        </SelectItem>
                    ))}
                    <SelectItem key={"base"} value={10}>base</SelectItem>
                </SelectContent>
            </Select>
        </div>
    )
}
