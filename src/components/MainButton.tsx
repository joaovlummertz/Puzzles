import { Button } from "./ui/button";

export default function MainButton() {
    return (
        <div className="w-full flex items-center justify-center">
            <Button type="button" className="px-4 py-6 bg-gray-800 text-dark-yellow font-semibold text-lg hover:bg-dark-yellow hover:text-gray-800">Generate</Button>
        </div>
    );
}