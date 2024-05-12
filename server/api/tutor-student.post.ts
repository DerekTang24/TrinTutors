import { serverSupabaseClient } from "#supabase/server";
import { Database } from "~/types/supabase";
export default defineEventHandler(async (event) => {
  const supabase = await serverSupabaseClient<Database>(event);
  const body = await readBody(event);
  const { data, error } = await supabase
    .from("tutor_student")
    .insert([
      {
        tutor_id: body.tutor_id,
        student_id: body.student_id,
      },
    ])
    .select();
  console.log(data);
  return { data };
});
