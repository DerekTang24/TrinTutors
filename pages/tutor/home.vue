<script setup lang="ts">
const supabase = useSupabaseClient();
const supabaseUser = useSupabaseUser();
let student = [];
const { data: tutor_studentId } = await supabase
  .from("tutor_student")
  .select("*");

for (let tutorId in tutor_studentId) {
  console.log("te", tutor_studentId[tutorId]);

  const { data: students } = await supabase
    .from("students")
    .select("*")
    .eq("id", tutor_studentId[tutorId].student_id);

  const { data: allStudents } = await supabase.from("students").select("*");

  if (
    students &&
    students.length > 0 &&
    supabaseUser.value.id === tutor_studentId[tutorId].tutor_id
  ) {
    student.push(students[0]);
  }

  if (
    students &&
    students.length > 0 &&
    supabaseUser.value.id != tutor_studentId[tutorId].tutor_id
  ) {
    student = allStudents;
  }

  console.log(supabaseUser.value.id);
  console.log(tutor_studentId[tutorId].tutor_id);
  console.log(students);
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
