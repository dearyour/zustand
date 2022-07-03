import React, { useEffect, useRef } from "react";
import create from "zustand";

const useStore = create((set) => ({
  scratches: 0,
  addScratches: () => set((state) => ({ scratches: state.scratches + 1 })),
}));

export default function ScratchsComponent() {
  //   const scratches = useStore((state) => state.scratches);
  const scratchRef = useRef(useStore.getState().scratches);
  const addScratches = useStore((state) => state.addScratches);

  useEffect(() => {
    useStore.subscribe(
      (scratches) => {
        scratchRef.current = scratches;
        console.log(scratches);
        console.log(`scratchRef: ${scratchRef.current}`);
        console.log(scratchRef.current);
        if (scratches > 3) {
          alert("too many..");
        }
      },
      // scratches이 값이 바뀌었을때 위에 함수를 실행하라
      (state) => state.scratches
    );
  }, []);

  return (
    <div>
      {scratchRef.current}
      <br />
      <button onClick={addScratches}> Add scratches </button>
    </div>
  );
}
