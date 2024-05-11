<script setup lang="ts">
const supabase = useSupabaseClient();
const user = useSupabaseUser();

const { data: tutors, error } = await supabase.from("tutors").select("*");
</script>
<template>
  <div class="overflow-x-auto">
    <table class="table table-zebra">
      <!-- head -->
      <thead>
        <tr>
          <th>Name</th>
          <th>Grade</th>
          <th>Experience</th>
          <th>Subject(s)</th>
        </tr>
      </thead>
      <tbody>
        <!-- row 1 -->
        <tr v-for="(tutor, index) in tutors">
          <td>
            <nuxtLink
              v-bind:to="'/tutor/profile/' + tutor.name.replace(' ', '-')"
              >{{ tutor.name }}</nuxtLink
            >
          </td>
          <td>{{ tutor.grade }}</td>
          <td>{{ tutor.experience }} year(s)</td>
          <td>{{ tutor.subjects.join(", ") }}</td>
        </tr>
        <!-- row 2 -->
      </tbody>
    </table>
  </div>
</template>
