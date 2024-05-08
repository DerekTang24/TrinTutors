import { serverSupabaseClient } from "#supabase/server";
import { Database } from "~/types/supabase";
export default defineEventHandler(async (event) => {
  const supabase = await serverSupabaseClient<Database>(event);
  const body = await readBody(event);
  const { data, error } = await supabase
    .from("user_roles")
    .insert([{ user_id: body.user_id, role_id: body.role_id }])
    .select();
  console.log(data, error);
  return { data };
});
