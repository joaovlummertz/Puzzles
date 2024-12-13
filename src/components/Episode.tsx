import episodeImage from "../assets/pilot.jpg"

export default function Episode() {
    return (
        <section className="max-w-[1200px] h-[400px] flex mx-auto my-8">
            <div className="font-poppins w-full h-full mx-6 rounded-sm bg-dark-yellow m-auto flex flex-col flex-grow">
                <h3 className="pt-2 text-2xl font-semibold text-center text-gray-800">Season 1, Episode 1: Pilot</h3>
                <div className="grid grid-cols-2 h-full">
                    <div className="flex items-center justify-center">
                        <img className="rounded w-[95%] h-auto" src={episodeImage} alt="Episode image" />
                    </div>
                    <div className="w-[95%] text-gray-800 font-light m-auto flex flex-col gap-2 text-[1.15rem]">
                        <p>
                            <span className="font-semibold">Overview: </span>
                            When Ted's best friend Marshall proposes to his girlfriend, Lily, Ted realizes he'd better get a move on if he hopes to find true love. Ted soon meets Robin in a neighborhood bar, immediately becomes smitten and scores a first date. But when Ted can hardly wait to see her again, his eagerness threatens to scare her away.
                        </p>
                        <p>
                            <span className="font-semibold">Duration: </span>
                            23 minutes
                        </p>
                        <p>
                            <span className="font-semibold">Aired on: </span>
                            September 19th, 2005
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}