<script setup lang="ts">
const supabase = useSupabaseClient();
const user = useSupabaseUser();
const { data: tutors, error } = await supabase
  .from("tutors")
  .select("name")
  .eq("id", user.value!.id);
const tutorNameSlug = tutors[0].name.replace(" ", "-");

const signOut = async () => {
  console.log("signout");
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
        <NuxtLink class="mx-4" to="/tutor/home">Home</NuxtLink>
        <NuxtLink class="mx-4" v-bind:to="'/student/work/' + tutorNameSlug"
          >Work</NuxtLink
        >
        <NuxtLink class="mx-4" to="/tutor/list">List</NuxtLink>
        <NuxtLink class="mx-4" v-bind:to="'/tutor/profile/' + tutorNameSlug"
          >Profile</NuxtLink
        >
      </div>
      <div class="navbar-end flex items-end">
        <button v-if="user" class="btn" @click="signOut">Sign Out</button>
      </div>
    </div>
  </div>
</template>
