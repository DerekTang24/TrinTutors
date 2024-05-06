<script setup lang="ts">
const supabase = useSupabaseClient();
const user = useSupabaseUser();
const session = useSupabaseSession();
if (user.value) {
  const { data: user_roles, error } = await supabase
    .from("user_roles")
    .select("role_id")
    .eq("user_id", user.value.id);
  const role_id = user_roles[0].role_id;
  switch (role_id) {
    case 1:
      navigateTo({ path: "/student/home" });
      break;
    case 2:
      navigateTo({ path: "/tutor/home" });
      break;
    case 3:
      navigateTo({ path: "/teacher/home" });
      break;
  }
}
console.log("session", session);
</script>
