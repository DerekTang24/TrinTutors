<script setup lang="ts">
const supabase = useSupabaseClient();
const user = useSupabaseUser();
if (user.value) {
  const { data: user_roles, error } = await supabase
    .from("user_roles")
    .select("role_id")
    .eq("user_id", user.value.id);
  const role_id = user_roles[0].role_id;
}
const signOut = async () => {
  console.log("signout");
  const { error } = await supabase.auth.signOut();
  if (error) console.log(error);
  else {
    await navigateTo({ path: "/login" });
  }
};
</script>

<template></template>
