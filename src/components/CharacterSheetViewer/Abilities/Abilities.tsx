import Ability from "./Ability/Ability"
import PCSavingThrows from "./PCSavingThrows/PCSavingThrows"
import PCSkills from "./PCSkills/PCSkills"
import PCToolProf from "./PCToolProf/PCToolProf"

type styles = {
  style:React.CSSProperties
}

export default function Abilities( props: styles ) {
  const styles = props.style
  return (
    <>
    <div className="grid grid-cols-2 grid-rows-3 col-start-1 row-start-1 row-end-4 gap-4">
      <Ability stat="Strenght"/>
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