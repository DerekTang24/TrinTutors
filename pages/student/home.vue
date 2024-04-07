<script setup lang="ts">
const supabase = useSupabaseClient();
const user = useSupabaseUser();
console.log(user);

useHead({ title: "Student Home" });
</script>

<template>
  <div class="flex">
    <div class="table-wrp block min-h-96 overflow-x-auto">
      <h1 class="text-2xl font-bold">Tutors</h1>
      <table class="table-auto table-lg table-zebra flex flex-col">
        <!-- head -->
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Subject</th>
          </tr>
        </thead>
        <tbody>
          <!-- row 1 -->
          <tr>
            <th>1</th>
            <td><a href="#">Michael</a></td>
            <td><a href="#">Mathematics</a></td>
          </tr>
          <!-- row 2 -->
          <tr>
            <th>2</th>
            <td><a href="#">Jake</a></td>
            <td><a href="#">History</a></td>
          </tr>
          <!-- row 3 -->
          <tr>
            <th>3</th>
            <td><a href="#">David</a></td>
            <td><a href="#">English</a></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
