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
</script>
<template>
  <div class="flex flex-col min-h-screen">
    <div v-if="role_id === 0">
      <AdminNavbar />
    </div>
    <div v-if="role_id === 1">
      <StudentNavbar />
    </div>
    <div v-if="role_id === 2">
      <TutorNavbar />
    </div>
    <div v-if="role_id === 3">
      <TeacherNavbar />
    </div>
    <div class="grow">
      <slot />
    </div>
  <Footer />
  </div>
</template>
