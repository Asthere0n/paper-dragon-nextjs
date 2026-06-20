"use client"
import { useState } from "react";
import styles from "./CharacterSheetViewer.module.css"
import testCharacter from "@/data/testCharacter.json"; // This will be fetched from server
import { CharacterContext } from "./character-context";


// Components
import NavBar from "../../components/layout/NavBar/NavBar";
import Summary from "./Summary/Summary"
import Combat from "./Combat/Combat";
import Abilities from "./Abilities/Abilities";
import Inventory from "./Inventory/Inventory";
import Journal from "./Journal/Journal";
import Magic from "./Magic/Magic";

export default function CharacterSheetViewer() {
    const [view, setView] = useState("Summary")
    const characterData = JSON.parse(JSON.stringify(testCharacter));

    const currentView = view === "Summary" ? (
        <Summary style={styles} />
    ) : view === "Combat" ? (
        <Combat style={styles} />
    ) : view === "Abilities" ? (
        <Abilities style={styles} />
    ) : view === "Inventory" ? (
        <Inventory style={styles} />
    ) : view === "Journal" ? (
        <Journal style={styles} />
    ) : view === "Magic" ? (
        <Magic style={styles} />
    ) : null;

    return (<>
        <CharacterContext.Provider value={characterData}>
        <section className={styles.viewerGrid}>
            <div key={view} className={styles.roulettePanel}>
                {currentView}
            </div>
        </section>
        <NavBar selector={setView} />
        </CharacterContext.Provider>
    </>
    )
}
