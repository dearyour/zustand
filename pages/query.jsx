import React from "react";
import Example from "../component/reactQuery/Example";
import { QueryClientProvider, QueryClient, useQuery } from "react-query";
import QuickStart from "../component/reactQuery/QuickStart";

// if (process.env.NODE_ENV === "development") {
//   const { worker } = require("../mocks/browser");
//   worker.start();
// }

const queryClient = new QueryClient();
export default function query() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Example />
        <QuickStart />
      </QueryClientProvider>
    </>
  );
}