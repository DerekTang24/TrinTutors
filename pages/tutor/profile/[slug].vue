<script setup lang="ts">
const supabase = useSupabaseClient();
const route = useRoute();
const tutorName = route.params.slug.replace("-", " ");
let { data: tutors, error } = await supabase
  .from("tutors")
  .select("*")
  .eq("name", tutorName);
const tutor = tutors[0];
</script>
<template>
  <ul id="tutor_profile_list">
    <h4 id="tutor_profile_list_title">Tutor Name: {{ tutor.name }}</h4>
    <img
      src="https://media.licdn.com/dms/image/D4E03AQHK7X1nknUjrg/profile-displayphoto-shrink_800_800/0/1671398895984?e=2147483647&v=beta&t=Snn2B5LaU-vb43KX97wuWhCG31qCVy4AAqXCiNB2O2o"
      class="rounded float-left"
      width="150"
      height="150"
    />
    <li class="tutor_profile_point">Grade: {{ tutor.grade }}</li>
    <li class="tutor_profile_point">Experience: {{ tutor.experience }}</li>
    <li class="tutor_profile_point">Bio: {{ tutor.bio }}</li>
  </ul>
  <button id="tutor_profile_button" class="btn btn-info" type="submit">
    Book Now
  </button>
</template>
