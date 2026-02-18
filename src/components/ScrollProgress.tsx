import { useEffect, useState } from "react";

const ScrollProgress = () => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const totalScroll = document.documentElement.scrollTop;
            const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scroll = totalScroll / windowHeight;
            setProgress(scroll);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="fixed top-0 left-0 right-0 h-[3px] bg-transparent z-[100] pointer-events-none">
            <div
                className="h-full bg-gradient-to-r from-red-600 to-green-500 transition-all duration-150 ease-out"
                style={{ width: `${progress * 100}%` }}
            />
        </div>
    );
};

export default ScrollProgress;
