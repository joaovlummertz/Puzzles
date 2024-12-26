import { Button } from "./ui/button";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "./ui/tooltip";

function isEmpty(selectedSeasons: Record<number, boolean>) {
	const selected: number[] = [];
	Object.entries(selectedSeasons).map(
		([season, isSelected]) => isSelected && selected.push(Number(season))
	);

	return selected.length == 0;
}

export default function MainButton({
	selectedSeasons,
	fetchEpisode,
}: {
	selectedSeasons: Record<number, boolean>;
	fetchEpisode: () => void;
}) {
	return (
		<div className="w-full flex items-center justify-center">
			<TooltipProvider>
				<Tooltip>
					<TooltipTrigger asChild className="disabled:pointer-events-auto">
						<Button
							type="button"
							onClick={fetchEpisode}
							disabled={isEmpty(selectedSeasons)}
							className="px-4 py-6 bg-gray-800 text-dark-yellow font-semibold text-lg hover:bg-dark-yellow hover:text-gray-800"
						>
							Generate
						</Button>
					</TooltipTrigger>
					{isEmpty(selectedSeasons) && (
						<TooltipContent>
							<p>Select at least one season to generate an episode.</p>
						</TooltipContent>
					)}
				</Tooltip>
			</TooltipProvider>
		</div>
	);
}
