import { Switch } from "@headlessui/react";
import { useState } from "react";

interface ThemeSwitchToggleProps {
  onChangeCallback: () => void;
  behaviorFlag: boolean;
}

export function ThemeSwitchToggle({
    onChangeCallback,
    behaviorFlag,
}: ThemeSwitchToggleProps) {
  const [enabled, setEnabled] = useState(true);

  const handleChange = () => {
    if (enabled) setEnabled(false);
    else setEnabled(true);
    onChangeCallback();
  };

  return (
    <>
      <Switch
        checked={enabled}
        onChange={handleChange}
        className={`${
          enabled ? "bg-black" : "bg-gray-400"
        } relative inline-flex h-6 w-11 items-center rounded-full`}
      >
        <span
          className={`${
            enabled ? "translate-x-6" : "translate-x-1"
          } inline-block h-4 w-4 transform rounded-full bg-white`}
        />
      </Switch>
      <label className="text-xl"> {behaviorFlag ? "Dark" : "White"}</label>
    </>
  );
}
