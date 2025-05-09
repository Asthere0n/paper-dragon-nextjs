"use client"
import { useState, createContext } from "react";
import styles from "./CharacterSheetViewer.module.css"
import testCharacter from "@/test/testCharacter.json"; // This will be fetched from server


// Components
import NavBar from "@/components/NavBar/NavBar";
import Summary from "./Summary/Summary"
import Combat from "./Combat/Combat";
import Abilities from "./Abilities/Abilities";
import Inventory from "./Inventory/Inventory";
import Journal from "./Journal/Journal";
import Magic from "./Magic/Magic";

export const CharacterContext = createContext<any|null>(null)

export default function CharacterSheetViewer() {
    const [view, setView] = useState("Summary")
    const characterData = JSON.parse(JSON.stringify(testCharacter));
    return (<>
        <CharacterContext.Provider value={characterData}>
        <section className="flex-grow-1 grid grid-cols-3 grid-rows-3 w-full max-w-[1500px] p-4 gap-4">
            {view === "Summary" ? (
                <Summary style={styles} />
            ) : null}
            {view === "Combat" ? (
            <Combat style={styles} />
        ) : view === "Abilities" ? (
            <Abilities style={styles} />
        ) : view === "Inventory" ? (
            <Inventory style={styles} />
        ) : view === "Journal" ? (
            <Journal style={styles} />
        ) : view === "Magic" ? (
            <Magic style={styles} />
        ) : null}
        </section>
        <NavBar selector={setView} />
        </CharacterContext.Provider>
    </>
    )
}