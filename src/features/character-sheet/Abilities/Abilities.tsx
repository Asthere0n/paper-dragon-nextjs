import Ability from "./Ability/Ability"
import PCSavingThrows from "./PCSavingThrows/PCSavingThrows"
import PCSkills from "./PCSkills/PCSkills"
import PCToolProf from "./PCToolProf/PCToolProf"

export default function Abilities() {
  return (
    <>
    <div className="col-start-1 row-start-1 row-end-4 grid grid-cols-2 grid-rows-3 gap-4">
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
