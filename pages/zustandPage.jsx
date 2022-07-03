import React from "react";
import Text from "../component/Text";
import Character from "../component/Character";
import TodoList from "../component/TodoList";
import CurrentUserInfo from "../component/saga/CurrentUserInfo";
import ScratchsComponent from "../component/scratchs/scratchsComponent";

export default function zustandPage() {
  return (
    <div>
      <Text />
      <Character />
      <TodoList />
      <CurrentUserInfo />
      <ScratchsComponent />
    </div>
  );
}
