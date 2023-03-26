import { HandlerContext, Handlers, PageProps } from "$fresh/server.ts";
import { insert } from "@/db.ts";
import { CodeEditor } from "@/components.tsx";

interface PostProps {
  src: string;
}

export const handler: Handlers<PostProps> = {
  GET(req: Request, ctx: HandlerContext<PostProps>) {
    const src = `onmessage = (e) => {
  const hands = ["グー", "チョキ", "パー"];
  const hand = hands[Math.trunc(Math.random() * 3)];
  postMessage(hand);
};`;
    const props = { src };
    return ctx.render(props);
  },

  async POST(req: Request, ctx: HandlerContext<PostProps>) {
    const form = await req.formData();
    const title = form.get("title") as string;
    const src = form.get("src") as string;
    const data = { title, src };
    await insert(data);
    const url = new URL(req.url);
    return Response.redirect(url.origin + "/ai");
  },
};

export default function (props: PageProps<PostProps>) {
  return <CodeEditor src={props.data.src} />;
}
