<script setup lang="ts">
const runtimeConfig = useRuntimeConfig()
const mail = ref("");
const pass = ref("");
const loading = ref(false);
const invalid = ref(false);
const supabase = useSupabaseClient();

useHead({ title: "Login" });

const signIn = async () => {
  loading.value = true;
  const { data, error } = await supabase.auth.signInWithPassword({
    email: mail.value,
    password: pass.value,
  });
  if (error) {
    invalid.value = true;
  } else {
    await navigateTo({ path: "home" });
  }
  loading.value = false;
};

const signInWithGoogle = async () => {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
      queryParams: {
        access_type: 'offline',
      },
      redirectTo: `http://localhost:3000/`,
    },
  });
  if (error) console.log(error);
};


const signInWithGithub = async () => {
  const { error } = await supabase.auth.signInWithOAuth({
    provider: "github",
    options: {
      redirectTo: "http://localhost:3000/student/home",
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
  <button
    class="btn btn-primary"
    :class="{ loading: loading }"
    @click="signInWithGithub"
  >
    Github
  </button>
  <div class="w-80">
    <label class="input input-bordered flex items-center gap-2 my-4">
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
      <input
        type="text"
        v-model="mail"
        v-on:keyup.enter="signIn"
        class="grow"
        placeholder="Email"
      />
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
        v-on:keyup.enter="signIn"
        class="grow"
        placeholder="Password"
      />
    </label>
    <div
      class="text-red-500"
      :class="[{ 'opacity-100': invalid }, { 'opacity-0': !invalid }]"
    >
      Invalid username or password
    </div>
    <button
      class="btn btn-primary"
      :class="{ loading: loading }"
      @click="signIn"
    >
      Login
    </button>
    <br></br><br></br>
    <NuxtLink to="/signup">
      <button
      class="btn btn-primary"
    >Create</button>
      </NuxtLink>
  </div>
</template>




