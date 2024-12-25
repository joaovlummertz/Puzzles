import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { Episode } from "@/Types";

// This is HIMYM series ID in the TMDB API
const seriesId = 1100;

function generateRandomSeason(selectedSeasons: Record<number, boolean>) {
    const selected: number[] = [];
    Object.entries(selectedSeasons).map(([season, isSelected]) => isSelected && selected.push(Number(season)));

    return selected[Math.floor(Math.random() * selected.length)];
}

export default function MainButton({
	selectedSeasons,
	setEpisode,
}: {
	selectedSeasons: Record<number, boolean>;
	setEpisode: (value: Episode | null) => void;
}) {
	const [fetchNewEpisode, setFetchNewEpisode] = useState(true);

	useEffect(() => {
		const seasonNumber = generateRandomSeason(selectedSeasons);
		const url = `https://api.themoviedb.org/3/tv/${seriesId}/season/${seasonNumber}?language=en-US`;
		const options = {
			method: "GET",
			headers: {
				accept: "application/json",
				Authorization:
					"Bearer " + import.meta.env.VITE_API_TOKEN,
			},
		};

		fetch(url, options)
			.then((res) => res.json())
			.then((json) => {
                const episodeIndex = Math.floor(Math.random() * (json.episodes.length - 1));
                
                const newEpisode: Episode = {
                    season: seasonNumber,
                    episodeNumber: episodeIndex,
                    image: "http://image.tmdb.org/t/p/w500/" + json.episodes[episodeIndex].still_path,
                    name: json.episodes[episodeIndex].name,
                    overview: json.episodes[episodeIndex].overview,
                    duration: json.episodes[episodeIndex].runtime,
                    airDate: json.episodes[episodeIndex].air_date
                };

                setEpisode(newEpisode);
            })
			.catch((err) => console.error(err));
	}, [fetchNewEpisode]);

    function handleButtonClick() {
        setFetchNewEpisode(prevFetchNewEpisode => !prevFetchNewEpisode);
    }

	return (
		<div className="w-full flex items-center justify-center">
			<Button
				type="button"
                onClick={handleButtonClick}
				className="px-4 py-6 bg-gray-800 text-dark-yellow font-semibold text-lg hover:bg-dark-yellow hover:text-gray-800"
			>
				Generate
			</Button>
		</div>
	);
}
