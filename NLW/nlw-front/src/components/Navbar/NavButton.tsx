export interface NavButtonProps {
  text: string;
  onClick: () => void;
}

export class NavButtonPropsImp implements NavButtonProps {
    constructor(text:string, onClick:() => void) {
        this.text = text;
        this.onClick = onClick;
    }
    text: string;
    onClick: () => void;
}

export function NavButton({ text, onClick }: NavButtonProps) {
  return (
    <button
      className="h-12 w-15 p-2 rounded-full text-center bg-zinc-400 dark:bg-black text-blue-400 font-bold dark:text-white transition ease-in-out duration-150"
      onClick={() => onClick()}
    >
      {`${text}`}
    </button>
  );
}
