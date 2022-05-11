import { useState } from "react";
import { api } from "../lib/api";

export interface NavbarProps {
  onShowFeedbacksClicked: () => void;
  onSwitchThemeClicked: () => void;
  whiteThemeOn: boolean;
}

export function Navbar({
  onShowFeedbacksClicked,
  onSwitchThemeClicked,
  whiteThemeOn,
}: NavbarProps) {
  return (
    <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-zinc-800 transition ease-in-out duration-150">
      <div className="container flex flex-wrap justify-end items-center mx-auto ">
        <div className="hidden w-full md:block md:w-auto" id="mobile-menu">
          <ul className="flex flex-col items-center mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
            <li>
              <button
                className="h-12 w-15 p-2 rounded-full text-center bg-zinc-300 dark:bg-black text-blue-400 dark:text-white transition ease-in-out duration-150"
                onClick={() => onSwitchThemeClicked()}
              >
                {whiteThemeOn ? "Tema Escuro" : "Tema Branco"}
              </button>
            </li>
            <li className="p-2 dark:text-white text-blue-400">
              <button
                className="h-12 w-15 p-2 rounded-full text-center bg-zinc-300 dark:bg-black text-blue-400 dark:text-white transition ease-in-out duration-150"
                onClick={() => onShowFeedbacksClicked()}
              >
                Show feedbacks
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
