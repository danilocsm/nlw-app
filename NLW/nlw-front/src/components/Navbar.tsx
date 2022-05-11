import { useState } from "react";

export function Navbar() {
  const [isWhiteTheme, setIsWhiteTheme] = useState(false);

  const handleThemeChange = () => {
    if (isWhiteTheme) {
      setIsWhiteTheme(false);
      document.documentElement.classList.add("dark");
    } else {
      setIsWhiteTheme(true);
      document.documentElement.classList.remove("dark");
    }
  };

  const handleFeedbacksRequest = () => {
    alert("Here are ur feedbacks");
  };

  return (
    <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-zinc-800 transition ease-in-out duration-150">
      <div className="container flex flex-wrap justify-end items-center mx-auto ">
        <div className="hidden w-full md:block md:w-auto" id="mobile-menu">
          <ul className="flex flex-col items-center mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
            <li>
              <button
                className="h-12 w-15 p-2 rounded-full text-center bg-zinc-300 dark:bg-black text-blue-400 dark:text-white transition ease-in-out duration-150"
                onClick={handleThemeChange}
              >
                {isWhiteTheme ? "Tema Escuro" : "Tema Branco"}
              </button>
            </li>
            <li className="p-2 dark:text-white text-blue-400">
              <button
                className="h-12 w-15 p-2 rounded-full text-center bg-zinc-300 dark:bg-black text-blue-400 dark:text-white transition ease-in-out duration-150"
                onClick={handleFeedbacksRequest}
              >
                Get feedbacks
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
