<script setup lang="ts">
const supabase = useSupabaseClient();
const user = useSupabaseUser();
let tutorId = ref(null);
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
    // Push each tutor to the existing tutor array
    tutor = tutor.concat(tutors);
    console.log(tutor);
  }
}

if (tutorIds.length === 0) {
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
          <tr v-for="tut in tutor">
            <td>
              <a :href="`/student/work`">{{ tut.name }}</a>
            </td>
            <td>{{ tut.subjects.join(", ") }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
