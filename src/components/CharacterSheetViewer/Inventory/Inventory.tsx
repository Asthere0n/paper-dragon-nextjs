import Backpack from "./Backpack/Backpack"
import Equiped from "./Equiped/Equiped"

type styles = {
  style:React.CSSProperties
}

export default function Summary( props: styles ) {
  const styles = props.style
  return (
    <>
      <Equiped/>
      <Backpack/>
    </>
  )
}