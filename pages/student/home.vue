<script setup lang="ts">
const supabase = useSupabaseClient();
const user = useSupabaseUser();
console.log(user);

useHead({ title: "Student Home" });

const tutors = [
  { id: 1, name: "Michael", subject: "Mathematics" },
  { id: 2, name: "Jake", subject: "History" },
  { id: 3, name: "David", subject: "English" },
];
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
