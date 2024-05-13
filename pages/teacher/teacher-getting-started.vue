<script setup lang="ts">
const supabase = useSupabaseClient();
const supabaseUser = useSupabaseUser();
const selectedStudentIds = ref([] as string[]);

const { data: teacher_students } = await supabase.from("students").select("*");

const submitStudents = async () => {
  if (supabaseUser.value) {
    const selectedIds = selectedStudentIds.value;
    const selectedStudents = teacher_students.filter((student) =>
      selectedIds.includes(student.id),
    );
    const selectedId = selectedStudents.map((student) => student.id);

    for (let selectId in selectedId) {
      console.log("select", selectedId[selectId]);
      const role = await $fetch("/api/teacher-student", {
        method: "POST",
        body: {
          teacher_id: supabaseUser.value.id,
          student_id: selectedId[selectId],
        },
      });
    }
    navigateTo({ path: "/teacher/home" });
  }
};
</script>

<template>
  <div>
    <h4 style="font-size: 20px" class="font-bold">All Students:</h4>
    <ul>
      <li v-for="student in teacher_students" :key="student.id">
        <input
          type="checkbox"
          :id="'student_' + student.id"
          :value="student.id"
          v-model="selectedStudentIds"
        />
        <label :for="'student_' + student.id">{{ student.name }}</label>
      </li>
    </ul>
    <button class="btn btn-primary" @click="submitStudents()">
      Select Students
    </button>
    <div v-if="selectedStudentNames">
      <h4>Selected Students:</h4>
      <ul>
        <li v-for="name in selectedStudentNames" :key="name">{{ name }}</li>
      </ul>
    </div>
  </div>
</template>
