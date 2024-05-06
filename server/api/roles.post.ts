interface RoleRequest {
  role_id: number;
  user_id: string;
}
import { serverSupabaseClient } from "#supabase/server";
import { Database } from "~/types/supabase";

export default eventHandler(async (event) => {
  const body = await readBody<RoleRequest>(event);
  const supabase = await serverSupabaseClient<Database>(event);

  const { data, error } = await supabase
    .from("user_roles")
    .insert([{ role_id: body.role_id, user_id: body.user_id }])
    .select();
  return { data };
});
