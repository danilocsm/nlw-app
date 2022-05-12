import { NavButton, NavButtonPropsImp } from "./NavButton";
import { ThemeSwitchToggle } from "./ThemeSwitchToggle";

export interface NavbarProps {
  navBarItems: NavButtonPropsImp[];
  onSwitchThemeClicked: () => void;
  whiteThemeOn: boolean;
}

export function Navbar({
  navBarItems,
  onSwitchThemeClicked,
  whiteThemeOn,
}: NavbarProps) {
  return (
    <nav className="fixed flex-1 w-full bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-zinc-800 transition ease-in-out duration-150 m-1">
      <div className="container flex flex-wrap justify-end items-center mx-auto ">
        <div className="hidden  md:block md:w-auto " id="mobile-menu">
          <ul className="flex flex-row items-center mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
            <li>
              <ThemeSwitchToggle
                behaviorFlag={whiteThemeOn}
                onChangeCallback={onSwitchThemeClicked}
              />
            </li>
            {navBarItems.map((navButtonProp) => {
              return (
                <li className="p-2 dark:text-white text-blue-400">
                  <NavButton text={navButtonProp.text} onClick={navButtonProp.onClick} />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
}
