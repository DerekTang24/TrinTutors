<script setup lang="ts">
const supabase = useSupabaseClient();
const user = useSupabaseUser();
let studentName = [];

const { data: teachers } = await supabase
  .from("teacher_student")
  .select("student_id")
  .eq("teacher_id", user.value.id);
console.log(teachers);

for (let i in teachers) {
  const { data: students } = await supabase
    .from("students")
    .select("name")
    .eq("id", teachers[i].student_id);

  console.log(students);

  for (let student in students) {
    studentName.push(students[student].name);
  }
}
console.log(studentName);
const signOut = async () => {
  console.log("signout");
  const { error } = await supabase.auth.signOut();
  if (error) console.log(error);
  else {
    await navigateTo({ path: "/login" });
  }
};
</script>

<template>
  <div class="navbar bg-base-100">
    <div class="flex justify-between items-center w-full">
      <div class="navbar-start">
        <NuxtLink class="btn btn-ghost text-xl">TrinTutors</NuxtLink>
      </div>
      <div
        class="navbar-center flex items-center"
        v-for="student in studentName"
        :key="student.id"
      >
        <NuxtLink class="mx-4" to="/teacher/home">Home</NuxtLink>
        <NuxtLink
          class="mx-4"
          :to="`/teacher/student?name=${student.replace(/\s/g, '+')}`"
          >Student</NuxtLink
        >
      </div>
      <div class="navbar-end flex items-end">
        <button v-if="user" class="btn" @click="signOut">Sign Out</button>
      </div>
    </div>
  </div>
</template>
