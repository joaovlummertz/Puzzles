import { Episode as EpisodeType } from "@/Types";
import dayjs from 'dayjs';
import advancedFormat from "dayjs/plugin/advancedFormat"

export default function Episode({ episode }: { episode: EpisodeType | null }) {
    dayjs.extend(advancedFormat);
    return (
		<section className="max-w-[1200px] flex mx-auto 2xl:my-2">
			<div className="font-poppins w-full h-full lg:my-8 mx-6 pb-4 rounded-sm bg-dark-yellow shadow m-auto flex flex-col flex-grow">
				<h3 className="py-3 text-2xl font-semibold text-center text-gray-800">
					{`Season ${episode?.season}, Episode ${(episode?.episodeNumber ?? 0) + 1}: ${episode?.name}`}
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
							<span className="font-semibold">Overview: </span>
							{episode?.overview}
						</p>
						<p>
							<span className="font-semibold">Duration: </span>
							{episode?.duration} minutes
						</p>
						<p>
							<span className="font-semibold">Aired on: </span>
                            {dayjs(episode?.airDate).format("MMMM Do[,] YYYY")}
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
