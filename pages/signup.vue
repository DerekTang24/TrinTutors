<script setup lang="ts">
const config = useRuntimeConfig();
const mail = ref("");
const pass = ref("");
const role_id = ref(2);
const loading = ref(false);
const supabase = useSupabaseClient();

const selected = ref("student");

useHead({ title: "Signup" });

const signUp = async () => {
  const { data, error } = await supabase.auth.signUp({
    email: mail.value,
    password: pass.value,
    options: {
      emailRedirectTo: "http://localhost:3000/",
    },
  });
  if (error) return error;
  else {
    await navigateTo({ path: "/getting-started" });
  }
};
const signInWithGoogle = async () => {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
      queryParams: {
        access_type: "offline",
      },
      redirectTo: `http://localhost:3000/getting-started`,
    },
  });
  if (error) console.log(error);
};
</script>
<template>
  <button
    class="btn btn-primary"
    :class="{ loading: loading }"
    @click="signInWithGoogle"
  >
    Google
  </button>
  <div class="w-80">
    <label class="input input-bordered flex items-center gap-2 my-3">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
        fill="currentColor"
        class="w-4 h-4 opacity-70"
      >
        <path
          d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z"
        />
        <path
          d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z"
        />
      </svg>
      <input type="text" v-model="mail" class="grow" placeholder="Email" />
    </label>
    <label class="input input-bordered flex items-center gap-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
        fill="currentColor"
        class="w-4 h-4 opacity-70"
      >
        <path
          fill-rule="evenodd"
          d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
          clip-rule="evenodd"
        />
      </svg>
      <input
        type="password"
        v-model="pass"
        class="grow"
        placeholder="Password"
      />
    </label>
    <!-- <div class="form-control">
      <label class="label cursor-pointer">
        <span class="label-text">Student</span>
        <input
          type="radio"
          name="radio-10"
          v-model="role_id"
          :value="2"
          class="radio checked:bg-blue-500"
        />
      </label>
    </div>
    <div class="form-control">
      <label class="label cursor-pointer">
        <span class="label-text">Tutor</span>
        <input
          type="radio"
          name="radio-10"
          v-model="role_id"
          :value="3"
          class="radio checked:bg-blue-500"
        />
      </label>
    </div>
    <div class="form-control">
      <label class="label cursor-pointer">
        <span class="label-text">Teacher</span>
        <input
          type="radio"
          name="radio-10"
          v-model="role_id"
          :value="4"
          class="radio checked:bg-blue-500"
        />
      </label>
    </div> -->
    <button
      class="btn btn-primary"
      :class="{ loading: loading }"
      @click="signUp"
    >
      Sign Up
    </button>
  </div>
</template>
