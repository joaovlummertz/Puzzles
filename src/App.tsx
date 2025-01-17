import "./App.css";

import Header from "./components/Header";
import Seasons from "./components/Seasons";
import Episode from "./components/Episode";
import MainButton from "./components/MainButton";
import { useEffect, useState } from "react";
import { Episode as EpisodeType } from "./Types";
import { useTranslation } from "react-i18next";

// This is the series ID in the TMDB API
const seriesId = 1100;

function generateRandomSeason(selectedSeasons: Record<number, boolean>) {
	const selected: number[] = [];
	Object.entries(selectedSeasons).map(
		([season, isSelected]) => isSelected && selected.push(Number(season))
	);

	return selected[Math.floor(Math.random() * selected.length)];
}

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
	const [isLoading, setIsLoading] = useState(true);
	const { i18n } = useTranslation();

	function handleCheckboxClick(season: number) {
		setSelectedSeasons((prevSelectedSeasons) => ({
			...prevSelectedSeasons,
			[season]: !prevSelectedSeasons[season],
		}));
	}

	function fetchEpisode() {
		setIsLoading(true)
		const seasonNumber = generateRandomSeason(selectedSeasons);
		const url = `https://api.themoviedb.org/3/tv/${seriesId}/season/${seasonNumber}?language=${i18n.language}`;
		const options = {
			method: "GET",
			headers: {
				accept: "application/json",
				Authorization: "Bearer " + import.meta.env.VITE_API_TOKEN,
			},
		};

		fetch(url, options)
			.then((res) => res.json())
			.then((json) => {
				const episodeIndex = Math.floor(
					Math.random() * (json.episodes.length - 1)
				);

				const newEpisode: EpisodeType = {
					season: seasonNumber,
					episodeNumber: episodeIndex,
					image:
						"http://image.tmdb.org/t/p/w500/" +
						json.episodes[episodeIndex].still_path,
					name: json.episodes[episodeIndex].name,
					overview: json.episodes[episodeIndex].overview,
					duration: json.episodes[episodeIndex].runtime,
					airDate: json.episodes[episodeIndex].air_date,
				};

				setIsLoading(false)
				setEpisode(newEpisode);
			})
			.catch((err) => console.error(err));
	}

	useEffect(() => {
		fetchEpisode();
	}, []);

	return (
		<>
			<Header />
			<Seasons
				selectedSeasons={selectedSeasons}
				setSelectedSeasons={setSelectedSeasons}
				handleCheckboxClick={handleCheckboxClick}
			/>
			<Episode episode={episode} isLoading={isLoading} />
			<MainButton
				selectedSeasons={selectedSeasons}
				fetchEpisode={fetchEpisode}
			/>
		</>
	);
}

export default App;
