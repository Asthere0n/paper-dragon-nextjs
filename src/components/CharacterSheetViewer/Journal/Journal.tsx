import PCNotes from "./Notes/PCNotes"
import PCAllies from "./PCAllies/PCAllies"
import PCBackstory from "./PCBackstory/PCBackstory"
import PCExperience from "./PCExperience/PCExperience"
import PCQuests from "./PCQuests/PCQuests"

type styles = {
    style:React.CSSProperties
  }
  
  export default function Notes( props: styles ) {
    const styles = props.style
    return (
      <>
      <PCBackstory/>
      <PCQuests/>
      <PCAllies/>
      <PCNotes/>
      <PCExperience/>
      </>
    )
  }