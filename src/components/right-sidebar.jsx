import InputSearch from "./input-search";
import TrendsForYou from "./trends-for-you";

export default function RightSidebar() {
    return (
        <div className="right-sidebar">
            <div className="trends">
                <InputSearch style={"input-search"} placeholder={"Search Twitter"} />
            </div>
            <div className="trends">
                <TrendsForYou />
            </div>
        </div>
    );
};