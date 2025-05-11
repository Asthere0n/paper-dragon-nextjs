//Components
import Header from "../components/Header/Header";
import CharacterSheetViewer from "@/components/CharacterSheetViewer/CharacterSheetViewer";
import InfoBar from "@/components/CharacterSheetViewer/InfoBar/InfoBar";

export default function Home() {
  return (<>
    <Header />
    <InfoBar/>
    <CharacterSheetViewer />
  </>);
}
