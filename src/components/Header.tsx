import { BsFillUmbrellaFill } from "react-icons/bs";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import LanguageSelector from "./LanguageSelector";

function loadInitialTheme() {
	// Checks for device preference
	if (
		localStorage.theme === "dark" ||
		(!("theme" in localStorage) &&
			window.matchMedia("(prefers-color-scheme: dark)").matches)
	) {
		document.documentElement.classList.add("dark");
		return true;
	} else {
		document.documentElement.classList.remove("dark");
		return false;
	}
}

export default function Header({
	updateCurrentEpisode,
}: {
	updateCurrentEpisode: () => void;
}) {
	const { t } = useTranslation();

	const [isDarkMode, setIsDarkMode] = useState(loadInitialTheme());

	function handleButtonClick() {
		if (isDarkMode) {
			document.documentElement.classList.remove("dark");
			localStorage.theme = "light";
			setIsDarkMode(false);
		} else {
			document.documentElement.classList.add("dark");
			localStorage.theme = "dark";
			setIsDarkMode(true);
		}
	}

	return (
		<header>
			<nav className="flex items-center w-full py-4 text-4xl font-poppins font-semibold">
				<div className="flex flex-row gap-2.5 max-md:pl-4 md:mx-auto z-10">
					<h1 className="text-dark-yellow">Puzzles</h1>
					<BsFillUmbrellaFill color="#ebc446" />
				</div>
				<div className="mr-3 absolute right-3 flex items-center justify-center gap-4">
					<LanguageSelector updateCurrentEpisode={updateCurrentEpisode} />
					<button
						onClick={handleButtonClick}
						className="bg-[#f4f3f2] dark:bg-gray-900 !duration-500"
					>
						{isDarkMode ? (
							<MdOutlineLightMode className="!h-6 !w-6 text-[#d7dadc] hover:text-dark-yellow" />
						) : (
							<MdOutlineDarkMode className="!h-6 !w-6 text-gray-900 hover:text-dark-yellow" />
						)}
					</button>
				</div>
			</nav>
			<h2 className="text-xl md:text-2xl 2xl:py-4 mx-4 font-semibold text-gray-800 dark:text-light-gray text-center text-balance">
				{t("header")}
			</h2>
		</header>
	);
}
