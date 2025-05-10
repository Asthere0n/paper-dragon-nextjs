import Ability from "./Ability/Ability"
import PCSavingThrows from "./PCSavingThrows/PCSavingThrows"
import PCSkills from "./PCSkills/PCSkills"
import PCToolProf from "./PCToolProf/PCToolProf"

export default function Abilities() {
  return (
    <>
    <div className="grid grid-cols-1 grid-rows-6 col-start-1 row-start-1 row-end-4 gap-4">
      <Ability stat="Strength"/>
      <Ability stat="Dexterity"/>
      <Ability stat="Constitution"/>
      <Ability stat="Intelligence"/>
      <Ability stat="Wisdom"/>
      <Ability stat="Charisma"/>
    </div>
    <PCSavingThrows />
    <PCToolProf />
    <PCSkills />
    </>
  )
}