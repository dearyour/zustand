import { rest } from "msw";

export const handlers = [
  rest.get("http://localhost:3000/api/user-name", async (req, res, ctx) => {
    const id = req.url.searchParams.get("id");
    return res(
      ctx.json({
        name: id === "1" ? "The one" : "The others",
      })
    );
  }),
];
