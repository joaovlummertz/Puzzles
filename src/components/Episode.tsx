import { Episode as EpisodeType } from "@/Types";
import dayjs from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";
import localizedFormat from "dayjs/plugin/localizedFormat";
import "dayjs/locale/pt-br";
import "dayjs/locale/en"; 
import "dayjs/locale/es"; 
import { useTranslation } from "react-i18next";
import ReactLoading from "react-loading";

export default function Episode({
	episode,
	isLoading,
}: {
	episode: EpisodeType | null;
	isLoading: boolean;
}) {
	const { t, i18n } = useTranslation();

	dayjs.extend(advancedFormat);
	dayjs.extend(localizedFormat);
	dayjs.locale(i18n.language); 
	console.log(i18n.language)

	return isLoading ? (
		<section className="max-w-[1200px] flex mx-auto 2xl:my-2">
			<div className="font-poppins w-full h-96 lg:my-4 2xl:my-6 mx-6 pb-4 rounded-sm bg-dark-yellow shadow m-auto flex items-center justify-center">
				<ReactLoading
					type={"spin"}
					color="white"
					height={200}
					width={200}
					className=""
				/>
			</div>
		</section>
	) : (
		<section className="max-w-[1200px] flex mx-auto 2xl:my-2">
			<div className="font-poppins w-full min-h-96 lg:my-4 2xl:my-6 mx-6 pb-4 rounded-sm bg-dark-yellow shadow m-auto flex flex-col flex-grow">
				<h3 className="py-3 text-2xl font-semibold text-center text-gray-800">
					{`${t("season")} ${episode?.season}, ${t("episode")} ${
						(episode?.episodeNumber ?? 0) + 1
					}: ${episode?.name}`}
				</h3>
				<div className="grid lg:grid-cols-2 max-lg:gap-3 h-full">
					<div className="flex items-center justify-center">
						<img
							className="rounded w-[95%] h-auto"
							src={episode?.image}
							alt="Episode image"
						/>
					</div>
					<div className="w-[95%] text-gray-800 font-light m-auto flex flex-col gap-2 text-[1.15rem]">
						<p>
							<span className="font-semibold">{t("overview")}: </span>
							{episode?.overview}
						</p>
						<p>
							<span className="font-semibold">{t("duration")}: </span>
							{episode?.duration} {t("minutes")}
						</p>
						<p>
							<span className="font-semibold">{t("airedOn")}: </span>
							{dayjs(episode?.airDate).format(i18n.language == "en" ? "MMMM, Do, YYYY" : "LL")}
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
