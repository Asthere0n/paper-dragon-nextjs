// Components
import PCMagicStat from "./MagicStat/PCMagicStat"
import PCSpellKnown from "./SpellsKnown/PCSpellKnown"
import PCSpellSlots from "./SpellSlots/PCSpellSlots"
import PCSpellPrepared from "./SpellsPrepared/PCSpellPrepared"

type styles = {
  style:React.CSSProperties
}

export default function Magic( props: styles ) {
  const styles = props.style
  return (
    <>
    <PCMagicStat/>
    <PCSpellSlots/>
    <PCSpellKnown/>
    <PCSpellPrepared/>
    </>
  )
}