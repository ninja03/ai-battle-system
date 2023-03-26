import { createClient } from "https://esm.sh/@supabase/supabase-js@2.11.0";
const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
const supabaseKey = Deno.env.get("SUPABASE_KEY")!;
const supabase = createClient(supabaseUrl, supabaseKey);

export interface AI {
  id: number;
  title: string;
  src: string;
}

export interface Job {
  id: number;
}

export interface Battle {
  id: number;
}

export interface Ranking {
  rank: number;
}

export async function findById(id: number) {
  const result = await supabase.from("ai").select().eq("id", id);
  return result.data![0] as AI;
}

export async function findAll() {
  const result = await supabase
    .from("ai")
    .select()
    .order("id", { ascending: false });
  return result.data as AI[];
}

export async function insert(data: { title: string; src: string }) {
  await supabase.from("ai").insert({
    title: data.title,
    src: data.src,
  });
}

export async function update(id: number, data: { title: string; src: string }) {
  console.log(id);
  await supabase.from("ai").update({
    title: data.title,
    src: data.src,
  }).eq("id", id);
}
