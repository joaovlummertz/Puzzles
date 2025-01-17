import { useTranslation } from "react-i18next";
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
	const { t } = useTranslation();

	return (
		<div className="w-full flex items-center justify-center my-4">
			<TooltipProvider>
				<Tooltip>
					<TooltipTrigger asChild className="disabled:pointer-events-auto">
						<Button
							type="button"
							onClick={fetchEpisode}
							disabled={isEmpty(selectedSeasons)}
							className="min-w-[120px] px-4 py-6 bg-gray-800 text-dark-yellow font-semibold text-lg hover:bg-dark-yellow hover:text-gray-800 dark:bg-gray-900 dark:text-dark-yellow dark:border-2 dark:border-dark-yellow dark:hover:bg-dark-yellow dark:hover:text-gray-900"
						>
							{t("generate")}
						</Button>
					</TooltipTrigger>
					{isEmpty(selectedSeasons) && (
						<TooltipContent>
							<p>{t("emptySelection")}</p>
						</TooltipContent>
					)}
				</Tooltip>
			</TooltipProvider>
		</div>
	);
}
