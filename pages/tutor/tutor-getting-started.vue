<script setup lang="ts">
const config = useRuntimeConfig();
const grade = ref(null);
const loading = ref(false);
const supabase = useSupabaseClient();
const supabaseUser = useSupabaseUser();
const subjects = ref<string[]>([]);
const bio = ref("");
const name = ref("");
const experience = ref(null);

const submitRole = async () => {
  if (supabaseUser.value) {
    const role = await $fetch("/api/tutor-started", {
      method: "POST",
      body: {
        id: supabaseUser.value.id,
        name: name.value,
        grade: parseInt(grade.value),
        subjects: subjects.value,
        experience: parseInt(experience.value),
        bio: bio.value,
      },
    });
    navigateTo({ path: "/tutor/home" });
  }
};
</script>

<template>
  <div class="w-60">
    <div class="form-control">
      <label class="label cursor-pointer">
        <span class="label-text">9th</span>
        <input
          type="radio"
          name="radio-10"
          v-model="grade"
          :value="9"
          class="radio checked:bg-blue-500"
        />
      </label>
    </div>
    <div class="form-control">
      <label class="label cursor-pointer">
        <span class="label-text">10th</span>
        <input
          type="radio"
          name="radio-10"
          v-model="grade"
          :value="10"
          class="radio checked:bg-blue-500"
        />
      </label>
    </div>
    <div class="form-control">
      <label class="label cursor-pointer">
        <span class="label-text">11th</span>
        <input
          type="radio"
          name="radio-10"
          v-model="grade"
          :value="11"
          class="radio checked:bg-blue-500"
        />
      </label>
    </div>
    <div class="form-control">
      <label class="label cursor-pointer">
        <span class="label-text">12th</span>
        <input
          type="radio"
          name="radio-10"
          v-model="grade"
          :value="12"
          class="radio checked:bg-blue-500"
        />
      </label>
    </div>
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
        <label class="label">
          <span class="label-text">Bio</span>
          <textarea v-model="bio" class="textarea"></textarea>
        </label>
      </div>
    </div>
    <div class="form-control">
      <label class="label">
        <span class="label-text">Name</span>
        <input type="text" v-model="name" class="input" />
      </label>
    </div>
    <div class="form-control">
      <label class="label">
        <span class="label-text">Experience</span>
        <input type="number" v-model="experience" class="input" />
      </label>
    </div>
    <button class="btn btn-primary" @click="submitRole()">Submit</button>
  </div>
</template>
