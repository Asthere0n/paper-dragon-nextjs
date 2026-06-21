export type AbilityName = "Strength" | "Dexterity" | "Constitution" | "Intelligence" | "Wisdom" | "Charisma"

export const abilityLabels: Record<AbilityName, string> = {
    Strength: "STR",
    Dexterity: "DEX",
    Constitution: "CON",
    Intelligence: "INT",
    Wisdom: "WIS",
    Charisma: "CHA",
}

export const abilityPillColors: Record<AbilityName, string> = {
    Strength: "bg-[#f52a2a] text-white shadow-[2px_2px_0_#ffd600]",
    Dexterity: "bg-[#0975ff] text-white shadow-[2px_2px_0_#ffd600]",
    Constitution: "bg-[#ff8a00] text-black shadow-[2px_2px_0_#0975ff]",
    Intelligence: "bg-[#20d7ff] text-black shadow-[2px_2px_0_#f52a2a]",
    Wisdom: "bg-[#4ade80] text-black shadow-[2px_2px_0_#111111]",
    Charisma: "bg-[#e94cff] text-black shadow-[2px_2px_0_#ffd600]",
}

export const abilityPillClassName = "min-w-10 -rotate-2 rounded-full border-[3px] border-black px-2 py-0.5 text-center text-xs uppercase tracking-widest"
