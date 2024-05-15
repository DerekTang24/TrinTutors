<script setup lang="ts">
const supabase = useSupabaseClient();
const user = useSupabaseUser();
let student = [];
let tutorStudent = [];
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
const { data: tutor_studentId } = await supabase
  .from("tutor_student")
  .select("*");

// Set to store unique student IDs
let uniqueStudentIds = new Set();

for (let tutorId in tutor_studentId) {
  console.log("te", tutor_studentId[tutorId]);
  const studentId = tutor_studentId[tutorId].student_id;
  tutorStudent.push(studentId);
  // Add the student ID to the set to ensure uniqueness
  uniqueStudentIds.add(studentId);
  console.log(tutorStudent);
  console.log(tutor_studentId);
  console.log(tutorId);
  console.log(tutorStudent[tutorId]);

  // Iterate over the unique student IDs using for...of loop
  for (let id of uniqueStudentIds) {
    console.log(id);
  }

  console.log(uniqueStudentIds);
  console.log(student);
  tutorStudent = Array.from(uniqueStudentIds);
  console.log(tutorStudent[0]);
  const { data: students } = await supabase
    .from("students")
    .select("*")
    .eq("id", tutorStudent[tutorId]);

  console.log(students);
  const { data: allStudents } = await supabase.from("students").select("*");

  if (
    students &&
    students.length > 0 &&
    user.value.id === tutor_studentId[tutorId].tutor_id
  ) {
    student.push(students[0]);
  }

  if (
    students &&
    students.length > 0 &&
    user.value.id != tutor_studentId[tutorId].tutor_id
  ) {
    student = allStudents;
  }

  console.log(user.value.id);
  console.log(students);
}

// Convert the set back to an array
console.log(tutorStudent);
console.log(student);
</script>

<template>
  <div id="student_request_list">
    <h4
      id="student_request_list_title"
      style="font-size: 24px"
      class="font-bold"
    >
      Students
    </h4>
    <ul style="list-style-type: disc; padding-left: 20px; font-size: 20px">
      <li class="tutor_point" v-for="stud in student" :key="stud.id">
        {{ stud.name }}: {{ stud.subjects.join(", ") }}
      </li>
    </ul>
  </div>
</template>
