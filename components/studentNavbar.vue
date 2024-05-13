<script setup lang="ts">
const supabase = useSupabaseClient();
const user = useSupabaseUser();

const signOut = async () => {
  const { error } = await supabase.auth.signOut();
  if (error) console.log(error);
  else {
    await navigateTo({ path: "/login" });
  }
};
</script>

<template>
  <div class="navbar bg-base-100">
    <div class="flex justify-between items-center w-full">
      <div class="navbar-start">
        <NuxtLink class="btn btn-ghost text-xl">TrinTutors</NuxtLink>
      </div>
      <div class="navbar-center flex items-center">
        <NuxtLink class="mx-4" to="/student/home">Home</NuxtLink>
        <NuxtLink class="mx-4" to="/tutor/list">List</NuxtLink>
      </div>
      <div class="navbar-end flex items-end">
        <button v-if="user" class="btn" @click="signOut">Sign Out</button>
      </div>
    </div>
  </div>
</template>
