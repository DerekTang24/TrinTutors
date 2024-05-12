import { serverSupabaseClient } from "#supabase/server";
import { Database } from "~/types/supabase";
export default defineEventHandler(async (event) => {
  const supabase = await serverSupabaseClient<Database>(event);
  const body = await readBody(event);
  const { data, error } = await supabase
    .from("students")
    .insert([
      {
        id: body.id,
        name: body.name,
        subjects: body.subjects,
      },
    ])
    .select();
  console.log(data);
  return { data };
});
