import { Checkbox } from "./ui/checkbox";

export default function Seasons({
	selectedSeasons,
	handleCheckboxClick,
}: {
	selectedSeasons: Record<number, boolean>;
	handleCheckboxClick: (value: number) => void;
}) {
	return (
		<section className="flex flex-wrap justify-center items-center gap-4 font-poppins text-gray-600 text-lg mx-4">
			<p className="text-gray-700 font-medium">Selected seasons: </p>
			<ol className="flex flex-wrap gap-4 justify-center items-center">
				{Object.entries(selectedSeasons).map(([season, isSelected]) => (
					<li key={season} className="flex justify-center items-center gap-1.5">
						<Checkbox
							id={season}
							onClick={() => handleCheckboxClick(Number(season))}
							checked={isSelected}
						/>
						<label className="font-light">Season {season}</label>
					</li>
				))}
			</ol>
		</section>
	);
}
