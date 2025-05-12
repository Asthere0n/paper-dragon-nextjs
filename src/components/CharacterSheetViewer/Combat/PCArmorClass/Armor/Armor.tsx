// Components
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import calculateAC from "../calculateAC";

export default function Armor({armorOptions, selectedArmorClass, onArmorClassChange, isShieldEquiped}) {

    return (
        <div>
            <h3>
                Armor
            </h3>

            <p>
                {calculateAC(selectedArmorClass, isShieldEquiped)}
            </p>

            <Select onValueChange={(value) => onArmorClassChange(value)}>
                <SelectTrigger>
                    <SelectValue placeholder="AC" />
                </SelectTrigger>
                <SelectContent>
                    {armorOptions.map(AC => (
                        <SelectItem key={AC.title} value={AC}>
                            {AC.title}
                        </SelectItem>
                    ))}
                    <SelectItem key={"base"} value={10}>base</SelectItem>
                </SelectContent>
            </Select>
        </div>
    )
}
