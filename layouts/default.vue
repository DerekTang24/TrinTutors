<script setup lang="ts">
const supabase = useSupabaseClient();
const user = useSupabaseUser();
const session = useSupabaseSession();
let role_id: number | null = null;

if (user.value) {
  const { data: user_roles, error } = await supabase
    .from("user_roles")
    .select("role_id")
    .eq("user_id", user.value.id);

  if (error) {
    console.error(error);
  } else {
    if (user_roles.length !== 0) {
      role_id = user_roles[0].role_id;
    }
  }
}
console.log("session", session);
</script>
<template>
  <div>
    <template v-if="role_id === 0">
      <AdminNavbar />
    </template>
    <template v-if="role_id === 1">
      <StudentNavbar />
    </template>
    <template v-if="role_id === 2">
      <TutorNavbar />
    </template>
    <template v-if="role_id === 3">
      <TeacherNavbar />
    </template>
    <slot />
    <Footer />
  </div>
</template>
