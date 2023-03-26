import { useEffect, useState } from "preact/hooks";
import { AI } from "@/db.ts";

export default function Battle(props: { ai: AI[] }) {
  const [result, setResult] = useState(new Map<string, string>());
  useEffect(() => {
    const temp = new Map<string, string>();
    const set = new Set<string>();
    for (const ai1 of props.ai) {
      for (const ai2 of props.ai) {
        if (ai1.id == ai2.id
          || set.has(ai1.id + "," + ai2.id)
          || set.has(ai2.id + "," + ai1.id)
        ) {
          continue;
        }
        set.add(ai1.id + "," + ai2.id);
        const workerA = new Worker(`/ai/${ai1.id}/worker`, { type: "module" });
        const workerB = new Worker(`/ai/${ai2.id}/worker`, { type: "module" });
        workerA.postMessage("");
        workerA.onmessage = (e1) => {
          workerB.postMessage("");
          workerB.onmessage = (e2) => {
            setResult(new Map(
              temp.set(ai1.id + "," + ai2.id, e1.data + "," + e2.data).set(ai2.id + "," + ai1.id, e2.data + "," + e1.data))
            );
          }
        };
      }
    }
  }, []);

  return (
    <table class="table-fixed border mx-auto">
      <tr>
        <td class="border p-2 text-center"></td>
        {props.ai.map((ai1) => <td class="border p-2 text-center">{ai1.title}</td>)}
      </tr>
      {props.ai.map((ai1) => (
        <tr>
          <td class="border p-2 text-center">{ai1.title}</td>
          {props.ai.map((ai2) => (
            <td class="border p-2 text-center">{result.get(ai1.id + "," + ai2.id)}</td>
          ))}
        </tr>
      ))}
    </table>
  );
}

