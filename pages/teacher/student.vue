<script setup lang="ts">
import { useRoute } from "vue-router";

const route = useRoute();
const name = route.query.name as string;
console.log(name);
const students = ref([]);
const tutorStudents = ref([]);
const tutors = ref([]);

if (name) {
  const supabase = useSupabaseClient();
  const { data } = await supabase.from("students").select("*").eq("name", name);

  students.value = data || [];
  console.log(students.value[0].id);

  if (students.value.length > 0) {
    const { data: tutorStudent } = await supabase
      .from("tutor_student")
      .select("*")
      .eq("student_id", students.value[0].id);
    tutorStudents.value = tutorStudent || [];

    console.log(tutorStudent[0].tutor_id);

    if (tutorStudent.length > 0) {
      const { data: tutorData } = await supabase
        .from("tutors")
        .select("*")
        .eq("id", tutorStudent[0].tutor_id);
      tutors.value = tutorData || [];

      console.log(tutors.value);
    }
  }
}
</script>
<template>
  <div id="student_list" v-for="student in students" :key="student.id">
    <h4 id="student_list_title" class="font-bold" style="font-size: 24px">
      {{ student.name }}:
    </h4>
    <ul style="list-style-type: disc; padding-left: 20px">
      <li class="student_point">{{ student.subjects.join(", ") }}</li>
      <li class="student_point" v-for="tutor in tutors" :key="tutor.id">
        {{ tutor.name }}: {{ tutor.subjects.join(", ") }} ({{
          tutor.experience
        }}
        year(s))
      </li>
    </ul>
  </div>

  <div id="completed_work_list">
    <h5 id="completed_list_title" class="font-bold" style="font-size: 24px">
      Completed Assignments:
    </h5>
    <ul style="list-style-type: disc; padding-left: 20px">
      <li class="work_point"><a class="work_point" href="#"> HW #4</a></li>
      <li class="work_point"><a class="work_point" href="#">HW #5</a></li>
    </ul>
  </div>
</template>
