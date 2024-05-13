<script setup lang="ts">
const supabase = useSupabaseClient();
const user = useSupabaseUser();

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
    <div class="navbar-start">
      <div class="dropdown">
        <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </div>
        <ul
          tabindex="0"
          class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li>
            <NuxtLink>Student</NuxtLink>
            <ul class="p-2">
              <li><NuxtLink to="/student/home">Home</NuxtLink></li>
              <li><NuxtLink to="/student/work">Work</NuxtLink></li>
            </ul>
          </li>
          <li>
            <NuxtLink>Tutor</NuxtLink>
            <ul class="p-2">
              <li><NuxtLink to="/tutor/home">Home</NuxtLink></li>
              <li><NuxtLink to="/tutor/list">List</NuxtLink></li>
            </ul>
          </li>
          <li>
            <NuxtLink>Teacher</NuxtLink>
            <ul class="p-2">
              <li><NuxtLink to="/teacher/home">Home</NuxtLink></li>
              <li><NuxtLink to="/teacher/student">Student</NuxtLink></li>
            </ul>
          </li>
        </ul>
      </div>
      <NuxtLink class="btn btn-ghost text-xl">TrinTutors</NuxtLink>
    </div>
    <div class="navbar-center hidden lg:flex">
      <ul class="menu menu-horizontal px-1">
        <!-- <li><NuxtLink to="/admin/home">Home</NuxtLink></li> -->
        <!-- <li> -->
        <!--   <details> -->
        <!--     <summary>Parent</summa
        <!--     <ul class="p-2"> -->
        <!--       <li><NuxtLink>Submenu 1</NuxtLink></li> -->
        <!--       <li><NuxtLink>Submenu 2</NuxtLink></li> -->
        <!--     </ul> -->
        <!--   </details> -->
        <!-- </li> -->
        <!-- <li><StudentNuxtLink to="/admin/work">Work</NuxtLink></li> -->
        <li>
          <details>
            <summary>Student</summary>
            <ul class="p-2">
              <li><NuxtLink to="/student/home">Home</NuxtLink></li>
              <li><NuxtLink to="/student/work">Work</NuxtLink></li>
            </ul>
          </details>
        </li>
        <li>
          <details>
            <summary>Tutor</summary>
            <ul class="p-2">
              <li><NuxtLink to="/tutor/home">Home</NuxtLink></li>
              <li><NuxtLink to="/tutor/list">List</NuxtLink></li>
            </ul>
          </details>
        </li>
        <li>
          <details>
            <summary>Teacher</summary>
            <ul class="p-2">
              <li><NuxtLink to="/teacher/home">Home</NuxtLink></li>
              <li><NuxtLink to="/teacher/student">Student</NuxtLink></li>
            </ul>
          </details>
        </li>
      </ul>
    </div>
    <div class="navbar-end">
      <button v-if="user" clbuttonss="btn" @click="signOut">Sign Out</button>
    </div>
  </div>
</template>
