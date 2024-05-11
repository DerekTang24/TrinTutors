<script setup lang="ts">
const supabase = useSupabaseClient();
const user = useSupabaseUser();
const { data: tutorIds, error } = await supabase
  .from("tutor_student")
  .select("tutor_id");
console.log(tutorIds);
const tutors = await Promise.all(
  tutorIds.map(async (tutorId) => {
    const { data: tutors, error } = await supabase
      .from("tutors")
      .select("*")
      .eq("id", tutorId.tutor_id);
    return tutors[0];
  }),
);
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
          <tr v-for="tutor in tutors">
            <td>
              <a :href="`/student/work?name=${tutor.name}`">{{ tutor.name }}</a>
            </td>
            <td>{{ tutor.subjects.join(", ") }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
