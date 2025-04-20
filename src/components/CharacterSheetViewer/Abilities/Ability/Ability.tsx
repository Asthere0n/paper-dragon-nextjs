import styles from "../../CharacterSheetViewer.module.css"

type AbilityProps = {
    stat: string
}

export default function Ability({stat} : AbilityProps) {
  return (
    <div className={`${styles.vignette} flex flex-col justify-center items-center`} >
      <h2 className="w-full bg-black text-white text-center">{stat}</h2>
      <p className="flex-grow-1 text-3xl">+2</p>
    </div>
  )
}