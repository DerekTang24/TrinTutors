<script setup lang="ts">
const config = useRuntimeConfig();
const role_id = ref(null);
const loading = ref(false);
const supabase = useSupabaseClient();
const supabaseUser = useSupabaseUser();
const submitRole = async () => {
  if (role_id.value && supabaseUser.value) {
    const role = await $fetch("/api/getting-started", {
      method: "POST",
      body: {
        user_id: supabaseUser.value.id,
        role_id: parseInt(role_id.value),
      },
    });
    console.log(role_id.value);
    if (role_id.value === 1) {
      navigateTo({ path: "/student/student-getting-started" });
    } else if (role_id.value === 2) {
      navigateTo({ path: "/tutor/tutor-getting-started" });
    } else {
      navigateTo({ path: "/teacher/home" });
    }
  }
};
</script>

<template>
  <div class="w-60">
    <div class="form-control">
      <label class="label cursor-pointer">
        <span class="label-text">Student</span>
        <input
          type="radio"
          name="radio-10"
          v-model="role_id"
          :value="1"
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
          :value="2"
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
          :value="3"
          class="radio checked:bg-blue-500"
        />
      </label>
    </div>
    <button class="btn btn-primary" @click="submitRole()">Submit</button>
  </div>
</template>
