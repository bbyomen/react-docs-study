// export function getFinalState(baseState, queue) {
//   let finalState = baseState;

//   queue.forEach((update) => {
//     finalState = typeof update === "function" ? update(finalState) : update;
//   });

//   return finalState;
// }

export const getFinalState = (baseState, queue) =>
  queue.reduce(
    (state, update) => (typeof update === "function" ? update(state) : update),
    baseState
  );

// import { useEffect, useState } from "react";

// export function getFinalState(baseState, queue) {
//   const [finalState, setFinalState] = useState(baseState);

//   useEffect(() => {
//     queue.forEach((update) => setFinalState(update));
//     return () => {
//       setFinalState(baseState);
//     };
//   }, []);

//   return finalState;
// }
