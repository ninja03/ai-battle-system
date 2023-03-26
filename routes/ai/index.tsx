import { Handlers, PageProps } from "$fresh/server.ts";
import { AI, findAll } from "@/db.ts";
import { Button } from "@/components.tsx";

export const handler: Handlers<AI[]> = {
  async GET(_req, ctx) {
    const result = await findAll();
    return ctx.render(result);
  },
};

export default function (props: PageProps<AI[]>) {
  return (
    <>
      <h2 class="text-center text-2xl">AI一覧</h2>
      <a href="/ai/post" class="block text-center">
        <Button>新規追加</Button>
      </a>
      <div>
        {props.data.map((ai) => (
          <div class="text-center m-2">
            <a href={"/ai/" + ai.id}>
              <Button>
                {ai.title}
              </Button>
            </a>
          </div>
        ))}
      </div>
    </>
  );
}
