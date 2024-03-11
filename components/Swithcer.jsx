import { useEffect, useState } from "react";
import { MdNightlight, MdBrightness7 } from "react-icons/md"

export default function Swithcer() {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        const isDarkMode = localStorage.getItem('darkMode') === 'true';
        setDarkMode(isDarkMode);
    }, []);

    useEffect(() => {
        document.documentElement.classList.toggle('dark', darkMode);
        localStorage.setItem('darkMode', darkMode);
    }, [darkMode]);

    const toggleDarkMode = () => {
        setDarkMode((prevMode) => !prevMode);
    };
    return (
        <>
            <button onClick={toggleDarkMode} className=" absolute top-0 right-0 m-8 p-3 dark:bg-white bg-slate-800 text-white dark:text-black rounded-full">
                {
                    darkMode ? <MdBrightness7 /> : <MdNightlight />
                }
            </button>
        </>
    )
}
