import { HandlerContext, Handlers, PageProps } from "$fresh/server.ts";

export function Button(props: any) {
  return <button {...props} class="rounded bg-gray-300 pl-7 pr-7 pt-2 pb-2" />;
}

interface CodeEditorProps {
  id?: number;
  title?: string;
  src?: string;
}

export function CodeEditor(props: CodeEditorProps) {
  return (
    <form method="post">
      <input type="hidden" name="id" value={props.id} />
      <div>
        <div>タイトル</div>
        <input name="title" class="border-1 p-2" value={props.title} />
      </div>
      <div>
        <div>ソースコード</div>
        <textarea cols={80} rows={20} name="src" class="border-1 p-2 font-mono">
          {props.src}
        </textarea>
      </div>
      <Button>
        保存
      </Button>
    </form>
  );
}
