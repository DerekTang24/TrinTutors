import { serverSupabaseClient } from "#supabase/server";
import { Database } from "~/types/supabase";
export default defineEventHandler(async (event) => {
  const supabase = await serverSupabaseClient<Database>(event);
  const body = await readBody(event);
  const { data, error } = await supabase
    .from("teacher_student")
    .insert([
      {
        teacher_id: body.teacher_id,
        student_id: body.student_id,
      },
    ])
    .select();
  return { data };
});
