import { Handlers } from "$fresh/server.ts";
import { findById } from "@/db.ts";

export const handler: Handlers = {
  async GET(req, ctx) {
    const ai = await findById(Number(ctx.params.id));
    return new Response(ai.src, {
      headers: {
        "content-type": "text/javascript",
      },
    });
  },
};
