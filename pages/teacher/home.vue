<script setup lang="ts">
const supabase = useSupabaseClient();
const supabaseUser = useSupabaseUser();
let student = [];
let tutorNameSlug = "";
const { data: teacher_studentId } = await supabase
  .from("teacher_student")
  .select("*");

for (let teachId in teacher_studentId) {
  console.log("te", teacher_studentId[teachId]);

  const { data: students } = await supabase
    .from("students")
    .select("*")
    .eq("id", teacher_studentId[teachId].student_id);

  const { data: tutor_studentId } = await supabase
    .from("tutor_student")
    .select("tutor_id")
    .eq("student_id", teacher_studentId[teachId].student_id);
  console.log(tutor_studentId[teachId].tutor_id);

  const { data: tutor_student } = await supabase
    .from("tutors")
    .select("name")
    .eq("id", tutor_studentId[teachId].tutor_id);

  console.log(tutor_student[teachId].name);
  tutorNameSlug += tutor_student[teachId].name;
  console.log(tutorNameSlug);

  const { data: allStudents } = await supabase.from("students").select("*");
  console.log(allStudents);

  if (
    students &&
    students.length > 0 &&
    supabaseUser.value.id === teacher_studentId[teachId].teacher_id
  ) {
    student.push(students[0]);
  }

  if (
    students &&
    students.length > 0 &&
    supabaseUser.value.id != teacher_studentId[teachId].teacher_id
  ) {
    student = allStudents;
  }

  console.log(teacher_studentId);
  console.log(student);
  console.log(tutorNameSlug);
}
</script>
<template>
  <div id="tutee_list">
    <h4 id="tutee_list_title" class="font-bold" style="font-size: 24px">
      Students:
    </h4>
    <ul style="list-style-type: disc; padding-left: 20px">
      <li class="tutee_point" v-for="stud in student" :key="stud.id">
        <a :href="'/student/work/' + tutorNameSlug.replace(' ', '-')"
          >{{ stud.name }}: {{ stud.subjects.join(", ") }}</a
        >
      </li>
    </ul>
  </div>
</template>
