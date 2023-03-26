import { Handlers, PageProps } from "$fresh/server.ts";
import Battle from "@/islands/Battle.tsx";
import { AI, findAll } from "@/db.ts";

export const handler: Handlers<AI[]> = {
  async GET(_req, ctx) {
    const all = await findAll();
    return ctx.render(all);
  },
};

export default function BattlePage(props: PageProps<AI[]>) {
  return (
    <>
      <Battle ai={props.data} />
    </>
  );
}
