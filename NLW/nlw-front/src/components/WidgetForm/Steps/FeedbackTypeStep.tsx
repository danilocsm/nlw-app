import { FeedbackType, feedbackTypes } from "..";
import { CloseButton } from "../../CloseButton";

// permite definir propriedades para um componente que irá receber via parametros
interface FeedbackTypeStepProps {
  onFeedbackTypeChanged: (type: FeedbackType) => void;
}

export function FeedbackTypeStep({onFeedbackTypeChanged}: FeedbackTypeStepProps) {
  return (
    // fragment
    <>
      <header>
        <span className="text-xl leading-6 dark:text-white text-blue-400">Deixe seu feedback</span>
        <CloseButton />
      </header>

      <div className="flex py-8 gap-2 w-full">
        {/* // retorna um array de arrays, formato [['chave', {conteudo}] ...] */}
        {Object.entries(feedbackTypes).map(([key, value]) => {
          return (
            <button
              key={key}
              className="bg-blue-400 dark:bg-zinc-800 rounded-lg py-5 w-24 flex-1 flex-col items-center gap-2 border-2 border-transparent hover:border-brand-500 focus:border-brand-500 focus:outline-none"
              onClick={() => onFeedbackTypeChanged(key as FeedbackType)}
              type="button"
            >
              {/* <img src="" alt={value.image.alt}></img> */}
              <span>{value.title}</span>
            </button>
          );
        })}
      </div>
    </>
  );
}
