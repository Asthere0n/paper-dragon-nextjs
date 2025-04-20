// Components
import PCBackground from "./PCBackground/PCBackground";
import PCFeats from "./PCFeats/PCFeats";
import PCFeatures from "./PCFeatures/PCFeatures";
import PCPicture from "./PCPicture/PCPicture";

type styles = {
  style:React.CSSProperties
}

export default function Summary( props: styles ) {
  const styles = props.style
  return (
    <>
      <PCPicture />
      <PCBackground />
      <PCFeats />
      <PCFeatures />
    </>
  )
}