import { Head } from "$fresh/runtime.ts";
import { AppProps } from "$fresh/server.ts";

export default function App(props: AppProps) {
  return (
    <>
      <Head>
        <title>AI対戦システム</title>
        <link rel="icon" type="image/png" href="/logo.png" sizes="16x16" />
      </Head>
      <div class="bg-blue-200 h-screen pt-2">
        <a href="/">
          <h1 class="text-center text-3xl">じゃんけんAI対戦システム</h1>
        </a>
        <div class="bg-white rounded p-6 mt-4">
          <props.Component />
        </div>
      </div>
    </>
  );
}
