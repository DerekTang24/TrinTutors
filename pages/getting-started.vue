<script setup lang="ts">
const config = useRuntimeConfig();
const role_id = ref(null);
const loading = ref(false);
const supabase = useSupabaseClient();
</script>

<template>
  <div class="form-control">
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
  </div>
</template>
