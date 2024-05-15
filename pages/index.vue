<script setup lang="ts"></script>
<template>
  <div>
    <h1 class="text-5xl font-bold text-center my-6">Welcome to TrinTutors!</h1>
    <div class="flex flex-col items-center mb-4">
      <div class="w-8/12 text-justify">
        <p class="my-3">
          Trinity’s rigorous curriculum often makes it difficult for students,
          especially those in Middle and Lower School, to handle the heavy
          workload. While some hire tutors, it costs money and time to find the
          right tutor, who still often doesn’t fully understand the
          Trinity-style workload. They often also have to meet with these tutors
          after school which conflicts with other extracurricular activities.
          Teachers often also have trouble understanding where their students
          are struggling in class because they have no means of seeing what
          their teachers work on with their tutors.
        </p>
        <p class="my-3">
          TrinTutors plans to fix this by providing free tutoring on specific
          subjects to Trinity teachers by people who have experience with
          working through the stressful life at Trinity and completing their
          workload efficiently. The teachers could meet with these tutors during
          school to leave time for their other activities without causing
          conflict.
        </p>
      </div>
    </div>
    <div class="flex flex-col items-center">
      <div class="flex flex-col items-left">
        <NuxtLink to="/signup">
          <button class="p-[3px] relative w-40">
            <div
              class="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg"
            />
            <div
              class="px-8 py-2 bg-black rounded-[6px] relative group transition duration-200 text-white hover:bg-transparent"
            >
              Get Started
            </div>
          </button>
        </NuxtLink>
        <NuxtLink to="/login">
          <button class="p-[3px] relative w-40">
            <div
              class="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg"
            />
            <div
              class="px-8 py-2 bg-black rounded-[6px] relative group transition duration-200 text-white hover:bg-transparent"
            >
              Login
            </div>
          </button>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
