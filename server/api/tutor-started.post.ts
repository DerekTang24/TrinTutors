import { serverSupabaseClient } from "#supabase/server";
import { Database } from "~/types/supabase";
export default defineEventHandler(async (event) => {
  const supabase = await serverSupabaseClient<Database>(event);
  const body = await readBody(event);
  const { data, error } = await supabase
    .from("tutors")
    .insert([
      {
        id: body.id,
        name: body.name,
        grade: body.grade,
        experience: body.experience,
        subjects: body.subjects,
        bio: body.bio,
      },
    ])
    .select();
  return { data };
});
