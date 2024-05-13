<script setup lang="ts">
const supabase = useSupabaseClient();
const user = useSupabaseUser();
const route = useRoute();
const tutorName = route.params.slug.replace("-", " ");
const title = ref<string>("");
const date = ref<Date | null>(null);
const student = ref<string>("Student");
const { data: tutors } = await supabase
  .from("tutors")
  .select("*")
  .eq("name", tutorName);
const tutor = tutors[0];
const isAdmin = false;
const isOwner = user.value.id == tutor.id;
const databaseAssignments = async () => {
  if (isOwner || isAdmin) {
    const { data } = await supabase
      .from("assignment")
      .select("*")
      .eq("tutor_id", tutor.id);
    return data;
  } else {
    const { data } = await supabase
      .from("assignment")
      .select("*")
      .eq("tutor_id", tutor.id)
      .eq("student_id", user.value.id);
    return data;
  }
};

const assignments = ref(await databaseAssignments());
const { data: students, error } = await supabase
  .from("tutor_student")
  .select(
    `
    id,
    students (*)
    `,
  )
  .eq("tutor_id", user.value.id);

const createAssignment = async () => {
  const studentId = students.find((e) => {
    return e.students.name == student.value;
  }).students.id;
  const { data } = await supabase
    .from("assignment")
    .insert([
      {
        title: title.value,
        due: date.value,
        tutor_id: user.value.id,
        student_id: studentId,
      },
    ])
    .select();
  assignments.value.push(data[0]);
};

const updateStatus = async (id: string, status: string, index: int) => {
  const { data, error } = await supabase
    .from("assignment")
    .update({ status })
    .eq("id", id)
    .select();
  assignments.value[index].status = status;
};
</script>
<template>
  <div>
    <div v-if="isOwner" class="w-60">
      <div class="form-control">
        <label class="label">
          <span class="label-text">Title:</span>
          <input
            type="text"
            v-model="title"
            placeholder="Title"
            class="input mx-2 border-gray-500 border-1 w-48"
          />
        </label>
      </div>
      <div class="form-control">
        <label class="label">
          <select
            class="select select-bordered w-full max-w-xs"
            v-model="student"
          >
            <option disabled selected>Student</option>
            <option v-for="student in students">
              {{ student.students.name }}
            </option>
          </select>
        </label>
      </div>
      <div class="form-control">
        <label class="label"
          >Due:
          <input class="w-36" type="date" v-model="date" />
        </label>
      </div>
      <button class="btn btn-primary" @click="createAssignment()">
        Create
      </button>
    </div>
    <div class="overflow-y-visible">
      <table class="table">
        <!-- head -->
        <thead>
          <tr>
            <th>Title</th>
            <th>Assigned</th>
            <th>Due</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <!-- row 1 -->
          <tr v-for="(assignment, index) in assignments">
            <td>{{ assignment.title }}</td>
            <td>
              {{ new Date(assignment.assigned).toDateString().slice(0, 10) }}
            </td>
            <td>
              {{ new Date(assignment.due).toDateString().slice(0, 10) }}
            </td>
            <td>
              <div class="dropdown dropdown-right">
                <div tabindex="0" role="button" class="btn m-1 w-28">
                  {{ assignment.status }}
                </div>
                <ul
                  tabindex="0"
                  class="dropdown-content z-[1] menu p-3 shadow bg-base-100 rounded-box w-32"
                >
                  <li>
                    <a @click="updateStatus(assignment.id, 'To Do', index)"
                      >To Do</a
                    >
                  </li>
                  <li>
                    <a
                      @click="updateStatus(assignment.id, 'In Progress', index)"
                      >In Progress</a
                    >
                  </li>
                  <li>
                    <a @click="updateStatus(assignment.id, 'Completed', index)"
                      >Completed</a
                    >
                  </li>
                </ul>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <Chat />
  </div>
</template>
