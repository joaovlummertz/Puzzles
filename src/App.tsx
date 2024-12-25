import "./App.css";

import Header from "./components/Header";
import Seasons from "./components/Seasons";
import Episode from "./components/Episode";
import MainButton from "./components/MainButton";
import { useState } from "react";
import { Episode as EpisodeType } from "./Types";

function createInitialState() {
	const selectedSeasons: Record<number, boolean> = {};
	for (let i = 1; i <= 9; i++) {
		selectedSeasons[i] = true;
	}
	return selectedSeasons;
}

function App() {
	const [selectedSeasons, setSelectedSeasons] = useState(createInitialState());
	const [episode, setEpisode] = useState<EpisodeType | null>(null);

	function handleCheckboxClick(season: number) {
		setSelectedSeasons((prevSelectedSeasons) => ({
			...prevSelectedSeasons,
			[season]: !prevSelectedSeasons[season],
		}));
	}

	return (
		<>
			<Header />
			<Seasons
				selectedSeasons={selectedSeasons}
				handleCheckboxClick={handleCheckboxClick}
			/>
			<Episode episode={episode} />
			<MainButton selectedSeasons={selectedSeasons} setEpisode={setEpisode} />
		</>
	);
}

export default App;
