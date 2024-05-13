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
const file = ref<File | null>(null);
const getFile = (event: Event) => {
  const renamedFile = new File([event.target.files[0]], supabaseUser.value.id, {
    type: event.target.files[0].type,
  });
  file.value = renamedFile;
};

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

    const { data, error } = await supabase.storage
      .from("avatars")
      .upload(supabaseUser.value.id, file.value, {
        cacheControl: "3600",
        upsert: true,
      });
    console.log(data, error);
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
          <span class="label-text">Bio:</span>
          <textarea v-model="bio" class="textarea border-gray-500"></textarea>
        </label>
      </div>
    </div>
    <div class="form-control">
      <label class="label">
        <span class="label-text">Name:</span>
        <input
          type="text"
          v-model="name"
          placeholder="First Last"
          class="input mx-2 border-gray-500 border-1"
        />
      </label>
    </div>
    <div class="form-control">
      <label class="label">
        <span class="label-text">Experience:</span>
        <input
          type="number"
          v-model="experience"
          class="input border-gray-500 mx-2"
        />
      </label>
    </div>
    <input
      type="file"
      accept="image/*"
      v-on:change="getFile"
      class="file-input file-input-bordered w-64 max-w-lg"
    />
    <button class="btn btn-primary" @click="submitRole()">Submit</button>
  </div>
</template>
