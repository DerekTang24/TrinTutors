<script setup lang="ts">
const config = useRuntimeConfig();
const supabase = useSupabaseClient();
const supabaseUser = useSupabaseUser();
const subjects = ref<string[]>([]);
const name = ref("");
const submitRole = async () => {
  if (supabaseUser.value) {
    const role = await $fetch("/api/student-started", {
      method: "POST",
      body: {
        id: supabaseUser.value.id,
        name: name.value,
        subjects: subjects.value,
      },
    });
    navigateTo({ path: "/student/home" });
  }
};
</script>

<template>
  <div class="w-60">
    <div class="form-control">
      <label class="label cursor-pointer">
        <span class="label-text">English</span>
        <input
          type="checkbox"
          v-model="subjects"
          value="English"
          class="checkbox checked:bg-blue-500"
        />
      </label>
    </div>
    <div class="form-control">
      <label class="label cursor-pointer">
        <span class="label-text">Mathematics</span>
        <input
          type="checkbox"
          v-model="subjects"
          value="Mathematics"
          class="checkbox checked:bg-blue-500"
        />
      </label>
    </div>
    <div class="form-control">
      <label class="label cursor-pointer">
        <span class="label-text">History</span>
        <input
          type="checkbox"
          v-model="subjects"
          value="History"
          class="checkbox checked:bg-blue-500"
        />
      </label>
    </div>
    <div class="form-control">
      <label class="label cursor-pointer">
        <span class="label-text">Computer Science</span>
        <input
          type="checkbox"
          v-model="subjects"
          value="Computer Science"
          class="checkbox checked:bg-blue-500"
        />
      </label>
    </div>
    <div class="form-control">
      <label class="label cursor-pointer">
        <span class="label-text">Sciences</span>
        <input
          type="checkbox"
          v-model="subjects"
          value="Sciences"
          class="checkbox checked:bg-blue-500"
        />
      </label>
    </div>
    <div class="form-control">
      <label class="label cursor-pointer">
        <span class="label-text">Languages</span>
        <input
          type="checkbox"
          v-model="subjects"
          value="Languages"
          class="checkbox checked:bg-blue-500"
        />
      </label>
    </div>
    <div class="form-control">
      <label class="label">
        <span class="label-text">Name: </span>
        <input
          type="text"
          v-model="name"
          placeholder="First Last"
          class="input mx-2 border-gray-500 border-1"
        />
      </label>
    </div>
    <button class="btn btn-primary" @click="submitRole()">Submit</button>
  </div>
</template>
