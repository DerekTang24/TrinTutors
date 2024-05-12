<script setup lang="ts">
const supabase = useSupabaseClient();
const supabaseUser = useSupabaseUser();
let student = [];
const { data: tutor_studentId } = await supabase
  .from("tutor_student")
  .select("student_id");

for (let tutorId in tutor_studentId) {
  console.log("te", tutor_studentId[tutorId]);

  const { data: students } = await supabase
    .from("students")
    .select("*")
    .eq("id", tutor_studentId[tutorId].student_id);

  if (students && students.length > 0) {
    student.push(students[0]);
  }

  console.log(tutor_studentId);
  console.log(student);
}
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
      <li class="tutor_point" v-for="stud in student" :key="stud.id">
        <a :href="`/student/work?name=${stud.name}`"
          >{{ stud.name }}: {{ stud.subjects.join(", ") }}</a
        >
      </li>
    </ul>
  </div>
</template>
