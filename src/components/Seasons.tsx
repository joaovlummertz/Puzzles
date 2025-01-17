import { useTranslation } from "react-i18next";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "./ui/accordion";
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
	const { t } = useTranslation();
	
	// If selectOption == true, select all seasons
	// If selectOption == false, deselect all seasons
	function handleSelectionClick(selectOption: boolean) {
		const selectedSeasons: Record<number, boolean> = {};
		for (let i = 1; i <= 9; i++) {
			selectedSeasons[i] = selectOption;
		}
		setSelectedSeasons(selectedSeasons);
	}

	const seasonsCheckboxes = (
		<ol className="flex flex-wrap gap-3 justify-center items-center">
			{Object.entries(selectedSeasons).map(([season, isSelected]) => (
				<li key={season} className="flex justify-center items-center gap-1.5">
					<Checkbox
						id={season}
						onClick={() => handleCheckboxClick(Number(season))}
						checked={isSelected}
					/>
					<label className="font-light dark:text-light-gray">
						{t("season") + " " + season}
					</label>
				</li>
			))}
		</ol>
	);

	const selectButtons = (
		<div className="text-gray-700 dark:text-light-gray pt-2 flex gap-4 items-center justify-center">
			<Button
				variant="ghost"
				className="text-sm md:text-base font-medium dark:hover:text-dark-yellow"
				onClick={() => handleSelectionClick(true)}
			>
				{t("selectAll")}
			</Button>
			<Button
				variant="ghost"
				className="text-sm md:text-base font-medium dark:hover:text-dark-yellow"
				onClick={() => handleSelectionClick(false)}
			>
				{t("deselectAll")}
			</Button>
		</div>
	);

	return (
		<section className="flex flex-col flex-wrap justify-center items-center font-poppins text-gray-600 text-lg mx-4 lg:mt-4">
			<div className="flex flex-row flex-wrap items-center justify-center py-1">
				<Accordion type="single" collapsible className="lg:hidden">
					<AccordionItem value="item-1">
						<AccordionTrigger className="text-gray-800 dark:text-light-gray dark:hover:text-dark-yellow dark:hover:no-underline">
							{t("selectedSeasons")}
						</AccordionTrigger>
						<AccordionContent>
							{seasonsCheckboxes}
							{selectButtons}
						</AccordionContent>
					</AccordionItem>
				</Accordion>
				<p className="text-gray-700 dark:text-light-gray font-medium text-center text-balance pr-3 hidden lg:block py-2">
					{t("selectedSeasons") + ":"}
				</p>
				<div className="max-lg:hidden">{seasonsCheckboxes}</div>
			</div>
			<div className="max-lg:hidden">{selectButtons}</div>
		</section>
	);
}
