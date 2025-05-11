import { useContext } from "react"
import { CharacterContext } from "../../../CharacterSheetViewer"
import SkillProficiencyLine from "../SkillProficiencyLine"


type skill = {
  title: string,
  proficiency: number,
  ability: string
}

export default function SkillScroll() {
  const characterData = useContext(CharacterContext)
  const characterProficiencies = characterData.proficiencies


  return (
    <div className="flex flex-col flex-grow-1">
      {characterProficiencies.skillProf.map((skill: skill) => (
        <SkillProficiencyLine key={skill.title} title={skill.title} stat={skill.ability} />
      ))}
    </div>
  )
}
