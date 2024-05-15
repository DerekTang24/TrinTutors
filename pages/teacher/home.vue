<script setup lang="ts">
const supabase = useSupabaseClient();
const user = useSupabaseUser();
let student = [];
let role_id = ref(null);

const fetchUserRoles = async () => {
  const { data: userRoles, error } = await supabase
    .from("user_roles")
    .select("*")
    .eq("user_id", user.value.id);
  console.log(userRoles);

  if (userRoles.length > 0) {
    userRoles.forEach((role) => {
      role_id.value = role.role_id;
    });
  }
};
await fetchUserRoles();
console.log(role_id.value);

if (role_id.value === 0) {
  const { data: studentList, error } = await supabase
    .from("students")
    .select("*");
  student = studentList;
  console.log(studentList);
}

const { data: teacher_studentId } = await supabase
  .from("teacher_student")
  .select("*");

for (let teachId in teacher_studentId) {
  const { data: students } = await supabase
    .from("students")
    .select("*")
    .eq("id", teacher_studentId[teachId].student_id);

  const { data: allStudents } = await supabase.from("students").select("*");

  if (
    students &&
    students.length > 0 &&
    user.value.id === teacher_studentId[teachId].teacher_id
  ) {
    student.push(students[0]);
  }

  if (
    students &&
    students.length > 0 &&
    user.value.id != teacher_studentId[teachId].teacher_id
  ) {
    student = allStudents;
  }
}
console.log(student);
</script>
<template>
  <div id="tutee_list">
    <h4 id="tutee_list_title" class="font-bold" style="font-size: 24px">
      Students:
    </h4>
    <ul style="list-style-type: disc; padding-left: 20px; font-size: 20px">
      <li class="tutee_point" v-for="stud in student" :key="stud.id">
        <a :href="`/teacher/student?name=${stud.name}`"
          >{{ stud.name }}: {{ stud.subjects.join(", ") }}</a
        >
      </li>
    </ul>
  </div>
</template>
