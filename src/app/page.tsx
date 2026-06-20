//Components
import Header from "@/components/layout/Header/Header";
import CharacterSheetViewer from "@/features/character-sheet/CharacterSheetViewer";
import InfoBar from "@/features/character-sheet/InfoBar/InfoBar";

export default function Home() {
  return (<>
    <Header />
    <InfoBar/>
    <CharacterSheetViewer />
  </>);
}
