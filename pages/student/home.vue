<script setup lang="ts">
const supabase = useSupabaseClient();
const user = useSupabaseUser();
let tutorId = ref(null);
let role_id = ref(null);
let tutor = [];

const { data: tutorIds } = await supabase
  .from("tutor_student")
  .select("*")
  .eq("student_id", user.value.id);
console.log(tutorIds);

if (tutorIds.length > 0) {
  for (let id in tutorIds) {
    const { data: tutors } = await supabase
      .from("tutors")
      .select("*")
      .eq("id", tutorIds[id].tutor_id);
    console.log("tutors", tutors);
    console.log(tutors[id]);
    tutor = tutor.concat(tutors);
    console.log(tutor);
  }
}

const fetchUserRoles = async () => {
  const { data: userRoles, error } = await supabase
    .from("user_roles")
    .select("*")
    .eq("user_id", user.value.id);

  if (userRoles.length > 0) {
    userRoles.forEach((role) => {
      role_id.value = role.role_id;
      console.log(role_id.value);
    });
  }
};
fetchUserRoles();

if (tutorIds.length === 0 && role_id.value === 0) {
  const { data: allTutors } = await supabase.from("tutors").select("*");
  tutor = allTutors;
  console.log(allTutors);
}
console.log(tutor);
</script>
<template>
  <div class="flex">
    <div class="table-wrp block min-h-96 overflow-x-auto">
      <h1 class="text-2xl font-bold">Tutors</h1>
      <table class="table-auto table-lg table-zebra flex flex-col">
        <thead>
          <tr>
            <th>Name</th>
            <th>Subject</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="tut in tutor" :key="tut.id">
            <td>
              <a :href="'/student/work/' + tut.name.replace(' ', '-')">{{
                tut.name
              }}</a>
            </td>
            <td>{{ tut.subjects.join(", ") }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
