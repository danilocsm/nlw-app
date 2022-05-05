import { useState } from 'react'
import { Widget} from "./components/Widget"
// interface ButtonProps {
//   text?: string; // conditional property
// }

// function Button(props: ButtonProps) {
//   console.log(props.text);
//   return <button className="bg-violet-500 px-4 h-10 rounded hover:bg-violet-700 transition-colors">{props.text ?? "Default"}</button>
// }

// function App() {
//   return (
//     <div className="flex gap-2"> 
//       <img src=""></img>
//       <Button text="Enviar"/>
//       <Button text="Ok"/>
//     </div>
//   );
// }

// export default App
export function App() {
  return <Widget />;
}
