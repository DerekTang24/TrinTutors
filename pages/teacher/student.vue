<script setup lang="ts">
import { useRoute } from "vue-router";

const route = useRoute();
const name = route.query.name as string;
const students = ref([]);
const tutorStudents = ref([]);
const tutors = ref([]);
let tutor_students = ref([]);

if (name) {
  const supabase = useSupabaseClient();
  const { data } = await supabase.from("students").select("*").eq("name", name);

  students.value = data || [];

  if (students.value.length > 0) {
    const { data: tutorStudent } = await supabase
      .from("tutor_student")
      .select("*")
      .eq("student_id", students.value[0].id);
    tutorStudents.value = tutorStudent || [];

    for (let i in tutorStudents.value) {
      if (tutorStudent.length > 0) {
        const { data: tutorData } = await supabase
          .from("tutors")
          .select("*")
          .eq("id", tutorStudents.value[i].tutor_id);

        // Add tutorData to tutors array
        tutors.value.push(tutorData);
      }
    }
    for (const innerArray of tutors.value) {
      for (const tutor of innerArray) {
        tutor_students.value.push(tutor);
      }
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
      <li
        class="student_point"
        v-for="tutorArray in tutors"
        :key="tutorArray[0].id"
      >
        <template v-for="tutor in tutorArray">
          {{ tutor.name }}: {{ tutor.subjects.join(", ") }} ({{
            tutor.experience
          }}
          year(s))
          <br />
        </template>
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
