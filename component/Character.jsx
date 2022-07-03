import React from "react";
import create from "zustand";

const useStore = create((set) => ({
  textState: "",
  setTextState: (text) => set(() => ({ textState: text })),
}));

const Character = () => {
  return (
    <>
      <div>
        <TextInput />
        <CharacterCount />
      </div>
    </>
  );
};
export default Character;

const TextInput = () => {
  const [text, setText] = useStore((state) => [
    state.textState,
    state.setTextState,
  ]);

  const onChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <input type="text" value={text} onChange={onChange} />
      <br />
      Echo:{text}
    </div>
  );
};

const CharacterCount = () => {
  const count = useStore((state) => state.textState.length);
  return <>Character Count: {count}</>;
};
