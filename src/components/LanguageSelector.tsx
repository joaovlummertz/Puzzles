import * as React from "react";

import ReactCountryFlag from "react-country-flag";

import { Button } from "@/components/ui/button";
import {
	Command,
	CommandGroup,
	CommandItem,
	CommandList,
} from "@/components/ui/command";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import { Check, ChevronDown, ChevronUp } from "lucide-react";
import { useTranslation } from "react-i18next";
import { cn } from "@/lib/utils";

const languages = [
	{
		value: "en",
		label: "English",
		abbreviation: "EN",
		countryCode: "US",
	},
	{
		value: "pt",
		label: "Português",
		abbreviation: "PT",
		countryCode: "BR",
	},
	{
		value: "es",
		label: "Español",
		abbreviation: "ES",
		countryCode: "ES",
	},
];

export default function LanguageSelector({
	updateCurrentEpisode,
}: {
	updateCurrentEpisode: () => void;
}) {
	const { i18n } = useTranslation();

	const [open, setOpen] = React.useState(false);
	const [value, setValue] = React.useState("en");

	return (
		<Popover open={open} onOpenChange={setOpen}>
			<PopoverTrigger
				asChild
				className="!duration-500 border-2 bg-[#f4f3f2] hover:bg-white dark:bg-gray-900 dark:border-gray-800 dark:border-opacity-30"
			>
				<Button
					variant="outline"
					role="combobox"
					aria-expanded={open}
					className="justify-between"
				>
					<div className="flex gap-2 items-center justify-center font-medium text-gray-800 dark:text-white">
						<ReactCountryFlag
							svg
							countryCode={
								languages.find((language) => language.value === value)
									?.countryCode ?? "US"
							}
							style={{
								fontSize: "2em",
								lineHeight: "2em",
								borderRadius: "25%",
							}}
						/>
						{
							languages.find((language) => language.value === value)
								?.abbreviation
						}
					</div>
					{open ? (
						<ChevronUp className="ml-2 h-4 w-4 shrink-0 opacity-50 dark:text-white" />
					) : (
						<ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50 dark:text-white" />
					)}
				</Button>
			</PopoverTrigger>
			<PopoverContent className="max-w-[130px] p-0">
				<Command>
					<CommandList>
						<CommandGroup>
							{languages.map((language) => (
								<CommandItem
									key={language.value}
									value={language.value}
									onSelect={(currentValue) => {
										setValue(currentValue);
										setOpen(false);
										i18n.changeLanguage(currentValue);
										updateCurrentEpisode();
									}}
								>
									<ReactCountryFlag
										svg
										countryCode={language.countryCode}
										style={{
											fontSize: "1.5em",
											lineHeight: "1.5em",
											borderRadius: "25%",
										}}
									/>
									{language.abbreviation}
									<Check
										className={cn(
											"ml-auto",
											value === language.value ? "opacity-100" : "opacity-0"
										)}
									/>
								</CommandItem>
							))}
						</CommandGroup>
					</CommandList>
				</Command>
			</PopoverContent>
		</Popover>
	);
}
