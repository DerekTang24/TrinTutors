<script setup lang="ts"></script>
<template>
  <div>
    <ul class="menu bg-base-200 w-56 rounded-box">
      <h1 class="text-lg font-bold">Menu</h1>
      <li>
        <h2 class="menu-title">Student</h2>
        <ul>
          <li><NuxtLink to="/student/home">Home</NuxtLink></li>
          <li><NuxtLink to="/student/work">Work</NuxtLink></li>
        </ul>
      </li>
      <li>
        <h2 class="menu-title">Tutor</h2>
        <ul>
          <li><NuxtLink to="/tutor/home">Home</NuxtLink></li>
          <li><NuxtLink to="/tutor/list">List</NuxtLink></li>
        </ul>
      </li>
      <li>
        <h2 class="menu-title">Teacher</h2>
        <ul>
          <li><NuxtLink to="/teacher/home">Home</NuxtLink></li>
          <li><NuxtLink to="/teacher/student">Student</NuxtLink></li>
        </ul>
      </li>
    </ul>
  </div>
</template>
