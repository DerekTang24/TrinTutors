<script setup lang="ts">
const supabase = useSupabaseClient();
const supabaseUser = useSupabaseUser();
let role_id = ref(null);
const route = useRoute();
const tutorName = route.params.slug.replace("-", " ");
let { data: tutors, error } = await supabase
  .from("tutors")
  .select("*")
  .eq("name", tutorName);
const tutor = tutors[0];
console.log(tutor.id);
console.log(supabaseUser.value.id);
const bookTutor = async () => {
  if (supabaseUser.value) {
    const role = await $fetch("/api/tutor-student", {
      method: "POST",
      body: {
        tutor_id: tutor.id,
        student_id: supabaseUser.value.id,
      },
    });
  }
};
const fetchUserRoles = async () => {
  const { data: userRoles, error } = await supabase
    .from("user_roles")
    .select("*")
    .eq("user_id", supabaseUser.value.id);

  if (userRoles.length > 0) {
    userRoles.forEach((role) => {
      role_id.value = role.role_id;
      console.log(role_id.value);
    });
  }
};

fetchUserRoles();
</script>
<template>
  <ul id="tutor_profile_list">
    <h4 id="tutor_profile_list_title">Tutor Name: {{ tutor.name }}</h4>
    <li class="tutor_profile_point">Grade: {{ tutor.grade }}</li>
    <li class="tutor_profile_point">
      Experience: {{ tutor.experience }} year(s)
    </li>
    <li class="tutor_profile_point">Bio: {{ tutor.bio }}</li>
  </ul>
  <button
    v-if="role_id === 1"
    id="tutor_profile_button"
    class="btn btn-info"
    @click="bookTutor()"
  >
    Book Now
  </button>
</template>
