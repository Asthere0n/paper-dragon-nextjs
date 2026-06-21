// Components
import PCArmorClass from "./PCArmorClass/PCArmorClass"
import PCBonusAction from "./PCBonusAction/PCBonusAction"
import PCDeathSaves from "./PCDeathSaves/PCDeathSaves"
import PCHitPoints from "./PCHitPoints/PCHitPoints"
import PCInitiative from "./PCInitiative/PCInitiative"
import PCReactions from "./PCReactions/PCReactions"
import PCWeaponAttack from "./PCWeaponAttack/PCWeaponAttack"

type styles = {
  style: React.CSSProperties
}

export default function Combat(props: styles) {
  const styles = props.style
  return (
    <>
      <PCArmorClass />
      <PCWeaponAttack />
      <PCInitiative />
      <PCHitPoints />
      <PCDeathSaves />
      <PCBonusAction />
      <PCReactions />
    </>
  )
}