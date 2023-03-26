import { Button } from "@/components.tsx";

export default function Index() {
  return (
    <div class="text-center">
      <a href="/ai/post" class="m-2 block">
        <Button>AI作成</Button>
      </a>
      <a href="/ai" class="block m-2">
        <Button>AI一覧</Button>
      </a>
      <a href="/battle" class="m-2 block">
        <Button>バトル</Button>
      </a>
    </div>
  );
}
