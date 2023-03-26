import { Handlers, PageProps } from "$fresh/server.ts";
import { AI, findById, update } from "@/db.ts";
import { CodeEditor } from "@/components.tsx";

export const handler: Handlers<AI> = {
  async GET(_req, ctx) {
    const id = Number(ctx.params.id);
    const result = await findById(id);
    return ctx.render(result);
  },

  async POST(req) {
    const form = await req.formData();
    const id = Number(form.get("id") as string);
    const title = form.get("title") as string;
    const src = form.get("src") as string;
    const data = { id, title, src };
    await update(id, data);
    const url = new URL(req.url);
    return Response.redirect(url.origin + "/ai");
  },
};

// ソースコード編集画面
export default function Index(props: PageProps<AI>) {
  return (
    <CodeEditor
      id={props.data.id}
      title={props.data.title}
      src={props.data.src}
    />
  );
}
