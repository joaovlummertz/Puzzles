import { Button } from "./ui/button";
import { Checkbox } from "./ui/checkbox";

export default function Seasons({
	selectedSeasons,
	setSelectedSeasons,
	handleCheckboxClick,
}: {
	selectedSeasons: Record<number, boolean>;
	setSelectedSeasons: (value: Record<number, boolean>) => void;
	handleCheckboxClick: (value: number) => void;
}) {

	// If selectOption == true, select all seasons
	// If selectOption == false, deselect all seasons
	function handleSelectionClick(selectOption: boolean) {
		const selectedSeasons: Record<number, boolean> = {};
		for (let i = 1; i <= 9; i++) {
			selectedSeasons[i] = selectOption;
		}
		setSelectedSeasons(selectedSeasons);
	}

	return (
		<section className="flex flex-col flex-wrap justify-center items-center font-poppins text-gray-600 text-lg mx-4">
			<div className="flex gap-3">
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
			</div>
			<div className="text-gray-700 pt-2 flex gap-4">
				<Button variant="ghost" className="text-base font-medium" onClick={() => handleSelectionClick(true)}>Select all</Button>
				<Button variant="ghost" className="text-base font-medium" onClick={() => handleSelectionClick(false)}>Deselect all</Button>
			</div>
		</section>
	);
}
