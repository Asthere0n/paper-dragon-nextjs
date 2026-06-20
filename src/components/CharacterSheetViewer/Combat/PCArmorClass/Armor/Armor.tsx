// Components
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import calculateAC from "../calculateAC";

export default function Armor({armorOptions, selectedArmorClass, onArmorClassChange, isShieldEquiped}) {

    return (
        <div className="flex flex-col items-center gap-2">
            <h3 className="text-xl uppercase tracking-widest sm:text-2xl">
                Armor
            </h3>

            <p className="min-w-16 rotate-[-3deg] border-[3px] border-black bg-[#ffd600] px-3 py-1 text-center text-4xl shadow-[3px_3px_0_#111] sm:min-w-20 sm:border-4 sm:px-4 sm:text-5xl sm:shadow-[5px_5px_0_#111]">
                {calculateAC(selectedArmorClass, isShieldEquiped)}
            </p>

            <Select onValueChange={(value) => onArmorClassChange(value)}>
                <SelectTrigger className="min-h-11 border-[3px] border-black bg-white font-rajdhani font-bold shadow-[3px_3px_0_#111]">
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
