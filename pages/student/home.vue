<script setup lang="ts">
const supabase = useSupabaseClient();
const user = useSupabaseUser();
useHead({ title: "Student Home" });
let { data: tutors, error } = await supabase
  .from("tutors")
  .select("*")
  .range(0, 9);
</script>

<template>
  <div class="flex">
    <div class="table-wrp block min-h-96 overflow-x-auto">
      <h1 class="text-2xl font-bold">Tutors</h1>
      <table class="table-auto table-lg table-zebra flex flex-col">
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Subject</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="tutor in tutors" :key="tutor.id">
            <th>{{ tutor.id }}</th>
            <td>
              <a :href="`/student/work?name=${tutor.name}`">{{ tutor.name }}</a>
            </td>
            <td>{{ tutor.subject }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
