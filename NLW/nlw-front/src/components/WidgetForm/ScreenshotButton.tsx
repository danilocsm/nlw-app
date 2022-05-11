import { Camera, Trash } from "phosphor-react";
import html2canvas from "html2canvas";
import { useState } from "react";
import { Loading } from "../Loading";

interface ScreenshotButtonProps {
  screenshot: string | null;
  onScreenshotTaken: (screenshot: string) => void;
}

export function ScreenshotButton({
  screenshot,
  onScreenshotTaken,
}: ScreenshotButtonProps) {
  const [isTakingScreenshot, setIsTakingScreenshot] = useState(false);

  async function handleTakeScreenshot() {
    setIsTakingScreenshot(true);
    const canvas = await html2canvas(document.querySelector("html")!);
    const base64image = canvas.toDataURL("image/png");
    setIsTakingScreenshot(false);
    onScreenshotTaken(base64image);
  }

  if (screenshot) {
    return (
      <button
        type="button"
        className="p-1 w-10 h-10 rounded-md border-transparent flex justify-end items-end dark:text-zinc-400 hover:text-zinc-100 transition-colors"
        onClick={() => onScreenshotTaken("")}
        style={{
          backgroundImage: `url(${screenshot})`,
          backgroundPosition: "right bottom",
          backgroundSize: 180,
        }}
      >
        <Trash weight="fill" />
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={handleTakeScreenshot}
      className="p-2 bg-zinc-300 dark:bg-zinc-800 rounded-md border-transparent hover:bg-zinc-400 dark:hover:bg-zinc-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400 focus:ring-offset-blue-400 dark:focus:ring-offset-zinc-900 dark:focus:ring-brand-500"
    >
      {!isTakingScreenshot ? (
        <Camera className="w-r6g h-6 text-black dark:text-zinc-100" />
      ) : (
        <Loading />
      )}
    </button>
  );
}
