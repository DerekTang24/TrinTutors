<script setup lang="ts">
const supabase = useSupabaseClient();
const user = useSupabaseUser();
let studentId = ref(null);
let students: any[];
const { data: studentIds } = await supabase
  .from("tutor_student")
  .select("*")
  .eq("tutor_id", user.value.id);

if (studentIds.length > 0) {
  students = await Promise.all(
    studentIds.map(async (studentId) => {
      const { data: students, error } = await supabase
        .from("students")
        .select("*")
        .eq("id", studentIds[0].student_id);
      console.log(students[0].name);
      return students[0];
    })
  );
}
console.log(students);
</script>

<template>
  <div id="student_request_list">
    <h4
      id="student_request_list_title"
      style="font-size: 20px"
      class="font-bold"
    >
      Students
    </h4>
    <ul style="list-style-type: disc; padding-left: 20px">
      <li class="tutor_point" v-for="student in students" :key="student.id">
        <a :href="`/student/work?name=${student.name}`"
          >{{ student.name }}: {{ student.subjects.join(", ") }}</a
        >
      </li>
    </ul>
  </div>
</template>
