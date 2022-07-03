import React from "react";
import { useStore } from "./Todo/TodoStore";

const TodoListStats = () => {
  const { percentCompleted, totalNum, totalCompletedNum, totalUncompletedNum } =
    useStore((state) => state.todoListStatsState());
  //필터할때처럼 이곳도 함수로 todoListStatsState() 소환해야지 실행됨

  const formattedPercentCompleted = Math.round(percentCompleted * 100);
  return (
    <div>
      <li>Total items: {totalNum}</li>
      <li>Itmes completed: {totalCompletedNum}</li>
      <li>Items not completed: {totalUncompletedNum}</li>
      <li>Percent completed: {formattedPercentCompleted}</li>
    </div>
  );
};

export default TodoListStats;
