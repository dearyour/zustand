import React from "react";
import create from "zustand";
const useStore = create((set) => ({
  fontSize: 14,
  increaseFontSize: () => set((state) => ({ fontSize: state.fontSize + 1 })),
  trigger: false,
  toggleTrigger: () => set((state) => ({ trigger: !state.trigger })),
}));

function FontLabel() {
  const { fontSize, increaseFontSize, fontSizeLabel, trigger, toggleTrigger } =
    useStore(
      (state) => ({
        fontSize: state.fontSize,
        increaseFontSize: state.increaseFontSize,
        fontSizeLabel: state.fontSize + "px",
        trigger: state.trigger,
        toggleTrigger: state.toggleTrigger,
      }),
      //비교 compare 부분 이부분이 true값이 되어야지 반영된다
      (oldeState, newState) => oldeState.trigger === newState.trigger
    );

  return (
    <>
      <div style={{ fontSize }}>Current font size: {fontSizeLabel}</div>
      <button onClick={increaseFontSize}>size up_2</button>
      <button onClick={toggleTrigger}>toggle: {trigger.toString()}</button>
    </>
  );
}

export default function Text() {
  const fontSize = useStore((state) => state.fontSize);
  // const increaseFontSize = useStore( state => state.increaseFontSize)
  return (
    <>
      <p style={{ fontSize }}>This text will increase in size too.</p>
      {/* <button onClick={increaseFontSize}>size up</button> */}
      <FontLabel />
    </>
  );
}
