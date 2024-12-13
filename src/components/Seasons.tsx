import { useState } from "react";
import { Checkbox } from "./ui/checkbox";

export default function Seasons() {
    function createInitialState() {
        const selectedSeasons: Record<number, boolean> = {};
        for (let i = 1; i <= 9; i++) {
            selectedSeasons[i] = true;
        }
        return selectedSeasons;
    }

    const [selectedSeasons, setSelectedSeasons] = useState(createInitialState());

    function handleCheckboxClick(season : number) {
        setSelectedSeasons((prevSelectedSeasons) => ({
            ...prevSelectedSeasons,
            [season]: !prevSelectedSeasons[season],
        }));
    }

    return (
        <section className="flex flex-wrap justify-center items-center gap-4 font-poppins text-gray-600 text-lg mx-4">
            <p className="text-gray-700 font-medium">Selected seasons: </p>
            <ol className="flex flex-wrap gap-4 justify-center items-center">
                {Object.entries(selectedSeasons).map(([season, isSelected]) => (
                    <li key={season} className="flex justify-center items-center gap-1.5">
                        <Checkbox id={season} onClick={() => handleCheckboxClick(Number(season))} checked={isSelected} />
                        <label className="font-light">
                            Season {season}
                        </label>
                    </li>
                ))}
            </ol>
        </section>
    );
}