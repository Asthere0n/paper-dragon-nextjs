import { useContext } from "react"
import { CharacterContext } from "../../../character-context"
import SkillProficiencyLine from "../SkillProficiencyLine"
import type { AbilityName } from "../../../ability-pill"


type skill = {
  title: string,
  proficiency: number,
  ability: AbilityName
}

type Props = {
  className?: string
}

export default function SkillScroll({ className }: Props) {
  const characterData = useContext(CharacterContext)
  const characterProficiencies = characterData.proficiencies


  return (
    <div className={`${className ?? ""} flex max-h-[42rem] flex-col overflow-y-auto`}>
      {characterProficiencies.skillProf.map((skill: skill) => (
        <SkillProficiencyLine key={skill.title} title={skill.title} stat={skill.ability} />
      ))}
    </div>
  )
}
