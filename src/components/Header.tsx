import { BsFillUmbrellaFill } from "react-icons/bs";

export default function Header() {
    return (
        <header>
            <nav className="flex justify-center items-center w-full pt-4 text-4xl font-poppins font-semibold">
                <div className="flex flex-row gap-2.5">
                    <h1 className="text-dark-yellow">Puzzles</h1>
                    {/* #ebc446 is the same color as dark-yellow */}
                    <BsFillUmbrellaFill color="#ebc446" /> 
                </div>
            </nav>
            <h2 className="text-2xl font-medium text-gray-800 text-center py-8">Random How I Met Your Mother Episode Generator</h2>
        </header>

    );
}