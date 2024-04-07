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
<<<<<<< Updated upstream
            <td><a href="#">Michael</a></td>
            <td><a href="#">Mathematics</a></td>
=======
            <td><a href="/student/work">Michael</a></td>
            <td><a href="/student/work">Math</a></td>
>>>>>>> Stashed changes
          </tr>
          <!-- row 2 -->
          <tr>
            <th>2</th>
<<<<<<< Updated upstream
            <td><a href="#">Jake</a></td>
            <td><a href="#">History</a></td>
=======
            <td><a href="/student/work">David</a></td>
            <td><a href="/student/work">English</a></td>
>>>>>>> Stashed changes
          </tr>
          <!-- row 3 -->
          <tr>
            <th>3</th>
<<<<<<< Updated upstream
            <td><a href="#">David</a></td>
            <td><a href="#">English</a></td>
=======
            <td><a href="/student/work">John</a></td>
            <td><a href="/student/work">History</a></td>
>>>>>>> Stashed changes
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
