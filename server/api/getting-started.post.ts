import { serverSupabaseClient } from "#supabase/server";
export default defineEventHandler(async (event) => {
  const client = await serverSupabaseClient(event);
  const body = await readBody(event);
  const { data, error } = await client
    .from("user_roles")
    .insert([{ user_id: body.user_id, role_id: body.role_id }])
    .select();
  return { data };
});
