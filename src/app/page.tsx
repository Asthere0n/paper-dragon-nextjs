//Components 
import CharacterInfo from "@/components/CharacterSheetViewer/CharacterInfo/CharacterInfo";
import Header from "../components/Header/Header";
import CharacterSheetViewer from "@/components/CharacterSheetViewer/CharacterSheetViewer";



export default function Home() {
  return (<>
    <Header />
    <CharacterInfo/>
    <CharacterSheetViewer />
  </>);
}
