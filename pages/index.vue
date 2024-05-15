<script setup lang="ts"></script>
<template>
  <div class="flex justify-center">
    <div class="max-w-[1920px] w-screen">
      <div class="flex flex-col">
        <div
          class="bg-[url('https://images.pexels.com/photos/2387793/pexels-photo-2387793.jpeg')] bg-center bg-cover"
        >
          <div
            class="flex mt-20 items-center justify-center text-8xl font-bold w-8/12 max-w-[60rem] text-white"
          >
            <p class="ml-20">Master the Trinity curriculum with community</p>
          </div>
          <div class="flex flex-row items-center ml-20 mb-14 mt-10">
            <NuxtLink to="/signup">
              <button class="p-[3px] relative w-40">
                <div
                  class="absolute inset-0 bg-gradient-to-r from-slate-200 to-gray-400 rounded-lg"
                />
                <div
                  class="px-8 py-2 bg-gray-900 rounded-[6px] relative group transition duration-200 text-white hover:bg-transparent"
                >
                  Get Started
                </div>
              </button>
            </NuxtLink>
            <p class="mx-3 text-lg text-slate-100">or</p>
            <NuxtLink to="/login">
              <button class="p-[3px] relative w-40">
                <div
                  class="absolute inset-0 bg-gradient-to-r from-gray-400 to-slate-200 rounded-lg"
                />
                <div
                  class="px-8 py-2 bg-gray-900 rounded-[6px] relative group transition duration-200 text-white hover:bg-transparent"
                >
                  Login
                </div>
              </button>
            </NuxtLink>
          </div>
          <div class="flex justify-center mb-24">
            <div
              class="carousel carousel-center w-9/12 p-4 space-x-4 rounded-box"
            >
              <div
                class="flex flex-col carousel-item w-80 h-96 rounded-box overflow-hidden"
              >
                <div class="flex items-end bg-slate-100 h-24 w-full">
                  <h1 class="ml-5 mb-3 text-4xl font-bold text-gray-900">
                    Experienced
                  </h1>
                </div>
                <div class="flex items-start bg-gray-900 w-full h-full">
                  <p class="mx-5 mt-5 text-2xl text-white">
                    Each and every member of the TrinTutors program is
                    handpicked from only the most experienced Trinity students.
                  </p>
                </div>
              </div>
              <div
                class="flex flex-col carousel-item w-80 h-96 rounded-box overflow-hidden"
              >
                <div class="flex items-end bg-slate-100 h-24 w-full">
                  <h1 class="ml-5 mb-3 text-4xl font-bold text-gray-900">
                    Integrated
                  </h1>
                </div>
                <div class="flex items-start bg-gray-900 w-full h-full">
                  <p class="mx-5 mt-5 text-2xl text-white">
                    TrinTutor works in close collaboration with Trinity teachers
                    and learning speacialists to create a highly
                    learning-conducive environment.
                  </p>
                </div>
              </div>
              <div
                class="flex flex-col carousel-item w-80 h-96 rounded-box overflow-hidden"
              >
                <div class="flex items-end bg-slate-100 h-24 w-full">
                  <h1 class="ml-5 mb-3 text-4xl font-bold text-gray-900">
                    Personal
                  </h1>
                </div>
                <div class="flex items-start bg-gray-900 w-full h-full">
                  <p class="mx-5 mt-5 text-2xl text-white">
                    TrinTutors provides a catered tutoring experience based on
                    student needs to simplify and streamline the learning
                    process.
                  </p>
                </div>
              </div>
              <div
                class="flex flex-col carousel-item w-80 h-96 rounded-box overflow-hidden"
              >
                <div class="flex items-end bg-slate-100 h-24 w-full">
                  <h1 class="ml-5 mb-3 text-4xl font-bold text-gray-900">
                    Student Led
                  </h1>
                </div>
                <div class="flex items-start bg-gray-900 w-full h-full">
                  <p class="mx-5 mt-5 text-2xl text-white">
                    TrinTutors was build by students for students. We know and
                    provide what works.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-row justify-center gap-20 py-28 bg-slate-100">
        <div class="w-1/2 max-w-[40rem] text-justify text-gray-900">
          <h1 class="mb-6 text-6xl text-gray-900 font-bold">Our Problem</h1>
          <div class="flex flex-col gap-4 text-lg">
            <p class=" ">
              Trinity’s rigorous curriculum often makes it difficult for
              students, especially those in Middle and Lower School, to handle
              the heavy workload. While some hire tutors, it costs money and
              time to find the right tutor, who still often doesn’t fully
              understand the Trinity-style workload. They often also have to
              meet with these tutors after school which conflicts with other
              extracurricular activities. Teachers often also have trouble
              understanding where their students are struggling in class because
              they have no means of seeing what their teachers work on with
              their tutors.
            </p>
            <p class="">
              TrinTutors plans to fix this by providing free tutoring on
              specific subjects to Trinity teachers by people who have
              experience with working through the stressful life at Trinity and
              completing their workload efficiently. The teachers could meet
              with these tutors during school to leave time for their other
              activities without causing conflict.
            </p>
          </div>
        </div>
        <div class="w-1/2 max-w-[40rem] text-justify text-gray-900">
          <h1 class="mb-6 text-6xl text-gray-900 font-bold">Our Team</h1>
          <div class="flex justify-around text-sky-700 my-5">
            <div class="flex flex-col items-center rounded-box">
              <div class="avatar">
                <div class="m-2 max-w-44 rounded-full">
                  <img
                    src="https://mwxbxlxljejtrwryanks.supabase.co/storage/v1/object/public/avatars/team/derek.jpg"
                    alt="derek"
                  />
                </div>
              </div>
              <p class="text-lg font-bold">Derek Tang</p>
            </div>
            <div class="flex flex-col items-center rounded-box">
              <div class="avatar">
                <div class="m-2 max-w-44 rounded-full">
                  <img
                    src="https://mwxbxlxljejtrwryanks.supabase.co/storage/v1/object/public/avatars/team/brennan.jpg"
                    alt="Brennan"
                  />
                </div>
              </div>
              <p class="text-lg font-bold">Brennan Cohen</p>
            </div>
            <div class="flex flex-col items-center rounded-box">
              <div class="avatar">
                <div class="m-2 max-w-44 rounded-full">
                  <img
                    src="https://mwxbxlxljejtrwryanks.supabase.co/storage/v1/object/public/avatars/team/lucas.jpg"
                    alt="Lucas"
                  />
                </div>
              </div>
              <p class="text-lg font-bold">Lucas Liow</p>
            </div>
          </div>
          <p class="flex flex-col gap-4 text-lg">
            A team with over a decade of highshool experience, we know the ins
            and outs of ever department, class, and teacher. We also know just
            how tough Trinity can be, leading us to create TrinTutors, a
            tutoring resource for all Trinity students. TrinTutors provides the
            infrastructure for student communication and logicstics so that all
            effort can be dedicated to teaching and learning.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
